import{s as S,n as O}from"../chunks/scheduler.k-kUyWhY.js";import{S as z,i as A,g as _,s as L,h as v,j as C,y,c as k,f as g,k as p,a as T,z as u,A as V,B as G,m as U,n as j,o as B}from"../chunks/index.UPebm5sH.js";import{e as P}from"../chunks/index.bBYH4D5A.js";const q=!0,Y=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,ssr:Y},Symbol.toStringTag,{value:"Module"}));function N(a){let e,l='<span class="label-text text-red-400">Invalid URL</span>';return{c(){e=_("div"),e.innerHTML=l,this.h()},l(o){e=v(o,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-1qm6lu8"&&(e.innerHTML=l),this.h()},h(){p(e,"class","label")},m(o,d){T(o,e,d)},d(o){o&&g(e)}}}function R(a){let e,l,o="Your new url:",d,t,b;return{c(){e=_("div"),l=_("div"),l.textContent=o,d=L(),t=_("a"),b=U(a[1]),this.h()},l(i){e=v(i,"DIV",{class:!0});var s=C(e);l=v(s,"DIV",{"data-svelte-h":!0}),y(l)!=="svelte-1xgci4s"&&(l.textContent=o),d=k(s),t=v(s,"A",{href:!0,class:!0});var h=C(t);b=j(h,a[1]),h.forEach(g),s.forEach(g),this.h()},h(){p(t,"href",a[1]),p(t,"class","break-all text-xl link link-primary w-full"),p(e,"class","text-left")},m(i,s){T(i,e,s),u(e,l),u(e,d),u(e,t),u(t,b)},p(i,s){s&2&&B(b,i[1]),s&2&&p(t,"href",i[1])},d(i){i&&g(e)}}}function Z(a){let e,l,o="URL Lengthener",d,t,b="<p>NO storing data, NO cookies, ONLY HUGE LINKS</p> <p>Make &#39;em big</p> <p>Because size <strong>DOES</strong> matter</p> <p>BIGGER better faster LONGER</p> <p>Go big or go home</p>",i,s,h,w='<span class="label-text">Enter a URL (starting with http:// or https://)</span>',E,m,I,H,M,D,r=a[0]&&!a[2]&&N(),n=a[2]&&R(a);return{c(){e=_("div"),l=_("h1"),l.textContent=o,d=L(),t=_("div"),t.innerHTML=b,i=L(),s=_("label"),h=_("div"),h.innerHTML=w,E=L(),m=_("input"),I=L(),r&&r.c(),H=L(),n&&n.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var c=C(e);l=v(c,"H1",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-sanl47"&&(l.textContent=o),d=k(c),t=v(c,"DIV",{"data-svelte-h":!0}),y(t)!=="svelte-bj5km2"&&(t.innerHTML=b),i=k(c),s=v(c,"LABEL",{class:!0});var x=C(s);h=v(x,"DIV",{class:!0,"data-svelte-h":!0}),y(h)!=="svelte-8leof3"&&(h.innerHTML=w),E=k(x),m=v(x,"INPUT",{type:!0,placeholder:!0,class:!0}),I=k(x),r&&r.l(x),x.forEach(g),H=k(c),n&&n.l(c),c.forEach(g),this.h()},h(){p(l,"class","text-6xl font-semibold text-primary"),p(h,"class","label"),p(m,"type","url"),p(m,"placeholder","https://example.com"),p(m,"class","input input-bordered input-primary w-full"),p(s,"class","form-control w-full"),p(e,"class","flex flex-col gap-8 items-center text-center")},m(f,c){T(f,e,c),u(e,l),u(e,d),u(e,t),u(e,i),u(e,s),u(s,h),u(s,E),u(s,m),V(m,a[0]),u(s,I),r&&r.m(s,null),u(e,H),n&&n.m(e,null),M||(D=G(m,"input",a[3]),M=!0)},p(f,[c]){c&1&&m.value!==f[0]&&V(m,f[0]),f[0]&&!f[2]?r||(r=N(),r.c(),r.m(s,null)):r&&(r.d(1),r=null),f[2]?n?n.p(f,c):(n=R(f),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:O,o:O,d(f){f&&g(e),r&&r.d(),n&&n.d(),M=!1,D()}}}const K=/^https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}(:\d+)?\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)$/;function F(a,e,l){let o,d,{url:t=""}=e;function b(){t=this.value,l(0,t)}return a.$$set=i=>{"url"in i&&l(0,t=i.url)},a.$$.update=()=>{a.$$.dirty&1&&l(2,o=K.test(t)),a.$$.dirty&1&&l(1,d=t?`${window.location.href}${P(t)}`:"")},[t,d,o,b]}class $ extends z{constructor(e){super(),A(this,e,F,Z,S,{url:0})}}export{$ as component,X as universal};
