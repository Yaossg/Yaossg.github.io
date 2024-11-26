"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9972],{8933:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=e(4848),i=e(8453);const o={},c="\ud83d\udd0a [D]\u3010ECHO\u3011Re 15",r={id:"cnss/D",title:"\ud83d\udd0a [D]\u3010ECHO\u3011Re:Master 15",description:"\u9898\u76ee",source:"@site/docs/cnss/D.md",sourceDirName:"cnss",slug:"/cnss/D",permalink:"/site/docs/cnss/D",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddbc\ufe0f [C] \u7985\u4e0e\u8ba1\u7b97\u673a\u7ef4\u4fee\u827a\u672f",permalink:"/site/docs/cnss/C"},next:{title:"\ud83e\udd9c [E] \u65e0\u9053\u7ffb\u8bd1\u5b98",permalink:"/site/docs/cnss/E"}},a={},l=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u8fd0\u884c\u65b9\u5f0f",id:"\u8fd0\u884c\u65b9\u5f0f",level:2},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:2}];function h(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"-dechore-15",children:["\ud83d\udd0a [D]\u3010ECHO\u3011Re",":Master"," 15"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u76ee",children:"\u9898\u76ee"}),"\n",(0,s.jsx)(t.p,{children:"XuKaFy \u5e0c\u671b\u4f60\u5b9e\u73b0\u7684\u7cfb\u7edf\u6709\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7c7b\u4f3c\u4e8e\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5728\u5c4f\u5e55\u4e2d\u6253\u5370\u8f93\u5165\u7684\u5b57\u7b26\uff0c\u6309\u4e0b\u56de\u8f66\u80fd\u6362\u884c\uff0c\u6309\u4e0b\u9000\u683c\u80fd\u5220\u9664\uff08\u800c\u4e14\u8981\u80fd\u56de\u5230\u4e0a\u4e00\u884c\uff09"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u6ce8\u610f\uff0c\u6240\u6709\u529f\u80fd\u90fd\u4e0d\u80fd\u4f9d\u8d56\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u5f97\u81ea\u5df1\u5199\u4e00\u4e2a\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-nasm",children:"org 07c00h \nmov ax, cs\nmov ds, ax \nmov es, ax \ncall main \njmp $  \n\nmain:\n\tmov dh, 0\n\tmov dl, 0\n\tcall gets\n\t\ngets:\n\tmov ah, 0\n\tint 16h    ; keyboard input\n\t\n\tcmp al, 20h\n\tjb control ; control character if ASCII <= 0x20\n\t\n\tmov ah, 0eh\n\tint 10h\n\t\n\tjmp gets\n\t\ncontrol:\n\tcmp ah, 0eh\n\tje backspace\n\tcmp ah, 1ch\n\tje newline\n\tjmp gets\n\nbackspace:\n\t; get cursor\n\tmov ah, 3h\n\tmov bh, 0h\n\tint 10h\n\t\n\tcmp dl, 0h\n\tje backline\n\t\n\t; unwind cursor\n\tmov ah, 2h\n\tdec dl\n\tint 10h\n\t; blank character\n\tmov ah, 0eh\n\tmov al, ' '\n\tint 10h\n\t; rewind cursor\n\tmov ah, 2h\n\tint 10h\n\t\n\tjmp gets\n\t\nbackline:\n\t; do nothing if first line\n\tcmp dh, 0\n\tje gets\n\t\n\t; unwind cursor\n\tmov ah, 2h\n\tpop dx    ; load last line\n\tint 10h\n\t\n\tjmp gets\n\t\nnewline:\n\t; get cursor\n\tmov ah, 3h\n\tmov bh, 0h\n\tint 10h\n\t; move cursor to newline\n\tmov ah, 2h\n\tpush dx   ; store this line\n\tinc dh    ; line feed\n\tmov dl, 0 ; carriage return\n\tint 10h\n\t\n\tjmp gets\n\n\n\ntimes 510-($-$$) db 0\ndw 0xaa55\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd0\u884c\u65b9\u5f0f",children:"\u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"nasm boot.asm -o boot.bin\ndd  if=boot.bin  of=a.img  bs=512  count=1  conv=notrunc\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u751f\u6210\u955c\u50cf\u4e4b\u540e\u7528\u865a\u62df\u673a\u542f\u52a8"}),"\n",(0,s.jsx)(t.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,s.jsx)(t.mermaid,{value:"flowchart\n\tKB[\u952e\u76d8\u8f93\u5165]\n\tKB--\x3e\u666e\u901a\u5b57\u7b26--\x3e\u8f93\u51fa\u5b57\u7b26--\x3eKB2\n\tKB--\x3eC[\u63a7\u5236\u5b57\u7b26]\n\tC--\x3eNL[\u6362\u884c]--\x3eNLS[\u884c\u5217\u4fe1\u606f\u538b\u6808\\n\u884c\u53f7\u52a0\u4e00\\n\u5217\u53f7\u5f52\u96f6]--\x3eKB2\n\tC--\x3eBS[\u56de\u9000]\n\tBS--\x3e|\u9996\u884c\u884c\u9996|KB2\n\tBS--\x3e|\u884c\u9996|BL[\u884c\u5217\u4fe1\u606f\u5f39\u6808\\n\u6062\u590d\u81f3\u4e0a\u4e00\u884c\u884c\u672b]--\x3eKB2\n\tBS--\x3e|\u975e\u884c\u9996|BSS[\u5217\u53f7\u51cf\u4e00\\n\u8f93\u51fa\u7a7a\u683c\\n\u5217\u53f7\u51cf\u4e00]--\x3eKB2\n\tKB2[\u4e0b\u4e00\u5faa\u73af]--\x3eKB\n\t"})]})}function d(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>r});var s=e(6540);const i={},o=s.createContext(i);function c(n){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(o.Provider,{value:t},n.children)}}}]);