function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.58c77fe6.js","8iIgb":"photo.e4714d22.jpg","7mVsD":"index.dea41423.css"}'));const a={body:document.querySelector("body"),form:document.querySelector(".header-form"),watchedBtn:document.querySelector(".watched-list-btn"),paginationEl:document.getElementById("tui-pagination-container"),moviesGallery:document.querySelector(".cards__list"),moviesEl:document.querySelector(".cards__list"),formFilm:document.querySelector(".header-form"),cardsList:document.querySelector(".cards__list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),modalMovie:document.querySelector(".modal-movie"),modalContent:document.querySelector(".modal__content"),closeBtn:document.querySelector(".btn-modal__icon"),addWatchedBtn:document.querySelector(".btn-modal__watched"),addQueueBtn:document.querySelector(".btn-modal__queue"),modalText:document.querySelector(".modal__text")};var r,c={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */function l(e,n){const o=n<5?n:5,i={totalItems:e,itemsPerPage:20,visiblePages:o,centerAlign:!0},s=new(t(c))(a.paginationEl,i);return a.paginationEl.style.display=o<=1?"none":"block",s}window,r=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,o,i,s,a=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(o in n=arguments[i])a.call(n,o)&&(e[o]=n[o]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var o=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){o(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var o;for(o in n=n||null,e)if(e.hasOwnProperty(o)&&!1===t.call(n,e[o],o,e))break}},function(e,t,n){var o=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&o(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var o=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!o(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var o=n(29),i=n(30),s=n(5),a={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):o(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,o=Array.prototype.slice;return e.bind?e.bind.apply(e,o.call(arguments,1)):(n=o.call(arguments,2),function(){return e.apply(t,n.length?n.concat(o.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=a},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var o=n(13),i=n(7),s=n(0),a=n(1),r=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(e,t){this._options=s({},l,t),this._currentPage=0,this._view=new r(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,o="prev"===e;return this._options.centerAlign?o?t-1:t+n:o?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),o=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=o>1,t.nextMore=o<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,o,i=this._getLastPage(),s=this._options.visiblePages,a=this._getPageIndex(e);return this._options.centerAlign?(o=Math.floor(s/2),(n=(t=Math.max(e-o,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(a-1)*s+1,n=a*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){a(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});o.mixin(u),e.exports=u},function(e,t,n){var o=n(0),i=n(14),s=n(4),a=n(16),r=n(2),c=n(5),l=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){o(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var o=this._safeEvent(e);this._memorizeContext(n),o.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var o=this;s(e)?(e=e.split(u),l(e,(function(e){o._bindEvent(e,t,n)}))):a(e)&&(n=t,l(e,(function(e,t){o.on(t,e,n)})))},d.prototype.once=function(e,t,n){var o=this;if(a(e))return n=t,void l(e,(function(e,t){o.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),o.off(e,i,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,o=0;if(r(e))for(n=e.length;o<n;o+=1)!0===t(e[o])&&(e.splice(o,1),n-=1,o-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var o=e===n.handler;return o&&t._forgetContext(n.context),o}},d.prototype._matchContext=function(e){var t=this;return function(n){var o=e===n.context;return o&&t._forgetContext(n.context),o}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(o){var i=e===o.handler,s=t===o.context,a=i&&s;return a&&n._forgetContext(o.context),a}},d.prototype._offByEventName=function(e,t){var n=this,o=c(t),i=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);o?n._spliceMatches(t,i):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,o=this;this._indexOfContext(e)<0?l(e,(function(e,t){o.off(t,e)})):s(t)?(n=this._matchContext(e),o._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){o._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){o._spliceMatches(e,n)})))},d.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):a(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,o,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),o=0;t[o];){if(!1===(i=t[o]).handler.apply(i.context,n))return!1;o+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){var o=n(1),i=n(15);e.exports=function(e){return!o(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var o=0,i=e.length;for(n=n||null;o<i&&!1!==t.call(n,e[o],o,e);o+=1);}},function(e,t,n){var o=n(19);e.exports=function(e,t){var n=o(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var o=n(3),i=n(7),s=n(21),a=n(22),r=n(24),c=n(25),l=n(0),u=n(4),d=n(28),p=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){o(h,(function(e){this._buttons[e]=p.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){o(h,(function(e){var t="disabled"+p.capitalizeFirstLetter(e);this._buttons[t]=p.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){o(m,(function(e){var t=e+"More";this._buttons[t]=p.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,o=e.leftPageNumber,i=e.rightPageNumber;for(n=o;n<=i;n+=1)n===e.page?t=p.createElementByTemplate(this._template.currentPage,{page:n}):(t=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==o||e.prevMore||c(t,this._firstItemClassName),n!==i||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();a(t,"click",(function(t){var n,o,i=s(t);r(t),(o=this._getButtonType(i))||(n=this._getPageNumber(i)),e(o,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return o(n,(function(n,o){return!p.isContained(e,n)||(t=o,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,o=this._enabledPageElements.length;n<o;n+=1)if(t=this._enabledPageElements[n],p.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],o(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var o=n(4),i=n(3),s=n(23);function a(e,t,n,o){function a(t){n.call(o||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,a):"attachEvent"in e&&e.attachEvent("on"+t,a),function(e,t,n,o){var a=s(e,t),r=!1;i(a,(function(e){return e.handler!==n||(r=!0,!1)})),r||a.push({handler:n,wrappedHandler:o})}(e,t,n,a)}e.exports=function(e,t,n,s){o(t)?i(t.split(/\s+/g),(function(t){a(e,t,n,s)})):i(t,(function(t,o){a(e,o,t,n)}))}},function(e,t,n){var o="_feEventKey";e.exports=function(e,t){var n,i=e[o];return i||(i=e[o]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var o=n(3),i=n(8),s=n(26),a=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),r=e.classList,c=[];r?o(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),o(n,(function(e){i(e,c)<0&&c.push(e)})),a(e,c))}},function(e,t,n){var o=n(1);e.exports=function(e){return e&&e.className?o(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var o=n(2),i=n(1);e.exports=function(e,t){t=(t=o(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var o=n(8),i=n(3),s=n(2),a=n(4),r=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,f=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var o=function(e,t){var n=[e],o=[],s=0,a=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),o.push(t.slice(a,i)),a=i+1)})),o.push(t.slice(a)),{exps:n,sourcesInsideIf:o}}(e,t),s=!1,a="";return i(o.exps,(function(e,t){return(s=b(e,n))&&(a=x(o.sourcesInsideIf[t],n)),!s})),a},each:function(e,t,n){var o=b(e,n),a=s(o)?"@index":"@key",c={},l="";return i(o,(function(e,o){c[a]=o,c["@this"]=e,r(n,c),l+=x(t.slice(),n)})),l},with:function(e,t,n){var i=o("as",e),s=e[i+1],a=b(e.slice(0,i),n),c={};return c[s]=a,x(t,r(n,c))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,o,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)o=n.index,i.push(e.slice(s,o)),s=o+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function _(e,t){var n,o=t[e];return"true"===e?o=!0:"false"===e?o=!1:f.test(e)?o=e.replace(h,""):l.test(e)?o=_((n=e.split(u))[0],t)[_(n[1],t)]:d.test(e)?o=_((n=e.split(p))[0],t)[n[1]]:m.test(e)&&(o=parseFloat(e)),o}function y(e,t,n){for(var o,i,s,r,c=g[e],l=1,u=2,d=t[u];l&&a(d);)0===d.indexOf(e)?l+=1:0===d.indexOf("/"+e)&&(l-=1,o=u),d=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(i=0,s=o,(r=t.splice(i+1,s-i)).pop(),r),n),t}function b(e,t){var n=_(e[0],t);return n instanceof Function?function(e,t,n){var o=[];return i(t,(function(e){o.push(_(e,n))})),e.apply(null,o)}(n,e.slice(1),t):n}function x(e,t){for(var n,o,i,s=1,r=e[s];a(r);)o=(n=r.split(" "))[0],g[o]?(i=y(o,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=b(n,t),r=e[s+=2];return e.join("")}e.exports=function(e,t){return x(v(e,c),t)}},function(e,t,n){var o=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(s);(o(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>6048e5}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var o=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return o(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},c=r();var u;u=new URL(s("kyEFX").resolve("8iIgb"),import.meta.url).toString();const d=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},p=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}};function f(){window.scrollTo({top:0,behavior:"smooth"})}let h=[],m=[];function g(e){const n=Number(e.currentTarget.id);console.log(n);!function({title:e,vote_average:n,vote_count:o,popularity:i,poster_path:s,original_title:r,genre_ids:c,overview:l,id:d}){const p=c.map((e=>localStorage.getItem(e))),f=`  <img\n          class='modal-movie__img'\n\n          ${s?`\n    srcset="\n    https://image.tmdb.org/t/p/w300/${s}      300w,\n    https://image.tmdb.org/t/p/w500/${s}      500w,\n    https://image.tmdb.org/t/p/w780/${s}      780w,\n    https://image.tmdb.org/t/p/w1280/${s}    1280w,\n    https://image.tmdb.org/t/p/original/${s} 2000w\n  "\n  src="https://image.tmdb.org/t/p/w300/${s}"\n  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"\n\n  `:`src="${t(u)}"\n  `}\n        />\n        <button type="button" class="btn__open-trailer js-open-trailer"></button>`,h=`\n        <h2 class='modal__title'>${e}</h2>\n          <table class='modal-info'>\n            <tr>${o?"<td class='modal-info__title'>Vote / Votes</td>":""}\n              ${o?`<td class='modal-info__value'>\n                <span class='modal-info__rate'>${n.toFixed(1)}</span>\n                /\n                <span class='modal-info__rate'>${o}</span>\n              </td>`:""}\n            \n            </tr>\n            <tr>\n              ${i?"<td class='modal-info__title'>Popularity</td>":""}\n              ${i?`<td class='modal-info__value'>${i.toFixed(1)}</td>`:""}\n            </tr>\n            <tr>\n              ${r?"<td class='modal-info__title'>Original Title</td>":""}\n              ${r?`<td class='modal-info__value'>${r}</td>`:""}\n            </tr>\n            <tr>\n              ${p.join(", ")?"<td class='modal-info__title'>Genre</td>":""}\n              ${p.join(", ")?`<td class='modal-movie-info__value'>${p.join(", ")}</td>`:""}\n            </tr>\n          </table>\n          <div class='modal-about'>\n            ${l?"<h3 class='modal-about__title'>About</h3>":""}\n            ${l?`<p class='modal-about__desc'>${l}</p>`:""}\n          </div>`;a.modal.setAttribute("data-id",d),a.modalMovie.insertAdjacentHTML("afterbegin",f),a.modalText.insertAdjacentHTML("afterbegin",h)}(JSON.parse(localStorage.getItem("search-storage")).results.find((e=>{if(e.id===n)return e}))),h=d("watched-movies"),m=d("queue-movies"),a.backdrop.classList.remove("is-hidden"),a.closeBtn.addEventListener("click",v),a.backdrop.addEventListener("click",v),window.addEventListener("keydown",_),a.addWatchedBtn.addEventListener("click",y),a.addQueueBtn.addEventListener("click",b);h.some((e=>e.id===n))?(a.addWatchedBtn.textContent="remove from watched",a.addWatchedBtn.classList.add("active-watched")):(a.addWatchedBtn.textContent="add to watched",a.addWatchedBtn.classList.remove("active-watched"));m.some((e=>e.id===n))?(a.addQueueBtn.textContent="remove from queue",a.addQueueBtn.classList.add("active-queue")):(a.addQueueBtn.textContent="add to queue",a.addQueueBtn.classList.remove("active-queue")),document.body.style.overflowY="scroll",a.body.classList.add("body-lock");document.querySelector(".js-open-trailer").addEventListener("click",(async function(e){try{const e=await P(n);if(console.log(e.results.length),e.results.length>0)window.open(`https://www.youtube.com/watch?v=${e.results[0].key}`,"_blank");else{!function(){const e=document.querySelector(".modal-movie");e.insertAdjacentHTML("afterbegin",'<p class="trailer-search form__uncorrect-search is-hidden"></p>');const t=document.querySelector(".form__uncorrect-search");t.textContent="Sorry, but there is no trailer for this movie",setTimeout((()=>{t.classList.toggle("is-hidden")}),1e3),setTimeout((()=>{e.firstElementChild.remove()}),2e3)}()}}catch(e){e.message}}))}function v(e){"btn-modal-close"!==e.target.classList.value&&e.target!==e.currentTarget||(a.backdrop.classList.add("is-hidden"),document.body.style.overflow="",a.closeBtn.removeEventListener("click",v),a.backdrop.removeEventListener("click",v),a.addWatchedBtn.removeEventListener("click",y),a.addQueueBtn.removeEventListener("click",b),window.removeEventListener("keydown",_),a.modalMovie.innerHTML="",a.modalText.innerHTML="")}function _(e){console.log(e.code),"Escape"===e.code&&(a.backdrop.classList.add("is-hidden"),document.body.style.overflow="",a.closeBtn.removeEventListener("click",v),a.backdrop.removeEventListener("click",v),window.removeEventListener("keydown",_),a.addWatchedBtn.removeEventListener("click",y),a.addQueueBtn.removeEventListener("click",b),a.modalMovie.innerHTML="",a.modalText.innerHTML="")}function y(e){const t=document.querySelector(".active-watched");e.target.classList.toggle("active-watched");const n=Number(a.modal.dataset.id),o=JSON.parse(localStorage.getItem("search-storage")).results;if(h=d("watched-movies"),t){const t=h.filter((e=>e.id!=n));p("watched-movies",t),e.target.textContent="add to watched"}t||(o.find((e=>{e.id===n&&(h.push(e),console.log(h),p("watched-movies",h),console.log(e))})),e.target.textContent="remove from watched")}function b(e){const t=document.querySelector(".active-queue");e.target.classList.toggle("active-queue");const n=Number(a.modal.dataset.id),o=JSON.parse(localStorage.getItem("search-storage")).results;if(m=d("queue-movies"),t){const t=m.filter((e=>e.id!=n));p("queue-movies",t),e.target.textContent="add to queue"}t||(o.find((e=>{e.id===n&&(m.push(e),console.log(m),p("queue-movies",m),console.log(e))})),e.target.textContent="remove from queue")}d("watched-movies")||p("watched-movies",h),d("queue-movies")||p("queue-movies",m);document.querySelector(".cards__list");async function x(e=1){try{const t=await L(e);E(t.results),p("search-storage",t),l(t.total_results,t.total_pages).on("afterMove",(({page:e})=>{L(e).then((e=>{E(e.results),p("search-storage",e),f()}))}))}catch(e){console.error(e.message)}}function w(e){return e.map((e=>localStorage.getItem(e))).join(", ")}function E(e){let n="",o="";setTimeout((()=>{a.cardsList.childNodes.forEach((e=>{e.addEventListener("click",g)}))}),200);const i=e.map((({poster_path:e,title:i,genre_ids:s,release_date:a="",vote_average:r="",id:c})=>(s.length>3&&(s.splice(3,s.length-3),n=w(s),n+=", other"),n=w(s),n.length>24&&(s.pop(),n=w(s),n+=", other"),0===s.length&&(n="genre is unknown"),o=a.slice(0,4),""===o&&(o="release date unknown"),e?`<li id="${c}" class="movie__card">\n        <img\n          src="https://image.tmdb.org/t/p/w500/${e}"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">${i}</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">${n}</h3>\n          <h3 class="movie__year">${o}</h3>\n          <div class="movie__average">${r.toFixed(1)}</div>\n        </div>\n      </div>\n      </li>`:`<li  id="${c}" class="movie__card">\n        <img width="100%"\n          src="${t(u)}"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">${i}</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">${n}</h3>\n          <h3 class="movie__year">${o}</h3>\n          <div class="movie__average">${r.toFixed(1)}</div>\n        </div>\n      </div>\n      </li>`))).join("");a.moviesGallery.innerHTML=i}async function L(e=1){try{const t={headers:{"Content-Type":"application/json;charset=utf-8"}},n=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8b20680c766bc5c37143e5d6b7aa7894&page=${e}`,t),o=await n.json();return p("trending-movies",o),o}catch(e){console.error(e.message)}}async function P(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=8b20680c766bc5c37143e5d6b7aa7894&language=en-US`);return await t.json()}catch(e){console.log(e.message)}}x().then(console.log);document.querySelector(".header-logo__link").addEventListener("click",(function(){S=1,x(S)})),a.form.addEventListener("submit",(async function(e){if(e.preventDefault(),S=1,C=e.currentTarget.elements.searchQuery.value.trim(),console.log(C),a.paginationEl.style.display="none",""===C)return k("Search for movies is empty! Enter movie name, please",2e3),void(a.paginationEl.style.display="none");await M(C,S).then((e=>{console.log(e);const t=e.total_results;console.log(t),t||k("Search result not successful. Enter the correct movie name and try again",2e3),t>=1&&(E(e.results),S+=1,l(t,e.total_pages).on("afterMove",(({page:e})=>{M(C,e).then((e=>{E(e.results),p("search-storage",e),f()}))})))})).catch((e=>console.log(e))).finally((()=>{a.form.reset()}))}));let S=1,C="";async function M(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b20680c766bc5c37143e5d6b7aa7894&page=${t}&include_adult=false&query=${e}`),o=await n.json();return p("search-storage",o),o}catch(e){console.error()}}function k(e,t){a.form.insertAdjacentHTML("beforeend",'<p class="form__uncorrect-search is-hidden"></p>');const n=document.querySelector(".form__uncorrect-search");n.textContent=`${e}`,setTimeout((()=>{n.classList.toggle("is-hidden")}),t),x(S);setTimeout((()=>{a.form.lastElementChild.remove()}),2e3)}(async function(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8b20680c766bc5c37143e5d6b7aa7894&language=en-US");return await e.json()}catch(e){console.log(e.message)}})().then((e=>{e.genres.map((e=>{localStorage.setItem(JSON.stringify(e.id),e.name)}))}));const B=document.querySelector("#btn--to_top");document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){this.scrollY>100?B.classList.add("show"):B.classList.remove("show")}))})),window.addEventListener("load",(function(){document.querySelector(".toggler");const e=document.querySelector(".theme-btn"),t=document.documentElement,n=localStorage.getItem("user-theme");let o;window.matchMedia&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{!n&&i()})),e&&e.addEventListener("click",(function(e){i(!0)}));function i(e=!1){let n,o=t.classList.contains("light")?"light":"dark";"light"===o?n="dark":"dark"===o&&(n="light"),t.classList.remove(o),t.classList.add(n),e&&localStorage.setItem("user-theme",n)}n?t.classList.add(n):t.classList.add(o)}));const I=document.querySelector(".watched-list-btn"),T=document.querySelector(".queue-list-btn");function $({genres:e,poster_path:t,title:n,release_date:o,id:i,vote_average:s}){let a=[];if(e.map((e=>a.push(e.name))),a.length>3){const e=a.slice(0,2);e.push("Other"),a=e}return`<li class="grid__item film-card ">\n        <a href="#" data-id="${i}" class="list">\n          <div class="film-card__thumb">\n            <img\n              class="film-card__img"\n              src="8b20680c766bc5c37143e5d6b7aa7894${t}"\n              alt="Movie poster"\n              loading="lazy"\n              id=${i}\n            />\n          </div>\n          <h2 class="film-card__header">${n}</h2>\n        </a>\n        <p class="film-card__genres">${a.join(", ")}</p>\n        <span class="film-card__year">${o.slice(0,4)}</span>\n        <span class="film-card__rating">${s.toFixed(1)}</span>\n      </li>`}I.addEventListener("click",(function(){I.classList.add("js-active"),T.classList.remove("js-active")})),T.addEventListener("click",(function(){T.classList.add("js-active"),I.classList.remove("js-active")}));const q=document.querySelector(".empty-library"),N=document.querySelector(".film-list-lib-js"),O=JSON.parse(localStorage.getItem("watched-movies")),j=JSON.parse(localStorage.getItem("queue-movies")),H=O.concat(j),A=H.filter(((e,t,n)=>n.indexOf(e)===t));!function(){if(H)try{A.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=$(e);N.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}(),I.addEventListener("click",(function(){if(H){const e=JSON.parse(localStorage.getItem("watched-movies"));N.innerHTML="";try{e.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=$(e);N.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),T.addEventListener("click",(function(){if(H){const e=JSON.parse(localStorage.getItem("queue-movies"));N.innerHTML="";try{e.map((e=>{fetch.getFilmDetails(e).then((e=>{const t=$(e);N.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}}})),A.length||q.classList.remove("is-hidden");
//# sourceMappingURL=index.58c77fe6.js.map