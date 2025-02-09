import{j as t}from"./jsx-runtime-CmIOflP4.js";import{r as u}from"./index-KqYmeiyw.js";import{c as m}from"./createLucideIcon-T_K6St1q.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=m("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=m("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),c={FullHeight:"h-full px-4 z-10"},x=({content:p,buttonStyle:r})=>{const e=u.useRef(null),a=l=>{if(e.current){const o=e.current.clientWidth;e.current.scrollBy({left:l==="left"?-o:o,behavior:"smooth"})}};return t.jsxs("div",{className:"relative w-full max-w-lg mx-auto",children:[t.jsx("div",{ref:e,className:"flex overflow-hidden scroll-smooth snap-x snap-mandatory",children:p.map((l,o)=>t.jsx("div",{className:"flex-shrink-0 w-full snap-start",children:l},o))}),t.jsx("button",{onClick:()=>a("left"),className:`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-900 ${c[r]}`,children:t.jsx(g,{size:24})}),t.jsx("button",{onClick:()=>a("right"),className:`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-900 ${c[r]}`,children:t.jsx(d,{size:24})})]})},j={component:x,tags:["autodocs"],title:"Carousel",argTypes:{content:{control:"object"},buttonStyle:{control:"select",options:["FullHeight","Circle"]}}},s={args:{content:[t.jsx("img",{src:"https://placehold.co/2000x500",alt:""}),t.jsx("img",{src:"https://placehold.co/2000x500",alt:""}),t.jsx("img",{src:"https://placehold.co/2000x500",alt:""})],buttonStyle:"FullHeight"}};var n,i,h;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    content: [<img src="https://placehold.co/2000x500" alt="" />, <img src="https://placehold.co/2000x500" alt="" />, <img src="https://placehold.co/2000x500" alt="" />],
    buttonStyle: "FullHeight"
  }
}`,...(h=(i=s.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};const v=["FullHeight"];export{s as FullHeight,v as __namedExportsOrder,j as default};
