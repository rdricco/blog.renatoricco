webpackJsonp([0xc1d74b0851a0],{25:function(e,t){"use strict";e.exports={siteTitle:"renato ricco",siteTitleAlt:"renatoricco",siteTagline:"Música, tecnologia, design, videos, links, glitches, notas pessoais e outras recomendações.",siteLogo:"",siteUrl:"https://blog.renatoricco.com",pathPrefix:"/",siteDescription:"links, videos e outras recomendações.",siteRss:"/rss.xml",userName:"renato ricco",userAvatar:"https://api.adorable.io/avatars/150/test.png",userTagline:"Renato Ricco é designer gráfico, creative coder e cansou de gerar conteúdo de graça pra rede social. Leia mais sobre mim ou entre em contato..",userDescription:"Eu sou designer gráfico, creative coder, astronomo amador e viciado em música, tecnologia, quadrinhos, ficção científica e mais um monte de coisa que nem lembro agora. Atualmente moro em São Paulo. Me manda uma mensagem se quiser tomar um café(ou uma cerveja) comigo.",userGithub:"rdricco",userInstagram:"r_ricco",themeColor:"#2ca9a9",backgroundColor:"#f7f0eb"}},199:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(){if(!p){var e=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src=window.talkyardScriptUrl||"https://cdn.talkyard.net/-/talkyard-comments.min.js",window.talkyardServerUrl=window.talkyardServerUrl||"https://comments-demo.talkyard.io",t.appendChild(e),p=!0}}t.__esModule=!0;var a=r(28),l=o(a),i=r(38),u=o(i),s=r(37),c=o(s),d=r(2),f=o(d),p=!1,y=function(e){function t(r){return(0,l.default)(this,t),(0,u.default)(this,e.call(this,r))}return(0,c.default)(t,e),t.prototype.componentDidMount=function(){var e=p;n(),e&&window.talkyardReloadCommentsAndEditor&&window.talkyardReloadCommentsAndEditor()},t.prototype.componentWillUnmount=function(){window.talkyardRemoveCommentsAndEditor&&window.talkyardRemoveCommentsAndEditor()},t.prototype.render=function(){return f.default.createElement("div",{className:"talkyard-comments","data-discussion-id":this.props.discussionId||"","data-talkyard-page-id":this.props.talkyardPageId||this.props.edPageId||""},f.default.createElement("noscript",null,"Please enable Javascript to view comments."),f.default.createElement("p",{style:{marginTop:25,opacity:.9,fontSize:"96%"}},"Comments powered by ",f.default.createElement("a",{href:"https://www.talkyard.io"},"Talkyard"),"."))},t}(d.Component);t.default=y},24:function(e,t){"use strict";function r(e){F.set(e,Object.create(null))}function o(e,t){var r=t.target,o=t.key,n=t.type;"iterate"===n&&(o=M);var a=F.get(r),l=a[o];l||(a[o]=l=new Set),l.has(e)||(l.add(e),e.cleaners.push(l))}function n(e){var t=e.target,r=e.key,o=e.type,n=F.get(t),l=new Set;if("clear"===o)for(var i in n)a(l,n,i);else a(l,n,r);if("add"===o||"delete"===o||"clear"===o){var u=Array.isArray(t)?"length":M;a(l,n,u)}return l}function a(e,t,r){var o=t[r];o&&o.forEach(e.add,e)}function l(e){e.cleaners&&e.cleaners.forEach(i,e),e.cleaners=[]}function i(e){e.delete(this)}function u(e,t,r,o){if(e.unobserved)return t.apply(r,o);l(e);try{return O=e,t.apply(r,o)}finally{O=void 0}}function s(e){O&&(f(O,e),o(O,e))}function c(e){n(e).forEach(d,e)}function d(e){f(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function f(e,t){if(e.debugger&&!j)try{j=!0,e.debugger(t)}finally{j=!1}}function p(){return void 0!==O}function y(e,t){void 0===t&&(t={});var r=e[R]?e:function t(){return u(t,e,this,arguments)};return r.scheduler=t.scheduler,r.debugger=t.debugger,r[R]=!0,t.lazy||r(),r}function h(e){e.unobserved||(e.unobserved=!0,l(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)}function g(e){var t=e.constructor,r="function"==typeof t&&t.name in q&&q[t.name]===t;return!r||z.has(t)}function m(e){return z.get(e.constructor)}function b(e,t,r){var o=Reflect.get(e,t,r);if("symbol"==typeof t||"function"==typeof o)return o;s({target:e,key:t,receiver:r,type:"get"});var n=S.get(o);if(p()&&"object"==typeof o&&null!==o){if(n)return n;var a=Reflect.getOwnPropertyDescriptor(e,t);if(!a||a.writable!==!1||a.configurable!==!1)return C(o)}return n||o}function v(e,t){var r=Reflect.has(e,t);return"symbol"==typeof t?r:(s({target:e,key:t,type:"has"}),r)}function x(e){return s({target:e,type:"iterate"}),Reflect.ownKeys(e)}function w(e,t,r,o){"object"==typeof r&&null!==r&&(r=T.get(r)||r);var n=I.call(e,t),a=e[t],l=Reflect.set(e,t,r,o);return p()?(console.error("Mutating observables in reactions is forbidden. You set "+t+" to "+r+"."),l):"symbol"==typeof t||e!==T.get(o)?l:(n?r!==a&&c({target:e,key:t,value:r,oldValue:a,receiver:o,type:"set"}):c({target:e,key:t,value:r,receiver:o,type:"add"}),l)}function E(e,t){var r=I.call(e,t),o=e[t],n=Reflect.deleteProperty(e,t);return"symbol"!=typeof t&&r&&c({target:e,key:t,oldValue:o,type:"delete"}),n}function C(e){return void 0===e&&(e={}),T.has(e)||!g(e)?e:S.get(e)||k(e)}function k(e){var t=m(e)||N,o=new Proxy(e,t);return S.set(e,o),T.set(o,e),r(e),o}function A(e){return T.has(e)}function _(e){return T.get(e)||e}Object.defineProperty(t,"__esModule",{value:!0});var O,F=new WeakMap,M=Symbol("iteration key"),j=!1,R=Symbol("is reaction"),T=new WeakMap,S=new WeakMap,D=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,U={has:function(e){var t=T.get(this),r=D(this);return s({target:t,key:e,type:"has"}),r.has.apply(t,arguments)},get:function(e){var t=T.get(this),r=D(this);return s({target:t,key:e,type:"get"}),r.get.apply(t,arguments)},add:function(e){var t=T.get(this),r=D(this),o=r.has.call(t,e),n=r.add.apply(t,arguments);return o||c({target:t,key:e,value:e,type:"add"}),n},set:function(e,t){var r=T.get(this),o=D(this),n=o.has.call(r,e),a=o.get.call(r,e),l=o.set.apply(r,arguments);return n?t!==a&&c({target:r,key:e,value:t,oldValue:a,type:"set"}):c({target:r,key:e,value:t,type:"add"}),l},delete:function(e){var t=T.get(this),r=D(this),o=r.has.call(t,e),n=r.get?r.get.call(t,e):void 0,a=r.delete.apply(t,arguments);return o&&c({target:t,key:e,oldValue:n,type:"delete"}),a},clear:function(){var e=T.get(this),t=D(this),r=0!==e.size,o=e instanceof Map?new Map(e):new Set(e),n=t.clear.apply(e,arguments);return r&&c({target:e,oldTarget:o,type:"clear"}),n},forEach:function(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),t.forEach.apply(e,arguments)},keys:function(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),t.values.apply(e,arguments)},entries:function(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),t.entries.apply(e,arguments)},get size(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};U[Symbol.iterator]=function(){var e=T.get(this),t=D(this);return s({target:e,type:"iterate"}),t[Symbol.iterator].apply(e,arguments)};var B={get:function(e,t,r){return e=P.call(U,t)?U:e,Reflect.get(e,t,r)}},q=Function("return this")(),z=new Map([[Map,B],[Set,B],[WeakMap,B],[WeakSet,B],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]),I=Object.prototype.hasOwnProperty,N={get:b,has:v,ownKeys:x,set:w,deleteProperty:E};t.observe=y,t.unobserve=h,t.observable=C,t.isObservable=A,t.raw=_},59:function(e,t){function r(e,t){for(var r=-1,o=null==e?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}e.exports=r},60:function(e,t){function r(e,t,r,o){var n=-1,a=null==e?0:e.length;for(o&&a&&(r=e[++n]);++n<a;)r=t(r,e[n],n,e);return r}e.exports=r},61:function(e,t){function r(e){return e.match(o)||[]}var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=r},62:function(e,t){function r(e){return function(t){return null==e?void 0:e[t]}}e.exports=r},63:function(e,t,r){function o(e){if("string"==typeof e)return e;if(l(e))return a(e,o)+"";if(i(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var n=r(58),a=r(59),l=r(88),i=r(69),u=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;e.exports=o},64:function(e,t,r){function o(e){return function(t){return n(l(a(t).replace(u,"")),e,"")}}var n=r(60),a=r(68),l=r(72),i="['’]",u=RegExp(i,"g");e.exports=o},65:function(e,t,r){var o=r(62),n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},a=o(n);e.exports=a},66:function(e,t){function r(e){return o.test(e)}var o=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=r},67:function(e,t){function r(e){return e.match(L)||[]}var o="\\ud800-\\udfff",n="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",l="\\u20d0-\\u20ff",i=n+a+l,u="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",c="\\xac\\xb1\\xd7\\xf7",d="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",f="\\u2000-\\u206f",p=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y="A-Z\\xc0-\\xd6\\xd8-\\xde",h="\\ufe0e\\ufe0f",g=c+d+f+p,m="['’]",b="["+g+"]",v="["+i+"]",x="\\d+",w="["+u+"]",E="["+s+"]",C="[^"+o+g+x+u+s+y+"]",k="\\ud83c[\\udffb-\\udfff]",A="(?:"+v+"|"+k+")",_="[^"+o+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",F="[\\ud800-\\udbff][\\udc00-\\udfff]",M="["+y+"]",j="\\u200d",R="(?:"+E+"|"+C+")",T="(?:"+M+"|"+C+")",S="(?:"+m+"(?:d|ll|m|re|s|t|ve))?",D="(?:"+m+"(?:D|LL|M|RE|S|T|VE))?",P=A+"?",U="["+h+"]?",B="(?:"+j+"(?:"+[_,O,F].join("|")+")"+U+P+")*",q="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",z="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",I=U+P+B,N="(?:"+[w,O,F].join("|")+")"+I,L=RegExp([M+"?"+E+"+"+S+"(?="+[b,M,"$"].join("|")+")",T+"+"+D+"(?="+[b,M+R,"$"].join("|")+")",M+"?"+R+"+"+S,M+"+"+D,z,q,x,N].join("|"),"g");e.exports=r},68:function(e,t,r){function o(e){return e=a(e),e&&e.replace(l,n).replace(f,"")}var n=r(65),a=r(22),l=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u0300-\\u036f",u="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",c=i+u+s,d="["+c+"]",f=RegExp(d,"g");e.exports=o},69:function(e,t,r){function o(e){return"symbol"==typeof e||a(e)&&n(e)==l}var n=r(46),a=r(47),l="[object Symbol]";e.exports=o},70:function(e,t,r){var o=r(64),n=o(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()});e.exports=n},22:function(e,t,r){function o(e){return null==e?"":n(e)}var n=r(63);e.exports=o},72:function(e,t,r){function o(e,t,r){return e=l(e),t=r?void 0:t,void 0===t?a(e)?i(e):n(e):e.match(t)||[]}var n=r(61),a=r(66),l=r(22),i=r(67);e.exports=o},13:function(e,t,r){"use strict";function o(e,t){void 0===t&&(t={});var r=t.devtool,o=!(e.prototype&&e.prototype.isReactComponent),l=o?n.Component:e,i=r?function(t){return r(Object.assign({Component:e},t))}:void 0,u=function(t){function r(e,r){var o=this;t.call(this,e,r),this.render=a.observe(this.render,{scheduler:function(){return o.setState({})},debugger:i,lazy:!0})}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.render=function(){return o?e(this.props,this.context):t.prototype.render.call(this)},r.prototype.shouldComponentUpdate=function(e,r){var o=this,n=o.props,a=o.state;if(t.prototype.shouldComponentUpdate&&!t.prototype.shouldComponentUpdate.call(this,e,r))return i&&i({type:"render",renderType:"blocked"}),!1;if(a!==r)return i&&i({type:"render",renderType:"reactive"}),!0;var l=Object.keys(n),u=Object.keys(e);return!(u.length===l.length&&!u.some(function(t){return n[t]!==e[t]}))&&(i&&i({type:"render",renderType:"normal",props:e,oldProps:n}),!0)},r.prototype.componentWillUnmount=function(){t.prototype.componentWillUnmount&&t.prototype.componentWillUnmount.call(this),a.unobserve(this.render)},r}(l);return u.displayName=e.displayName||e.name,o&&(u.contextTypes=e.contextTypes,u.childContextTypes=e.childContextTypes,u.propTypes=e.propTypes,u.defaultProps=e.defaultProps),u}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(24);t.store=a.observable,t.view=o},7:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=r(2),i=o(l),u=r(3),s=o(u),c=function(e,t){var r=e.children,o=e.color,l=e.size,u=e.style,s=e.width,c=e.height,d=n(e,["children","color","size","style","width","height"]),f=t.reactIconBase,p=void 0===f?{}:f,y=l||p.size||"1em";return i.default.createElement("svg",a({children:r,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||y,width:s||y},p,d,{style:a({verticalAlign:"middle",color:o||p.color},p.style||{},u)}))};c.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number]),width:s.default.oneOfType([s.default.string,s.default.number]),height:s.default.oneOfType([s.default.string,s.default.number]),style:s.default.object},c.contextTypes={reactIconBase:s.default.shape(c.propTypes)},t.default=c,e.exports=t.default},133:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),l=o(a),i=r(7),u=o(i),s=function(e){return l.default.createElement(u.default,n({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m34 27.1q0-0.8-0.6-1.5l-4.7-4.6q-0.6-0.6-1.5-0.6-0.9 0-1.6 0.7 0.1 0 0.4 0.4t0.5 0.5 0.3 0.4 0.3 0.6 0.1 0.6q0 0.9-0.6 1.5t-1.5 0.6q-0.4 0-0.6-0.1t-0.6-0.3-0.4-0.3-0.5-0.5-0.4-0.4q-0.8 0.7-0.8 1.6 0 0.9 0.7 1.6l4.6 4.6q0.6 0.6 1.5 0.6 0.9 0 1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5z m-15.7-15.7q0-0.9-0.6-1.5l-4.6-4.6q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l4.6 4.7q0.6 0.6 1.5 0.6 1 0 1.6-0.7 0-0.1-0.4-0.4t-0.5-0.5-0.3-0.4-0.3-0.6-0.1-0.6q0-0.9 0.7-1.5t1.5-0.7q0.3 0 0.6 0.1t0.6 0.3 0.4 0.3 0.5 0.5 0.4 0.4q0.7-0.7 0.7-1.6z m20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6q-1.8-1.9-1.8-4.6t1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z"})))};t.default=s,e.exports=t.default},95:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(70),u=o(i),s=r(2),c=o(s),d=r(12),f=o(d),p=r(15),y=(o(p),r(5)),h=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this,t=this.props.tags;return c.default.createElement("div",{className:"post-tag-container"},t&&t.map(function(t){return c.default.createElement(f.default,{key:t,style:{textDecoration:"none"},to:"/tags/"+(0,u.default)(t)},c.default.createElement(y.Badge,{ml:0,bg:e.props.badgeBgColor,color:e.props.badgeColor},t))}))},t}(s.Component);t.default=h,e.exports=t.default},15:function(e,t){"use strict";t.__esModule=!0,t.default={breakpoints:[32,48,64,80],space:[0,4,8,16,32,64,128],fontSizes:[12,14,15,20,24,32,48,64,72,96],weights:[400,700],colors:{purplegatsby:"#744c9e",black:"#303030",blacktotal:"#000",lightGrey:"#E9E7E7",grey:"#bbb",gold:"#cdc1a4",aqua:"#7FDBFF",blue:"#0074D9",navy:"#001F3F",teal:"#39CCCC",tealdarker:"#2ca9a9",green:"#2ECC40",olive:"#3D9970",lime:"#01FF70",yellow:"#FFDC00",orange:"#FF851B",red:"#FF4136",fuchsia:"#F012BE",purple:"#B10DC9",maroon:"#85144B",white:"#FFFFFF",silver:"#DDDDDD",gray:"#AAAAAA",primary:"#F46965",secondary:"#cdc1a4",secondaryLight:"#e4ddcd",secondaryLightest:"#f5f2ed",secondaryDark:"#d1ba85",light:"#fff",offLight:"#E2E6EA"},shadows:{basic:"0 1px 3px rgba(50,50,93,.06)"},bg:"#aea",radius:4,font:'"Roboto", sans-serif',headerFont:'"Poppins","Helvetica Neue", "Segoe UI","Helvetica", "Arial", "sans-serif"',monospace:'"SF Mono", "Roboto Mono", Menlo, monospace'},e.exports=t.default},220:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0;var u=i(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.2, 0.2, 1);\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n"],["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.2, 0.2, 1);\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n"]),s=r(2),c=o(s),d=r(4),f=o(d),p=r(12),y=o(p),h=r(5),g=r(95),m=o(g),b=r(133),v=o(b),x=r(15),w=(o(x),r(199)),E=o(w),C=(0,f.default)(h.Card)(u),k=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(e){return c.default.createElement(C,{my:3,p:4,bg:this.props.bg,key:this.props.id,className:"blogPost"},c.default.createElement(h.Box,null,c.default.createElement(h.Row,{mx:0,mb:1,className:"postTitle"},c.default.createElement(h.Heading,null,null!=this.props.url?c.default.createElement(h.Box,{color:"tealdarker",mb:2},c.default.createElement(h.Link,{href:this.props.url,className:"postURL"},c.default.createElement(v.default,{size:"25"})," ",this.props.title)):c.default.createElement(y.default,{to:this.props.slug,className:"postURL"},this.props.title))),c.default.createElement(h.Row,{mx:0,mb:4,className:"postDate"},c.default.createElement(h.Small,null,"Postado em ",this.props.date))),c.default.createElement(h.Box,{mx:0,className:"postContent"},null!=this.props.html?c.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.html}}):null),null!=this.props.excerpt?c.default.createElement(h.Box,{mb:4},c.default.createElement(h.Text,{mb:2},this.props.excerpt),c.default.createElement(h.Small,null,c.default.createElement(y.default,{to:this.props.slug,className:"postURL"},"Veja Mais"))):null,c.default.createElement(h.Row,{mx:0,mb:1,mt:4,className:"postTags"},c.default.createElement(m.default,{tags:this.props.tags,badgeBgColor:this.props.badgeBgColor,badgeColor:this.props.badgeColor})),c.default.createElement(h.Box,null,c.default.createElement(E.default,null)))},t}(c.default.Component);t.default=k,e.exports=t.default},26:function(e,t){"use strict";t.__esModule=!0,t.default={breakpoints:[32,48,64,80],space:[0,4,8,16,32,64,128],fontSizes:[12,14,15,20,24,32,48,64,72,96],weights:[400,700],colors:{purplegatsby:"#744c9e",black:"#303030",blacktotal:"#000",lightGrey:"#E9E7E7",grey:"#bbb",gold:"#cdc1a4",aqua:"#7FDBFF",blue:"#0074D9",navy:"#001F3F",teal:"#39CCCC",tealdarker:"#2ca9a9",green:"#2ECC40",olive:"#3D9970",lime:"#01FF70",yellow:"#FFDC00",orange:"#FF851B",red:"#FF4136",fuchsia:"#F012BE",purple:"#B10DC9",maroon:"#85144B",white:"#FFFFFF",silver:"#DDDDDD",gray:"#AAAAAA",primary:"#F46965",secondary:"#cdc1a4",secondaryLight:"#e4ddcd",secondaryLightest:"#f5f2ed",secondaryDark:"#d1ba85",light:"#fff",offLight:"#E2E6EA"},shadows:{basic:"0 1px 3px rgba(50,50,93,.06)"},bg:"#aea",radius:4,font:'"Roboto", sans-serif',headerFont:'"Anonymous Pro","Poppins","Helvetica Neue", "Segoe UI","Helvetica", "Arial", "sans-serif"',monospace:'"SF Mono", "Roboto Mono", Menlo, monospace'},e.exports=t.default},27:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.darkMode=t.lightMode=t.themeVariables=t.themeMode=void 0;var n=r(13),a=r(26);o(a),t.themeMode=(0,n.store)({darkMode:!0}),t.themeVariables=(0,n.store)({primaryColor:"white",secondaryColor:"lightGrey",additionalColor:"tealdarker",tagBadgeBgColor:"tealdarker",fontColor:"black",fontAdditionalColor:"tealdarker",headerFont:'"Poppins","Helvetica Neue", "Segoe UI","Helvetica", "Arial", "sans-serif"',bodyFont:'"Roboto", sans-serif',AdditionalFont:'"SF Mono", "Roboto Mono", Menlo, monospace'}),t.lightMode=(0,n.store)({primaryColor:"black",secondaryColor:"white",additionalColor:"teal",fontColor:"black",fontAdditionalColor:"green"}),t.darkMode=(0,n.store)({primaryColor:"black",secondaryColor:"white",additionalColor:"teal",fontColor:"black",fontAdditionalColor:"green"})},232:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=r(2),u=o(i),s=r(25),c=(o(s),r(27)),d=(r(13),r(35)),f=r(220),p=o(f),y=r(5),h=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(e){var t=(this.props.pathContext.slug,this.props.data.blogPostsMarkdown),r=t;return u.default.createElement(y.Box,{key:r.id,pb:6},u.default.createElement(d.FadeIn,null,u.default.createElement(y.Container,{pt:4},u.default.createElement(p.default,{slug:r.slug,title:r.title,date:r.date,tags:r.tags,html:r.childMarkdownRemark.html,bg:c.themeVariables.primaryColor,color:c.themeVariables.fontColor,additionalColor:c.themeVariables.fontAdditionalColor,badgeColor:c.themeVariables.primaryColor,badgeBgColor:c.themeVariables.tagBadgeBgColor}))))},t}(u.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-jsx-2d2da76287c1b023e959.js.map