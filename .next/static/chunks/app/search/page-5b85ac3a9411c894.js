(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{3897:function(e,t,r){Promise.resolve().then(r.bind(r,61))},9303:function(e){/*! algoliasearch-lite.umd.js | 4.23.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */e.exports=function(){"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach(function(e){var r;r=n[e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},i=JSON.stringify(r);if(i in t)return Promise.resolve(e.serializable?JSON.parse(t[i]):t[i]);var s=n(),a=o&&o.miss||function(){return Promise.resolve()};return s.then(function(e){return a(e)}).then(function(){return s})},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function i(e,t){return t&&Object.keys(t).forEach(function(r){e[r]=t[r](e)}),e}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,function(){return encodeURIComponent(r[o++])})}var a={WithinQueryParameters:0,WithinHeaders:1};function u(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach(function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var c={Read:1,Write:2,Any:3};function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t(t({},e),{},{status:r,lastUpdate:Date.now()})}function d(e){return"string"==typeof e?{protocol:"https",url:e,accept:c.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||c.Any}}var f="POST";function h(e,r,o,i){var s,a,u,c=[],f=function(e,r){if("GET"!==e.method&&(void 0!==e.data||void 0!==r.data))return JSON.stringify(Array.isArray(e.data)?e.data:t(t({},e.data),r.data))}(o,i),h=(s=t(t({},e.headers),i.headers),a={},Object.keys(s).forEach(function(e){var t=s[e];a[e.toLowerCase()]=t}),a),y=o.method,g="GET"!==o.method?{}:t(t({},o.data),i.data),b=t(t(t({"x-algolia-agent":e.userAgent.value},e.queryParameters),g),i.queryParameters),S=0,_=function t(r,n){var s,a,u,d=r.pop();if(void 0===d)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:p(c)};var g={data:f,headers:h,method:y,url:(s=o.path,a=m(b),u="".concat(d.protocol,"://").concat(d.url,"/").concat("/"===s.charAt(0)?s.substr(1):s),a.length&&(u+="?".concat(a)),u),connectTimeout:n(S,e.timeouts.connect),responseTimeout:n(S,i.timeout)},_=function(e){var t={request:g,response:e,host:d,triesLeft:r.length};return c.push(t),t},j={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw{name:"DeserializationError",message:t.message,response:e}}}(e)},onRetry:function(o){var i=_(o);return o.isTimedOut&&S++,Promise.all([e.logger.info("Retryable failure",v(i)),e.hostsCache.set(d,l(d,o.isTimedOut?3:2))]).then(function(){return t(r,n)})},onFail:function(e){throw _(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return{name:"ApiError",message:o,status:n,transporterStackTrace:t}}(e,p(c))}};return e.requester.send(g).then(function(e){var t,r,n;return(t=e.status,e.isTimedOut||(r=e.isTimedOut,n=e.status,!r&&0==~~n)||2!=~~(t/100)&&4!=~~(t/100))?j.onRetry(e):2==~~(e.status/100)?j.onSuccess(e):j.onFail(e)})};return(u=e.hostsCache,Promise.all(r.map(function(e){return u.get(e,function(){return Promise.resolve(l(e))})})).then(function(e){var t=e.filter(function(e){return 1===e.status||Date.now()-e.lastUpdate>12e4}),o=e.filter(function(e){return 3===e.status&&Date.now()-e.lastUpdate<=12e4}),i=[].concat(n(t),n(o));return{getTimeout:function(e,t){return(0===o.length&&0===e?1:o.length+3+e)*t},statelessHosts:i.length>0?i.map(function(e){return d(e)}):r}})).then(function(e){return _(n(e.statelessHosts).reverse(),e.getTimeout)})}function m(e){return Object.keys(e).map(function(t){var r;return s("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]))}).join("&")}function p(e){return e.map(function(e){return v(e)})}function v(e){var r=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return t(t({},e),{},{request:t(t({},e.request),{},{headers:t(t({},e.request.headers),r)})})}var y=function(e){var n,o,s,l,f,m,p,v,y,g,b,S,_,j=e.appId,x=(n=void 0!==e.authMode?e.authMode:a.WithinHeaders,o={"x-algolia-api-key":e.apiKey,"x-algolia-application-id":j},{headers:function(){return n===a.WithinHeaders?o:{}},queryParameters:function(){return n===a.WithinQueryParameters?o:{}}}),w=(l=(s=t(t({hosts:[{url:"".concat(j,"-dsn.algolia.net"),accept:c.Read},{url:"".concat(j,".algolia.net"),accept:c.Write}].concat(function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}([{url:"".concat(j,"-1.algolianet.com")},{url:"".concat(j,"-2.algolianet.com")},{url:"".concat(j,"-3.algolianet.com")}]))},e),{},{headers:t(t(t({},x.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:t(t({},x.queryParameters()),e.queryParameters)})).hostsCache,f=s.logger,m=s.requester,p=s.requestsCache,v=s.responsesCache,y=s.timeouts,g=s.userAgent,b=s.hosts,S=s.queryParameters,_={hostsCache:l,logger:f,requester:m,requestsCache:p,responsesCache:v,timeouts:y,userAgent:g,headers:s.headers,queryParameters:S,hosts:b.map(function(e){return d(e)}),read:function(e,t){var n=u(t,_.timeouts.read),o=function(){return h(_,_.hosts.filter(function(e){return 0!=(e.accept&c.Read)}),e,n)};if(!0!==(void 0!==n.cacheable?n.cacheable:e.cacheable))return o();var i={request:e,mappedRequestOptions:n,transporter:{queryParameters:_.queryParameters,headers:_.headers}};return _.responsesCache.get(i,function(){return _.requestsCache.get(i,function(){return _.requestsCache.set(i,o()).then(function(e){return Promise.all([_.requestsCache.delete(i),e])},function(e){return Promise.all([_.requestsCache.delete(i),Promise.reject(e)])}).then(function(e){var t=r(e,2);return t[0],t[1]})})},{miss:function(e){return _.responsesCache.set(i,e)}})},write:function(e,t){return h(_,_.hosts.filter(function(e){return 0!=(e.accept&c.Write)}),e,u(t,_.timeouts.write))}});return i({transporter:w,appId:j,addAlgoliaAgent:function(e,t){w.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([w.requestsCache.clear(),w.responsesCache.clear()]).then(function(){})}},e.methods)},g=function(e){return function(t,r){return"GET"===t.method?e.transporter.read(t,r):e.transporter.write(t,r)}},b=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i({transporter:e.transporter,appId:e.appId,indexName:t},r.methods)}},S=function(e){return function(r,n){var o=r.map(function(e){return t(t({},e),{},{params:m(e.params||{})})});return e.transporter.read({method:f,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},_=function(e){return function(r,n){return Promise.all(r.map(function(r){var o=r.params,i=o.facetName,s=o.facetQuery,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(o,["facetName","facetQuery"]);return b(e)(r.indexName,{methods:{searchForFacetValues:w}}).searchForFacetValues(i,s,t(t({},n),a))}))}},j=function(e){return function(t,r,n){return e.transporter.read({method:f,path:s("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},x=function(e){return function(t,r){return e.transporter.read({method:f,path:s("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},w=function(e){return function(t,r,n){return e.transporter.read({method:f,path:s("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},O=function(e){return function(r,n){var o=r.map(function(e){return t(t({},e),{},{threshold:e.threshold||0})});return e.transporter.read({method:f,path:"1/indexes/*/recommendations",data:{requests:o},cacheable:!0},n)}};function P(e,i,s){var u,c,l,d,f,h,m,p;return y(t(t(t({},{appId:e,apiKey:i,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise(function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach(function(t){return r.setRequestHeader(t,e.headers[t])});var n,o=function(e,n){return setTimeout(function(){r.abort(),t({status:0,content:n,isTimedOut:!0})},1e3*e)},i=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(i),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(i),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(i),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)})}},logger:{debug:function(e,t){return Promise.resolve()},info:function(e,t){return Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}},responsesCache:o(),requestsCache:o({serializable:!1}),hostsCache:function e(t){var o=n(t.caches),i=o.shift();return void 0===i?{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return t().then(function(e){return Promise.all([e,n.miss(e)])}).then(function(e){return r(e,1)[0]})},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return i.get(t,r,n).catch(function(){return e({caches:o}).get(t,r,n)})},set:function(t,r){return i.set(t,r).catch(function(){return e({caches:o}).set(t,r)})},delete:function(t){return i.delete(t).catch(function(){return e({caches:o}).delete(t)})},clear:function(){return i.clear().catch(function(){return e({caches:o}).clear()})}}}({caches:[(u={key:"".concat("4.23.3","-").concat(e)},l="algoliasearch-client-js-".concat(u.key),d=function(){return void 0===c&&(c=u.localStorage||window.localStorage),c},f=function(){return JSON.parse(d().getItem(l)||"{}")},h=function(e){d().setItem(l,JSON.stringify(e))},m=function(){var e=u.timeToLive?1e3*u.timeToLive:null,t=Object.fromEntries(Object.entries(f()).filter(function(e){return void 0!==r(e,2)[1].timestamp}));h(t),e&&h(Object.fromEntries(Object.entries(t).filter(function(t){var n=r(t,2)[1],o=(new Date).getTime();return!(n.timestamp+e<o)})))},{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){m();var t=JSON.stringify(e);return f()[t]}).then(function(e){return Promise.all([e?e.value:t(),void 0!==e])}).then(function(e){var t=r(e,2),o=t[0];return Promise.all([o,t[1]||n.miss(o)])}).then(function(e){return r(e,1)[0]})},set:function(e,t){return Promise.resolve().then(function(){var r=f();return r[JSON.stringify(e)]={timestamp:(new Date).getTime(),value:t},d().setItem(l,JSON.stringify(r)),t})},delete:function(e){return Promise.resolve().then(function(){var t=f();delete t[JSON.stringify(e)],d().setItem(l,JSON.stringify(t))})},clear:function(){return Promise.resolve().then(function(){d().removeItem(l)})}}),o()]}),userAgent:(p={value:"Algolia for JavaScript (".concat("4.23.3",")"),add:function(e){var t="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return -1===p.value.indexOf(t)&&(p.value="".concat(p.value).concat(t)),p}}).add({segment:"Browser",version:"lite"}),authMode:a.WithinQueryParameters}),s),{},{methods:{search:S,searchForFacetValues:_,multipleQueries:S,multipleSearchForFacetValues:_,customRequest:g,initIndex:function(e){return function(t){return b(e)(t,{methods:{search:x,searchForFacetValues:w,findAnswers:j}})}},getRecommendations:O}}))}return P.version="4.23.3",P}()},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},9079:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(3127)},2219:function(){},3127:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],c=!1,l=-1;function d(){c&&n&&(c=!1,n.length?u=n.concat(u):l=-1,u.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=u.length;t;){for(n=u,u=[];++l<t;)n&&n[l].run();l=-1,t=u.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||c||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},9840:function(e,t,r){"use strict";var n=r(9079);r(2219);var o=r(2265),i=o&&"object"==typeof o&&"default"in o?o:{default:o};function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=void 0!==n&&n.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,i=void 0===o?a:o;l(u(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",l("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(l(u(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var r="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];l(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&l(u(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},s(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&s(e,t),e}();function l(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},f={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return f[n]||(f[n]="jsx-"+d(e+"-"+r)),f[n]}function m(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return f[r]||(f[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[r]}var p=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=n||new c({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=i,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var o=h(n,r);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return m(o,e)}):[m(o,t)]}}return{styleId:h(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=o.createContext(null);v.displayName="StyleSheetContext";var y=i.default.useInsertionEffect||i.default.useLayoutEffect,g="undefined"!=typeof window?new p:void 0;function b(e){var t=g||o.useContext(v);return t&&("undefined"==typeof window?t.add(e):y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}b.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=b},9102:function(e,t,r){"use strict";e.exports=r(9840).style},61:function(e,t,r){"use strict";r.r(t);var n=r(7437),o=r(9102),i=r.n(o),s=r(2265),a=r(9303),u=r.n(a),c=r(7907);let l=u()("BHHXVEKGFH","59327a638018a363eace1923b8cb9c81"),d=()=>{let e;let[t,r]=(0,s.useState)(""),[o,a]=(0,s.useState)([]),[u,d]=(0,s.useState)(!1),f=(0,c.useRouter)(),h=(0,c.useSearchParams)();(0,s.useEffect)(()=>{(async()=>{d(!0);let e=h.get("q")||"";e&&(r(e),a((await l.initIndex("shopify_products").search(e)).hits)),d(!1)})()},[h]),(0,s.useEffect)(()=>(e&&clearTimeout(e),e=setTimeout(async()=>{t&&(d(!0),a((await l.initIndex("shopify_products").search(t)).hits),d(!1))},500),()=>clearTimeout(e)),[t]);let m=async e=>{e.preventDefault(),f.push("/search?q=".concat(t)),d(!0),a((await l.initIndex("shopify_products").search(t)).hits),d(!1)};return(0,n.jsxs)("div",{className:"jsx-873db1549a6839b0 container mx-auto p-4",children:[(0,n.jsx)("h1",{className:"jsx-873db1549a6839b0 text-3xl font-bold text-center mb-4",children:"صفحة البحث المتقدم"}),(0,n.jsxs)("form",{onSubmit:m,className:"jsx-873db1549a6839b0 flex justify-center mb-4",children:[(0,n.jsx)("input",{type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"Search for products",className:"jsx-873db1549a6839b0 border p-2 w-1/2"}),(0,n.jsx)("button",{type:"submit",className:"jsx-873db1549a6839b0 ml-2 p-2 bg-blue-500 text-white",children:"بحث"})]}),u?(0,n.jsx)("div",{className:"jsx-873db1549a6839b0 flex justify-center items-center",children:(0,n.jsx)("div",{className:"jsx-873db1549a6839b0 loader border-t-4 border-blue-500 rounded-full w-12 h-12"})}):(0,n.jsx)("div",{className:"jsx-873db1549a6839b0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(e=>(0,n.jsxs)("a",{href:"/product/".concat(e.handle),className:"jsx-873db1549a6839b0 block border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300",children:[(0,n.jsx)("img",{src:e.image,alt:e.title,className:"jsx-873db1549a6839b0 w-full h-48 object-cover rounded-lg mb-4"}),(0,n.jsx)("h2",{className:"jsx-873db1549a6839b0 text-xl font-bold mb-2",children:e.title}),(0,n.jsx)("p",{className:"jsx-873db1549a6839b0 mb-2 text-gray-700",children:e.description}),(0,n.jsxs)("p",{className:"jsx-873db1549a6839b0 text-lg font-semibold text-green-600",children:[e.price," د.ع"]})]},e.objectID))}),(0,n.jsx)(i(),{id:"873db1549a6839b0",children:".loader.jsx-873db1549a6839b0{border-top-color:transparent;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"})]})};t.default=()=>(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(d,{})})}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3897)}),_N_E=e.O()}]);