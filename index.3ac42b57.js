function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},n.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var o,i;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var r={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},i=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.3ac42b57.js","8iIgb":"photo.e4714d22.jpg","7mVsD":"index.18c11555.css","4JSjo":"library.84f2772a.js"}'));const s={body:document.querySelector("body"),form:document.querySelector(".header-form"),watchedBtn:document.querySelector(".watched-list-btn"),paginationEl:document.getElementById("tui-pagination-container"),moviesGallery:document.querySelector(".cards__list"),moviesEl:document.querySelector(".cards__list"),formFilm:document.querySelector(".header-form"),cardsList:document.querySelector(".cards__list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),modalMovie:document.querySelector(".modal-movie"),modalContent:document.querySelector(".modal__content"),closeBtn:document.querySelector(".btn-modal__icon"),addWatchedBtn:document.querySelector(".btn-modal__watched"),addQueueBtn:document.querySelector(".btn-modal__queue"),modalText:document.querySelector(".modal__text")};var a,c={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */function l(t,n){const o=n<5?n:5,i={totalItems:t,itemsPerPage:20,visiblePages:o,centerAlign:!0},r=new(e(c))(s.paginationEl,i);return s.paginationEl.style.display=o<=1?"none":"block",r}window,a=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,o,i,r,s=Object.prototype.hasOwnProperty;for(i=1,r=arguments.length;i<r;i+=1)for(o in n=arguments[i])s.call(n,o)&&(t[o]=n[o]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var o=n(2),i=n(17),r=n(6);t.exports=function(t,e,n){o(t)?i(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var o;for(o in n=n||null,t)if(t.hasOwnProperty(o)&&!1===e.call(n,t[o],o,t))break}},function(t,e,n){var o=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&o(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){var o=n(2);t.exports=function(t,e,n){var i,r;if(n=n||0,!o(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,i=n;n>=0&&i<r;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){var o=n(29),i=n(30),r=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=r(t)?t(e):o(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,o=Array.prototype.slice;return t.bind?t.bind.apply(t,o.call(arguments,1)):(n=o.call(arguments,2),function(){return t.apply(e,n.length?n.concat(o.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var o=n(13),i=n(7),r=n(0),s=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(t,e){this._options=r({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,o="prev"===t;return this._options.centerAlign?o?e-1:e+n:o?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),o=this._getPageIndex(t),i=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=o>1,e.nextMore=o<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,o,i=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(o=Math.floor(r/2),(n=(e=Math.max(t-o,1))+r-1)>i&&(e=Math.max(i-r+1,1),n=i)):(e=(s-1)*r+1,n=s*r,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});o.mixin(u),t.exports=u},function(t,e,n){var o=n(0),i=n(14),r=n(4),s=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(t){o(t.prototype,d.prototype)},d.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},d.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},d.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},d.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},d.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},d.prototype._bindEvent=function(t,e,n){var o=this._safeEvent(t);this._memorizeContext(n),o.push(this._getHandlerItem(e,n))},d.prototype.on=function(t,e,n){var o=this;r(t)?(t=t.split(u),l(t,(function(t){o._bindEvent(t,e,n)}))):s(t)&&(n=e,l(t,(function(t,e){o.on(e,t,n)})))},d.prototype.once=function(t,e,n){var o=this;if(s(t))return n=e,void l(t,(function(t,e){o.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),o.off(t,i,n)}),n)},d.prototype._spliceMatches=function(t,e){var n,o=0;if(a(t))for(n=t.length;o<n;o+=1)!0===e(t[o])&&(t.splice(o,1),n-=1,o-=1)},d.prototype._matchHandler=function(t){var e=this;return function(n){var o=t===n.handler;return o&&e._forgetContext(n.context),o}},d.prototype._matchContext=function(t){var e=this;return function(n){var o=t===n.context;return o&&e._forgetContext(n.context),o}},d.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(o){var i=t===o.handler,r=e===o.context,s=i&&r;return s&&n._forgetContext(o.context),s}},d.prototype._offByEventName=function(t,e){var n=this,o=c(e),i=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);o?n._spliceMatches(e,i):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},d.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},d.prototype._offByObject=function(t,e){var n,o=this;this._indexOfContext(t)<0?l(t,(function(t,e){o.off(e,t)})):r(e)?(n=this._matchContext(t),o._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){o._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){o._spliceMatches(t,n)})))},d.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},d.prototype.fire=function(t){this.invoke.apply(this,arguments)},d.prototype.invoke=function(t){var e,n,o,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),o=0;e[o];){if(!1===(i=e[o]).handler.apply(i.context,n))return!1;o+=1}return!0},d.prototype.hasListener=function(t){return this.getListenerLength(t)>0},d.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=d},function(t,e,n){var o=n(1),i=n(15);t.exports=function(t){return!o(t)&&!i(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var o=0,i=t.length;for(n=n||null;o<i&&!1!==e.call(n,t[o],o,t);o+=1);}},function(t,e,n){var o=n(19);t.exports=function(t,e){var n=o(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var o=n(3),i=n(7),r=n(21),s=n(22),a=n(24),c=n(25),l=n(0),u=n(4),d=n(28),p=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!d(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){o(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){o(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){o(m,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,o=t.leftPageNumber,i=t.rightPageNumber;for(n=o;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==o||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,o,i=r(e);a(e),(o=this._getButtonType(i))||(n=this._getPageNumber(i)),t(o,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return o(n,(function(n,o){return!p.isContained(t,n)||(e=o,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,o=this._enabledPageElements.length;n<o;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],o(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var o=n(4),i=n(3),r=n(23);function s(t,e,n,o){function s(e){n.call(o||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,o){var s=r(t,e),a=!1;i(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:o})}(t,e,n,s)}t.exports=function(t,e,n,r){o(e)?i(e.split(/\s+/g),(function(e){s(t,e,n,r)})):i(e,(function(e,o){s(t,o,e,n)}))}},function(t,e,n){var o="_feEventKey";t.exports=function(t,e){var n,i=t[o];return i||(i=t[o]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var o=n(3),i=n(8),r=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?o(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),o(n,(function(t){i(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){var o=n(1);t.exports=function(t){return t&&t.className?o(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var o=n(2),i=n(1);t.exports=function(t,e){e=(e=o(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var o=n(8),i=n(3),r=n(2),s=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,f=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var o=function(t,e){var n=[t],o=[],r=0,s=0;return i(e,(function(t,i){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),o.push(e.slice(s,i)),s=i+1)})),o.push(e.slice(s)),{exps:n,sourcesInsideIf:o}}(t,e),r=!1,s="";return i(o.exps,(function(t,e){return(r=b(t,n))&&(s=x(o.sourcesInsideIf[e],n)),!r})),s},each:function(t,e,n){var o=b(t,n),s=r(o)?"@index":"@key",c={},l="";return i(o,(function(t,o){c[s]=o,c["@this"]=t,a(n,c),l+=x(e.slice(),n)})),l},with:function(t,e,n){var i=o("as",t),r=t[i+1],s=b(t.slice(0,i),n),c={};return c[r]=s,x(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,o,i=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)o=n.index,i.push(t.slice(r,o)),r=o+n[0].length,n=e.exec(t);return i.push(t.slice(r)),i};function _(t,e){var n,o=e[t];return"true"===t?o=!0:"false"===t?o=!1:f.test(t)?o=t.replace(h,""):l.test(t)?o=_((n=t.split(u))[0],e)[_(n[1],e)]:d.test(t)?o=_((n=t.split(p))[0],e)[n[1]]:m.test(t)&&(o=parseFloat(t)),o}function y(t,e,n){for(var o,i,r,a,c=g[t],l=1,u=2,d=e[u];l&&s(d);)0===d.indexOf(t)?l+=1:0===d.indexOf("/"+t)&&(l-=1,o=u),d=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,r=o,(a=e.splice(i+1,r-i)).pop(),a),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var o=[];return i(e,(function(t){o.push(_(t,n))})),t.apply(null,o)}(n,t.slice(1),e):n}function x(t,e){for(var n,o,i,r=1,a=t[r];s(a);)o=(n=a.split(" "))[0],g[o]?(i=y(o,t.splice(r,t.length-r),e),t=t.concat(i)):t[r]=b(n,e),a=t[r+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){var o=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(r);(o(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var o=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return o(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},c=a();var u;u=new URL(r("kyEFX").resolve("8iIgb"),import.meta.url).toString();const d=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},p=(t,e)=>{try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}};function f(){window.scrollTo({top:0,behavior:"smooth"})}let h=[],m=[];function g(t){const n=Number(t.currentTarget.id);console.log(n);!function({title:t,vote_average:n,vote_count:o,popularity:i,poster_path:r,original_title:a,genre_ids:c,overview:l,id:d}){const p=c.map((t=>localStorage.getItem(t))),f=`  <img\n          class='modal-movie__img'\n\n          ${r?`\n    srcset="\n    https://image.tmdb.org/t/p/w300/${r}      300w,\n    https://image.tmdb.org/t/p/w500/${r}      500w,\n    https://image.tmdb.org/t/p/w780/${r}      780w,\n    https://image.tmdb.org/t/p/w1280/${r}    1280w,\n    https://image.tmdb.org/t/p/original/${r} 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/${r}"\n  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"\n\n  `:`src="${e(u)}"\n  `}\n        />\n        <button type="button" class="btn__open-trailer js-open-trailer"></button>`,h=`\n        <h2 class='modal__title'>${t}</h2>\n          <table class='modal-info'>\n            <tr>${o?"<td class='modal-info__title'>Vote / Votes</td>":""}\n              ${o?`<td class='modal-info__value'>\n                <span class='modal-info__rate'>${n.toFixed(1)}</span>\n                /\n                <span class='modal-info__rate'>${o}</span>\n              </td>`:""}\n            \n            </tr>\n            <tr>\n              ${i?"<td class='modal-info__title'>Popularity</td>":""}\n              ${i?`<td class='modal-info__value'>${i.toFixed(1)}</td>`:""}\n            </tr>\n            <tr>\n              ${a?"<td class='modal-info__title'>Original Title</td>":""}\n              ${a?`<td class='modal-info__value'>${a}</td>`:""}\n            </tr>\n            <tr>\n              ${p.join(", ")?"<td class='modal-info__title'>Genre</td>":""}\n              ${p.join(", ")?`<td class='modal-movie-info__value'>${p.join(", ")}</td>`:""}\n            </tr>\n          </table>\n          <div class='modal-about'>\n            ${l?"<h3 class='modal-about__title'>About</h3>":""}\n            ${l?`<p class='modal-about__desc'>${l}</p>`:""}\n          </div>`;s.modal.setAttribute("data-id",d),s.modalMovie.insertAdjacentHTML("afterbegin",f),s.modalText.insertAdjacentHTML("afterbegin",h)}(JSON.parse(localStorage.getItem("search-storage")).results.find((t=>{if(t.id===n)return t}))),h=d("watched-movies"),m=d("queue-movies"),s.backdrop.classList.remove("is-hidden"),s.closeBtn.addEventListener("click",v),s.backdrop.addEventListener("click",v),window.addEventListener("keydown",_),s.addWatchedBtn.addEventListener("click",y),s.addQueueBtn.addEventListener("click",b);h.some((t=>t.id===n))?(s.addWatchedBtn.textContent="remove from watched",s.addWatchedBtn.classList.add("active-watched")):(s.addWatchedBtn.textContent="add to watched",s.addWatchedBtn.classList.remove("active-watched"));m.some((t=>t.id===n))?(s.addQueueBtn.textContent="remove from queue",s.addQueueBtn.classList.add("active-queue")):(s.addQueueBtn.textContent="add to queue",s.addQueueBtn.classList.remove("active-queue")),document.body.style.overflowY="scroll",s.body.classList.add("body-lock");document.querySelector(".js-open-trailer").addEventListener("click",(async function(t){try{const t=await L(n);if(console.log(t.results.length),t.results.length>0)window.open(`https://www.youtube.com/watch?v=${t.results[0].key}`,"_blank");else{!function(){const t=document.querySelector(".modal-movie");t.insertAdjacentHTML("afterbegin",'<p class="trailer-search form__uncorrect-search is-hidden"></p>');const e=document.querySelector(".form__uncorrect-search");e.textContent="Sorry, but there is no trailer for this movie",setTimeout((()=>{e.classList.toggle("is-hidden")}),1e3),setTimeout((()=>{t.firstElementChild.remove()}),2e3)}()}}catch(t){t.message}}))}function v(t){"btn-modal-close"!==t.target.classList.value&&t.target!==t.currentTarget||(s.backdrop.classList.add("is-hidden"),document.body.style.overflow="",s.closeBtn.removeEventListener("click",v),s.backdrop.removeEventListener("click",v),s.addWatchedBtn.removeEventListener("click",y),s.addQueueBtn.removeEventListener("click",b),window.removeEventListener("keydown",_),s.modalMovie.innerHTML="",s.modalText.innerHTML="")}function _(t){console.log(t.code),"Escape"===t.code&&(s.backdrop.classList.add("is-hidden"),document.body.style.overflow="",s.closeBtn.removeEventListener("click",v),s.backdrop.removeEventListener("click",v),window.removeEventListener("keydown",_),s.addWatchedBtn.removeEventListener("click",y),s.addQueueBtn.removeEventListener("click",b),s.modalMovie.innerHTML="",s.modalText.innerHTML="")}function y(t){const e=document.querySelector(".active-watched");t.target.classList.toggle("active-watched");const n=Number(s.modal.dataset.id),o=JSON.parse(localStorage.getItem("search-storage")).results;if(h=d("watched-movies"),e){const e=h.filter((t=>t.id!=n));p("watched-movies",e),t.target.textContent="add to watched"}e||(o.find((t=>{t.id===n&&(h.push(t),console.log(h),p("watched-movies",h),console.log(t))})),t.target.textContent="remove from watched")}function b(t){const e=document.querySelector(".active-queue");t.target.classList.toggle("active-queue");const n=Number(s.modal.dataset.id),o=JSON.parse(localStorage.getItem("search-storage")).results;if(m=d("queue-movies"),e){const e=m.filter((t=>t.id!=n));p("queue-movies",e),t.target.textContent="add to queue"}e||(o.find((t=>{t.id===n&&(m.push(t),console.log(m),p("queue-movies",m),console.log(t))})),t.target.textContent="remove from queue")}d("watched-movies")||p("watched-movies",h),d("queue-movies")||p("queue-movies",m);document.querySelector(".cards__list");async function x(t=1){try{const e=await P(t);E(e.results),p("search-storage",e),l(e.total_results,e.total_pages).on("afterMove",(({page:t})=>{P(t).then((t=>{E(t.results),p("search-storage",t),f()}))}))}catch(t){console.error(t.message)}}function w(t){return t.map((t=>localStorage.getItem(t))).join(", ")}function E(t){let n="",o="";setTimeout((()=>{s.cardsList.childNodes.forEach((t=>{t.addEventListener("click",g)}))}),200);const i=t.map((({poster_path:t,title:i,genre_ids:r,release_date:s="",vote_average:a="",id:c})=>(r.length>3&&(r.splice(3,r.length-3),n=w(r),n+=", other"),n=w(r),n.length>24&&(r.pop(),n=w(r),n+=", other"),0===r.length&&(n="genre is unknown"),o=s.slice(0,4),""===o&&(o="release date unknown"),t?`<li id="${c}" class="movie__card">\n        <img\n          src="https://image.tmdb.org/t/p/w500/${t}"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">${i}</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">${n}</h3>\n          <h3 class="movie__year">${o}</h3>\n          <div class="movie__average">${a.toFixed(1)}</div>\n        </div>\n      </div>\n      </li>`:`<li  id="${c}" class="movie__card">\n        <img width="100%"\n          src="${e(u)}"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">${i}</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">${n}</h3>\n          <h3 class="movie__year">${o}</h3>\n          <div class="movie__average">${a.toFixed(1)}</div>\n        </div>\n      </div>\n      </li>`))).join("");s.moviesGallery.innerHTML=i}async function P(t=1){try{const e={headers:{"Content-Type":"application/json;charset=utf-8"}},n=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8b20680c766bc5c37143e5d6b7aa7894&page=${t}`,e),o=await n.json();return p("trending-movies",o),o}catch(t){console.error(t.message)}}async function L(t){try{const e=await fetch(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=8b20680c766bc5c37143e5d6b7aa7894&language=en-US`);return await e.json()}catch(t){console.log(t.message)}}x().then(console.log);document.querySelector(".header-logo__link").addEventListener("click",(function(){C=1,x(C)})),s.form.addEventListener("submit",(async function(t){if(t.preventDefault(),C=1,M=t.currentTarget.elements.searchQuery.value.trim(),console.log(M),s.paginationEl.style.display="none",""===M)return k("Search for movies is empty! Enter movie name, please",2e3),void(s.paginationEl.style.display="none");await S(M,C).then((t=>{console.log(t);const e=t.total_results;console.log(e),e||k("Search result not successful. Enter the correct movie name and try again",2e3),e>=1&&(E(t.results),C+=1,l(e,t.total_pages).on("afterMove",(({page:t})=>{S(M,t).then((t=>{E(t.results),p("search-storage",t),f()}))})))})).catch((t=>console.log(t))).finally((()=>{s.form.reset()}))}));let C=1,M="";async function S(t,e){try{const n=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b20680c766bc5c37143e5d6b7aa7894&page=${e}&include_adult=false&query=${t}`),o=await n.json();return p("search-storage",o),o}catch(t){console.error()}}function k(t,e){s.form.insertAdjacentHTML("beforeend",'<p class="form__uncorrect-search is-hidden"></p>');const n=document.querySelector(".form__uncorrect-search");n.textContent=`${t}`,setTimeout((()=>{n.classList.toggle("is-hidden")}),e),x(C);setTimeout((()=>{s.form.lastElementChild.remove()}),2e3)}(async function(){try{const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8b20680c766bc5c37143e5d6b7aa7894&language=en-US");return await t.json()}catch(t){console.log(t.message)}})().then((t=>{t.genres.map((t=>{localStorage.setItem(JSON.stringify(t.id),t.name)}))}));const B=document.querySelector("#btn--to_top");document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){this.scrollY>100?B.classList.add("show"):B.classList.remove("show")}))})),window.addEventListener("load",(function(){document.querySelector(".toggler");const t=document.querySelector(".theme-btn"),e=document.documentElement,n=localStorage.getItem("user-theme");let o;window.matchMedia&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{!n&&i()})),t&&t.addEventListener("click",(function(t){i(!0)}));function i(t=!1){let n,o=e.classList.contains("light")?"light":"dark";"light"===o?n="dark":"dark"===o&&(n="light"),e.classList.remove(o),e.classList.add(n),t&&localStorage.setItem("user-theme",n)}n?e.classList.add(n):e.classList.add(o)})),r("gjiCh");
//# sourceMappingURL=index.3ac42b57.js.map