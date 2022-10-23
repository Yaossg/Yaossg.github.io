"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[93],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),o=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(t),f=a,k=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const l={},s="\ud83d\udc0d \u770b\u770b\u86c7",p={unversionedId:"cnss/5",id:"cnss/5",title:"\ud83d\udc0d \u770b\u770b\u86c7",description:"\u9898\u76ee",source:"@site/docs/cnss/5.md",sourceDirName:"cnss",slug:"/cnss/5",permalink:"/site/docs/cnss/5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u23ed \u7ebf\u6027\u4ee3\u6570\u4e0e\u7a7a\u95f4\u89e3\u6790\u51e0\u4f55 \u4e0b",permalink:"/site/docs/cnss/4"},next:{title:"\u264a \u53cc\u4eba\u6210\u884c",permalink:"/site/docs/cnss/6"}},i={},o=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u8fd9\u4ee3\u7801\u5728\u5e72\u561b",id:"\u8fd9\u4ee3\u7801\u5728\u5e72\u561b",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5e95\u5c42\u66b4\u9732",id:"\u5e95\u5c42\u66b4\u9732",level:3}],u={toc:o};function c(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u770b\u770b\u86c7"},"\ud83d\udc0d \u770b\u770b\u86c7"),(0,a.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"import sys\n\nclass E(BaseException):  \n  def __init__(self, args, kwargs):\n    self.args = args\n    self.kwargs = kwargs\n\ndef T(g):  \n  def func(*args, **kwargs):\n    f = sys._getframe()\n    if f.f_back and f.f_back.f_back \\\n        and f.f_back.f_back.f_code == f.f_code:\n      raise E(args, kwargs)\n    else:\n      while 1:\n        try:\n          return g(*args, **kwargs)\n        except E as e:\n          args = e.args\n          kwargs = e.kwargs\n  func.__doc__ = g.__doc__\n  return func\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4efd CPython \u4ee3\u7801\uff0c\u8bf7\u89e3\u91ca\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u4f5c\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u81ea\u5df1\u7684\u8bdd\uff0c\u8bf4\u8bf4\u8fd9\u6bb5\u4ee3\u7801\u5728\u5e72\u561b"),(0,a.kt)("li",{parentName:"ul"},"\u5199\u4e00\u4efd\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," \u51fd\u6570\u5b8c\u6210\u529f\u80fd\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u6700\u597d\u80fd\u548c\u4e0d\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," \u7684\u7248\u672c\u8fdb\u884c\u529f\u80fd\u6216\u6027\u80fd\u6bd4\u8f83"),(0,a.kt)("li",{parentName:"ul"},"\u8bf4\u8bf4\u8fd9\u79cd\u6280\u672f\u7684\u5e94\u7528\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},"\u8bf4\u8bf4\u4f60\u5bf9 CPython\uff08\u6216\u8005\u5176\u4ed6\u8bed\u8a00\uff09\u66b4\u9732\u5e95\u5c42\u8bbe\u8ba1\u7684\u6001\u5ea6")),(0,a.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,a.kt)("h3",{id:"\u8fd9\u4ee3\u7801\u5728\u5e72\u561b"},"\u8fd9\u4ee3\u7801\u5728\u5e72\u561b"),(0,a.kt)("p",null,"\u4e00\u53e5\u8bdd\uff1a\u5c3e\u9012\u5f52\u4f18\u5316\u3002"),(0,a.kt)("p",null,"\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u53ef\u4ee5\u4f5c\u4e3a\u88c5\u9970\u5668\u4fee\u9970\u5176\u5b83\u51fd\u6570\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'@T\ndef deep(a):\n    if a == 0:\n        return "message from deep recursive"\n    return deep(a - 1)\n\n\nprint(deep(1000))\n')),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"@T"),"\uff0c\u5c06\u4f1a\u8d85\u51fa Python \u7684\u6808\u9650\u5236\uff08\u9ed8\u8ba4\u4e3a 900 \u5c42\uff09\uff0c\u52a0\u4e86\u4e4b\u540e\u53ef\u4ee5\u6b63\u786e\u8fd4\u56de\u7ed3\u679c\u3002\u526f\u4f5c\u7528\u662f\uff0c\u4e00\u65e6\u53d1\u751f\u9012\u5f52\u8c03\u7528\uff0c\u5c06\u4f1a\u8df3\u8fc7\u4e4b\u540e\u7684\u4ee3\u7801\uff0c\u76f4\u63a5\u628a\u9012\u5f52\u7684\u8c03\u7528\u7684\u7ed3\u679c\u4f5c\u4e3a\u5f53\u524d\u51fd\u6570\u8fd4\u56de\u3002\uff08\u5b9e\u9645\u4e0a\u662f\u5f3a\u5236\u4efb\u610f\u9012\u5f52\u53d8\u4e3a\u5c3e\u9012\u5f52\uff09"),(0,a.kt)("p",null,"\u5c3e\u9012\u5f52\u4f18\u5316\u7684\u539f\u7406\u5982\u4e0b\u56fe\u6240\u793a\uff1a\uff08\u5de6\u4fa7\u4e3a\u672a\u88c5\u9970\u60c5\u5f62\uff0c\u53f3\u4fa7\u4e3a\u88c5\u9970\u540e\u60c5\u5f62\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2623).Z,width:"710",height:"617"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u53f3\u4fa7\u7684\u6808\u6700\u591a\u53ea\u6709\u4e09\u5c42\u6df1\uff0c\u5927\u5927\u8282\u7701\u4e86\u6808\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u7f3a\u70b9\u4e5f\u662f\u663e\u800c\u6613\u89c1\u7684\uff0c\u7531\u4e8e\u4f7f\u7528\u5f02\u5e38\uff0c\u51fd\u6570\u9012\u5f52\u7684\u6548\u7387\u5927\u5927\u964d\u4f4e\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'def deep(a):\n    if a == 0:\n        return "message from deep recursive"\n    return deep(a - 1)\n\n\nprint(timeit.timeit(lambda: deep(900), number=10000))\ndeep = T(deep)\nprint(timeit.timeit(lambda: deep(900), number=10000))\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0.6699371\n9.7430404\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u540e\u8005\u6bd4\u524d\u8005\u6162\u5f88\u591a\u3002"),(0,a.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"Python \u662f\u5f88\u4f9d\u8d56\u88c5\u9970\u5668\u6765\u8868\u8fbe\u4e00\u4e9b\u9ad8\u7ea7\u62bd\u8c61\u7684\uff0c\u6bd4\u5982\u5c5e\u6027\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'class Student:\n    def __init__(self):\n        self._age = 0\n\n\n    @property\n    def age(self):\n        print("getter")\n        return self._age\n\n\n    @age.setter\n    def age(self, value):\n        print("setter")\n        if value == 24:\n            print("24 \u5c81\uff0c\u662f\u5b66\u751f")\n        self._age = value\n\n\nstudent = Student()\n\nstudent.age = 23\nstudent.age += 1\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setter\ngetter\nsetter\n24 \u5c81\uff0c\u662f\u5b66\u751f\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u9762\u5411\u5bf9\u8c61\u7684 setter/getter \u6a21\u578b\uff0c\u4f8b\u5982\u8fd9\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"+="),"\u8fd0\u7b97\u7b26\u5b9e\u9645\u4e0a\u88ab\u5c55\u5f00\u6210\u4e86\u591a\u4e2a\u6b65\u9aa4\uff0c\u5982\u679c\u4e0d\u501f\u52a9\u8fd9\u4e2a\u7279\u6027\uff0c\u76f8\u540c\u7684\u529f\u80fd\u53ef\u80fd\u4f1a\u88ab\u8868\u8fbe\u4e3a\uff1a\uff08\u8fd9\u79cd\u60c5\u51b5\u5728 Java \u4e0b\u975e\u5e38\u591a\u89c1\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Java"},"student.setAge(student.getAge() + 1);\n")),(0,a.kt)("p",null,"\u663e\u5f97\u5341\u5206\u5197\u957f\u3002"),(0,a.kt)("h3",{id:"\u5e95\u5c42\u66b4\u9732"},"\u5e95\u5c42\u66b4\u9732"),(0,a.kt)("p",null,"\u5e95\u5c42\u66b4\u9732\u662f\u4e00\u628a\u53cc\u5203\u5251\u3002"),(0,a.kt)("p",null,"\u4e00\u65b9\u9762\uff0c\u5b83\u4f1a\u7ed9\u4e88\u7a0b\u5e8f\u5458\u6781\u5927\u5730\u7075\u6d3b\u6027\uff0c\u8fd0\u7528\u5e95\u5c42\u7684\u7279\u6027\uff0c\u5b9e\u73b0\u67d0\u79cd\u66f4\u6df1\u5c42\u7684\u4f18\u5316\u6216\u8005\u66f4\u9ad8\u7ea7\u7684\u62bd\u8c61\u3001\u5236\u4f5c\u67d0\u79cd\u8bed\u6cd5\u7cd6\u3001\u7ed5\u5f00\u67d0\u79cd\u8bed\u6cd5\u9650\u5236\u3001\u83b7\u53d6\u989d\u5916\u7684\u4fe1\u606f\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u8fd9\u79cd\u7279\u6027\u4f5c\u4e3a\u201c\u9ed1\u9b54\u6cd5\u201d\uff0c\u5341\u5206\u5bb9\u6613\u88ab\u6ee5\u7528\u3001\u8bef\u7528\uff0c\u8fdb\u800c\u5bfc\u81f4\u4ee3\u7801\u53ef\u8bfb\u6027\u548c\u5b89\u5168\u6027\u7684\u964d\u4f4e\u3002\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u4e00\u65e6\u6d89\u53ca\u5e95\u5c42\u7279\u6027\uff0c\u8c03\u8bd5\u7684\u96be\u5ea6\u548c\u53ef\u80fd\u9020\u6210\u7684\u5371\u5bb3\u4e5f\u4f1a\u5927\u5927\u589e\u52a0\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\u6211\u8ba4\u4e3a\uff0c\u5e95\u5c42\u7279\u6027\u5e94\u8be5\u4f5c\u51fa\u4e00\u4e9b\u9002\u5f53\u7684\u66b4\u9732\uff0c\u800c\u4e0e\u6b64\u540c\u65f6\u4e00\u4e9b\u95e8\u69db\u4e5f\u662f\u5fc5\u8981\u7684\uff0c\u8fd9\u91cc\u7684\u4f8b\u5b50\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"_getframe()"),"\u51fd\u6570\u662f\u7528\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\uff0c\u6697\u793a\u4e86\u5b83\u4e0d\u5e94\u8be5\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u518d\u6bd4\u5982 Java\uff0cJava \u7684\u5e95\u5c42\u66b4\u9732\u505a\u7684\u975e\u5e38\u6709\u9650\uff0c\u53cd\u5c04\u7b97\u662f\u4e00\u4f8b\u3002\u539f\u672c\u7684\u8bbe\u8ba1\uff0c\u5e94\u8be5\u8bf4\u517c\u987e\u4e86\u5b89\u5168\u548c\u7075\u6d3b\uff0c\u540c\u65f6\u4e5f\u662f\u6709\u591a\u7ea7\u95e8\u69db\u7684\u3002\u4f46\u662f\u8fd1\u5e74\u6765\u9650\u5236\u8d8a\u52a0\u8d8a\u591a\uff0c\u5bfc\u81f4\u6548\u7387\u548c\u7075\u6d3b\u6027\u5927\u5927\u964d\u4f4e\uff0c\u4f5c\u4e3a modder \u6211\u975e\u5e38\u4e0d\u559c\u6b22 \ud83d\udc4a \u3002"),(0,a.kt)("p",null,"Js \u548c Python \u5927\u6982\u5c5e\u4e8e\u6bd4\u8f83\u81ea\u7531\u7684\uff0c\u4f46\u662f Js \u6bd4 Python \u66f4\u52a0\u5954\u653e\uff0c\u5f88\u96be\u4e0d\u8ba9\u4eba\u671b\u800c\u751f\u754f\u3002"))}c.isMDXComponent=!0},2623:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-851ee6aa80037d112031c2ad1900b3dc.png"}}]);