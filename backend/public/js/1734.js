(self.webpackChunk=self.webpackChunk||[]).push([[1734],{1734:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var r=a(5166),o=(0,r.withScopeId)("data-v-000eb31e");(0,r.pushScopeId)("data-v-000eb31e");var c=(0,r.createVNode)("h1",{class:"mb-5 font-bold text-2xl"},"Categories",-1),s={class:"mb-4 flex justify-between items-center"},n=(0,r.createVNode)("span",{class:"mr-2"},"Create",-1),l=(0,r.createVNode)("span",{class:"hidden md:inline"},"Category",-1),d={class:"bg-white rounded-md shadow overflow-x-auto"},i={key:0,class:"w-full divide-y divide-gray-200"},p=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"ID"),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Name"),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase"},"Description"),(0,r.createVNode)("th")])],-1),u={class:"bg-white divide-y divide-gray-200"},f={class:"px-6 py-4 whitespace-nowrap"},h={class:"px-6 py-4 whitespace-nowrap"},m={class:"px-6 py-4 whitespace-nowrap truncate",style:{"max-width":"200px"}},y={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},x=(0,r.createVNode)("i",{class:"ti-pencil-alt"},null,-1),g=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),V={key:1,class:"flex justify-center items-center text-gray-600 h-32"},N=(0,r.createVNode)("span",null,"No Feature Added",-1);(0,r.popScopeId)();var k=o((function(e,t,a,k,b,v){var w=(0,r.resolveComponent)("jet-input"),C=(0,r.resolveComponent)("inertia-link"),B=(0,r.resolveComponent)("jet-danger-button"),j=(0,r.resolveComponent)("jet-pagination");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[c,(0,r.createVNode)("div",s,[(0,r.createVNode)(w,{id:"name",type:"text",class:"mt-1 block w-64",modelValue:b.filters.search,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.filters.search=e}),ref:"name",autocomplete:"name"},null,8,["modelValue"]),(0,r.createVNode)(C,{class:"btn btn-primary",href:e.route("categories.create")},{default:o((function(){return[n,l]})),_:1},8,["href"])]),(0,r.createVNode)("div",d,[a.categories.data.length?((0,r.openBlock)(),(0,r.createBlock)("table",i,[p,(0,r.createVNode)("tbody",u,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(a.categories.data,(function(t,a){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:a},[(0,r.createVNode)("td",f,(0,r.toDisplayString)(t.id),1),(0,r.createVNode)("td",h,(0,r.toDisplayString)(t.name),1),(0,r.createVNode)("td",m,(0,r.toDisplayString)(t.description),1),(0,r.createVNode)("td",y,[(0,r.createVNode)(C,{class:"btn btn-primary mr-2",href:e.route("categories.edit",t.id)},{default:o((function(){return[x]})),_:2},1032,["href"]),(0,r.createVNode)(B,{onClick:function(e){return v.destroy(t.id)}},{default:o((function(){return[g]})),_:2},1032,["onClick"])])])})),128))])])):((0,r.openBlock)(),(0,r.createBlock)("div",V,[N]))]),(0,r.createVNode)(j,{class:"mt-6",links:a.categories.links},null,8,["links"])])})),b=a(3493);const v={props:{categories:Object,query:Object},data:function(){return{filters:{search:this.query.search}}},watch:{filters:{handler:a.n(b)()((function(){this.getResults("categories.index")}),150),deep:!0}},methods:{destroy:function(e){this.deleteResource(route("categories.destroy",e))}}};v.render=k,v.__scopeId="data-v-000eb31e";const w=v}}]);