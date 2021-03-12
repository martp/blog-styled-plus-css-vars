(this["webpackJsonpblog-styled-plus-css-vars"]=this["webpackJsonpblog-styled-plus-css-vars"]||[]).push([[0],{23:function(n,e,o){"use strict";o.r(e);var r,t,c,a,l,i,d,s,u=o(0),b=o.n(u),h=o(10),g=o.n(h),f=o(8),j=o(4),k={light:"var(--color-light-secondary)",dark:"var(--color-dark-secondary)",primary:"var(--color-primary)"},m={auto:{colors:Object(j.a)(Object(j.a)({},k),{},{background:"var(--background-color)",backgroundSecondary:"var(--background-color--secondary)",font:"var(--font-color)",fontSecondary:"var(--font-color--secondary)"})},light:{colors:Object(j.a)(Object(j.a)({},k),{},{background:"#fff",backgroundSecondary:"rgba(0, 0, 0, 0.05)",font:"rgba(0, 0, 0, 0.8)",fontSecondary:"rgba(0, 0, 0, 0.55)"})},dark:{colors:Object(j.a)(Object(j.a)({},k),{},{background:"rgba(0, 0, 0, 0.9)",backgroundSecondary:"rgba(255, 255, 255, 0.05)",font:"rgba(255, 255, 255, 0.8)",fontSecondary:"rgba(255, 255, 255, 0.55)"})}},p=o(2),y=o(3),O={colorScheme:{dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"}},x={fill:"\n            width: 100vw;\n            height: 100vh;\n        ",center:"\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            > * {\n                text-align: center;\n            }\n        "},v={xs:"5px",sm:"10px",md:"15px",lg:"30px",xl:"45px"},S={radius:"10px"},F=Object(p.b)(r||(r=Object(y.a)(["\n\n    :root {\n\n        --color-primary: #0b7bff;\n        --color-light: #ffffff;\n        --color-light-secondary: #f2f2f2;\n        --color-dark: #191919;\n        --color-dark-secondary: #252525;\n\n        --background-color: var(--color-light);\n        --background-color--secondary: var(--color-light-secondary);\n        --font-color: rgba(0, 0, 0, 0.8);\n        --font-color--secondary: rgba(0, 0, 0, 0.55);\n\n        @media ",' {\n            :root {\n                --background-color: var(--color-dark);\n                --background-color--secondary: var(--color-dark-secondary);\n                --font-color: rgba(255, 255, 255, 0.8);\n                --font-color--secondary: rgba(255, 255, 255, 0.55);\n            }\n        }\n        \n    }\n\n    body {\n        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;\n        background-color: ',";\n        color: ",";\n    }\n    \n"])),O.colorScheme.dark,(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.font})),w=o(1),C=Object(u.createContext)({themeType:"auto",theme:m.auto,setTheme:function(n){}}),T=function(n){var e=n.children,o=Object(u.useState)(m.auto),r=Object(f.a)(o,2),t=r[0],c=r[1],a=Object(u.useState)("auto"),l=Object(f.a)(a,2),i=l[0],d=l[1],s={themeType:i,theme:m.auto,setTheme:function(n){d(n),"auto"===n?c(m.auto):"light"===n?c(m.light):"dark"===n&&c(m.dark)}};return Object(w.jsx)(C.Provider,{value:s,children:Object(w.jsxs)(p.a,{theme:t,children:[Object(w.jsx)(F,{}),e]})})},P=p.c.h1(t||(t=Object(y.a)(["\n    font-weight: bold;\n    text-align: center;\n    font-size: 80px;\n    line-height: 1.05;\n    font-weight: 600;\n    letter-spacing: -.015em;\n    margin-top: 0;\n    margin-bottom: 0;\n"]))),D=p.c.p(c||(c=Object(y.a)(["\n    color: ","\n"])),(function(n){return n.theme.colors.fontSecondary})),I=p.c.div(a||(a=Object(y.a)(["\n    ","\n    ","   \n"])),x.center,x.fill),L=p.c.input(l||(l=Object(y.a)(["\n    user-select: none; \n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n"]))),A=p.c.span(i||(i=Object(y.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n"]))),B=p.c.span(d||(d=Object(y.a)(["\n    display: block;\n    width: 70px;\n    height: 50px;\n    border: 3px solid transparent;\n    border-radius: ",";\n    margin-bottom: ",";\n    background: ","\n"])),S.radius,v.sm,(function(n){return n.background||n.theme.colors.backgroundSecondary})),H=p.c.label(s||(s=Object(y.a)(["\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    padding: ",";\n    border-radius: ",";\n    & ",":checked ~ "," { \n        border: 3px solid ",";\n    }\n"])),v.sm,S.radius,L,B,(function(n){return n.theme.colors.primary})),J=function(n){var e=n.autoFocus,o=n.background,r=n.checked,t=n.name,c=n.label,a=n.value,l=n.onChange;return Object(w.jsxs)(H,{children:[Object(w.jsx)(L,{type:"radio",name:t,checked:r,autoFocus:e,value:a,onChange:function(n){return l(n)}}),Object(w.jsx)(B,{background:o}),Object(w.jsx)(A,{}),c]})};var z=function(){var n=function(n){switch(n){case"auto":return"Toggle light/dark mode in your OS";case"light":return"Force light mode";case"dark":return"Force dark mode"}};return Object(w.jsx)(I,{children:Object(w.jsx)(C.Consumer,{children:function(e){var o=e.themeType,r=e.theme,t=e.setTheme;return Object(w.jsxs)("section",{children:[Object(w.jsx)(P,{children:"Themes"}),Object(w.jsx)(D,{children:n(o)}),Object(w.jsx)(J,{name:"mode",label:"Auto",value:"auto",autoFocus:!0,checked:"auto"===o,onChange:function(){return t("auto")}}),Object(w.jsx)(J,{name:"mode",label:"Light",value:"light",background:r.colors.light,checked:"light"===o,onChange:function(){return t("light")}}),Object(w.jsx)(J,{name:"mode",label:"Dark",value:"dark",background:r.colors.dark,checked:"dark"===o,onChange:function(){return t("dark")}})]})}})})},E=function(n){n&&n instanceof Function&&o.e(3).then(o.bind(null,24)).then((function(e){var o=e.getCLS,r=e.getFID,t=e.getFCP,c=e.getLCP,a=e.getTTFB;o(n),r(n),t(n),c(n),a(n)}))};g.a.render(Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(T,{children:Object(w.jsx)(z,{})})}),document.getElementById("root")),E()}},[[23,1,2]]]);
//# sourceMappingURL=main.873f60b0.chunk.js.map