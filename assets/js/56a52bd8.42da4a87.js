"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8478],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4691:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],c={},u="Threadino: a project base to reuse",s={unversionedId:"threadino/project-base/README",id:"threadino/project-base/README",isDocsHomePage:!1,title:"Threadino: a project base to reuse",description:"We created a repository with all the basic code that allows you to program an atmega328p through platformio for a custom project. The code has the base for various threads, I2C, etc. The idea is that you fork the base project to your organisation, and then add your project specific code in the fork.",source:"@site/docs/70_threadino/30_project-base/README.md",sourceDirName:"70_threadino/30_project-base",slug:"/threadino/project-base/README",permalink:"/docs/threadino/project-base/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/70_threadino/30_project-base/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Programming from Platformio",permalink:"/docs/threadino/platformio-install/README"}},l=[{value:"Project structure",id:"project-structure",children:[]}],p={toc:l};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"threadino-a-project-base-to-reuse"},"Threadino: a project base to reuse"),(0,a.kt)("p",null,"We created a repository with all the basic code that allows you to program an atmega328p through platformio for a custom project. The code has the base for various threads, I2C, etc. The idea is that you fork the base project to your organisation, and then add your project specific code in the fork."),(0,a.kt)("h3",{id:"project-structure"},"Project structure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boards"),": contains the JSON like files that allow you to program custom boards (you specify the cpu frequency, the kind of micro-controller and whether it uses internal or external clock)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lib"),": the code that we wrote that is common to all the projects. If you add things there, you should make a pull request with the changes to the base project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src"),": this contains the code specific to your project"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platformio.ini"),": this is the file that configures the whole Platformio project. It is there that you specify the versions of the libraries (on GitHub) that you use in your project.")))}h.isMDXComponent=!0}}]);