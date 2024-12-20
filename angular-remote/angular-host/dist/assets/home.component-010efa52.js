import{i as l}from"./__federation_shared_@angular/common-4841d92b.js";var c=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=(s,o,r,t)=>{for(var e=t>1?void 0:t?m(o,r):o,n=s.length-1,a;n>=0;n--)(a=s[n])&&(e=(t?a(o,r,e):a(e))||e);return t&&e&&c(o,r,e),e};const{ChangeDetectionStrategy:h,Component:u}=await l("@angular/core"),{CommonModule:g}=await l("@angular/common");let p=class{constructor(){}ngOnInit(){}};p=i([u({selector:"app-root",standalone:!0,imports:[g],template:`
  <p> hello, this is angular home page </p>
  `,styles:[`
      :host {
        display: block;
      }
    `],changeDetection:h.OnPush})],p);export{p as HomeComponent};
