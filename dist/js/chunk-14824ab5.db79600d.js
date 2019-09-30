(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14824ab5"],{"029e":function(t,e,i){},"1d4d":function(t,e,i){"use strict";i("696f");var s=i("9d26"),n=i("a9ad"),r=i("16b7"),o=i("af2b"),a=i("5311"),l=i("7560"),c=i("80d2"),h=i("58df");e["a"]=Object(h["a"])(n["a"],r["a"],a["a"],o["a"],l["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$vuetify.icons.ratingEmpty"},fullIcon:{type:String,default:"$vuetify.icons.ratingFull"},halfIcon:{type:String,default:"$vuetify.icons.ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,medium:e,large:i,light:s,small:n,size:r,xLarge:o}=this.$props;return{dark:t,medium:e,large:i,light:s,size:r,small:n,xLarge:o}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const i=this.genHoverIndex(e,t);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let i=this.isHalfEvent(t);return this.$vuetify.rtl&&(i=!i),e+(i?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,i=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(t,e)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const i={click:e.click};return this.hover&&(i.mouseenter=e=>this.onMouseEnter(e,t),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(s["a"],this.setTextColor(this.getColor(e),{directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(e)])}},render(t){const e=Object(c["e"])(Number(this.length)).map(t=>this.genItem(t));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}})},"1e09":function(t,e,i){},"2f53":function(t,e,i){"use strict";var s=i("4971"),n=i.n(s);n.a},"3e35":function(t,e,i){"use strict";var s=i("9d65"),n=i("4e82"),r=i("c3f0"),o=i("80d2"),a=i("58df");const l=Object(a["a"])(s["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterEnter(){this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(()=>{this.windowGroup.internalHeight=void 0,this.windowGroup.isActive=!1})},onBeforeEnter(){this.windowGroup.isActive=!0},onBeforeLeave(t){this.windowGroup.internalHeight=Object(o["c"])(t.clientHeight)},onEnterCancelled(){this.wasCancelled=!0},onEnter(t,e){const i=this.windowGroup.isBooted;i&&(this.done=e),this.$nextTick(()=>{if(!this.computedTransition)return e();this.windowGroup.internalHeight=Object(o["c"])(t.clientHeight),!i&&setTimeout(e,100)})},onTransitionEnd(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render(t){return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[this.genWindowItem()])}}),h=i("adda"),d=i("1c87");const u=Object(a["a"])(c,d["a"]);e["a"]=u.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(h["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners},this.$slots.default)]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.showLazyContent(this.genDefaultSlot()))},onBeforeEnter(){},onEnter(){},onAfterEnter(){},onEnterCancelled(){}}})},4971:function(t,e,i){},"52f9":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"little-card-root"},[i("v-carousel",{attrs:{height:"144","hide-delimiter-background":"","hide-delimiters":"","next-icon":1!==t.images.length&&"$vuetify.icons.next","prev-icon":1!==t.images.length&&"$vuetify.icons.prev"}},t._l(t.images,function(t){return i("v-carousel-item",{key:t,attrs:{src:t}})}),1),i("div",{staticClass:"card-content"},[i("rating-favorite",{attrs:{item:t.item,type:t.type}})],1)],1)},n=[],r=i("d22d"),o={components:{RatingFavorite:r["a"]},props:{item:Object,type:String},data(){return{images:[]}},created(){"site"===this.type?(this.images=this.item.photos,console.log(this.images)):this.images=this.item.images,0===this.images.length&&this.images.push(i("aa53"))}},a=o,l=(i("c7ca"),i("2877")),c=i("6544"),h=i.n(c),d=i("b0af"),u=i("5e66"),m=i("3e35"),v=Object(l["a"])(a,s,n,!1,null,null,null);e["a"]=v.exports;h()(v,{VCard:d["a"],VCarousel:u["a"],VCarouselItem:m["a"]})},"5e66":function(t,e,i){"use strict";i("63b7");var s=i("f665"),n=i("afdd"),r=i("9d26"),o=i("37c6"),a=i("604c"),l=a["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return a["a"].options.computed.classes.call(this)}},methods:{genData:a["a"].options.methods.genData}}),c=i("80d2"),h=i("d9bd");e["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const t=this.$createElement(n["a"],{staticClass:"v-carousel__controls__item",props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(r["a"],{props:{size:18}},this.delimiterIcon)]);e.push(t)}return this.$createElement(l,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(o["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=s["a"].options.render.call(this,t);return e.data.style=`height: ${Object(c["c"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},6309:function(t,e,i){},"63b7":function(t,e,i){},"696f":function(t,e,i){},9954:function(t,e,i){"use strict";var s=i("6309"),n=i.n(s);n.a},aa53:function(t,e,i){t.exports=i.p+"img/5.ccc16904.jpg"},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),r=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(n["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b763:function(t,e,i){"use strict";var s=i("029e"),n=i.n(s);n.a},c7ca:function(t,e,i){"use strict";var s=i("1e09"),n=i.n(s);n.a},d22d:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rating-favorite-root"},[i("h4",{on:{click:function(e){return t.changeRouter(t.id)}}},[t._v(t._s(t.name))]),i("div",[i("v-icon",{attrs:{size:"15",color:"#FB9026"}},[t._v("star")]),i("span",{style:{color:"#FB9026"}},[t._v(t._s(t.rating))]),i("span",{style:{color:"#999999"}},[t._v("  ( "+t._s(t.commentCounts)+"則評論 | "+t._s(t.collectingCounts+t.counts)+" 人將此收藏 )")])],1),i("v-icon",{staticClass:"favorite-icon",style:{color:t.showWhichIcon?"red":"grey"},on:{mouseover:function(e){t.isOnHover=!0},mouseout:function(e){t.isOnHover=!1},click:function(e){return t.toggle(t.id)}}},[t._v(t._s(t.showWhichIcon?"favorite":"favorite_border"))]),t._t("cancel")],2)},n=[],r=i("2f62"),o={props:{item:Object,type:String},data(){return{isOnHover:!1,name:"",rating:0,commentCounts:0,collectingCounts:0,counts:0,id:""}},created(){this.name=this.item.name,this.rating=this.item.rating,this.collectingCounts=this.item.collectingCounts,"site"===this.type?(this.commentCounts=this.item.reviews.length?this.item.reviews.length:0,this.id=this.item.placeId):(this.commentCounts=this.item.comments.length,this.id=this.item._id)},computed:{...Object(r["c"])("account",{collectedSites:"getCollectedSites",collectedTrips:"getCollectedTrips"}),isFavorite(){return"site"===this.type?this.collectedSites.includes(this.id):this.collectedTrips.includes(this.id)},showWhichIcon(){return this.isFavorite?!this.isOnHover:this.isOnHover}},methods:{...Object(r["b"])("account",["toggleCollectedSite","toggleCollectedTrip"]),toggle(t){"site"===this.type?this.toggleCollectedSite(t):this.toggleCollectedTrip(t),this.isFavorite?this.counts+=1:this.counts-=1},changeRouter(t){if("site"===this.type){if("Site"===this.$route.name)return;this.$router.push(`/sites/${t}`)}else this.$router.push(`/trips/${t}`)}}},a=o,l=(i("b763"),i("2877")),c=i("6544"),h=i.n(c),d=i("132d"),u=Object(l["a"])(a,s,n,!1,null,null,null);e["a"]=u.exports;h()(u,{VIcon:d["a"]})},e910:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"site-root"}},[i("div",{staticClass:"image-container"},t._l(t.site.photos.slice(0,5),function(t){return i("div",{style:{"background-image":"url("+t+")"}})}),0),i("div",{staticClass:"main"},[i("div",{staticClass:"content"},[void 0!==t.site._id?i("site-info",{attrs:{site:t.site}}):t._e(),i("div",{staticClass:"comment-container"},[i("div",[i("span",[t._v(t._s(t.site.reviews.length)+" 則評論")]),i("span",[t._v("(以下內容來自為google地圖)")])]),t._l(t.site.reviews,function(e){return i("div",{staticClass:"comment-wrapper"},[i("div",[i("img",{attrs:{src:e.profile_photo_url}}),i("div",[i("h4",[t._v(t._s(e.author_name))]),i("span",[t._v(t._s(e.relative_time_description))]),i("v-rating",{attrs:{color:"#FB9026","background-color":"#7F7F7F","empty-icon":"$vuetify.icons.ratingFull","half-increments":"",size:"15px",dense:"",readonly:""},model:{value:e.rating,callback:function(i){t.$set(e,"rating",i)},expression:"comment.rating"}})],1)]),i("div",[i("p",[t._v(t._s(e.text))])])])})],2)],1),0!==t.trips.length?i("div",{staticClass:"recommendation-lits"},[i("p",[t._v("包含此景點的行程")]),t._l(t.trips,function(t){return i("little-card",{key:"little-card-"+t.name,attrs:{item:t,type:"trip"}})})],2):t._e()])])},n=[],r=i("fd80"),o=i("52f9"),a=i("0e8e"),l={components:{SiteInfo:r["a"],LittleCard:o["a"]},data(){return{site:{photos:[],reviews:[]},trips:[]}},async created(){await this.getSite()},methods:{async getSite(){try{const{site:e,trips:i}=await a["a"].getSite(this.$route.params.id);this.site=e,this.trips=i}catch(t){console.log(t)}}}},c=l,h=(i("2f53"),i("2877")),d=i("6544"),u=i.n(d),m=i("1d4d"),v=Object(h["a"])(c,s,n,!1,null,"1ade367b",null);e["default"]=v.exports;u()(v,{VRating:m["a"]})},fd80:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site-info-root"},[i("div",[i("rating-favorite",{attrs:{item:t.site,type:"site"}})],1),t._l(t.infos,function(e){return i("div",{staticClass:"info-wrapper"},[i("v-icon",[t._v(t._s(e.icon))]),i("span",[t._v(t._s(e.title)+":  ")]),"官方網站"===e.title?[i("a",{attrs:{href:e.content}},[t._v(t._s(e.content))])]:"營業時間"===e.title?[i("div",{staticClass:"opening-hours"},t._l(e.content,function(e){return i("span",[t._v(t._s(e))])}),0)]:[i("span",[t._v(t._s(e.content))])]],2)})],2)},n=[],r=i("d22d"),o={components:{RatingFavorite:r["a"]},props:{site:Object},data(){return{infos:[{type:"formatted_address",icon:"location_on",title:"地址",content:""},{type:"formatted_phone_number",icon:"phone",title:"聯絡電話",content:""},{type:"website",icon:"language",title:"官方網站",content:""}],moreInfos:[{type:"opening_hours",icon:"access_time",title:"營業時間",content:""}]}},created(){this.$route.path===`/sites/${this.site.placeId}`&&(this.infos=[...this.infos,...this.moreInfos]),this.infos.forEach((t,e)=>{t.content=this.site[t.type]})}},a=o,l=(i("9954"),i("2877")),c=i("6544"),h=i.n(c),d=i("132d"),u=Object(l["a"])(a,s,n,!1,null,null,null);e["a"]=u.exports;h()(u,{VIcon:d["a"]})}}]);
//# sourceMappingURL=chunk-14824ab5.db79600d.js.map