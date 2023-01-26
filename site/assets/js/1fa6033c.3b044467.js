"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5974],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>w});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),d=u(t),w=r,m=d["".concat(c,".").concat(w)]||d[w]||s[w]||l;return t?a.createElement(m,i(i({ref:e},p),{},{components:t})):a.createElement(m,i({ref:e},p))}));function w(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},957:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i="\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9",o={unversionedId:"cnss/1",id:"cnss/1",title:"\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9",description:"\u9898\u76ee",source:"@site/docs/cnss/1.md",sourceDirName:"cnss",slug:"/cnss/1",permalink:"/site/docs/cnss/1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udda5\ufe0f CNSS Recruit 2022 Dev",permalink:"/site/docs/cnss/0"},next:{title:"\u23e9 \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0a",permalink:"/site/docs/cnss/2"}},c={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"C++",id:"c",level:3},{value:"Python",id:"python",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Kotlin",id:"kotlin",level:3}],p={toc:u};function s(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u68a6\u5f00\u59cb\u7684\u5730\u65b9"},"\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9"),(0,r.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,r.kt)("p",null,"\u7528\u4f60\u627e\u5230\u7684\u4e09\u95e8\u8bed\u8a00\uff08\u6ce8\u610f\uff0c\u67d0\u8bed\u8a00\u7684\u65b9\u8a00\u548c\u8be5\u8bed\u8a00\u7b97\u4f5c\u540c\u4e00\u79cd\u8bed\u8a00\uff09\u5199\u51fa\u4e0b\u6587 Scheme \u8bed\u8a00\u7684\u7b49\u4ef7\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},'(define (make-withdraw balance)\n  (lambda (amount)\n    (if (>= balance amount)\n        (begin (set! balance (- balance amount))\n               balance)\n        "v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3")))\n\n(define W1 (make-withdraw 100))\n(define W2 (make-withdraw 100))\n\n(W1 50)\n; 50\n(W2 70)\n; 30\n(W1 20)\n; 30\n')),(0,r.kt)("p",null,"\u9644\u52a0\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"20%"),"\uff1a\u5728\u7528\u6cd5\u4e0d\u53d8\u7684\u524d\u63d0\u4e0b\uff0c\u7528\u4f60\u7528\u8fc7\u7684\u5176\u4e2d\u4e00\u79cd\u8bed\u8a00\u6216\u8005 Lisp \u53ca\u5176\u65b9\u8a00\u589e\u52a0\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(v50 W1)\n")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u5f97\u4f59\u989d\u589e\u52a0 50 \u5143\u3002"))),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("p",null,"\u8fd9\u9053\u9898\u4f1a\u8ba9\u4eba\u4e0d\u7531\u81ea\u4e3b\u7684\u5199\u4e00\u4e2a\u7c7b\u51fa\u6765\u5f53\u4f2a\u51fd\u6570\uff0c\u7136\u800c\u51fa\u9898\u4eba\u7684\u672c\u610f\u662f\u4f7f\u7528\u95ed\u5305\uff0c\u56e0\u6b64\u95ee\u9898\u5173\u952e\u70b9\u5728\u4e8e\u5982\u4f55\u6355\u83b7\u3002"),(0,r.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,r.kt)("p",null,"\u4e0b\u9762\u7ed9\u51fa\u56db\u79cd\u8bed\u8a00\u7684\u89e3"),(0,r.kt)("h3",{id:"c"},"C++"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <functional>\n\nstd::function<void(int)> withdraw(int balance) {\n    return [balance] (int amount) mutable {\n        if (balance >= amount) {\n            balance -= amount;\n            if (amount >= 0)\n                std::cout << balance << std::endl;\n        } else {\n            std::cout << "v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3" << std::endl;\n        }\n    };\n}\n\nvoid v50(std::function<void(int)>& w) {\n    w(-50);\n}\n\n\nint main() {\n    auto w1 = withdraw(100), w2 = withdraw(100);\n    w1(50);\n    w2(70);\n    w2(50);\n    v50(w2);\n    w2(50);\n}\n')),(0,r.kt)("h3",{id:"python"},"Python"),(0,r.kt)("p",null,"\u6211\u63d0\u4ea4\u7684\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def withdraw(balance):\n    def apply(amount, balance = [balance]):\n        if balance[0] >= amount:\n            balance[0] -= amount\n            if amount >= 0:\n                print(balance[0])\n        else:\n            print('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n    return apply\n\n\ndef v50(w):\n    w(-50)\n\n\nw1 = withdraw(100)\nw2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n")),(0,r.kt)("p",null,"\u66f4\u597d\u7684\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def withdraw(balance):\n    def apply(amount):\n        nonlocal balance\n        if balance >= amount:\n            balance -= amount\n            if amount >= 0:\n                print(balance)\n        else:\n            print('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n    return apply\n\n\ndef v50(w):\n    w(-50)\n\n\nw1 = withdraw(100)\nw2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n")),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function withdraw(balance) {\n    return function(amount) {\n        if (balance >= amount) {\n            balance -= amount\n            if (amount >= 0) console.log(balance)\n        } else {\n            console.log('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n        }\n    }\n}\n\nfunction v50(w) {\n    w(-50)\n}\n\nvar w1 = withdraw(100)\nvar w2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n")),(0,r.kt)("h3",{id:"kotlin"},"Kotlin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun withdraw(balance: Int): (Int)->Unit {\n    var balance = balance\n    return { amount: Int->\n        if (balance >= amount) {\n            balance -= amount\n            if (amount >= 0)\n                println(balance)\n        } else {\n            println("v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3")\n        }\n    }\n}\n\nfun v50(w: (Int)->Unit) = w(-50)\n\n\nfun main() {\n    val w1 = withdraw(100)\n    val w2 = withdraw(100)\n    w1(50)\n    w2(70)\n    w2(50)\n    v50(w2)\n    w2(50)\n}\n')))}s.isMDXComponent=!0}}]);