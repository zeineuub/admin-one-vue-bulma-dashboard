(function(e){function t(t){for(var s,l,o=t[0],r=t[1],c=t[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},n=[];function l(e){return o.p+"js/"+({"client-form":"client-form",forms:"forms","full-page":"full-page",profile:"profile",tables:"tables"}[e]||e)+"."+{"client-form":"692bdfe2",forms:"ae42168d","full-page":"e37cbbe5",profile:"a49c55be",tables:"e23d7d2f"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=l(e);var c=new Error;n=function(t){r.onerror=r.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin-one-vue-bulma-dashboard/",o.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",e._l(e.titleStack,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-info",attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"}},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[e._v("Star on GitHub")])],1)])])])])])},i=[],n={name:"TitleBar",props:{titleStack:{type:Array,default:()=>[]}}},l=n,o=a("2877"),r=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=r.exports},"226e":function(e,t,a){e.exports=a.p+"img/justboil-logo.7298fabb.svg"},"2b9d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isDismissed?e._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[e._t("default")],2)]),a("div",{staticClass:"level-right"},[e.hasRightSlot?e._t("right"):a("b-button",{attrs:{"native-type":"button",type:"is-white",size:"is-small"},on:{click:e.dismiss}},[e._v(" Dismiss ")])],2)])])},i=[],n={name:"Notification",data(){return{isDismissed:!1}},computed:{hasRightSlot(){return this.$slots.right}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},l=n,o=a("2877"),r=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=r.exports},"503b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("right")],2)])])])])},i=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},l=n,o=a("2877"),r=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=r.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("b107");var s=a("2b0e"),i=a("289d"),n=a("8c4f"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-bar",{attrs:{"title-stack":e.titleStack}}),a("hero-bar",{attrs:{"has-right-visible":!1}},[e._v(" Dashboard ")]),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[e._v(" Please star this project on GitHub "),a("a",{staticClass:"button is-white is-small",attrs:{slot:"right",href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"},slot:"right"},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[e._v("GitHub")])],1)]),a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":e.fillChartData}},[e.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":e.chartData,"extra-options":e.chartOptions}})],1):e._e()]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients"}},[a("clients-table-sample")],1)],1)],1)},o=[];const r={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},c={maintainAspectRatio:!1,legend:{display:!1},responsive:!0,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}},u=e=>{const t=[];for(let a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},d=(e,t)=>({fill:!1,borderColor:r.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:r.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:r.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:u(t),tension:.5,cubicInterpolationMode:"default"}),m=(e=9)=>{const t=[];for(let a=1;a<=e;a++)t.push("0"+a);return{labels:t,datasets:[d("primary",e),d("info",e),d("danger",e)]}};var p,b,h=a("1e1d"),v=a("503b"),f=a("9e7c"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",[a("div",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v(" "+e._s(e.label)+" ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])]),e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e()])])},C=[],_=a("6df7"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix))])},y=[],k=a("6612"),x=a.n(k),O={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data(){return{newValue:0}},computed:{newValueFormatted(){return this.newValue<1e3?this.newValue:x()(this.newValue).format("0,0")}},watch:{value(){this.growInit()}},mounted(){this.growInit()},methods:{grow(e){const t=Math.ceil(this.newValue+e);if(t>this.value)return this.newValue=this.value,!1;this.newValue=t,setTimeout(()=>{this.grow(e)},25)},growInit(){this.grow(this.value/(this.duration/25))}}},A=O,D=a("2877"),M=Object(D["a"])(A,w,y,!1,null,null,null),S=M.exports,j={name:"CardWidget",components:{GrowingNumber:S,CardComponent:_["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},$=j,E=Object(D["a"])($,g,C,!1,null,null,null),B=E.exports,T=a("1fca"),N={name:"LineChart",extends:T["a"],mixins:[T["b"].reactiveProp],props:{extraOptions:{type:Object,default:void 0}},data(){return{ctx:null}},mounted(){this.$watch("chartData",(e,t)=>{t||this.renderChart(this.chartData,this.extraOptions)},{immediate:!0})}},P=N,L=Object(D["a"])(P,p,b,!1,null,null,null),z=L.exports,V=a("7080"),I=a("2b9d"),F={name:"Home",components:{ClientsTableSample:V["a"],LineChart:z,CardComponent:_["a"],CardWidget:B,Tiles:f["a"],HeroBar:v["a"],TitleBar:h["a"],Notification:I["a"]},data(){return{titleStack:["Admin","Dashboard"],chartOptions:c,chartData:null}},mounted(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{fillChartData(){this.chartData=m()}}},H=F,R=Object(D["a"])(H,l,o,!1,null,null,null),G=R.exports;s["a"].use(n["a"]);const q=[{meta:{title:"Dashboard"},path:"/",name:"home",component:G},{meta:{title:"Tables"},path:"/tables",name:"tables",component:()=>a.e("tables").then(a.bind(null,"8840"))},{meta:{title:"Forms"},path:"/forms",name:"forms",component:()=>a.e("forms").then(a.bind(null,"0894"))},{meta:{title:"Profile"},path:"/profile",name:"profile",component:()=>a.e("profile").then(a.bind(null,"c66d"))},{meta:{title:"New Client"},path:"/client/new",name:"client.new",component:()=>a.e("client-form").then(a.bind(null,"e96b"))},{meta:{title:"Edit Client"},path:"/client/:id",name:"client.edit",component:()=>a.e("client-form").then(a.bind(null,"e96b")),props:!0},{path:"/full-page",component:()=>a.e("full-page").then(a.bind(null,"559f")),children:[{meta:{title:"Login"},path:"/login",name:"login",component:()=>a.e("full-page").then(a.bind(null,"3ca3"))}]}],J=new n["a"]({routes:q,scrollBehavior(e,t,a){return a||{x:0,y:0}}});var W=J;var U=a("2f62"),Y=a("bc3a"),K=a.n(Y);s["a"].use(U["a"]);const Q=new U["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1,clients:[]},mutations:{basic(e,t){e[t.key]=t.value},user(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},asideMobileStateToggle(e,t=null){const a="has-aside-mobile-expanded";let s;s=null!==t?t:!e.isAsideMobileExpanded,s?document.documentElement.classList.add(a):document.documentElement.classList.remove(a),e.isAsideMobileExpanded=s},fullPage(e,t){e.isNavBarVisible=!t,e.isAsideVisible=!t,e.isFooterBarVisible=!t}},actions:{asideDesktopOnlyToggle(e,t=null){let a;switch(t){case!0:a="add";break;case!1:a="remove";break;default:a="toggle"}document.documentElement.classList[a]("has-aside-desktop-only-visible")},toggleFullPage({commit:e},t){e("fullPage",t),document.documentElement.classList[t?"remove":"add"]("has-aside-left","has-navbar-fixed-top")},fetch({commit:e},t){K.a.get(`data-sources/${t}.json`).then(a=>{a.data&&a.data.data&&e("basic",{key:t,value:a.data.data})}).catch(e=>{alert(e.message)})}}});var X=Q;var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},ee=[],te=["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"}],"Examples",[{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{to:"/login",label:"Login",icon:"lock"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}],"About",[{href:"https://justboil.me/bulma-admin-template/one/",label:"Premium",icon:"monitor",target:"_blank"},{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",label:"GitHub",icon:"github-circle",target:"_blank"}]],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.asideToggleMobile.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:e.asideMobileIcon}})],1),a("a",{staticClass:"navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only",on:{click:function(t){return t.preventDefault(),e.asideDesktopOnlyToggle.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:"menu"}})],1),e._m(0)]),a("div",{staticClass:"navbar-brand is-right"},[a("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggle.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:e.menuToggleIcon,"custom-size":"default"}})],1)]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[e._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[a("user-avatar"),a("div",{staticClass:"is-user-name"},[a("span",[e._v(e._s(e.userName))])]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)],1)],1),a("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",title:"GitHub"}},[a("b-icon",{attrs:{icon:"github-circle","custom-size":"default"}}),a("span",[e._v("GitHub")])],1),a("a",{staticClass:"navbar-item is-desktop-icon-only",attrs:{title:"Log out"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log out")])],1)],1)])])},se=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-control no-left-space-touch no-left-space-desktop-only"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{placeholder:"Search everywhere..."}})])])}],ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"root",staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[a("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),a("b-icon",{attrs:{icon:e.dropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},ne=[],le={name:"NavBarMenu",props:{isHoverable:Boolean},data(){return{isDropdownActive:!1}},computed:{dropdownIcon(){return this.isDropdownActive?"chevron-up":"chevron-down"}},mounted(){window.addEventListener("click",this.forceClose)},beforeDestroy(){window.removeEventListener("click",this.forceClose)},methods:{toggle(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose(e){this.$refs.root.contains(e.target)||(this.isDropdownActive=!1)}}},oe=le,re=Object(D["a"])(oe,ie,ne,!1,null,null,null),ce=re.exports,ue=a("808f"),de={name:"NavBar",components:{UserAvatar:ue["a"],NavBarMenu:ce},data(){return{isMenuActive:!1}},computed:{asideMobileIcon(){return this.isAsideMobileExpanded?"backburger":"forwardburger"},menuToggleIcon(){return this.isMenuActive?"close":"dots-vertical"},...Object(U["b"])(["isAsideMobileExpanded","isNavBarVisible","userName"])},mounted(){this.$router.afterEach(()=>{this.isMenuActive=!1})},methods:{asideToggleMobile(){this.$store.commit("asideMobileStateToggle")},asideDesktopOnlyToggle(){this.$store.dispatch("asideDesktopOnlyToggle")},menuToggle(){this.isMenuActive=!this.isMenuActive},logout(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},me=de,pe=Object(D["a"])(me,ae,se,!1,null,null,null),be=pe.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left"},[a("div",{staticClass:"aside-tools"},[a("a",{staticClass:"navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only",on:{click:e.asideToggleDesktopOnly}},[a("b-icon",{attrs:{icon:"menu"}})],1),e._m(0)]),a("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,s){return["string"===typeof t?a("p",{key:s,staticClass:"menu-label"},[e._v(" "+e._s(t)+" ")]):a("aside-menu-list",{key:s,attrs:{menu:t},on:{"menu-click":e.menuClick}})]}))],2)])},ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-tools-label"},[a("span",[a("b",[e._v("Admin")]),e._v(" One")])])}],fe=a("9a7b"),ge={name:"AsideMenu",components:{AsideMenuList:fe["default"]},props:{menu:{type:Array,default:()=>[]}},computed:{...Object(U["b"])(["isAsideVisible"])},mounted(){this.$router.afterEach(()=>{this.$store.dispatch("asideDesktopOnlyToggle",!1)})},methods:{asideToggleDesktopOnly(){this.$store.dispatch("asideDesktopOnlyToggle")},menuClick(e){}}},Ce=ge,_e=Object(D["a"])(Ce,he,ve,!1,null,null,null),we=_e.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"footer-copyright"},[a("b",[e._v("© "+e._s(e.year)+", JustBoil.me")]),e._v(". "),a("a",{attrs:{href:"https://github.com/vikdiesel/admin-one-vue-bulma-dashboard",target:"_blank"}},[e._v("GitHub")])])])]),e._m(0)])])])},ke=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://justboil.me",target:"_blank"}},[s("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],xe={name:"FooterBar",data(){return{year:(new Date).getFullYear()}},computed:{...Object(U["b"])(["isFooterBarVisible"])}},Oe=xe,Ae=Object(D["a"])(Oe,ye,ke,!1,null,null,null),De=Ae.exports,Me={name:"Home",components:{FooterBar:De,AsideMenu:we,NavBar:be},data(){return{menu:te}},created(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"https://avatars.dicebear.com/v2/gridy/John-Doe.svg"})}},Se=Me,je=Object(D["a"])(Se,Z,ee,!1,null,null,null),$e=je.exports;X.dispatch("fetch","clients");const Ee="Admin One Bulma Buefy";W.afterEach(e=>{X.commit("asideMobileStateToggle",!1),e.meta&&e.meta.title?document.title=`${e.meta.title} — ${Ee}`:document.title=Ee}),s["a"].config.productionTip=!1,s["a"].use(i["a"]),new s["a"]({router:W,store:X,render:e=>e($e)}).$mount("#app")},"6df7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v(" "+e._s(e.title)+" ")],1),e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick.apply(null,arguments)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),a("div",{staticClass:"card-content"},[e._t("default")],2)])},i=[],n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},emits:["header-icon-click"],methods:{headerIconClick(){this.$emit("header-icon-click")}}},l=n,o=a("2877"),r=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=r.exports},7080:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObject?e.trashObject.name:null},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{"checked-rows":e.checkedRows,checkable:e.checkable,paginated:e.paginated,"per-page":e.perPage,data:e.clients,"default-sort":"name",striped:"",hoverable:""},on:{"update:checkedRows":function(t){e.checkedRows=t},"update:checked-rows":function(t){e.checkedRows=t}}},[a("b-table-column",{attrs:{"cell-class":"has-no-head-mobile is-image-cell"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:e.row.avatar}})])]}}])}),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.company)+" ")]}}])}),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.city)+" ")]}}])}),a("b-table-column",{attrs:{"cell-class":"is-progress-col",label:"Progress",field:"progress",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("progress",{staticClass:"progress is-small is-info",attrs:{max:"100"},domProps:{value:t.row.progress}},[e._v(" "+e._s(t.row.progress)+" ")])]}}])}),a("b-table-column",{attrs:{label:"Created"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:t.row.created}},[e._v(e._s(t.row.created))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"buttons is-right no-wrap"},[a("router-link",{staticClass:"button is-small is-info",attrs:{to:{name:"client.edit",params:{id:t.row.id}}}},[a("b-icon",{attrs:{icon:"account-edit",size:"is-small"}})],1),a("b-button",{attrs:{type:"is-danger",size:"is-small"},on:{click:function(a){return a.preventDefault(),e.trashModalOpen(t.row)}}},[a("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's here…")])])])],1)],1)},i=[],n=a("2f62"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v(" Confirm action ")]),a("button",{staticClass:"delete",attrs:{type:"button"},on:{click:e.cancel}})]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v(" This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{"native-type":"button",type:"is-danger",outlined:""},on:{click:e.cancel}},[e._v(" Cancel ")]),a("b-button",{attrs:{type:"is-danger"},on:{click:e.confirm}},[e._v(" Delete ")])],1)])])},o=[],r={name:"ModalBox",props:{isActive:Boolean,trashObjectName:{type:String,default:null}},emits:["cancel","confirm"],computed:{isModalActive:{get:function(){return this.isActive},set:function(e){e||this.cancel()}}},methods:{confirm(){this.$emit("confirm")},cancel(){this.$emit("cancel")}}},c=r,u=a("2877"),d=Object(u["a"])(c,l,o,!1,null,null,null),m=d.exports,p={name:"ClientsTableSample",components:{ModalBox:m},props:{checkable:Boolean,isEmpty:Boolean,perPage:{type:Number,default:10}},data(){return{checkedRows:[],isModalActive:!1,trashObject:null}},computed:{paginated(){return this.clients.length>this.perPage},...Object(n["b"])(["clients"])},methods:{trashModalOpen(e){this.trashObject=e,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1}}},b=p,h=Object(u["a"])(b,s,i,!1,null,null,null);t["a"]=h.exports},"808f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-user-avatar"},[a("img",{attrs:{src:e.newAvatar}})])},i=[],n={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:{newAvatar(){return this.avatar?this.avatar:this.$store.state.userAvatar}}},l=n,o=a("2877"),r=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=r.exports},"9a7b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,s){return a("aside-menu-item",{key:s,attrs:{item:t},on:{"menu-click":e.menuClick}})})),1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:{"has-icon":!!e.item.icon,"has-dropdown-icon":e.hasDropdown},attrs:{to:e.item.to,href:e.item.href,target:e.item.target,"exact-active-class":"is-active"},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(" "+e._s(e.item.label)+" ")]):e._e(),e.hasDropdown?a("div",{staticClass:"dropdown-icon"},[a("b-icon",{attrs:{icon:e.dropdownIcon,"custom-size":"default"}})],1):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,"is-submenu-list":""}}):e._e()],1)},l=[],o={name:"AsideMenuItem",components:{AsideMenuList:()=>Promise.resolve().then(a.bind(null,"9a7b"))},props:{item:{type:Object,required:!0}},emits:["menu-click"],data(){return{isDropdownActive:!1}},computed:{componentIs(){return this.item.to?"router-link":"a"},hasDropdown(){return!!this.item.menu},dropdownIcon(){return this.isDropdownActive?"minus":"plus"}},methods:{menuClick(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}}},r=o,c=a("2877"),u=Object(c["a"])(r,n,l,!1,null,null,null),d=u.exports,m={name:"AsideMenuList",components:{AsideMenuItem:d},props:{isSubmenuList:Boolean,menu:{type:Array,default:()=>[]}},emits:["menu-click"],methods:{menuClick(e){this.$emit("menu-click",e)}}},p=m,b=Object(c["a"])(p,s,i,!1,null,null,null);t["default"]=b.exports},"9e7c":function(e,t,a){"use strict";var s,i,n=a("91c8"),l=a.n(n),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},render(e){const t=t=>e("div",{attrs:{class:"tile is-ancestor"}},t.map(t=>e("div",{attrs:{class:"tile is-parent"}},[t])));return this.$slots.default.length<=this.maxPerRow?t(this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},l()(this.$slots.default,this.maxPerRow).map(e=>t(e)))}},r=o,c=a("2877"),u=Object(c["a"])(r,s,i,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){},c32d:function(e,t){if("undefined"===typeof moment){var a=new Error("Cannot find module 'moment'");throw a.code="MODULE_NOT_FOUND",a}e.exports=moment}});
//# sourceMappingURL=app.af83df7c.js.map