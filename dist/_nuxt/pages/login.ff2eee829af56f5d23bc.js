webpackJsonp([4],{"38tP":function(t,e,s){"use strict";var r=s("8TQF"),n=s("EBO3"),i=s("VU/8")(r.a,n.a,!1,null,null,null);i.options.__file="components/Signin.vue",e.a=i.exports},"8TQF":function(t,e,s){"use strict";e.a={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onSigninGoogle:function(){this.$store.dispatch("signUserInGoogle")},onDismissed:function(){this.$store.dispatch("clearError")}}}},EBO3:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1):t._e(),s("v-layout",{attrs:{row:""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("v-layout",{attrs:{row:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-layout",{attrs:{row:""}},[s("div",{staticClass:"text-xs-center"},[s("v-btn",{attrs:{round:"",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                  Sign in\n                  "),s("v-icon",{attrs:{right:""}},[t._v("lock_open")]),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)],1)],1),s("div",{staticClass:"text-xs-center"},[s("v-btn",{staticClass:"red",attrs:{round:"",dark:"",disabled:t.loading,loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSigninGoogle(e)}}},[t._v("Login with Google\n                  "),s("v-icon",{attrs:{right:"",dark:""}},[t._v("lock_open")]),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)],1)],1)])],1)])],1)],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},"V7+B":function(t,e,s){"use strict";var r=s("38tP");e.a={middleware:["loginRedirect"],computed:{user:function(){return this.$store.getters.user}},components:{appSignin:r.a}}},XyyL:function(t,e,s){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[null===this.user?e("h1",[this._v("Login")]):e("h1",[this._v("Logged in as "+this._s(this.user.displayName))]),e("app-signin")],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},bIR0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("V7+B"),n=s("XyyL"),i=s("VU/8")(r.a,n.a,!1,null,null,null);i.options.__file="pages/login.vue",e.default=i.exports}});