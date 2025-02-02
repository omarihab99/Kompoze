import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{R as b}from"./index-DJO9vBfz.js";const m=({question:o,options:r,onVote:x,userVote:i})=>{const[g,v]=b.useState(i!==""&&i!==void 0),h=e=>{x(e),v(!0)};return t.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:[t.jsx("p",{className:"text-black text-lg font-serif font-light",children:o}),g?t.jsx("div",{className:"flex flex-col gap-2 w-full px-4 transition-opacity duration-500",children:r.map(e=>t.jsx("div",{children:t.jsxs("div",{className:"text-center px-2 py-1  flex flex-row justify-between items-center bg-gradient-to-r from-gray-300 to-transparent",style:{width:e.votes/r.reduce((f,y)=>f+y.votes,0)*100+"%"},children:[t.jsx("span",{className:"font-bold text-lg text-black",children:e.text}),t.jsx("div",{className:"w-fit flex justify-center items-center px-2 py-1",children:t.jsx("span",{className:"font-bold text-lg text-black",children:e.votes})})]})},e.id))}):t.jsx("div",{className:"flex flex-row gap-2 transition-opacity duration-500",children:r.map(e=>t.jsx("button",{className:"hover:bg-gray-200 hover:text-black border-black hover:border-black transition-colors duration-400",onClick:()=>{h(e.text)},children:e.text},e.id))})]})};m.__docgenInfo={description:`The PollWidget component renders a poll with options and handles votes.

The component will render either the PollOptions or PollResults component
depending on whether the user has voted or not. The PollOptions component
renders the options and a button to vote, while the PollResults component
renders the results of the poll.

@example
const options = [
  { id: 1, text: "Option 1", votes: 0 },
  { id: 2, text: "Option 2", votes: 0 },
];
const userVote = "Option 1";

<PollWidget
  question="What is your favorite option?"
  options={options}
  onVote={(option) => console.log(option)}
  userVote={userVote}
/>`,methods:[],displayName:"PollWidget",props:{question:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | string;
  text: string;
  votes: number;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"votes",value:{name:"number",required:!0}}]}}],raw:"PollOption[]"},description:""},onVote:{required:!0,tsType:{name:"signature",type:"function",raw:"(option?: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},userVote:{required:!1,tsType:{name:"string"},description:""}}};const q={component:m,tags:["autodocs"],title:"PollWidget",argTypes:{question:{control:"text"},options:{control:"object"},onVote:{control:"object"},userVote:{control:"text"}}},n={args:{question:"What is your favorite language?",options:[{id:1,text:"Javascript",votes:2},{id:2,text:"Typescript",votes:200}],onVote:o=>console.log(o)}},s={args:{question:"What is your favorite language?",options:[{id:1,text:"Javascript",votes:2},{id:2,text:"Typescript",votes:200},{id:3,text:"C++",votes:100},{id:4,text:"Rust",votes:500}],onVote:o=>console.log(o),userVote:"Javascript"}};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const w=["PollWithOptions","PollWithResults"];export{n as PollWithOptions,s as PollWithResults,w as __namedExportsOrder,q as default};
