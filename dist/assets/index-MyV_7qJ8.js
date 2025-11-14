(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=t(l);fetch(l.href,u)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ho={exports:{}},el={},Qo={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ti=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ti&&e[Ti]||e["@@iterator"],typeof e=="function"?e:null)}var Go={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ko=Object.assign,Yo={};function ut(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Go}ut.prototype.isReactComponent={};ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=ut.prototype;function Ru(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Go}var Mu=Ru.prototype=new Zo;Mu.constructor=Ru;Ko(Mu,ut.prototype);Mu.isPureReactComponent=!0;var Di=Array.isArray,Jo=Object.prototype.hasOwnProperty,Wu={current:null},bo={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,l={},u=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(u=""+n.key),n)Jo.call(n,r)&&!bo.hasOwnProperty(r)&&(l[r]=n[r]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Gt,type:e,key:u,ref:i,props:l,_owner:Wu.current}}function yc(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function wc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ai=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):n.toString(36)}function vr(e,n,t,r,l){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gt:case sc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+yl(i,0):r,Di(l)?(t="",e!=null&&(t=e.replace(Ai,"$&/")+"/"),vr(l,n,t,"",function(c){return c})):l!=null&&(Iu(l)&&(l=yc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ai,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Di(e))for(var o=0;o<e.length;o++){u=e[o];var s=r+yl(u,o);i+=vr(u,n,t,s,l)}else if(s=vc(e),typeof s=="function")for(e=s.call(e),o=0;!(u=e.next()).done;)u=u.value,s=r+yl(u,o++),i+=vr(u,n,t,s,l);else if(u==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,n,t){if(e==null)return e;var r=[],l=0;return vr(e,r,"","",function(u){return n.call(t,u,l++)}),r}function kc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},yr={transition:null},Cc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:yr,ReactCurrentOwner:Wu};function ns(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=ut;F.Fragment=ac;F.Profiler=Xc;F.PureComponent=Ru;F.StrictMode=cc;F.Suspense=mc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;F.act=ns;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ko({},e.props),l=e.key,u=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(u=n.ref,i=Wu.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)Jo.call(n,s)&&!bo.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Gt,type:e.type,key:l,ref:u,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};F.createElement=es;F.createFactory=function(e){var n=es.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:pc,render:e}};F.isValidElement=Iu;F.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:kc}};F.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=yr.transition;yr.transition={};try{e()}finally{yr.transition=n}};F.unstable_act=ns;F.useCallback=function(e,n){return oe.current.useCallback(e,n)};F.useContext=function(e){return oe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};F.useEffect=function(e,n){return oe.current.useEffect(e,n)};F.useId=function(){return oe.current.useId()};F.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return oe.current.useMemo(e,n)};F.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};F.useRef=function(e){return oe.current.useRef(e)};F.useState=function(e){return oe.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return oe.current.useTransition()};F.version="18.3.1";Qo.exports=F;var Be=Qo.exports;const _c=oc(Be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Be,xc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Pc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,n,t){var r,l={},u=null,i=null;t!==void 0&&(u=""+t),n.key!==void 0&&(u=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)jc.call(n,r)&&!Nc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:xc,type:e,key:u,ref:i,props:l,_owner:Pc.current}}el.Fragment=Sc;el.jsx=ts;el.jsxs=ts;Ho.exports=el;var y=Ho.exports,rs={exports:{}},ve={},ls={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,P){var N=E.length;E.push(P);e:for(;0<N;){var q=N-1>>>1,K=E[q];if(0<l(K,P))E[q]=P,E[N]=K,N=q;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],N=E.pop();if(N!==P){E[0]=N;e:for(var q=0,K=E.length,bt=K>>>1;q<bt;){var gn=2*(q+1)-1,vl=E[gn],vn=gn+1,er=E[vn];if(0>l(vl,N))vn<K&&0>l(er,vl)?(E[q]=er,E[vn]=N,q=vn):(E[q]=vl,E[gn]=N,q=gn);else if(vn<K&&0>l(er,N))E[q]=er,E[vn]=N,q=vn;else break e}}return P}function l(E,P){var N=E.sortIndex-P.sortIndex;return N!==0?N:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var s=[],c=[],m=1,p=null,d=3,v=!1,w=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var P=t(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=E)r(c),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(c)}}function h(E){if(k=!1,f(E),!w)if(t(s)!==null)w=!0,hl(_);else{var P=t(c);P!==null&&gl(h,P.startTime-E)}}function _(E,P){w=!1,k&&(k=!1,X(j),j=-1),v=!0;var N=d;try{for(f(P),p=t(s);p!==null&&(!(p.expirationTime>P)||E&&!Se());){var q=p.callback;if(typeof q=="function"){p.callback=null,d=p.priorityLevel;var K=q(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===t(s)&&r(s),f(P)}else r(s);p=t(s)}if(p!==null)var bt=!0;else{var gn=t(c);gn!==null&&gl(h,gn.startTime-P),bt=!1}return bt}finally{p=null,d=N,v=!1}}var x=!1,S=null,j=-1,$=5,B=-1;function Se(){return!(e.unstable_now()-B<$)}function st(){if(S!==null){var E=e.unstable_now();B=E;var P=!0;try{P=S(!0,E)}finally{P?at():(x=!1,S=null)}}else x=!1}var at;if(typeof a=="function")at=function(){a(st)};else if(typeof MessageChannel<"u"){var Li=new MessageChannel,ic=Li.port2;Li.port1.onmessage=st,at=function(){ic.postMessage(null)}}else at=function(){O(st,0)};function hl(E){S=E,x||(x=!0,at())}function gl(E,P){j=O(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,hl(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var N=d;d=P;try{return E()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=d;d=E;try{return P()}finally{d=N}},e.unstable_scheduleCallback=function(E,P,N){var q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,E={id:m++,callback:P,priorityLevel:E,startTime:N,expirationTime:K,sortIndex:-1},N>q?(E.sortIndex=N,n(c,E),t(s)===null&&E===t(c)&&(k?(X(j),j=-1):k=!0,gl(h,N-q))):(E.sortIndex=K,n(s,E),w||v||(w=!0,hl(_))),E},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(E){var P=d;return function(){var N=d;d=P;try{return E.apply(this,arguments)}finally{d=N}}}})(us);ls.exports=us;var Fc=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=Be,ge=Fc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,Bt={};function Bn(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Bt[e]=n,e=0;e<n.length;e++)is.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oi={},Ri={};function Lc(e){return Hl.call(Ri,e)?!0:Hl.call(Oi,e)?!1:zc.test(e)?Ri[e]=!0:(Oi[e]=!0,!1)}function Tc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,n,t,r){if(n===null||typeof n>"u"||Tc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,l,u,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uu=/[\-:]([a-z])/g;function $u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Uu,$u);ee[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Uu,$u);ee[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Uu,$u);ee[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function qu(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dc(n,t,l,r)&&(t=null),r||l===null?Lc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),os=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Mi=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Mi&&e[Mi]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,wl;function vt(e){if(wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wl=n&&n[1]||""}return`
`+wl+e}var kl=!1;function Cl(e,n){if(!e||kl)return"";kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),u=r.stack.split(`
`),i=l.length-1,o=u.length-1;1<=i&&0<=o&&l[i]!==u[o];)o--;for(;1<=i&&0<=o;i--,o--)if(l[i]!==u[o]){if(i!==1||o!==1)do if(i--,o--,0>o||l[i]!==u[o]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=o);break}}}finally{kl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function Ac(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Tn:return"Portal";case Ql:return"Profiler";case Vu:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case os:return(e._context.displayName||"Context")+".Provider";case Hu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qu:return n=e.displayName||null,n!==null?n:Yl(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return Yl(e(n))}catch{}}return null}function Oc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(n);case 8:return n===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rc(e){var n=cs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,u=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,u.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Rc(e))}function Xs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fs(e,n){n=n.checked,n!=null&&qu(e,"checked",n,!1)}function Jl(e,n){fs(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bl(e,n.type,t):n.hasOwnProperty("defaultValue")&&bl(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ii(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function bl(e,n,t){(n!=="number"||Fr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yt=Array.isArray;function Hn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function eu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ui(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(yt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function ds(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $i(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mc=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(e){Mc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ct[n]=Ct[e]})});function hs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ct.hasOwnProperty(e)&&Ct[e]?(""+n).trim():n+"px"}function gs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=hs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Wc=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,n){if(n){if(Wc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function ru(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uu=null,Qn=null,Gn=null;function qi(e){if(e=Zt(e)){if(typeof uu!="function")throw Error(g(280));var n=e.stateNode;n&&(n=ul(n),uu(e.stateNode,e.type,n))}}function vs(e){Qn?Gn?Gn.push(e):Gn=[e]:Qn=e}function ys(){if(Qn){var e=Qn,n=Gn;if(Gn=Qn=null,qi(e),n)for(e=0;e<n.length;e++)qi(n[e])}}function ws(e,n){return e(n)}function ks(){}var _l=!1;function Cs(e,n,t){if(_l)return e(n,t);_l=!0;try{return ws(e,n,t)}finally{_l=!1,(Qn!==null||Gn!==null)&&(ks(),ys())}}function Lt(e,n){var t=e.stateNode;if(t===null)return null;var r=ul(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var iu=!1;if(Ve)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{iu=!1}function Ic(e,n,t,r,l,u,i,o,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var _t=!1,Br=null,zr=!1,ou=null,Uc={onError:function(e){_t=!0,Br=e}};function $c(e,n,t,r,l,u,i,o,s){_t=!1,Br=null,Ic.apply(Uc,arguments)}function qc(e,n,t,r,l,u,i,o,s){if($c.apply(this,arguments),_t){if(_t){var c=Br;_t=!1,Br=null}else throw Error(g(198));zr||(zr=!0,ou=c)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _s(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Vi(e){if(zn(e)!==e)throw Error(g(188))}function Vc(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return Vi(l),e;if(u===r)return Vi(l),n;u=u.sibling}throw Error(g(188))}if(t.return!==r.return)t=l,r=u;else{for(var i=!1,o=l.child;o;){if(o===t){i=!0,t=l,r=u;break}if(o===r){i=!0,r=l,t=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===t){i=!0,t=u,r=l;break}if(o===r){i=!0,r=u,t=l;break}o=o.sibling}if(!i)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Es(e){return e=Vc(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xs(e);if(n!==null)return n;e=e.sibling}return null}var Ss=ge.unstable_scheduleCallback,Hi=ge.unstable_cancelCallback,Hc=ge.unstable_shouldYield,Qc=ge.unstable_requestPaint,V=ge.unstable_now,Gc=ge.unstable_getCurrentPriorityLevel,Ku=ge.unstable_ImmediatePriority,js=ge.unstable_UserBlockingPriority,Lr=ge.unstable_NormalPriority,Kc=ge.unstable_LowPriority,Ps=ge.unstable_IdlePriority,nl=null,Re=null;function Yc(e){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:bc,Zc=Math.log,Jc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var ur=64,ir=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,u=e.pingedLanes,i=t&268435455;if(i!==0){var o=i&~l;o!==0?r=wt(o):(u&=i,u!==0&&(r=wt(u)))}else i=t&~l,i!==0?r=wt(i):u!==0&&(r=wt(u));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,u=n&-n,l>=u||l===16&&(u&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ze(n),l=1<<t,r|=e[t],n&=~l;return r}function eX(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nX(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var i=31-ze(u),o=1<<i,s=l[i];s===-1?(!(o&t)||o&r)&&(l[i]=eX(o,n)):s<=n&&(e.expiredLanes|=o),u&=~o}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function El(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ze(n),e[n]=t}function tX(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-ze(t),u=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~u}}function Yu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ze(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var L=0;function Fs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bs,Zu,zs,Ls,Ts,au=!1,or=[],rn=null,ln=null,un=null,Tt=new Map,Dt=new Map,be=[],rX="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Tt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(n.pointerId)}}function ft(e,n,t,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&Zu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function lX(e,n,t,r,l){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,l),!0;case"dragenter":return ln=ft(ln,e,n,t,r,l),!0;case"mouseover":return un=ft(un,e,n,t,r,l),!0;case"pointerover":var u=l.pointerId;return Tt.set(u,ft(Tt.get(u)||null,e,n,t,r,l)),!0;case"gotpointercapture":return u=l.pointerId,Dt.set(u,ft(Dt.get(u)||null,e,n,t,r,l)),!0}return!1}function Ds(e){var n=kn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=_s(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){zs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=cu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);lu=r,t.target.dispatchEvent(r),lu=null}else return n=Zt(t),n!==null&&Zu(n),e.blockedOn=t,!1;n.shift()}return!0}function Gi(e,n,t){wr(e)&&t.delete(n)}function uX(){au=!1,rn!==null&&wr(rn)&&(rn=null),ln!==null&&wr(ln)&&(ln=null),un!==null&&wr(un)&&(un=null),Tt.forEach(Gi),Dt.forEach(Gi)}function dt(e,n){e.blockedOn===n&&(e.blockedOn=null,au||(au=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,uX)))}function At(e){function n(l){return dt(l,e)}if(0<or.length){dt(or[0],e);for(var t=1;t<or.length;t++){var r=or[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&dt(rn,e),ln!==null&&dt(ln,e),un!==null&&dt(un,e),Tt.forEach(n),Dt.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Ds(t),t.blockedOn===null&&be.shift()}var Kn=Ke.ReactCurrentBatchConfig,Dr=!0;function iX(e,n,t,r){var l=L,u=Kn.transition;Kn.transition=null;try{L=1,Ju(e,n,t,r)}finally{L=l,Kn.transition=u}}function oX(e,n,t,r){var l=L,u=Kn.transition;Kn.transition=null;try{L=4,Ju(e,n,t,r)}finally{L=l,Kn.transition=u}}function Ju(e,n,t,r){if(Dr){var l=cu(e,n,t,r);if(l===null)Tl(e,n,r,Ar,t),Qi(e,r);else if(lX(l,e,n,t,r))r.stopPropagation();else if(Qi(e,r),n&4&&-1<rX.indexOf(e)){for(;l!==null;){var u=Zt(l);if(u!==null&&Bs(u),u=cu(e,n,t,r),u===null&&Tl(e,n,r,Ar,t),u===l)break;l=u}l!==null&&r.stopPropagation()}else Tl(e,n,r,null,t)}}var Ar=null;function cu(e,n,t,r){if(Ar=null,e=Gu(r),e=kn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_s(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ar=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case Ku:return 1;case js:return 4;case Lr:case Kc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var nn=null,bu=null,kr=null;function Os(){if(kr)return kr;var e,n=bu,t=n.length,r,l="value"in nn?nn.value:nn.textContent,u=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[u-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ki(){return!1}function ye(e){function n(t,r,l,u,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?sr:Ki,this.isPropagationStopped=Ki,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=ye(it),Yt=I({},it,{view:0,detail:0}),sX=ye(Yt),xl,Sl,pt,tl=I({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(xl=e.screenX-pt.screenX,Sl=e.screenY-pt.screenY):Sl=xl=0,pt=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Yi=ye(tl),aX=I({},tl,{dataTransfer:0}),cX=ye(aX),XX=I({},Yt,{relatedTarget:0}),jl=ye(XX),fX=I({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),dX=ye(fX),pX=I({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mX=ye(pX),hX=I({},it,{data:0}),Zi=ye(hX),gX={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vX={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yX={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wX(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yX[e])?!!n[e]:!1}function ni(){return wX}var kX=I({},Yt,{key:function(e){if(e.key){var n=gX[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vX[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CX=ye(kX),_X=I({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ji=ye(_X),EX=I({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),xX=ye(EX),SX=I({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),jX=ye(SX),PX=I({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NX=ye(PX),FX=[9,13,27,32],ti=Ve&&"CompositionEvent"in window,Et=null;Ve&&"documentMode"in document&&(Et=document.documentMode);var BX=Ve&&"TextEvent"in window&&!Et,Rs=Ve&&(!ti||Et&&8<Et&&11>=Et),bi=" ",eo=!1;function Ms(e,n){switch(e){case"keyup":return FX.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function zX(e,n){switch(e){case"compositionend":return Ws(n);case"keypress":return n.which!==32?null:(eo=!0,bi);case"textInput":return e=n.data,e===bi&&eo?null:e;default:return null}}function LX(e,n){if(An)return e==="compositionend"||!ti&&Ms(e,n)?(e=Os(),kr=bu=nn=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rs&&n.locale!=="ko"?null:n.data;default:return null}}var TX={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!TX[e.type]:n==="textarea"}function Is(e,n,t,r){vs(r),n=Or(n,"onChange"),0<n.length&&(t=new ei("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xt=null,Ot=null;function DX(e){Js(e,0)}function rl(e){var n=Mn(e);if(Xs(n))return e}function AX(e,n){if(e==="change")return n}var Us=!1;if(Ve){var Pl;if(Ve){var Nl="oninput"in document;if(!Nl){var to=document.createElement("div");to.setAttribute("oninput","return;"),Nl=typeof to.oninput=="function"}Pl=Nl}else Pl=!1;Us=Pl&&(!document.documentMode||9<document.documentMode)}function ro(){xt&&(xt.detachEvent("onpropertychange",$s),Ot=xt=null)}function $s(e){if(e.propertyName==="value"&&rl(Ot)){var n=[];Is(n,Ot,e,Gu(e)),Cs(DX,n)}}function OX(e,n,t){e==="focusin"?(ro(),xt=n,Ot=t,xt.attachEvent("onpropertychange",$s)):e==="focusout"&&ro()}function RX(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Ot)}function MX(e,n){if(e==="click")return rl(n)}function WX(e,n){if(e==="input"||e==="change")return rl(n)}function IX(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Te=typeof Object.is=="function"?Object.is:IX;function Rt(e,n){if(Te(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Hl.call(n,l)||!Te(e[l],n[l]))return!1}return!0}function lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uo(e,n){var t=lo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lo(t)}}function qs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vs(){for(var e=window,n=Fr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Fr(e.document)}return n}function ri(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function UX(e){var n=Vs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(r!==null&&ri(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,u=Math.min(r.start,l);r=r.end===void 0?u:Math.min(r.end,l),!e.extend&&u>r&&(l=r,r=u,u=l),l=uo(t,u);var i=uo(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),u>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $X=Ve&&"documentMode"in document&&11>=document.documentMode,On=null,Xu=null,St=null,fu=!1;function io(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fu||On==null||On!==Fr(r)||(r=On,"selectionStart"in r&&ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),St&&Rt(St,r)||(St=r,r=Or(Xu,"onSelect"),0<r.length&&(n=new ei("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=On)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rn={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Fl={},Hs={};Ve&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ll(e){if(Fl[e])return Fl[e];if(!Rn[e])return e;var n=Rn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hs)return Fl[e]=n[t];return e}var Qs=ll("animationend"),Gs=ll("animationiteration"),Ks=ll("animationstart"),Ys=ll("transitionend"),Zs=new Map,oo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Zs.set(e,n),Bn(n,[e])}for(var Bl=0;Bl<oo.length;Bl++){var zl=oo[Bl],qX=zl.toLowerCase(),VX=zl[0].toUpperCase()+zl.slice(1);pn(qX,"on"+VX)}pn(Qs,"onAnimationEnd");pn(Gs,"onAnimationIteration");pn(Ks,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ys,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HX=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function so(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,qc(r,n,void 0,e),e.currentTarget=null}function Js(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var i=r.length-1;0<=i;i--){var o=r[i],s=o.instance,c=o.currentTarget;if(o=o.listener,s!==u&&l.isPropagationStopped())break e;so(l,o,c),u=s}else for(i=0;i<r.length;i++){if(o=r[i],s=o.instance,c=o.currentTarget,o=o.listener,s!==u&&l.isPropagationStopped())break e;so(l,o,c),u=s}}}if(zr)throw e=ou,zr=!1,ou=null,e}function D(e,n){var t=n[gu];t===void 0&&(t=n[gu]=new Set);var r=e+"__bubble";t.has(r)||(bs(n,e,2,!1),t.add(r))}function Ll(e,n,t){var r=0;n&&(r|=4),bs(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Mt(e){if(!e[cr]){e[cr]=!0,is.forEach(function(t){t!=="selectionchange"&&(HX.has(t)||Ll(t,!1,e),Ll(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Ll("selectionchange",!1,n))}}function bs(e,n,t,r){switch(As(n)){case 1:var l=iX;break;case 4:l=oX;break;default:l=Ju}t=l.bind(null,n,t,e),l=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Tl(e,n,t,r,l){var u=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;o!==null;){if(i=kn(o),i===null)return;if(s=i.tag,s===5||s===6){r=u=i;continue e}o=o.parentNode}}r=r.return}Cs(function(){var c=u,m=Gu(t),p=[];e:{var d=Zs.get(e);if(d!==void 0){var v=ei,w=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":v=CX;break;case"focusin":w="focus",v=jl;break;case"focusout":w="blur",v=jl;break;case"beforeblur":case"afterblur":v=jl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=cX;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xX;break;case Qs:case Gs:case Ks:v=dX;break;case Ys:v=jX;break;case"scroll":v=sX;break;case"wheel":v=NX;break;case"copy":case"cut":case"paste":v=mX;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ji}var k=(n&4)!==0,O=!k&&e==="scroll",X=k?d!==null?d+"Capture":null:d;k=[];for(var a=c,f;a!==null;){f=a;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,X!==null&&(h=Lt(a,X),h!=null&&k.push(Wt(a,h,f)))),O)break;a=a.return}0<k.length&&(d=new v(d,w,null,t,m),p.push({event:d,listeners:k}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&t!==lu&&(w=t.relatedTarget||t.fromElement)&&(kn(w)||w[He]))break e;if((v||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,v?(w=t.relatedTarget||t.toElement,v=c,w=w?kn(w):null,w!==null&&(O=zn(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=Yi,h="onMouseLeave",X="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ji,h="onPointerLeave",X="onPointerEnter",a="pointer"),O=v==null?d:Mn(v),f=w==null?d:Mn(w),d=new k(h,a+"leave",v,t,m),d.target=O,d.relatedTarget=f,h=null,kn(m)===c&&(k=new k(X,a+"enter",w,t,m),k.target=f,k.relatedTarget=O,h=k),O=h,v&&w)n:{for(k=v,X=w,a=0,f=k;f;f=Ln(f))a++;for(f=0,h=X;h;h=Ln(h))f++;for(;0<a-f;)k=Ln(k),a--;for(;0<f-a;)X=Ln(X),f--;for(;a--;){if(k===X||X!==null&&k===X.alternate)break n;k=Ln(k),X=Ln(X)}k=null}else k=null;v!==null&&ao(p,d,v,k,!1),w!==null&&O!==null&&ao(p,O,w,k,!0)}}e:{if(d=c?Mn(c):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var _=AX;else if(no(d))if(Us)_=WX;else{_=RX;var x=OX}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=MX);if(_&&(_=_(e,c))){Is(p,_,t,m);break e}x&&x(e,d,c),e==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&bl(d,"number",d.value)}switch(x=c?Mn(c):window,e){case"focusin":(no(x)||x.contentEditable==="true")&&(On=x,Xu=c,St=null);break;case"focusout":St=Xu=On=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,io(p,t,m);break;case"selectionchange":if($X)break;case"keydown":case"keyup":io(p,t,m)}var S;if(ti)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else An?Ms(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Rs&&t.locale!=="ko"&&(An||j!=="onCompositionStart"?j==="onCompositionEnd"&&An&&(S=Os()):(nn=m,bu="value"in nn?nn.value:nn.textContent,An=!0)),x=Or(c,j),0<x.length&&(j=new Zi(j,e,null,t,m),p.push({event:j,listeners:x}),S?j.data=S:(S=Ws(t),S!==null&&(j.data=S)))),(S=BX?zX(e,t):LX(e,t))&&(c=Or(c,"onBeforeInput"),0<c.length&&(m=new Zi("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=S))}Js(p,n)})}function Wt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Or(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Lt(e,t),u!=null&&r.unshift(Wt(e,u,l)),u=Lt(e,n),u!=null&&r.push(Wt(e,u,l))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ao(e,n,t,r,l){for(var u=n._reactName,i=[];t!==null&&t!==r;){var o=t,s=o.alternate,c=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&c!==null&&(o=c,l?(s=Lt(t,u),s!=null&&i.unshift(Wt(t,s,o))):l||(s=Lt(t,u),s!=null&&i.push(Wt(t,s,o)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var QX=/\r\n?/g,GX=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace(QX,`
`).replace(GX,"")}function Xr(e,n,t){if(n=co(n),co(e)!==n&&t)throw Error(g(425))}function Rr(){}var du=null,pu=null;function mu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,KX=typeof clearTimeout=="function"?clearTimeout:void 0,Xo=typeof Promise=="function"?Promise:void 0,YX=typeof queueMicrotask=="function"?queueMicrotask:typeof Xo<"u"?function(e){return Xo.resolve(null).then(e).catch(ZX)}:hu;function ZX(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),At(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);At(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ot=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ot,It="__reactProps$"+ot,He="__reactContainer$"+ot,gu="__reactEvents$"+ot,JX="__reactListeners$"+ot,bX="__reactHandles$"+ot;function kn(e){var n=e[Oe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[Oe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fo(e);e!==null;){if(t=e[Oe])return t;e=fo(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Oe]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ul(e){return e[It]||null}var vu=[],Wn=-1;function mn(e){return{current:e}}function A(e){0>Wn||(e.current=vu[Wn],vu[Wn]=null,Wn--)}function T(e,n){Wn++,vu[Wn]=e.current,e.current=n}var dn={},le=mn(dn),Xe=mn(!1),Sn=dn;function bn(e,n){var t=e.type.contextTypes;if(!t)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in t)l[u]=n[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Mr(){A(Xe),A(le)}function po(e,n,t){if(le.current!==dn)throw Error(g(168));T(le,n),T(Xe,t)}function ea(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(g(108,Oc(e)||"Unknown",l));return I({},t,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Sn=le.current,T(le,e),T(Xe,Xe.current),!0}function mo(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=ea(e,n,Sn),r.__reactInternalMemoizedMergedChildContext=e,A(Xe),A(le),T(le,e)):A(Xe),T(Xe,t)}var Ie=null,il=!1,Al=!1;function na(e){Ie===null?Ie=[e]:Ie.push(e)}function ef(e){il=!0,na(e)}function hn(){if(!Al&&Ie!==null){Al=!0;var e=0,n=L;try{var t=Ie;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ie=null,il=!1}catch(l){throw Ie!==null&&(Ie=Ie.slice(e+1)),Ss(Ku,hn),l}finally{L=n,Al=!1}}return null}var In=[],Un=0,Ir=null,Ur=0,we=[],ke=0,jn=null,Ue=1,$e="";function yn(e,n){In[Un++]=Ur,In[Un++]=Ir,Ir=e,Ur=n}function ta(e,n,t){we[ke++]=Ue,we[ke++]=$e,we[ke++]=jn,jn=e;var r=Ue;e=$e;var l=32-ze(r)-1;r&=~(1<<l),t+=1;var u=32-ze(n)+l;if(30<u){var i=l-l%5;u=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ue=1<<32-ze(n)+l|t<<l|r,$e=u+e}else Ue=1<<u|t<<l|r,$e=e}function li(e){e.return!==null&&(yn(e,1),ta(e,1,0))}function ui(e){for(;e===Ir;)Ir=In[--Un],In[Un]=null,Ur=In[--Un],In[Un]=null;for(;e===jn;)jn=we[--ke],we[ke]=null,$e=we[--ke],we[ke]=null,Ue=we[--ke],we[ke]=null}var he=null,me=null,R=!1,Fe=null;function ra(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ho(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,he=e,me=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,he=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Ue,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,he=e,me=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wu(e){if(R){var n=me;if(n){var t=n;if(!ho(e,n)){if(yu(e))throw Error(g(418));n=on(t.nextSibling);var r=he;n&&ho(e,n)?ra(r,t):(e.flags=e.flags&-4097|2,R=!1,he=e)}}else{if(yu(e))throw Error(g(418));e.flags=e.flags&-4097|2,R=!1,he=e}}}function go(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function fr(e){if(e!==he)return!1;if(!R)return go(e),R=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mu(e.type,e.memoizedProps)),n&&(n=me)){if(yu(e))throw la(),Error(g(418));for(;n;)ra(e,n),n=on(n.nextSibling)}if(go(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=he?on(e.stateNode.nextSibling):null;return!0}function la(){for(var e=me;e;)e=on(e.nextSibling)}function et(){me=he=null,R=!1}function ii(e){Fe===null?Fe=[e]:Fe.push(e)}var nf=Ke.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var l=r,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(i){var o=l.refs;i===null?delete o[u]:o[u]=i},n._stringRef=u,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function dr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function vo(e){var n=e._init;return n(e._payload)}function ua(e){function n(X,a){if(e){var f=X.deletions;f===null?(X.deletions=[a],X.flags|=16):f.push(a)}}function t(X,a){if(!e)return null;for(;a!==null;)n(X,a),a=a.sibling;return null}function r(X,a){for(X=new Map;a!==null;)a.key!==null?X.set(a.key,a):X.set(a.index,a),a=a.sibling;return X}function l(X,a){return X=Xn(X,a),X.index=0,X.sibling=null,X}function u(X,a,f){return X.index=f,e?(f=X.alternate,f!==null?(f=f.index,f<a?(X.flags|=2,a):f):(X.flags|=2,a)):(X.flags|=1048576,a)}function i(X){return e&&X.alternate===null&&(X.flags|=2),X}function o(X,a,f,h){return a===null||a.tag!==6?(a=$l(f,X.mode,h),a.return=X,a):(a=l(a,f),a.return=X,a)}function s(X,a,f,h){var _=f.type;return _===Dn?m(X,a,f.props.children,h,f.key):a!==null&&(a.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ze&&vo(_)===a.type)?(h=l(a,f.props),h.ref=mt(X,a,f),h.return=X,h):(h=Nr(f.type,f.key,f.props,null,X.mode,h),h.ref=mt(X,a,f),h.return=X,h)}function c(X,a,f,h){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=ql(f,X.mode,h),a.return=X,a):(a=l(a,f.children||[]),a.return=X,a)}function m(X,a,f,h,_){return a===null||a.tag!==7?(a=xn(f,X.mode,h,_),a.return=X,a):(a=l(a,f),a.return=X,a)}function p(X,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=$l(""+a,X.mode,f),a.return=X,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case tr:return f=Nr(a.type,a.key,a.props,null,X.mode,f),f.ref=mt(X,null,a),f.return=X,f;case Tn:return a=ql(a,X.mode,f),a.return=X,a;case Ze:var h=a._init;return p(X,h(a._payload),f)}if(yt(a)||ct(a))return a=xn(a,X.mode,f,null),a.return=X,a;dr(X,a)}return null}function d(X,a,f,h){var _=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:o(X,a,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===_?s(X,a,f,h):null;case Tn:return f.key===_?c(X,a,f,h):null;case Ze:return _=f._init,d(X,a,_(f._payload),h)}if(yt(f)||ct(f))return _!==null?null:m(X,a,f,h,null);dr(X,f)}return null}function v(X,a,f,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return X=X.get(f)||null,o(a,X,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tr:return X=X.get(h.key===null?f:h.key)||null,s(a,X,h,_);case Tn:return X=X.get(h.key===null?f:h.key)||null,c(a,X,h,_);case Ze:var x=h._init;return v(X,a,f,x(h._payload),_)}if(yt(h)||ct(h))return X=X.get(f)||null,m(a,X,h,_,null);dr(a,h)}return null}function w(X,a,f,h){for(var _=null,x=null,S=a,j=a=0,$=null;S!==null&&j<f.length;j++){S.index>j?($=S,S=null):$=S.sibling;var B=d(X,S,f[j],h);if(B===null){S===null&&(S=$);break}e&&S&&B.alternate===null&&n(X,S),a=u(B,a,j),x===null?_=B:x.sibling=B,x=B,S=$}if(j===f.length)return t(X,S),R&&yn(X,j),_;if(S===null){for(;j<f.length;j++)S=p(X,f[j],h),S!==null&&(a=u(S,a,j),x===null?_=S:x.sibling=S,x=S);return R&&yn(X,j),_}for(S=r(X,S);j<f.length;j++)$=v(S,X,j,f[j],h),$!==null&&(e&&$.alternate!==null&&S.delete($.key===null?j:$.key),a=u($,a,j),x===null?_=$:x.sibling=$,x=$);return e&&S.forEach(function(Se){return n(X,Se)}),R&&yn(X,j),_}function k(X,a,f,h){var _=ct(f);if(typeof _!="function")throw Error(g(150));if(f=_.call(f),f==null)throw Error(g(151));for(var x=_=null,S=a,j=a=0,$=null,B=f.next();S!==null&&!B.done;j++,B=f.next()){S.index>j?($=S,S=null):$=S.sibling;var Se=d(X,S,B.value,h);if(Se===null){S===null&&(S=$);break}e&&S&&Se.alternate===null&&n(X,S),a=u(Se,a,j),x===null?_=Se:x.sibling=Se,x=Se,S=$}if(B.done)return t(X,S),R&&yn(X,j),_;if(S===null){for(;!B.done;j++,B=f.next())B=p(X,B.value,h),B!==null&&(a=u(B,a,j),x===null?_=B:x.sibling=B,x=B);return R&&yn(X,j),_}for(S=r(X,S);!B.done;j++,B=f.next())B=v(S,X,j,B.value,h),B!==null&&(e&&B.alternate!==null&&S.delete(B.key===null?j:B.key),a=u(B,a,j),x===null?_=B:x.sibling=B,x=B);return e&&S.forEach(function(st){return n(X,st)}),R&&yn(X,j),_}function O(X,a,f,h){if(typeof f=="object"&&f!==null&&f.type===Dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var _=f.key,x=a;x!==null;){if(x.key===_){if(_=f.type,_===Dn){if(x.tag===7){t(X,x.sibling),a=l(x,f.props.children),a.return=X,X=a;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ze&&vo(_)===x.type){t(X,x.sibling),a=l(x,f.props),a.ref=mt(X,x,f),a.return=X,X=a;break e}t(X,x);break}else n(X,x);x=x.sibling}f.type===Dn?(a=xn(f.props.children,X.mode,h,f.key),a.return=X,X=a):(h=Nr(f.type,f.key,f.props,null,X.mode,h),h.ref=mt(X,a,f),h.return=X,X=h)}return i(X);case Tn:e:{for(x=f.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(X,a.sibling),a=l(a,f.children||[]),a.return=X,X=a;break e}else{t(X,a);break}else n(X,a);a=a.sibling}a=ql(f,X.mode,h),a.return=X,X=a}return i(X);case Ze:return x=f._init,O(X,a,x(f._payload),h)}if(yt(f))return w(X,a,f,h);if(ct(f))return k(X,a,f,h);dr(X,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(X,a.sibling),a=l(a,f),a.return=X,X=a):(t(X,a),a=$l(f,X.mode,h),a.return=X,X=a),i(X)):t(X,a)}return O}var nt=ua(!0),ia=ua(!1),$r=mn(null),qr=null,$n=null,oi=null;function si(){oi=$n=qr=null}function ai(e){var n=$r.current;A($r),e._currentValue=n}function ku(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){qr=e,oi=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(oi!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(qr===null)throw Error(g(308));$n=e,qr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var Cn=null;function ci(e){Cn===null?Cn=[e]:Cn.push(e)}function oa(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ci(n)):(t.next=l.next,l.next=t),n.interleaved=t,Qe(e,r)}function Qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Qe(e,t)}return l=r.interleaved,l===null?(n.next=n,ci(r)):(n.next=l.next,l.next=n),r.interleaved=n,Qe(e,t)}function _r(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yu(e,t)}}function yo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?l=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?l=u=n:u=u.next=n}else l=u=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Vr(e,n,t,r){var l=e.updateQueue;Je=!1;var u=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var s=o,c=s.next;s.next=null,i===null?u=c:i.next=c,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==i&&(o===null?m.firstBaseUpdate=c:o.next=c,m.lastBaseUpdate=s))}if(u!==null){var p=l.baseState;i=0,m=c=s=null,o=u;do{var d=o.lane,v=o.eventTime;if((r&d)===d){m!==null&&(m=m.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,k=o;switch(d=n,v=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){p=w.call(v,p,d);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,d=typeof w=="function"?w.call(v,p,d):w,d==null)break e;p=I({},p,d);break e;case 2:Je=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=l.effects,d===null?l.effects=[o]:d.push(o))}else v={eventTime:v,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(c=m=v,s=p):m=m.next=v,i|=d;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;d=o,o=d.next,d.next=null,l.lastBaseUpdate=d,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else u===null&&(l.shared.lanes=0);Nn|=i,e.lanes=i,e.memoizedState=p}}function wo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var Jt={},Me=mn(Jt),Ut=mn(Jt),$t=mn(Jt);function _n(e){if(e===Jt)throw Error(g(174));return e}function fi(e,n){switch(T($t,n),T(Ut,e),T(Me,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nu(n,e)}A(Me),T(Me,n)}function tt(){A(Me),A(Ut),A($t)}function aa(e){_n($t.current);var n=_n(Me.current),t=nu(n,e.type);n!==t&&(T(Ut,e),T(Me,t))}function di(e){Ut.current===e&&(A(Me),A(Ut))}var M=mn(0);function Hr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ol=[];function pi(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var Er=Ke.ReactCurrentDispatcher,Rl=Ke.ReactCurrentBatchConfig,Pn=0,W=null,Q=null,Y=null,Qr=!1,jt=!1,qt=0,tf=0;function ne(){throw Error(g(321))}function mi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Te(e[t],n[t]))return!1;return!0}function hi(e,n,t,r,l,u){if(Pn=u,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?of:sf,e=t(r,l),jt){u=0;do{if(jt=!1,qt=0,25<=u)throw Error(g(301));u+=1,Y=Q=null,n.updateQueue=null,Er.current=af,e=t(r,l)}while(jt)}if(Er.current=Gr,n=Q!==null&&Q.next!==null,Pn=0,Y=Q=W=null,Qr=!1,n)throw Error(g(300));return e}function gi(){var e=qt!==0;return qt=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?W.memoizedState=Y=e:Y=Y.next=e,Y}function xe(){if(Q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=Y===null?W.memoizedState:Y.next;if(n!==null)Y=n,Q=e;else{if(e===null)throw Error(g(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Y===null?W.memoizedState=Y=e:Y=Y.next=e}return Y}function Vt(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=xe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=Q,l=r.baseQueue,u=t.pending;if(u!==null){if(l!==null){var i=l.next;l.next=u.next,u.next=i}r.baseQueue=l=u,t.pending=null}if(l!==null){u=l.next,r=r.baseState;var o=i=null,s=null,c=u;do{var m=c.lane;if((Pn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(o=s=p,i=r):s=s.next=p,W.lanes|=m,Nn|=m}c=c.next}while(c!==null&&c!==u);s===null?i=r:s.next=o,Te(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do u=l.lane,W.lanes|=u,Nn|=u,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wl(e){var n=xe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,u=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do u=e(u,i.action),i=i.next;while(i!==l);Te(u,n.memoizedState)||(ce=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,r]}function ca(){}function Xa(e,n){var t=W,r=xe(),l=n(),u=!Te(r.memoizedState,l);if(u&&(r.memoizedState=l,ce=!0),r=r.queue,vi(pa.bind(null,t,r,e),[e]),r.getSnapshot!==n||u||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Ht(9,da.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(g(349));Pn&30||fa(t,n,l)}return l}function fa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function da(e,n,t,r){n.value=t,n.getSnapshot=r,ma(n)&&ha(e)}function pa(e,n,t){return t(function(){ma(n)&&ha(e)})}function ma(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Te(e,t)}catch{return!0}}function ha(e){var n=Qe(e,1);n!==null&&Le(n,e,1,-1)}function ko(e){var n=Ae();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},n.queue=e,e=e.dispatch=uf.bind(null,W,e),[n.memoizedState,e]}function Ht(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ga(){return xe().memoizedState}function xr(e,n,t,r){var l=Ae();W.flags|=e,l.memoizedState=Ht(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=xe();r=r===void 0?null:r;var u=void 0;if(Q!==null){var i=Q.memoizedState;if(u=i.destroy,r!==null&&mi(r,i.deps)){l.memoizedState=Ht(n,t,u,r);return}}W.flags|=e,l.memoizedState=Ht(1|n,t,u,r)}function Co(e,n){return xr(8390656,8,e,n)}function vi(e,n){return ol(2048,8,e,n)}function va(e,n){return ol(4,2,e,n)}function ya(e,n){return ol(4,4,e,n)}function wa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ka(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,wa.bind(null,n,e),t)}function yi(){}function Ca(e,n){var t=xe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _a(e,n){var t=xe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ea(e,n,t){return Pn&21?(Te(t,n)||(t=Ns(),W.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function rf(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),n()}finally{L=t,Rl.transition=r}}function xa(){return xe().memoizedState}function lf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sa(e))ja(n,t);else if(t=oa(e,n,t,r),t!==null){var l=ie();Le(t,e,r,l),Pa(t,n,r)}}function uf(e,n,t){var r=cn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sa(e))ja(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var i=n.lastRenderedState,o=u(i,t);if(l.hasEagerState=!0,l.eagerState=o,Te(o,i)){var s=n.interleaved;s===null?(l.next=l,ci(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=oa(e,n,l,r),t!==null&&(l=ie(),Le(t,e,r,l),Pa(t,n,r))}}function Sa(e){var n=e.alternate;return e===W||n!==null&&n===W}function ja(e,n){jt=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pa(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yu(e,t)}}var Gr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},of={readContext:Ee,useCallback:function(e,n){return Ae().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Co,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xr(4194308,4,wa.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xr(4194308,4,e,n)},useInsertionEffect:function(e,n){return xr(4,2,e,n)},useMemo:function(e,n){var t=Ae();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ae();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lf.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=Ae();return e={current:e},n.memoizedState=e},useState:ko,useDebugValue:yi,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ko(!1),n=e[0];return e=rf.bind(null,e[1]),Ae().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,l=Ae();if(R){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),Z===null)throw Error(g(349));Pn&30||fa(r,n,t)}l.memoizedState=t;var u={value:t,getSnapshot:n};return l.queue=u,Co(pa.bind(null,r,u,e),[e]),r.flags|=2048,Ht(9,da.bind(null,r,u,t,n),void 0,null),t},useId:function(){var e=Ae(),n=Z.identifierPrefix;if(R){var t=$e,r=Ue;t=(r&~(1<<32-ze(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sf={readContext:Ee,useCallback:Ca,useContext:Ee,useEffect:vi,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:ya,useMemo:_a,useReducer:Ml,useRef:ga,useState:function(){return Ml(Vt)},useDebugValue:yi,useDeferredValue:function(e){var n=xe();return Ea(n,Q.memoizedState,e)},useTransition:function(){var e=Ml(Vt)[0],n=xe().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:Xa,useId:xa,unstable_isNewReconciler:!1},af={readContext:Ee,useCallback:Ca,useContext:Ee,useEffect:vi,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:ya,useMemo:_a,useReducer:Wl,useRef:ga,useState:function(){return Wl(Vt)},useDebugValue:yi,useDeferredValue:function(e){var n=xe();return Q===null?n.memoizedState=e:Ea(n,Q.memoizedState,e)},useTransition:function(){var e=Wl(Vt)[0],n=xe().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:Xa,useId:xa,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sl={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),u=qe(r,l);u.payload=n,t!=null&&(u.callback=t),n=sn(e,u,l),n!==null&&(Le(n,e,l,r),_r(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),u=qe(r,l);u.tag=1,u.payload=n,t!=null&&(u.callback=t),n=sn(e,u,l),n!==null&&(Le(n,e,l,r),_r(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=cn(e),l=qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(Le(n,e,r,t),_r(n,e,r))}};function _o(e,n,t,r,l,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,i):n.prototype&&n.prototype.isPureReactComponent?!Rt(t,r)||!Rt(l,u):!0}function Na(e,n,t){var r=!1,l=dn,u=n.contextType;return typeof u=="object"&&u!==null?u=Ee(u):(l=fe(n)?Sn:le.current,r=n.contextTypes,u=(r=r!=null)?bn(e,l):dn),n=new n(t,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=sl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),n}function Eo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&sl.enqueueReplaceState(n,n.state,null)}function _u(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Xi(e);var u=n.contextType;typeof u=="object"&&u!==null?l.context=Ee(u):(u=fe(n)?Sn:le.current,l.context=bn(e,u)),l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Cu(e,n,u,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&sl.enqueueReplaceState(l,l.state,null),Vr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Ac(r),r=r.return;while(r);var l=t}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:l,digest:null}}function Il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Eu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function Fa(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yr||(Yr=!0,Tu=r),Eu(e,n)},t}function Ba(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Eu(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Eu(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function xo(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ef.bind(null,e,n,t),n.then(e,e))}function So(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function jo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var Xf=Ke.ReactCurrentOwner,ce=!1;function ue(e,n,t,r){n.child=e===null?ia(n,null,t,r):nt(n,e.child,t,r)}function Po(e,n,t,r,l){t=t.render;var u=n.ref;return Yn(n,l),r=hi(e,n,t,r,u,l),t=gi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(R&&t&&li(n),n.flags|=1,ue(e,n,r,l),n.child)}function No(e,n,t,r,l){if(e===null){var u=t.type;return typeof u=="function"&&!ji(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=u,za(e,n,u,r,l)):(e=Nr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!(e.lanes&l)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:Rt,t(i,r)&&e.ref===n.ref)return Ge(e,n,l)}return n.flags|=1,e=Xn(u,r),e.ref=n.ref,e.return=n,n.child=e}function za(e,n,t,r,l){if(e!==null){var u=e.memoizedProps;if(Rt(u,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=u,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ge(e,n,l)}return xu(e,n,t,r,l)}function La(e,n,t){var r=n.pendingProps,l=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Vn,pe),pe|=t;else{if(!(t&1073741824))return e=u!==null?u.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,T(Vn,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:t,T(Vn,pe),pe|=r}else u!==null?(r=u.baseLanes|t,n.memoizedState=null):r=t,T(Vn,pe),pe|=r;return ue(e,n,l,t),n.child}function Ta(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function xu(e,n,t,r,l){var u=fe(t)?Sn:le.current;return u=bn(n,u),Yn(n,l),t=hi(e,n,t,r,u,l),r=gi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(R&&r&&li(n),n.flags|=1,ue(e,n,t,l),n.child)}function Fo(e,n,t,r,l){if(fe(t)){var u=!0;Wr(n)}else u=!1;if(Yn(n,l),n.stateNode===null)Sr(e,n),Na(n,t,r),_u(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,o=n.memoizedProps;i.props=o;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=fe(t)?Sn:le.current,c=bn(n,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||s!==c)&&Eo(n,i,r,c),Je=!1;var d=n.memoizedState;i.state=d,Vr(n,r,i,l),s=n.memoizedState,o!==r||d!==s||Xe.current||Je?(typeof m=="function"&&(Cu(n,t,m,r),s=n.memoizedState),(o=Je||_o(n,t,o,r,d,s,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=c,r=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,sa(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:Pe(n.type,o),i.props=c,p=n.pendingProps,d=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=fe(t)?Sn:le.current,s=bn(n,s));var v=t.getDerivedStateFromProps;(m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==p||d!==s)&&Eo(n,i,r,s),Je=!1,d=n.memoizedState,i.state=d,Vr(n,r,i,l);var w=n.memoizedState;o!==p||d!==w||Xe.current||Je?(typeof v=="function"&&(Cu(n,t,v,r),w=n.memoizedState),(c=Je||_o(n,t,c,r,d,w,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return Su(e,n,t,r,u,l)}function Su(e,n,t,r,l,u){Ta(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&mo(n,t,!1),Ge(e,n,u);r=n.stateNode,Xf.current=n;var o=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=nt(n,e.child,null,u),n.child=nt(n,null,o,u)):ue(e,n,o,u),n.memoizedState=r.state,l&&mo(n,t,!0),n.child}function Da(e){var n=e.stateNode;n.pendingContext?po(e,n.pendingContext,n.pendingContext!==n.context):n.context&&po(e,n.context,!1),fi(e,n.containerInfo)}function Bo(e,n,t,r,l){return et(),ii(l),n.flags|=256,ue(e,n,t,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Aa(e,n,t){var r=n.pendingProps,l=M.current,u=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),T(M,l&1),e===null)return wu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,u?(r=n.mode,u=n.child,i={mode:"hidden",children:i},!(r&1)&&u!==null?(u.childLanes=0,u.pendingProps=i):u=Xl(i,r,0,null),e=xn(e,r,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Pu(t),n.memoizedState=ju,e):wi(n,i));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return ff(e,n,i,r,o,l,t);if(u){u=r.fallback,i=n.mode,l=e.child,o=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Xn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?u=Xn(o,u):(u=xn(u,i,t,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,i=e.child.memoizedState,i=i===null?Pu(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},u.memoizedState=i,u.childLanes=e.childLanes&~t,n.memoizedState=ju,r}return u=e.child,e=u.sibling,r=Xn(u,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function wi(e,n){return n=Xl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,r){return r!==null&&ii(r),nt(n,e.child,null,t),e=wi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ff(e,n,t,r,l,u,i){if(t)return n.flags&256?(n.flags&=-257,r=Il(Error(g(422))),pr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=r.fallback,l=n.mode,r=Xl({mode:"visible",children:r.children},l,0,null),u=xn(u,l,i,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,n.mode&1&&nt(n,e.child,null,i),n.child.memoizedState=Pu(i),n.memoizedState=ju,u);if(!(n.mode&1))return pr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,u=Error(g(419)),r=Il(u,r,void 0),pr(e,n,i,r)}if(o=(i&e.childLanes)!==0,ce||o){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Qe(e,l),Le(r,e,l,-1))}return Si(),r=Il(Error(g(421))),pr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=xf.bind(null,e),l._reactRetry=n,null):(e=u.treeContext,me=on(l.nextSibling),he=n,R=!0,Fe=null,e!==null&&(we[ke++]=Ue,we[ke++]=$e,we[ke++]=jn,Ue=e.id,$e=e.overflow,jn=n),n=wi(n,r.children),n.flags|=4096,n)}function zo(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ku(e.return,n,t)}function Ul(e,n,t,r,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=t,u.tailMode=l)}function Oa(e,n,t){var r=n.pendingProps,l=r.revealOrder,u=r.tail;if(ue(e,n,r.children,t),r=M.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zo(e,t,n);else if(e.tag===19)zo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(M,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Hr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ul(n,!1,l,t,u);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Hr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ul(n,!0,t,null,u);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=Xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function df(e,n,t){switch(n.tag){case 3:Da(n),et();break;case 5:aa(n);break;case 1:fe(n.type)&&Wr(n);break;case 4:fi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;T($r,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(T(M,M.current&1),n.flags|=128,null):t&n.child.childLanes?Aa(e,n,t):(T(M,M.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);T(M,M.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Oa(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),T(M,M.current),r)break;return null;case 22:case 23:return n.lanes=0,La(e,n,t)}return Ge(e,n,t)}var Ra,Nu,Ma,Wa;Ra=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Nu=function(){};Ma=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,_n(Me.current);var u=null;switch(t){case"input":l=Zl(e,l),r=Zl(e,r),u=[];break;case"select":l=I({},l,{value:void 0}),r=I({},r,{value:void 0}),u=[];break;case"textarea":l=eu(e,l),r=eu(e,r),u=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rr)}tu(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(i in o)o.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bt.hasOwnProperty(c)?u||(u=[]):(u=u||[]).push(c,null));for(c in r){var s=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==o&&(s!=null||o!=null))if(c==="style")if(o){for(i in o)!o.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&o[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(u||(u=[]),u.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(u=u||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(u=u||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",e),u||o===s||(u=[])):(u=u||[]).push(c,s))}t&&(u=u||[]).push("style",t);var c=u;(n.updateQueue=c)&&(n.flags|=4)}};Wa=function(e,n,t,r){t!==r&&(n.flags|=4)};function ht(e,n){if(!R)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pf(e,n,t){var r=n.pendingProps;switch(ui(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Mr(),te(n),null;case 3:return r=n.stateNode,tt(),A(Xe),A(le),pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(Ou(Fe),Fe=null))),Nu(e,n),te(n),null;case 5:di(n);var l=_n($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Ma(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return te(n),null}if(e=_n(Me.current),fr(n)){r=n.stateNode,t=n.type;var u=n.memoizedProps;switch(r[Oe]=n,r[It]=u,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<kt.length;l++)D(kt[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Wi(r,u),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},D("invalid",r);break;case"textarea":Ui(r,u),D("invalid",r)}tu(t,u),l=null;for(var i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="children"?typeof o=="string"?r.textContent!==o&&(u.suppressHydrationWarning!==!0&&Xr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(u.suppressHydrationWarning!==!0&&Xr(r.textContent,o,e),l=["children",""+o]):Bt.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&D("scroll",r)}switch(t){case"input":rr(r),Ii(r,u,!0);break;case"textarea":rr(r),$i(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=Rr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Oe]=n,e[It]=r,Ra(e,n,!1,!1),n.stateNode=e;e:{switch(i=ru(t,r),t){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<kt.length;l++)D(kt[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Wi(e,r),l=Zl(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=I({},r,{value:void 0}),D("invalid",e);break;case"textarea":Ui(e,r),l=eu(e,r),D("invalid",e);break;default:l=r}tu(t,l),o=l;for(u in o)if(o.hasOwnProperty(u)){var s=o[u];u==="style"?gs(e,s):u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ms(e,s)):u==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&zt(e,s):typeof s=="number"&&zt(e,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bt.hasOwnProperty(u)?s!=null&&u==="onScroll"&&D("scroll",e):s!=null&&qu(e,u,s,i))}switch(t){case"input":rr(e),Ii(e,r,!1);break;case"textarea":rr(e),$i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?Hn(e,!!r.multiple,u,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Wa(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=_n($t.current),_n(Me.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Oe]=n,(u=r.nodeValue!==t)&&(e=he,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,t,(e.mode&1)!==0)}u&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Oe]=n,n.stateNode=r}return te(n),null;case 13:if(A(M),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&me!==null&&n.mode&1&&!(n.flags&128))la(),et(),n.flags|=98560,u=!1;else if(u=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(g(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(g(317));u[Oe]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),u=!1}else Fe!==null&&(Ou(Fe),Fe=null),u=!0;if(!u)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||M.current&1?G===0&&(G=3):Si())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Nu(e,n),e===null&&Mt(n.stateNode.containerInfo),te(n),null;case 10:return ai(n.type._context),te(n),null;case 17:return fe(n.type)&&Mr(),te(n),null;case 19:if(A(M),u=n.memoizedState,u===null)return te(n),null;if(r=(n.flags&128)!==0,i=u.rendering,i===null)if(r)ht(u,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Hr(e),i!==null){for(n.flags|=128,ht(u,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)u=t,e=r,u.flags&=14680066,i=u.alternate,i===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,u.type=i.type,e=i.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return T(M,M.current&1|2),n.child}e=e.sibling}u.tail!==null&&V()>lt&&(n.flags|=128,r=!0,ht(u,!1),n.lanes=4194304)}else{if(!r)if(e=Hr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ht(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!R)return te(n),null}else 2*V()-u.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,ht(u,!1),n.lanes=4194304);u.isBackwards?(i.sibling=n.child,n.child=i):(t=u.last,t!==null?t.sibling=i:n.child=i,u.last=i)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=V(),n.sibling=null,t=M.current,T(M,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return xi(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function mf(e,n){switch(ui(n),n.tag){case 1:return fe(n.type)&&Mr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),A(Xe),A(le),pi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return di(n),null;case 13:if(A(M),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(M),null;case 4:return tt(),null;case 10:return ai(n.type._context),null;case 22:case 23:return xi(),null;case 24:return null;default:return null}}var mr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,C=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Fu(e,n,t){try{t()}catch(r){U(e,n,r)}}var Lo=!1;function gf(e,n){if(du=Dr,e=Vs(),ri(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var i=0,o=-1,s=-1,c=0,m=0,p=e,d=null;n:for(;;){for(var v;p!==t||l!==0&&p.nodeType!==3||(o=i+l),p!==u||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)d=p,p=v;for(;;){if(p===e)break n;if(d===t&&++c===l&&(o=i),d===u&&++m===r&&(s=i),(v=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=v}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(pu={focusedElem:e,selectionRange:t},Dr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,O=w.memoizedState,X=n.stateNode,a=X.getSnapshotBeforeUpdate(n.elementType===n.type?k:Pe(n.type,k),O);X.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(h){U(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return w=Lo,Lo=!1,w}function Pt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Fu(n,t,u)}l=l.next}while(l!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Bu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ia(e){var n=e.alternate;n!==null&&(e.alternate=null,Ia(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Oe],delete n[It],delete n[gu],delete n[JX],delete n[bX])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ua(e){return e.tag===5||e.tag===3||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ua(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Rr));else if(r!==4&&(e=e.child,e!==null))for(zu(e,n,t),e=e.sibling;e!==null;)zu(e,n,t),e=e.sibling}function Lu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lu(e,n,t),e=e.sibling;e!==null;)Lu(e,n,t),e=e.sibling}var J=null,Ne=!1;function Ye(e,n,t){for(t=t.child;t!==null;)$a(e,n,t),t=t.sibling}function $a(e,n,t){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:re||qn(t,n);case 6:var r=J,l=Ne;J=null,Ye(e,n,t),J=r,Ne=l,J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?Dl(e.parentNode,t):e.nodeType===1&&Dl(e,t),At(e)):Dl(J,t.stateNode));break;case 4:r=J,l=Ne,J=t.stateNode.containerInfo,Ne=!0,Ye(e,n,t),J=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var u=l,i=u.destroy;u=u.tag,i!==void 0&&(u&2||u&4)&&Fu(t,n,i),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!re&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){U(t,n,o)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ye(e,n,t),re=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Do(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var l=Sf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var u=e,i=n,o=i;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Ne=!1;break e;case 3:J=o.stateNode.containerInfo,Ne=!0;break e;case 4:J=o.stateNode.containerInfo,Ne=!0;break e}o=o.return}if(J===null)throw Error(g(160));$a(u,i,l),J=null,Ne=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){U(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qa(n,e),n=n.sibling}function qa(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),De(e),r&4){try{Pt(3,e,e.return),al(3,e)}catch(k){U(e,e.return,k)}try{Pt(5,e,e.return)}catch(k){U(e,e.return,k)}}break;case 1:je(n,e),De(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(je(n,e),De(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var l=e.stateNode;try{zt(l,"")}catch(k){U(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,i=t!==null?t.memoizedProps:u,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&u.type==="radio"&&u.name!=null&&fs(l,u),ru(o,i);var c=ru(o,u);for(i=0;i<s.length;i+=2){var m=s[i],p=s[i+1];m==="style"?gs(l,p):m==="dangerouslySetInnerHTML"?ms(l,p):m==="children"?zt(l,p):qu(l,m,p,c)}switch(o){case"input":Jl(l,u);break;case"textarea":ds(l,u);break;case"select":var d=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var v=u.value;v!=null?Hn(l,!!u.multiple,v,!1):d!==!!u.multiple&&(u.defaultValue!=null?Hn(l,!!u.multiple,u.defaultValue,!0):Hn(l,!!u.multiple,u.multiple?[]:"",!1))}l[It]=u}catch(k){U(e,e.return,k)}}break;case 6:if(je(n,e),De(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(k){U(e,e.return,k)}}break;case 3:if(je(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{At(n.containerInfo)}catch(k){U(e,e.return,k)}break;case 4:je(n,e),De(e);break;case 13:je(n,e),De(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(_i=V())),r&4&&Do(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||m,je(n,e),re=c):je(n,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(d=C,v=d.child,d.tag){case 0:case 11:case 14:case 15:Pt(4,d,d.return);break;case 1:qn(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){U(r,t,k)}}break;case 5:qn(d,d.return);break;case 22:if(d.memoizedState!==null){Oo(p);continue}}v!==null?(v.return=d,C=v):Oo(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(o=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=hs("display",i))}catch(k){U(e,e.return,k)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){U(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:je(n,e),De(e),r&4&&Do(e);break;case 21:break;default:je(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ua(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zt(l,""),r.flags&=-33);var u=To(e);Lu(e,u,l);break;case 3:case 4:var i=r.stateNode.containerInfo,o=To(e);zu(e,o,i);break;default:throw Error(g(161))}}catch(s){U(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){C=e,Va(e)}function Va(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var l=C,u=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||mr;if(!i){var o=l.alternate,s=o!==null&&o.memoizedState!==null||re;o=mr;var c=re;if(mr=i,(re=s)&&!c)for(C=l;C!==null;)i=C,s=i.child,i.tag===22&&i.memoizedState!==null?Ro(l):s!==null?(s.return=i,C=s):Ro(l);for(;u!==null;)C=u,Va(u),u=u.sibling;C=l,mr=o,re=c}Ao(e)}else l.subtreeFlags&8772&&u!==null?(u.return=l,C=u):Ao(e)}}function Ao(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&wo(n,u,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wo(n,i,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&At(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||n.flags&512&&Bu(n)}catch(d){U(n,n.return,d)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Oo(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Ro(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(s){U(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){U(n,l,s)}}var u=n.return;try{Bu(n)}catch(s){U(n,u,s)}break;case 5:var i=n.return;try{Bu(n)}catch(s){U(n,i,s)}}}catch(s){U(n,n.return,s)}if(n===e){C=null;break}var o=n.sibling;if(o!==null){o.return=n.return,C=o;break}C=n.return}}var yf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,ki=Ke.ReactCurrentOwner,_e=Ke.ReactCurrentBatchConfig,z=0,Z=null,H=null,b=0,pe=0,Vn=mn(0),G=0,Qt=null,Nn=0,cl=0,Ci=0,Nt=null,ae=null,_i=0,lt=1/0,We=null,Yr=!1,Tu=null,an=null,hr=!1,tn=null,Zr=0,Ft=0,Du=null,jr=-1,Pr=0;function ie(){return z&6?V():jr!==-1?jr:jr=V()}function cn(e){return e.mode&1?z&2&&b!==0?b&-b:nf.transition!==null?(Pr===0&&(Pr=Ns()),Pr):(e=L,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Le(e,n,t,r){if(50<Ft)throw Ft=0,Du=null,Error(g(185));Kt(e,t,r),(!(z&2)||e!==Z)&&(e===Z&&(!(z&2)&&(cl|=t),G===4&&en(e,b)),de(e,r),t===1&&z===0&&!(n.mode&1)&&(lt=V()+500,il&&hn()))}function de(e,n){var t=e.callbackNode;nX(e,n);var r=Tr(e,e===Z?b:0);if(r===0)t!==null&&Hi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Hi(t),n===1)e.tag===0?ef(Mo.bind(null,e)):na(Mo.bind(null,e)),YX(function(){!(z&6)&&hn()}),t=null;else{switch(Fs(r)){case 1:t=Ku;break;case 4:t=js;break;case 16:t=Lr;break;case 536870912:t=Ps;break;default:t=Lr}t=ba(t,Ha.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ha(e,n){if(jr=-1,Pr=0,z&6)throw Error(g(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Tr(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var l=z;z|=2;var u=Ga();(Z!==e||b!==n)&&(We=null,lt=V()+500,En(e,n));do try{Cf();break}catch(o){Qa(e,o)}while(!0);si(),Kr.current=u,z=l,H!==null?n=0:(Z=null,b=0,n=G)}if(n!==0){if(n===2&&(l=su(e),l!==0&&(r=l,n=Au(e,l))),n===1)throw t=Qt,En(e,0),en(e,r),de(e,V()),t;if(n===6)en(e,r);else{if(l=e.current.alternate,!(r&30)&&!wf(l)&&(n=Jr(e,r),n===2&&(u=su(e),u!==0&&(r=u,n=Au(e,u))),n===1))throw t=Qt,En(e,0),en(e,r),de(e,V()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:wn(e,ae,We);break;case 3:if(en(e,r),(r&130023424)===r&&(n=_i+500-V(),10<n)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=hu(wn.bind(null,e,ae,We),n);break}wn(e,ae,We);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-ze(r);u=1<<i,i=n[i],i>l&&(l=i),r&=~u}if(r=l,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=hu(wn.bind(null,e,ae,We),r);break}wn(e,ae,We);break;case 5:wn(e,ae,We);break;default:throw Error(g(329))}}}return de(e,V()),e.callbackNode===t?Ha.bind(null,e):null}function Au(e,n){var t=Nt;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=ae,ae=t,n!==null&&Ou(n)),e}function Ou(e){ae===null?ae=e:ae.push.apply(ae,e)}function wf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],u=l.getSnapshot;l=l.value;try{if(!Te(u(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Ci,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ze(n),r=1<<t;e[t]=-1,n&=~r}}function Mo(e){if(z&6)throw Error(g(327));Zn();var n=Tr(e,0);if(!(n&1))return de(e,V()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=su(e);r!==0&&(n=r,t=Au(e,r))}if(t===1)throw t=Qt,En(e,0),en(e,n),de(e,V()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,ae,We),de(e,V()),null}function Ei(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(lt=V()+500,il&&hn())}}function Fn(e){tn!==null&&tn.tag===0&&!(z&6)&&Zn();var n=z;z|=1;var t=_e.transition,r=L;try{if(_e.transition=null,L=1,e)return e()}finally{L=r,_e.transition=t,z=n,!(z&6)&&hn()}}function xi(){pe=Vn.current,A(Vn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,KX(t)),H!==null)for(t=H.return;t!==null;){var r=t;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mr();break;case 3:tt(),A(Xe),A(le),pi();break;case 5:di(r);break;case 4:tt();break;case 13:A(M);break;case 19:A(M);break;case 10:ai(r.type._context);break;case 22:case 23:xi()}t=t.return}if(Z=e,H=e=Xn(e.current,null),b=pe=n,G=0,Qt=null,Ci=cl=Nn=0,ae=Nt=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,u=t.pending;if(u!==null){var i=u.next;u.next=l,r.next=i}t.pending=r}Cn=null}return e}function Qa(e,n){do{var t=H;try{if(si(),Er.current=Gr,Qr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qr=!1}if(Pn=0,Y=Q=W=null,jt=!1,qt=0,ki.current=null,t===null||t.return===null){G=1,Qt=n,H=null;break}e:{var u=e,i=t.return,o=t,s=n;if(n=b,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=o,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var d=m.alternate;d?(m.updateQueue=d.updateQueue,m.memoizedState=d.memoizedState,m.lanes=d.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=So(i);if(v!==null){v.flags&=-257,jo(v,i,o,u,n),v.mode&1&&xo(u,c,n),n=v,s=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(s),n.updateQueue=k}else w.add(s);break e}else{if(!(n&1)){xo(u,c,n),Si();break e}s=Error(g(426))}}else if(R&&o.mode&1){var O=So(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),jo(O,i,o,u,n),ii(rt(s,o));break e}}u=s=rt(s,o),G!==4&&(G=2),Nt===null?Nt=[u]:Nt.push(u),u=i;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var X=Fa(u,s,n);yo(u,X);break e;case 1:o=s;var a=u.type,f=u.stateNode;if(!(u.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(an===null||!an.has(f)))){u.flags|=65536,n&=-n,u.lanes|=n;var h=Ba(u,o,n);yo(u,h);break e}}u=u.return}while(u!==null)}Ya(t)}catch(_){n=_,H===t&&t!==null&&(H=t=t.return);continue}break}while(!0)}function Ga(){var e=Kr.current;return Kr.current=Gr,e===null?Gr:e}function Si(){(G===0||G===3||G===2)&&(G=4),Z===null||!(Nn&268435455)&&!(cl&268435455)||en(Z,b)}function Jr(e,n){var t=z;z|=2;var r=Ga();(Z!==e||b!==n)&&(We=null,En(e,n));do try{kf();break}catch(l){Qa(e,l)}while(!0);if(si(),z=t,Kr.current=r,H!==null)throw Error(g(261));return Z=null,b=0,G}function kf(){for(;H!==null;)Ka(H)}function Cf(){for(;H!==null&&!Hc();)Ka(H)}function Ka(e){var n=Ja(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Ya(e):H=n,ki.current=null}function Ya(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mf(t,n),t!==null){t.flags&=32767,H=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,H=null;return}}else if(t=pf(t,n,pe),t!==null){H=t;return}if(n=n.sibling,n!==null){H=n;return}H=n=e}while(n!==null);G===0&&(G=5)}function wn(e,n,t){var r=L,l=_e.transition;try{_e.transition=null,L=1,_f(e,n,t,r)}finally{_e.transition=l,L=r}return null}function _f(e,n,t,r){do Zn();while(tn!==null);if(z&6)throw Error(g(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(tX(e,u),e===Z&&(H=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,ba(Lr,function(){return Zn(),null})),u=(t.flags&15990)!==0,t.subtreeFlags&15990||u){u=_e.transition,_e.transition=null;var i=L;L=1;var o=z;z|=4,ki.current=null,gf(e,t),qa(t,e),UX(pu),Dr=!!du,pu=du=null,e.current=t,vf(t),Qc(),z=o,L=i,_e.transition=u}else e.current=t;if(hr&&(hr=!1,tn=e,Zr=l),u=e.pendingLanes,u===0&&(an=null),Yc(t.stateNode),de(e,V()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yr)throw Yr=!1,e=Tu,Tu=null,e;return Zr&1&&e.tag!==0&&Zn(),u=e.pendingLanes,u&1?e===Du?Ft++:(Ft=0,Du=e):Ft=0,hn(),null}function Zn(){if(tn!==null){var e=Fs(Zr),n=_e.transition,t=L;try{if(_e.transition=null,L=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,z&6)throw Error(g(331));var l=z;for(z|=4,C=e.current;C!==null;){var u=C,i=u.child;if(C.flags&16){var o=u.deletions;if(o!==null){for(var s=0;s<o.length;s++){var c=o[s];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Pt(8,m,u)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var d=m.sibling,v=m.return;if(Ia(m),m===c){C=null;break}if(d!==null){d.return=v,C=d;break}C=v}}}var w=u.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}C=u}}if(u.subtreeFlags&2064&&i!==null)i.return=u,C=i;else e:for(;C!==null;){if(u=C,u.flags&2048)switch(u.tag){case 0:case 11:case 15:Pt(9,u,u.return)}var X=u.sibling;if(X!==null){X.return=u.return,C=X;break e}C=u.return}}var a=e.current;for(C=a;C!==null;){i=C;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,C=f;else e:for(i=a;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:al(9,o)}}catch(_){U(o,o.return,_)}if(o===i){C=null;break e}var h=o.sibling;if(h!==null){h.return=o.return,C=h;break e}C=o.return}}if(z=l,hn(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{L=t,_e.transition=n}}return!1}function Wo(e,n,t){n=rt(t,n),n=Fa(e,n,1),e=sn(e,n,1),n=ie(),e!==null&&(Kt(e,1,n),de(e,n))}function U(e,n,t){if(e.tag===3)Wo(e,e,t);else for(;n!==null;){if(n.tag===3){Wo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=rt(t,e),e=Ba(n,e,1),n=sn(n,e,1),e=ie(),n!==null&&(Kt(n,1,e),de(n,e));break}}n=n.return}}function Ef(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(G===4||G===3&&(b&130023424)===b&&500>V()-_i?En(e,0):Ci|=t),de(e,n)}function Za(e,n){n===0&&(e.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var t=ie();e=Qe(e,n),e!==null&&(Kt(e,n,t),de(e,t))}function xf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Za(e,t)}function Sf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Za(e,t)}var Ja;Ja=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,df(e,n,t);ce=!!(e.flags&131072)}else ce=!1,R&&n.flags&1048576&&ta(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Sr(e,n),e=n.pendingProps;var l=bn(n,le.current);Yn(n,t),l=hi(null,n,r,e,l,t);var u=gi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(u=!0,Wr(n)):u=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Xi(n),l.updater=sl,n.stateNode=l,l._reactInternals=n,_u(n,r,e,t),n=Su(null,n,r,!0,u,t)):(n.tag=0,R&&u&&li(n),ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Sr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Pf(r),e=Pe(r,e),l){case 0:n=xu(null,n,r,e,t);break e;case 1:n=Fo(null,n,r,e,t);break e;case 11:n=Po(null,n,r,e,t);break e;case 14:n=No(null,n,r,Pe(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),xu(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Fo(e,n,r,l,t);case 3:e:{if(Da(n),e===null)throw Error(g(387));r=n.pendingProps,u=n.memoizedState,l=u.element,sa(e,n),Vr(n,r,null,t);var i=n.memoizedState;if(r=i.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){l=rt(Error(g(423)),n),n=Bo(e,n,r,t,l);break e}else if(r!==l){l=rt(Error(g(424)),n),n=Bo(e,n,r,t,l);break e}else for(me=on(n.stateNode.containerInfo.firstChild),he=n,R=!0,Fe=null,t=ia(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===l){n=Ge(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return aa(n),e===null&&wu(n),r=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,i=l.children,mu(r,l)?i=null:u!==null&&mu(r,u)&&(n.flags|=32),Ta(e,n),ue(e,n,i,t),n.child;case 6:return e===null&&wu(n),null;case 13:return Aa(e,n,t);case 4:return fi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Po(e,n,r,l,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,u=n.memoizedProps,i=l.value,T($r,r._currentValue),r._currentValue=i,u!==null)if(Te(u.value,i)){if(u.children===l.children&&!Xe.current){n=Ge(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var o=u.dependencies;if(o!==null){i=u.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(u.tag===1){s=qe(-1,t&-t),s.tag=2;var c=u.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}u.lanes|=t,s=u.alternate,s!==null&&(s.lanes|=t),ku(u.return,t,n),o.lanes|=t;break}s=s.next}}else if(u.tag===10)i=u.type===n.type?null:u.child;else if(u.tag===18){if(i=u.return,i===null)throw Error(g(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),ku(i,t,n),i=u.sibling}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===n){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,t),l=Ee(l),r=r(l),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,l=Pe(r,n.pendingProps),l=Pe(r.type,l),No(e,n,r,l,t);case 15:return za(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Sr(e,n),n.tag=1,fe(r)?(e=!0,Wr(n)):e=!1,Yn(n,t),Na(n,r,l),_u(n,r,l,t),Su(null,n,r,!0,e,t);case 19:return Oa(e,n,t);case 22:return La(e,n,t)}throw Error(g(156,n.tag))};function ba(e,n){return Ss(e,n)}function jf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new jf(e,n,t,r)}function ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return ji(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===Qu)return 14}return 2}function Xn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Nr(e,n,t,r,l,u){var i=2;if(r=e,typeof e=="function")ji(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dn:return xn(t.children,l,u,n);case Vu:i=8,l|=8;break;case Ql:return e=Ce(12,t,n,l|2),e.elementType=Ql,e.lanes=u,e;case Gl:return e=Ce(13,t,n,l),e.elementType=Gl,e.lanes=u,e;case Kl:return e=Ce(19,t,n,l),e.elementType=Kl,e.lanes=u,e;case as:return Xl(t,l,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case os:i=10;break e;case ss:i=9;break e;case Hu:i=11;break e;case Qu:i=14;break e;case Ze:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Ce(i,t,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function xn(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function Xl(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=as,e.lanes=t,e.stateNode={isHidden:!1},e}function $l(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function ql(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,n,t,r,l,u,i,o,s){return e=new Nf(e,n,t,o,s),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Ce(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(u),e}function Ff(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return dn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(fe(t))return ea(e,t,n)}return n}function nc(e,n,t,r,l,u,i,o,s){return e=Pi(t,r,!0,e,l,u,i,o,s),e.context=ec(null),t=e.current,r=ie(),l=cn(t),u=qe(r,l),u.callback=n??null,sn(t,u,l),e.current.lanes=l,Kt(e,l,r),de(e,r),e}function fl(e,n,t,r){var l=n.current,u=ie(),i=cn(l);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(u,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,i),e!==null&&(Le(e,l,i,u),_r(e,l,i)),i}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Io(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ni(e,n){Io(e,n),(e=e.alternate)&&Io(e,n)}function Bf(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fi(e){this._internalRoot=e}dl.prototype.render=Fi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));fl(e,n,null,null)};dl.prototype.unmount=Fi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){fl(null,e,null,null)}),n[He]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Ds(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uo(){}function zf(e,n,t,r,l){if(l){if(typeof r=="function"){var u=r;r=function(){var c=br(i);u.call(c)}}var i=nc(n,r,e,0,null,!1,!1,"",Uo);return e._reactRootContainer=i,e[He]=i.current,Mt(e.nodeType===8?e.parentNode:e),Fn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=br(s);o.call(c)}}var s=Pi(e,0,!1,null,null,!1,!1,"",Uo);return e._reactRootContainer=s,e[He]=s.current,Mt(e.nodeType===8?e.parentNode:e),Fn(function(){fl(n,s,t,r)}),s}function ml(e,n,t,r,l){var u=t._reactRootContainer;if(u){var i=u;if(typeof l=="function"){var o=l;l=function(){var s=br(i);o.call(s)}}fl(n,i,e,l)}else i=zf(t,n,e,l,r);return br(i)}Bs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(Yu(n,t|1),de(n,V()),!(z&6)&&(lt=V()+500,hn()))}break;case 13:Fn(function(){var r=Qe(e,1);if(r!==null){var l=ie();Le(r,e,1,l)}}),Ni(e,1)}};Zu=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var t=ie();Le(n,e,134217728,t)}Ni(e,134217728)}};zs=function(e){if(e.tag===13){var n=cn(e),t=Qe(e,n);if(t!==null){var r=ie();Le(t,e,n,r)}Ni(e,n)}};Ls=function(){return L};Ts=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};uu=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(g(90));Xs(r),Jl(r,l)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Hn(e,!!t.multiple,n,!1)}};ws=Ei;ks=Fn;var Lf={usingClientEntryPoint:!1,Events:[Zt,Mn,ul,vs,ys,Ei]},gt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{nl=gr.inject(Tf),Re=gr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(n))throw Error(g(200));return Ff(e,n,null,t)};ve.createRoot=function(e,n){if(!Bi(e))throw Error(g(299));var t=!1,r="",l=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Pi(e,1,!1,null,null,t,!1,r,l),e[He]=n.current,Mt(e.nodeType===8?e.parentNode:e),new Fi(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Es(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Fn(e)};ve.hydrate=function(e,n,t){if(!pl(n))throw Error(g(200));return ml(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Bi(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,l=!1,u="",i=tc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=nc(n,null,e,1,t??null,l,!1,u,i),e[He]=n.current,Mt(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};ve.render=function(e,n,t){if(!pl(n))throw Error(g(200));return ml(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!pl(e))throw Error(g(40));return e._reactRootContainer?(Fn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};ve.unstable_batchedUpdates=Ei;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pl(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return ml(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=ve;var Df=rs.exports,lc,$o=Df;lc=$o.createRoot,$o.hydrateRoot;const Af=({isOpen:e})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ml-1.5 flex-shrink-0 text-slate-500 transform transition-transform duration-300 ease-in-out ${e?"rotate-180 text-indigo-500":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,"aria-hidden":"true",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),Of=({className:e="h-4 w-4 ml-1.5"})=>y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,"aria-hidden":"true",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),Vl=(e,n)=>{if(!n.trim())return y.jsx(y.Fragment,{children:e});const t=e.split(new RegExp(`(${n})`,"gi"));return y.jsx(y.Fragment,{children:t.map((r,l)=>r.toLowerCase()===n.toLowerCase()?y.jsx("mark",{className:"bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0",children:r},l):r)})},zi=({item:e,level:n=0,searchTerm:t})=>{var r,l;const[u,i]=Be.useState(!1),o=e.children&&e.children.length>0;Be.useEffect(()=>{t.trim()&&o?i(!0):t.trim()||i(!1)},[t,o]);const s=()=>{o&&i(!u)},c={paddingLeft:`${1.5+n*2}rem`,bg:["bg-white","bg-slate-50","bg-gray-100"][n]||"bg-gray-100",hoverBg:["hover:bg-slate-50","hover:bg-slate-100","hover:bg-gray-200"][n]||"hover:bg-gray-200",textSize:["text-lg","text-base","text-sm"][n]||"text-sm",font:["font-medium","font-normal","font-normal"][n]||"font-normal"};return o?y.jsxs("div",{className:"border-b border-slate-200 last:border-b-0",children:[y.jsxs("button",{onClick:s,className:`group w-full flex justify-between items-center text-left py-4 pr-6 ${c.bg} ${c.hoverBg} transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`,style:{paddingLeft:c.paddingLeft},"aria-expanded":u,children:[y.jsx("span",{className:`${c.textSize} ${c.font} text-slate-800 group-hover:text-indigo-600`,children:Vl(e.title,t)}),y.jsx(Af,{isOpen:u})]}),y.jsx("div",{className:`grid overflow-hidden transition-all duration-300 ease-in-out ${u?"grid-rows-[1fr]":"grid-rows-[0fr]"}`,children:y.jsx("div",{className:"overflow-hidden",children:(r=e.children)===null||r===void 0?void 0:r.map((m,p)=>y.jsx(zi,{item:m,level:n+1,searchTerm:t},p))})})]}):y.jsx("div",{className:`border-b border-slate-200 last:border-b-0 ${c.bg}`,children:y.jsxs("div",{className:"flex justify-between items-center py-3 pr-6",style:{paddingLeft:c.paddingLeft},children:[y.jsx("span",{className:`${c.textSize} text-slate-700`,children:Vl(e.title,t)}),e.link&&y.jsxs("a",{href:(l=e.url)!==null&&l!==void 0?l:"#",onClick:e.url?void 0:m=>m.preventDefault(),target:e.url?"_blank":void 0,rel:e.url?"noopener noreferrer":void 0,className:"flex-shrink-0 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-xs sm:text-sm bg-indigo-50 hover:bg-indigo-100 rounded-full px-3 py-1.5 transition-colors duration-150",children:[y.jsx("span",{className:"truncate",children:Vl(e.link,t)}),y.jsx(Of,{})]})]})})},qo=[{title:"1. お金を借りる",children:[{title:'1.1 給与額"以下"の額を借りる',children:[{title:"100万円を超える",link:"【WC-C】前払_100万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-01/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（100万以上～1,000万未満）",subject:"前払い（100万以上～1,000万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。
氏名：XXX
社員番号：XXXXXXXX
配属先：株式会社XXX　XXX支店
契約期間：XXXX年X月X日～XXXX年X月X日
申請金額：XXX,000円
返済予定日：XXXX年X月X日
入金口座："＊＊＊"　≪ex.本人給与≫
本人給与調整：XXXX年X月XX日
支払日：XXXX年X月X日
【理由】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"100万円を超えない",link:"【WC-C】前払_30万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-02/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（30万以上～100万未満）",subject:"前払い（30万以上～100万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。
氏名：XXX
社員番号：XXXXXXXX
配属先：株式会社XXX　XXX支店
契約期間：XXXX年X月X日～XXXX年X月X日
申請金額：XXX,000円
返済予定日：XXXX年X月X日
入金口座："＊＊＊"　≪ex.本人給与≫
本人給与調整：XXXX年X月XX日
支払日：XXXX年X月X日
【理由】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"30万円を超えない",link:"【WC-C】前払_30万円未満",url:"https://sites.google.com/nareru-group.co.jp/ringi-01/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（30万未満）",subject:"前払い（30万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。

氏名：XXX
社員番号：XXXXXXXX
配属先：株式会社XXX　XXX支店
契約期間：XXXX年X月X日～XXXX年X月X日
申請金額：XXX,000円
返済予定日：XXXX年X月X日
入金口座："＊＊＊"　≪ex.本人給与≫
本人給与調整：XXXX年X月XX日
支払日：XXXX年X月X日

【理由】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:'1.2 給与額"以上"の額を借りる',children:[{title:"100万円を超える",link:"【WC-C】貸付金_100万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-04/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（100万以上1,000万未満）",subject:"貸付（100万以上1,000万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

氏名：XXX
社員番号：XXXXXXXX
入社日：202X年X月X日
稼働先：株式会社XX　XX事業所
貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫
貸付希望金額：XX,000-
返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫

【貸付金内訳】
合計：XX,000-
内訳：下記参照
　XXX代：XX,000-
　XXX代：XX,000-
　XXX代：XX,000-

【貸付発生経緯】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"20万円を超える",link:"【WC-C】貸付金_20万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-04/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（20万以上100万未満）",subject:"貸付（20万以上100万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

氏名：XXX
社員番号：XXXXXXXX
入社日：202X年X月X日
稼働先：株式会社XX　XX事業所
貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫
貸付希望金額：XX,000-
返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫

【貸付金内訳】
合計：XX,000-
内訳：下記参照
　XXX代：XX,000-
　XXX代：XX,000-
　XXX代：XX,000-

【貸付発生経緯】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"20万円を超えない",link:"【WC-C】貸付金_20万円未満",url:"https://sites.google.com/nareru-group.co.jp/ringi-04/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（20万未満）",subject:"貸付（20万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

氏名：XXX
社員番号：XXXXXXXX
入社日：202X年X月X日
稼働先：株式会社XX　XX事業所
貸付希望日："＊＊＊"　≪ex.即日 or X月X日≫
貸付希望金額：XX,000-
返済方法："＊＊＊""　≪ex.派遣先のXXXに対し派遣料金と合わせて請求（202X年X月X日）≫

【貸付金内訳】
合計：XX,000-
内訳：下記参照
　XXX代：XX,000-
　XXX代：XX,000-
　XXX代：XX,000-

【貸付発生経緯】"＊＊＊"
＝＝
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"2. 物品や賃貸を借りる",children:[{title:"2.1 会社のキャッシュアウトが発生する（後日回収予定含む）",children:[{title:"レオパレス",link:"【WC-O】レンタル利用_費用発生有_レオパレス",url:"https://ssl.wf.jobcan.jp/#/request/new/285898/",details:{applicableProject:"レオパレス",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【賃貸物件の場合】
物件名：XXX
住所：XXX県XX市XXX
契約開始日：XX年XX月XX日
契約終了日：XX年XX月XX日
初回請求日：XX年XX月XX日
初回費用：XX,XXX円
初回事務手数料：XX,XXX円
請求内訳：
　XXX：XX,XXX円
　XXX：XX,XXX円
　XXX：XX,XXX円
最終月違約金有無：有 / 無
　有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"レンタカー",link:"【WC-O】レンタル利用_費用発生有_レンタカー",url:"https://ssl.wf.jobcan.jp/#/request/new/285898/",details:{applicableProject:"レンタカー",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【レンタカーの場合】
ランニング費用（月額/日額）：XX,XXX円
レンタカー用途：業務 / 通勤 / 業務と通勤
利用業者：XXXレンタカー
精算方法：
　※任意：注意点があれば記載
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"携帯電話",link:"【WC-O】レンタル利用_費用発生有_携帯電話",url:"https://ssl.wf.jobcan.jp/#/request/new/285898/",details:{applicableProject:"携帯電話",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【携帯電話の場合】
ランニング費用：XX,XXX円
利用業者：XXX回線
精算方法：
　※任意：注意点があれば記載
開始日：XX年XX月XX日
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"駐車場",link:"【WC-O】レンタル利用_費用発生有_駐車場",url:"https://ssl.wf.jobcan.jp/#/request/new/285898/",details:{applicableProject:"駐車場",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【駐車場の場合】
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"賃貸アパート",link:"【WC-O】レンタル利用_費用発生有_賃貸アパート",url:"https://ssl.wf.jobcan.jp/#/request/new/285898/",details:{applicableProject:"その他賃貸アパート",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【その他の場合】
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否

---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}}]},{title:"2.2 会社のキャッシュアウトが発生しない（派遣先または本人負担）",children:[{title:"レオパレス",link:"【WC-N】レンタル利用_費用発生無_レオパレス",url:"https://ssl.wf.jobcan.jp/#/request/new/259117/",details:{applicableProject:"レオパレス",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【賃貸物件の場合】
物件名：XXX
住所：XXX県XX市XXX
契約開始日：XX年XX月XX日
契約終了日：XX年XX月XX日
初回請求日：XX年XX月XX日
初回費用：XX,XXX円
初回事務手数料：XX,XXX円
請求内訳：
　XXX：XX,XXX円
　XXX：XX,XXX円
　XXX：XX,XXX円
最終月違約金有無：有 / 無
　有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"レンタカー",link:"【WC-N】レンタル利用_費用発生無_レンタカー",url:"https://ssl.wf.jobcan.jp/#/request/new/259117/",details:{applicableProject:"レンタカー",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【レンタカーの場合】
ランニング費用（月額/日額）：XX,XXX円
レンタカー用途：業務 / 通勤 / 業務と通勤
利用業者：XXXレンタカー
精算方法：
　※任意：注意点があれば記載
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"携帯電話",link:"【WC-N】レンタル利用_費用発生無_携帯電話",url:"https://ssl.wf.jobcan.jp/#/request/new/259117/",details:{applicableProject:"携帯電話",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【携帯電話の場合】
ランニング費用：XX,XXX円
利用業者：XXX回線
精算方法：
　※任意：注意点があれば記載
開始日：XX年XX月XX日
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"駐車場",link:"【WC-N】レンタル利用_費用発生無_駐車場",url:"https://ssl.wf.jobcan.jp/#/request/new/259117/",details:{applicableProject:"駐車場",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【駐車場の場合】
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否
---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}},{title:"賃貸アパート",link:"【WC-N】レンタル利用_費用発生無_賃貸アパート",url:"https://ssl.wf.jobcan.jp/#/request/new/259117/",details:{applicableProject:"その他賃貸アパート",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

現契約：XXX現場
派遣契約期間：XX年XX月XX日～XX月XX日
契約金額：XX,XXX円
請求方法：XXX
　※実費ではない場合は記載
　※実費(5000円上限/請求書払い)の場合は記載不要
負担先：XXXXXXXX
---
【その他の場合】
最終月違約金有無：有 / 無
	有の場合の金額：XX,XXX円
	有の場合の違約金発生条件：XXXXXXXXX
	有の場合の負担先：XXX
事務手数料請求可否：可 / 否

---
【添付】見積書ご確認ください
＝＝
ご裁可の程、よろしくお願い致します。
`}}]}]},{title:"3. 派遣先との契約に係る申請を行う",children:[{title:"3.1 案件を受託する",children:[{title:"施工図を受託する",link:"【WC-E】施工図受託",url:"https://sites.google.com/nareru-group.co.jp/ringi-07/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【顧客との取引条件】設定単価/企業設定単価を下回る契約_施工図",subject:"設定単価/企業設定単価を下回る契約_施工図_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"無 （※事前決裁必須）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて施工図契約申請を致します。

取引先：株式会社XX　XX支店
現場名：XX工事　≪企業単位の場合は不要≫
担当者：XX様
想定受注枚数：X枚
添付：{見積書 or 発注書}添付いたします。

{現場単位 or 企業単位 or 担当者単位}より、
≪どちらかを記入≫ー 用紙{A1 or A2 or A3サイズ}をXX,000/枚で受注を頂きました
≪どちらかを記入≫ー 時間単価をXX,000/hで受注を頂きました

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"3.2 自動車を利用する",children:[{title:"当社書式で契約をする",link:"【WC-G】自動車利用開始_当社書式_3者修正有",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動車利用に関する事項",subject:"自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"リーガルメール/締結したいデータ",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動車利用に関する申請を致します。

配属先：株式会社XX
配属日：XXXX/XX/XX～
対象技術社員：XX
社員番号：XXXXXXXX
利用目的：{通勤利用 / 業務利用 / 両方}

**利用理由を記載**

**添付資料**
リーガルメールと修正後データ

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"自家用車を利用する",link:"【WC-G】自動車利用開始_自家用車利用",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動車利用に関する事項",subject:"自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"必要に応じた書類を添付",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動車利用に関する申請を致します。

配属先：株式会社XX
配属日：XXXX/XX/XX～
対象技術社員：XX
社員番号：XXXXXXXX
利用目的：{通勤利用 / 業務利用 / 両方}

**利用理由を記載**

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"3.3 契約締結をする",children:[{title:"顧客システムを利用する",link:"【WC-E】顧客システム利用",url:"https://sites.google.com/nareru-group.co.jp/ringi-15/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"顧客システム利用に関する事項",subject:"顧客システム利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて顧客システム利用に関する申請を致します。

システム一覧に記載がないこと確認済です。
（URL：https://docs.google.com/spreadsheets/d/11lUkGeggvJ3dy2UG0KGuRCOVaQWknbiaE3u6JKBiSpo/edit?usp=sharing）

システム名称：XXX
利用における費用発生有無：{有/無}
単価・利用料：XXX円　≪上記費用発生がある場合のみ≫
取引先：株式会社XXX　XX支店（全社）
利用開始日：XXXX年/X月/X日～
申請理由："＊＊＊"　≪ex.当社書式を利用いただく交渉をしたが決裂し、取引先サイトでないと稼働できなくなったため≫

今後の進め方について
・帳票のリーガルは別途ワークフロー申請いたします
・リーガルWF後、ひな形登録のワークフローも申請いたします
・アカウント発行は情報システム部担当者に依頼します

＝＝
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"4. 技術社員に係る申請を行う",children:[{title:"4.1 給与改定を行う（昇給を含まない）",children:[{title:"事業部変更を伴う",link:"【WC-G2】原価変更_給与改定無",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（事業部の変更に限定される場合)",subject:"所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

社員氏名：XX
社員番号：XXXXXXXX
変更後の配属先：株式会社XX
契約期間：XXXX年/X月/X日～XXXX年/X月/X日
事業部変更日：XX年XX月1日
給与改定日：XX年XX月1日（XX月25日支給分）
変更前本人原価：XXX,000円
変更後本人原価：XXX,000円
添付書類：原価情報≪必ず添付≫

【変更理由】"＊＊＊"

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.2 給与改定を行う（昇給を含む）",children:[{title:"事業部変更を伴わず、本人対話の上で個別対応として行う",link:"【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`※下記稟議は当該稟議に集約されましたのでご確認ください
・③技術部社員の利益還元手当の支給に関する事項
・⑤期間社員、年間契約社員の規定内給与改定（最低賃金水準までの給与改定含む）
-----

表題の件につきまして、下記にて{個別給与改定 / 派遣先賞与支給}に関する申請を致します。

技術者名：XX
社員番号：XXXXXXXX
入社日：202X/X/X
配属先：株式会社XX
支給希望日：202X/X/X　※賞与の場合
変更日：202X/X/X　X月X日支給分より　※給与の場合
変更前金額：XXX円
変更後金額：XXX円

{賞与の場合}
理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給

{給与の場合}
理由：
給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）
≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫
（※添付必須）

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わず、「特別手当支給」を行う",link:"【WC-G】給与改定_特別定期昇給 / 特別賞与支給",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`※下記稟議は当該稟議に集約されましたのでご確認ください
・③技術部社員の利益還元手当の支給に関する事項
・⑤期間社員、年間契約社員の規定内給与改定（最低賃金水準までの給与改定含む）
-----

表題の件につきまして、下記にて{特別定期昇給 / 特別賞与支給}に関する申請を致します。

技術者名：XX
社員番号：XXXXXXXX
入社日：202X/X/X
配属先：株式会社XX
支給希望日：202X/X/X　※賞与の場合
変更日：202X/X/X　X月X日支給分より　※給与の場合
変更前金額：XXX円
変更後金額：XXX円

{賞与の場合}
理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給

{給与の場合}
理由：
給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）
≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫
（※添付必須）

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.3 雇用形態変更を行う",children:[{title:"事業部変更を伴う",link:"【WC-G2】原価変更_給与改定有",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）",subject:"所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

社員氏名：XX
社員番号：XXXXXXXX
変更後の配属先：株式会社XX
契約期間：XXXX年/X月/X日～XXXX年/X月/X日
事業部変更日：XX年XX月1日
給与改定日：XX年XX月1日（XX月25日支給分）
変更前本人原価：XXX,000円
変更後本人原価：XXX,000円
添付書類：原価情報≪必ず添付≫

【変更理由】"＊＊＊"

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わない",link:"【WC-G】雇用切り替え",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"雇用切替に関する事項",subject:"雇用切替に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて雇用切り替え（XX社員➡XX社員※雇用形態）に関する申請を致します。
※切替先が選択型正社員のケースは対象外

技術者名：XX
社員番号：XXXXXXXX
入社日：202X/X/X
配属先：株式会社XX
変更日：202X/X/X　X月X日支給分より　※給与の場合
給与改定有無：（有/無）

給与改定がある場合は：
変更前金額：XXX円（※給与改定稟議資料Excelの添付必須）　【リンク】
変更後金額：XXX円（※給与改定稟議資料Excelの添付必須）　【リンク】

理由：
ex.給与不満があり、退職引き留めのため。
ex.採用エリア外のため、通常案件供給ができないため
ex.介護のため、変則的な働き方を希望されたため（本人希望によりフルタイムから条件変更を希望）

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.4 事業部変更を行う（給与改定や雇用形態変更を伴わない）",children:[{title:"単純な事業部変更",link:"【WC-G2】原価変更_給与改定無",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（事業部の変更に限定される場合)",subject:"所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

社員氏名：XX
社員番号：XXXXXXXX
変更後　配属先：株式会社XX
契約期間：XXXX年/X月/X日～XXXX年/X月/X日
事業部変更日：XX年XX月1日

【変更理由】"＊＊＊"

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.5 退職をする",children:[{title:"自動退職をする",link:"【WC-G】退職_自動退職",url:"https://sites.google.com/nareru-group.co.jp/ringi-18/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（自動退職）",subject:"自動退職の決定に関する事項（自動退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動退職に関する申請を致します。
※Stafnoteを熟読し、理解の上で申請いたします。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
最終出勤日：XXXX年XX月XX日
退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫
理由："＊＊＊"　≪ex.音信不通により/退職代行手続きの滞りにより、等≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"満了退職をする",link:"【WC-G】退職_満了退職",url:"https://sites.google.com/nareru-group.co.jp/ringi-18/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（満了退職）",subject:"自動退職の決定に関する事項（満了退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて満了退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日
最終出勤日：XXXX年XX月XX日
退職日：XXXX年XX月XX日
理由："＊＊＊"　≪ex.退職届の提出を拒否されたため/音信不通により、等≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"死亡退職をする",link:"【WC-G】退職_死亡退職",url:"https://sites.google.com/nareru-group.co.jp/ringi-18/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（死亡退職）",subject:"自動退職の決定に関する事項（死亡退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"相続人からの給与誓約書",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて死亡退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日
最終出勤日：XXXX年XX月XX日
逝去日：XXXX年XX月XX日
相続人からの給与誓約書取得予定日：XXXX年XX月XX日≪取得済みの場合はPDFを添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"不備の処理を依頼する",link:"【WC-G】退職_不備処理依頼",url:"https://sites.google.com/nareru-group.co.jp/ringi-18/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（不備による処理の依頼）",subject:"自動退職の決定に関する事項（不備による処理の依頼）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
最終出勤日：XXXX年XX月XX日
退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫
理由："＊＊＊"　≪ex.印漏れ/誓約書記載拒否/退職日・退職理由の修正（証跡がある場合に限る)の処理のお願い）≫

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.6 賞与を支給する",children:[{title:"事業部変更を伴わず、本人対話の上で個別対応として行う",link:"【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて{個別給与改定 / 派遣先賞与支給}に関する申請を致します。

技術者名：XX
社員番号：XXXXXXXX
入社日：202X/X/X
配属先：株式会社XX
支給希望日：202X/X/X　※賞与の場合
変更日：202X/X/X　X月X日支給分より　※給与の場合
変更前金額：XXX円
変更後金額：XXX円

{賞与の場合}
理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給

{給与の場合}
理由：
給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）
≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫
（※添付必須）

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わず、「特別手当支給」を行う",link:"【WC-G】給与改定_特別定期昇給 / 特別賞与支給",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて{特別定期昇給 / 特別賞与支給}に関する申請を致します。

技術者名：XX
社員番号：XXXXXXXX
入社日：202X/X/X
配属先：株式会社XX
支給希望日：202X/X/X　※賞与の場合
変更日：202X/X/X　X月X日支給分より　※給与の場合
変更前金額：XXX円
変更後金額：XXX円

{賞与の場合}
理由：支給漏れ・計算ミスがあったため・派遣先の希望による支給

{給与の場合}
理由：
給与不満があったためXX手当に上乗せ（{上記派遣先 / 現場}に限り支給をお願い致します）
≪ex.- 携帯電話の貸与ができないため通信費の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 通勤距離が長いため通勤手当の上乗せとして特別手当にXX円を支給してください≫
≪ex.- 宿泊業務になるため(1日500円*20日＝10,000円)の上乗せとして特別手当にXX円を支給してください≫
（※添付必須）

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.7 給与保証を行う",children:[{title:"給与保証の申請",link:"【WC-G】給与保証",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"休業手当の支給割合変更、給与保証等に関する事項",subject:"休業手当の支給割合変更、給与保証等に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"次回分の派遣契約書",required:!1}],concurrentProposals:[{title:"",link:"【WC-G】雇用継続"}],applicationContent:`表題の件につきまして、下記にて給与保証に関する申請を致します。

氏名：XX
社員番号：XXXX
入社日：XXXX/XX/XX
派遣先(負担先)：株式会社XX　XX営業所
保証期間：XXXX年XX月XX日～XXXX年XX月XX日（X日間）
本人原価（純原価）：XX円

**申請理由を記述**
ex.労働者に非がないケースを記載（例：派遣先倒産により）
ex.期間社員囲い込みのため
ex.労働トラブル解決のため
ex.遠方に済んでいて健康診断・職場見学に1日要したため

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.8 雇用継続する",children:[{title:"雇用継続する",link:"【WC-G】雇用継続",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"有期雇用社員の雇用継続に関する事項",subject:"有期雇用社員の雇用継続に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"次回分の派遣契約書",required:!1}],concurrentProposals:[{title:"",link:"【WC-G】給与保証"}],applicationContent:`※継続期間が14日以上の場合のみ決裁を取得すること(14日未満の雇用継続はWFを省略)
14日未満の場合は営業部内で定められたルールに従って処理をしてください
----

表題の件につきまして、下記にて雇用継続に関する申請を致します。

技術者名：XX
社員№：X
入社日：XXXX/X/X
雇用継続期間：XX年XX月XX日～XX年XX月XX日（XX日間）

**継続決定理由を記載**
ex.労働者に非がないケースを記載（例：派遣先倒産により）
ex.期間社員囲い込みのため（例：時期派遣先決定しており、配属日がXX月XX日のため）
ex.労働トラブル解決のため
ex.遠方に済んでいて健康診断・職場見学に1日要したため

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.9 転籍に係る処理を行う",children:[{title:"転籍処理の申請",link:"【WC-G】転籍",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"転籍に関する事項",subject:"転籍に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"ESメール",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて転籍に関する申請を致します。
　派遣先への同時転籍人数：X人（純減日報を参照）

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"5. クレーム対応を行う",children:[{title:"5.1 値引きを行う",children:[{title:"値引き金額(税込)が1,500万円を超える",link:"【WC-F】値引き_1,500万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】1,500万以上",subject:"【クレーム・値引き】1,500万以上_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
社長へ事前相談済みです。

派遣先：株式会社XXX　XX支店
現場名：XXX
カスタマーNo：XXX
技術者：XXX
社員番号：XXXXXXXX
請求対象月：(西暦)XXXX年X月
売上想定額：XXX円
値引き総額：XXX,000円

【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫
【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が1,000万円を超える",link:"【WC-F】値引き_1,000万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】1,000万以上1,500万未満",subject:"【クレーム・値引き】1,000万以上1,500万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
社長へ事前相談済みです。

派遣先：株式会社XXX　XX支店
現場名：XXX
カスタマーNo：XXX
技術者：XXX
社員番号：XXXXXXXX
請求対象月：(西暦)XXXX年X月
売上想定額：XXX円
値引き総額：XXX,000円

【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫
【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が50万円を超える",link:"【WC-F】値引き_50万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】50万以上1,000万未満",subject:"【クレーム・値引き】50万以上1,000万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:`いずれか1-2種類(当月以内目安・速やかに提出すること目安/速やかに提出すること)■いずれか必須
①見積書（請求後）
②請求書（請求前）
■申請内容次第で添付
①勤怠（労務費の場合）
②クレーム報告書（クレーム起因）`,required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
社長へ事前相談済みです。

派遣先：株式会社XXX　XX支店
現場名：XXX
カスタマーNo：XXX
技術者：XXX
社員番号：XXXXXXXX
請求対象月：(西暦)XXXX年X月
売上想定額：XXX円
値引き総額：XXX,000円

【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫
【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が10万円を超える",link:"【WC-F】値引き_10万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】10万以上50万未満",subject:"【クレーム・値引き】10万以上50万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
社長へ事前相談済みです。

派遣先：株式会社XXX　XX支店
現場名：XXX
カスタマーNo：XXX
技術者：XXX
社員番号：XXXXXXXX
請求対象月：(西暦)XXXX年X月
売上想定額：XXX円
値引き総額：XXX,000円

【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫
【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が10万円を超えない",link:"【WC-F】値引き_10万円未満",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】10万未満",subject:"【クレーム・値引き】10万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
社長へ事前相談済みです。

派遣先：株式会社XXX　XX支店
現場名：XXX
カスタマーNo：XXX
技術者：XXX
社員番号：XXXXXXXX
請求対象月：(西暦)XXXX年X月
売上想定額：XXX円
値引き総額：XXX,000円

【内訳】添付書類参照ください　≪必ず見積書・請求書・勤怠データを添付してください≫
【発生理由】添付クレーム報告書を参照ください　≪必ず添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.2 什器を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.3 備品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.4 貸与品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.5 自動車を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"6. 破損・紛失対応をする",children:[{title:"6.1 什器を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.2 備品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.3 貸与品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.4 自動車を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

配属先：XX株式会社　XX事務所
費用負担者；XX（当社/本人/派遣先 ：それぞれの負担割合）
精算日（当社からの支払日）：XXXX年XX月XX日
精算日（資金回収日）：XXXX年XX月XX日
金額：XX,000円（総額を記載）
当社負担額：XX,000円

【発生原因】
**記載**
【交渉結果】
**記載**
【添付】
請求書・見積書

＝＝
ご裁可の程、よろしくお願い致します。`}}]}]}],Vo=[{title:"1. 請求書の記載内容を変更する",children:[{title:"1. 締日を変更する（契約書の変更が発生する）",children:[{title:"現場限りの締日変更",link:"【特例】現場限りの締日変更",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"現場限りの締日変更",subject:"現場限りの締日変更_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて現場限りの締日変更に関する申請を致します。

■社名：XXX
■カスタマーNo：XXX
■現場名：XXX
■対象月：XX月( or XX月～)
■請求額：XXX円（税込）
■指定請求書：有or無
■支払条件：
■現行締日：XXX
■変更後締日：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 現場表記を変更する（契約書の変更は発生しない）",children:[{title:"契約書と異なる現場表記での請求書発行",link:"【特例】契約書と異なる現場表記での請求書発行",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"契約書と異なる現場表記での請求書発行",subject:"現場名変更_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて現場表記での請求書発行に関する申請を致します。

■派遣先：XXX
■対象月：XX月
■技術社員：XXX
■締日：XXX
■変更前現場名：XXX
■変更後現場名：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"2. 請求書の合算・分割を行う",children:[{title:"1. 合算する（同月内で、同一人物での処理を行う）",children:[{title:"未入金以外の合算請求",link:"【特例】未入金以外の合算請求",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"未入金以外の合算請求",subject:"未入金以外の合算請求_株式会社XXX",attachments:[{name:"合算請求書2部（手元にない場合は添付不要）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて合算請求に関する申請を致します。

■技術者名：XXX
■現場：XXX
■合算対象：XX現場とXX現場
■経緯：XXX（自由記載）

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 合算する（同月内で、複数人物に影響が生じる処理を行う）",children:[{title:"技術者の経費精算を後任技術者の請求書で請求",link:"【特例】技術者の経費精算を後任技術者の請求書で請求",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"技術者の経費精算を後任技術者の請求書で請求",subject:"合算請求_株式会社XXX（X月分Aさん/X月分Bさん）",attachments:[{name:"請求書（手元にない場合は添付不要）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて後任技術者の請求書請求に関する申請を致します。

①
■技術者名：XXX
■社員番号：XXXXXXXX
■対象月：X月
■カスタマーNo：XXXXXXXXX
■現場名：XXX
②
■技術者名：XXX
■社員番号：XXXXXXXX
■対象月：X月
■カスタマーNo：XXXXXXXXX
■現場名：XXX

■経緯：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"3. 分割する（割合変更の発生）",children:[{title:"分割請求",link:"【特例】分割請求",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"分割請求",subject:"分割請求_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて分割請求に関する申請を致します。

■技術者名：XXX
■社員番号：XXXXXXXX
■対象月：XXX

①分割請求先：
■現場名：XXX
■分割内訳：ex.X月X日～X月X日まで

②分割請求先：
■現場名：XXX
■分割内訳：ex.X月X日～X月X日まで

■経緯：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"4. 分割する（費目変更の発生）",children:[{title:"人件費・残業代・交通費で請求明細を分割",link:"【特例】人件費・残業代・交通費で請求明細を分割",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"人件費・残業代・交通費で請求明細を分割",subject:"請求明細を分割_株式会社XX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて分割請求に関する申請を致します。

■技術者名：XXX
■社員番号：XXXXXXXX
■派遣先：株式会社XXX
■対象月：XXX

①分割請求先：
■現場名：XXX
■分割内訳：交通費/残業代/人件費

②分割請求先：
■現場名：XXX
■分割内訳：交通費/残業代/人件費

■経緯：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"3. その他請求・売上修正",children:[{title:"1. 売上修正",children:[{title:"勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",link:"【特例】勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",subject:"XX月分人件費の売上修正_株式会社XXXX",attachments:[{name:"修正前請求書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて売上修正に関する申請を致します。

■技術社員：XXX
■社員番号：XXX
■請求対象月：XX月
■社名：XXX
■配属先：XXX
■配属日：2025年XX月XX日～
■差額金額：XXX円（税込）

■差額発生経緯：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 請求書修正",children:[{title:"契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",link:"【特例】契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",url:"https://ssl.wf.jobcan.jp/#/request/new/289474/",details:{applicableProject:"契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",subject:`(差分請求の場合)差分請求依頼_X月分Aさん_株式会社XXX
(単一請求の場合)新規請求依頼_X月分Aさん_株式会社XXX`,attachments:[{name:"差が生じた際の勤務表",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて実働期間との差異請求に関する申請を致します。

■技術者：XXX
■社員番号：XXXXXXXX
■現場名：XXX
■請求対象項目：ex.残業申請忘れ/領収書送付忘れ

■経緯：

＝＝

ご裁可の程、よろしくお願い致します。`}}]}]}],Rf=()=>{const[e,n]=Be.useState(""),t=Be.useMemo(()=>{if(!e.trim())return Vo;const r=e.toLowerCase(),l=u=>u.map(i=>{const o=i.title.toLowerCase().includes(r)||i.link&&i.link.toLowerCase().includes(r);let s;i.children&&(s=l(i.children));const c=s&&s.length>0;return o||c?Object.assign(Object.assign({},i),{children:s}):null}).filter(i=>i!==null);return l(Vo)},[e]);return y.jsxs("div",{className:"max-w-4xl mx-auto",children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4",children:[y.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"特例扱申請・指示書"}),y.jsx("a",{href:"#/",className:"inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"← 稟議起案フローに戻る"})]}),y.jsxs("div",{className:"text-left mb-8 text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-4",children:[y.jsx("p",{className:"font-semibold text-blue-800 mb-2",children:"ℹ️ 特例扱申請・指示書について"}),y.jsx("p",{className:"text-blue-700",children:"対象月における請求額の変更が発生しない場合は、該当する項目を選択してWFへ進んでください。"})]}),y.jsxs("div",{className:"mb-8 relative",children:[y.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center",children:y.jsx("svg",{className:"h-5 w-5 text-slate-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),y.jsx("input",{type:"search",value:e,onChange:r=>n(r.target.value),placeholder:"キーワードで検索...",className:"w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200","aria-label":"特例扱申請・指示書を検索"})]}),y.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:t.length>0?t.map((r,l)=>y.jsx(zi,{item:r,searchTerm:e},l)):y.jsxs("div",{className:"p-8 text-center text-slate-500",children:[y.jsx("p",{className:"font-semibold",children:"検索結果が見つかりませんでした。"}),y.jsx("p",{className:"text-sm mt-1",children:"別のキーワードでお試しください。"})]})}),y.jsx("footer",{className:"text-center mt-12 text-slate-500",children:y.jsx("p",{children:"© 2024 Ringi Proposal Flow Guide. All Rights Reserved."})})]})},Mf=()=>{const[e,n]=Be.useState(window.location.hash);Be.useEffect(()=>{const u=()=>n(window.location.hash);return window.addEventListener("hashchange",u),()=>window.removeEventListener("hashchange",u)},[]);const[t,r]=Be.useState(""),l=Be.useMemo(()=>{if(!t.trim())return qo;const u=t.toLowerCase(),i=o=>o.map(s=>{const c=s.title.toLowerCase().includes(u)||s.link&&s.link.toLowerCase().includes(u);let m;s.children&&(m=i(s.children));const p=m&&m.length>0;return c||p?Object.assign(Object.assign({},s),{children:m}):null}).filter(s=>s!==null);return i(qo)},[t]);return y.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans antialiased",children:[y.jsx("header",{className:"bg-white border-b border-slate-200",children:y.jsx("div",{className:"container mx-auto px-4",children:y.jsx("div",{className:"flex justify-center items-center py-4",children:y.jsx("a",{href:"https://worldcorp-jp.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"World Corporation Homepage",children:y.jsx("img",{src:"https://prcdn.freetls.fastly.net/release_image/132820/8/132820-8-3af0ab6387a4e3bdde6e85f50849d3bf-360x160.png?format=jpeg&auto=webp&fit=bounds&width=720&height=480",alt:"株式会社ワールドコーポレーション ロゴ",className:"h-8 w-auto"})})})})}),y.jsx("main",{className:"container mx-auto px-4 py-12 sm:py-16",children:e==="#/special"?y.jsx(Rf,{}):y.jsxs("div",{className:"max-w-4xl mx-auto",children:[y.jsxs("div",{className:"text-center mb-6",children:[y.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight",children:"稟議起案フロー"}),y.jsx("p",{className:"mt-4 max-w-2xl mx-auto text-lg text-slate-600",children:"必要な申請項目を選択するか、キーワードで検索してください。"})]}),y.jsx("div",{className:"text-center mb-8 text-slate-600",children:y.jsxs("p",{children:["もし起案できる稟議に複数候補がある場合は、",y.jsx("strong",{className:"text-red-600 underline decoration-2",children:"決裁権が高い方の稟議"}),"を選択ください"]})}),y.jsxs("div",{className:"text-left mb-8 text-slate-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[y.jsx("p",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 特例扱申請書の提出について"}),y.jsxs("p",{className:"text-yellow-700",children:["対象月における請求額の変更が発生しない場合は稟議ではなく、",y.jsx("a",{href:"#/special",className:"text-indigo-600 hover:underline font-semibold",children:"「特例扱申請・指示書」"}),"の提出が必要です"]})]}),y.jsxs("div",{className:"mb-8 relative",children:[y.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center",children:y.jsx("svg",{className:"h-5 w-5 text-slate-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),y.jsx("input",{type:"search",value:t,onChange:u=>r(u.target.value),placeholder:"キーワードで検索...",className:"w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200","aria-label":"稟議フローを検索"})]}),y.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:l.length>0?l.map((u,i)=>y.jsx(zi,{item:u,searchTerm:t},i)):y.jsxs("div",{className:"p-8 text-center text-slate-500",children:[y.jsx("p",{className:"font-semibold",children:"検索結果が見つかりませんでした。"}),y.jsx("p",{className:"text-sm mt-1",children:"別のキーワードでお試しください。"})]})}),y.jsx("footer",{className:"text-center mt-12 text-slate-500",children:y.jsx("p",{children:"© 2024 Ringi Proposal Flow Guide. All Rights Reserved."})})]})})]})},uc=document.getElementById("root");if(!uc)throw new Error("Could not find root element to mount to");const Wf=lc(uc);Wf.render(y.jsx(_c.StrictMode,{children:y.jsx(Mf,{})}));
//# sourceMappingURL=index-MyV_7qJ8.js.map
