(self.webpackChunk=self.webpackChunk||[]).push([[4478],{4478:(e,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>z});var r=o(5166),t=(0,r.createTextVNode)("Add New Partner"),l={class:"mb-4"},d={class:"mb-4"},a={class:"mb-4"},n={class:"mb-4"},i={class:"mb-4"},c={class:"mb-4"},m={class:"mb-4"},u={class:"mb-4"},p={class:"mb-4"},f={class:"mb-4"},V={class:"mb-4"},g={class:"grid grid-cols-2 gap-4 "},b={class:"mb-4 d-flex"},N={class:"flex items-center"},y=(0,r.createVNode)("span",{class:"ml-2 text-sm text-gray-600"},"Shipping Address",-1),v={key:0},A={class:"mb-4"},h={class:"mb-4"},k={class:"mb-4"},C={class:"mb-4"},w=(0,r.createTextVNode)("Cancel"),x=(0,r.createTextVNode)("Save");const U={name:"product-create",props:{countries:Array,customers:Array,services:Array,statusOptions:Array},data:function(){return{form:this.$inertia.form({customerId:null,companyName:"",companyEmail:"",companyWebsite:"",service:"",status:"pending",billingAddress:{street:"",city:"",zipcode:"",country:null,position:{lat:null,lng:null}},hasShipping:!1,shippingAddress:{street:"",city:"",zipcode:"",country:null}})}},methods:{save:function(){this.form.post(route("companies.store"))}},render:function(e,s,o,U,z,S){var E=(0,r.resolveComponent)("jet-label"),I=(0,r.resolveComponent)("jet-select"),W=(0,r.resolveComponent)("jet-input-error"),j=(0,r.resolveComponent)("jet-input"),_=(0,r.resolveComponent)("tab"),B=(0,r.resolveComponent)("jet-checkbox"),T=(0,r.resolveComponent)("tabs"),G=(0,r.resolveComponent)("inertia-link"),L=(0,r.resolveComponent)("jet-button"),O=(0,r.resolveComponent)("form-view");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(O,{onSubmitted:S.save},{title:(0,r.withCtx)((function(){return[t]})),form:(0,r.withCtx)((function(){return[(0,r.createVNode)(T,{options:{useUrlFragment:!1},"nav-item-class":"tab-item"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(_,{name:"General Info"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",l,[(0,r.createVNode)(E,{for:"customerId",value:"Customer"}),(0,r.createVNode)(I,{options:o.customers,id:"customerId",class:"mt-1 block w-full",modelValue:z.form.customerId,"onUpdate:modelValue":s[1]||(s[1]=function(e){return z.form.customerId=e}),ref:"customerId"},null,8,["options","modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.customerId,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",d,[(0,r.createVNode)(E,{for:"companyName",value:"Company Name"}),(0,r.createVNode)(j,{id:"companyName",type:"text",class:"mt-1 block w-full",modelValue:z.form.companyName,"onUpdate:modelValue":s[2]||(s[2]=function(e){return z.form.companyName=e}),ref:"companyName"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.companyName,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",a,[(0,r.createVNode)(E,{for:"companyEmail",value:"Company Email"}),(0,r.createVNode)(j,{id:"companyEmail",type:"email",class:"mt-1 block w-full",modelValue:z.form.companyEmail,"onUpdate:modelValue":s[3]||(s[3]=function(e){return z.form.companyEmail=e}),ref:"companyEmail"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.companyEmail,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",n,[(0,r.createVNode)(E,{for:"companyWebsite",value:"Website"}),(0,r.createVNode)(j,{id:"companyWebsite",type:"text",class:"mt-1 block w-full",modelValue:z.form.companyWebsite,"onUpdate:modelValue":s[4]||(s[4]=function(e){return z.form.companyWebsite=e}),ref:"companyWebsite"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.companyWebsite,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",i,[(0,r.createVNode)(E,{for:"service",value:"Service"}),(0,r.createVNode)(I,{options:o.services,track:"value",id:"service",class:"mt-1 block w-full",modelValue:z.form.service,"onUpdate:modelValue":s[5]||(s[5]=function(e){return z.form.service=e}),ref:"service"},null,8,["options","modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.service,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",c,[(0,r.createVNode)(E,{for:"status",value:"Status"}),(0,r.createVNode)(I,{options:o.statusOptions,track:"value",id:"status",class:"mt-1 block w-full",modelValue:z.form.status,"onUpdate:modelValue":s[6]||(s[6]=function(e){return z.form.status=e}),ref:"status"},null,8,["options","modelValue"]),(0,r.createVNode)(W,{message:z.form.errors.status,class:"mt-2"},null,8,["message"])])]})),_:1}),(0,r.createVNode)(_,{name:"Address",class:"mt-5"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",m,[(0,r.createVNode)(E,{for:"billingAddress.street",value:"Street"}),(0,r.createVNode)(j,{id:"billingAddress.street",type:"text",class:"mt-1 block w-full",modelValue:z.form.billingAddress.street,"onUpdate:modelValue":s[7]||(s[7]=function(e){return z.form.billingAddress.street=e}),ref:"billingAddress.street"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["billingAddress.street"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",u,[(0,r.createVNode)(E,{for:"billingAddress.city",value:"City"}),(0,r.createVNode)(j,{id:"billingAddress.city",type:"text",class:"mt-1 block w-full",modelValue:z.form.billingAddress.city,"onUpdate:modelValue":s[8]||(s[8]=function(e){return z.form.billingAddress.city=e}),ref:"billingAddress.city"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["billingAddress.city"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",p,[(0,r.createVNode)(E,{for:"billingAddress.zipcode",value:"Zipcode"}),(0,r.createVNode)(j,{id:"billingAddress.zipcode",type:"text",class:"mt-1 block w-full",modelValue:z.form.billingAddress.zipcode,"onUpdate:modelValue":s[9]||(s[9]=function(e){return z.form.billingAddress.zipcode=e}),ref:"billingAddress.zipcode"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["billingAddress.zipcode"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",f,[(0,r.createVNode)(E,{for:"billingAddress.country",value:"Country"}),(0,r.createVNode)(I,{options:o.countries,id:"billingAddress.country",class:"mt-1 block w-full",modelValue:z.form.billingAddress.country,"onUpdate:modelValue":s[10]||(s[10]=function(e){return z.form.billingAddress.country=e}),ref:"billingAddress.country"},null,8,["options","modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["billingAddress.country"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",V,[(0,r.createVNode)(E,{for:"shippingAddress.country",value:"Global Position"}),(0,r.createVNode)("div",g,[(0,r.createVNode)("div",null,[(0,r.createVNode)(j,{id:"shippingAddress.zipcode",type:"text",placeholder:"Latitude",class:"mt-1 block w-full",modelValue:z.form.billingAddress.position.lat,"onUpdate:modelValue":s[11]||(s[11]=function(e){return z.form.billingAddress.position.lat=e}),ref:"billingAddress.position"},null,8,["modelValue"])]),(0,r.createVNode)("div",null,[(0,r.createVNode)(j,{id:"shippingAddress.zipcode",type:"text",placeholder:"Longitude",class:"mt-1 block w-full",modelValue:z.form.billingAddress.position.lng,"onUpdate:modelValue":s[12]||(s[12]=function(e){return z.form.billingAddress.position.lng=e}),ref:"billingAddress.position"},null,8,["modelValue"])])]),(0,r.createVNode)(W,{message:z.form.errors["billingAddress.position"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",b,[(0,r.createVNode)("label",N,[(0,r.createVNode)(B,{value:z.form.hasShipping,checked:z.form.hasShipping,"onUpdate:checked":s[13]||(s[13]=function(e){return z.form.hasShipping=e})},null,8,["value","checked"]),y])]),z.form.hasShipping?((0,r.openBlock)(),(0,r.createBlock)("div",v,[(0,r.createVNode)("div",A,[(0,r.createVNode)(E,{for:"shippingAddress.street",value:"Street"}),(0,r.createVNode)(j,{id:"shippingAddress.street",type:"text",class:"mt-1 block w-full",modelValue:z.form.shippingAddress.street,"onUpdate:modelValue":s[14]||(s[14]=function(e){return z.form.shippingAddress.street=e}),ref:"shippingAddress.street"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["shippingAddress.street"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",h,[(0,r.createVNode)(E,{for:"shippingAddress.city",value:"City"}),(0,r.createVNode)(j,{id:"shippingAddress.city",type:"text",class:"mt-1 block w-full",modelValue:z.form.shippingAddress.city,"onUpdate:modelValue":s[15]||(s[15]=function(e){return z.form.shippingAddress.city=e}),ref:"shippingAddress.city"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["shippingAddress.city"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",k,[(0,r.createVNode)(E,{for:"shippingAddress.zipcode",value:"Zipcode"}),(0,r.createVNode)(j,{id:"shippingAddress.zipcode",type:"text",class:"mt-1 block w-full",modelValue:z.form.shippingAddress.zipcode,"onUpdate:modelValue":s[16]||(s[16]=function(e){return z.form.shippingAddress.zipcode=e}),ref:"shippingAddress.zipcode"},null,8,["modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["shippingAddress.zipcode"],class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",C,[(0,r.createVNode)(E,{for:"shippingAddress.country",value:"Country"}),(0,r.createVNode)(I,{options:o.countries,id:"shippingAddress.country",track:"value",class:"mt-1 block w-full",modelValue:z.form.shippingAddress.country,"onUpdate:modelValue":s[17]||(s[17]=function(e){return z.form.shippingAddress.country=e}),ref:"shippingAddress.country"},null,8,["options","modelValue"]),(0,r.createVNode)(W,{message:z.form.errors["shippingAddress.country"],class:"mt-2"},null,8,["message"])])])):(0,r.createCommentVNode)("",!0)]})),_:1})]})),_:1})]})),actions:(0,r.withCtx)((function(){return[(0,r.createVNode)(G,{href:e.route("products.index"),class:"btn btn-secondary mr-4"},{default:(0,r.withCtx)((function(){return[w]})),_:1},8,["href"]),(0,r.createVNode)(L,{class:{"opacity-25":z.form.processing},disabled:z.form.processing},{default:(0,r.withCtx)((function(){return[x]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])])}},z=U}}]);