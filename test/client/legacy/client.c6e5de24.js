function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var a=o((function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function b(){}var x={};x[i]=function(){return this};var $=Object.getPrototypeOf,w=$&&$($(O([])));w&&w!==n&&o.call(w,i)&&(x=w);var _=b.prototype=y.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(a,i,u,c){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=f(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),f(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}var f,s=o((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(r)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}));function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?l(t):e}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function x(t){t.forEach(g)}function $(t){return"function"==typeof t}function w(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function _(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function E(e,r,n,o,a,i,u){var c=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(r.dirty.length,a.length),c=0;c<u;c+=1)i[c]=r.dirty[c]|a[c];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(c){var f=_(r,n,o,u);e.p(f,c)}}function S(t,e){t.appendChild(e)}function k(t,e,r){t.insertBefore(e,r||null)}function L(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function j(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function P(){return O(" ")}function A(){return O("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function I(t){return Array.from(t.childNodes)}function T(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];r[c.name]||u.push(c.name)}for(var f=0;f<u.length;f++)a.removeAttribute(u[f]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):j(e)}function C(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return O(e)}function q(t){return C(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function G(t){f=t}function J(){if(!f)throw new Error("Function called outside component initialization");return f}var M=[],F=[],K=[],V=[],Y=Promise.resolve(),D=!1;function H(t){K.push(t)}var z=!1,W=new Set;function X(){if(!z){z=!0;do{for(var t=0;t<M.length;t+=1){var e=M[t];G(e),Q(e.$$)}for(G(null),M.length=0;F.length;)F.pop()();for(var r=0;r<K.length;r+=1){var n=K[r];W.has(n)||(W.add(n),n())}K.length=0}while(M.length);for(;V.length;)V.pop()();D=!1,z=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}var Z,tt=new Set;function et(){Z={r:0,c:[],p:Z}}function rt(){Z.r||x(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,r,n){if(t&&t.o){if(tt.has(t))return;tt.add(t),Z.c.push((function(){tt.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function at(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(n[c]=1);for(var f in u)o[f]||(r[f]=u[f],o[f]=1);t[a]=u}else for(var s in i)o[s]=1}for(var l in n)l in r||(r[l]=void 0);return r}function it(e){return"object"===t(e)&&null!==e?e:{}}function ut(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function ft(t,e,r,n){var o=t.$$,a=o.fragment,i=o.on_mount,u=o.on_destroy,c=o.after_update;a&&a.m(e,r),n||H((function(){var e=i.map(g).filter($);u?u.push.apply(u,h(e)):x(e),t.$$.on_mount=[]})),c.forEach(H)}function st(t,e){var r=t.$$;null!==r.fragment&&(x(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(M.push(t),D||(D=!0,Y.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,r,n,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=f;G(t);var c=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:b(),dirty:i,skip_bound:!1},s=!1;if(c.ctx=r?r(t,e.props||{},(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return c.ctx&&o(c.ctx[e],c.ctx[e]=n)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](n),s&&lt(t,e)),r})):[],c.update(),s=!0,x(c.before_update),c.fragment=!!n&&n(c.ctx),e.target){if(e.hydrate){var l=I(e.target);c.fragment&&c.fragment.l(l),l.forEach(L)}else c.fragment&&c.fragment.c();e.intro&&nt(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),X()}G(u)}var ht=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){st(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,r),n&&v(e,n),t}(),dt=[];function vt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(w(t,r)&&(t=r,e)){for(var o=!dt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),dt.push(i,t)}if(o){for(var u=0;u<dt.length;u+=2)dt[u][0](dt[u+1]);dt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,u=[a,i];return n.push(u),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(u);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var mt={};function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function gt(t){var e,r,o,a,i,u,c,f,s,l,p,h,d,v,y,g;return{c:function(){e=j("nav"),r=j("ul"),o=j("li"),a=j("a"),i=O("home"),c=P(),f=j("li"),s=j("a"),l=O("about"),h=P(),d=j("li"),v=j("a"),y=O("blog"),this.h()},l:function(t){var n=I(e=T(t,"NAV",{class:!0})),u=I(r=T(n,"UL",{class:!0})),p=I(o=T(u,"LI",{class:!0})),m=I(a=T(p,"A",{"aria-current":!0,href:!0,class:!0}));i=C(m,"home"),m.forEach(L),p.forEach(L),c=q(u);var g=I(f=T(u,"LI",{class:!0})),b=I(s=T(g,"A",{"aria-current":!0,href:!0,class:!0}));l=C(b,"about"),b.forEach(L),g.forEach(L),h=q(u);var x=I(d=T(u,"LI",{class:!0})),$=I(v=T(x,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));y=C($,"blog"),$.forEach(L),x.forEach(L),u.forEach(L),n.forEach(L),this.h()},h:function(){N(a,"aria-current",u=void 0===t[0]?"page":void 0),N(a,"href","."),N(a,"class","svelte-1dbd5up"),N(o,"class","svelte-1dbd5up"),N(s,"aria-current",p="about"===t[0]?"page":void 0),N(s,"href","about"),N(s,"class","svelte-1dbd5up"),N(f,"class","svelte-1dbd5up"),N(v,"rel","prefetch"),N(v,"aria-current",g="blog"===t[0]?"page":void 0),N(v,"href","blog"),N(v,"class","svelte-1dbd5up"),N(d,"class","svelte-1dbd5up"),N(r,"class","svelte-1dbd5up"),N(e,"class","svelte-1dbd5up")},m:function(t,n){k(t,e,n),S(e,r),S(r,o),S(o,a),S(a,i),S(r,c),S(r,f),S(f,s),S(s,l),S(r,h),S(r,d),S(d,v),S(v,y)},p:function(t,e){var r=n(e,1)[0];1&r&&u!==(u=void 0===t[0]?"page":void 0)&&N(a,"aria-current",u),1&r&&p!==(p="about"===t[0]?"page":void 0)&&N(s,"aria-current",p),1&r&&g!==(g="blog"===t[0]?"page":void 0)&&N(v,"aria-current",g)},i:m,o:m,d:function(t){t&&L(e)}}}function bt(t,e,r){var n=e.segment;return t.$$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var xt=function(t){c(r,ht);var e=yt(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,bt,gt,w,{segment:0}),n}return r}();function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function wt(t){var e,r,o,a;e=new xt({props:{segment:t[0]}});var i=t[2].default,u=function(t,e,r,n){if(t){var o=_(t,e,r,n);return t[0](o)}}(i,t,t[1],null);return{c:function(){ut(e.$$.fragment),r=P(),o=j("main"),u&&u.c(),this.h()},l:function(t){ct(e.$$.fragment,t),r=q(t);var n=I(o=T(t,"MAIN",{class:!0}));u&&u.l(n),n.forEach(L),this.h()},h:function(){N(o,"class","svelte-1uhnsl8")},m:function(t,n){ft(e,t,n),k(t,r,n),k(t,o,n),u&&u.m(o,null),a=!0},p:function(t,r){var o=n(r,1)[0],c={};1&o&&(c.segment=t[0]),e.$set(c),u&&u.p&&(!a||2&o)&&E(u,i,t,t[1],o,null,null)},i:function(t){a||(nt(e.$$.fragment,t),nt(u,t),a=!0)},o:function(t){ot(e.$$.fragment,t),ot(u,t),a=!1},d:function(t){st(e,t),t&&L(r),t&&L(o),u&&u.d(t)}}}function _t(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&r(0,i=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[i,a,o]}var Et=function(t){c(r,ht);var e=$t(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,_t,wt,w,{segment:0}),n}return r}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function kt(t){var e,r,n=t[1].stack+"";return{c:function(){e=j("pre"),r=O(n)},l:function(t){var o=I(e=T(t,"PRE",{}));r=C(o,n),o.forEach(L)},m:function(t,n){k(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&U(r,n)},d:function(t){t&&L(e)}}}function Lt(t){var e,r,o,a,i,u,c,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&kt(t);return{c:function(){r=P(),o=j("h1"),a=O(t[0]),i=P(),u=j("p"),c=O(l),f=P(),p&&p.c(),s=A(),this.h()},l:function(e){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),r=q(e);var n=I(o=T(e,"H1",{class:!0}));a=C(n,t[0]),n.forEach(L),i=q(e);var h=I(u=T(e,"P",{class:!0}));c=C(h,l),h.forEach(L),f=q(e),p&&p.l(e),s=A(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(u,"class","svelte-8od9u6")},m:function(t,e){k(t,r,e),k(t,o,e),S(o,a),k(t,i,e),k(t,u,e),S(u,c),k(t,f,e),p&&p.m(t,e),k(t,s,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=kt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(r),t&&L(o),t&&L(i),t&&L(u),t&&L(f),p&&p.d(t),t&&L(s)}}}function Rt(t,e,r){var n=e.status,o=e.error;return t.$$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,false]}var jt=function(t){c(r,ht);var e=St(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,Rt,Lt,w,{status:0,error:1}),n}return r}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Pt(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=y(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ut(e.$$.fragment),r=A()},l:function(t){e&&ct(e.$$.fragment,t),r=A()},m:function(t,o){e&&ft(e,t,o),k(t,r,o),n=!0},p:function(t,n){var u=16&n?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){et();var c=e;ot(c.$$.fragment,1,0,(function(){st(c,1)})),rt()}a?(ut((e=new a(i())).$$.fragment),nt(e.$$.fragment,1),ft(e,r.parentNode,r)):e=null}else a&&e.$set(u)},i:function(t){n||(e&&nt(e.$$.fragment,t),n=!0)},o:function(t){e&&ot(e.$$.fragment,t),n=!1},d:function(t){t&&L(r),e&&st(e,t)}}}function At(t){var e,r;return e=new jt({props:{error:t[0],status:t[1]}}),{c:function(){ut(e.$$.fragment)},l:function(t){ct(e.$$.fragment,t)},m:function(t,n){ft(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){st(e,t)}}}function Nt(t){var e,r,n,o,a=[At,Pt],i=[];function u(t,e){return t[0]?0:1}return e=u(t),r=i[e]=a[e](t),{c:function(){r.c(),n=A()},l:function(t){r.l(t),n=A()},m:function(t,r){i[e].m(t,r),k(t,n,r),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(et(),ot(i[c],1,1,(function(){i[c]=null})),rt(),(r=i[e])?r.p(t,o):(r=i[e]=a[e](t)).c(),nt(r,1),r.m(n.parentNode,n))},i:function(t){o||(nt(r),o=!0)},o:function(t){ot(r),o=!1},d:function(t){i[e].d(t),t&&L(n)}}}function It(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Nt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return e=new Et({props:a}),{c:function(){ut(e.$$.fragment)},l:function(t){ct(e.$$.fragment,t)},m:function(t,n){ft(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?at(o,[4&a&&{segment:t[2][0]},8&a&&it(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(nt(e.$$.fragment,t),r=!0)},o:function(t){ot(e.$$.fragment,t),r=!1},d:function(t){st(e,t)}}}function Tt(t,e,r){var n,o,a,i=e.stores,u=e.error,c=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,J().$$.after_update.push(n),o=mt,a=i,J().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,u=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,f=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[u,c,f,s,p,i,h]}var Ct,qt=function(t){c(r,ht);var e=Ot(r);function r(t){var n;return d(this,r),pt(l(n=e.call(this)),t,Tt,It,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Ut=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Bt=[{js:function(){return Promise.all([import("./index.8ed1df87.js"),__inject_styles(["client-e118e612.css","index-4045543e.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.fb616304.js"),__inject_styles(["client-e118e612.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.fdc19d62.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].81eec7be.js"),__inject_styles(["client-e118e612.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}}],Gt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Ct(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Jt(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}c((n=n.apply(t,e||[])).next())}))}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Ft,Kt=1;var Vt,Yt,Dt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Ht={};function zt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(u):r[a]=u})),r}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Vt))return null;var e=t.pathname.slice(Vt.length);if(""===e&&(e="/"),!Ut.some((function(t){return t.test(e)})))for(var r=0;r<Gt.length;r+=1){var n=Gt[r],o=n.pattern.exec(e);if(o){var a=zt(t.search),i=n.parts[n.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:n,match:o,page:c}}}}function Xt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var r=Mt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Wt(a);if(i)te(i,null,r.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Dt.pushState({id:Ft},"",a.href)}}}else location.hash||e.preventDefault()}}}function Qt(){return{x:pageXOffset,y:pageYOffset}}function Zt(t){if(Ht[Ft]=Qt(),t.state){var e=Wt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Ft=t})(Kt=Kt+1),Dt.replaceState({id:Ft},"",location.href)}function te(t,e,r,n){return Jt(this,void 0,void 0,a.mark((function o(){var i,u,c,f;return a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Ft=e:(u=Qt(),Ht[Ft]=u,Ft=e=++Kt,Ht[Ft]=r?u:{x:0,y:0}),o.next=4,Yt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),r||(c=Ht[e],n&&(f=document.getElementById(n.slice(1)))&&(c={x:0,y:f.getBoundingClientRect().top+scrollY}),Ht[Ft]=c,i||f?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function ee(t){var e=t.baseURI;if(!e){var r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}var re,ne=null;function oe(t){return ne&&ne.href===t.href?ne.promise:ke(t)}function ae(t){var e=Mt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Wt(new URL(t,ee(document)));if(e)ne&&t===ne.href||(ne={href:t,promise:ke(e)}),ne.promise}(e.href)}function ie(t){clearTimeout(re),re=setTimeout((function(){ae(t)}),20)}function ue(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},r=Wt(new URL(t,ee(document)));return r?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),te(r,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ce,fe,se,le,pe,he,de,ve,me,ye="undefined"!=typeof __SAPPER__&&__SAPPER__,ge=!1,be=[],xe="{}",$e={page:function(t){var e=vt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:vt(null),session:vt(ye&&ye.session)};function we(t,e){var r=t.error;return Object.assign({error:r},e)}function _e(t){return Jt(this,void 0,void 0,a.mark((function e(){var r,n,o,i,u,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce&&$e.preloading.set(!0),r=oe(t),n=fe={},e.next=5,r;case 5:if(o=e.sent,i=o.redirect,n===fe){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ue(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return u=o.props,c=o.branch,e.next=17,Ee(c,u,we(u,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ee(t,e,r){return Jt(this,void 0,void 0,a.mark((function n(){return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if($e.page.set(r),$e.preloading.set(!1),!ce){n.next=6;break}ce.$set(e),n.next=13;break;case 6:return e.stores={page:{subscribe:$e.page.subscribe},preloading:{subscribe:$e.preloading.subscribe},session:$e.session},n.next=9,se;case 9:n.t0=n.sent,e.level0={props:n.t0},e.notify=$e.page.notify,ce=new qt({target:he,props:e,hydrate:!0});case 13:be=t,xe=JSON.stringify(r.query),ge=!0,pe=!1;case 17:case"end":return n.stop()}}),n)})))}function Se(t,e,r,n){if(n!==xe)return!0;var o=be[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function ke(t){return Jt(this,void 0,void 0,a.mark((function e(){var r,n,o,i,u,c,f,s,l,p,h,d,v=this;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},c={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},se||(f=function(){return{}},se=ye.preloaded[0]||f.call(c,{host:n.host,path:n.path,query:n.query,params:{}},le)),l=1,e.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),d=!1,e.next=13,Promise.all(r.parts.map((function(e,r){return Jt(v,void 0,void 0,a.mark((function i(){var f,s,v,m,y,g;return a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=o[r],Se(r,f,h,p)&&(d=!0),u.segments[l]=o[r+1],e){a.next=5;break}return a.abrupt("return",{segment:f});case 5:if(s=l++,pe||d||!be[r]||be[r].part!==e.i){a.next=8;break}return a.abrupt("return",be[r]);case 8:return d=!1,a.next=11,Bt[e.i].js();case 11:if(v=a.sent,m=v.default,y=v.preload,!ge&&ye.preloaded[r+1]){a.next=25;break}if(!y){a.next=21;break}return a.next=18,y.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},le);case 18:a.t0=a.sent,a.next=22;break;case 21:a.t0={};case 22:g=a.t0,a.next=26;break;case 25:g=ye.preloaded[r+1];case 26:return a.abrupt("return",u["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return a.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),u.error=e.t0,u.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:u,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}$e.session.subscribe((function(t){return Jt(void 0,void 0,void 0,a.mark((function e(){var r,n,o,i,u,c;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,ge){e.next=3;break}return e.abrupt("return");case 3:return pe=!0,r=Wt(new URL(location.href)),n=fe={},e.next=8,ke(r);case 8:if(o=e.sent,i=o.redirect,u=o.props,c=o.branch,n===fe){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ue(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ee(c,u,we(u,r.page));case 21:case"end":return e.stop()}}),e)})))})),de={target:document.querySelector("#sapper")},ve=de.target,he=ve,me=ye.baseUrl,Vt=me,Yt=_e,"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Dt.scrollRestoration="auto"})),addEventListener("load",(function(){Dt.scrollRestoration="manual"})),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",ae),addEventListener("mousemove",ie),ye.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,r=t.pathname,n=t.search,o=ye.session,a=ye.preloaded,i=ye.status,u=ye.error;se||(se=a&&a[0]);var c={error:u,status:i,session:o,level0:{props:se},level1:{props:{status:i,error:u},component:jt},segments:a},f=zt(n);Ee([],c,{host:e,path:r,query:f,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;Dt.replaceState({id:Kt},"",r);var n=Wt(new URL(location.href));if(n)return te(n,Kt,!0,e)}));export{ht as S,c as _,i as a,p as b,d as c,l as d,P as e,j as f,L as g,q as h,pt as i,T as j,I as k,C as l,N as m,k as n,S as o,m as p,B as q,U as r,w as s,O as t,n as u,R as v,a as w};

import __inject_styles from './inject_styles.fe622066.js';