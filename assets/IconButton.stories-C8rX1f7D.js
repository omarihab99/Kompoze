import{j as e}from"./jsx-runtime-CmIOflP4.js";import{R as v}from"./index-KqYmeiyw.js";import{c as C}from"./createLucideIcon-T_K6St1q.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=C("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=C("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),B=({defaultIcon:m,text:p,onClick:g,buttonStyle:I,textStyle:h,iconClickInterval:x,onClickIcon:f,isIconChangeOnClick:b})=>{const[c,t]=v.useState(!1),y=()=>{t(!c),setTimeout(()=>{t(!1)},x||3e3)};return e.jsxs("button",{onClick:j=>{y(),g(j)},className:"flex items-center gap-2 justify-evenly w-fit hover:bg-gray-100 hover:text-black border-2 border-black border-solid hover:border-black",style:I,children:[b&&c?f:m,e.jsx("p",{className:"font-mono text-lg",style:h,children:p})]})},S={component:B,tags:["autodocs"],title:"IconButton",argTypes:{defaultIcon:{control:"object"},text:{control:"text"},onClick:{control:"object"},isIconChangeOnClick:{control:"boolean"},onClickIcon:{control:"object"}}},n={args:{defaultIcon:e.jsx(d,{}),text:"Click",onClick:()=>{},isIconChangeOnClick:!0,onClickIcon:e.jsx(u,{})}},o={args:{defaultIcon:e.jsx(d,{}),text:"Click",onClick:()=>{alert("clicked")},isIconChangeOnClick:!0,onClickIcon:e.jsx(u,{}),iconClickInterval:1e3}};var r,s,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    defaultIcon: <BellRing />,
    text: "Click",
    onClick: () => {},
    isIconChangeOnClick: true,
    onClickIcon: <Check />
  }
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,i,k;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    defaultIcon: <BellRing />,
    text: "Click",
    onClick: () => {
      alert("clicked");
    },
    isIconChangeOnClick: true,
    onClickIcon: <Check />,
    iconClickInterval: 1000
  }
}`,...(k=(i=o.parameters)==null?void 0:i.docs)==null?void 0:k.source}}};const q=["Primary","lessInterval"];export{n as Primary,q as __namedExportsOrder,S as default,o as lessInterval};
