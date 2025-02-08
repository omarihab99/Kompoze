import{j as e}from"./jsx-runtime-CmIOflP4.js";import{r as m}from"./index-KqYmeiyw.js";import{c as t}from"./createLucideIcon-T_K6St1q.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=t("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=t("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),A={Success:e.jsx(W,{}),Error:e.jsx(E,{}),Warning:e.jsx(M,{}),Info:e.jsx(C,{})},B={Success:"bg-green-500",Error:"bg-red-500",Warning:"bg-yellow-400",Info:"bg-blue-500"},N=({animation:b,message:S,notificationType:c,showIcon:T})=>{const[a,i]=m.useState(!1),j={FromRight:`${a?"translate-x-0 opacity-100":"translate-x-full opacity-0"}`,FromBottom:`${a?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`,FadeIn:`${a?"opacity-100":"opacity-0"}`};return m.useEffect(()=>{i(!0);const F=setTimeout(()=>{i(!1)},3e3);return()=>clearTimeout(F)},[]),e.jsx("div",{className:"fixed top-5 right-5 z-50",children:e.jsxs("div",{className:` ${B[c]} transform transition-all duration-500 ease-out gap-9 rounded-md flex items-center justify-between px-4 py-2 lg:w-fit md:w-1/3 ml-auto h-auto ${j[b]}`,children:[T&&A[c],e.jsx("p",{className:"text-lg font-extrabold font-mono m-2 text-white p-2 text-wrap",children:S}),e.jsx("button",{className:"bg-transparent border-none w-fit h-fit p-0",onClick:()=>i(!1),children:e.jsx(R,{size:20,color:"white"})})]})})},O={component:N,tags:["autodocs"],title:"Notification",argTypes:{message:{control:"text"},notificationType:{control:"select",options:["Success","Error","Warning"]},animation:{control:"select",options:["FromRight","FromBottom","FadeIn"]},showIcon:{control:"boolean"},icon:{control:"object"}}},o={args:{notificationType:"Success",message:"Success",animation:"FromRight",showIcon:!0}},n={args:{notificationType:"Error",message:"Error",animation:"FromBottom",showIcon:!0}},r={args:{notificationType:"Warning",message:"Warning",animation:"FadeIn",showIcon:!0}},s={args:{notificationType:"Success",message:"This is a long message that will be not truncated to fit in the notification",animation:"FromRight",showIcon:!0}};var l,p,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    notificationType: "Success",
    message: "Success",
    animation: "FromRight",
    showIcon: true
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,d,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    notificationType: "Error",
    message: "Error",
    animation: "FromBottom",
    showIcon: true
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,y,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    notificationType: "Warning",
    message: "Warning",
    animation: "FadeIn",
    showIcon: true
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,k,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    notificationType: "Success",
    message: "This is a long message that will be not truncated to fit in the notification",
    animation: "FromRight",
    showIcon: true
  }
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const q=["Success","Error","Warning","longMessage"];export{n as Error,o as Success,r as Warning,q as __namedExportsOrder,O as default,s as longMessage};
