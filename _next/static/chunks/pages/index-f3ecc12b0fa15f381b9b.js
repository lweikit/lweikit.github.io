_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),c=n("vRNQ"),s=n.n(c),u=(n("q4sD"),n("wx14")),l=n("zLVn"),f=n("17x9"),p=n.n(f),d=n("TSYQ"),b=n.n(d),h=n("33Jr"),v={light:p.a.bool,dark:p.a.bool,full:p.a.bool,fixed:p.a.string,sticky:p.a.string,color:p.a.string,role:p.a.string,tag:h.h,className:p.a.string,cssModule:p.a.object,expand:p.a.oneOfType([p.a.bool,p.a.string])},g=function(e){var t,n=e.expand,a=e.className,o=e.cssModule,i=e.light,c=e.dark,s=e.fixed,f=e.sticky,p=e.color,d=e.tag,v=Object(l.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),g=Object(h.e)(b()(a,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":i,"navbar-dark":c})["bg-"+p]=p,t["fixed-"+s]=s,t["sticky-"+f]=f,t)),o);return r.a.createElement(d,Object(u.a)({},v,{className:g}))};g.propTypes=v,g.defaultProps={tag:"nav",expand:!1};var m=g,y={tag:h.h,type:p.a.string,className:p.a.string,cssModule:p.a.object,children:p.a.node},O=function(e){var t=e.className,n=e.cssModule,a=e.children,o=e.tag,i=Object(l.a)(e,["className","cssModule","children","tag"]),c=Object(h.e)(b()(t,"navbar-toggler"),n);return r.a.createElement(o,Object(u.a)({"aria-label":"Toggle navigation"},i,{className:c}),a||r.a.createElement("span",{className:Object(h.e)("navbar-toggler-icon",n)}))};O.propTypes=y,O.defaultProps={tag:"button",type:"button"};var j,x=O,E=n("JX7q"),M=n("dI71"),w=n("rePB"),N=n("1w3K");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=_(_({},N.Transition.propTypes),{},{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:h.h,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),S=_(_({},N.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.c.Collapse}),C=((j={})[h.b.ENTERING]="collapsing",j[h.b.ENTERED]="collapse show",j[h.b.EXITING]="collapsing",j[h.b.EXITED]="collapse",j);function T(e){return e.scrollHeight}var I=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(Object(E.a)(n))})),n}Object(M.a)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:T(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:T(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,a=t.isOpen,o=t.className,i=t.navbar,c=t.cssModule,s=t.children,f=(t.innerRef,Object(l.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,d=Object(h.g)(f,h.a),v=Object(h.f)(f,h.a);return r.a.createElement(N.Transition,Object(u.a)({},d,{in:a,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var a=function(e){return C[e]||"collapse"}(t),l=Object(h.e)(b()(o,a,i&&"navbar-collapse"),c),f=null===p?null:{height:p};return r.a.createElement(n,Object(u.a)({},v,{style:_(_({},v.style),f),className:l,ref:e.props.innerRef}),s)}))},t}(a.Component);I.propTypes=P,I.defaultProps=S;var A=I,D={tabs:p.a.bool,pills:p.a.bool,vertical:p.a.oneOfType([p.a.bool,p.a.string]),horizontal:p.a.string,justified:p.a.bool,fill:p.a.bool,navbar:p.a.bool,card:p.a.bool,tag:h.h,className:p.a.string,cssModule:p.a.object},R=function(e){var t=e.className,n=e.cssModule,a=e.tabs,o=e.pills,i=e.vertical,c=e.horizontal,s=e.justified,f=e.fill,p=e.navbar,d=e.card,v=e.tag,g=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(h.e)(b()(t,p?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":a,"card-header-tabs":d&&a,"nav-pills":o,"card-header-pills":d&&o,"nav-justified":s,"nav-fill":f}),n);return r.a.createElement(v,Object(u.a)({},g,{className:m}))};R.propTypes=D,R.defaultProps={tag:"ul",vertical:!1};var H=R,q={tag:h.h,active:p.a.bool,className:p.a.string,cssModule:p.a.object},W=function(e){var t=e.className,n=e.cssModule,a=e.active,o=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),c=Object(h.e)(b()(t,"nav-item",!!a&&"active"),n);return r.a.createElement(o,Object(u.a)({},i,{className:c}))};W.propTypes=q,W.defaultProps={tag:"li"};var J=W,K={tag:h.h,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),disabled:p.a.bool,active:p.a.bool,className:p.a.string,cssModule:p.a.object,onClick:p.a.func,href:p.a.any},X=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(E.a)(n)),n}Object(M.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.active,o=e.tag,i=e.innerRef,c=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),s=Object(h.e)(b()(t,"nav-link",{disabled:c.disabled,active:a}),n);return r.a.createElement(o,Object(u.a)({},c,{ref:i,onClick:this.onClick,className:s}))},t}(r.a.Component);X.propTypes=K,X.defaultProps={tag:"a"};var Y=X,z={tag:h.h,className:p.a.string,cssModule:p.a.object},L=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),i=Object(h.e)(b()(t,"navbar-brand"),n);return r.a.createElement(a,Object(u.a)({},o,{className:i}))};L.propTypes=z,L.defaultProps={tag:"a"};var Z=L,F=n("zUwK"),Q=r.a.createElement;function U(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Q("div",{className:s.a.container},Q(i.a,null,Q("title",null,"Create Next App"),Q("link",{rel:"icon",href:"/favicon.ico"})),Q("main",{className:"main"},Q(m,{dark:!0,expand:"lg"},Q(x,{onClick:function(){return n(!t)}}),Q(A,{isOpen:t,navbar:!0},Q(H,{navbar:!0},Q(J,null,Q(Y,{href:"#section-one"},"ASEAN Manufacturing")),Q(J,null,Q(Y,{href:"#section-two"},"Transformation")),Q(J,null,Q(Y,{href:"#section-three"},"Indstry 4.0")),Q(J,null,Q(Y,{href:"#section-four"},"Hitachi Lumada")),Q(J,null,Q(Y,{href:"#section-five"},"Smart Manufacturing")))),Q(Z,{href:"/"},Q("img",{src:"img/logo.png"}))),Q(F.default,null)))}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var u=p[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],f=a[u]||new Set;f.has(l)?o=!1:(f.add(l),a[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},q4sD:function(e,t,n){},vRNQ:function(e,t,n){}},[["/EDR",0,1,2]]]);