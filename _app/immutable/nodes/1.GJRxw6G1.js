import{s as S,n as g,e as y}from"../chunks/scheduler.k-kUyWhY.js";import{S as j,i as k,g as d,m as v,s as q,h,j as b,n as x,f as u,c as C,k as E,a as D,y as l,o as $}from"../chunks/index.KMGReBMQ.js";import{d as H}from"../chunks/singletons.FuzT0iQJ.js";const I=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return I().page.subscribe(s)}};function V(s){let e,a,r=s[0].status+"",n,m,i,c=s[0].error?.message+"",p;return{c(){e=d("div"),a=d("h1"),n=v(r),m=q(),i=d("p"),p=v(c),this.h()},l(o){e=h(o,"DIV",{class:!0});var t=b(e);a=h(t,"H1",{class:!0});var f=b(a);n=x(f,r),f.forEach(u),m=C(t),i=h(t,"P",{});var _=b(i);p=x(_,c),_.forEach(u),t.forEach(u),this.h()},h(){E(a,"class","text-4xl font-bold mb-3"),E(e,"class","text-center")},m(o,t){D(o,e,t),l(e,a),l(a,n),l(e,m),l(e,i),l(i,p)},p(o,[t]){t&1&&r!==(r=o[0].status+"")&&$(n,r),t&1&&c!==(c=o[0].error?.message+"")&&$(p,c)},i:g,o:g,d(o){o&&u(e)}}}function w(s,e,a){let r;return y(s,P,n=>a(0,r=n)),[r]}let F=class extends j{constructor(e){super(),k(this,e,w,V,S,{})}};export{F as component};