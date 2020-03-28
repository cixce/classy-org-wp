!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([,function(t,e,r){var n=r(2);t.exports={locale:n.locale,long:n.long,short:n.short,narrow:n.narrow,"short-time":r(7),"short-convenient":r(8),"long-time":r(9),"long-convenient":r(10),tiny:r(11),quantify:n.quantify}},function(t,e,r){t.exports={locale:"en",long:r(3),short:r(4),narrow:r(5),quantify:r(6)}},function(t){t.exports=JSON.parse('{"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"{0} year ago","other":"{0} years ago"},"future":{"one":"in {0} year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"future":{"one":"in {0} quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"{0} month ago","other":"{0} months ago"},"future":{"one":"in {0} month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"{0} week ago","other":"{0} weeks ago"},"future":{"one":"in {0} week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"{0} hour ago","other":"{0} hours ago"},"future":{"one":"in {0} hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"{0} minute ago","other":"{0} minutes ago"},"future":{"one":"in {0} minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"{0} second ago","other":"{0} seconds ago"},"future":{"one":"in {0} second","other":"in {0} seconds"}}}')},function(t){t.exports=JSON.parse('{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}}')},function(t){t.exports=JSON.parse('{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}}')},function(t,e){t.exports=function(t){var e=!String(t).split(".")[1];return 1==t&&e?"one":"other"}},function(t){t.exports=JSON.parse('{"year":"{0} yr.","month":"{0} mo.","week":"{0} wk.","day":{"one":"{0} day","other":"{0} days"},"hour":"{0} hr.","minute":"{0} min.","second":"{0} sec.","now":"now"}')},function(t){t.exports=JSON.parse('{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."},"now":{"future":"in a moment","past":"just now"}}')},function(t){t.exports=JSON.parse('{"year":{"one":"{0} year","other":"{0} years"},"month":{"one":"{0} month","other":"{0} months"},"week":{"one":"{0} week","other":"{0} weeks"},"day":{"one":"{0} day","other":"{0} days"},"hour":{"one":"{0} hour","other":"{0} hours"},"minute":{"one":"{0} minute","other":"{0} minutes"},"second":{"one":"{0} second","other":"{0} seconds"},"now":{"future":"in a moment","past":"just now"}}')},function(t){t.exports=JSON.parse('{"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"a year ago","other":"{0} years ago"},"future":{"one":"in a year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"a quarter ago","other":"{0} quarters ago"},"future":{"one":"in a quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"a month ago","other":"{0} months ago"},"future":{"one":"in a month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"a week ago","other":"{0} weeks ago"},"future":{"one":"in a week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"a day ago","other":"{0} days ago"},"future":{"one":"in a day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"an hour ago","other":"{0} hours ago"},"future":{"one":"in an hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"a minute ago","other":"{0} minutes ago"},"future":{"one":"in a minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"a second ago","other":"{0} seconds ago"},"future":{"one":"in a second","other":"in {0} seconds"}},"now":{"future":"in a moment","past":"just now"}}')},function(t){t.exports=JSON.parse('{"year":"{0}yr","month":"{0}mo","week":"{0}wk","day":"{0}d","hour":"{0}h","minute":"{0}m","second":"{0}s","now":"now"}')},function(t,e,r){"use strict";r.r(e);var n="en",o={};function a(){return n}function u(t){return o[t]}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.localeMatcher||"lookup";switch(r){case"lookup":case"best fit":return s(t);default:throw new RangeError('Invalid "localeMatcher" option: '.concat(r))}}function s(t){if(u(t))return t;for(var e=t.split("-");t.length>1;)if(e.pop(),u(t=e.join("-")))return t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=["second","minute","hour","day","week","month","quarter","year"],y=["auto","always"],m=["long","short","narrow"],p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,t),f(this,"numeric","always"),f(this,"style","long"),f(this,"localeMatcher","lookup");var n=r.numeric,o=r.style,u=r.localeMatcher;if(n){if(y.indexOf(n)<0)throw new RangeError('Invalid "numeric" option: '.concat(n));this.numeric=n}if(o){if(m.indexOf(o)<0)throw new RangeError('Invalid "style" option: '.concat(o));this.style=o}if(u&&(this.localeMatcher=u),"string"==typeof e&&(e=[e]),e.push(a()),this.locale=t.supportedLocalesOf(e,{localeMatcher:this.localeMatcher})[0],!this.locale)throw new TypeError("No supported locale was found");this.locale=i(this.locale,{localeMatcher:this.localeMatcher}),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale))}var e,r,n;return e=t,(r=[{key:"format",value:function(t,e){return this.getRule(t,e).replace("{0}",this.formatNumber(Math.abs(t)))}},{key:"formatToParts",value:function(t,e){var r=this.getRule(t,e),n=r.indexOf("{0}");if(n<0)return[{type:"literal",value:r}];var o=[];return n>0&&o.push({type:"literal",value:r.slice(0,n)}),o.push({unit:e,type:"integer",value:this.formatNumber(Math.abs(t))}),n+"{0}".length<r.length-1&&o.push({type:"literal",value:r.slice(n+"{0}".length)}),o}},{key:"getRule",value:function(t,e){if(h.indexOf(e)<0)throw new RangeError("Unknown time unit: ".concat(e,"."));var r=u(this.locale)[this.style][e];if("auto"===this.numeric)if(-2===t||-1===t){var n=r["previous".concat(-1===t?"":"-"+Math.abs(t))];if(n)return n}else if(1===t||2===t){var o=r["next".concat(1===t?"":"-"+Math.abs(t))];if(o)return o}else if(0===t&&r.current)return r.current;var a=r[t<=0?"past":"future"];if("string"==typeof a)return a;var i=u(this.locale).quantify,s=i&&i(Math.abs(t));return a[s=s||"other"]||a.other}},{key:"formatNumber",value:function(t){return this.numberFormat?this.numberFormat.format(t):String(t)}},{key:"resolvedOptions",value:function(){return{locale:this.locale,style:this.style,numeric:this.numeric}}}])&&l(e.prototype,r),n&&l(e,n),t}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}p.supportedLocalesOf=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.filter((function(t){return i(t,e)}))},p.addLocale=function(t){if(!t)throw new Error("No locale data passed");o[t.locale]=t},p.setDefaultLocale=function(t){n=t},p.getDefaultLocale=a;var v=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n={},(r="cache")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}var e,r,n;return e=t,(r=[{key:"get",value:function(){for(var t=this.cache,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var o=0;o<r.length;o++){var a=r[o];if("object"!==d(t))return;t=t[a]}return t}},{key:"put",value:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var n=e.pop(),o=e.pop(),a=this.cache,u=0;u<e.length;u++){var i=e[u];"object"!==d(a[i])&&(a[i]={}),a=a[i]}return a[o]=n}}])&&g(e.prototype,r),n&&g(e,n),t}(),w=86400;function b(t,e){var r=t,n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var u=a;if(u.unit===e)return u}}function k(t){return t instanceof Date?t:new Date(t)}var x=[{factor:1,unit:"now"},{threshold:1,threshold_for_now:45,factor:1,unit:"second"},{threshold:45,factor:60,unit:"minute"},{threshold:150,factor:60,granularity:5,unit:"minute"},{threshold:1350,factor:1800,unit:"half-hour"},{threshold:2550,threshold_for_minute:3150,factor:3600,unit:"hour"},{threshold:73800,factor:w,unit:"day"},{threshold:475200,factor:7*w,unit:"week"},{threshold:2116800,factor:2630016,unit:"month"},{threshold:27615168,factor:31556952,unit:"year"}];function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x;if(0!==(n=M(n,r)).length){var o=j(t,e,n),a=n[o];if(-1!==o){if(a.granularity){var u=Math.round(Math.abs(t)/a.factor/a.granularity)*a.granularity;if(0===u&&o>0)return n[o-1]}return a}}}function O(t,e,r,n){var o;if(t&&(t.id||t.unit)&&(o=e["threshold_for_".concat(t.id||t.unit)]),void 0===o&&(o=e.threshold),"function"==typeof o&&(o=o(r,n)),t&&"number"!=typeof o){var a=S(o);throw new Error('Each step of a gradation must have a threshold defined except for the first one. Got "'.concat(o,'", ').concat(a,". Step: ").concat(JSON.stringify(e)))}return o}function j(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Math.abs(t)<O(r[n-1],r[n],e,t<0)?n-1:n===r.length-1?n:j(t,e,r,n+1)}function M(t,e){return t.filter((function(t){var r=t.unit;return!r||e.indexOf(r)>=0}))}function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){var r=t,n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var u=a;if(e(u))return u;for(var i=u.split("-");i.length>1;)if(i.pop(),e(u=i.join("-")))return u}throw new Error("No locale data has been registered for any of the locales: ".concat(t.join(", ")))}function F(){return"object"===("undefined"==typeof Intl?"undefined":D(Intl))&&"function"==typeof Intl.DateTimeFormat}var T={gradation:x,flavour:["long-convenient","long"],units:["now","minute","hour","day","week","month","year"]},E=[{factor:1,unit:"now"},{threshold:.5,factor:1,unit:"second"},{threshold:59.5,factor:60,unit:"minute"},{threshold:3570,factor:3600,unit:"hour"},{threshold:84600,factor:w,unit:"day"},{threshold:561600,factor:7*w,unit:"week"},{threshold:2116800,factor:2630016,unit:"month"},{threshold:30245184,factor:31556952,unit:"year"}];function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var L={},A={gradation:[function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){I(t,e,r[e])}))}return t}({},b(E,"minute"),{threshold:45}),b(E,"hour"),{threshold:84600,format:function(t,e){if(F())return L[e]||(L[e]={}),L[e].this_year||(L[e].this_year=new Intl.DateTimeFormat(e,{month:"short",day:"numeric"})),L[e].this_year.format(k(t))}},{threshold:function(t,e){return e?(new Date(new Date(t).getFullYear()+1,0).getTime()-t)/1e3:(t-new Date(new Date(t).getFullYear(),0).getTime())/1e3},format:function(t,e){if(F())return L[e]||(L[e]={}),L[e].other||(L[e].other=new Intl.DateTimeFormat(e,{year:"numeric",month:"short",day:"numeric"})),L[e].other.format(k(t))}}],flavour:["tiny","short-time","narrow","short"]},_={gradation:x,flavour:"long-time",units:["now","minute","hour","day","week","month","year"]},P={};function C(t){return P[t]}function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var V=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];R(this,t),"string"==typeof e&&(e=[e]),this.locale=N(e.concat(p.getDefaultLocale()),C),"undefined"!=typeof Intl&&Intl.NumberFormat&&(this.numberFormat=new Intl.NumberFormat(this.locale)),this.relativeTimeFormatCache=new v}var e,r,n;return e=t,(r=[{key:"format",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;if("string"==typeof e)switch(e){case"twitter":e=A;break;case"time":e=_;break;default:e=T}var r=Y(t),n=r.date,o=r.time,a=this.getLocaleData(e.flavour),u=a.flavour,i=a.localeData,s=e.now||Date.now(),c=(s-o)/1e3;if(e.custom){var l=e.custom({now:s,date:n,time:o,elapsed:c,locale:this.locale});if(void 0!==l)return l}var f=B(i,e.units);if(0===f.length)return console.error('Units "'.concat(f.join(", "),'" were not found in locale data for "').concat(this.locale,'".')),"";var h=q(c,s,f,e.gradation);if(!h)return"";if(h.format)return h.format(n||o,this.locale);var y=h.unit,m=h.factor,p=h.granularity,d=Math.abs(c)/m;if(p&&(d=Math.round(d/p)*p),"now"===y)return G(i,-1*Math.sign(c));switch(u){case"long":case"short":case"narrow":return this.getFormatter(u).format(-1*Math.sign(c)*Math.round(d),y);default:return this.formatValue(-1*Math.sign(c)*Math.round(d),y,i)}}},{key:"formatValue",value:function(t,e,r){return this.getRule(t,e,r).replace("{0}",this.formatNumber(Math.abs(t)))}},{key:"getRule",value:function(t,e,r){var n=r[e];if("string"==typeof n)return n;var o=n[t<=0?"past":"future"]||n;if("string"==typeof o)return o;var a=C(this.locale).quantify,u=a&&a(Math.abs(t));return o[u=u||"other"]||o.other}},{key:"formatNumber",value:function(t){return this.numberFormat?this.numberFormat.format(t):String(t)}},{key:"getFormatter",value:function(t){return this.relativeTimeFormatCache.get(this.locale,t)||this.relativeTimeFormatCache.put(this.locale,t,new p(this.locale,{style:t}))}},{key:"getLocaleData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=C(this.locale);"string"==typeof t&&(t=[t]);var r=t=t.concat("long"),n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var u=a;if(e[u])return{flavour:u,localeData:e[u]}}}}])&&U(e.prototype,r),n&&U(e,n),t}();function Y(t){if(t.constructor===Date||"object"===J(e=t)&&"function"==typeof e.getTime)return{date:t,time:t.getTime()};var e;if("number"==typeof t)return{time:t};throw new Error("Unsupported relative time formatter input: ".concat(J(t),", ").concat(t))}function B(t,e){var r=Object.keys(t);return e&&(r=e.filter((function(t){return r.indexOf(t)>=0}))),(!e||e.indexOf("now")>=0)&&r.indexOf("now")<0&&t.second.current&&r.unshift("now"),r}function G(t,e){return t.now?"string"==typeof t.now?t.now:e<=0?t.now.past:t.now.future:t.second.current}V.getDefaultLocale=p.getDefaultLocale,V.setDefaultLocale=p.setDefaultLocale,V.addLocale=function(t){!function(t){if(!t)throw new Error("[javascript-time-ago] No locale data passed.");P[t.locale]=t}(t),p.addLocale(t)},V.locale=V.addLocale;var $=r(1),z=r.n($);function H(t){return function(t){if(Array.isArray(t))return K(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}console.log("Classsy classy sassy"),window.addEventListener("load",(function(){V.addLocale(z.a);for(var t=new V("en-US"),e=H(document.getElementsByClassName("classy-org-activity_item-info-date")),r=0;r<e.length;++r){var n=e[r];try{var o=new Date(n.getAttribute("created"));n.innerText=t.format(o)}catch(t){console.log(t)}}}))}]);