"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[3188],{76224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=n(11527),r=n(11683);const s={},o="Heating plate",d={id:"bioreactor/making/pid/README",title:"Heating plate",description:"Connecting the plate",source:"@site/docs/03-bioreactor/02-making/04-pid/README.md",sourceDirName:"03-bioreactor/02-making/04-pid",slug:"/bioreactor/making/pid/",permalink:"/docs/bioreactor/making/pid/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/03-bioreactor/02-making/04-pid/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Probes",permalink:"/docs/bioreactor/making/onewire/"},next:{title:"Stepper",permalink:"/docs/bioreactor/making/stepper/"}},l={},a=[{value:"Connecting the plate",id:"connecting-the-plate",level:2},{value:"Limit values",id:"limit-values",level:2},{value:"Enabling heating",id:"enabling-heating",level:2},{value:"Disabling heating",id:"disabling-heating",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"heating-plate",children:"Heating plate"}),"\n",(0,i.jsx)(t.h2,{id:"connecting-the-plate",children:"Connecting the plate"}),"\n",(0,i.jsx)(t.p,{children:"The heating plate is a standard MK3 plate used in 3D printers. It is a square of 214 mm of side."}),"\n",(0,i.jsx)(t.p,{children:"It is composed on 2 resistors of 2.4 \u2126 and there are 2 ways to connect them:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"in serie : you have a resistor of 4.8 \u2126 and this will be used to power in 24 V"}),"\n",(0,i.jsx)(t.li,{children:"in parallel : you have a resistor of 1.2 \u2126 and this will be used when powerred in 12 V"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In our case we will power the plate in 12 V and we will connect them in parallel. See the picture for more information."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"connection.jpg",src:n(48634).Z+"",width:"1200",height:"800"})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"It is also important to put 2 LEDs (just to be sure one of them turn on even if you power the plate in the opposite way)\nand a resistor of 1 k\u2126 (10 k\u2126 would give a much less bright light)."}),(0,i.jsx)(t.p,{children:"This will allow to see when the plate is turned on. Nice to debug!"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"leds.jpg",src:n(87270).Z+"",width:"1969",height:"1221"})}),"\n",(0,i.jsx)(t.p,{children:"With a resistance of 1.2 \u2126 in 12 V we will need 10A. This is the limit of the powersupply and it would be nice if\nwe don't use permanently full power."}),"\n",(0,i.jsxs)(t.p,{children:["Note that the Board is operating at 3V3 and the PID is powered in 12 V. Thus the PowerFET used to deliver the required\ncurrent must be picked up carefully to have a low threshold voltage Vgs and a low Rds channel resistance at this\noperating 3v3 voltage. Good matches are provided ",(0,i.jsx)(t.a,{href:"http://www.mouser.ch/Semiconductors/Discrete-Semiconductors/Transistors/MOSFET/_/N-ax1sf?P=1z0yra8Z1z0y182Z1z0z7ptZ1yzxnagZ1yw76g4Z1yw76ckZ1yw76gb&Rl=ax1sfZgjdhsdZ1yjepp1Z1yjenlnSGTax1sfZgjdhp3Z1yw78huZ1y9kq41SGT&Keyword=MOSFET&OrgTerm=mosfet&FS=True&Ns=Pricing%7C0",children:"here on Mouser"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We have chosen the ",(0,i.jsx)(t.a,{href:"https://www.infineon.com/dgdl/Infineon-IPB80N03S4L-03-DataSheet-v02_01-EN.pdf?fileId=5546d4626cb27db2016ccd4c03921b4c",children:"IPB80N03S4L-03"})," for its steady Rds (3.4 mOhm max.) at low Vgs (Vgs(th) 1.6 V typ.) even for high currents (up to 80A)."]}),"\n",(0,i.jsx)(t.h2,{id:"limit-values",children:"Limit values"}),"\n",(0,i.jsx)(t.p,{children:"In order to be able to heat the following conditions have to be met:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"PCB temperature probe (one-wire) must be working and the temperature must be between 10 and 70 \xb0C"}),"\n",(0,i.jsx)(t.li,{children:"Liquid temperature probe (one-wire) must be connected and the temperature must be between 10 and 60 \xb0C"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The maximal power is 80% of full power that corresponds to around 8 A."}),"\n",(0,i.jsxs)(t.p,{children:["The following parameters are define in ",(0,i.jsx)(t.em,{children:"PIDThread.cpp"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"SAFETY_MAX_PCB_TEMP 7000"}),"\n",(0,i.jsx)(t.li,{children:"SAFETY_MIN_PCB_TEMP 1000"}),"\n",(0,i.jsx)(t.li,{children:"SAFETY_MAX_LIQ_TEMP 6000"}),"\n",(0,i.jsx)(t.li,{children:"SAFETY_MIN_LIQ_TEMP 1000"}),"\n",(0,i.jsx)(t.li,{children:"PID_OUTPUT_LIMIT 200"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-heating",children:"Enabling heating"}),"\n",(0,i.jsx)(t.p,{children:"In order to turn on the heating you should check the following parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A - The liquid temperature on the top. It should be between 1000 and 6000 (10 \xb0C to 60 \xb0C)"}),"\n",(0,i.jsx)(t.li,{children:"B - The liquid temperature on the bottom. It should be between 1000 and 6000 (10 \xb0C to 60 \xb0C)"}),"\n",(0,i.jsx)(t.li,{children:"C - The temperature of the PCB (Printed Circuit Board). It should be between 1000 and 7000"}),"\n",(0,i.jsx)(t.li,{children:"E - The target temperature. It should be between 1000 and 6000 (10 to 60\xb0C)"}),"\n",(0,i.jsx)(t.li,{children:"FLAG_PID_CONTROL - The PARAM_STATUS bit FLAG_PID_CONTROL should be 1"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The heating will also depend of the status of the weight."}),"\n",(0,i.jsx)(t.h2,{id:"disabling-heating",children:"Disabling heating"}),"\n",(0,i.jsx)(t.p,{children:"Here are the important parameters:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"P"}),(0,i.jsx)(t.th,{children:"NAME"}),(0,i.jsx)(t.th,{children:"DESCRIPTION"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"A"}),(0,i.jsx)(t.td,{children:"PARAM_TEMP_EXT1"}),(0,i.jsx)(t.td,{children:"Temperature of the solution (top)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"B"}),(0,i.jsx)(t.td,{children:"PARAM_TEMP_EXT2"}),(0,i.jsx)(t.td,{children:"Temperature of the solution (bottom)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"C"}),(0,i.jsx)(t.td,{children:"PARAM_TEMP_PCB"}),(0,i.jsx)(t.td,{children:"Temperature of the PCB"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"E"}),(0,i.jsx)(t.td,{children:"PARAM_TEMP_TARGET"}),(0,i.jsx)(t.td,{children:"Target temperature of the liquid (in \xb0C)"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["In order to disable heating just put at target temperature for the board of 0 (write in the console ",(0,i.jsx)(t.code,{children:"E0"})," and press ",(0,i.jsx)("kbd",{children:"Enter"}),")."]})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},48634:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/connection-33567ef0c6de0405f3968a1ceb261e53.jpg"},87270:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/leds-0f1cf89d376e0253361674e078fe89bd.jpg"},11683:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(50959);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);