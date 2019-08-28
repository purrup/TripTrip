const Trip = require('../models/trip')
const User = require('../models/user')

const tripController = {
  async getPopularTrips (req, res) {
    try {
      const trips = await Trip.find({}).sort({ collectingCounts: 'desc' })
      const popularTrips = trips.slice(0, 4)
      res.status(200).send(popularTrips)
    } catch (error) {
      console.log(error)
      res.status(404).end()
    }
  },
  async getTrips (req, res) {
    let { country, cities } = req.query
    // query string preprocessing
    if (country === '台灣') {
      country = '臺灣'
    }
    if (!cities) {
      cities = []
    } else {
      cities = JSON.parse(cities)
    }
    // 根據 query string 進行搜尋及回傳
    if (!country) {
      res.status(400).send('未填入欲選取的行程國家！')
      return
    }
    if (cities.length === 0) {
      try {
        const trips = await Trip.find({ country })
        res.status(200).send(trips)
      } catch (error) {
        console.log(error)
        res.status(404).end()
      }
    } else {
      try {
        const trips = await Trip.find({ country: country })
        const selectedTrips = trips.filter(trip => {
          let includeCity = false
          cities.forEach(city => {
            if (trip.cities.includes(city)) {
              includeCity = true
            }
          })
          return includeCity
        })
        res.status(200).send(selectedTrips)
      } catch (error) {
        console.log(error)
        res.status(404).ends()
      }
    }
  },
  async getTrip (req, res) {
    try {
      const trip = await Trip.findById(req.params.id)
      res.status(200).send(trip)
    } catch (error) {
      console.log(error)
      res.status(404).end()
    }
  },
  async createTrip (req, res) {
    const data = req.body
    if (!data.name || !data.days || !data.country || !data.cities || !data.startDate || !data.isPrivate || !data.journal || !data.content || !data.sites) {
      res.status(400).send('缺少必要的行程資訊！')
      return
    }
    try {
      const trip = await Trip.create({
        ...data,
        userId: req.user.id,
        startDate: new Date(data.startDate)
      })
      res.status(200).send(trip)
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async updateTrip (req, res) {
    const data = req.body
    try {
      let trip = await Trip.findById(req.params.id)
      trip = Object.assign(trip, data)
      trip.markModified('content')
      trip.markModified('sites')
      trip.markModified('comments')
      trip.save()
      res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async deleteTrip (req, res) {
    try {
      const trip = await Trip.findByIdAndDelete(req.params.id)
      if (!trip) {
        res.status(404).end()
        return
      }
      res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async toggleCollectingTrip (req, res) {
    try {
      const trip = await Trip.findById(req.params.id)
      const user = await User.findById(req.user.id)
      if (trip.collectingUsers.includes(req.user.id)) {
        const userIdIndex = trip.collectingUsers.findIndex(id => id === req.user.id)
        trip.collectingUsers.splice(userIdIndex, 1)
        trip.collectingCounts -= 1
        const tripIdIndex = user.collectedTrips.findIndex(id => id === req.params.id)
        user.collectedTrips.splice(tripIdIndex, 1)
      } else {
        trip.collectingUsers.push(req.user.id)
        trip.collectingCounts += 1
        user.collectedTrips.push(req.params.id)
      }
      trip.markModified('collectingUsers')
      user.markModified('collectedTrips')
      trip.save()
      user.save()
      res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async forkTrip (req, res) {
    try {
      const trip = await Trip.findById(req.params.id)
      if (!trip) {
        res.status(404).end()
        return
      }
      const { name, days, country, cities, startDate, content, sites } = trip
      const newTrip = await Trip.create({
        userId: req.user.id,
        isPrivate: false,
        name,
        days,
        country,
        cities,
        startDate,
        content,
        sites
      })
      res.status(200).send(newTrip)
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async rateTrip (req, res) {
    const { rating } = req.body
    if (!rating) {
      res.status(400).send('未傳送評分！')
      return
    }
    try {
      const trip = await Trip.findById(req.params.id)
      const user = await User.findById(req.user.id)
      const userRatingObject = user.ratedTrips.find(trip => trip.id === req.params.id)
      if (!userRatingObject) {
        trip.rating = (trip.rating * trip.ratingCounts + rating) / (trip.ratingCounts + 1)
        trip.ratingCounts += 1
        user.ratedTrips.push({
          id: req.params.id,
          userRating: rating
        })
      } else {
        trip.rating = (trip.rating * trip.ratingCounts - userRatingObject.rating + rating) / trip.ratingCounts
        userRatingObject.userRating = rating
      }
      user.markModified('ratedTrips')
      user.save()
      trip.save()
      res.status(200).end()
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async handleTripComment (req, res) {
    const { text, commentId } = req.body
    let message = {}
    if (!text && !commentId) {
      res.status(400).send('未攜帶正確資訊！')
      return
    }
    try {
      const trip = await Trip.findById(req.params.id)
      if (!commentId) {
        const newComment = {
          id: req.user.id + new Date().getTime(),
          date: new Date(),
          userId: req.user.id,
          userName: req.user.lastName + ' ' + req.user.firstName,
          text: text
        }
        message = newComment
        trip.comments.push(newComment)
      } else if (!text) {
        const commentIndex = trip.comments.findIndex(comment => comment.id === commentId)
        if (commentIndex === -1) {
          res.status(404).end()
          return
        }
        trip.comments.splice(commentIndex, 1)
      } else {
        const comment = trip.comments.find(comment => comment.id === commentId)
        if (!comment) {
          res.status(404).end()
          return
        }
        comment.text = text
        comment.date = new Date()
      }
      trip.markModified('comments')
      trip.save()
      res.status(200).send(message)
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  },
  async handleTripReply (req, res) {
    const { text, replyId } = req.body
    let message = {}
    if (!text && !replyId) {
      res.status(404).send('未攜帶正確資訊！')
      return
    }
    try {
      const trip = await Trip.findById(req.params.id)
      const comment = trip.comments.find(comment => comment.id === req.params.commentId)
      if (!replyId) {
        const newReply = {
          id: req.user.id + new Date().getTime(),
          date: new Date(),
          userId: req.user.id,
          userName: req.user.lastName + ' ' + req.user.firstName,
          text: req.body.text
        }
        message = newReply
        // 如果此則留言尚未有任何回覆
        if (!comment.replies) {
          comment.replies = []
        }
        comment.replies.push(newReply)
      } else if (!text) {
        const replyIndex = comment.replies.findIndex(reply => reply.id === replyId)
        if (replyIndex === -1) {
          res.status(404).end()
          return
        }
        comment.replies.splice(replyIndex, 1)
      } else {
        const reply = comment.replies.find(reply => reply.id === replyId)
        if (!reply) {
          res.status(404).end()
          return
        }
        reply.text = text
        reply.date = new Date()
      }
      trip.markModified('comments')
      trip.save()
      res.status(200).send(message)
    } catch (error) {
      console.log(error)
      res.status(500).end()
    }
  }
}

module.exports = tripController