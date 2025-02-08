import{j as e}from"./jsx-runtime-CmIOflP4.js";import{r as f}from"./index-KqYmeiyw.js";import{c as l}from"./createLucideIcon-T_K6St1q.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),N=({imgSrc:i,name:t,date:d,content:r})=>{const h=()=>{navigator.share({title:t,text:r,url:window.location.href})},[a,x]=f.useState(!1),m=()=>{x(!a)},p=()=>{console.log("Edit")},u=()=>{console.log("Delete")},g=()=>{navigator.clipboard.writeText(r)};return e.jsx("div",{className:"rounded-lg w-full md:w-[500px]  bg-white shadow-md min-h-fit",children:e.jsxs("div",{className:"p-4 flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col ml-4 gap-4",children:[e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("img",{src:i,alt:t,className:"rounded-full w-10 h-10"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h4",{className:"font-bold text-md",children:t}),e.jsx("p",{className:"text-sm text-gray-500",children:d})]}),e.jsxs("div",{className:"relative ml-auto",children:[e.jsx("button",{type:"button",onClick:m,className:" cursor-pointer ml-auto hover:bg-gray-200 transition-all duration-300 rounded-md p-1",children:e.jsx(y,{})}),a&&e.jsx("div",{className:"absolute top-5 left-8 bg-white shadow-md rounded-md p-2",children:e.jsxs("ul",{className:"flex flex-col gap-2 w-fit whitespace-nowrap",children:[e.jsx("li",{className:"hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer",children:e.jsx("button",{type:"button",onClick:p,className:"cursor-pointer w-full",children:e.jsx("p",{children:"Edit"})})}),e.jsx("li",{className:"hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer",children:e.jsx("button",{type:"button",onClick:u,className:"cursor-pointer w-full",children:e.jsx("p",{children:"Delete"})})}),e.jsx("li",{className:"hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer",children:e.jsx("button",{type:"button",onClick:g,className:"cursor-pointer w-full",children:e.jsx("p",{children:"Copy Link"})})})]})})]})]}),e.jsx("div",{className:"text-sm break-words text-gray-500 line-height-1",children:e.jsx("p",{children:r})})]}),e.jsxs("div",{className:"flex flex-row gap-8 w-full justify-center p-2",children:[e.jsxs("button",{className:"flex flex-row gap-2 ",children:[e.jsx(j,{className:"hover:fill-red-500 hover:scale-110 transition-all duration-300 hover:text-red-500"}),e.jsx("p",{className:"md:block hidden",children:"Like"})]}),e.jsxs("button",{className:"flex flex-row gap-2",children:[e.jsx(b,{className:"hover:fill-blue-500 hover:scale-110 transition-all duration-300 hover:text-blue-500"}),e.jsx("p",{className:"md:block hidden",children:"Comment"})]}),e.jsxs("button",{className:"flex flex-row gap-2",onClick:h,children:[e.jsx(v,{className:"hover:fill-green-500 hover:scale-110 transition-all duration-300 hover:text-green-500"}),e.jsx("p",{className:"md:block hidden",children:"Share"})]})]})]})})},S={component:N,tags:["autodocs"],title:"Post",argTypes:{imgSrc:{control:"text"},name:{control:"text"},date:{control:"text"},content:{control:"text"}}},s={args:{imgSrc:"https://placehold.co/10",name:"John Doe",date:"Tue, 16 Feb 2025",content:"This is the content of the post that is very long and can be broken into multiple lines that is new lines"}};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imgSrc: "https://placehold.co/10",
    name: "John Doe",
    date: "Tue, 16 Feb 2025",
    content: "This is the content of the post that is very long and can be broken into multiple lines that is new lines"
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,S as default};
