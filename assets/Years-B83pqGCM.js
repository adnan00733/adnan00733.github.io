import{r as o,j as e}from"./index-CneV5hRV.js";import{a as p,g as x}from"./utils-DSjwZMwT.js";import{C as h,a as j}from"./CCardBody-CbcDT6wi.js";import{C}from"./CCardHeader-R7CGmYYe.js";import{C as b}from"./CForm-BvTK2pCT.js";import{C as u}from"./CFormLabel-Cxhz8kl8.js";import{C as f}from"./CFormInput-BnEMjJX0.js";import{a as y}from"./index.es-DZglLkhy.js";import{C as S,a as k,b as l,c as a,d as T,e as t}from"./CTable-B8LzFRO5.js";import"./CFormControlWrapper-DWk5bKj_.js";import"./CFormControlValidation-B7qLSxru.js";const I=()=>{const[i,c]=o.useState(!1),[s,m]=o.useState({}),d=r=>{r.preventDefault(),r.stopPropagation(),c(!0);let n=r.target.year.value;m(p(x(n)))};return e.jsxs(h,{className:"mb-4",children:[e.jsx(C,{children:"Stocks"}),e.jsxs(j,{children:[e.jsxs(b,{onSubmit:d,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{htmlFor:"year",children:"Year"}),e.jsx(f,{type:"text",id:"year",name:"year",placeholder:"2024"})]}),e.jsx("div",{className:"mb-3",children:e.jsx(y,{color:"primary",type:"submit",children:"Submit"})})]}),i&&e.jsx("div",{children:s&&!Object.keys(s).length!==0&&e.jsxs(S,{children:[e.jsx(k,{children:e.jsxs(l,{children:[e.jsx(a,{scope:"col",children:"#"}),e.jsx(a,{scope:"col",children:"Planet"}),e.jsx(a,{scope:"col",children:"Detail"})]})}),e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(t,{children:s.id}),e.jsx(t,{children:s.planet}),e.jsx(t,{children:s.detail})]})})]})})]})]})};export{I as default};
