"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4195],{3905:(a,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>k});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function m(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},m=Object.keys(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var i=t.createContext({}),l=function(a){var e=t.useContext(i),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},o=function(a){var e=l(a.components);return t.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},N=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,m=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(n),k=r,u=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return n?t.createElement(u,s(s({ref:e},o),{},{components:n})):t.createElement(u,s({ref:e},o))}));function k(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var m=n.length,s=new Array(m);s[0]=N;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p.mdxType="string"==typeof a?a:r,s[1]=p;for(var l=2;l<m;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},40638:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var t=n(87462),r=(n(67294),n(3905));const m={},s="\ud83d\uddf3 \u6559\u6211\u5531\u7968",p={unversionedId:"cnss/3",id:"cnss/3",title:"\ud83d\uddf3 \u6559\u6211\u5531\u7968",description:"\u9898\u76ee",source:"@site/docs/cnss/3.md",sourceDirName:"cnss",slug:"/cnss/3",permalink:"/site/docs/cnss/3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u23e9 \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0a",permalink:"/site/docs/cnss/2"},next:{title:"\u23ed \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0b",permalink:"/site/docs/cnss/4"}},i={},l=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:3},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:3},{value:"valgrind",id:"valgrind",level:3}],o={toc:l};function c(a){let{components:e,...m}=a;return(0,r.kt)("wrapper",(0,t.Z)({},o,m,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u6559\u6211\u5531\u7968"},"\ud83d\uddf3 \u6559\u6211\u5531\u7968"),(0,r.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,r.kt)("p",null,"XuKaFy \u521a\u521a\u5f00\u59cb\u5b66\u4e60\u5e76\u53d1\u3002\u4ed6\u7528 C \u5199\u4e86\u4e00\u4e2a\u6a21\u62df\u5531\u7968\u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// count.c\n#include <stdio.h>\n#include <stdlib.h>\n#include <pthread.h>\n\nvolatile int counter = 0;\nvolatile int bucket[32768] = {0};\n\ntypedef struct {\n    int count;\n    int* start;\n} Task;\n\nvoid* fun(void* arg) {\n    Task* task = (Task*) arg;\n    for (int i = 0; i < task->count; ++i) {\n        ++counter;\n        ++bucket[task->start[i]];\n    }\n    return NULL;\n}\n\nint main(int argv, char* argc[]) {\n    if(argv != 2) {\n        printf("Usage: count <value>\\n");\n        return 0;\n    }\n\n    int n = atoi(argc[1]);\n    if(n <= 0) {\n        printf("Invalid value\\n");\n        return 0;\n    }\n    printf("n = %d\\n", n);\n\n    int* ticket = (int*) malloc(sizeof(int) * n);\n    for (int i = 0; i < n; ++i) {\n        ticket[i] = rand() % 32768;\n    }\n\n    Task t1 = {n / 2, ticket};\n    Task t2 = {n / 2 + (n % 2), ticket + n / 2};\n    pthread_t p1, p2;\n\n    pthread_create(&p1, NULL, fun, (void*) &t1);\n    pthread_create(&p2, NULL, fun, (void*) &t2);\n    pthread_join(p1, NULL);\n    pthread_join(p2, NULL);\n    printf("Counter = %d\\n", counter);\n\n    int count = 0;\n    for (int i = 0; i < 32768; ++i) {\n        count += bucket[i];\n    }\n    printf("Count = %d\\n", count);\n\n    free(ticket);\n    return 0;\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u771f\u5b9e\u7968\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," \u4e3a\u4e24\u4e2a\u7ebf\u7a0b\u52a0\u8d77\u6765\u7684\u5531\u7968\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u4e3a\u6876\u8ba1\u6570\u4ee5\u540e\u7684\u7968\u6570\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u6bd4\u8f83\u5c0f\u7684\u65f6\u5019\uff0cXuKaFy \u7684\u5531\u7968\u7a0b\u5e8f\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u76f4\u5230\u67d0\u4e00\u5929\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"prompt> ./count 200000\nn = 200000\nCounter = 108201\nCount = 199996\n")),(0,r.kt)("p",null,"XuKaFy \u6781\u5176\u4e0d\u89e3\uff0c\u4ed6\u53c8\u8fd0\u884c\u4e86\u51e0\u904d\uff0c\u53d1\u73b0\u4f3c\u4e4e\u6709\u8fd9\u6837\u4e00\u4e2a\u89c4\u5f8b\uff1a"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2265"),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"\u2265"),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n \\geq Count \\geq Counter")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er")))))),(0,r.kt)("p",null,"\u540e\u6765\uff0cXuKaFy \u77e5\u9053 ",(0,r.kt)("inlineCode",{parentName:"p"},"valgrind")," \u53ef\u4ee5\u68c0\u67e5\u5185\u5b58\u6cc4\u6f0f\uff0c\u7136\u540e\u5c31\u8bd5\u4e86\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"prompt> valgrind --leak-check=yes ./count 1000000\n==837== Memcheck, a memory error detector\n==837== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.\n==837== Using Valgrind-3.15.0 and LibVEX; rerun with -h for copyright info\n==837== Command: ./count 1000000\n==837== \nn = 1000000\nCounter = 1000000\nCount = 1000000\n==837== \n==837== HEAP SUMMARY:\n==837==     in use at exit: 0 bytes in 0 blocks\n==837==   total heap usage: 4 allocs, 4 frees, 4,001,568 bytes allocated\n==837== \n==837== All heap blocks were freed -- no leaks are possible\n==837== \n==837== For lists of detected and suppressed errors, rerun with: -s\n==837== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)\n")),(0,r.kt)("p",null,"\u867d\u7136\u6ca1\u6709\u5185\u5b58\u6cc4\u9732\uff0c\u4f46\u662f\uff1a"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n = Count = Counter")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er")))))),(0,r.kt)("p",null,"\u8bf7\u4f60\u89e3\u91ca\u89e3\u91ca\u4e3a\u4ec0\u4e48\uff0c\u5e76\u4e14\u5e2e XuKaFy \u6539\u6539\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,r.kt)("h3",{id:"\u89e3\u91ca"},"\u89e3\u91ca"),(0,r.kt)("p",null,"\u81ea\u589e\u65f6\uff0c\u53d8\u91cf\u5148\u88ab\u4ece\u5185\u5b58\u4e2d\u590d\u5236\u5230\u5bc4\u5b58\u5668\u91cc\uff0c\u7136\u540e\u5b8c\u6210\u81ea\u589e\u64cd\u4f5c\uff0c\u518d\u91cd\u65b0\u5199\u56de\u5185\u5b58\u3002\u5f53\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u540c\u4e00\u4e2a\u53d8\u91cf\u8fdb\u884c\u81ea\u589e\u7684\u65f6\u5019\uff0c\u4f1a\u51fa\u73b0\u4e0b\u9762\u8fd9\u79cd\u60c5\u5f62\uff1a\uff08\u56fe\u4e2d\u5de6\u4fa7\u53f3\u4fa7\u4e3a\u4e24\u4e2a\u7ebf\u7a0b\u7684\u5bc4\u5b58\u5668\uff0c\u4e2d\u95f4\u4e3a\u5171\u540c\u64cd\u4f5c\u7684\u53d8\u91cf\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(71379).Z,width:"706",height:"652"})),(0,r.kt)("p",null,"\u7ed3\u679c\u662f\uff1a\u4e24\u6b21\u81ea\u589e\uff0c\u53d8\u91cf\u5374\u53ea\u52a0\u4e86\u4e00\u3002\u81ea\u589e\u5f97\u8d8a\u9891\u7e41\uff0c\u8fd9\u6837\u7684\u60c5\u51b5\u5c31\u4f1a\u53d1\u751f\u7684\u8d8a\u591a\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," \u6765\u8bf4\uff0c\u6240\u6709\u7684\u7968\u90fd\u4f1a\u4f7f\u5b83\u81ea\u589e\u3002\u4f46\u662f\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket")," \u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u800c\u8a00\uff0c\u53ea\u6709\u90e8\u5206\u7684\u7968\u4f1a\u4f7f\u5b83\u81ea\u589e\u3002\u540e\u8005\u81ea\u589e\u6ca1\u6709\u524d\u8005\u90a3\u4e48\u9891\u7e41\uff0c\u6240\u4ee5\u6700\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," \u53d1\u751f\u4e0a\u9762\u60c5\u5f62\u7684\u673a\u4f1a\u8fdc\u9ad8\u4e8e\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket")," \u7684\u5143\u7d20\u4e4b\u548c\u3002"),(0,r.kt)("p",null,"\u7531\u6b64\u53ef\u5f97\uff1a"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"\u2265"),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"\u2265"),(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n \\geq Count \\geq Counter")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er")))))),(0,r.kt)("h3",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e86 C11 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"_Atomic"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// modified count.c\n#include <stdio.h>\n#include <stdlib.h>\n#include <pthread.h>\n\n_Atomic int counter = 0;\n_Atomic int bucket[32768] = {0};\n\ntypedef struct {\n    int count;\n    int* start;\n} Task;\n\nvoid* fun(void* arg) {\n    Task* task = (Task*) arg;\n    for (int i = 0; i < task->count; ++i) {\n        ++counter;\n        ++bucket[task->start[i]];\n    }\n    return NULL;\n}\n\nint main(int argv, char* argc[]) {\n    if(argv != 2) {\n        printf("Usage: count <value>\\n");\n        return 0;\n    }\n\n    int n = atoi(argc[1]);\n    if(n <= 0) {\n        printf("Invalid value\\n");\n        return 0;\n    }\n    printf("n = %d\\n", n);\n\n    int* ticket = (int*) malloc(sizeof(int) * n);\n    for (int i = 0; i < n; ++i) {\n        ticket[i] = rand() % 32768;\n    }\n\n    Task t1 = {n / 2, ticket};\n    Task t2 = {n / 2 + (n % 2), ticket + n / 2};\n    pthread_t p1, p2;\n\n    pthread_create(&p1, NULL, fun, (void*) &t1);\n    pthread_create(&p2, NULL, fun, (void*) &t2);\n    pthread_join(p1, NULL);\n    pthread_join(p2, NULL);\n    printf("Counter = %d\\n", counter);\n\n    int count = 0;\n    for (int i = 0; i < 32768; ++i) {\n        count += bucket[i];\n    }\n    printf("Count = %d\\n", count);\n\n    free(ticket);\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"valgrind"},"valgrind"),(0,r.kt)("p",null,"valgrind \u7684\u68c0\u67e5\u6709\u6548\u5185\u5b58\u7684\u539f\u7406\u662f\u7ed9\u53ef\u7528\u5730\u5740\u6253\u8868\u3002\u4e3a\u4e86\u652f\u6301\u591a\u7ebf\u7a0b\uff0c\u8fd9\u4e2a\u8868\u662f\u4e0a\u4e86\u9501\u7684\u3002\u5f53\u8bbf\u95ee\u67d0\u4e2a\u5730\u5740\u7684\u65f6\u5019\uff0cvalgrind \u4f1a\u53bb\u67e5\u8fd9\u4e2a\u8868\uff0c\u8868\u5c31\u88ab\u9501\u4e86\uff0c\u4e8e\u662f\u5176\u4ed6\u60f3\u8981\u8bbf\u95ee\u8fd9\u4e2a\u5730\u5740\u7ebf\u7a0b\u53ea\u80fd\u5148\u7b49\u7740\u3002\u6240\u4ee5\u6700\u540e\u6240\u6709\u81ea\u589e\u90fd\u6709\u5e8f\u8fdb\u884c\uff0c\u6ca1\u6709\u53d1\u751f\u524d\u9762\u9047\u5230\u7684\u60c5\u51b5\u3002"))}c.isMDXComponent=!0},71379:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/3-2fe5f6912874691dd97c1d713e7968de.png"}}]);