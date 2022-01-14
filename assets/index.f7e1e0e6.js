import{j as x,r as m,s as v,l as w,b as k,o as S,a as j,f as R,c as A,d as D,R as L,e as F}from"./vendor.7b387565.js";const P=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};P();const r=x.exports.jsx,p=x.exports.jsxs;function $(){return p("header",{className:"Header p-10 flex justify-between border-b",children:[r("h1",{className:"text-4xl font-bold text-gradient",children:"Pokemon Type Matchup"}),r("a",{href:"https://github.com/shah-a/int2.2-pokemon-type-matchup/",target:"_blank",rel:"noreferrer",className:"gh-hover transition-colors motion-safe:hover:animate-wiggle",children:r("i",{className:"fab fa-github-alt fa-3x"})})]})}function E(i){const{data:n,name:o,setName:l,num:e,setNum:a}=i,c=n.reduce((t,s)=>(t[s.Name]=s.Number,t),{}),u=n.map(t=>r("option",{value:t.Name,children:`#${t.Number}: ${t.Name}`},t.Name));return p("div",{className:"Select flex flex-col",children:[r("select",{className:"px-3 py-1 mb-3 border-2 rounded",value:o,onChange:t=>{l(t.target.value),a(c[t.target.value])},children:u}),r("img",{src:`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e}.png`,alt:o})]})}function M(i){const{data:n,types:o,name:l,num:e}=i,a=m.exports.useRef(),c=475,u=475,t=50,s=n.filter(d=>d.Name===l)[0];return m.exports.useEffect(()=>{const d=v(a.current);d.selectAll("*").remove();const h=w().domain([0,4]).range([t,c-t]).nice(),g=k().domain(o).rangeRound([t,u-t]).padding(.125),y=S().domain([0,.25,.5,1,2,4]).range(["","#c4b5fd","#7dd3fc","#6ee7b7","#fdba74","#f87171"]),N=j(h).tickFormat(R(".2f")).ticks(5).tickValues([0,.25,.5,1,2,4]),b=A(g);d.append("g").attr("transform",`translate(0, ${u-t})`).call(N),d.append("g").attr("transform",`translate(${t}, 0)`).call(b),d.append("g").selectAll("rect").data(o).enter().append("rect").attr("class","bar").attr("x",t+1).attr("y",f=>g(f)).attr("width",f=>h(s[f])-h(0)).attr("height",g.bandwidth()).attr("fill",f=>y(s[f]))},[l,e]),r("div",{className:"Display flex flex-col justify-center",children:r("svg",{width:475,height:475,ref:a})})}function O(){const[i,n]=m.exports.useState(void 0),[o,l]=m.exports.useState("Leafeon"),[e,a]=m.exports.useState("470"),c=["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"],u=t=>{const s=t;return s.Number=s.Number.slice(1),c.map(d=>(s[d]=+s[d].slice(1),null)),s};return m.exports.useEffect(()=>{D("./PokeTypeMatchupData.csv",u).then(t=>n(t))},[]),p("div",{className:"App max-w-5xl mx-auto",children:[r($,{}),p("div",{className:"p-10 flex justify-between",children:[i&&r(E,{data:i,name:o,setName:l,num:e,setNum:a}),i&&r(M,{data:i,types:c,name:o,num:e})]})]})}L.render(r(F.StrictMode,{children:r(O,{})}),document.getElementById("root"));
