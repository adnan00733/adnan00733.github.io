import{r as o,j as e}from"./index-Byci7xPg.js";import{a as p,g as x}from"./utils-DSjwZMwT.js";import{C as h,a as j}from"./CCardBody-BCFiPF46.js";import{C}from"./CCardHeader-bg_9wqdz.js";import{C as b}from"./CForm-DT43wKaw.js";import{C as u}from"./CFormLabel-DoMnNiPE.js";import{C as f}from"./CFormInput-Dn_h0ad5.js";import{a as y}from"./index.es-ByU2_pgB.js";import{C as S,a as k,b as l,c as a,d as T,e as t}from"./CTable-CYTP7b8M.js";import"./CFormControlWrapper-JY3xhpU2.js";import"./CFormControlValidation-Ba1Zobbo.js";const I=()=>{const[i,c]=o.useState(!1),[s,m]=o.useState({}),d=r=>{r.preventDefault(),r.stopPropagation(),c(!0);let n=r.target.year.value;m(p(x(n)))};return e.jsxs(h,{className:"mb-4",children:[e.jsx(C,{children:"Stocks"}),e.jsxs(j,{children:[e.jsxs(b,{onSubmit:d,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{htmlFor:"year",children:"Year"}),e.jsx(f,{type:"text",id:"year",name:"year",placeholder:"2024"})]}),e.jsx("div",{className:"mb-3",children:e.jsx(y,{color:"primary",type:"submit",children:"Submit"})})]}),i&&e.jsx("div",{children:s&&!Object.keys(s).length!==0&&e.jsxs(S,{children:[e.jsx(k,{children:e.jsxs(l,{children:[e.jsx(a,{scope:"col",children:"#"}),e.jsx(a,{scope:"col",children:"Planet"}),e.jsx(a,{scope:"col",children:"Detail"})]})}),e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(t,{children:s.id}),e.jsx(t,{children:s.planet}),e.jsx(t,{children:s.detail})]})})]})})]})]})};export{I as default};
