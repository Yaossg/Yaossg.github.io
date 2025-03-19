"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1514],{4994:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=a(4848),i=a(8453);const l={},c="\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9",r={id:"cnss/1",title:"\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9",description:"\u9898\u76ee",source:"@site/docs/cnss/1.md",sourceDirName:"cnss",slug:"/cnss/1",permalink:"/site/docs/cnss/1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udda5\ufe0f CNSS Recruit 2022 Dev",permalink:"/site/docs/cnss/0"},next:{title:"\u23e9 \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0a",permalink:"/site/docs/cnss/2"}},s={},d=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"C++",id:"c",level:3},{value:"Python",id:"python",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Kotlin",id:"kotlin",level:3}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"-\u68a6\u5f00\u59cb\u7684\u5730\u65b9",children:"\ud83c\udf0f \u68a6\u5f00\u59cb\u7684\u5730\u65b9"}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u76ee",children:"\u9898\u76ee"}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u4f60\u627e\u5230\u7684\u4e09\u95e8\u8bed\u8a00\uff08\u6ce8\u610f\uff0c\u67d0\u8bed\u8a00\u7684\u65b9\u8a00\u548c\u8be5\u8bed\u8a00\u7b97\u4f5c\u540c\u4e00\u79cd\u8bed\u8a00\uff09\u5199\u51fa\u4e0b\u6587 Scheme \u8bed\u8a00\u7684\u7b49\u4ef7\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scheme",children:'(define (make-withdraw balance)\n  (lambda (amount)\n    (if (>= balance amount)\n        (begin (set! balance (- balance amount))\n               balance)\n        "v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3")))\n\n(define W1 (make-withdraw 100))\n(define W2 (make-withdraw 100))\n\n(W1 50)\n; 50\n(W2 70)\n; 30\n(W1 20)\n; 30\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u9644\u52a0\u9898\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"20%"}),"\uff1a\u5728\u7528\u6cd5\u4e0d\u53d8\u7684\u524d\u63d0\u4e0b\uff0c\u7528\u4f60\u7528\u8fc7\u7684\u5176\u4e2d\u4e00\u79cd\u8bed\u8a00\u6216\u8005 Lisp \u53ca\u5176\u65b9\u8a00\u589e\u52a0\u4ee5\u4e0b\u529f\u80fd\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scheme",children:"(v50 W1)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u5f97\u4f59\u989d\u589e\u52a0 50 \u5143\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u9053\u9898\u4f1a\u8ba9\u4eba\u4e0d\u7531\u81ea\u4e3b\u7684\u5199\u4e00\u4e2a\u7c7b\u51fa\u6765\u5f53\u4f2a\u51fd\u6570\uff0c\u7136\u800c\u51fa\u9898\u4eba\u7684\u672c\u610f\u662f\u4f7f\u7528\u95ed\u5305\uff0c\u56e0\u6b64\u95ee\u9898\u5173\u952e\u70b9\u5728\u4e8e\u5982\u4f55\u6355\u83b7\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u7ed9\u51fa\u56db\u79cd\u8bed\u8a00\u7684\u89e3"}),"\n",(0,t.jsx)(e.h3,{id:"c",children:"C++"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n#include <functional>\n\nstd::function<void(int)> withdraw(int balance) {\n    return [balance] (int amount) mutable {\n        if (balance >= amount) {\n            balance -= amount;\n            if (amount >= 0)\n                std::cout << balance << std::endl;\n        } else {\n            std::cout << "v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3" << std::endl;\n        }\n    };\n}\n\nvoid v50(std::function<void(int)>& w) {\n    w(-50);\n}\n\n\nint main() {\n    auto w1 = withdraw(100), w2 = withdraw(100);\n    w1(50);\n    w2(70);\n    w2(50);\n    v50(w2);\n    w2(50);\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"python",children:"Python"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u63d0\u4ea4\u7684\u7248\u672c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"def withdraw(balance):\n    def apply(amount, balance = [balance]):\n        if balance[0] >= amount:\n            balance[0] -= amount\n            if amount >= 0:\n                print(balance[0])\n        else:\n            print('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n    return apply\n\n\ndef v50(w):\n    w(-50)\n\n\nw1 = withdraw(100)\nw2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u66f4\u597d\u7684\u7248\u672c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"def withdraw(balance):\n    def apply(amount):\n        nonlocal balance\n        if balance >= amount:\n            balance -= amount\n            if amount >= 0:\n                print(balance)\n        else:\n            print('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n    return apply\n\n\ndef v50(w):\n    w(-50)\n\n\nw1 = withdraw(100)\nw2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function withdraw(balance) {\n    return function(amount) {\n        if (balance >= amount) {\n            balance -= amount\n            if (amount >= 0) console.log(balance)\n        } else {\n            console.log('v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3')\n        }\n    }\n}\n\nfunction v50(w) {\n    w(-50)\n}\n\nvar w1 = withdraw(100)\nvar w2 = withdraw(100)\nw1(50)\nw2(70)\nw2(50)\nv50(w2)\nw2(50)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'fun withdraw(balance: Int): (Int)->Unit {\n    var balance = balance\n    return { amount: Int->\n        if (balance >= amount) {\n            balance -= amount\n            if (amount >= 0)\n                println(balance)\n        } else {\n            println("v\u621150\uff0c\u64ab\u6170\u6211\u652f\u96e2\u7834\u788e\u7684\u5fc3")\n        }\n    }\n}\n\nfun v50(w: (Int)->Unit) = w(-50)\n\n\nfun main() {\n    val w1 = withdraw(100)\n    val w2 = withdraw(100)\n    w1(50)\n    w2(70)\n    w2(50)\n    v50(w2)\n    w2(50)\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>r});var t=a(6540);const i={},l=t.createContext(i);function c(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);