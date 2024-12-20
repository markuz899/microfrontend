import"./@angular/compiler-10ef337a.js";import"./zone.js-befe650e.js";import{b}from"./@angular/platform-browser-fa9a45ef.js";import{i as _}from"./__federation_shared_@angular/common-4841d92b.js";import{_ as s}from"./@angular-architects/module-federation-b37c0522.js";import{R as v,a as R,p as w}from"./@angular/router-210887f2.js";import{r as u}from"./react-f7b5fc36.js";import{r as E}from"./react-dom-cd20d14c.js";import{B as O}from"./react-router-dom-8062f06d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const P={remoteB:{url:"http://localhost:5002/remoteB/assets/remoteEntry.js",format:"esm",from:"vite"}},f={},L=async(t,e)=>{const o=typeof t=="function"?await t():t,n=document.createElement("script");n.type="text/javascript",n.onload=e,n.src=o,document.getElementsByTagName("head")[0].appendChild(n)};function m(t,e){return j(t).then(o=>()=>e==="webpack"&&Object.prototype.toString.call(o).indexOf("Module")>-1&&o.default?o.default:o)}function h(t,e){const o=Object.assign(t,e);for(const n of Object.keys(o))typeof o[n]=="object"&&typeof e[n]=="object"&&(o[n]=h(o[n],e[n]));return o}const d=t=>h({"@angular/core":{"16.2.4":{get:()=>m(new URL("__federation_shared_@angular/core-acd82a72.js",import.meta.url).href,t),loaded:1}},"@angular/common":{"16.2.4":{get:()=>m(new URL("__federation_shared_@angular/common-4841d92b.js",import.meta.url).href,t),loaded:1}}},(globalThis.__federation_shared__||{}).default||{});async function j(t){return f[t]??=s(()=>import(t),[]),f[t]}async function A(t){const e=P[t];if(e.inited)return e.lib;if(e.format==="var")return new Promise(o=>{const n=()=>{e.inited||(e.lib=window[t],e.lib.init(d(e.from)),e.inited=!0),o(e.lib)};return L(e.url,n)});if(["esm","systemjs"].includes(e.format))return new Promise((o,n)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(i=>{s(()=>import(i),[]).then(a=>{if(!e.inited){const c=d(e.from);a.init(c),e.lib=a,e.lib.init(c),e.inited=!0}o(e.lib)}).catch(n)})})}function C(t,e){if(!t?.default&&e){let o=Object.create(null);return o.default=t,o.__esModule=!0,o}return t}function D(t,e){return A(t).then(o=>o.get(e).then(n=>n()))}var g,p=E;g=p.createRoot,p.hydrateRoot;var x=Object.defineProperty,M=Object.getOwnPropertyDescriptor,y=(t,e,o,n)=>{for(var r=n>1?void 0:n?M(e,o):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(r=(n?a(e,o,r):a(r))||r);return n&&r&&x(e,o,r),r};const{ChangeDetectionStrategy:B,Component:I,ElementRef:S,ViewChild:U}=await _("@angular/core"),{CommonModule:T}=await _("@angular/common");let l=class{reactElementRef;constructor(){console.log("known issue: templateUrl not working on this version. You should try inline template which was commented")}ngOnInit(){}async loadReact(){const e=(await D("remoteB","./Button").then(r=>C(r,!0)).then(r=>({default:r.default}))).default;if(typeof e!="function")throw new Error("Il modulo remoto non restituisce");const o=this.reactElementRef.nativeElement;g(o).render(u.createElement(O,null,u.createElement(e,{title:"Hello from Angular"})))}};y([U("reactElementRef",{read:S,static:!0})],l.prototype,"reactElementRef",2);l=y([I({selector:"app-root",standalone:!0,imports:[T,v,R],template:`
    <p>hello, this is angular, avite</p>
    <a
      routerLink="/"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >Home |
    </a>
    <a
      routerLink="/about-us"
      href="#"
      class="text-xl font-bold no-underline hover:underline ..."
      >About us</a
    >
    <h1>Host Angular App</h1>

    <div>
      <button (click)="loadReact()">Load React component</button>
    </div>

    <div #reactElementRef></div>
    <hr />
    <router-outlet></router-outlet>
  `,styles:[`
      :host {
        display: block;
      }
    `],changeDetection:B.OnPush})],l);const V=[{path:"",loadComponent:()=>s(()=>import("./home.component-010efa52.js"),["assets/home.component-010efa52.js","assets/__federation_shared_@angular/common-4841d92b.js","assets/@angular-architects/module-federation-b37c0522.js"]).then(t=>t.HomeComponent)},{path:"about-us",loadComponent:()=>s(()=>import("./about-us.component-a88dc0c1.js"),["assets/about-us.component-a88dc0c1.js","assets/__federation_shared_@angular/common-4841d92b.js","assets/@angular-architects/module-federation-b37c0522.js"]).then(t=>t.AboutUsComponent)}],H=[w(V)];b(l,{providers:[...H]});
