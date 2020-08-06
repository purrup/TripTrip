const mongoose = require('mongoose')
const User = require('../models/user')
const userData = require('../data/user.json')
const bcrypt = require('bcrypt')
const dbpath = process.env.MONGODB_URI || 'mongodb://localhost/trip-planer'

mongoose.connect(dbpath, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('error:: failed to connect to mongodb.')
})

db.once('open', async () => {
  console.log('success:: connected to mongodb!')
  try {
    const userSeeds = await User.db.db.listCollections({
      name: 'users'
    }).toArray()
    if (userSeeds.length > 0) {
      db.dropCollection('users')
      console.log('successfully dropping users collection')
    }
    const users = userData.data.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    }))
    await User.insertMany(users)
    console.log('successfully writing seed data')
    process.exit(0)
  } catch (error) {
    console.log(error)
    console.log('fail to drop users collection')
  }

  // db.dropCollection('users')
  //   .then(() => {
  //     console.log('successfully dropping users collection')
  //     const users = userData.data.map(user => ({
  //       ...user,
  //       password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  //     }))

  //     User.insertMany(users)
  //       .then(users => {
  //         console.log('successfully writing seed data')
  //         process.exit(0)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     console.log('fail to drop users collection')
  //   })
})
