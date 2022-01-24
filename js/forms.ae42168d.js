(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms"],{"0894":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("title-bar",{attrs:{"title-stack":e.titleStack}}),o("hero-bar",[e._v(" Forms "),o("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[e._v(" Dashboard ")])],1),o("section",{staticClass:"section is-main-section"},[o("card-component",{attrs:{title:"Forms",icon:"ballot"}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.formAction.apply(null,arguments)}}},[o("b-field",{attrs:{label:"From",horizontal:""}},[o("b-field",[o("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("b-field",[o("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),o("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[o("b-field",[o("p",{staticClass:"control"},[o("a",{staticClass:"button is-static"},[e._v(" +44 ")])]),o("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),o("b-field",{attrs:{label:"Department",horizontal:""}},[o("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}},e._l(e.departments,(function(t,l){return o("option",{key:l,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1),o("hr"),o("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[o("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}})],1),o("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[o("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:e.form.question,callback:function(t){e.$set(e.form,"question",t)},expression:"form.question"}})],1),o("hr"),o("b-field",{attrs:{horizontal:""}},[o("b-field",{attrs:{grouped:""}},[o("div",{staticClass:"control"},[o("b-button",{attrs:{"native-type":"submit",type:"is-info"}},[e._v(" Submit ")])],1),o("div",{staticClass:"control"},[o("b-button",{attrs:{type:"is-info is-outlined"},on:{click:function(t){return t.preventDefault(),e.formAction.apply(null,arguments)}}},[e._v(" Reset ")])],1)])],1)],1)]),o("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[o("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[o("checkbox-radio-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-info"},model:{value:e.customElementsForm.checkbox,callback:function(t){e.$set(e.customElementsForm,"checkbox",t)},expression:"customElementsForm.checkbox"}})],1),o("hr"),o("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[o("checkbox-radio-picker",{attrs:{options:{one:"One",two:"Two"},type:"is-info"},model:{value:e.customElementsForm.radio,callback:function(t){e.$set(e.customElementsForm,"radio",t)},expression:"customElementsForm.radio"}})],1),o("hr"),o("b-field",{attrs:{label:"Switch",horizontal:""}},[o("b-switch",{attrs:{type:"is-info"},model:{value:e.customElementsForm.switch,callback:function(t){e.$set(e.customElementsForm,"switch",t)},expression:"customElementsForm.switch"}},[e._v(" Default ")])],1),o("hr"),o("b-field",{attrs:{label:"File",horizontal:""}},[o("file-picker",{attrs:{type:"is-info"},model:{value:e.customElementsForm.file,callback:function(t){e.$set(e.customElementsForm,"file",t)},expression:"customElementsForm.file"}})],1)],1)],1)],1)},a=[],n=o("1e1d"),s=o("6df7"),i=o("3b73"),r=o("503b"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,l){return o("div",{key:l,staticClass:"control"},[o(e.componentIs,{tag:"component",attrs:{"native-value":l,type:e.type},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},u=[],m={name:"CheckboxRadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:[String,Number,Array],default:null}},emits:["input"],computed:{componentIs(){return"object"===typeof this.value?"b-checkbox":"b-radio"},newValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},p=m,f=o("2877"),b=Object(f["a"])(p,c,u,!1,null,null,null),d=b.exports,h={name:"Forms",components:{CheckboxRadioPicker:d,HeroBar:r["a"],FilePicker:i["a"],CardComponent:s["a"],TitleBar:n["a"]},data(){return{titleStack:["Admin","Forms"],departments:["Business Development","Marketing","Sales"],form:{name:null,email:null,phone:null,department:null,subject:null,question:null},customElementsForm:{checkbox:["lorem"],radio:"one",switch:!0,file:null}}},methods:{formAction(){this.$buefy.snackbar.open({message:"Demo only",queue:!1})}}},k=h,v=Object(f["a"])(k,l,a,!1,null,null,null);t["default"]=v.exports},"3b73":function(e,t,o){"use strict";var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-field",{staticClass:"file"},[o("b-upload",{attrs:{accept:e.accept},on:{input:e.upload},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[o("a",{staticClass:"button",class:e.type},[o("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),o("span",[e._v(e._s(e.buttonLabel))])],1)]),e.file?o("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()],1)},a=[],n={name:"FilePicker",props:{accept:{type:String,default:null},type:{type:String,default:"is-primary"}},emits:["input"],data(){return{file:null}},computed:{buttonLabel(){return this.file?"Pick another file":"Pick a file"}},methods:{upload(e){this.file=e,this.$emit("input",e)}}},s=n,i=o("2877"),r=Object(i["a"])(s,l,a,!1,null,null,null);t["a"]=r.exports}}]);
//# sourceMappingURL=forms.ae42168d.js.map