var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}const g="modulepreload",E=function(n){return"/"+n},m={},k=function(l,t,o){if(!t||t.length===0)return l();const i=document.getElementsByTagName("link");return Promise.all(t.map(e=>{if(e=E(e),e in m)return;m[e]=!0;const a=e.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!o)for(let s=i.length-1;s>=0;s--){const y=i[s];if(y.href===e&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":g,a||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),a)return new Promise((s,y)=>{r.addEventListener("load",s),r.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>l()).catch(e=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=e,window.dispatchEvent(a),!a.defaultPrevented)throw e})};var p=function(n,l){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},p(n,l)};function x(n,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");p(n,l);function t(){this.constructor=n}n.prototype=l===null?Object.create(l):(t.prototype=l.prototype,new t)}function I(n,l,t,o){function i(e){return e instanceof t?e:new t(function(a){a(e)})}return new(t||(t=Promise))(function(e,a){function u(s){try{r(o.next(s))}catch(y){a(y)}}function f(s){try{r(o.throw(s))}catch(y){a(y)}}function r(s){s.done?e(s.value):i(s.value).then(u,f)}r((o=o.apply(n,l||[])).next())})}function P(n,l){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,i,e,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=u(0),a.throw=u(1),a.return=u(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(r){return function(s){return f([r,s])}}function f(r){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,r[0]&&(t=0)),t;)try{if(o=1,i&&(e=r[0]&2?i.return:r[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,r[1])).done)return e;switch(i=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,i=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=l.call(n,t)}catch(s){r=[6,s],i=0}finally{o=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function v(n){var l=typeof Symbol=="function"&&Symbol.iterator,t=l&&n[l],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(l?"Object is not iterable.":"Symbol.iterator is not defined.")}function T(n,l){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),i,e=[],a;try{for(;(l===void 0||l-- >0)&&!(i=o.next()).done;)e.push(i.value)}catch(u){a={error:u}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return e}function A(n,l,t){if(t||arguments.length===2)for(var o=0,i=l.length,e;o<i;o++)(e||!(o in l))&&(e||(e=Array.prototype.slice.call(l,0,o)),e[o]=l[o]);return n.concat(e||Array.prototype.slice.call(l))}function w(n){return this instanceof w?(this.v=n,this):new w(n)}function C(n,l,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,l||[]),i,e=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(c){return function(h){return Promise.resolve(h).then(c,y)}}function u(c,h){o[c]&&(i[c]=function(d){return new Promise(function(_,S){e.push([c,d,_,S])>1||f(c,d)})},h&&(i[c]=h(i[c])))}function f(c,h){try{r(o[c](h))}catch(d){b(e[0][3],d)}}function r(c){c.value instanceof w?Promise.resolve(c.value.v).then(s,y):b(e[0][2],c)}function s(c){f("next",c)}function y(c){f("throw",c)}function b(c,h){c(h),e.shift(),e.length&&f(e[0][0],e[0][1])}}function R(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var l=n[Symbol.asyncIterator],t;return l?l.call(n):(n=typeof v=="function"?v(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(e){t[e]=n[e]&&function(a){return new Promise(function(u,f){a=n[e](a),i(u,f,a.done,a.value)})}}function i(e,a,u,f){Promise.resolve(f).then(function(r){e({value:r,done:u})},a)}}export{k as _,v as a,A as b,T as c,x as d,C as e,P as f,w as g,I as h,R as i,O as j,j as k};