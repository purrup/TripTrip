(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1641c88a"],{"4a33":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto my-auto d-flex flex-wrap justify-center",attrs:{id:"login",width:"560","max-width":"560",tile:"",height:"650"}},[s("v-col",{staticClass:"d-flex flex-wrap justify-center align-content-space-around",attrs:{cols:"12",sm:"10",md:"10"}},[s("v-card-title",[t._v("Login")]),s("v-card-text",[s("div",{staticClass:"d-flex flex-column flex-wrap justify-center align-content-space-around",attrs:{id:"third-party-btn"}},[s("v-btn",{attrs:{color:"error",outlined:"",large:"","min-width":"380"},on:{click:t.googleLogin}},[t._v("google")]),s("v-btn",{staticClass:"mt-7",attrs:{color:"info",outlined:"",large:"","min-width":"380"},on:{click:t.facebookLogin}},[t._v("facebook")])],1),s("v-divider",{staticClass:"my-8 mx-auto"}),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{staticClass:"my-3",attrs:{rules:t.emailRules,label:"E-mail","prepend-icon":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{staticClass:"mb-3",attrs:{rules:t.passwordRules,type:t.showPassword?"text":"password",label:"Password","prepend-icon":"lock","append-icon":t.showPassword?"visibility":"visibility_off",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),s("v-btn",{attrs:{color:"success",outlined:"",large:"","min-width":"380"},on:{click:t.submit}},[t._v("登入")]),s("v-col",{staticClass:"d-flex justify-end mt-12",attrs:{cols:"auto"}},[s("router-link",{staticClass:"body-2 mr-5",attrs:{to:"/signup"}},[t._v("註冊帳號")]),s("router-link",{staticClass:"body-2",attrs:{to:"/signup'}"}},[t._v("忘記密碼？")])],1)],1)],1)},r=[],i=s("2f62"),o={data(){return{valid:!0,email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],password:"",passwordRules:[t=>!!t||"Password is required",t=>t&&t.length>=4||"Password must be more than 6 characters"],showPassword:!1}},methods:{...Object(i["b"])("account",["signin"]),async submit(){try{this.$refs.form.validate()&&(await this.signin({email:this.email,password:this.password}),this.$router.push(this.$route.query.redirect?this.$route.query.redirect:"/"))}catch(t){401===t.response.status?console.log("密碼錯"):console.log(t.response)}},facebookLogin(){window.location="https://triptrip-backend.herokuapp.com/facebook"},googleLogin(){window.location="https://triptrip-backend.herokuapp.com/google"}}},n=o,l=(s("70ce"),s("2877")),c=s("6544"),d=s.n(c),u=s("8336"),h=s("b0af"),f=s("99d9"),p=s("62ad"),m=s("ce7e"),b=s("4bd4"),g=s("8654"),v=Object(l["a"])(n,a,r,!1,null,"7303069a",null);e["default"]=v.exports;d()(v,{VBtn:u["a"],VCard:h["a"],VCardText:f["a"],VCardTitle:f["b"],VCol:p["a"],VDivider:m["a"],VForm:b["a"],VTextField:g["a"]})},"4b85":function(t,e,s){},"4bd4":function(t,e,s){"use strict";var a=s("3206");e["a"]=Object(a["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"62ad":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),r=s("d9f7"),i=s("80d2");const o=["sm","md","lg","xl"],n=(()=>{return o.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return o.reduce((t,e)=>{return t["offset"+Object(i["u"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return o.reduce((t,e)=>{return t["order"+Object(i["u"])(e)]={type:[String,Number],default:null},t},{})})(),d={col:Object.keys(n),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let a=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");a+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(a+=`-${s}`,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:a,parent:i}){let o="";for(const r in e)o+=String(e[r]);let n=h.get(o);if(!n){let t;for(t in n=[],d)d[t].forEach(s=>{const a=e[s],r=u(t,s,a);r&&n.push(r)});const s=n.some(t=>t.startsWith("col-"));n.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(o,n)}return t(e.tag,Object(r["a"])(s,{class:n}),a)}})},"6b02":function(t,e,s){},"70ce":function(t,e,s){"use strict";var a=s("6b02"),r=s.n(a);r.a},"99d9":function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return o});var a=s("80d2"),r=s("b0af");const i=Object(a["f"])("v-card__actions"),o=Object(a["f"])("v-card__text"),n=Object(a["f"])("v-card__title");r["a"]},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),r=s("297c"),i=s("1c87"),o=s("58df");e["a"]=Object(o["a"])(r["a"],i["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...i["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},d9f7:function(t,e,s){"use strict";
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function a(){const t={};let e,s,a=arguments.length;while(a--)for(e of Object.keys(arguments[a]))switch(e){case"class":case"style":case"directives":Array.isArray(t[e])||(t[e]=[]),t[e]=t[e].concat(arguments[a][e]);break;case"staticClass":if(!arguments[a][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[a][e].trim();break;case"on":case"nativeOn":t[e]||(t[e]={});const r=t[e];for(s of Object.keys(arguments[a][e]||{}))r[s]?r[s]=Array().concat(r[s],arguments[a][e][s]):r[s]=arguments[a][e][s];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[e]||(t[e]={}),t[e]={...arguments[a][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[a][e])}return t}s.d(e,"a",function(){return a})}}]);
//# sourceMappingURL=chunk-1641c88a.a00e5bcf.js.map