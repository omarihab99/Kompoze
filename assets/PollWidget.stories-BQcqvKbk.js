import{j as e}from"./jsx-runtime-CmIOflP4.js";import{R as y}from"./index-KqYmeiyw.js";const j=({question:o,options:a,onVote:u,userVote:r})=>{const[g,v]=y.useState(r!==""&&r!==void 0),m=t=>{u(t),v(!0)};return e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:[e.jsx("p",{className:"text-black text-lg font-serif font-light",children:o}),g?e.jsx("div",{className:"flex flex-col gap-2 w-full px-4 transition-opacity duration-500",children:a.map(t=>e.jsx("div",{children:e.jsxs("div",{className:"text-center px-2 py-1  flex flex-row justify-between items-center bg-gradient-to-r from-gray-300 to-transparent",style:{width:t.votes/a.reduce((f,h)=>f+h.votes,0)*100+"%"},children:[e.jsx("span",{className:"font-bold text-lg text-black",children:t.text}),e.jsx("div",{className:"w-fit flex justify-center items-center px-2 py-1",children:e.jsx("span",{className:"font-bold text-lg text-black",children:t.votes})})]})},t.id))}):e.jsx("div",{className:"flex flex-row gap-2 transition-opacity duration-500",children:a.map(t=>e.jsx("button",{className:"hover:bg-gray-200 hover:text-black border-black hover:border-black transition-colors duration-400",onClick:()=>{m(t.text)},children:t.text},t.id))})]})},N={component:j,tags:["autodocs"],title:"PollWidget",argTypes:{question:{control:"text"},options:{control:"object"},onVote:{control:"object"},userVote:{control:"text"}}},s={args:{question:"What is your favorite language?",options:[{id:1,text:"Javascript",votes:2},{id:2,text:"Typescript",votes:200}],onVote:o=>console.log(o)}},n={args:{question:"What is your favorite language?",options:[{id:1,text:"Javascript",votes:2},{id:2,text:"Typescript",votes:200},{id:3,text:"C++",votes:100},{id:4,text:"Rust",votes:500}],onVote:o=>console.log(o),userVote:"Javascript"}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    question: "What is your favorite language?",
    options: [{
      id: 1,
      text: "Javascript",
      votes: 2
    }, {
      id: 2,
      text: "Typescript",
      votes: 200
    }],
    onVote: option => console.log(option)
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,x,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    question: "What is your favorite language?",
    options: [{
      id: 1,
      text: "Javascript",
      votes: 2
    }, {
      id: 2,
      text: "Typescript",
      votes: 200
    }, {
      id: 3,
      text: "C++",
      votes: 100
    }, {
      id: 4,
      text: "Rust",
      votes: 500
    }],
    onVote: option => console.log(option),
    userVote: "Javascript"
  }
}`,...(p=(x=n.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const V=["PollWithOptions","PollWithResults"];export{s as PollWithOptions,n as PollWithResults,V as __namedExportsOrder,N as default};
