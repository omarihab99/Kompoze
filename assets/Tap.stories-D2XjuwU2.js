import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";function y(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=y(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function h(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=y(e))&&(t&&(t+=" "),t+=n);return t}const f=({text:e,isActive:n,style:r,className:t,renderButton:a,actionFn:g})=>{if(a)return i.jsx(i.Fragment,{children:a({text:e,isActive:n})});const b=`hover:border-black hover:bg-gray-200 hover:text-black flex items-center w-fit border-black px-2 py-1 rounded-xl ${n?"bg-black text-white":"bg-white text-black"}`;return i.jsx("button",{style:r,type:"button",onClick:g,className:h(b,t),children:e.toString()})};f.__docgenInfo={description:`A functional Tap component that renders a stylized button with customizable text and styles.

@template T - The type of the text property, which can be a string, number, or any object with a toString method.
@template R - The return type of the actionFn function.
@param {Object} props - The properties object.
@param {T} props.text - The text content to display within the button.
@param {boolean} props.isActive - Determines the isActive state of the button, affecting its styling.
@param {React.CSSProperties} [props.style] - Optional inline styles to apply to the button.
@param {string} [props.className] - Optional additional CSS classes to apply to the button.
@param {function} [props.renderButton] - Optional custom render function for the button. If provided, it overrides the default rendering.
@param {function} props.actionFn - The function to execute when the button is clicked.
@returns {React.ReactNode} The rendered button component.
@example
const MyComponent = () => {
  const handleButtonClick = () => {
    // Handle button click logic
  };

  return (
    <Tap text="Click Me" isActive={true} actionFn={handleButtonClick} />
  );
};
 }`,methods:[],displayName:"Tap",props:{text:{required:!0,tsType:{name:"T"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},renderButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { text: T; isActive: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ text: T; isActive: boolean }",signature:{properties:[{key:"text",value:{name:"T",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},actionFn:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => R",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"R"}}},description:""}}};const v={component:f,tags:["autodocs"],title:"Tap",argTypes:{text:{control:"text"},isActive:{control:"boolean"}}},o={args:{text:"HTML",isActive:!0}},s={args:{text:"HTML",isActive:!1}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'HTML',
    isActive: true
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'HTML',
    isActive: false
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const A=["Active","Inactive"];export{o as Active,s as Inactive,A as __namedExportsOrder,v as default};
