_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"21us":function(e,n,t){e.exports={"part-five":"SectionOnePartFive_part-five__1yBj0",underline:"SectionOnePartFive_underline__md49Z",svg:"SectionOnePartFive_svg__2eKS5",bg:"SectionOnePartFive_bg__O8Tjl",hidden:"SectionOnePartFive_hidden__Sa65f","seq1-bg":"SectionOnePartFive_seq1-bg__2UVNR","fade-in":"SectionOnePartFive_fade-in__2ajRs","blend-in":"SectionOnePartFive_blend-in__3ujnK","seq2-p":"SectionOnePartFive_seq2-p__2v0UE","seq3-line":"SectionOnePartFive_seq3-line__2vcA6","seq4-p":"SectionOnePartFive_seq4-p__FxQjx"}},"33Jr":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"f",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"h",(function(){return l})),t.d(n,"c",(function(){return f})),t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return v}));var a,i=t("17x9"),o=t.n(i);function r(e,n){return void 0===e&&(e=""),void 0===n&&(n=a),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}function s(e,n){var t={};return Object.keys(e).forEach((function(a){-1===n.indexOf(a)&&(t[a]=e[a])})),t}function c(e,n){for(var t,a=Array.isArray(n)?n:[n],i=a.length,o={};i>0;)o[t=a[i-=1]]=e[t];return o}var u="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,n,t){if(!(e[n]instanceof u))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var l=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),f={Fade:150,Collapse:350,Modal:300,Carousel:600},d=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],p={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement;function v(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)}},"5LNq":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t("q1tI"),i=t.n(a),o=t("yOxE"),r=t.n(o),s=i.a.createElement;function c(e){var n=e.type,t="".concat("delay"===n?r.a["line-delay"]:"teal"===n?r.a["line-teal"]:r.a["line-blue"]);return s("svg",{className:r.a["line-svg"],xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1.8 81.9"},s("defs",null,s("linearGradient",{id:"line-down-gradient",x1:"0",y1:"81.9",x2:"0",y2:"0",gradientUnits:"userSpaceOnUse"},s("stop",{offset:"0","stop-color":"#fff"}),s("stop",{offset:"0.09","stop-color":"#f6f6ff","stop-opacity":"0.97"}),s("stop",{offset:"0.23","stop-color":"#dcdcff","stop-opacity":"0.89"}),s("stop",{offset:"0.41","stop-color":"#b2b2ff","stop-opacity":"0.76"}),s("stop",{offset:"0.62","stop-color":"#7979ff","stop-opacity":"0.58"}),s("stop",{offset:"0.85","stop-color":"#3030ff","stop-opacity":"0.35"}),s("stop",{offset:"1","stop-color":"blue","stop-opacity":"0.2"}))),s("g",null,s("line",{className:t,y1:"0",y2:"81.9"})))}},C50d:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sections/SectionOnePartFive",function(){return t("uiiz")}])},TSYQ:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(n,[]))||(e.exports=a)}()},ok1R:function(e,n,t){"use strict";var a=t("wx14"),i=t("zLVn"),o=t("q1tI"),r=t.n(o),s=t("17x9"),c=t.n(s),u=t("TSYQ"),l=t.n(u),f=t("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),p={tag:f.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var n=e.className,t=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,u=e.widths,d=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(n,t){var a=e[n];if(delete d[n],a){var i=!t;p.push(i?"row-cols-"+a:"row-cols-"+n+"-"+a)}}));var v=Object(f.e)(l()(n,o?"no-gutters":null,c?"form-row":"row",p),t);return r.a.createElement(s,Object(a.a)({},d,{className:v}))};g.propTypes=p,g.defaultProps=v,n.a=g},rhny:function(e,n,t){"use strict";var a=t("wx14"),i=t("zLVn"),o=t("q1tI"),r=t.n(o),s=t("17x9"),c=t.n(s),u=t("TSYQ"),l=t.n(u),f=t("33Jr"),d=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),v={tag:f.h,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,n,t){return!0===t||""===t?e?"col":"col-"+n:"auto"===t?e?"col-auto":"col-"+n+"-auto":e?"col-"+t:"col-"+n+"-"+t},y=function(e){var n=e.className,t=e.cssModule,o=e.widths,s=e.tag,c=Object(i.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(n,a){var i=e[n];if(delete c[n],i||""===i){var o=!a;if(Object(f.d)(i)){var r,s=o?"-":"-"+n+"-",d=m(o,n,i.size);u.push(Object(f.e)(l()(((r={})[d]=i.size||""===i.size,r["order"+s+i.order]=i.order||0===i.order,r["offset"+s+i.offset]=i.offset||0===i.offset,r)),t))}else{var p=m(o,n,i);u.push(p)}}})),u.length||u.push("col");var d=Object(f.e)(l()(n,u),t);return r.a.createElement(s,Object(a.a)({},c,{className:d}))};y.propTypes=v,y.defaultProps=g,n.a=y},uiiz:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t("q1tI"),i=t.n(a),o=t("ok1R"),r=t("rhny"),s=t("xyb1"),c=t.n(s),u=t("5LNq"),l=t("21us"),f=t.n(l),d=i.a.createElement;function p(){return d("div",{className:"section ".concat(f.a["part-five"])},d("h4",null,"Keuntungan dari tingkat produktivitas sektor manufaktur"),d("div",{className:f.a.underline}),d(o.a,null,d(r.a,{xs:{size:2},lg:{size:1}},d("object",{type:"image/svg+xml",data:"svg/id/mouseover.svg"})),d(r.a,null,d("h5",null,"dari tahun 2008 sampai dengan 2017")),d(r.a,{xs:{size:2},lg:{size:1}},d("object",{type:"image/svg+xml",data:"svg/id/mouseover.svg"}))),d(c.a,{partialVisibility:!0,once:!0},(function(e){return e.isVisible&&d(o.a,null,d(r.a,null,d("object",{type:"image/svg+xml",data:"svg/id/productivity-2.svg"})))})),d("div",{className:"space-div"}),d("div",{className:"space-div"}),d("div",{className:"space-div"}),d(c.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible,t="".concat(f.a.hidden," ").concat(n&&f.a["seq1-bg"]," ").concat(f.a.bg," bg"),a="".concat(f.a.hidden," ").concat(n&&f.a["seq2-p"]),i="".concat(f.a.hidden," ").concat(n&&f.a["seq3-line"]),o="".concat(f.a.hidden," ").concat(n&&f.a["seq4-p"]);return d("div",null,d("img",{src:"img/s1-p5-bg.jpg",className:t}),d("p",{className:a},"Industri 4.0 menjanjikan perubahan melalui peningkatan nilai manufaktur suatu kawasan. Saat ini penerapannya masih jauh tertinggal dari China yang telah banyak melalukan investasi dalam automasi dan robot dalam 10 tahun terakhir. Investasi tersebut terbukti meningkatkan produktivitas RRC sebesar 84%, berbanding hanya 38% secara rata-rata untuk kawasan ASEAN."),d("div",{className:i},n&&d(u.default,{type:"delay"})),d("h3",{className:o},"COVID-19 MUNCUL DAN SEMUANYA BERUBAH"))})))}},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},yOxE:function(e,n,t){e.exports={"line-svg":"LineDown_line-svg__1xCKc","line-teal":"LineDown_line-teal__2kqog","draw-line":"LineDown_draw-line__2OyMr","line-blue":"LineDown_line-blue__1SV4q","line-delay":"LineDown_line-delay__qZ4Ra"}},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,"a",(function(){return a}))}},[["C50d",0,1,2]]]);