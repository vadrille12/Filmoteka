!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.dd23045c.js","DKcCc":"photo.e4714d22.jpg","7mVsD":"index.f2c2cfa9.css"}'));var a={};function s(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,c,"next",t)}function c(t){s(i,r,o,a,c,"throw",t)}a(void 0)}))}};var c={},u=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return B()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function m(){}function g(){}function _(){}var y={};c(y,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(M([])));x&&x!==n&&r.call(x,i)&&(y=x);var w=_.prototype=m.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:B}}function B(){return{value:e,done:!0}}return g.prototype=_,c(w,"constructor",_),c(_,"constructor",g),g.displayName=c(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(L.prototype),c(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(c);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var l,f="8b20680c766bc5c37143e5d6b7aa7894",p="https://api.themoviedb.org/3",d="".concat(p,"/trending/movie/week"),h="".concat(p,"/search/movie"),v="".concat(p,"/movie"),m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var g,_=(l={form:document.querySelector(".header-form"),watchedBtn:document.querySelector(".watched-list-btn"),paginationEl:document.getElementById("tui-pagination-container"),moviesGallery:document.querySelector(".cards__list"),moviesEl:document.querySelector(".cards__list"),formFilm:document.querySelector(".header-form"),cardsList:document.querySelector(".cards__list"),backdrop:document.querySelector(".backdrop"),closeBtn:document.querySelector(".btn-modal-close"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal__content"),wrapperForBtns:document.querySelector(".modal-movie-btn")},e(m)(l,"watchedBtn",document.querySelector(".btn-modal__watched")),e(m)(l,"queueBtn",document.querySelector(".btn-modal__queue")),l),y={};function b(t,n){var r=n<5?n:5,o={totalItems:t,itemsPerPage:20,visiblePages:r,centerAlign:!0},i=new(e(y))(_.paginationEl,o);return _.paginationEl.style.display=r<=1?"none":"block",i}window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
g=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,o,i,a=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(r in n=arguments[o])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),o=n(17),i=n(6);t.exports=function(t,e,n){r(t)?o(t,e,n):i(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var o,i;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var r=n(29),o=n(30),i=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):r(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),o=n(7),i=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=i({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=r>1,e.nextMore=r<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,o=this._getLastPage(),i=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(i/2),(n=(e=Math.max(t-r,1))+i-1)>o&&(e=Math.max(o-i+1,1),n=o)):(e=(a-1)*i+1,n=a*i,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),o=n(14),i=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;i(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),r.off(t,o,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var o=t===r.handler,i=e===r.context,a=o&&i;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(t,e){var n=this,r=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):i(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(o=e[r]).handler.apply(o.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),o=n(15);t.exports=function(t){return!r(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,o=t.length;for(n=n||null;r<o&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),o=n(7),i=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),f=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],v=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(v,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,o=t.rightPageNumber;for(n=r;n<=o;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,o=i(e);s(e),(r=this._getButtonType(o))||(n=this._getPageNumber(o)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),o=n(3),i=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=i(t,e),s=!1;o(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,i){r(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,i)})):o(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,o=t[r];return o||(o=t[r]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),o=n(8),i=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?r(n,(function(e){t.classList.add(e)})):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){o(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),o=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),o=n(3),i=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,h=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],i=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?i+=1:"/if"===t?i-=1:i||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,o)),a=o+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),i=!1,a="";return o(r.exps,(function(t,e){return(i=b(t,n))&&(a=x(r.sourcesInsideIf[e],n)),!i})),a},each:function(t,e,n){var r=b(t,n),a=i(r)?"@index":"@key",c={},u="";return o(r,(function(t,r){c[a]=r,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var o=r("as",t),i=t[o+1],a=b(t.slice(0,o),n),c={};return c[i]=a,x(e,s(n,c))||""}},g=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,o=[],i=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,o.push(t.slice(i,r)),i=r+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};function _(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(h,""):u.test(t)?r=_((n=t.split(l))[0],e)[_(n[1],e)]:f.test(t)?r=_((n=t.split(p))[0],e)[n[1]]:v.test(t)&&(r=parseFloat(t)),r}function y(t,e,n){for(var r,o,i,s,c=m[t],u=1,l=2,f=e[l];u&&a(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,r=l),f=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,i=r,(s=e.splice(o+1,i-o)).pop(),s),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return o(e,(function(t){r.push(_(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function x(t,e){for(var n,r,o,i=1,s=t[i];a(s);)r=(n=s.split(" "))[0],m[r]?(o=y(r,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=b(n,e),s=t[i+=2];return t.join("")}t.exports=function(t,e){return x(g(t,c),e)}},function(t,e,n){"use strict";var r=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(i);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return r(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},y=g();var x;x=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("DKcCc");var w=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},E=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}};function L(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".cards__list");function P(){return k.apply(this,arguments)}function k(){return k=e(a)(e(c).mark((function t(){var n,r,o=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,t.prev=1,t.next=4,M(n);case 4:S((r=t.sent).results),E("search-storage",r),b(r.total_results,r.total_pages).on("afterMove",(function(t){M(t.page).then((function(t){S(t.results),E("search-storage",t),L()}))})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),k.apply(this,arguments)}function C(t){return t.map((function(t){return localStorage.getItem(t)})).join(", ")}function S(t){var n="",r="",o=t.map((function(t){var o=t.poster_path,i=t.title,a=t.genre_ids,s=t.release_date,c=void 0===s?"":s,u=t.vote_average,l=void 0===u?"":u,f=t.id;return a.length>3&&(a.splice(3,a.length-3),n=C(a),n+=", other"),(n=C(a)).length>24&&(a.pop(),n=C(a),n+=", other"),0===a.length&&(n="genre is unknown"),""===(r=c.slice(0,4))&&(r="release date unknown"),o?'<li id="'.concat(f,'" class="movie__card">\n        <img\n          src="').concat("https://image.tmdb.org/t/p/w500/").concat(o,'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(i,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(r,'</h3>\n          <div class="movie__average">').concat(l.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>"):'<li  id="'.concat(f,'" class="movie__card">\n        <img width="100%"\n          src="').concat(e(x),'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(i,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(r,'</h3>\n          <div class="movie__average">').concat(l.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>")})).join("");_.moviesGallery.innerHTML=o}function M(){return B.apply(this,arguments)}function B(){return B=e(a)(e(c).mark((function t(){var n,r,o,i,a=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,r={headers:{"Content-Type":"application/json;charset=utf-8"}},t.next=5,fetch("".concat(d,"?api_key=").concat(f,"&page=").concat(n),r);case 5:return o=t.sent,t.next=8,o.json();case 8:return i=t.sent,E("trending-movies",i),t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(1),console.error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[1,13]])}))),B.apply(this,arguments)}function I(t){return N.apply(this,arguments)}function N(){return(N=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(v,"/").concat(n,"/videos?api_key=").concat(f,"&language=en-US"));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}P().then(console.log);var O={cardsList:document.querySelector(".cards__list"),backdrop:document.querySelector(".backdrop"),closeBtn:document.querySelector(".btn-modal-close"),modal:document.querySelector(".modal"),wrapperForBtns:document.querySelector(".modal-movie-btn"),watchedBtn:document.querySelector(".btn-modal__watched"),queueBtn:document.querySelector(".btn-modal__queue")};O.cardsList.addEventListener("click",(function(t){if("LI"!=t.target.parentNode.nodeName)return void console.log("not li");var n=Number(t.target.parentNode.id);function r(){return(r=e(a)(e(c).mark((function t(r){var o,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(){var t=document.querySelector(".modal-movie");t.insertAdjacentHTML("afterbegin",'<p class="trailer-search form__uncorrect-search is-hidden"></p>');var e=document.querySelector(".form__uncorrect-search");e.textContent="Sorry, but there is no trailer for this movie",setTimeout((function(){e.classList.toggle("is-hidden")}),1e3);setTimeout((function(){t.firstElementChild.remove()}),2e3)},t.prev=1,t.next=4,I(n);case 4:o=t.sent,console.log(o.results.length),o.results.length>0?window.open("https://www.youtube.com/watch?v=".concat(o.results[0].key),"_blank"):i(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.message;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}o=JSON.parse(localStorage.getItem("search-storage")).results.find((function(t){if(t.id===n)return t})),i=o.title,s=o.vote_average,u=o.vote_count,l=o.popularity,f=o.poster_path,p=o.original_title,d=o.genre_ids,h=o.overview,v=o.id,m=d.map((function(t){return localStorage.getItem(t)})),g="\n    <div class='modal-movie'>\n    <img\n          class='modal-movie__img'\n\n          ".concat(f?'\n    srcset="\n    https://image.tmdb.org/t/p/w300/'.concat(f,"      300w,\n    https://image.tmdb.org/t/p/w500/").concat(f,"      500w,\n    https://image.tmdb.org/t/p/w780/").concat(f,"      780w,\n    https://image.tmdb.org/t/p/w1280/").concat(f,"    1280w,\n    https://image.tmdb.org/t/p/original/").concat(f,' 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/').concat(f,'"\n  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"\n\n  '):'src="'.concat(e(x),'"\n  '),"\n        />\n        <button type=\"button\" class=\"btn__open-trailer js-open-trailer\"></button>\n    </div>\n    <div class='modal__content'>\n        <h2 class='modal__title'>").concat(i,"</h2>\n          <table class='modal-info'>\n            <tr>").concat(u?"<td class='modal-info__title'>Vote / Votes</td>":"","\n              ").concat(u?"<td class='modal-info__value'>\n                <span class='modal-info__rate'>".concat(s.toFixed(1),"</span>\n                /\n                <span class='modal-info__rate'>").concat(u,"</span>\n              </td>"):"","\n            \n            </tr>\n            <tr>\n              ").concat(l?"<td class='modal-info__title'>Popularity</td>":"","\n              ").concat(l?"<td class='modal-info__value'>".concat(l.toFixed(1),"</td>"):"","\n            </tr>\n            <tr>\n              ").concat(p?"<td class='modal-info__title'>Original Title</td>":"","\n              ").concat(p?"<td class='modal-info__value'>".concat(p,"</td>"):"","\n            </tr>\n            <tr>\n              ").concat(m.join(", ")?"<td class='modal-info__title'>Genre</td>":"","\n              ").concat(m.join(", ")?"<td class='modal-movie-info__value'>".concat(m.join(", "),"</td>"):"","\n            </tr>\n          </table>\n\n          <div class='modal-about'>\n            ").concat(h?"<h3 class='modal-about__title'>About</h3>":"","\n            ").concat(h?"<p class='modal-about__desc'>".concat(h,"</p>"):"","\n          </div>\n    \n    </div>\n        "),O.watchedBtn.addEventListener("click",F),O.modal.setAttribute("data-id",v),O.modal.insertAdjacentHTML("afterbegin",g),O.backdrop.classList.remove("is-hidden"),O.closeBtn.addEventListener("click",q),O.backdrop.addEventListener("click",q),window.addEventListener("keydown",A),console.log(O.watchedBtn),O.watchedBtn.addEventListener("click",F),document.body.style.overflow="hidden",document.querySelector(".js-open-trailer").addEventListener("click",(function(t){return r.apply(this,arguments)}));var o,i,s,u,l,f,p,d,h,v,m,g})),O.watchedBtn.addEventListener("click",F),console.log(O.modalContent);var j=[],T="watched-movies";function q(t){"btn-modal-close"!==t.target.classList.value&&t.target!==t.currentTarget||(O.backdrop.classList.add("is-hidden"),document.body.style.overflow="",window.removeEventListener("keydown",A))}function A(t){console.log(t.code),"Escape"===t.code&&(O.backdrop.classList.add("is-hidden"),document.body.style.overflow="",window.removeEventListener("keydown",A))}function F(){var t=Number(O.modal.dataset.id);JSON.parse(localStorage.getItem("search-storage")).results.find((function(e){e.id===t&&((j=w(T)).push(e),console.log(j),E(T,j),console.log(e))}))}document.querySelector(".header-logo__link").addEventListener("click",(function(){P(H=1)})),_.form.addEventListener("submit",(function(t){return G.apply(this,arguments)}));var H=1,R="";function D(t,e){return V.apply(this,arguments)}function V(){return(V=e(a)(e(c).mark((function t(n,r){var o,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(h,"?api_key=").concat(f,"&page=").concat(r,"&include_adult=false&query=").concat(n));case 3:return o=t.sent,t.next=6,o.json();case 6:return i=t.sent,E("search-storage",i),t.abrupt("return",i);case 11:t.prev=11,t.t0=t.catch(0),console.error();case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function G(){return(G=e(a)(e(c).mark((function t(n){return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),H=1,R=n.currentTarget.elements.searchQuery.value.trim(),console.log(R),_.paginationEl.style.display="none",""!==R){t.next=9;break}return z("Search for movies is empty! Enter movie name, please",2e3),_.paginationEl.style.display="none",t.abrupt("return");case 9:return t.next=11,D(R,H).then((function(t){console.log(t);var e=t.total_results;console.log(e),e||z("Search result not successful. Enter the correct movie name and try again",2e3),e>=1&&(S(t.results),H+=1,b(e,t.total_pages).on("afterMove",(function(t){var e=t.page;D(R,e).then((function(t){S(t.results),E("search-storage",t),L()}))})))})).catch((function(t){return console.log(t)})).finally((function(){_.form.reset()}));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(t,e){_.form.insertAdjacentHTML("beforeend",'<p class="form__uncorrect-search is-hidden"></p>');var n=document.querySelector(".form__uncorrect-search");n.textContent="".concat(t),setTimeout((function(){n.classList.toggle("is-hidden")}),e),P(H);setTimeout((function(){_.form.lastElementChild.remove()}),2e3)}function U(){return(U=e(a)(e(c).mark((function t(){var n,r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p,"/genre/movie/list?api_key=").concat(f,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}(function(){return U.apply(this,arguments)})().then((function(t){t.genres.map((function(t){localStorage.setItem(JSON.stringify(t.id),t.name)}))}));var J=document.querySelector("#btn--to_top");document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){this.scrollY>100?J.classList.add("show"):J.classList.remove("show")}))})),window.addEventListener("load",(function(){document.querySelector(".toggler");var t,e=document.querySelector(".theme-btn"),n=document.documentElement,r=localStorage.getItem("user-theme");window.matchMedia&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){!r&&o()})),e&&e.addEventListener("click",(function(t){o(!0)}));function o(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=n.classList.contains("light")?"light":"dark";"light"===r?t="dark":"dark"===r&&(t="light"),n.classList.remove(r),n.classList.add(t),e&&localStorage.setItem("user-theme",t)}r?n.classList.add(r):n.classList.add(t)}));var $=document.querySelector(".watched-list-btn"),Z=document.querySelector(".queue-list-btn");$.addEventListener("click",(function(){$.classList.add("js-active"),Z.classList.remove("js-active")})),Z.addEventListener("click",(function(){Z.classList.add("js-active"),$.classList.remove("js-active")}))}();
//# sourceMappingURL=index.dd23045c.js.map
