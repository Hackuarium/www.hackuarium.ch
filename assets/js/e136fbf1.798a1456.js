"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[5161],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9796:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},u="Installation",p={unversionedId:"bioreactor/platformio/platformio",id:"bioreactor/platformio/platformio",isDocsHomePage:!1,title:"Installation",description:"Cloning the project",source:"@site/docs/20_bioreactor/10_platformio/platformio.md",sourceDirName:"20_bioreactor/10_platformio",slug:"/bioreactor/platformio/platformio",permalink:"/docs/bioreactor/platformio/platformio",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/10_platformio/platformio.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Goal of the project",permalink:"/docs/bioreactor"},next:{title:"Parameters",permalink:"/docs/bioreactor/platformio/parameters"}},c=[{value:"Cloning the project",id:"cloning-the-project",children:[{value:"Requirements",id:"requirements",children:[]}]},{value:"Installing the PlatformIO plugin",id:"installing-the-platformio-plugin",children:[]},{value:"Hardware support for Leonardo 8MHz = LilyPad Arduino USB",id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb",children:[]},{value:"Using USBtiny",id:"using-usbtiny",children:[]},{value:"That&#39;s it",id:"thats-it",children:[{value:"Burning bootloader",id:"burning-bootloader",children:[]},{value:"Upload the code",id:"upload-the-code",children:[]}]}],s={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"cloning-the-project"},"Cloning the project"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Git (^2.25.1)"),(0,a.kt)("li",{parentName:"ol"},"Visual Studio Code (^1.61.2)")),(0,a.kt)("p",null,"You know with age we take some habits and it would be easier if you follow the same ones..."),(0,a.kt)("p",null,"All our github projects are always in a folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\nwhich is at the first level of the ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," directory. It is followed by the\nname of the github user/organization and finally the project name."),(0,a.kt)("p",null,"So, to install the project from bash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/git/hackuarium/\ncd ~/git/hackuarium/\ngit clone https://github.com/Hackuarium/bioreactor-platformio.git\n")),(0,a.kt)("p",null,"The possibility to clone the project will require that you validate your public key\nin github!"),(0,a.kt)("h2",{id:"installing-the-platformio-plugin"},"Installing the PlatformIO plugin"),(0,a.kt)("p",null,"In VSCode you need to open ",(0,a.kt)("inlineCode",{parentName:"p"},"Extensions")," tab or press ",(0,a.kt)("inlineCode",{parentName:"p"},"(CTRL+Shift+X)"),", and search \xb4PlatformIO IDE\xb4 to install it:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PlatformIO IDE",src:o(2178).Z})),(0,a.kt)("h2",{id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb"},"Hardware support for Leonardo 8MHz = LilyPad Arduino USB"),(0,a.kt)("p",null,"The version ",(0,a.kt)("inlineCode",{parentName:"p"},"6.0.1")," of the bioreactor is operating at 8MHz/3V3 instead of the standard 16MHz/5V."),(0,a.kt)("p",null,"If you do any mistake and try flashing the bioreactor board as if it was a normal Leonardo, you will be able to flash the program but the USB port will not be recognized anymore afterwards. You will have to reflash the bootloader!!!"),(0,a.kt)("h2",{id:"using-usbtiny"},"Using USBtiny"),(0,a.kt)("p",null,"By default the last version of Fedora will only give you a USB readonly access and will prevent you from burning the bootloader."),(0,a.kt)("p",null,"In order for the USBTiny to have r/w access you should add a USB rule:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# UDEV rule for Arduino ISP R3 programmer board,\n# to prevent having to run Arduino IDE as root to get it to program.\n# Copy this file to /etc/udev/rules.d so\n\nSUBSYSTEMS=="usb", ATTRS{idVendor}=="1781", ATTRS{idProduct}=="0c9f", GROUP="plugdev", MODE="0666"\n')),(0,a.kt)("h2",{id:"thats-it"},"That's it"),(0,a.kt)("p",null,"You should now be able to compile the project from PlatformIO IDE."),(0,a.kt)("h3",{id:"burning-bootloader"},"Burning bootloader"),(0,a.kt)("p",null,"You can now proceed with burning the bootloader using the ",(0,a.kt)("inlineCode",{parentName:"p"},"program_via_USBtinyISP")," environment created in ",(0,a.kt)("inlineCode",{parentName:"p"},"platformio.ini")," file. Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"platformIO Terminal")," and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$: pio run -e program_via_USBtinyISP --target bootloader\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PlatformIO: New Terminal",src:o(4854).Z})),(0,a.kt)("h3",{id:"upload-the-code"},"Upload the code"),(0,a.kt)("p",null,"Once you have the bootloader, you can upload your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"PlatformIO: Upload")," button or press ",(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"U"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload option",src:o(3115).Z})),(0,a.kt)("p",null,"You can check upload success in the same terminal:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload success",src:o(4611).Z})),(0,a.kt)("h1",{id:"the-parameters"},"The parameters"),(0,a.kt)("p",null,"In order to control the bioreactor you should have a look at the description of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/bioreactor/platformio/parameters"},"parameters")," (Go Next)."))}d.isMDXComponent=!0},2178:function(e,t,o){t.Z=o.p+"assets/images/platformio-5aeb75216f723a042fde6f4b6cd43094.png"},4854:function(e,t,o){t.Z=o.p+"assets/images/terminal-825da6e832df51eff130b4bdf9017976.png"},4611:function(e,t,o){t.Z=o.p+"assets/images/upload-success-2442a1697a2b84db3b25f375c3d4fc13.png"},3115:function(e,t,o){t.Z=o.p+"assets/images/upload-b377666afcae228db0186a26c3957976.png"}}]);