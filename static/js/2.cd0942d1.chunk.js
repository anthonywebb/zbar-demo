(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[2],[function(t,e,r){t.exports=r(15)},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){var n=r(16);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(17),o=r(18),i=r(19);t.exports=function(t){return function(){var e,r=n(t);if(o()){var a=n(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return i(this,e)}}},function(t,e,r){"use strict";var n=r(3),o=r(5),i=r(6),a=r(2);Object.defineProperty(e,"__esModule",{value:!0}),e.Symbol=void 0;var u=r(22),c=function t(e,r){a(this,t),this.ptr=e,this.ptr32=e>>2,this.buf=r,this.HEAP8=new Int8Array(r),this.HEAPU32=new Uint32Array(r),this.HEAP32=new Int32Array(r)},s=function(t){o(r,t);var e=i(r);function r(){return a(this,r),e.apply(this,arguments)}return n(r,[{key:"type",get:function(){return this.HEAPU32[this.ptr32]}},{key:"data",get:function(){var t=this.HEAPU32[this.ptr32+2],e=this.HEAPU32[this.ptr32+3];return Int8Array.from(this.HEAP8.subarray(e,e+t))}},{key:"points",get:function(){for(var t=this.HEAPU32[this.ptr32+5],e=this.HEAPU32[this.ptr32+6]>>2,r=[],n=0;n<t;++n){var o=this.HEAP32[e+2*n],i=this.HEAP32[e+2*n+1];r.push({x:o,y:i})}return r}},{key:"next",get:function(){var t=this.HEAPU32[this.ptr32+8];return t?new r(t,this.buf):null}},{key:"time",get:function(){return this.HEAPU32[this.ptr32+10]}},{key:"cacheCount",get:function(){return this.HEAP32[this.ptr32+11]}},{key:"quality",get:function(){return this.HEAP32[this.ptr32+12]}}]),r}(c),f=function(t){o(r,t);var e=i(r);function r(){return a(this,r),e.apply(this,arguments)}return n(r,[{key:"head",get:function(){var t=this.HEAPU32[this.ptr32+2];return t?new s(t,this.buf):null}}]),r}(c),h=function(){function t(e){a(this,t),this.type=e.type,this.typeName=u.ZBarSymbolType[this.type],this.data=e.data,this.points=e.points,this.time=e.time,this.cacheCount=e.cacheCount,this.quality=e.quality}return n(t,[{key:"decode",value:function(t){return new TextDecoder(t).decode(this.data)}}],[{key:"createSymbolsFromPtr",value:function(e,r){if(0==e)return[];for(var n=new f(e,r).head,o=[];null!==n;)o.push(new t(n)),n=n.next;return o}}]),t}();e.Symbol=h},function(t,e,r){"use strict";var n=r(0),o=r(1),i=r(2),a=r(3),u=r(5),c=r(6);Object.defineProperty(e,"__esModule",{value:!0}),e.Image=void 0;var s=r(9),f=r(7),h=r(10),p=function(t){u(r,t);var e=c(r);function r(){return i(this,r),e.apply(this,arguments)}return a(r,[{key:"destroy",value:function(){this.checkAlive(),this.inst.Image_destory(this.ptr),this.ptr=0}},{key:"getSymbols",value:function(){this.checkAlive();var t=this.inst.Image_get_symbols(this.ptr);return f.Symbol.createSymbolsFromPtr(t,this.inst.memory.buffer)}}],[{key:"createFromGrayBuffer",value:function(){var t=o(n.mark((function t(e,r,o){var i,a,u,c,s,f,p,l=arguments;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=l.length>3&&void 0!==l[3]?l[3]:0,t.next=3,h.getInstance();case 3:if(a=t.sent,u=new Uint8Array(a.memory.buffer),c=new Uint8Array(o),(s=e*r)===c.byteLength){t.next=9;break}throw Error("dataBuf does not match width and height");case 9:return f=a.malloc(s),u.set(c,f),p=a.Image_create(e,r,808466521,f,s,i),t.abrupt("return",new this(p,a));case 13:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"createFromRGBABuffer",value:function(){var t=o(n.mark((function t(e,r,o){var i,a,u,c,s,f,p,l,y,v,d,m=arguments;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=m.length>3&&void 0!==m[3]?m[3]:0,t.next=3,h.getInstance();case 3:if(a=t.sent,u=new Uint8Array(a.memory.buffer),c=new Uint8Array(o),4*(s=e*r)===c.byteLength){t.next=9;break}throw Error("dataBuf does not match width and height");case 9:for(f=a.malloc(s),p=0;p<s;++p)l=c[4*p],y=c[4*p+1],v=c[4*p+2],u[f+p]=19595*l+38469*y+7472*v>>16;return d=a.Image_create(e,r,808466521,f,s,i),t.abrupt("return",new this(d,a));case 13:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),r}(s.CppObject);e.Image=p},function(t,e,r){"use strict";var n=r(2),o=r(3);Object.defineProperty(e,"__esModule",{value:!0}),e.CppObject=void 0;var i=function(){function t(e,r){n(this,t),this.ptr=e,this.inst=r}return o(t,[{key:"checkAlive",value:function(){if(!this.ptr)throw Error("Call after destroyed")}},{key:"getPointer",value:function(){return this.checkAlive(),this.ptr}}]),t}();e.CppObject=i},function(t,e,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.getMemoryGrowTimestamp=e.getInstance=void 0;var i=r(23),a=null,u=new Int32Array,c=0,s=function(t){c&&console.info("zbar.wasm: Memory Grow: ",a.memory.buffer.byteLength),c=Date.now(),u=new Int32Array(a.memory.buffer)},f={env:{clock_gettime:function(t,e){var r=Date.now();return u[e>>2]=r/1e3|0,u[e+4>>2]=r%1e3*1e3*1e3|0,0},emscripten_notify_memory_growth:s}},h=o(n.mark((function t(){var e;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.loadWasmInstance(f);case 2:if(e=t.sent){t.next=5;break}throw Error("WASM was not loaded");case 5:return a=e.exports,s(),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))();e.getInstance=o(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),e.getMemoryGrowTimestamp=function(){return c}},function(t,e,r){"use strict";var n=r(0),o=r(1),i=r(2),a=r(3),u=r(5),c=r(6);Object.defineProperty(e,"__esModule",{value:!0}),e.ImageScanner=void 0;var s=r(9),f=r(10),h=r(7),p=function(t){u(r,t);var e=c(r);function r(){return i(this,r),e.apply(this,arguments)}return a(r,[{key:"destroy",value:function(){this.checkAlive(),this.inst.ImageScanner_destory(this.ptr),this.ptr=0}},{key:"setConfig",value:function(t,e,r){return this.checkAlive(),this.inst.ImageScanner_set_config(this.ptr,t,e,r)}},{key:"enableCache",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.checkAlive(),this.inst.ImageScanner_enable_cache(this.ptr,t)}},{key:"recycleImage",value:function(t){this.checkAlive(),this.inst.ImageScanner_recycle_image(this.ptr,t.getPointer())}},{key:"getResults",value:function(){this.checkAlive();var t=this.inst.ImageScanner_get_results(this.ptr);return h.Symbol.createSymbolsFromPtr(t,this.inst.memory.buffer)}},{key:"scan",value:function(t){return this.checkAlive(),this.inst.ImageScanner_scan(this.ptr,t.getPointer())}}],[{key:"create",value:function(){var t=o(n.mark((function t(){var e,r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getInstance();case 2:return e=t.sent,r=e.ImageScanner_create(),t.abrupt("return",new this(r,e));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),r}(s.CppObject);e.ImageScanner=p},function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(8),e),o(r(11),e),o(r(25),e),o(r(7),e)},,,function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new w(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=g(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=c(t,e,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var l={};l[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(B([])));v&&v!==e&&r.call(v,o)&&(l=v);var d=p.prototype=f.prototype=Object.create(l);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var s=c(t[o],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function B(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=d.constructor=p,p.constructor=h,p[a]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},m(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(d),d[a]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=B,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:B(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,r){var n=r(20),o=r(21);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZBarConfigType=e.ZBarSymbolType=void 0,function(t){t[t.ZBAR_NONE=0]="ZBAR_NONE",t[t.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",t[t.ZBAR_EAN8=8]="ZBAR_EAN8",t[t.ZBAR_UPCE=9]="ZBAR_UPCE",t[t.ZBAR_ISBN10=10]="ZBAR_ISBN10",t[t.ZBAR_UPCA=12]="ZBAR_UPCA",t[t.ZBAR_EAN13=13]="ZBAR_EAN13",t[t.ZBAR_ISBN13=14]="ZBAR_ISBN13",t[t.ZBAR_I25=25]="ZBAR_I25",t[t.ZBAR_CODE39=39]="ZBAR_CODE39",t[t.ZBAR_PDF417=57]="ZBAR_PDF417",t[t.ZBAR_QRCODE=64]="ZBAR_QRCODE",t[t.ZBAR_CODE128=128]="ZBAR_CODE128",t[t.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",t[t.ZBAR_ADDON2=512]="ZBAR_ADDON2",t[t.ZBAR_ADDON5=1280]="ZBAR_ADDON5",t[t.ZBAR_ADDON=1792]="ZBAR_ADDON"}(e.ZBarSymbolType||(e.ZBarSymbolType={})),function(t){t[t.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",t[t.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",t[t.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",t[t.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",t[t.ZBAR_CFG_NUM=4]="ZBAR_CFG_NUM",t[t.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",t[t.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",t[t.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",t[t.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",t[t.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",t[t.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY"}(e.ZBarConfigType||(e.ZBarConfigType={}))},function(t,e,r){"use strict";var n=r(0),o=r(1),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadWasmInstance=void 0;var a=i(r(24));e.loadWasmInstance=function(){var t=o(n.mark((function t(e){var r,o,i;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a.default);case 2:if((r=t.sent).ok){t.next=6;break}return console.error("Failed to load wasm binary file at "+a.default),t.abrupt("return",null);case 6:return t.next=8,r.arrayBuffer();case 8:return o=t.sent,t.next=11,WebAssembly.instantiate(o,e);case 11:return i=t.sent,t.abrupt("return",i.instance);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},function(t,e,r){t.exports=r.p+"static/media/zbar.wasm.b946c8e6.bin"},function(t,e,r){"use strict";var n=r(0),o=r(1);Object.defineProperty(e,"__esModule",{value:!0}),e.scanImageData=e.scanRGBABuffer=e.scanGrayBuffer=e.getDefaultScanner=void 0;var i=r(8),a=r(11).ImageScanner.create();e.getDefaultScanner=o(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));var u=function(){var t=o(n.mark((function t(e,r){var o;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==r){t.next=4;break}return t.next=3,a;case 3:r=t.sent;case 4:if(!((o=r.scan(e))<0)){t.next=7;break}throw Error("Scan Failed");case 7:if(0!==o){t.next=9;break}return t.abrupt("return",[]);case 9:return t.abrupt("return",e.getSymbols());case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();e.scanGrayBuffer=function(){var t=o(n.mark((function t(e,r,o,a){var c,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Image.createFromGrayBuffer(r,o,e);case 2:return c=t.sent,t.next=5,u(c,a);case 5:return s=t.sent,c.destroy(),t.abrupt("return",s);case 8:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),e.scanRGBABuffer=function(){var t=o(n.mark((function t(e,r,o,a){var c,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Image.createFromRGBABuffer(r,o,e);case 2:return c=t.sent,t.next=5,u(c,a);case 5:return s=t.sent,c.destroy(),t.abrupt("return",s);case 8:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),e.scanImageData=function(){var t=o(n.mark((function t(r,o){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.scanRGBABuffer(r.data.buffer,r.width,r.height,o);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}]]);
//# sourceMappingURL=2.cd0942d1.chunk.js.map