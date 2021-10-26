"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[5223],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={},c="The case",l={unversionedId:"simple-spectro/tutorial/case/README",id:"simple-spectro/tutorial/case/README",isDocsHomePage:!1,title:"The case",description:"The case is done using FreeCAD and OpenSCAD. These applications looks rather complex at a first glance but have the huge advantage that all the parameters may be set in an internal spreadsheet. This allows to design parametric boxes that can be easily changed and updated.",source:"@site/docs/10_simple-spectro/20_tutorial/20_case/README.md",sourceDirName:"10_simple-spectro/20_tutorial/20_case",slug:"/simple-spectro/tutorial/case/README",permalink:"/docs/simple-spectro/tutorial/case/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/docs/10_simple-spectro/20_tutorial/20_case/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The PCB",permalink:"/docs/simple-spectro/tutorial/pcb/README"},next:{title:"The software",permalink:"/docs/simple-spectro/tutorial/software/README"}},p=[{value:"Assembling the closed box",id:"assembling-the-closed-box",children:[]},{value:"Details of the screws",id:"details-of-the-screws",children:[{value:"Standoff spacer",id:"standoff-spacer",children:[]},{value:"Screw",id:"screw",children:[]}]}],u={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-case"},"The case"),(0,s.kt)("p",null,"The case is done using FreeCAD and OpenSCAD. These applications looks rather complex at a first glance but have the huge advantage that all the parameters may be set in an internal spreadsheet. This allows to design parametric boxes that can be easily changed and updated."),(0,s.kt)("p",null,"Currently we have 3 versions of the box:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The open-box can be easily opened to understand the way it works."),(0,s.kt)("li",{parentName:"ul"},"A box that is designed to be cut using a laser cutter in 3mm MDF or acrylic glass."),(0,s.kt)("li",{parentName:"ul"},"The closed-box is designed to be screwed and possibly done by aluminium milling (it can also be 3D-printed).")),(0,s.kt)("h2",{id:"assembling-the-closed-box"},"Assembling the closed box"),(0,s.kt)("p",null,"In order to prevent the battery to move inside the case, it is fixed with Velcro",(0,s.kt)("sup",null,"\xae"),", which makes it easy to remove and put back in place."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"build1.jpg",src:n(7457).Z})),(0,s.kt)("p",null,"The PCB is fixed using nylon standoff spacers (16mm - 10mm M3). Nylon has the advantages of being light, non-conductive and soft. Therefore, the spacer will be damaged before the PCB."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"build2.jpg",src:n(6171).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"build3.jpg",src:n(8110).Z})),(0,s.kt)("p",null,"A piece of 3mm thick foam is placed between the potentiometer and the battery to prevent damage. ThisIndeed, problems were encountered beforehand under heavy shaking in an incubator."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"build4.jpg",src:n(8669).Z})),(0,s.kt)("p",null,"Finally the bottom is fixed to the top using four M3 x 12 mm nylon screws."),(0,s.kt)("h2",{id:"details-of-the-screws"},"Details of the screws"),(0,s.kt)("h3",{id:"standoff-spacer"},"Standoff spacer"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screw1-1.jpg",src:n(4929).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screw1-2.jpg",src:n(6482).Z})),(0,s.kt)("h3",{id:"screw"},"Screw"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screw2-1.jpg",src:n(2544).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screw2-2.jpg",src:n(8912).Z})))}d.isMDXComponent=!0},7457:function(e,t,n){t.Z=n.p+"assets/images/build1-ddc96175a1d9243659da28d0c984c18a.jpg"},6171:function(e,t,n){t.Z=n.p+"assets/images/build2-bbdd88d3e226d8ceb4710e57000213c8.jpg"},8110:function(e,t,n){t.Z=n.p+"assets/images/build3-e651b3f4475ca93cee3180293f82b90a.jpg"},8669:function(e,t,n){t.Z=n.p+"assets/images/build4-2385de92ed7a663c2142ce2b7b48bf94.jpg"},4929:function(e,t,n){t.Z=n.p+"assets/images/screw1-1-88e8d13e3fbe66a94a977a109492717c.jpg"},6482:function(e,t,n){t.Z=n.p+"assets/images/screw1-2-9cd67763a47ac9b63c79a4802f075185.jpg"},2544:function(e,t,n){t.Z=n.p+"assets/images/screw2-1-f036684a836c8eb9afce011674b40747.jpg"},8912:function(e,t,n){t.Z=n.p+"assets/images/screw2-2-ab14f26e1c8e3b014cc906c67114c96e.jpg"}}]);