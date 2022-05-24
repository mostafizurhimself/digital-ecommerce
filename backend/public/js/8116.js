(self.webpackChunk=self.webpackChunk||[]).push([[8116],{8116:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>w});var r=o(5166),a=(0,r.createVNode)("h1",{class:"mb-5 font-bold text-2xl"},"Colors",-1),c={class:"mb-4 flex justify-between items-center"},l=(0,r.createVNode)("span",{class:"mr-2"},"Create",-1),s=(0,r.createVNode)("span",{class:"hidden md:inline"},"Color",-1),n={class:"bg-white rounded-md shadow overflow-x-auto"},d={key:0,class:"w-full divide-y divide-gray-200"},i=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Name"),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Code"),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Color"),(0,r.createVNode)("th")])],-1),p={class:"bg-white divide-y divide-gray-200"},u={class:"px-6 py-4 whitespace-nowrap"},f={class:"px-6 py-4 whitespace-nowrap"},h={class:"px-6 py-4 whitespace-nowrap"},m={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},y=(0,r.createVNode)("i",{class:"ti-pencil-alt"},null,-1),k=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),x={key:1,class:"flex justify-center items-center text-gray-600 h-32"},V=(0,r.createVNode)("span",null,"No Feature Added",-1);var N=o(3493);const b={metaInfo:{title:"Colors"},props:{colors:Object,filters:Object,query:Object},data:function(){return{filters:{search:this.query.search}}},watch:{filters:{handler:o.n(N)()((function(){this.getResults("colors.index")}),150),deep:!0}},methods:{destroy:function(e){this.deleteResource(route("colors.destroy",e))}},render:function(e,t,o,N,b,w){var g=(0,r.resolveComponent)("jet-input"),v=(0,r.resolveComponent)("inertia-link"),C=(0,r.resolveComponent)("jet-danger-button"),B=(0,r.resolveComponent)("jet-pagination");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[a,(0,r.createVNode)("div",c,[(0,r.createVNode)(g,{id:"name",type:"text",class:"mt-1 block w-64",modelValue:b.filters.search,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.filters.search=e}),ref:"name",autocomplete:"name"},null,8,["modelValue"]),(0,r.createVNode)(v,{class:"btn btn-primary",href:e.route("colors.create")},{default:(0,r.withCtx)((function(){return[l,s]})),_:1},8,["href"])]),(0,r.createVNode)("div",n,[o.colors.data.length?((0,r.openBlock)(),(0,r.createBlock)("table",d,[i,(0,r.createVNode)("tbody",p,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.colors.data,(function(t,o){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:o},[(0,r.createVNode)("td",u,(0,r.toDisplayString)(t.name),1),(0,r.createVNode)("td",f,(0,r.toDisplayString)(t.code),1),(0,r.createVNode)("td",h,[t.isGradient?((0,r.openBlock)(),(0,r.createBlock)("img",{key:0,class:"h-8 w-8 object-cover",src:t.primaryMediaUrl},null,8,["src"])):((0,r.openBlock)(),(0,r.createBlock)("span",{key:1,class:"inline-block w-8 h-8",style:{"background-color":t.code}},null,4))]),(0,r.createVNode)("td",m,[(0,r.createVNode)(v,{class:"btn btn-primary mr-2",href:e.route("colors.edit",t.id)},{default:(0,r.withCtx)((function(){return[y]})),_:2},1032,["href"]),(0,r.createVNode)(C,{onClick:function(e){return w.destroy(t.id)}},{default:(0,r.withCtx)((function(){return[k]})),_:2},1032,["onClick"])])])})),128))])])):((0,r.openBlock)(),(0,r.createBlock)("div",x,[V]))]),(0,r.createVNode)(B,{class:"mt-6",links:o.colors.links},null,8,["links"])])}},w=b}}]);