_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"+QeF":function(e,t,i){e.exports={"section-four":"SectionFour_section-four__2L0cr",underline:"SectionFour_underline__1spQh","bg-left":"SectionFour_bg-left__3GOzD","bg-right":"SectionFour_bg-right__5sKKq",hidden:"SectionFour_hidden__3pkGQ","seq1-bg":"SectionFour_seq1-bg__D_juv","blend-in":"SectionFour_blend-in__3ACIQ","seq2-h":"SectionFour_seq2-h__11IVq","fade-in":"SectionFour_fade-in__10dal","seq3-p":"SectionFour_seq3-p__2qzxB","seq4-video":"SectionFour_seq4-video__3c-Sg","quote-open":"SectionFour_quote-open__19rYw","quote-description":"SectionFour_quote-description__PmOjC","quote-line":"SectionFour_quote-line__e8FHS","quote-pic":"SectionFour_quote-pic__3YBor","quote-by":"SectionFour_quote-by__3-HM_",bg:"SectionFour_bg__3Jzfb"}},AbdV:function(e,t,i){e.exports={svg:"LumadaSolutions_svg__25Ts7",bold:"LumadaSolutions_bold__1u65n"}},F7Im:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));var s=i("q1tI"),a=i.n(s),o=i("ok1R"),n=i("rhny"),r=i("AbdV"),c=i.n(r),l=a.a.createElement;function u(){return l(o.a,null,l(n.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/increase-productivity.svg"}),l("h4",{className:c.a.bold},"Increase Manufacturing Productivity"),l("p",null,"Analyse data collected from manufacturing sites to optimise factory operations.")),l(n.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/optimise-logistics.svg"}),l("h4",{className:c.a.bold},"Optimise Logistics with Data Analytics"),l("p",null,"Analyse traffic congestion, storage and delivery locations to enable smart routing to save miles and deliver faster.")),l(n.a,{xs:{size:12},lg:{size:4}},l("object",{className:c.a.svg,type:"image/svg+xml",data:"svg/predictive-maintenance.svg"}),l("h4",{className:c.a.bold},"Predictive Maintenance and Remote Assist"),l("p",null,"Deploy predictive maintenance, real-time remote assistance and remote training for first-line workers, using HoloLens 2.")))}},Gytx:function(e,t){e.exports=function(e,t,i,s){var a=i?i.call(s,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(var r=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!r(l))return!1;var u=e[l],d=t[l];if(!1===(a=i?i.call(s,u,d,l):void 0)||void 0===a&&u!==d)return!1}return!0}},YVcj:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};s.get||s.set?Object.defineProperty(t,i,s):t[i]=e[i]}return t.default=e,t}(i("q1tI")),a=r(i("17x9")),o=r(i("hKI/")),n=r(i("Gytx"));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}var l=function(e){var t,i;function a(t){var i;return(i=e.call(this,t)||this).isVisible=function(e,t,s){var a=e.top,o=e.left,n=e.bottom,r=e.right,c=e.width,l=e.height,u=i.props,d=u.offset,f=u.partialVisibility;if(a+r+n+o===0)return!1;var h=0-d,p=0-d,m=t+d,v=s+d;return f?a+l>=h&&o+c>=p&&n-l<=v&&r-c<=m:a>=h&&o>=p&&n<=v&&r<=m},i.isComponentVisible=function(){setTimeout((function(){if(i.nodeRef&&i.nodeRef.getBoundingClientRect){var e=document.documentElement,t=i.props.once,s=i.nodeRef.getBoundingClientRect(),a=window.innerWidth||e.clientWidth,o=window.innerHeight||e.clientHeight,n=i.isVisible(s,a,o);n&&t&&i.removeListener(),i.setState({isVisible:n})}}),0)},i.setNodeRef=function(e){return i.nodeRef=e},i.ownProps=Object.keys(a.propTypes),i.state={isVisible:!1},i.throttleCb=(0,o.default)(i.isComponentVisible,i.props.throttleInterval),t.nodeRef&&i.setNodeRef(t.nodeRef),i}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r=a.prototype;return r.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},r.componentDidUpdate=function(e){(0,n.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},r.componentWillUnmount=function(){this.removeListener()},r.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},r.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},r.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var i={};return Object.keys(e).forEach((function(s){-1===t.ownProps.indexOf(s)&&(i[s]=e[s])})),i},r.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(c({},this.getChildProps(),{isVisible:this.state.isVisible})):s.default.Children.map(this.props.children,(function(t){return s.default.cloneElement(t,c({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},r.render=function(){var e=this.props,t=e.className,i=e.style,a=e.nodeRef,o=e.tag,n=c({},t&&{className:t},i&&{style:i});return s.default.createElement(o,c({ref:!a&&this.setNodeRef},n),this.getChildren())},a}(s.PureComponent);t.default=l,l.propTypes={once:a.default.bool,throttleInterval:function(e,t,i){var s=e[t];return!Number.isInteger(s)||s<0?new Error("The "+t+" prop you provided to "+i+" is not a valid integer >= 0."):null},children:a.default.oneOfType([a.default.func,a.default.element,a.default.arrayOf(a.default.element)]),style:a.default.object,className:a.default.string,offset:a.default.number,partialVisibility:a.default.bool,nodeRef:a.default.object,tag:a.default.string},l.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},ehN7:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sections/SectionFour",function(){return i("qrlJ")}])},ok1R:function(e,t,i){"use strict";var s=i("wx14"),a=i("zLVn"),o=i("q1tI"),n=i.n(o),r=i("17x9"),c=i.n(r),l=i("TSYQ"),u=i.n(l),d=i("33Jr"),f=c.a.oneOfType([c.a.number,c.a.string]),h={tag:d.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,i=e.cssModule,o=e.noGutters,r=e.tag,c=e.form,l=e.widths,f=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(t,i){var s=e[t];if(delete f[t],s){var a=!i;h.push(a?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var p=Object(d.e)(u()(t,o?"no-gutters":null,c?"form-row":"row",h),i);return n.a.createElement(r,Object(s.a)({},f,{className:p}))};m.propTypes=h,m.defaultProps=p,t.a=m},qrlJ:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var s=i("q1tI"),a=i.n(s),o=i("ok1R"),n=i("rhny"),r=i("xyb1"),c=i.n(r),l=i("F7Im"),u=i("+QeF"),d=i.n(u),f=a.a.createElement;function h(){return f("div",{id:"section-four",className:"section ".concat(d.a["section-four"])},f(c.a,{once:!0},(function(e){var t=e.isVisible,i="".concat(d.a.hidden," ").concat(t&&d.a["seq1-bg"]," ").concat(d.a["bg-left"]),s="".concat(d.a.hidden," ").concat(t&&d.a["seq1-bg"]," ").concat(d.a["bg-right"]),a="".concat(d.a.hidden," ").concat(t&&d.a["seq2-h"]),o="".concat(d.a.hidden," ").concat(t&&d.a["seq3-p"]);return f("div",null,f("img",{src:"img/s4-bgl.svg",className:i}),f("img",{src:"img/s4-bgr.svg",className:s}),f("div",{className:a},f("h2",null,"Building smart factories with"),f("div",{className:d.a.underline}),f("h1",null,"HITACHI'S LUMADA")),f("div",{className:o},f("p",null,"With a firm belief in the ASEAN's manufacturing future, Hitachi has taken the first step to set up Lumada Centre, in Thailand in 2018. Serving as a digital services hub, Lumada aims to equip Southeast Asian companies with IoT capabilities, big data analytics as they move up the Industry 4.0 ladder.")))})),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",null,f("img",{src:"img/lumada.svg",width:"200",height:"100"})),f("p",null,"Lumada is an IoT platform that allows you and Hitachi to co-create customized digital solutions to suit your business needs. It offers access to Hitachi's advanced technologies through the analysis of your data, which is then used to add value to your business operations through the implementation of big data analytics and artificial intelligence."),f("p",null,"Having worked closely with manufacturers, Hitachi understands that talking about smart factories and data analytics can sound intimidating at first. However, many manufacturers become more receptive after learning how new technologies help to lower costs, raise productivity and ultimately, increase their profits."),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",{className:d.a["quote-open"]},"\u201c"),f("div",{className:d.a["quote-description"]},"\u201cASEAN manufacturers need real-time data to improve their productivity, reduce unnecessary downtime and become more profitable. AI and machine learning, core components of Hitachi's Smart Manufacturing solutions, can help.\u201d"),f("div",{className:"space-div"}),f("div",null,f(o.a,null,f(n.a,{className:"align-right",xs:{size:5}},f("img",{className:d.a["quote-pic"],src:"img/Akihiro-Ohashi.jpg"})),f(n.a,{className:"align-left",xs:{size:7}},f("div",{className:d.a["quote-by"]},"Mr. Akihiro Ohashi"),f("div",{className:d.a["quote-by"]},"Executive Director"),f("div",{className:d.a["quote-by"]},"ICT Solutions Business"),f("div",{className:d.a["quote-by"]},"Hitachi Asia (Thailand) Co., Ltd")))),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("p",null,"Besides enabling smart factories, Hitachi also aims to elevate the logistics sector by incorporating smart technologies across the entire logistics and delivery network."),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("h3",null,"In 2019, Hitachi rolled out a sharing service for commercial vehicles in Thailand."),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("p",null,"With this service, business owners can benefit from the efficient use of out-of-service vehicles across their fleet and perform joint deliveries for cargoes with close-proximity end destinations."),f("img",{src:"img/s4-bg.jpg",className:"bg ".concat(d.a.bg)}),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("div",{className:"video-container"}),f("div",{className:"space-div"}),f("div",{className:"space-div"}),f("h3",null,"Not one to stand still, Hitachi is evolving Lumada's capabilities further through research partnerships."),f("p",null,"Through research partnerships with tech giants such as Toyota and Microsoft, Hitachi is able to offer solutions to manufacturers in three areas."),f(l.default,null))}},rhny:function(e,t,i){"use strict";var s=i("wx14"),a=i("zLVn"),o=i("q1tI"),n=i.n(o),r=i("17x9"),c=i.n(r),l=i("TSYQ"),u=i.n(l),d=i("33Jr"),f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:d.h,xs:h,sm:h,md:h,lg:h,xl:h,className:c.a.string,cssModule:c.a.object,widths:c.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,i){return!0===i||""===i?e?"col":"col-"+t:"auto"===i?e?"col-auto":"col-"+t+"-auto":e?"col-"+i:"col-"+t+"-"+i},g=function(e){var t=e.className,i=e.cssModule,o=e.widths,r=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,s){var a=e[t];if(delete c[t],a||""===a){var o=!s;if(Object(d.d)(a)){var n,r=o?"-":"-"+t+"-",f=v(o,t,a.size);l.push(Object(d.e)(u()(((n={})[f]=a.size||""===a.size,n["order"+r+a.order]=a.order||0===a.order,n["offset"+r+a.offset]=a.offset||0===a.offset,n)),i))}else{var h=v(o,t,a);l.push(h)}}})),l.length||l.push("col");var f=Object(d.e)(u()(t,l),i);return n.a.createElement(r,Object(s.a)({},c,{className:f}))};g.propTypes=p,g.defaultProps=m,t.a=g},xyb1:function(e,t,i){"use strict";var s;t.__esModule=!0,t.default=void 0;var a=((s=i("YVcj"))&&s.__esModule?s:{default:s}).default;t.default=a}},[["ehN7",0,1,2]]]);