import{a as Je}from"/build/_shared/chunk-WCZYJH7Q.js";import{d as oe,g as ve,i as f,j as v,k as X}from"/build/_shared/chunk-4JAR5RLY.js";f();X();f();X();var $=typeof window>"u";function C(){}function Re(u,r){return typeof u=="function"?u(r):u}function Z(u){return typeof u=="number"&&u>=0&&u!==1/0}function Y(u){return Array.isArray(u)?u:[u]}function ae(u,r){return Math.max(u+(r||0)-Date.now(),0)}function B(u,r,i){return ce(u)?typeof r=="function"?v({},i,{queryKey:u,queryFn:r}):v({},r,{queryKey:u}):u}function _(u,r,i){return ce(u)?[v({},r,{queryKey:u}),i]:[u||{},r]}function Xe(u,r){if(u===!0&&r===!0||u==null&&r==null)return"all";if(u===!1&&r===!1)return"none";var i=u??!r;return i?"active":"inactive"}function me(u,r){var i=u.active,e=u.exact,t=u.fetching,n=u.inactive,o=u.predicate,s=u.queryKey,a=u.stale;if(ce(s)){if(e){if(r.queryHash!==z(s,r.options))return!1}else if(!ee(r.queryKey,s))return!1}var c=Xe(i,n);if(c==="none")return!1;if(c!=="all"){var l=r.isActive();if(c==="active"&&!l||c==="inactive"&&l)return!1}return!(typeof a=="boolean"&&r.isStale()!==a||typeof t=="boolean"&&r.isFetching()!==t||o&&!o(r))}function be(u,r){var i=u.exact,e=u.fetching,t=u.predicate,n=u.mutationKey;if(ce(n)){if(!r.options.mutationKey)return!1;if(i){if(I(r.options.mutationKey)!==I(n))return!1}else if(!ee(r.options.mutationKey,n))return!1}return!(typeof e=="boolean"&&r.state.status==="loading"!==e||t&&!t(r))}function z(u,r){var i=(r==null?void 0:r.queryKeyHashFn)||I;return i(u)}function I(u){var r=Y(u);return Ye(r)}function Ye(u){return JSON.stringify(u,function(r,i){return ye(i)?Object.keys(i).sort().reduce(function(e,t){return e[t]=i[t],e},{}):i})}function ee(u,r){return Pe(Y(u),Y(r))}function Pe(u,r){return u===r?!0:typeof u!=typeof r?!1:u&&r&&typeof u=="object"&&typeof r=="object"?!Object.keys(r).some(function(i){return!Pe(u[i],r[i])}):!1}function H(u,r){if(u===r)return u;var i=Array.isArray(u)&&Array.isArray(r);if(i||ye(u)&&ye(r)){for(var e=i?u.length:Object.keys(u).length,t=i?r:Object.keys(r),n=t.length,o=i?[]:{},s=0,a=0;a<n;a++){var c=i?a:t[a];o[c]=H(u[c],r[c]),o[c]===u[c]&&s++}return e===n&&s===e?u:o}return r}function Se(u,r){if(u&&!r||r&&!u)return!1;for(var i in u)if(u[i]!==r[i])return!1;return!0}function ye(u){if(!Fe(u))return!1;var r=u.constructor;if(typeof r>"u")return!0;var i=r.prototype;return!(!Fe(i)||!i.hasOwnProperty("isPrototypeOf"))}function Fe(u){return Object.prototype.toString.call(u)==="[object Object]"}function ce(u){return typeof u=="string"||Array.isArray(u)}function Me(u){return new Promise(function(r){setTimeout(r,u)})}function ge(u){Promise.resolve().then(u).catch(function(r){return setTimeout(function(){throw r})})}function fe(){if(typeof AbortController=="function")return new AbortController}f();f();f();function te(u,r){return te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},te(u,r)}function M(u,r){u.prototype=Object.create(r.prototype),u.prototype.constructor=u,te(u,r)}f();X();f();var Ze=function(){function u(){this.queue=[],this.transactions=0,this.notifyFn=function(i){i()},this.batchNotifyFn=function(i){i()}}var r=u.prototype;return r.batch=function(e){var t;this.transactions++;try{t=e()}finally{this.transactions--,this.transactions||this.flush()}return t},r.schedule=function(e){var t=this;this.transactions?this.queue.push(e):ge(function(){t.notifyFn(e)})},r.batchCalls=function(e){var t=this;return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];t.schedule(function(){e.apply(void 0,o)})}},r.flush=function(){var e=this,t=this.queue;this.queue=[],t.length&&ge(function(){e.batchNotifyFn(function(){t.forEach(function(n){e.notifyFn(n)})})})},r.setNotifyFunction=function(e){this.notifyFn=e},r.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},u}(),m=new Ze;f();var Ee=console;function N(){return Ee}function Oe(u){Ee=u}f();f();f();var q=function(){function u(){this.listeners=[]}var r=u.prototype;return r.subscribe=function(e){var t=this,n=e||function(){};return this.listeners.push(n),this.onSubscribe(),function(){t.listeners=t.listeners.filter(function(o){return o!==n}),t.onUnsubscribe()}},r.hasListeners=function(){return this.listeners.length>0},r.onSubscribe=function(){},r.onUnsubscribe=function(){},u}();var ze=function(u){M(r,u);function r(){var e;return e=u.call(this)||this,e.setup=function(t){var n;if(!$&&((n=window)==null?void 0:n.addEventListener)){var o=function(){return t()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},e}var i=r.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},i.setEventListener=function(t){var n,o=this;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(function(s){typeof s=="boolean"?o.setFocused(s):o.onFocus()})},i.setFocused=function(t){this.focused=t,t&&this.onFocus()},i.onFocus=function(){this.listeners.forEach(function(t){t()})},i.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},r}(q),T=new ze;f();var et=function(u){M(r,u);function r(){var e;return e=u.call(this)||this,e.setup=function(t){var n;if(!$&&((n=window)==null?void 0:n.addEventListener)){var o=function(){return t()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},e}var i=r.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},i.setEventListener=function(t){var n,o=this;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(function(s){typeof s=="boolean"?o.setOnline(s):o.onOnline()})},i.setOnline=function(t){this.online=t,t&&this.onOnline()},i.onOnline=function(){this.listeners.forEach(function(t){t()})},i.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},r}(q),k=new et;function tt(u){return Math.min(1e3*Math.pow(2,u),3e4)}function re(u){return typeof(u==null?void 0:u.cancel)=="function"}var _e=function(r){this.revert=r==null?void 0:r.revert,this.silent=r==null?void 0:r.silent};function G(u){return u instanceof _e}var le=function(r){var i=this,e=!1,t,n,o,s;this.abort=r.abort,this.cancel=function(p){return t==null?void 0:t(p)},this.cancelRetry=function(){e=!0},this.continueRetry=function(){e=!1},this.continue=function(){return n==null?void 0:n()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,h){o=p,s=h});var a=function(h){i.isResolved||(i.isResolved=!0,r.onSuccess==null||r.onSuccess(h),n==null||n(),o(h))},c=function(h){i.isResolved||(i.isResolved=!0,r.onError==null||r.onError(h),n==null||n(),s(h))},l=function(){return new Promise(function(h){n=h,i.isPaused=!0,r.onPause==null||r.onPause()}).then(function(){n=void 0,i.isPaused=!1,r.onContinue==null||r.onContinue()})},y=function p(){if(!i.isResolved){var h;try{h=r.fn()}catch(d){h=Promise.reject(d)}t=function(g){if(!i.isResolved&&(c(new _e(g)),i.abort==null||i.abort(),re(h)))try{h.cancel()}catch{}},i.isTransportCancelable=re(h),Promise.resolve(h).then(a).catch(function(d){var g,P;if(!i.isResolved){var F=(g=r.retry)!=null?g:3,Q=(P=r.retryDelay)!=null?P:tt,b=typeof Q=="function"?Q(i.failureCount,d):Q,A=F===!0||typeof F=="number"&&i.failureCount<F||typeof F=="function"&&F(i.failureCount,d);if(e||!A){c(d);return}i.failureCount++,r.onFail==null||r.onFail(i.failureCount,d),Me(b).then(function(){if(!T.isFocused()||!k.isOnline())return l()}).then(function(){e?c(d):p()})}})}};y()};var qe=function(){function u(i){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.cache=i.cache,this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.initialState=i.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=i.meta,this.scheduleGc()}var r=u.prototype;return r.setOptions=function(e){var t;this.options=v({},this.defaultOptions,e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!=null?t:5*60*1e3)},r.setDefaultOptions=function(e){this.defaultOptions=e},r.scheduleGc=function(){var e=this;this.clearGcTimeout(),Z(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){e.optionalRemove()},this.cacheTime))},r.clearGcTimeout=function(){clearTimeout(this.gcTimeout),this.gcTimeout=void 0},r.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},r.setData=function(e,t){var n,o,s=this.state.data,a=Re(e,s);return((n=(o=this.options).isDataEqual)==null?void 0:n.call(o,s,a))?a=s:this.options.structuralSharing!==!1&&(a=H(s,a)),this.dispatch({data:a,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),a},r.setState=function(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})},r.cancel=function(e){var t,n=this.promise;return(t=this.retryer)==null||t.cancel(e),n?n.then(C).catch(C):Promise.resolve()},r.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},r.reset=function(){this.destroy(),this.setState(this.initialState)},r.isActive=function(){return this.observers.some(function(e){return e.options.enabled!==!1})},r.isFetching=function(){return this.state.isFetching},r.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(e){return e.getCurrentResult().isStale})},r.isStaleByTime=function(e){return e===void 0&&(e=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!ae(this.state.dataUpdatedAt,e)},r.onFocus=function(){var e,t=this.observers.find(function(n){return n.shouldFetchOnWindowFocus()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},r.onOnline=function(){var e,t=this.observers.find(function(n){return n.shouldFetchOnReconnect()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},r.addObserver=function(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))},r.removeObserver=function(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(function(t){return t!==e}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))},r.getObserversCount=function(){return this.observers.length},r.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},r.fetch=function(e,t){var n=this,o,s,a;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t==null?void 0:t.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){var l=this.observers.find(function(Q){return Q.options.queryFn});l&&this.setOptions(l.options)}var y=Y(this.queryKey),p=fe(),h={queryKey:y,pageParam:void 0,meta:this.meta};Object.defineProperty(h,"signal",{enumerable:!0,get:function(){if(p)return n.abortSignalConsumed=!0,p.signal}});var d=function(){return n.options.queryFn?(n.abortSignalConsumed=!1,n.options.queryFn(h)):Promise.reject("Missing queryFn")},g={fetchOptions:t,options:this.options,queryKey:y,state:this.state,fetchFn:d,meta:this.meta};if((o=this.options.behavior)==null?void 0:o.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(g)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((s=g.fetchOptions)==null?void 0:s.meta)){var F;this.dispatch({type:"fetch",meta:(F=g.fetchOptions)==null?void 0:F.meta})}return this.retryer=new le({fn:g.fetchFn,abort:p==null||(a=p.abort)==null?void 0:a.bind(p),onSuccess:function(b){n.setData(b),n.cache.config.onSuccess==null||n.cache.config.onSuccess(b,n),n.cacheTime===0&&n.optionalRemove()},onError:function(b){G(b)&&b.silent||n.dispatch({type:"error",error:b}),G(b)||(n.cache.config.onError==null||n.cache.config.onError(b,n),N().error(b)),n.cacheTime===0&&n.optionalRemove()},onFail:function(){n.dispatch({type:"failed"})},onPause:function(){n.dispatch({type:"pause"})},onContinue:function(){n.dispatch({type:"continue"})},retry:g.options.retry,retryDelay:g.options.retryDelay}),this.promise=this.retryer.promise,this.promise},r.dispatch=function(e){var t=this;this.state=this.reducer(this.state,e),m.batch(function(){t.observers.forEach(function(n){n.onQueryUpdate(e)}),t.cache.notify({query:t,type:"queryUpdated",action:e})})},r.getDefaultState=function(e){var t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof e.initialData<"u",o=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,s=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:s?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:s?"success":"idle"}},r.reducer=function(e,t){var n,o;switch(t.type){case"failed":return v({},e,{fetchFailureCount:e.fetchFailureCount+1});case"pause":return v({},e,{isPaused:!0});case"continue":return v({},e,{isPaused:!1});case"fetch":return v({},e,{fetchFailureCount:0,fetchMeta:(n=t.meta)!=null?n:null,isFetching:!0,isPaused:!1},!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return v({},e,{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var s=t.error;return G(s)&&s.revert&&this.revertState?v({},this.revertState):v({},e,{error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return v({},e,{isInvalidated:!0});case"setState":return v({},e,t.state);default:return e}},u}();var Ae=function(u){M(r,u);function r(e){var t;return t=u.call(this)||this,t.config=e||{},t.queries=[],t.queriesMap={},t}var i=r.prototype;return i.build=function(t,n,o){var s,a=n.queryKey,c=(s=n.queryHash)!=null?s:z(a,n),l=this.get(c);return l||(l=new qe({cache:this,queryKey:a,queryHash:c,options:t.defaultQueryOptions(n),state:o,defaultOptions:t.getQueryDefaults(a),meta:n.meta}),this.add(l)),l},i.add=function(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"queryAdded",query:t}))},i.remove=function(t){var n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(function(o){return o!==t}),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"queryRemoved",query:t}))},i.clear=function(){var t=this;m.batch(function(){t.queries.forEach(function(n){t.remove(n)})})},i.get=function(t){return this.queriesMap[t]},i.getAll=function(){return this.queries},i.find=function(t,n){var o=_(t,n),s=o[0];return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(function(a){return me(s,a)})},i.findAll=function(t,n){var o=_(t,n),s=o[0];return Object.keys(s).length>0?this.queries.filter(function(a){return me(s,a)}):this.queries},i.notify=function(t){var n=this;m.batch(function(){n.listeners.forEach(function(o){o(t)})})},i.onFocus=function(){var t=this;m.batch(function(){t.queries.forEach(function(n){n.onFocus()})})},i.onOnline=function(){var t=this;m.batch(function(){t.queries.forEach(function(n){n.onOnline()})})},r}(q);f();f();X();var we=function(){function u(i){this.options=v({},i.defaultOptions,i.options),this.mutationId=i.mutationId,this.mutationCache=i.mutationCache,this.observers=[],this.state=i.state||rt(),this.meta=i.meta}var r=u.prototype;return r.setState=function(e){this.dispatch({type:"setState",state:e})},r.addObserver=function(e){this.observers.indexOf(e)===-1&&this.observers.push(e)},r.removeObserver=function(e){this.observers=this.observers.filter(function(t){return t!==e})},r.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(C).catch(C)):Promise.resolve()},r.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},r.execute=function(){var e=this,t,n=this.state.status==="loading",o=Promise.resolve();return n||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){e.mutationCache.config.onMutate==null||e.mutationCache.config.onMutate(e.state.variables,e)}).then(function(){return e.options.onMutate==null?void 0:e.options.onMutate(e.state.variables)}).then(function(s){s!==e.state.context&&e.dispatch({type:"loading",context:s,variables:e.state.variables})})),o.then(function(){return e.executeMutation()}).then(function(s){t=s,e.mutationCache.config.onSuccess==null||e.mutationCache.config.onSuccess(t,e.state.variables,e.state.context,e)}).then(function(){return e.options.onSuccess==null?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)}).then(function(){return e.dispatch({type:"success",data:t}),t}).catch(function(s){return e.mutationCache.config.onError==null||e.mutationCache.config.onError(s,e.state.variables,e.state.context,e),N().error(s),Promise.resolve().then(function(){return e.options.onError==null?void 0:e.options.onError(s,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(void 0,s,e.state.variables,e.state.context)}).then(function(){throw e.dispatch({type:"error",error:s}),s})})},r.executeMutation=function(){var e=this,t;return this.retryer=new le({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:(t=this.options.retry)!=null?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},r.dispatch=function(e){var t=this;this.state=nt(this.state,e),m.batch(function(){t.observers.forEach(function(n){n.onMutationUpdate(e)}),t.mutationCache.notify(t)})},u}();function rt(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function nt(u,r){switch(r.type){case"failed":return v({},u,{failureCount:u.failureCount+1});case"pause":return v({},u,{isPaused:!0});case"continue":return v({},u,{isPaused:!1});case"loading":return v({},u,{context:r.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:r.variables});case"success":return v({},u,{data:r.data,error:null,status:"success",isPaused:!1});case"error":return v({},u,{data:void 0,error:r.error,failureCount:u.failureCount+1,isPaused:!1,status:"error"});case"setState":return v({},u,r.state);default:return u}}var De=function(u){M(r,u);function r(e){var t;return t=u.call(this)||this,t.config=e||{},t.mutations=[],t.mutationId=0,t}var i=r.prototype;return i.build=function(t,n,o){var s=new we({mutationCache:this,mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:o,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0,meta:n.meta});return this.add(s),s},i.add=function(t){this.mutations.push(t),this.notify(t)},i.remove=function(t){this.mutations=this.mutations.filter(function(n){return n!==t}),t.cancel(),this.notify(t)},i.clear=function(){var t=this;m.batch(function(){t.mutations.forEach(function(n){t.remove(n)})})},i.getAll=function(){return this.mutations},i.find=function(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(function(n){return be(t,n)})},i.findAll=function(t){return this.mutations.filter(function(n){return be(t,n)})},i.notify=function(t){var n=this;m.batch(function(){n.listeners.forEach(function(o){o(t)})})},i.onFocus=function(){this.resumePausedMutations()},i.onOnline=function(){this.resumePausedMutations()},i.resumePausedMutations=function(){var t=this.mutations.filter(function(n){return n.state.isPaused});return m.batch(function(){return t.reduce(function(n,o){return n.then(function(){return o.continue().catch(C)})},Promise.resolve())})},r}(q);f();function Ie(){return{onFetch:function(r){r.fetchFn=function(){var i,e,t,n,o,s,a=(i=r.fetchOptions)==null||(e=i.meta)==null?void 0:e.refetchPage,c=(t=r.fetchOptions)==null||(n=t.meta)==null?void 0:n.fetchMore,l=c==null?void 0:c.pageParam,y=(c==null?void 0:c.direction)==="forward",p=(c==null?void 0:c.direction)==="backward",h=((o=r.state.data)==null?void 0:o.pages)||[],d=((s=r.state.data)==null?void 0:s.pageParams)||[],g=fe(),P=g==null?void 0:g.signal,F=d,Q=!1,b=r.options.queryFn||function(){return Promise.reject("Missing queryFn")},A=function(D,j,E,J){return F=J?[j].concat(F):[].concat(F,[j]),J?[E].concat(D):[].concat(D,[E])},w=function(D,j,E,J){if(Q)return Promise.reject("Cancelled");if(typeof E>"u"&&!j&&D.length)return Promise.resolve(D);var U={queryKey:r.queryKey,signal:P,pageParam:E,meta:r.meta},L=b(U),se=Promise.resolve(L).then(function(We){return A(D,E,We,J)});if(re(L)){var pe=se;pe.cancel=L.cancel}return se},x;if(!h.length)x=w([]);else if(y){var W=typeof l<"u",he=W?l:Ue(r.options,h);x=w(h,W,he)}else if(p){var ie=typeof l<"u",ue=ie?l:it(r.options,h);x=w(h,ie,ue,!0)}else(function(){F=[];var R=typeof r.options.getNextPageParam>"u",D=a&&h[0]?a(h[0],0,h):!0;x=D?w([],R,d[0]):Promise.resolve(A([],d[0],h[0]));for(var j=function(U){x=x.then(function(L){var se=a&&h[U]?a(h[U],U,h):!0;if(se){var pe=R?d[U]:Ue(r.options,L);return w(L,R,pe)}return Promise.resolve(A(L,d[U],h[U]))})},E=1;E<h.length;E++)j(E)})();var S=x.then(function(R){return{pages:R,pageParams:F}}),de=S;return de.cancel=function(){Q=!0,g==null||g.abort(),re(x)&&x.cancel()},S}}}}function Ue(u,r){return u.getNextPageParam==null?void 0:u.getNextPageParam(r[r.length-1],r)}function it(u,r){return u.getPreviousPageParam==null?void 0:u.getPreviousPageParam(r[0],r)}var ut=function(){function u(i){i===void 0&&(i={}),this.queryCache=i.queryCache||new Ae,this.mutationCache=i.mutationCache||new De,this.defaultOptions=i.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var r=u.prototype;return r.mount=function(){var e=this;this.unsubscribeFocus=T.subscribe(function(){T.isFocused()&&k.isOnline()&&(e.mutationCache.onFocus(),e.queryCache.onFocus())}),this.unsubscribeOnline=k.subscribe(function(){T.isFocused()&&k.isOnline()&&(e.mutationCache.onOnline(),e.queryCache.onOnline())})},r.unmount=function(){var e,t;(e=this.unsubscribeFocus)==null||e.call(this),(t=this.unsubscribeOnline)==null||t.call(this)},r.isFetching=function(e,t){var n=_(e,t),o=n[0];return o.fetching=!0,this.queryCache.findAll(o).length},r.isMutating=function(e){return this.mutationCache.findAll(v({},e,{fetching:!0})).length},r.getQueryData=function(e,t){var n;return(n=this.queryCache.find(e,t))==null?void 0:n.state.data},r.getQueriesData=function(e){return this.getQueryCache().findAll(e).map(function(t){var n=t.queryKey,o=t.state,s=o.data;return[n,s]})},r.setQueryData=function(e,t,n){var o=B(e),s=this.defaultQueryOptions(o);return this.queryCache.build(this,s).setData(t,n)},r.setQueriesData=function(e,t,n){var o=this;return m.batch(function(){return o.getQueryCache().findAll(e).map(function(s){var a=s.queryKey;return[a,o.setQueryData(a,t,n)]})})},r.getQueryState=function(e,t){var n;return(n=this.queryCache.find(e,t))==null?void 0:n.state},r.removeQueries=function(e,t){var n=_(e,t),o=n[0],s=this.queryCache;m.batch(function(){s.findAll(o).forEach(function(a){s.remove(a)})})},r.resetQueries=function(e,t,n){var o=this,s=_(e,t,n),a=s[0],c=s[1],l=this.queryCache,y=v({},a,{active:!0});return m.batch(function(){return l.findAll(a).forEach(function(p){p.reset()}),o.refetchQueries(y,c)})},r.cancelQueries=function(e,t,n){var o=this,s=_(e,t,n),a=s[0],c=s[1],l=c===void 0?{}:c;typeof l.revert>"u"&&(l.revert=!0);var y=m.batch(function(){return o.queryCache.findAll(a).map(function(p){return p.cancel(l)})});return Promise.all(y).then(C).catch(C)},r.invalidateQueries=function(e,t,n){var o,s,a,c=this,l=_(e,t,n),y=l[0],p=l[1],h=v({},y,{active:(o=(s=y.refetchActive)!=null?s:y.active)!=null?o:!0,inactive:(a=y.refetchInactive)!=null?a:!1});return m.batch(function(){return c.queryCache.findAll(y).forEach(function(d){d.invalidate()}),c.refetchQueries(h,p)})},r.refetchQueries=function(e,t,n){var o=this,s=_(e,t,n),a=s[0],c=s[1],l=m.batch(function(){return o.queryCache.findAll(a).map(function(p){return p.fetch(void 0,v({},c,{meta:{refetchPage:a==null?void 0:a.refetchPage}}))})}),y=Promise.all(l).then(C);return(c==null?void 0:c.throwOnError)||(y=y.catch(C)),y},r.fetchQuery=function(e,t,n){var o=B(e,t,n),s=this.defaultQueryOptions(o);typeof s.retry>"u"&&(s.retry=!1);var a=this.queryCache.build(this,s);return a.isStaleByTime(s.staleTime)?a.fetch(s):Promise.resolve(a.state.data)},r.prefetchQuery=function(e,t,n){return this.fetchQuery(e,t,n).then(C).catch(C)},r.fetchInfiniteQuery=function(e,t,n){var o=B(e,t,n);return o.behavior=Ie(),this.fetchQuery(o)},r.prefetchInfiniteQuery=function(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(C).catch(C)},r.cancelMutations=function(){var e=this,t=m.batch(function(){return e.mutationCache.getAll().map(function(n){return n.cancel()})});return Promise.all(t).then(C).catch(C)},r.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},r.executeMutation=function(e){return this.mutationCache.build(this,e).execute()},r.getQueryCache=function(){return this.queryCache},r.getMutationCache=function(){return this.mutationCache},r.getDefaultOptions=function(){return this.defaultOptions},r.setDefaultOptions=function(e){this.defaultOptions=e},r.setQueryDefaults=function(e,t){var n=this.queryDefaults.find(function(o){return I(e)===I(o.queryKey)});n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})},r.getQueryDefaults=function(e){var t;return e?(t=this.queryDefaults.find(function(n){return ee(e,n.queryKey)}))==null?void 0:t.defaultOptions:void 0},r.setMutationDefaults=function(e,t){var n=this.mutationDefaults.find(function(o){return I(e)===I(o.mutationKey)});n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})},r.getMutationDefaults=function(e){var t;return e?(t=this.mutationDefaults.find(function(n){return ee(e,n.mutationKey)}))==null?void 0:t.defaultOptions:void 0},r.defaultQueryOptions=function(e){if(e==null?void 0:e._defaulted)return e;var t=v({},this.defaultOptions.queries,this.getQueryDefaults(e==null?void 0:e.queryKey),e,{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=z(t.queryKey,t)),t},r.defaultQueryObserverOptions=function(e){return this.defaultQueryOptions(e)},r.defaultMutationOptions=function(e){return(e==null?void 0:e._defaulted)?e:v({},this.defaultOptions.mutations,this.getMutationDefaults(e==null?void 0:e.mutationKey),e,{_defaulted:!0})},r.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},u}();f();f();X();var Ce=function(u){M(r,u);function r(e,t){var n;return n=u.call(this)||this,n.client=e,n.options=t,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(t),n}var i=r.prototype;return i.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},i.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Te(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.shouldFetchOnReconnect=function(){return at(this.currentQuery,this.options)},i.shouldFetchOnWindowFocus=function(){return ct(this.currentQuery,this.options)},i.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},i.setOptions=function(t,n){var o=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var a=this.hasListeners();a&&Ke(this.currentQuery,s,this.options,o)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==s||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var c=this.computeRefetchInterval();a&&(this.currentQuery!==s||this.options.enabled!==o.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)},i.getOptimisticResult=function(t){var n=this.client.defaultQueryObserverOptions(t),o=this.client.getQueryCache().build(this.client,n);return this.createResult(o,n)},i.getCurrentResult=function(){return this.currentResult},i.trackResult=function(t,n){var o=this,s={},a=function(l){o.trackedProps.includes(l)||o.trackedProps.push(l)};return Object.keys(t).forEach(function(c){Object.defineProperty(s,c,{configurable:!1,enumerable:!0,get:function(){return a(c),t[c]}})}),(n.useErrorBoundary||n.suspense)&&a("error"),s},i.getNextResult=function(t){var n=this;return new Promise(function(o,s){var a=n.subscribe(function(c){c.isFetching||(a(),c.isError&&(t==null?void 0:t.throwOnError)?s(c.error):o(c))})})},i.getCurrentQuery=function(){return this.currentQuery},i.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},i.refetch=function(t){return this.fetch(v({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},i.fetchOptimistic=function(t){var n=this,o=this.client.defaultQueryObserverOptions(t),s=this.client.getQueryCache().build(this.client,o);return s.fetch().then(function(){return n.createResult(s,o)})},i.fetch=function(t){var n=this;return this.executeFetch(t).then(function(){return n.updateResult(),n.currentResult})},i.executeFetch=function(t){this.updateQuery();var n=this.currentQuery.fetch(this.options,t);return(t==null?void 0:t.throwOnError)||(n=n.catch(C)),n},i.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!($||this.currentResult.isStale||!Z(this.options.staleTime))){var n=ae(this.currentResult.dataUpdatedAt,this.options.staleTime),o=n+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},o)}},i.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},i.updateRefetchInterval=function(t){var n=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!($||this.options.enabled===!1||!Z(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(n.options.refetchIntervalInBackground||T.isFocused())&&n.executeFetch()},this.currentRefetchInterval))},i.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},i.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},i.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},i.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},i.createResult=function(t,n){var o=this.currentQuery,s=this.options,a=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,y=t!==o,p=y?t.state:this.currentQueryInitialState,h=y?this.currentResult:this.previousQueryResult,d=t.state,g=d.dataUpdatedAt,P=d.error,F=d.errorUpdatedAt,Q=d.isFetching,b=d.status,A=!1,w=!1,x;if(n.optimisticResults){var W=this.hasListeners(),he=!W&&Te(t,n),ie=W&&Ke(t,o,n,s);(he||ie)&&(Q=!0,g||(b="loading"))}if(n.keepPreviousData&&!d.dataUpdateCount&&(h==null?void 0:h.isSuccess)&&b!=="error")x=h.data,g=h.dataUpdatedAt,b=h.status,A=!0;else if(n.select&&typeof d.data<"u"){var ue;if(a&&d.data===(c==null?void 0:c.data)&&n.select===((ue=this.previousSelect)==null?void 0:ue.fn)&&!this.previousSelectError)x=this.previousSelect.result;else try{x=n.select(d.data),n.structuralSharing!==!1&&(x=H(a==null?void 0:a.data,x)),this.previousSelect={fn:n.select,result:x},this.previousSelectError=null}catch(R){N().error(R),P=R,this.previousSelectError=R,F=Date.now(),b="error"}}else x=d.data;if(typeof n.placeholderData<"u"&&typeof x>"u"&&(b==="loading"||b==="idle")){var S;if((a==null?void 0:a.isPlaceholderData)&&n.placeholderData===(l==null?void 0:l.placeholderData))S=a.data;else if(S=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof S<"u")try{S=n.select(S),n.structuralSharing!==!1&&(S=H(a==null?void 0:a.data,S)),this.previousSelectError=null}catch(R){N().error(R),P=R,this.previousSelectError=R,F=Date.now(),b="error"}typeof S<"u"&&(b="success",x=S,w=!0)}var de={status:b,isLoading:b==="loading",isSuccess:b==="success",isError:b==="error",isIdle:b==="idle",data:x,dataUpdatedAt:g,error:P,errorUpdatedAt:F,failureCount:d.fetchFailureCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>p.dataUpdateCount||d.errorUpdateCount>p.errorUpdateCount,isFetching:Q,isRefetching:Q&&b!=="loading",isLoadingError:b==="error"&&d.dataUpdatedAt===0,isPlaceholderData:w,isPreviousData:A,isRefetchError:b==="error"&&d.dataUpdatedAt!==0,isStale:ne(t,n),refetch:this.refetch,remove:this.remove};return de},i.shouldNotifyListeners=function(t,n){if(!n)return!0;var o=this.options,s=o.notifyOnChangeProps,a=o.notifyOnChangePropsExclusions;if(!s&&!a||s==="tracked"&&!this.trackedProps.length)return!0;var c=s==="tracked"?this.trackedProps:s;return Object.keys(t).some(function(l){var y=l,p=t[y]!==n[y],h=c==null?void 0:c.some(function(g){return g===l}),d=a==null?void 0:a.some(function(g){return g===l});return p&&!d&&(!c||h)})},i.updateResult=function(t){var n=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Se(this.currentResult,n)){var o={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,n)&&(o.listeners=!0),this.notify(v({},o,t))}},i.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}},i.onQueryUpdate=function(t){var n={};t.type==="success"?n.onSuccess=!0:t.type==="error"&&!G(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()},i.notify=function(t){var n=this;m.batch(function(){t.onSuccess?(n.options.onSuccess==null||n.options.onSuccess(n.currentResult.data),n.options.onSettled==null||n.options.onSettled(n.currentResult.data,null)):t.onError&&(n.options.onError==null||n.options.onError(n.currentResult.error),n.options.onSettled==null||n.options.onSettled(void 0,n.currentResult.error)),t.listeners&&n.listeners.forEach(function(o){o(n.currentResult)}),t.cache&&n.client.getQueryCache().notify({query:n.currentQuery,type:"observerResultsUpdated"})})},r}(q);function st(u,r){return r.enabled!==!1&&!u.state.dataUpdatedAt&&!(u.state.status==="error"&&r.retryOnMount===!1)}function ot(u,r){return r.enabled!==!1&&u.state.dataUpdatedAt>0&&(r.refetchOnMount==="always"||r.refetchOnMount!==!1&&ne(u,r))}function Te(u,r){return st(u,r)||ot(u,r)}function at(u,r){return r.enabled!==!1&&(r.refetchOnReconnect==="always"||r.refetchOnReconnect!==!1&&ne(u,r))}function ct(u,r){return r.enabled!==!1&&(r.refetchOnWindowFocus==="always"||r.refetchOnWindowFocus!==!1&&ne(u,r))}function Ke(u,r,i,e){return i.enabled!==!1&&(u!==r||e.enabled===!1)&&(!i.suspense||u.state.status!=="error")&&ne(u,i)}function ne(u,r){return u.isStaleByTime(r.staleTime)}f();var K=oe(ve()),Le=K.default.createContext(void 0),$e=K.default.createContext(!1);function Ne(u){return u&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Le),window.ReactQueryClientContext):Le}var xe=function(){var r=K.default.useContext(Ne(K.default.useContext($e)));if(!r)throw new Error("No QueryClient set, use QueryClientProvider to set one");return r},ft=function(r){var i=r.client,e=r.contextSharing,t=e===void 0?!1:e,n=r.children;K.default.useEffect(function(){return i.mount(),function(){i.unmount()}},[i]);var o=Ne(t);return K.default.createElement($e.Provider,{value:t},K.default.createElement(o.Provider,{value:i},n))};f();f();f();var je=oe(Je()),Be=je.default.unstable_batchedUpdates;m.setBatchNotifyFunction(Be);f();f();var He=console;Oe(He);f();var Qe=oe(ve());function lt(){var u=!1;return{clearReset:function(){u=!1},reset:function(){u=!0},isReset:function(){return u}}}var ht=Qe.default.createContext(lt()),ke=function(){return Qe.default.useContext(ht)};f();function Ge(u,r,i){return typeof r=="function"?r.apply(void 0,i):typeof r=="boolean"?r:!!u}f();f();var V=oe(ve());function Ve(u,r){var i=V.default.useRef(!1),e=V.default.useState(0),t=e[1],n=xe(),o=ke(),s=n.defaultQueryObserverOptions(u);s.optimisticResults=!0,s.onError&&(s.onError=m.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=m.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=m.batchCalls(s.onSettled)),s.suspense&&(typeof s.staleTime!="number"&&(s.staleTime=1e3),s.cacheTime===0&&(s.cacheTime=1)),(s.suspense||s.useErrorBoundary)&&(o.isReset()||(s.retryOnMount=!1));var a=V.default.useState(function(){return new r(n,s)}),c=a[0],l=c.getOptimisticResult(s);if(V.default.useEffect(function(){i.current=!0,o.clearReset();var y=c.subscribe(m.batchCalls(function(){i.current&&t(function(p){return p+1})}));return c.updateResult(),function(){i.current=!1,y()}},[o,c]),V.default.useEffect(function(){c.setOptions(s,{listeners:!1})},[s,c]),s.suspense&&l.isLoading)throw c.fetchOptimistic(s).then(function(y){var p=y.data;s.onSuccess==null||s.onSuccess(p),s.onSettled==null||s.onSettled(p,null)}).catch(function(y){o.clearReset(),s.onError==null||s.onError(y),s.onSettled==null||s.onSettled(void 0,y)});if(l.isError&&!o.isReset()&&!l.isFetching&&Ge(s.suspense,s.useErrorBoundary,[l.error,c.getCurrentQuery()]))throw l.error;return s.notifyOnChangeProps==="tracked"&&(l=c.trackResult(l,s)),l}function dt(u,r,i){var e=B(u,r,i);return Ve(e,Ce)}f();export{ut as a,ft as b,dt as c};