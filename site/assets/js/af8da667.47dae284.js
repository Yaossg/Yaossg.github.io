"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5100],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,v=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return t?n.createElement(v,c(c({ref:r},u),{},{components:t})):n.createElement(v,c({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83143:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:3},c="\u9884\u5904\u7406\u5668",a={unversionedId:"cripplec/preprocessor",id:"cripplec/preprocessor",title:"\u9884\u5904\u7406\u5668",description:"\u26a0\ufe0f \u4f60\u5148\u522b\u6025 \u26a0\ufe0f \ud83d\udea7 \u672c\u9875\u9762\u4ecd\u5728\u65bd\u5de5\u4e2d \ud83d\udea7",source:"@site/docs/cripplec/preprocessor.md",sourceDirName:"cripplec",slug:"/cripplec/preprocessor",permalink:"/site/docs/cripplec/preprocessor",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c",permalink:"/site/docs/cripplec/text"},next:{title:"\u8fd0\u7b97\u7b26\uff08\u4e0a\uff09",permalink:"/site/docs/cripplec/op-1"}},l={},p=[{value:"\u5b8f\u662f\u6587\u672c\u66ff\u6362",id:"\u5b8f\u662f\u6587\u672c\u66ff\u6362",level:2},{value:"\u5b8f\u4e0d\u662f\u7c7b\u578b\u5b9a\u4e49",id:"\u5b8f\u4e0d\u662f\u7c7b\u578b\u5b9a\u4e49",level:3},{value:"\u5b8f\u4e0d\u662f\u5e38\u91cf\u5b9a\u4e49",id:"\u5b8f\u4e0d\u662f\u5e38\u91cf\u5b9a\u4e49",level:3},{value:"\u5b8f\u4e0d\u662f\u51fd\u6570\u5b9a\u4e49",id:"\u5b8f\u4e0d\u662f\u51fd\u6570\u5b9a\u4e49",level:3},{value:"\u5b8f\u4e0e\u9017\u53f7",id:"\u5b8f\u4e0e\u9017\u53f7",level:4},{value:"\u53ef\u53d8\u53c2\u6570\u5b8f",id:"\u53ef\u53d8\u53c2\u6570\u5b8f",level:4},{value:"# \u548c ##",id:"-\u548c-",level:4},{value:"<code>__func__</code> \u4e0d\u662f\u5b8f",id:"__func__-\u4e0d\u662f\u5b8f",level:2},{value:"Header Guard",id:"header-guard",level:2}],u={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9884\u5904\u7406\u5668"},"\u9884\u5904\u7406\u5668"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u4f60\u5148\u522b\u6025 \u26a0\ufe0f \ud83d\udea7 \u672c\u9875\u9762\u4ecd\u5728\u65bd\u5de5\u4e2d \ud83d\udea7")),(0,o.kt)("h2",{id:"\u5b8f\u662f\u6587\u672c\u66ff\u6362"},"\u5b8f\u662f\u6587\u672c\u66ff\u6362"),(0,o.kt)("h3",{id:"\u5b8f\u4e0d\u662f\u7c7b\u578b\u5b9a\u4e49"},"\u5b8f\u4e0d\u662f\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("h3",{id:"\u5b8f\u4e0d\u662f\u5e38\u91cf\u5b9a\u4e49"},"\u5b8f\u4e0d\u662f\u5e38\u91cf\u5b9a\u4e49"),(0,o.kt)("h3",{id:"\u5b8f\u4e0d\u662f\u51fd\u6570\u5b9a\u4e49"},"\u5b8f\u4e0d\u662f\u51fd\u6570\u5b9a\u4e49"),(0,o.kt)("h4",{id:"\u5b8f\u4e0e\u9017\u53f7"},"\u5b8f\u4e0e\u9017\u53f7"),(0,o.kt)("h4",{id:"\u53ef\u53d8\u53c2\u6570\u5b8f"},"\u53ef\u53d8\u53c2\u6570\u5b8f"),(0,o.kt)("h4",{id:"-\u548c-"},"#"," \u548c ","#","#"),(0,o.kt)("h2",{id:"__func__-\u4e0d\u662f\u5b8f"},(0,o.kt)("inlineCode",{parentName:"h2"},"__func__")," \u4e0d\u662f\u5b8f"),(0,o.kt)("h2",{id:"header-guard"},"Header Guard"))}s.isMDXComponent=!0}}]);