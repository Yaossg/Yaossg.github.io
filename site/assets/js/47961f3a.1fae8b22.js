"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9840],{489:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(4848),s=i(8453);const r={},l="\ud83c\udd95 malloc \u600e\u4e48\u662f\u4e2a\u51fd\u6570\u554a",c={id:"cnss/8",title:"\ud83c\udd95 malloc \u600e\u4e48\u662f\u4e2a\u51fd\u6570\u554a",description:"\u9898\u76ee",source:"@site/docs/cnss/8.md",sourceDirName:"cnss",slug:"/cnss/8",permalink:"/site/docs/cnss/8",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udff4 \u81ea\u4e0b\u800c\u4e0a\u7684\u7a83\u542c\u653b\u51fb",permalink:"/site/docs/cnss/7"},next:{title:"\ud83d\udef0\ufe0f [A] \u6811\u72b6\u56fe\u8bbe\u8ba1\u8005",permalink:"/site/docs/cnss/A"}},o={},d=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"Windows \u5b9e\u73b0",id:"windows-\u5b9e\u73b0",level:3},{value:"Linux \u5b9e\u73b0",id:"linux-\u5b9e\u73b0",level:3}];function a(n){const e={code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"-malloc-\u600e\u4e48\u662f\u4e2a\u51fd\u6570\u554a",children:"\ud83c\udd95 malloc \u600e\u4e48\u662f\u4e2a\u51fd\u6570\u554a"}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u76ee",children:"\u9898\u76ee"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0d\u5141\u8bb8\u4f7f\u7528\u5185\u7f6e\u7684 ",(0,t.jsx)(e.code,{children:"malloc"})," \u548c ",(0,t.jsx)(e.code,{children:"free"}),"\uff0c\u7528 C \u8bed\u8a00\u5b9e\u73b0 ",(0,t.jsx)(e.code,{children:"mymalloc"})," \u548c ",(0,t.jsx)(e.code,{children:"myfree"}),"\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(e.h3,{id:"windows-\u5b9e\u73b0",children:"Windows \u5b9e\u73b0"}),"\n",(0,t.jsx)(e.p,{children:"\u6ca1\u9519\u3002\u4f60\u6ca1\u8bf4\u4e0d\u80fd\u7528 Windows \u5427\uff01"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#include <windows.h>\n\nvoid* mymalloc(size_t size) {\n    return HeapAlloc(GetProcessHeap(), 0, size);\n}\n\nvoid myfree(void* ptr) {\n    HeapFree(GetProcessHeap(), 0, ptr);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.del,{children:"\u6253\u6211\u65f6\u4e0b\u624b\u8f7b\u70b9"})}),"\n",(0,t.jsx)(e.h3,{id:"linux-\u5b9e\u73b0",children:"Linux \u5b9e\u73b0"}),"\n",(0,t.jsx)(e.p,{children:"\u54b3\u54b3\uff0c\u4e0d\u5f00\u73a9\u7b11\u4e86\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#include <unistd.h>\n#include <stddef.h>\n#include <stdbool.h>\n#include <stdlib.h>\n\nint brk(void *addr);\nvoid *sbrk(intptr_t increment);\n\n\ntypedef struct block block, *pblock;\nstruct block {\n    pblock next;\n    pblock prev;\n    size_t size;\n    size_t isFree;\n    char* ptr;\n    char data[];\n};\n\npblock head = NULL, tail = NULL;\n\nint fit(pblock b, size_t size) {\n    return b->isFree && b->size >= size;\n}\n\npblock find(size_t size) {\n    pblock b = head;\n    while (b && !fit(b, size)) {\n        b = b->next;\n    }\n    return b;\n}\n\npblock append(size_t size) {\n    pblock b = sbrk(0);\n    if (sbrk(sizeof(block) + size) == (void*)-1)\n        return NULL;\n    b->size = size;\n    b->next = NULL;\n    if (tail) {\n        tail->next = b;\n    } else {\n        head = b;\n    }\n    b->prev = tail;\n    b->isFree = false;\n    b->ptr = b->data;\n    return tail = b;\n}\n\nsize_t align8(size_t size) {\n    return ((size + 7) >> 3) << 3;\n}\n\nvoid* mymalloc(size_t size) {\n    size = align8(size);\n    pblock b = find(size);\n    if (b == NULL) {\n        b = append(size);\n        if (b == NULL) return NULL;\n    } else {\n        b->isFree = false;\n    }\n    return b->ptr;\n}\n\nbool inRange(void* ptr) {\n    return head < ptr && ptr < sbrk(0);\n}\n\npblock blockOf(void* ptr) {\n    return (pblock)((char*)ptr - sizeof(block));\n}\n\nbool isValid(void* ptr) {\n    return head && inRange(ptr) && blockOf(ptr)->ptr == ptr;\n}\n\nvoid myfree(void* ptr) {\n    if (isValid(ptr)) {\n        pblock b = blockOf(ptr);\n        b->isFree = true;\n        if (b->next == NULL) {\n            tail = b->prev;\n            if (tail) {\n                tail->next = NULL;\n            } else {\n                head = NULL;\n            }\n            brk(b);\n        }\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);