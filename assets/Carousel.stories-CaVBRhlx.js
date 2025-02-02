import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as u}from"./createLucideIcon-Ch_trJlS.js";import"./index-DJO9vBfz.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=u("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=u("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),n={FullHeight:"h-full",Circle:"rounded-full w-20 h-20"},d=({content:h,numberOfItems:b,buttonStyle:s})=>e.jsxs("div",{className:"relative w-auto h-full",children:[e.jsxs("div",{className:" flex justify-between w-full px-4 absolute top-32 transform z-10",children:[e.jsx("button",{className:` border-none bg-transparent text-black hover:text-white focus:text-white  ${n[s]} focus:bg-gray-900 hover:bg-gray-900`,children:e.jsx(p,{className:"m-2"})}),e.jsx("button",{className:`bg-transparent border-none text-black hover:text-white focus:text-white ${n[s]} focus:bg-gray-900 hover:bg-gray-900`,children:e.jsx(g,{className:"m-2"})})]}),e.jsx("div",{className:"absolute top-0 left-0 right-0 -z-20",children:h})]});d.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{content:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},numberOfItems:{required:!1,tsType:{name:"number"},description:""},buttonStyle:{required:!0,tsType:{name:"union",raw:'"FullHeight" | "Circle"',elements:[{name:"literal",value:'"FullHeight"'},{name:"literal",value:'"Circle"'}]},description:""}}};const y={component:d,tags:["autodocs"],title:"Carousel",argTypes:{content:{control:"object"},numberOfItems:{control:"number"},buttonStyle:{control:"select",options:["FullHeight","Circle"]}}},t={args:{content:[e.jsx("div",{children:e.jsx("img",{src:"https://placehold.co/2000x500",alt:""})})],numberOfItems:3,buttonStyle:"FullHeight"}},r={args:{content:[e.jsx("div",{children:e.jsx("img",{src:"https://placehold.co/2000x500",alt:""})})],numberOfItems:3,buttonStyle:"Circle"}};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    content: [<div>
        <img src="https://placehold.co/2000x500" alt="" />
      </div>],
    numberOfItems: 3,
    buttonStyle: "FullHeight"
  }
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: [<div>
        <img src="https://placehold.co/2000x500" alt="" />
      </div>],
    numberOfItems: 3,
    buttonStyle: "Circle"
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const j=["FullHeight","Circle"];export{r as Circle,t as FullHeight,j as __namedExportsOrder,y as default};
