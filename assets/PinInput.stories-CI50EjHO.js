import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{R as s}from"./index-DJO9vBfz.js";const y=({actionFn:w})=>{const[i,v]=s.useState(""),[l,j]=s.useState(""),[d,N]=s.useState(""),[p,C]=s.useState(""),m=s.useRef(null),x=s.useRef(null),f=s.useRef(null),r={1:[v,null],2:[j,m],3:[N,x],4:[C,f]},R=e=>{setTimeout(()=>{var t,o;(o=(t=r[e][1])==null?void 0:t.current)==null||o.focus()},0)},M=()=>{r[1][0](""),r[2][0](""),r[3][0](""),r[4][0]("")},a=(e,t)=>{const{value:o}=e.target;(o===""||/^\d*$/.test(o))&&r[t][0](""),/^\d*$/.test(o)&&(r[t][0](Number(o)),o.length===1&&R(t+1))},u=e=>{const t=e.key;t!=="Tab"&&!/\d/.test(t)&&t!=="Backspace"&&e.preventDefault()};return n.jsx("div",{className:"rounded-md border shadow-lg shadow-gray-300 min-h-fit w-fit",children:n.jsxs("div",{className:"flex flex-col p-3 text-center items-center gap-5",children:[n.jsxs("div",{className:"flex flex-row gap-2",children:[n.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",className:"border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl",maxLength:1,required:!0,onKeyDown:u,value:i==null?void 0:i.toString(),onChange:e=>a(e,1)}),n.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",ref:m,className:"border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl",maxLength:1,required:!0,onKeyDown:u,value:l==null?void 0:l.toString(),onChange:e=>a(e,2)}),n.jsx("input",{className:"border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl",type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:1,ref:x,required:!0,onKeyDown:u,value:d==null?void 0:d.toString(),onChange:e=>a(e,3)}),n.jsx("input",{className:"border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl",type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:1,ref:f,required:!0,onKeyDown:u,value:p==null?void 0:p.toString(),onChange:e=>a(e,4)})]}),n.jsxs("div",{className:"flex flex-row gap-2",children:[n.jsx("button",{onClick:M,type:"button",className:"rounded-md bg-red-500 text-white hover:bg-white hover:text-black border-red-500 border-2 transition-colors duration-300 px-4 py-2",children:"Clear"}),n.jsx("button",{onClick:w,type:"button",className:"rounded-md bg-green-700 text-white hover:bg-gray-100 hover:text-black border-green-700 border-2 transition-colors duration-300 px-4 py-2",children:"Submit"})]})]})})};y.__docgenInfo={description:"A functional PinInput component that renders a 4-digit pin input field.",methods:[],displayName:"PinInput",props:{actionFn:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const I={component:y,tags:["autodocs"],title:"PinInput",argTypes:{actionFn:{control:"object"}}},c={args:{actionFn:()=>{console.log("Click Me")}}};var g,h,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    actionFn: () => {
      console.log("Click Me");
    }
  }
}`,...(b=(h=c.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const D=["Default"];export{c as Default,D as __namedExportsOrder,I as default};
