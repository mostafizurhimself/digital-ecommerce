(self.webpackChunk=self.webpackChunk||[]).push([[6224],{2740:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o(5166),n={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},s={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const a={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",null,[(0,r.renderSlot)(e.$slots,"logo")]),(0,r.createVNode)("div",s,[(0,r.renderSlot)(e.$slots,"default")])])}},l=a},3027:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166),n=(0,r.createVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r.createVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,r.createVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);const s={render:function(e,t){var o=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)(o,{href:"/"},{default:(0,r.withCtx)((function(){return[n]})),_:1})}},a=s},3186:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(5166),n={key:0},s=(0,r.createVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),a={class:"mt-3 list-disc list-inside text-sm text-red-600"};const l={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}},render:function(e,t,o,l,i,d){return d.hasErrors?((0,r.openBlock)(),(0,r.createBlock)("div",n,[s,(0,r.createVNode)("ul",a,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(d.errors,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("li",{key:t},(0,r.toDisplayString)(e),1)})),128))])])):(0,r.createCommentVNode)("",!0)}},i=l},6224:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>w});var r=o(5166),n={class:"mt-4"},s={class:"mt-4"},a={class:"flex items-center justify-end mt-4"},l=(0,r.createTextVNode)(" Reset Password ");var i=o(2740),d=o(3027),c=o(5130),u=o(7676),m=o(3845),p=o(3186);const f={components:{JetAuthenticationCard:i.Z,JetAuthenticationCardLogo:d.Z,JetButton:c.Z,JetInput:u.Z,JetLabel:m.Z,JetValidationErrors:p.Z},props:{email:String,token:String},data:function(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit:function(){var e=this;this.form.post(this.route("password.update"),{onFinish:function(){return e.form.reset("password","password_confirmation")}})}},render:function(e,t,o,i,d,c){var u=(0,r.resolveComponent)("jet-authentication-card-logo"),m=(0,r.resolveComponent)("jet-validation-errors"),p=(0,r.resolveComponent)("jet-label"),f=(0,r.resolveComponent)("jet-input"),w=(0,r.resolveComponent)("jet-button"),h=(0,r.resolveComponent)("jet-authentication-card");return(0,r.openBlock)(),(0,r.createBlock)(h,null,{logo:(0,r.withCtx)((function(){return[(0,r.createVNode)(u)]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(m,{class:"mb-4"}),(0,r.createVNode)("form",{onSubmit:t[4]||(t[4]=(0,r.withModifiers)((function(){return c.submit&&c.submit.apply(c,arguments)}),["prevent"]))},[(0,r.createVNode)("div",null,[(0,r.createVNode)(p,{for:"email",value:"Email"}),(0,r.createVNode)(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:d.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.form.email=e}),required:"",autofocus:""},null,8,["modelValue"])]),(0,r.createVNode)("div",n,[(0,r.createVNode)(p,{for:"password",value:"Password"}),(0,r.createVNode)(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:d.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.form.password=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,r.createVNode)("div",s,[(0,r.createVNode)(p,{for:"password_confirmation",value:"Confirm Password"}),(0,r.createVNode)(f,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:d.form.password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.form.password_confirmation=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,r.createVNode)("div",a,[(0,r.createVNode)(w,{class:{"opacity-25":d.form.processing},disabled:d.form.processing},{default:(0,r.withCtx)((function(){return[l]})),_:1},8,["class","disabled"])])],32)]})),_:1})}},w=f}}]);