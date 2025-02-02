import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as S}from"./index-DJO9vBfz.js";import{c as p}from"./createLucideIcon-Ch_trJlS.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=p("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),k=({defaultIcon:m,text:g,onClick:I,buttonStyle:y,textStyle:f,iconClickInterval:h,onClickIcon:R,isIconChangeOnClick:x})=>{const[o,c]=S.useState(!1),b=()=>{c(!o),setTimeout(()=>{c(!1)},h||3e3)};return e.jsxs("button",{onClick:v=>{b(),I(v)},className:"flex items-center gap-2 justify-evenly w-fit hover:bg-gray-100 hover:text-black border-2 border-black border-solid hover:border-black",style:y,children:[x&&o?R:m,e.jsx("p",{className:"font-mono text-lg",style:f,children:g})]})};k.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{defaultIcon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},textStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},buttonStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},isIconChangeOnClick:{required:!1,tsType:{name:"boolean"},description:""},iconClickInterval:{required:!1,tsType:{name:"number"},description:""},onClickIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B={component:k,tags:["autodocs"],title:"IconButton",argTypes:{defaultIcon:{control:"object"},text:{control:"text"},onClick:{control:"object"},isIconChangeOnClick:{control:"boolean"},onClickIcon:{control:"object"}}},t={args:{defaultIcon:e.jsx(u,{}),text:"Click",onClick:()=>{},isIconChangeOnClick:!0,onClickIcon:e.jsx(C,{})}},n={args:{defaultIcon:e.jsx(u,{}),text:"Click",onClick:()=>{alert("clicked")},isIconChangeOnClick:!0,onClickIcon:e.jsx(C,{}),iconClickInterval:1e3}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    defaultIcon: <BellRing />,
    text: "Click",
    onClick: () => {},
    isIconChangeOnClick: true,
    onClickIcon: <Check />
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const M=["Primary","lessInterval"];export{t as Primary,M as __namedExportsOrder,B as default,n as lessInterval};
