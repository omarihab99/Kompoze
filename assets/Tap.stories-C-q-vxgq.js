import{j as c}from"./jsx-runtime-CmIOflP4.js";import"./index-KqYmeiyw.js";function f(t){var r,s,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(s=f(t[r]))&&(e&&(e+=" "),e+=s)}else for(s in t)t[s]&&(e&&(e+=" "),e+=s);return e}function b(){for(var t,r,s=0,e="",a=arguments.length;s<a;s++)(t=arguments[s])&&(r=f(t))&&(e&&(e+=" "),e+=r);return e}const v=({text:t,isActive:r,style:s,className:e,renderButton:a,actionFn:x})=>{if(a)return c.jsx(c.Fragment,{children:a({text:t,isActive:r})});const d=`hover:border-black hover:bg-gray-200 hover:text-black flex items-center w-fit border-black px-2 py-1 rounded-xl ${r?"bg-black text-white":"bg-white text-black"}`;return c.jsx("button",{style:s,type:"button",onClick:x,className:b(d,e),children:t.toString()})},A={component:v,tags:["autodocs"],title:"Tap",argTypes:{text:{control:"text"},isActive:{control:"boolean"}}},o={args:{text:"HTML",isActive:!0}},n={args:{text:"HTML",isActive:!1}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'HTML',
    isActive: true
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'HTML',
    isActive: false
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const T=["Active","Inactive"];export{o as Active,n as Inactive,T as __namedExportsOrder,A as default};
