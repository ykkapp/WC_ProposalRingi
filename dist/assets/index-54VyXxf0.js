(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},el={},Gu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),gc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),To=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ku=Object.assign,Yu={};function it(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=it.prototype;function Ri(e,n,t){this.props=e,this.context=n,this.refs=Yu,this.updater=t||Qu}var Ui=Ri.prototype=new Zu;Ui.constructor=Ri;Ku(Ui,it.prototype);Ui.isPureReactComponent=!0;var Ao=Array.isArray,Ju=Object.prototype.hasOwnProperty,Oi={current:null},bu={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ju.call(n,r)&&!bu.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Qt,type:e,key:i,ref:o,props:l,_owner:Oi.current}}function yc(e,n){return{$$typeof:Qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qt}function Cc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Do=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):n.toString(36)}function vr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qt:case sc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+yl(o,0):r,Ao(l)?(t="",e!=null&&(t=e.replace(Do,"$&/")+"/"),vr(l,n,t,"",function(c){return c})):l!=null&&(Mi(l)&&(l=yc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Do,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Ao(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+yl(i,u);o+=vr(i,n,t,s,l)}else if(s=vc(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+yl(i,u++),o+=vr(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,n,t){if(e==null)return e;var r=[],l=0;return vr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},yr={transition:null},kc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:yr,ReactCurrentOwner:Oi};function ns(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=it;B.Fragment=ac;B.Profiler=Xc;B.PureComponent=Ri;B.StrictMode=cc;B.Suspense=mc;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;B.act=ns;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ku({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Oi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)Ju.call(n,s)&&!bu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Qt,type:e.type,key:l,ref:i,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};B.createElement=es;B.createFactory=function(e){var n=es.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:pc,render:e}};B.isValidElement=Mi;B.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:wc}};B.memo=function(e,n){return{$$typeof:gc,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=yr.transition;yr.transition={};try{e()}finally{yr.transition=n}};B.unstable_act=ns;B.useCallback=function(e,n){return ue.current.useCallback(e,n)};B.useContext=function(e){return ue.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};B.useEffect=function(e,n){return ue.current.useEffect(e,n)};B.useId=function(){return ue.current.useId()};B.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return ue.current.useMemo(e,n)};B.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};B.useRef=function(e){return ue.current.useRef(e)};B.useState=function(e){return ue.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return ue.current.useTransition()};B.version="18.3.1";Gu.exports=B;var Fe=Gu.exports;const Ec=uc(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Fe,xc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Pc=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)jc.call(n,r)&&!Nc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:xc,type:e,key:i,ref:o,props:l,_owner:Pc.current}}el.Fragment=Sc;el.jsx=ts;el.jsxs=ts;Vu.exports=el;var v=Vu.exports,rs={exports:{}},ve={},ls={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,P){var N=_.length;_.push(P);e:for(;0<N;){var q=N-1>>>1,K=_[q];if(0<l(K,P))_[q]=P,_[N]=K,N=q;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],N=_.pop();if(N!==P){_[0]=N;e:for(var q=0,K=_.length,bt=K>>>1;q<bt;){var hn=2*(q+1)-1,vl=_[hn],vn=hn+1,er=_[vn];if(0>l(vl,N))vn<K&&0>l(er,vl)?(_[q]=er,_[vn]=N,q=vn):(_[q]=vl,_[hn]=N,q=hn);else if(vn<K&&0>l(er,N))_[q]=er,_[vn]=N,q=vn;else break e}}return P}function l(_,P){var N=_.sortIndex-P.sortIndex;return N!==0?N:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],m=1,p=null,d=3,y=!1,C=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=t(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=_)r(c),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(c)}}function g(_){if(w=!1,f(_),!C)if(t(s)!==null)C=!0,gl(E);else{var P=t(c);P!==null&&hl(g,P.startTime-_)}}function E(_,P){C=!1,w&&(w=!1,X(j),j=-1),y=!0;var N=d;try{for(f(P),p=t(s);p!==null&&(!(p.expirationTime>P)||_&&!Se());){var q=p.callback;if(typeof q=="function"){p.callback=null,d=p.priorityLevel;var K=q(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===t(s)&&r(s),f(P)}else r(s);p=t(s)}if(p!==null)var bt=!0;else{var hn=t(c);hn!==null&&hl(g,hn.startTime-P),bt=!1}return bt}finally{p=null,d=N,y=!1}}var x=!1,S=null,j=-1,H=5,F=-1;function Se(){return!(e.unstable_now()-F<H)}function st(){if(S!==null){var _=e.unstable_now();F=_;var P=!0;try{P=S(!0,_)}finally{P?at():(x=!1,S=null)}}else x=!1}var at;if(typeof a=="function")at=function(){a(st)};else if(typeof MessageChannel<"u"){var zo=new MessageChannel,oc=zo.port2;zo.port1.onmessage=st,at=function(){oc.postMessage(null)}}else at=function(){R(st,0)};function gl(_){S=_,x||(x=!0,at())}function hl(_,P){j=R(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){C||y||(C=!0,gl(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var N=d;d=P;try{return _()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=d;d=_;try{return P()}finally{d=N}},e.unstable_scheduleCallback=function(_,P,N){var q=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?q+N:q):N=q,_){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=N+K,_={id:m++,callback:P,priorityLevel:_,startTime:N,expirationTime:K,sortIndex:-1},N>q?(_.sortIndex=N,n(c,_),t(s)===null&&_===t(c)&&(w?(X(j),j=-1):w=!0,hl(g,N-q))):(_.sortIndex=K,n(s,_),C||y||(C=!0,gl(E))),_},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(_){var P=d;return function(){var N=d;d=P;try{return _.apply(this,arguments)}finally{d=N}}}})(is);ls.exports=is;var Bc=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=Fe,he=Bc;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,Ft={};function Fn(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Ft[e]=n,e=0;e<n.length;e++)os.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ro={},Uo={};function zc(e){return $l.call(Uo,e)?!0:$l.call(Ro,e)?!1:Lc.test(e)?Uo[e]=!0:(Ro[e]=!0,!1)}function Tc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,n,t,r){if(n===null||typeof n>"u"||Tc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wi,Ii);ee[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wi,Ii);ee[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wi,Ii);ee[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ac(n,t,l,r)&&(t=null),r||l===null?zc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),qi=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),ss=Symbol.for("react.context"),$i=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),Vi=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Oo=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Cl;function vt(e){if(Cl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Cl=n&&n[1]||""}return`
`+Cl+e}var wl=!1;function kl(e,n){if(!e||wl)return"";wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function Dc(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Tn:return"Portal";case Vl:return"Profiler";case qi:return"StrictMode";case Gl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case $i:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vi:return n=e.displayName||null,n!==null?n:Kl(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return Kl(e(n))}catch{}}return null}function Rc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(n);case 8:return n===qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uc(e){var n=cs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Uc(e))}function Xs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yl(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Mo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fs(e,n){n=n.checked,n!=null&&Hi(e,"checked",n,!1)}function Zl(e,n){fs(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jl(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jl(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yt=Array.isArray;function Vn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(yt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function ds(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ho(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var kt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(kt).forEach(function(e){Oc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),kt[n]=kt[e]})});function gs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||kt.hasOwnProperty(e)&&kt[e]?(""+n).trim():n+"px"}function hs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=gs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Mc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,n){if(n){if(Mc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Gn=null,Qn=null;function qo(e){if(e=Zt(e)){if(typeof li!="function")throw Error(h(280));var n=e.stateNode;n&&(n=il(n),li(e.stateNode,e.type,n))}}function vs(e){Gn?Qn?Qn.push(e):Qn=[e]:Gn=e}function ys(){if(Gn){var e=Gn,n=Qn;if(Qn=Gn=null,qo(e),n)for(e=0;e<n.length;e++)qo(n[e])}}function Cs(e,n){return e(n)}function ws(){}var El=!1;function ks(e,n,t){if(El)return e(n,t);El=!0;try{return Cs(e,n,t)}finally{El=!1,(Gn!==null||Qn!==null)&&(ws(),ys())}}function zt(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var ii=!1;if($e)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{ii=!1}function Wc(e,n,t,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var Et=!1,Fr=null,Lr=!1,oi=null,Ic={onError:function(e){Et=!0,Fr=e}};function Hc(e,n,t,r,l,i,o,u,s){Et=!1,Fr=null,Wc.apply(Ic,arguments)}function qc(e,n,t,r,l,i,o,u,s){if(Hc.apply(this,arguments),Et){if(Et){var c=Fr;Et=!1,Fr=null}else throw Error(h(198));Lr||(Lr=!0,oi=c)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Es(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $o(e){if(Ln(e)!==e)throw Error(h(188))}function $c(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return $o(l),e;if(i===r)return $o(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function _s(e){return e=$c(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xs(e);if(n!==null)return n;e=e.sibling}return null}var Ss=he.unstable_scheduleCallback,Vo=he.unstable_cancelCallback,Vc=he.unstable_shouldYield,Gc=he.unstable_requestPaint,$=he.unstable_now,Qc=he.unstable_getCurrentPriorityLevel,Qi=he.unstable_ImmediatePriority,js=he.unstable_UserBlockingPriority,zr=he.unstable_NormalPriority,Kc=he.unstable_LowPriority,Ps=he.unstable_IdlePriority,nl=null,Ue=null;function Yc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:bc,Zc=Math.log,Jc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var ir=64,or=4194304;function Ct(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~l;u!==0?r=Ct(u):(i&=o,i!==0&&(r=Ct(i)))}else o=t&~l,o!==0?r=Ct(o):i!==0&&(r=Ct(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),l=1<<t,r|=e[t],n&=~l;return r}function eX(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nX(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),u=1<<o,s=l[o];s===-1?(!(u&t)||u&r)&&(l[o]=eX(u,n)):s<=n&&(e.expiredLanes|=u),i&=~u}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function _l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function tX(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Le(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ki(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var z=0;function Bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fs,Yi,Ls,zs,Ts,si=!1,ur=[],rn=null,ln=null,on=null,Tt=new Map,At=new Map,be=[],rX="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Tt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function ft(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&Yi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function lX(e,n,t,r,l){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,l),!0;case"dragenter":return ln=ft(ln,e,n,t,r,l),!0;case"mouseover":return on=ft(on,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Tt.set(i,ft(Tt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,At.set(i,ft(At.get(i)||null,e,n,t,r,l)),!0}return!1}function As(e){var n=wn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=Es(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){Ls(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ai(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ri=r,t.target.dispatchEvent(r),ri=null}else return n=Zt(t),n!==null&&Yi(n),e.blockedOn=t,!1;n.shift()}return!0}function Qo(e,n,t){Cr(e)&&t.delete(n)}function iX(){si=!1,rn!==null&&Cr(rn)&&(rn=null),ln!==null&&Cr(ln)&&(ln=null),on!==null&&Cr(on)&&(on=null),Tt.forEach(Qo),At.forEach(Qo)}function dt(e,n){e.blockedOn===n&&(e.blockedOn=null,si||(si=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,iX)))}function Dt(e){function n(l){return dt(l,e)}if(0<ur.length){dt(ur[0],e);for(var t=1;t<ur.length;t++){var r=ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&dt(rn,e),ln!==null&&dt(ln,e),on!==null&&dt(on,e),Tt.forEach(n),At.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)As(t),t.blockedOn===null&&be.shift()}var Kn=Ke.ReactCurrentBatchConfig,Ar=!0;function oX(e,n,t,r){var l=z,i=Kn.transition;Kn.transition=null;try{z=1,Zi(e,n,t,r)}finally{z=l,Kn.transition=i}}function uX(e,n,t,r){var l=z,i=Kn.transition;Kn.transition=null;try{z=4,Zi(e,n,t,r)}finally{z=l,Kn.transition=i}}function Zi(e,n,t,r){if(Ar){var l=ai(e,n,t,r);if(l===null)Tl(e,n,r,Dr,t),Go(e,r);else if(lX(l,e,n,t,r))r.stopPropagation();else if(Go(e,r),n&4&&-1<rX.indexOf(e)){for(;l!==null;){var i=Zt(l);if(i!==null&&Fs(i),i=ai(e,n,t,r),i===null&&Tl(e,n,r,Dr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Tl(e,n,r,null,t)}}var Dr=null;function ai(e,n,t,r){if(Dr=null,e=Gi(r),e=wn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Es(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Dr=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Qi:return 1;case js:return 4;case zr:case Kc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var nn=null,Ji=null,wr=null;function Rs(){if(wr)return wr;var e,n=Ji,t=n.length,r,l="value"in nn?nn.value:nn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return wr=l.slice(e,1<r?1-r:void 0)}function kr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ko(){return!1}function ye(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:Ko,this.isPropagationStopped=Ko,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=ye(ot),Yt=W({},ot,{view:0,detail:0}),sX=ye(Yt),xl,Sl,pt,tl=W({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(xl=e.screenX-pt.screenX,Sl=e.screenY-pt.screenY):Sl=xl=0,pt=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Yo=ye(tl),aX=W({},tl,{dataTransfer:0}),cX=ye(aX),XX=W({},Yt,{relatedTarget:0}),jl=ye(XX),fX=W({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),dX=ye(fX),pX=W({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mX=ye(pX),gX=W({},ot,{data:0}),Zo=ye(gX),hX={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vX={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yX={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CX(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yX[e])?!!n[e]:!1}function eo(){return CX}var wX=W({},Yt,{key:function(e){if(e.key){var n=hX[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vX[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kX=ye(wX),EX=W({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=ye(EX),_X=W({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),xX=ye(_X),SX=W({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),jX=ye(SX),PX=W({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NX=ye(PX),BX=[9,13,27,32],no=$e&&"CompositionEvent"in window,_t=null;$e&&"documentMode"in document&&(_t=document.documentMode);var FX=$e&&"TextEvent"in window&&!_t,Us=$e&&(!no||_t&&8<_t&&11>=_t),bo=" ",eu=!1;function Os(e,n){switch(e){case"keyup":return BX.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function LX(e,n){switch(e){case"compositionend":return Ms(n);case"keypress":return n.which!==32?null:(eu=!0,bo);case"textInput":return e=n.data,e===bo&&eu?null:e;default:return null}}function zX(e,n){if(Dn)return e==="compositionend"||!no&&Os(e,n)?(e=Rs(),wr=Ji=nn=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var TX={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!TX[e.type]:n==="textarea"}function Ws(e,n,t,r){vs(r),n=Rr(n,"onChange"),0<n.length&&(t=new bi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xt=null,Rt=null;function AX(e){Js(e,0)}function rl(e){var n=On(e);if(Xs(n))return e}function DX(e,n){if(e==="change")return n}var Is=!1;if($e){var Pl;if($e){var Nl="oninput"in document;if(!Nl){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),Nl=typeof tu.oninput=="function"}Pl=Nl}else Pl=!1;Is=Pl&&(!document.documentMode||9<document.documentMode)}function ru(){xt&&(xt.detachEvent("onpropertychange",Hs),Rt=xt=null)}function Hs(e){if(e.propertyName==="value"&&rl(Rt)){var n=[];Ws(n,Rt,e,Gi(e)),ks(AX,n)}}function RX(e,n,t){e==="focusin"?(ru(),xt=n,Rt=t,xt.attachEvent("onpropertychange",Hs)):e==="focusout"&&ru()}function UX(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Rt)}function OX(e,n){if(e==="click")return rl(n)}function MX(e,n){if(e==="input"||e==="change")return rl(n)}function WX(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Te=typeof Object.is=="function"?Object.is:WX;function Ut(e,n){if(Te(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!$l.call(n,l)||!Te(e[l],n[l]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,n){var t=lu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lu(t)}}function qs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $s(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function IX(e){var n=$s(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=iu(t,i);var o=iu(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var HX=$e&&"documentMode"in document&&11>=document.documentMode,Rn=null,ci=null,St=null,Xi=!1;function ou(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xi||Rn==null||Rn!==Br(r)||(r=Rn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),St&&Ut(St,r)||(St=r,r=Rr(ci,"onSelect"),0<r.length&&(n=new bi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Rn)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Un={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Bl={},Vs={};$e&&(Vs=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function ll(e){if(Bl[e])return Bl[e];if(!Un[e])return e;var n=Un[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vs)return Bl[e]=n[t];return e}var Gs=ll("animationend"),Qs=ll("animationiteration"),Ks=ll("animationstart"),Ys=ll("transitionend"),Zs=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,n){Zs.set(e,n),Fn(n,[e])}for(var Fl=0;Fl<uu.length;Fl++){var Ll=uu[Fl],qX=Ll.toLowerCase(),$X=Ll[0].toUpperCase()+Ll.slice(1);pn(qX,"on"+$X)}pn(Gs,"onAnimationEnd");pn(Qs,"onAnimationIteration");pn(Ks,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ys,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VX=new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));function su(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,qc(r,n,void 0,e),e.currentTarget=null}function Js(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;su(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;su(l,u,c),i=s}}}if(Lr)throw e=oi,Lr=!1,oi=null,e}function A(e,n){var t=n[gi];t===void 0&&(t=n[gi]=new Set);var r=e+"__bubble";t.has(r)||(bs(n,e,2,!1),t.add(r))}function zl(e,n,t){var r=0;n&&(r|=4),bs(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ot(e){if(!e[cr]){e[cr]=!0,os.forEach(function(t){t!=="selectionchange"&&(VX.has(t)||zl(t,!1,e),zl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,zl("selectionchange",!1,n))}}function bs(e,n,t,r){switch(Ds(n)){case 1:var l=oX;break;case 4:l=uX;break;default:l=Zi}t=l.bind(null,n,t,e),l=void 0,!ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Tl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=wn(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ks(function(){var c=i,m=Gi(t),p=[];e:{var d=Zs.get(e);if(d!==void 0){var y=bi,C=e;switch(e){case"keypress":if(kr(t)===0)break e;case"keydown":case"keyup":y=kX;break;case"focusin":C="focus",y=jl;break;case"focusout":C="blur",y=jl;break;case"beforeblur":case"afterblur":y=jl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cX;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xX;break;case Gs:case Qs:case Ks:y=dX;break;case Ys:y=jX;break;case"scroll":y=sX;break;case"wheel":y=NX;break;case"copy":case"cut":case"paste":y=mX;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Jo}var w=(n&4)!==0,R=!w&&e==="scroll",X=w?d!==null?d+"Capture":null:d;w=[];for(var a=c,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,X!==null&&(g=zt(a,X),g!=null&&w.push(Mt(a,g,f)))),R)break;a=a.return}0<w.length&&(d=new y(d,C,null,t,m),p.push({event:d,listeners:w}))}}if(!(n&7)){e:{if(d=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",d&&t!==ri&&(C=t.relatedTarget||t.fromElement)&&(wn(C)||C[Ve]))break e;if((y||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,y?(C=t.relatedTarget||t.toElement,y=c,C=C?wn(C):null,C!==null&&(R=Ln(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(y=null,C=c),y!==C)){if(w=Yo,g="onMouseLeave",X="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=Jo,g="onPointerLeave",X="onPointerEnter",a="pointer"),R=y==null?d:On(y),f=C==null?d:On(C),d=new w(g,a+"leave",y,t,m),d.target=R,d.relatedTarget=f,g=null,wn(m)===c&&(w=new w(X,a+"enter",C,t,m),w.target=f,w.relatedTarget=R,g=w),R=g,y&&C)n:{for(w=y,X=C,a=0,f=w;f;f=zn(f))a++;for(f=0,g=X;g;g=zn(g))f++;for(;0<a-f;)w=zn(w),a--;for(;0<f-a;)X=zn(X),f--;for(;a--;){if(w===X||X!==null&&w===X.alternate)break n;w=zn(w),X=zn(X)}w=null}else w=null;y!==null&&au(p,d,y,w,!1),C!==null&&R!==null&&au(p,R,C,w,!0)}}e:{if(d=c?On(c):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var E=DX;else if(nu(d))if(Is)E=MX;else{E=UX;var x=RX}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=OX);if(E&&(E=E(e,c))){Ws(p,E,t,m);break e}x&&x(e,d,c),e==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Jl(d,"number",d.value)}switch(x=c?On(c):window,e){case"focusin":(nu(x)||x.contentEditable==="true")&&(Rn=x,ci=c,St=null);break;case"focusout":St=ci=Rn=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,ou(p,t,m);break;case"selectionchange":if(HX)break;case"keydown":case"keyup":ou(p,t,m)}var S;if(no)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dn?Os(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Us&&t.locale!=="ko"&&(Dn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dn&&(S=Rs()):(nn=m,Ji="value"in nn?nn.value:nn.textContent,Dn=!0)),x=Rr(c,j),0<x.length&&(j=new Zo(j,e,null,t,m),p.push({event:j,listeners:x}),S?j.data=S:(S=Ms(t),S!==null&&(j.data=S)))),(S=FX?LX(e,t):zX(e,t))&&(c=Rr(c,"onBeforeInput"),0<c.length&&(m=new Zo("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=S))}Js(p,n)})}function Mt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Rr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=zt(e,t),i!=null&&r.unshift(Mt(e,i,l)),i=zt(e,n),i!=null&&r.push(Mt(e,i,l))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var u=t,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=zt(t,i),s!=null&&o.unshift(Mt(t,s,u))):l||(s=zt(t,i),s!=null&&o.push(Mt(t,s,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var GX=/\r\n?/g,QX=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(GX,`
`).replace(QX,"")}function Xr(e,n,t){if(n=cu(n),cu(e)!==n&&t)throw Error(h(425))}function Ur(){}var fi=null,di=null;function pi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,KX=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,YX=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(e){return Xu.resolve(null).then(e).catch(ZX)}:mi;function ZX(e){setTimeout(function(){throw e})}function Al(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Dt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Dt(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ut=Math.random().toString(36).slice(2),Re="__reactFiber$"+ut,Wt="__reactProps$"+ut,Ve="__reactContainer$"+ut,gi="__reactEvents$"+ut,JX="__reactListeners$"+ut,bX="__reactHandles$"+ut;function wn(e){var n=e[Re];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ve]||t[Re]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fu(e);e!==null;){if(t=e[Re])return t;e=fu(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Re]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function il(e){return e[Wt]||null}var hi=[],Mn=-1;function mn(e){return{current:e}}function D(e){0>Mn||(e.current=hi[Mn],hi[Mn]=null,Mn--)}function T(e,n){Mn++,hi[Mn]=e.current,e.current=n}var dn={},le=mn(dn),Xe=mn(!1),Sn=dn;function bn(e,n){var t=e.type.contextTypes;if(!t)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Or(){D(Xe),D(le)}function du(e,n,t){if(le.current!==dn)throw Error(h(168));T(le,n),T(Xe,t)}function ea(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,Rc(e)||"Unknown",l));return W({},t,r)}function Mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Sn=le.current,T(le,e),T(Xe,Xe.current),!0}function pu(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=ea(e,n,Sn),r.__reactInternalMemoizedMergedChildContext=e,D(Xe),D(le),T(le,e)):D(Xe),T(Xe,t)}var We=null,ol=!1,Dl=!1;function na(e){We===null?We=[e]:We.push(e)}function ef(e){ol=!0,na(e)}function gn(){if(!Dl&&We!==null){Dl=!0;var e=0,n=z;try{var t=We;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}We=null,ol=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),Ss(Qi,gn),l}finally{z=n,Dl=!1}}return null}var Wn=[],In=0,Wr=null,Ir=0,Ce=[],we=0,jn=null,Ie=1,He="";function yn(e,n){Wn[In++]=Ir,Wn[In++]=Wr,Wr=e,Ir=n}function ta(e,n,t){Ce[we++]=Ie,Ce[we++]=He,Ce[we++]=jn,jn=e;var r=Ie;e=He;var l=32-Le(r)-1;r&=~(1<<l),t+=1;var i=32-Le(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ie=1<<32-Le(n)+l|t<<l|r,He=i+e}else Ie=1<<i|t<<l|r,He=e}function ro(e){e.return!==null&&(yn(e,1),ta(e,1,0))}function lo(e){for(;e===Wr;)Wr=Wn[--In],Wn[In]=null,Ir=Wn[--In],Wn[In]=null;for(;e===jn;)jn=Ce[--we],Ce[we]=null,He=Ce[--we],Ce[we]=null,Ie=Ce[--we],Ce[we]=null}var ge=null,me=null,U=!1,Be=null;function ra(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Ie,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yi(e){if(U){var n=me;if(n){var t=n;if(!mu(e,n)){if(vi(e))throw Error(h(418));n=un(t.nextSibling);var r=ge;n&&mu(e,n)?ra(r,t):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(vi(e))throw Error(h(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!U)return gu(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!pi(e.type,e.memoizedProps)),n&&(n=me)){if(vi(e))throw la(),Error(h(418));for(;n;)ra(e,n),n=un(n.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?un(e.stateNode.nextSibling):null;return!0}function la(){for(var e=me;e;)e=un(e.nextSibling)}function et(){me=ge=null,U=!1}function io(e){Be===null?Be=[e]:Be.push(e)}var nf=Ke.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function dr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hu(e){var n=e._init;return n(e._payload)}function ia(e){function n(X,a){if(e){var f=X.deletions;f===null?(X.deletions=[a],X.flags|=16):f.push(a)}}function t(X,a){if(!e)return null;for(;a!==null;)n(X,a),a=a.sibling;return null}function r(X,a){for(X=new Map;a!==null;)a.key!==null?X.set(a.key,a):X.set(a.index,a),a=a.sibling;return X}function l(X,a){return X=Xn(X,a),X.index=0,X.sibling=null,X}function i(X,a,f){return X.index=f,e?(f=X.alternate,f!==null?(f=f.index,f<a?(X.flags|=2,a):f):(X.flags|=2,a)):(X.flags|=1048576,a)}function o(X){return e&&X.alternate===null&&(X.flags|=2),X}function u(X,a,f,g){return a===null||a.tag!==6?(a=Hl(f,X.mode,g),a.return=X,a):(a=l(a,f),a.return=X,a)}function s(X,a,f,g){var E=f.type;return E===An?m(X,a,f.props.children,g,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ze&&hu(E)===a.type)?(g=l(a,f.props),g.ref=mt(X,a,f),g.return=X,g):(g=Nr(f.type,f.key,f.props,null,X.mode,g),g.ref=mt(X,a,f),g.return=X,g)}function c(X,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=ql(f,X.mode,g),a.return=X,a):(a=l(a,f.children||[]),a.return=X,a)}function m(X,a,f,g,E){return a===null||a.tag!==7?(a=xn(f,X.mode,g,E),a.return=X,a):(a=l(a,f),a.return=X,a)}function p(X,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Hl(""+a,X.mode,f),a.return=X,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case tr:return f=Nr(a.type,a.key,a.props,null,X.mode,f),f.ref=mt(X,null,a),f.return=X,f;case Tn:return a=ql(a,X.mode,f),a.return=X,a;case Ze:var g=a._init;return p(X,g(a._payload),f)}if(yt(a)||ct(a))return a=xn(a,X.mode,f,null),a.return=X,a;dr(X,a)}return null}function d(X,a,f,g){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:u(X,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===E?s(X,a,f,g):null;case Tn:return f.key===E?c(X,a,f,g):null;case Ze:return E=f._init,d(X,a,E(f._payload),g)}if(yt(f)||ct(f))return E!==null?null:m(X,a,f,g,null);dr(X,f)}return null}function y(X,a,f,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return X=X.get(f)||null,u(a,X,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return X=X.get(g.key===null?f:g.key)||null,s(a,X,g,E);case Tn:return X=X.get(g.key===null?f:g.key)||null,c(a,X,g,E);case Ze:var x=g._init;return y(X,a,f,x(g._payload),E)}if(yt(g)||ct(g))return X=X.get(f)||null,m(a,X,g,E,null);dr(a,g)}return null}function C(X,a,f,g){for(var E=null,x=null,S=a,j=a=0,H=null;S!==null&&j<f.length;j++){S.index>j?(H=S,S=null):H=S.sibling;var F=d(X,S,f[j],g);if(F===null){S===null&&(S=H);break}e&&S&&F.alternate===null&&n(X,S),a=i(F,a,j),x===null?E=F:x.sibling=F,x=F,S=H}if(j===f.length)return t(X,S),U&&yn(X,j),E;if(S===null){for(;j<f.length;j++)S=p(X,f[j],g),S!==null&&(a=i(S,a,j),x===null?E=S:x.sibling=S,x=S);return U&&yn(X,j),E}for(S=r(X,S);j<f.length;j++)H=y(S,X,j,f[j],g),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?j:H.key),a=i(H,a,j),x===null?E=H:x.sibling=H,x=H);return e&&S.forEach(function(Se){return n(X,Se)}),U&&yn(X,j),E}function w(X,a,f,g){var E=ct(f);if(typeof E!="function")throw Error(h(150));if(f=E.call(f),f==null)throw Error(h(151));for(var x=E=null,S=a,j=a=0,H=null,F=f.next();S!==null&&!F.done;j++,F=f.next()){S.index>j?(H=S,S=null):H=S.sibling;var Se=d(X,S,F.value,g);if(Se===null){S===null&&(S=H);break}e&&S&&Se.alternate===null&&n(X,S),a=i(Se,a,j),x===null?E=Se:x.sibling=Se,x=Se,S=H}if(F.done)return t(X,S),U&&yn(X,j),E;if(S===null){for(;!F.done;j++,F=f.next())F=p(X,F.value,g),F!==null&&(a=i(F,a,j),x===null?E=F:x.sibling=F,x=F);return U&&yn(X,j),E}for(S=r(X,S);!F.done;j++,F=f.next())F=y(S,X,j,F.value,g),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?j:F.key),a=i(F,a,j),x===null?E=F:x.sibling=F,x=F);return e&&S.forEach(function(st){return n(X,st)}),U&&yn(X,j),E}function R(X,a,f,g){if(typeof f=="object"&&f!==null&&f.type===An&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var E=f.key,x=a;x!==null;){if(x.key===E){if(E=f.type,E===An){if(x.tag===7){t(X,x.sibling),a=l(x,f.props.children),a.return=X,X=a;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ze&&hu(E)===x.type){t(X,x.sibling),a=l(x,f.props),a.ref=mt(X,x,f),a.return=X,X=a;break e}t(X,x);break}else n(X,x);x=x.sibling}f.type===An?(a=xn(f.props.children,X.mode,g,f.key),a.return=X,X=a):(g=Nr(f.type,f.key,f.props,null,X.mode,g),g.ref=mt(X,a,f),g.return=X,X=g)}return o(X);case Tn:e:{for(x=f.key;a!==null;){if(a.key===x)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(X,a.sibling),a=l(a,f.children||[]),a.return=X,X=a;break e}else{t(X,a);break}else n(X,a);a=a.sibling}a=ql(f,X.mode,g),a.return=X,X=a}return o(X);case Ze:return x=f._init,R(X,a,x(f._payload),g)}if(yt(f))return C(X,a,f,g);if(ct(f))return w(X,a,f,g);dr(X,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(X,a.sibling),a=l(a,f),a.return=X,X=a):(t(X,a),a=Hl(f,X.mode,g),a.return=X,X=a),o(X)):t(X,a)}return R}var nt=ia(!0),oa=ia(!1),Hr=mn(null),qr=null,Hn=null,oo=null;function uo(){oo=Hn=qr=null}function so(e){var n=Hr.current;D(Hr),e._currentValue=n}function Ci(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){qr=e,oo=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(qr===null)throw Error(h(308));Hn=e,qr.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var kn=null;function ao(e){kn===null?kn=[e]:kn.push(e)}function ua(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ao(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ge(e,r)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ge(e,t)}return l=r.interleaved,l===null?(n.next=n,ao(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ge(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ki(e,t)}}function vu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $r(e,n,t,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==o&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=l.baseState;o=0,m=c=s=null,u=i;do{var d=u.lane,y=u.eventTime;if((r&d)===d){m!==null&&(m=m.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var C=e,w=u;switch(d=n,y=t,w.tag){case 1:if(C=w.payload,typeof C=="function"){p=C.call(y,p,d);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=w.payload,d=typeof C=="function"?C.call(y,p,d):C,d==null)break e;p=W({},p,d);break e;case 2:Je=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=l.effects,d===null?l.effects=[u]:d.push(u))}else y={eventTime:y,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=y,s=p):m=m.next=y,o|=d;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;d=u,u=d.next,d.next=null,l.lastBaseUpdate=d,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=p}}function yu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var Jt={},Oe=mn(Jt),It=mn(Jt),Ht=mn(Jt);function En(e){if(e===Jt)throw Error(h(174));return e}function Xo(e,n){switch(T(Ht,n),T(It,e),T(Oe,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ei(n,e)}D(Oe),T(Oe,n)}function tt(){D(Oe),D(It),D(Ht)}function aa(e){En(Ht.current);var n=En(Oe.current),t=ei(n,e.type);n!==t&&(T(It,e),T(Oe,t))}function fo(e){It.current===e&&(D(Oe),D(It))}var O=mn(0);function Vr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rl=[];function po(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var _r=Ke.ReactCurrentDispatcher,Ul=Ke.ReactCurrentBatchConfig,Pn=0,M=null,G=null,Y=null,Gr=!1,jt=!1,qt=0,tf=0;function ne(){throw Error(h(321))}function mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Te(e[t],n[t]))return!1;return!0}function go(e,n,t,r,l,i){if(Pn=i,M=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_r.current=e===null||e.memoizedState===null?uf:sf,e=t(r,l),jt){i=0;do{if(jt=!1,qt=0,25<=i)throw Error(h(301));i+=1,Y=G=null,n.updateQueue=null,_r.current=af,e=t(r,l)}while(jt)}if(_r.current=Qr,n=G!==null&&G.next!==null,Pn=0,Y=G=M=null,Gr=!1,n)throw Error(h(300));return e}function ho(){var e=qt!==0;return qt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?M.memoizedState=Y=e:Y=Y.next=e,Y}function xe(){if(G===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=Y===null?M.memoizedState:Y.next;if(n!==null)Y=n,G=e;else{if(e===null)throw Error(h(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Y===null?M.memoizedState=Y=e:Y=Y.next=e}return Y}function $t(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=xe(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var m=c.lane;if((Pn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=p,o=r):s=s.next=p,M.lanes|=m,Nn|=m}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,Te(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,M.lanes|=i,Nn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ml(e){var n=xe(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Te(i,n.memoizedState)||(ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ca(){}function Xa(e,n){var t=M,r=xe(),l=n(),i=!Te(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,vo(pa.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Vt(9,da.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(h(349));Pn&30||fa(t,n,l)}return l}function fa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=M.updateQueue,n===null?(n={lastEffect:null,stores:null},M.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function da(e,n,t,r){n.value=t,n.getSnapshot=r,ma(n)&&ga(e)}function pa(e,n,t){return t(function(){ma(n)&&ga(e)})}function ma(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Te(e,t)}catch{return!0}}function ga(e){var n=Ge(e,1);n!==null&&ze(n,e,1,-1)}function Cu(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},n.queue=e,e=e.dispatch=of.bind(null,M,e),[n.memoizedState,e]}function Vt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=M.updateQueue,n===null?(n={lastEffect:null,stores:null},M.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ha(){return xe().memoizedState}function xr(e,n,t,r){var l=De();M.flags|=e,l.memoizedState=Vt(1|n,t,void 0,r===void 0?null:r)}function ul(e,n,t,r){var l=xe();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&mo(r,o.deps)){l.memoizedState=Vt(n,t,i,r);return}}M.flags|=e,l.memoizedState=Vt(1|n,t,i,r)}function wu(e,n){return xr(8390656,8,e,n)}function vo(e,n){return ul(2048,8,e,n)}function va(e,n){return ul(4,2,e,n)}function ya(e,n){return ul(4,4,e,n)}function Ca(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wa(e,n,t){return t=t!=null?t.concat([e]):null,ul(4,4,Ca.bind(null,n,e),t)}function yo(){}function ka(e,n){var t=xe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ea(e,n){var t=xe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _a(e,n,t){return Pn&21?(Te(t,n)||(t=Ns(),M.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function rf(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),n()}finally{z=t,Ul.transition=r}}function xa(){return xe().memoizedState}function lf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Sa(e))ja(n,t);else if(t=ua(e,n,t,r),t!==null){var l=oe();ze(t,e,r,l),Pa(t,n,r)}}function of(e,n,t){var r=cn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sa(e))ja(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,u=i(o,t);if(l.hasEagerState=!0,l.eagerState=u,Te(u,o)){var s=n.interleaved;s===null?(l.next=l,ao(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=ua(e,n,l,r),t!==null&&(l=oe(),ze(t,e,r,l),Pa(t,n,r))}}function Sa(e){var n=e.alternate;return e===M||n!==null&&n===M}function ja(e,n){jt=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pa(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ki(e,t)}}var Qr={readContext:_e,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},uf={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:wu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xr(4194308,4,Ca.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xr(4194308,4,e,n)},useInsertionEffect:function(e,n){return xr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lf.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Cu,useDebugValue:yo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Cu(!1),n=e[0];return e=rf.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=M,l=De();if(U){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),Z===null)throw Error(h(349));Pn&30||fa(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,wu(pa.bind(null,r,i,e),[e]),r.flags|=2048,Vt(9,da.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=De(),n=Z.identifierPrefix;if(U){var t=He,r=Ie;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=tf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sf={readContext:_e,useCallback:ka,useContext:_e,useEffect:vo,useImperativeHandle:wa,useInsertionEffect:va,useLayoutEffect:ya,useMemo:Ea,useReducer:Ol,useRef:ha,useState:function(){return Ol($t)},useDebugValue:yo,useDeferredValue:function(e){var n=xe();return _a(n,G.memoizedState,e)},useTransition:function(){var e=Ol($t)[0],n=xe().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:Xa,useId:xa,unstable_isNewReconciler:!1},af={readContext:_e,useCallback:ka,useContext:_e,useEffect:vo,useImperativeHandle:wa,useInsertionEffect:va,useLayoutEffect:ya,useMemo:Ea,useReducer:Ml,useRef:ha,useState:function(){return Ml($t)},useDebugValue:yo,useDeferredValue:function(e){var n=xe();return G===null?n.memoizedState=e:_a(n,G.memoizedState,e)},useTransition:function(){var e=Ml($t)[0],n=xe().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:Xa,useId:xa,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function wi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sl={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),l=cn(e),i=qe(r,l);i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(ze(n,e,l,r),Er(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),l=cn(e),i=qe(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=sn(e,i,l),n!==null&&(ze(n,e,l,r),Er(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=cn(e),l=qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=sn(e,l,r),n!==null&&(ze(n,e,r,t),Er(n,e,r))}};function ku(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Ut(t,r)||!Ut(l,i):!0}function Na(e,n,t){var r=!1,l=dn,i=n.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=fe(n)?Sn:le.current,r=n.contextTypes,i=(r=r!=null)?bn(e,l):dn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=sl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Eu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&sl.enqueueReplaceState(n,n.state,null)}function ki(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},co(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=fe(n)?Sn:le.current,l.context=bn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(wi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&sl.enqueueReplaceState(l,l.state,null),$r(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Dc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ei(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function Ba(e,n,t){t=qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yr||(Yr=!0,zi=r),Ei(e,n)},t}function Fa(e,n,t){t=qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ei(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ei(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function _u(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=_f.bind(null,e,n,t),n.then(e,e))}function xu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Su(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qe(-1,1),n.tag=2,sn(t,n,1))),t.lanes|=1),e)}var Xf=Ke.ReactCurrentOwner,ce=!1;function ie(e,n,t,r){n.child=e===null?oa(n,null,t,r):nt(n,e.child,t,r)}function ju(e,n,t,r,l){t=t.render;var i=n.ref;return Yn(n,l),r=go(e,n,t,r,i,l),t=ho(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qe(e,n,l)):(U&&t&&ro(n),n.flags|=1,ie(e,n,r,l),n.child)}function Pu(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!jo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,La(e,n,i,r,l)):(e=Nr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ut,t(o,r)&&e.ref===n.ref)return Qe(e,n,l)}return n.flags|=1,e=Xn(i,r),e.ref=n.ref,e.return=n,n.child=e}function La(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Ut(i,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Qe(e,n,l)}return _i(e,n,t,r,l)}function za(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},T($n,pe),pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,T($n,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,T($n,pe),pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,T($n,pe),pe|=r;return ie(e,n,l,t),n.child}function Ta(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _i(e,n,t,r,l){var i=fe(t)?Sn:le.current;return i=bn(n,i),Yn(n,l),t=go(e,n,t,r,i,l),r=ho(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qe(e,n,l)):(U&&r&&ro(n),n.flags|=1,ie(e,n,t,l),n.child)}function Nu(e,n,t,r,l){if(fe(t)){var i=!0;Mr(n)}else i=!1;if(Yn(n,l),n.stateNode===null)Sr(e,n),Na(n,t,r),ki(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=fe(t)?Sn:le.current,c=bn(n,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Eu(n,o,r,c),Je=!1;var d=n.memoizedState;o.state=d,$r(n,r,o,l),s=n.memoizedState,u!==r||d!==s||Xe.current||Je?(typeof m=="function"&&(wi(n,t,m,r),s=n.memoizedState),(u=Je||ku(n,t,u,r,d,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,sa(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:Pe(n.type,u),o.props=c,p=n.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=fe(t)?Sn:le.current,s=bn(n,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||d!==s)&&Eu(n,o,r,s),Je=!1,d=n.memoizedState,o.state=d,$r(n,r,o,l);var C=n.memoizedState;u!==p||d!==C||Xe.current||Je?(typeof y=="function"&&(wi(n,t,y,r),C=n.memoizedState),(c=Je||ku(n,t,c,r,d,C,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return xi(e,n,t,r,i,l)}function xi(e,n,t,r,l,i){Ta(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&pu(n,t,!1),Qe(e,n,i);r=n.stateNode,Xf.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=nt(n,e.child,null,i),n.child=nt(n,null,u,i)):ie(e,n,u,i),n.memoizedState=r.state,l&&pu(n,t,!0),n.child}function Aa(e){var n=e.stateNode;n.pendingContext?du(e,n.pendingContext,n.pendingContext!==n.context):n.context&&du(e,n.context,!1),Xo(e,n.containerInfo)}function Bu(e,n,t,r,l){return et(),io(l),n.flags|=256,ie(e,n,t,r),n.child}var Si={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function Da(e,n,t){var r=n.pendingProps,l=O.current,i=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),T(O,l&1),e===null)return yi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Xl(o,r,0,null),e=xn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ji(t),n.memoizedState=Si,e):Co(n,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return ff(e,n,o,r,u,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Xn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Xn(u,i):(i=xn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?ji(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Si,r}return i=e.child,e=i.sibling,r=Xn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Co(e,n){return n=Xl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,r){return r!==null&&io(r),nt(n,e.child,null,t),e=Co(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ff(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(h(422))),pr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Xl({mode:"visible",children:r.children},l,0,null),i=xn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&nt(n,e.child,null,o),n.child.memoizedState=ji(o),n.memoizedState=Si,i);if(!(n.mode&1))return pr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(h(419)),r=Wl(i,r,void 0),pr(e,n,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),ze(r,e,l,-1))}return So(),r=Wl(Error(h(421))),pr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=xf.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,me=un(l.nextSibling),ge=n,U=!0,Be=null,e!==null&&(Ce[we++]=Ie,Ce[we++]=He,Ce[we++]=jn,Ie=e.id,He=e.overflow,jn=n),n=Co(n,r.children),n.flags|=4096,n)}function Fu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ci(e.return,n,t)}function Il(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ra(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,n,r.children,t),r=O.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,t,n);else if(e.tag===19)Fu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(O,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Vr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Il(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Vr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Il(n,!0,t,null,i);break;case"together":Il(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Sr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=Xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function df(e,n,t){switch(n.tag){case 3:Aa(n),et();break;case 5:aa(n);break;case 1:fe(n.type)&&Mr(n);break;case 4:Xo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;T(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(T(O,O.current&1),n.flags|=128,null):t&n.child.childLanes?Da(e,n,t):(T(O,O.current&1),e=Qe(e,n,t),e!==null?e.sibling:null);T(O,O.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ra(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),T(O,O.current),r)break;return null;case 22:case 23:return n.lanes=0,za(e,n,t)}return Qe(e,n,t)}var Ua,Pi,Oa,Ma;Ua=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Oa=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,En(Oe.current);var i=null;switch(t){case"input":l=Yl(e,l),r=Yl(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=bl(e,l),r=bl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ni(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ft.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ft.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&A("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Ma=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pf(e,n,t){var r=n.pendingProps;switch(lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Or(),te(n),null;case 3:return r=n.stateNode,tt(),D(Xe),D(le),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Di(Be),Be=null))),Pi(e,n),te(n),null;case 5:fo(n);var l=En(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Oa(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return te(n),null}if(e=En(Oe.current),fr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Re]=n,r[Wt]=i,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<wt.length;l++)A(wt[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Mo(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":Io(r,i),A("invalid",r)}ni(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Xr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Xr(r.textContent,u,e),l=["children",""+u]):Ft.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&A("scroll",r)}switch(t){case"input":rr(r),Wo(r,i,!0);break;case"textarea":rr(r),Ho(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Re]=n,e[Wt]=r,Ua(e,n,!1,!1),n.stateNode=e;e:{switch(o=ti(t,r),t){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<wt.length;l++)A(wt[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":Mo(e,r),l=Yl(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":Io(e,r),l=bl(e,r),A("invalid",e);break;default:l=r}ni(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?hs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ms(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Lt(e,s):typeof s=="number"&&Lt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ft.hasOwnProperty(i)?s!=null&&i==="onScroll"&&A("scroll",e):s!=null&&Hi(e,i,s,o))}switch(t){case"input":rr(e),Wo(e,r,!1);break;case"textarea":rr(e),Ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Ma(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=En(Ht.current),En(Oe.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Re]=n,(i=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Re]=n,n.stateNode=r}return te(n),null;case 13:if(D(O),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&me!==null&&n.mode&1&&!(n.flags&128))la(),et(),n.flags|=98560,i=!1;else if(i=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[Re]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),i=!1}else Be!==null&&(Di(Be),Be=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||O.current&1?Q===0&&(Q=3):So())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Pi(e,n),e===null&&Ot(n.stateNode.containerInfo),te(n),null;case 10:return so(n.type._context),te(n),null;case 17:return fe(n.type)&&Or(),te(n),null;case 19:if(D(O),i=n.memoizedState,i===null)return te(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)gt(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Vr(e),o!==null){for(n.flags|=128,gt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return T(O,O.current&1|2),n.child}e=e.sibling}i.tail!==null&&$()>lt&&(n.flags|=128,r=!0,gt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Vr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return te(n),null}else 2*$()-i.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,gt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=$(),n.sibling=null,t=O.current,T(O,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return xo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function mf(e,n){switch(lo(n),n.tag){case 1:return fe(n.type)&&Or(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),D(Xe),D(le),po(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return fo(n),null;case 13:if(D(O),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(O),null;case 4:return tt(),null;case 10:return so(n.type._context),null;case 22:case 23:return xo(),null;case 24:return null;default:return null}}var mr=!1,re=!1,gf=typeof WeakSet=="function"?WeakSet:Set,k=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){I(e,n,r)}else t.current=null}function Ni(e,n,t){try{t()}catch(r){I(e,n,r)}}var Lu=!1;function hf(e,n){if(fi=Ar,e=$s(),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,u=-1,s=-1,c=0,m=0,p=e,d=null;n:for(;;){for(var y;p!==t||l!==0&&p.nodeType!==3||(u=o+l),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)d=p,p=y;for(;;){if(p===e)break n;if(d===t&&++c===l&&(u=o),d===i&&++m===r&&(s=o),(y=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=y}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(di={focusedElem:e,selectionRange:t},Ar=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var C=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var w=C.memoizedProps,R=C.memoizedState,X=n.stateNode,a=X.getSnapshotBeforeUpdate(n.elementType===n.type?w:Pe(n.type,w),R);X.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){I(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return C=Lu,Lu=!1,C}function Pt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ni(n,t,i)}l=l.next}while(l!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Bi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Wa(e){var n=e.alternate;n!==null&&(e.alternate=null,Wa(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Re],delete n[Wt],delete n[gi],delete n[JX],delete n[bX])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ia(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ia(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,n,t),e=e.sibling;e!==null;)Fi(e,n,t),e=e.sibling}function Li(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,n,t),e=e.sibling;e!==null;)Li(e,n,t),e=e.sibling}var J=null,Ne=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Ha(e,n,t),t=t.sibling}function Ha(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:re||qn(t,n);case 6:var r=J,l=Ne;J=null,Ye(e,n,t),J=r,Ne=l,J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?Al(e.parentNode,t):e.nodeType===1&&Al(e,t),Dt(e)):Al(J,t.stateNode));break;case 4:r=J,l=Ne,J=t.stateNode.containerInfo,Ne=!0,Ye(e,n,t),J=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ni(t,n,o),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!re&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){I(t,n,u)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ye(e,n,t),re=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Tu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new gf),n.forEach(function(r){var l=Sf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:J=u.stateNode,Ne=!1;break e;case 3:J=u.stateNode.containerInfo,Ne=!0;break e;case 4:J=u.stateNode.containerInfo,Ne=!0;break e}u=u.return}if(J===null)throw Error(h(160));Ha(i,o,l),J=null,Ne=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){I(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qa(n,e),n=n.sibling}function qa(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Ae(e),r&4){try{Pt(3,e,e.return),al(3,e)}catch(w){I(e,e.return,w)}try{Pt(5,e,e.return)}catch(w){I(e,e.return,w)}}break;case 1:je(n,e),Ae(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(je(n,e),Ae(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var l=e.stateNode;try{Lt(l,"")}catch(w){I(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&fs(l,i),ti(u,o);var c=ti(u,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?hs(l,p):m==="dangerouslySetInnerHTML"?ms(l,p):m==="children"?Lt(l,p):Hi(l,m,p,c)}switch(u){case"input":Zl(l,i);break;case"textarea":ds(l,i);break;case"select":var d=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Vn(l,!!i.multiple,y,!1):d!==!!i.multiple&&(i.defaultValue!=null?Vn(l,!!i.multiple,i.defaultValue,!0):Vn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wt]=i}catch(w){I(e,e.return,w)}}break;case 6:if(je(n,e),Ae(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){I(e,e.return,w)}}break;case 3:if(je(n,e),Ae(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Dt(n.containerInfo)}catch(w){I(e,e.return,w)}break;case 4:je(n,e),Ae(e);break;case 13:je(n,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=$())),r&4&&Tu(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||m,je(n,e),re=c):je(n,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(p=k=m;k!==null;){switch(d=k,y=d.child,d.tag){case 0:case 11:case 14:case 15:Pt(4,d,d.return);break;case 1:qn(d,d.return);var C=d.stateNode;if(typeof C.componentWillUnmount=="function"){r=d,t=d.return;try{n=r,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(w){I(r,t,w)}}break;case 5:qn(d,d.return);break;case 22:if(d.memoizedState!==null){Du(p);continue}}y!==null?(y.return=d,k=y):Du(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=gs("display",o))}catch(w){I(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){I(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:je(n,e),Ae(e),r&4&&Tu(e);break;case 21:break;default:je(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ia(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Lt(l,""),r.flags&=-33);var i=zu(e);Li(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=zu(e);Fi(e,u,o);break;default:throw Error(h(161))}}catch(s){I(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){k=e,$a(e)}function $a(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||mr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=mr;var c=re;if(mr=o,(re=s)&&!c)for(k=l;k!==null;)o=k,s=o.child,o.tag===22&&o.memoizedState!==null?Ru(l):s!==null?(s.return=o,k=s):Ru(l);for(;i!==null;)k=i,$a(i),i=i.sibling;k=l,mr=u,re=c}Au(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Au(e)}}function Au(e){for(;k!==null;){var n=k;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&yu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Dt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}re||n.flags&512&&Bi(n)}catch(d){I(n,n.return,d)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function Du(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function Ru(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(s){I(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){I(n,l,s)}}var i=n.return;try{Bi(n)}catch(s){I(n,i,s)}break;case 5:var o=n.return;try{Bi(n)}catch(s){I(n,o,s)}}}catch(s){I(n,n.return,s)}if(n===e){k=null;break}var u=n.sibling;if(u!==null){u.return=n.return,k=u;break}k=n.return}}var yf=Math.ceil,Kr=Ke.ReactCurrentDispatcher,wo=Ke.ReactCurrentOwner,Ee=Ke.ReactCurrentBatchConfig,L=0,Z=null,V=null,b=0,pe=0,$n=mn(0),Q=0,Gt=null,Nn=0,cl=0,ko=0,Nt=null,ae=null,Eo=0,lt=1/0,Me=null,Yr=!1,zi=null,an=null,gr=!1,tn=null,Zr=0,Bt=0,Ti=null,jr=-1,Pr=0;function oe(){return L&6?$():jr!==-1?jr:jr=$()}function cn(e){return e.mode&1?L&2&&b!==0?b&-b:nf.transition!==null?(Pr===0&&(Pr=Ns()),Pr):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function ze(e,n,t,r){if(50<Bt)throw Bt=0,Ti=null,Error(h(185));Kt(e,t,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(cl|=t),Q===4&&en(e,b)),de(e,r),t===1&&L===0&&!(n.mode&1)&&(lt=$()+500,ol&&gn()))}function de(e,n){var t=e.callbackNode;nX(e,n);var r=Tr(e,e===Z?b:0);if(r===0)t!==null&&Vo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Vo(t),n===1)e.tag===0?ef(Uu.bind(null,e)):na(Uu.bind(null,e)),YX(function(){!(L&6)&&gn()}),t=null;else{switch(Bs(r)){case 1:t=Qi;break;case 4:t=js;break;case 16:t=zr;break;case 536870912:t=Ps;break;default:t=zr}t=ba(t,Va.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Va(e,n){if(jr=-1,Pr=0,L&6)throw Error(h(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Tr(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var l=L;L|=2;var i=Qa();(Z!==e||b!==n)&&(Me=null,lt=$()+500,_n(e,n));do try{kf();break}catch(u){Ga(e,u)}while(!0);uo(),Kr.current=i,L=l,V!==null?n=0:(Z=null,b=0,n=Q)}if(n!==0){if(n===2&&(l=ui(e),l!==0&&(r=l,n=Ai(e,l))),n===1)throw t=Gt,_n(e,0),en(e,r),de(e,$()),t;if(n===6)en(e,r);else{if(l=e.current.alternate,!(r&30)&&!Cf(l)&&(n=Jr(e,r),n===2&&(i=ui(e),i!==0&&(r=i,n=Ai(e,i))),n===1))throw t=Gt,_n(e,0),en(e,r),de(e,$()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:Cn(e,ae,Me);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Eo+500-$(),10<n)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=mi(Cn.bind(null,e,ae,Me),n);break}Cn(e,ae,Me);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=mi(Cn.bind(null,e,ae,Me),r);break}Cn(e,ae,Me);break;case 5:Cn(e,ae,Me);break;default:throw Error(h(329))}}}return de(e,$()),e.callbackNode===t?Va.bind(null,e):null}function Ai(e,n){var t=Nt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=ae,ae=t,n!==null&&Di(n)),e}function Di(e){ae===null?ae=e:ae.push.apply(ae,e)}function Cf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Te(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~ko,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Uu(e){if(L&6)throw Error(h(327));Zn();var n=Tr(e,0);if(!(n&1))return de(e,$()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=ui(e);r!==0&&(n=r,t=Ai(e,r))}if(t===1)throw t=Gt,_n(e,0),en(e,n),de(e,$()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,ae,Me),de(e,$()),null}function _o(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(lt=$()+500,ol&&gn())}}function Bn(e){tn!==null&&tn.tag===0&&!(L&6)&&Zn();var n=L;L|=1;var t=Ee.transition,r=z;try{if(Ee.transition=null,z=1,e)return e()}finally{z=r,Ee.transition=t,L=n,!(L&6)&&gn()}}function xo(){pe=$n.current,D($n)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,KX(t)),V!==null)for(t=V.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Or();break;case 3:tt(),D(Xe),D(le),po();break;case 5:fo(r);break;case 4:tt();break;case 13:D(O);break;case 19:D(O);break;case 10:so(r.type._context);break;case 22:case 23:xo()}t=t.return}if(Z=e,V=e=Xn(e.current,null),b=pe=n,Q=0,Gt=null,ko=cl=Nn=0,ae=Nt=null,kn!==null){for(n=0;n<kn.length;n++)if(t=kn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}kn=null}return e}function Ga(e,n){do{var t=V;try{if(uo(),_r.current=Qr,Gr){for(var r=M.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Pn=0,Y=G=M=null,jt=!1,qt=0,wo.current=null,t===null||t.return===null){Q=1,Gt=n,V=null;break}e:{var i=e,o=t.return,u=t,s=n;if(n=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var d=m.alternate;d?(m.updateQueue=d.updateQueue,m.memoizedState=d.memoizedState,m.lanes=d.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=xu(o);if(y!==null){y.flags&=-257,Su(y,o,u,i,n),y.mode&1&&_u(i,c,n),n=y,s=c;var C=n.updateQueue;if(C===null){var w=new Set;w.add(s),n.updateQueue=w}else C.add(s);break e}else{if(!(n&1)){_u(i,c,n),So();break e}s=Error(h(426))}}else if(U&&u.mode&1){var R=xu(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Su(R,o,u,i,n),io(rt(s,u));break e}}i=s=rt(s,u),Q!==4&&(Q=2),Nt===null?Nt=[i]:Nt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var X=Ba(i,s,n);vu(i,X);break e;case 1:u=s;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(an===null||!an.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=Fa(i,u,n);vu(i,g);break e}}i=i.return}while(i!==null)}Ya(t)}catch(E){n=E,V===t&&t!==null&&(V=t=t.return);continue}break}while(!0)}function Qa(){var e=Kr.current;return Kr.current=Qr,e===null?Qr:e}function So(){(Q===0||Q===3||Q===2)&&(Q=4),Z===null||!(Nn&268435455)&&!(cl&268435455)||en(Z,b)}function Jr(e,n){var t=L;L|=2;var r=Qa();(Z!==e||b!==n)&&(Me=null,_n(e,n));do try{wf();break}catch(l){Ga(e,l)}while(!0);if(uo(),L=t,Kr.current=r,V!==null)throw Error(h(261));return Z=null,b=0,Q}function wf(){for(;V!==null;)Ka(V)}function kf(){for(;V!==null&&!Vc();)Ka(V)}function Ka(e){var n=Ja(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Ya(e):V=n,wo.current=null}function Ya(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mf(t,n),t!==null){t.flags&=32767,V=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,V=null;return}}else if(t=pf(t,n,pe),t!==null){V=t;return}if(n=n.sibling,n!==null){V=n;return}V=n=e}while(n!==null);Q===0&&(Q=5)}function Cn(e,n,t){var r=z,l=Ee.transition;try{Ee.transition=null,z=1,Ef(e,n,t,r)}finally{Ee.transition=l,z=r}return null}function Ef(e,n,t,r){do Zn();while(tn!==null);if(L&6)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(tX(e,i),e===Z&&(V=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,ba(zr,function(){return Zn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=z;z=1;var u=L;L|=4,wo.current=null,hf(e,t),qa(t,e),IX(di),Ar=!!fi,di=fi=null,e.current=t,vf(t),Gc(),L=u,z=o,Ee.transition=i}else e.current=t;if(gr&&(gr=!1,tn=e,Zr=l),i=e.pendingLanes,i===0&&(an=null),Yc(t.stateNode),de(e,$()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yr)throw Yr=!1,e=zi,zi=null,e;return Zr&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Ti?Bt++:(Bt=0,Ti=e):Bt=0,gn(),null}function Zn(){if(tn!==null){var e=Bs(Zr),n=Ee.transition,t=z;try{if(Ee.transition=null,z=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,L&6)throw Error(h(331));var l=L;for(L|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:Pt(8,m,i)}var p=m.child;if(p!==null)p.return=m,k=p;else for(;k!==null;){m=k;var d=m.sibling,y=m.return;if(Wa(m),m===c){k=null;break}if(d!==null){d.return=y,k=d;break}k=y}}}var C=i.alternate;if(C!==null){var w=C.child;if(w!==null){C.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pt(9,i,i.return)}var X=i.sibling;if(X!==null){X.return=i.return,k=X;break e}k=i.return}}var a=e.current;for(k=a;k!==null;){o=k;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,k=f;else e:for(o=a;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:al(9,u)}}catch(E){I(u,u.return,E)}if(u===o){k=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,k=g;break e}k=u.return}}if(L=l,gn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{z=t,Ee.transition=n}}return!1}function Ou(e,n,t){n=rt(t,n),n=Ba(e,n,1),e=sn(e,n,1),n=oe(),e!==null&&(Kt(e,1,n),de(e,n))}function I(e,n,t){if(e.tag===3)Ou(e,e,t);else for(;n!==null;){if(n.tag===3){Ou(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=rt(t,e),e=Fa(n,e,1),n=sn(n,e,1),e=oe(),n!==null&&(Kt(n,1,e),de(n,e));break}}n=n.return}}function _f(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(Q===4||Q===3&&(b&130023424)===b&&500>$()-Eo?_n(e,0):ko|=t),de(e,n)}function Za(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=oe();e=Ge(e,n),e!==null&&(Kt(e,n,t),de(e,t))}function xf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Za(e,t)}function Sf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),Za(e,t)}var Ja;Ja=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,df(e,n,t);ce=!!(e.flags&131072)}else ce=!1,U&&n.flags&1048576&&ta(n,Ir,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Sr(e,n),e=n.pendingProps;var l=bn(n,le.current);Yn(n,t),l=go(null,n,r,e,l,t);var i=ho();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(i=!0,Mr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(n),l.updater=sl,n.stateNode=l,l._reactInternals=n,ki(n,r,e,t),n=xi(null,n,r,!0,i,t)):(n.tag=0,U&&i&&ro(n),ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Sr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Pf(r),e=Pe(r,e),l){case 0:n=_i(null,n,r,e,t);break e;case 1:n=Nu(null,n,r,e,t);break e;case 11:n=ju(null,n,r,e,t);break e;case 14:n=Pu(null,n,r,Pe(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),_i(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Nu(e,n,r,l,t);case 3:e:{if(Aa(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,sa(e,n),$r(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=rt(Error(h(423)),n),n=Bu(e,n,r,t,l);break e}else if(r!==l){l=rt(Error(h(424)),n),n=Bu(e,n,r,t,l);break e}else for(me=un(n.stateNode.containerInfo.firstChild),ge=n,U=!0,Be=null,t=oa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===l){n=Qe(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return aa(n),e===null&&yi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,pi(r,l)?o=null:i!==null&&pi(r,i)&&(n.flags|=32),Ta(e,n),ie(e,n,o,t),n.child;case 6:return e===null&&yi(n),null;case 13:return Da(e,n,t);case 4:return Xo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),ju(e,n,r,l,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,T(Hr,r._currentValue),r._currentValue=o,i!==null)if(Te(i.value,o)){if(i.children===l.children&&!Xe.current){n=Qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=qe(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Ci(i.return,t,n),u.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Ci(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,t),l=_e(l),r=r(l),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,l=Pe(r,n.pendingProps),l=Pe(r.type,l),Pu(e,n,r,l,t);case 15:return La(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Sr(e,n),n.tag=1,fe(r)?(e=!0,Mr(n)):e=!1,Yn(n,t),Na(n,r,l),ki(n,r,l,t),xi(null,n,r,!0,e,t);case 19:return Ra(e,n,t);case 22:return za(e,n,t)}throw Error(h(156,n.tag))};function ba(e,n){return Ss(e,n)}function jf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,r){return new jf(e,n,t,r)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$i)return 11;if(e===Vi)return 14}return 2}function Xn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Nr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case An:return xn(t.children,l,i,n);case qi:o=8,l|=8;break;case Vl:return e=ke(12,t,n,l|2),e.elementType=Vl,e.lanes=i,e;case Gl:return e=ke(13,t,n,l),e.elementType=Gl,e.lanes=i,e;case Ql:return e=ke(19,t,n,l),e.elementType=Ql,e.lanes=i,e;case as:return Xl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:o=10;break e;case ss:o=9;break e;case $i:o=11;break e;case Vi:o=14;break e;case Ze:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=ke(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function xn(e,n,t,r){return e=ke(7,e,r,n),e.lanes=t,e}function Xl(e,n,t,r){return e=ke(22,e,r,n),e.elementType=as,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function ql(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,n,t,r,l,i,o,u,s){return e=new Nf(e,n,t,u,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ke(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(i),e}function Bf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return dn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(fe(t))return ea(e,t,n)}return n}function nc(e,n,t,r,l,i,o,u,s){return e=Po(t,r,!0,e,l,i,o,u,s),e.context=ec(null),t=e.current,r=oe(),l=cn(t),i=qe(r,l),i.callback=n??null,sn(t,i,l),e.current.lanes=l,Kt(e,l,r),de(e,r),e}function fl(e,n,t,r){var l=n.current,i=oe(),o=cn(l);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=qe(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=sn(l,n,o),e!==null&&(ze(e,l,o,i),Er(e,l,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function No(e,n){Mu(e,n),(e=e.alternate)&&Mu(e,n)}function Ff(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}dl.prototype.render=Bo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));fl(e,n,null,null)};dl.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bn(function(){fl(null,e,null,null)}),n[Ve]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&As(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Lf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=br(o);i.call(c)}}var o=nc(n,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=o,e[Ve]=o.current,Ot(e.nodeType===8?e.parentNode:e),Bn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=br(s);u.call(c)}}var s=Po(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Ve]=s.current,Ot(e.nodeType===8?e.parentNode:e),Bn(function(){fl(n,s,t,r)}),s}function ml(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=br(o);u.call(s)}}fl(n,o,e,l)}else o=Lf(t,n,e,l,r);return br(o)}Fs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ct(n.pendingLanes);t!==0&&(Ki(n,t|1),de(n,$()),!(L&6)&&(lt=$()+500,gn()))}break;case 13:Bn(function(){var r=Ge(e,1);if(r!==null){var l=oe();ze(r,e,1,l)}}),No(e,1)}};Yi=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=oe();ze(n,e,134217728,t)}No(e,134217728)}};Ls=function(e){if(e.tag===13){var n=cn(e),t=Ge(e,n);if(t!==null){var r=oe();ze(t,e,n,r)}No(e,n)}};zs=function(){return z};Ts=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};li=function(e,n,t){switch(n){case"input":if(Zl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(h(90));Xs(r),Zl(r,l)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Vn(e,!!t.multiple,n,!1)}};Cs=_o;ws=Bn;var zf={usingClientEntryPoint:!1,Events:[Zt,On,il,vs,ys,_o]},ht={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:ht.bundleType,version:ht.version,rendererPackageName:ht.rendererPackageName,rendererConfig:ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_s(e),e===null?null:e.stateNode},findFiberByHostInstance:ht.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{nl=hr.inject(Tf),Ue=hr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(n))throw Error(h(200));return Bf(e,n,null,t)};ve.createRoot=function(e,n){if(!Fo(e))throw Error(h(299));var t=!1,r="",l=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Po(e,1,!1,null,null,t,!1,r,l),e[Ve]=n.current,Ot(e.nodeType===8?e.parentNode:e),new Bo(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=_s(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Bn(e)};ve.hydrate=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Fo(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=tc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=nc(n,null,e,1,t??null,l,!1,i,o),e[Ve]=n.current,Ot(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};ve.render=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!pl(e))throw Error(h(40));return e._reactRootContainer?(Bn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};ve.unstable_batchedUpdates=_o;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return ml(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=ve;var Af=rs.exports,lc,Iu=Af;lc=Iu.createRoot,Iu.hydrateRoot;const Df=({isOpen:e})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ml-1.5 flex-shrink-0 text-slate-500 transform transition-transform duration-300 ease-in-out ${e?"rotate-180 text-indigo-500":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,"aria-hidden":"true",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),Rf=({className:e="h-4 w-4 ml-1.5"})=>v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,"aria-hidden":"true",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),Hu=(e,n)=>{if(!n.trim())return v.jsx(v.Fragment,{children:e});const t=e.split(new RegExp(`(${n})`,"gi"));return v.jsx(v.Fragment,{children:t.map((r,l)=>r.toLowerCase()===n.toLowerCase()?v.jsx("mark",{className:"bg-yellow-200 text-slate-900 rounded-sm px-0.5 py-0",children:r},l):r)})},Lo=({item:e,level:n=0,searchTerm:t})=>{var r;const[l,i]=Fe.useState(!1),o=e.children&&e.children.length>0;Fe.useEffect(()=>{t.trim()&&o?i(!0):t.trim()||i(!1)},[t,o]);const u=()=>{o&&i(!l)},s={paddingLeft:`${1.5+n*2}rem`,bg:["bg-white","bg-slate-50","bg-gray-100"][n]||"bg-gray-100",hoverBg:["hover:bg-slate-50","hover:bg-slate-100","hover:bg-gray-200"][n]||"hover:bg-gray-200",textSize:["text-lg","text-base","text-sm"][n]||"text-sm",font:["font-medium","font-normal","font-normal"][n]||"font-normal"};return o?v.jsxs("div",{className:"border-b border-slate-200 last:border-b-0",children:[v.jsxs("button",{onClick:u,className:`group w-full flex justify-between items-center text-left py-4 pr-6 ${s.bg} ${s.hoverBg} transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`,style:{paddingLeft:s.paddingLeft},"aria-expanded":l,children:[v.jsx("span",{className:`${s.textSize} ${s.font} text-slate-800 group-hover:text-indigo-600`,children:Hu(e.title,t)}),v.jsx(Df,{isOpen:l})]}),v.jsx("div",{className:`grid overflow-hidden transition-all duration-300 ease-in-out ${l?"grid-rows-[1fr]":"grid-rows-[0fr]"}`,children:v.jsx("div",{className:"overflow-hidden",children:(r=e.children)===null||r===void 0?void 0:r.map((c,m)=>v.jsx(Lo,{item:c,level:n+1,searchTerm:t},m))})})]}):v.jsx("div",{className:`border-b border-slate-200 last:border-b-0 ${s.bg}`,children:v.jsxs("div",{className:"flex justify-between items-center py-3 pr-6 gap-2",style:{paddingLeft:s.paddingLeft},children:[v.jsx("span",{className:`${s.textSize} text-slate-700`,children:Hu(e.title,t)}),v.jsx("div",{className:"flex-shrink-0 flex items-center gap-2",children:e.geminiUrl?v.jsxs("a",{href:e.geminiUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-white hover:text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full px-3 py-1.5 transition-all duration-150 shadow-sm",children:[v.jsx("span",{children:"Gemini"}),v.jsx(Rf,{})]}):v.jsx("span",{title:"リンク未設定","aria-disabled":"true",className:"flex items-center text-slate-400 font-semibold text-xs sm:text-sm bg-slate-100 rounded-full px-3 py-1.5 cursor-not-allowed select-none",children:v.jsx("span",{children:"Gemini"})})})]})})},qu=[{title:"1. お金を借りる",children:[{title:'1.1 給与額"以下"の額を借りる',children:[{title:"100万円を超える",link:"【WC-C】前払_100万円以上",geminiUrl:"https://gemini.google.com/gem/1DSBWp2x8gBvmpq6swXvejwK4sqFm7_Ra?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-01/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（100万以上～1,000万未満）",subject:"前払い（100万以上～1,000万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。
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
ご裁可の程、よろしくお願い致します。`}},{title:"100万円を超えない",link:"【WC-C】前払_30万円以上",geminiUrl:"https://gemini.google.com/gem/1PO2DXSlOOiiqxqp5idnWOAmWg2YREmp3?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-02/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（30万以上～100万未満）",subject:"前払い（30万以上～100万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。
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
ご裁可の程、よろしくお願い致します。`}},{title:"30万円を超えない",link:"【WC-C】前払_30万円未満",geminiUrl:"https://gemini.google.com/gem/1OVInnAdMujibam_ZUdMqxBDBE4GOSfUC?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-03/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"前払い（30万未満）",subject:"前払い（30万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"交通費金額用書類（路線図スクショ/事後のレシート写真）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて前借り申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:'1.2 給与額"以上"の額を借りる',children:[{title:"100万円を超える",link:"【WC-C】貸付金_100万円以上",geminiUrl:"https://gemini.google.com/gem/1tskO3yXHXKiC19NzlDYAMx58tKO_9vff?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-04/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（100万以上1,000万未満）",subject:"貸付（100万以上1,000万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"20万円を超える",link:"【WC-C】貸付金_20万円以上",geminiUrl:"https://gemini.google.com/gem/1BsDp_D7afnFto7X2WORzz7wBNIcv9Ak7?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-05/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（20万以上100万未満）",subject:"貸付（20万以上100万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"20万円を超えない",link:"【WC-C】貸付金_20万円未満",geminiUrl:"https://gemini.google.com/gem/1IwRWhNwSEr2CLvTmaO_ZTjhjwzoxI0Vy?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-06/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"貸付（20万未満）",subject:"貸付（20万未満）_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"証憑",required:!1}],applicationContent:`表題の件につきまして、下記にて貸付申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"2. 物品や賃貸を借りる",children:[{title:"2.1 会社のキャッシュアウトが発生する（後日回収予定含む）",children:[{title:"レオパレス",link:"【WC-O】レンタル利用_費用発生有_レオパレス",geminiUrl:"https://gemini.google.com/gem/1Mld5PfiLUJGmDh6ZmcvlZvm5YNTTaujy?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-13/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"レオパレス",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"レンタカー",link:"【WC-O】レンタル利用_費用発生有_レンタカー",url:"https://sites.google.com/nareru-group.co.jp/ringi-13/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"レンタカー",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"携帯電話",link:"【WC-O】レンタル利用_費用発生有_携帯電話",url:"https://sites.google.com/nareru-group.co.jp/ringi-13/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"携帯電話",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"駐車場",link:"【WC-O】レンタル利用_費用発生有_駐車場",url:"https://sites.google.com/nareru-group.co.jp/ringi-13/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"駐車場",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"賃貸アパート",link:"【WC-O】レンタル利用_費用発生有_賃貸アパート",url:"https://sites.google.com/nareru-group.co.jp/ringi-13/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"その他賃貸アパート",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円も会社からお金が出ないなら【WC-N】",link:"1円も会社からお金が出ないなら【WC-N】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}}]},{title:"2.2 会社のキャッシュアウトが発生しない（派遣先または本人負担）",children:[{title:"レオパレス",link:"【WC-N】レンタル利用_費用発生無_レオパレス",geminiUrl:"https://gemini.google.com/gem/13MYkdABVsDJ5XaDvKd4wNREiRBtg7l9E?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-14/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"レオパレス",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"レンタカー",link:"【WC-N】レンタル利用_費用発生無_レンタカー",url:"https://sites.google.com/nareru-group.co.jp/ringi-14/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"レンタカー",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"携帯電話",link:"【WC-N】レンタル利用_費用発生無_携帯電話",url:"https://sites.google.com/nareru-group.co.jp/ringi-14/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"携帯電話",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"駐車場",link:"【WC-N】レンタル利用_費用発生無_駐車場",url:"https://sites.google.com/nareru-group.co.jp/ringi-14/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"駐車場",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}},{title:"賃貸アパート",link:"【WC-N】レンタル利用_費用発生無_賃貸アパート",url:"https://sites.google.com/nareru-group.co.jp/ringi-14/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"その他賃貸アパート",subject:"-",attachments:[{name:"証憑（金額や振込先がわかるもの）ex.見積書・請求書",required:!0}],concurrentProposals:[{title:"1円でも会社からお金が出れば【WC-O】",link:"1円でも会社からお金が出れば【WC-O】"}],applicationContent:`■表題の件につきまして、下記にてレンタル品利用申請を致します。

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
`}}]}]},{title:"3. 派遣先との契約に係る申請を行う",children:[{title:"3.1 案件を受託する",children:[{title:"施工図を受託する",link:"【WC-E】施工図受託",geminiUrl:"https://gemini.google.com/gem/1iPbo77oesUQ4Pu6Pbuwa2fq35SBPI90I?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-07/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【顧客との取引条件】設定単価/企業設定単価を下回る契約_施工図",subject:"設定単価/企業設定単価を下回る契約_施工図_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"無 （※事前決裁必須）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて施工図契約申請を致します。

取引先：株式会社XX　XX支店
現場名：XX工事　≪企業単位の場合は不要≫
担当者：XX様
想定受注枚数：X枚
添付：{見積書 or 発注書}添付いたします。

{現場単位 or 企業単位 or 担当者単位}より、
≪どちらかを記入≫ー 用紙{A1 or A2 or A3サイズ}をXX,000/枚で受注を頂きました
≪どちらかを記入≫ー 時間単価をXX,000/hで受注を頂きました

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"3.2 自動車を利用する",children:[{title:"当社書式で契約をする",link:"【WC-G】自動車利用開始_当社書式_3者修正有",geminiUrl:"https://gemini.google.com/gem/1YTkTf2mK0T2fjVkDljX4Bi5f_04vdDBs?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-28/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動車利用に関する事項",subject:"自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"リーガルメール/締結したいデータ",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動車利用に関する申請を致します。

配属先：株式会社XX
配属日：XXXX/XX/XX～
対象技術社員：XX
社員番号：XXXXXXXX
利用目的：{通勤利用 / 業務利用 / 両方}

**利用理由を記載**

**添付資料**
リーガルメールと修正後データ

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"自家用車を利用する",link:"【WC-G】自動車利用開始_自家用車利用",geminiUrl:"https://gemini.google.com/gem/1tAEZjOS9Nhb2JC8ElI4NSZRbbwF3B00Q?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-29/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動車利用に関する事項",subject:"自動車利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"必要に応じた書類を添付",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動車利用に関する申請を致します。

配属先：株式会社XX
配属日：XXXX/XX/XX～
対象技術社員：XX
社員番号：XXXXXXXX
利用目的：{通勤利用 / 業務利用 / 両方}

**利用理由を記載**

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"3.3 契約締結をする",children:[{title:"顧客システムを利用する",link:"【WC-E】顧客システム利用",geminiUrl:"https://gemini.google.com/gem/1Zxy65BVcbtnqolMXajxsHbR1BVlxHpNm?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-15/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"顧客システム利用に関する事項",subject:"顧客システム利用に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて顧客システム利用に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"4. 技術社員に係る申請を行う",children:[{title:"4.1 給与改定を行う（昇給を含まない）",children:[{title:"事業部変更を伴う",link:"【WC-G】原価変更_給与改定無",geminiUrl:"https://gemini.google.com/gem/1z9_ZHUzdXuIcaF6FNkDVy4a4G1ZlSC5u?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-17/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（事業部の変更に限定される場合)",subject:"所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.2 給与改定を行う（昇給を含む）",children:[{title:"事業部変更を伴わず、本人対話の上で個別対応として行う",link:"【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",geminiUrl:"https://gemini.google.com/gem/10bHxEp252ZCmrpvHYIKg2hTAK0yQ0311?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-22/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`※下記稟議は当該稟議に集約されましたのでご確認ください
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
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わず、「特別手当支給」を行う",link:"【WC-G】給与改定_特別定期昇給 / 特別賞与支給",geminiUrl:"https://gemini.google.com/gem/1HD7dwTrdIV3tY7uZq3gwcw9njkjwrx0A?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-23/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`※下記稟議は当該稟議に集約されましたのでご確認ください
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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.3 雇用形態変更を行う",children:[{title:"事業部変更を伴う",link:"【WC-G】原価変更_給与改定有",geminiUrl:"https://gemini.google.com/gem/1FVvxmy5PI-asZ5xbHjiKzYM54eaKVR6p?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-16/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）",subject:"所属事業部変更に関する事項（給与・雇用形態変更が伴う場合）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わない",link:"【WC-G】雇用切り替え",geminiUrl:"https://gemini.google.com/gem/1dmdrMLz10KK8zb4CiLPQIiiOifIPlsjd?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-26/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"雇用切替に関する事項",subject:"雇用切替に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて雇用切り替え（XX社員➡XX社員※雇用形態）に関する申請を致します。
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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.4 事業部変更を行う（給与改定や雇用形態変更を伴わない）",children:[{title:"単純な事業部変更",link:"【WC-G】原価変更_給与改定無",geminiUrl:"https://gemini.google.com/gem/1z9_ZHUzdXuIcaF6FNkDVy4a4G1ZlSC5u?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-17/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"所属事業部変更に関する事項（事業部の変更に限定される場合)",subject:"所属事業部変更に関する事項（事業部の変更に限定される場合)_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて原価変更に関する申請を致します。

社員氏名：XX
社員番号：XXXXXXXX
変更後　配属先：株式会社XX
契約期間：XXXX年/X月/X日～XXXX年/X月/X日
事業部変更日：XX年XX月1日

【変更理由】"＊＊＊"

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.5 退職をする",children:[{title:"自動退職をする",link:"【WC-G】退職_自動退職",geminiUrl:"https://gemini.google.com/gem/15s3IJJPB_BgnREZkRzTwcBktiJE5ZOpQ?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-18/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（自動退職）",subject:"自動退職の決定に関する事項（自動退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて自動退職に関する申請を致します。
※Stafnoteを熟読し、理解の上で申請いたします。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
最終出勤日：XXXX年XX月XX日
退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫
理由："＊＊＊"　≪ex.音信不通により/退職代行手続きの滞りにより、等≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"満了退職をする",link:"【WC-G】退職_満了退職",geminiUrl:"https://gemini.google.com/gem/1UzFlC31KrlvvK7e4mrH9MSn_haHPAxM2?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-19/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（満了退職）",subject:"自動退職の決定に関する事項（満了退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて満了退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日
最終出勤日：XXXX年XX月XX日
退職日：XXXX年XX月XX日
理由："＊＊＊"　≪ex.退職届の提出を拒否されたため/音信不通により、等≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"死亡退職をする",link:"【WC-G】退職_死亡退職",geminiUrl:"https://gemini.google.com/gem/1QmLPsj7cluwQLWt5zz9gMwfICkcL_NvS?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-20/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（死亡退職）",subject:"自動退職の決定に関する事項（死亡退職）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"相続人からの給与誓約書",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて死亡退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
雇用契約期間：XXXX年XX月XX日～XXXX年XX月XX日
最終出勤日：XXXX年XX月XX日
逝去日：XXXX年XX月XX日
相続人からの給与誓約書取得予定日：XXXX年XX月XX日≪取得済みの場合はPDFを添付してください≫

＝＝
ご裁可の程、よろしくお願い致します。`}},{title:"不備の処理を依頼する",link:"【WC-G】退職_不備処理依頼",geminiUrl:"https://gemini.google.com/gem/1EX_EV3LA9CPEVleOQUZ4sbEqsM__t4Wx?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-21/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"自動退職の決定に関する事項（不備による処理の依頼）",subject:"自動退職の決定に関する事項（不備による処理の依頼）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて退職に関する申請を致します。

社員氏名：XXXX
社員番号：XXXXXXXX
配属先：株式会社XX
最終出勤日：XXXX年XX月XX日
退職日：定めることができません　　≪証跡がある場合を除きます。ある場合退職日をご記載ください≫
理由："＊＊＊"　≪ex.印漏れ/誓約書記載拒否/退職日・退職理由の修正（証跡がある場合に限る)の処理のお願い）≫

＝＝
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.6 賞与を支給する",children:[{title:"事業部変更を伴わず、本人対話の上で個別対応として行う",link:"【WC-G】給与改定_個別給与改定 / 派遣先賞与支給",geminiUrl:"https://gemini.google.com/gem/10bHxEp252ZCmrpvHYIKg2hTAK0yQ0311?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-22/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて{個別給与改定 / 派遣先賞与支給}に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"事業部変更を伴わず、「特別手当支給」を行う",link:"【WC-G】給与改定_特別定期昇給 / 特別賞与支給",geminiUrl:"https://gemini.google.com/gem/1HD7dwTrdIV3tY7uZq3gwcw9njkjwrx0A?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-23/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）",subject:"技術部社員の給与改定および賞与に関する事項（個別の給与改定に関する事項）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"★★11月留保★★",required:!1}],concurrentProposals:[{title:"",link:"★★11月留保★★"}],applicationContent:`表題の件につきまして、下記にて{特別定期昇給 / 特別賞与支給}に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.7 給与保証を行う",children:[{title:"給与保証の申請",link:"【WC-G】給与保証",geminiUrl:"https://gemini.google.com/gem/1BntqYo2DdjZcaX7eow7CtDK4RcrtfOn1?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-24/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"休業手当の支給割合変更、給与保証等に関する事項",subject:"休業手当の支給割合変更、給与保証等に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"次回分の派遣契約書",required:!1}],concurrentProposals:[{title:"",link:"【WC-G】雇用継続"}],applicationContent:`表題の件につきまして、下記にて給与保証に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.8 雇用継続する",children:[{title:"雇用継続する",link:"【WC-G】雇用継続",geminiUrl:"https://gemini.google.com/gem/1-44XnguKO4DlbvE2VniGfm6LZUac5O7i?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-25/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"有期雇用社員の雇用継続に関する事項",subject:"有期雇用社員の雇用継続に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"次回分の派遣契約書",required:!1}],concurrentProposals:[{title:"",link:"【WC-G】給与保証"}],applicationContent:`※継続期間が14日以上の場合のみ決裁を取得すること(14日未満の雇用継続はWFを省略)
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
ご裁可の程、よろしくお願い致します。`}}]},{title:"4.9 転籍に係る処理を行う",children:[{title:"転籍処理の申請",link:"【WC-G】転籍",geminiUrl:"https://gemini.google.com/gem/1XUJTqalP41M6vSwSkWk9-Z7mUl97cFMB?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-27/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"転籍に関する事項",subject:"転籍に関する事項_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"ESメール",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて転籍に関する申請を致します。
　派遣先への同時転籍人数：X人（純減日報を参照）

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"5. クレーム対応を行う",children:[{title:"5.1 値引きを行う",children:[{title:"値引き金額(税込)が1,500万円を超える",link:"【WC-F】値引き_1,500万円以上",geminiUrl:"https://gemini.google.com/gem/1GHfHxj4WoPC2RUbA5snHGFJrdaGddcqS?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-08/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】1,500万以上",subject:"【クレーム・値引き】1,500万以上_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
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
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が1,000万円を超える",link:"【WC-F】値引き_1,000万円以上",geminiUrl:"https://gemini.google.com/gem/1IwRWhNwSEr2CLvTmaO_ZTjhjwzoxI0Vy?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-09/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】1,000万以上1,500万未満",subject:"【クレーム・値引き】1,000万以上1,500万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
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
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が50万円を超える",link:"【WC-F】値引き_50万円以上",geminiUrl:"https://gemini.google.com/gem/1CEv0ISqDd7rwCPlckLhVrPvKn-DhdSWn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-10/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】50万以上1,000万未満",subject:"【クレーム・値引き】50万以上1,000万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:`いずれか1-2種類(当月以内目安・速やかに提出すること目安/速やかに提出すること)■いずれか必須
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
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が10万円を超える",link:"【WC-F】値引き_10万円以上",geminiUrl:"https://gemini.google.com/gem/1FAGxne-7V88aAbjvWPcvmMptD3h5P7Hg?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-11/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】10万以上50万未満",subject:"【クレーム・値引き】10万以上50万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
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
ご裁可の程、よろしくお願い致します。`}},{title:"値引き金額(税込)が10万円を超えない",link:"【WC-F】値引き_10万円未満",geminiUrl:"https://gemini.google.com/gem/1bMUjonT1TetgJ1D2pC2BTJx3fXS8mkFb?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-12/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【クレーム・値引き】10万未満",subject:"【クレーム・値引き】10万未満_株式会社XX_技術社員XX_番号XXXXXXXX",attachments:[{name:"①見積書②請求書(いずれか)",required:!0},{name:"①勤怠（労務費の場合）②クレーム報告書（クレーム起因の場合）",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にてクレーム・値引き申請を致します。
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
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.2 什器を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.3 備品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.4 貸与品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"5.5 自動車を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]}]},{title:"6. 破損・紛失対応をする",children:[{title:"6.1 什器を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.2 備品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.3 貸与品を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]},{title:"6.4 自動車を破損・紛失する",children:[{title:"負担先を問わず、総額が60万円を超える",link:"【WC-G】什器等破損_60万円以上",geminiUrl:"https://gemini.google.com/gem/1Lg1CkclFFMmbBTbpLNLqwa0wkSnQ7xb0?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-30/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万円以上1,000万未満_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先となり、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担有",geminiUrl:"https://gemini.google.com/gem/1JhWvHd3vJ4I6Haxda0l4yMUlRUlZRF2G?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-31/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担あり）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書＆見積書",required:!0},{name:"クレーム報告書(※発生事象によっては必須)",required:!1},{name:"顛末書（PDF等）",required:!1}],concurrentProposals:[{title:"",link:"特例扱申請"}],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}},{title:"会社が負担先とならず、総額が60万円を超えない",link:"【WC-G】什器等破損_60万円未満_当社負担無",geminiUrl:"https://gemini.google.com/gem/1RxSdf46EWnjdN5JvX8CLqrGYTBhBtPRn?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-32/%E3%83%9B%E3%83%BC%E3%83%A0",details:{applicableProject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）",subject:"【什器・備品・貸与品等の破損及び紛失費用負担】60万未満（当社負担なし）_株式会社XXX_技術社員XXX_社員番号XXXXXXXX",attachments:[{name:"請求書・見積書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて備品費用負担に関する申請を致します。

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
ご裁可の程、よろしくお願い致します。`}}]}]}],$u=[{title:"1. 請求書の記載内容を変更する",children:[{title:"1. 締日を変更する（契約書の変更が発生する）",children:[{title:"現場限りの締日変更",link:"【特例】現場限りの締日変更",geminiUrl:"https://gemini.google.com/gem/16D2iJhN64GwHu1MaVLJLOqYF9xLDW5rR?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-33/ホーム",details:{applicableProject:"現場限りの締日変更",subject:"現場限りの締日変更_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて現場限りの締日変更に関する申請を致します。

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

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 現場表記を変更する（契約書の変更は発生しない）",children:[{title:"契約書と異なる現場表記での請求書発行",link:"【特例】契約書と異なる現場表記での請求書発行",geminiUrl:"https://gemini.google.com/gem/1GQFPcw7waLnWYUlxQAifFq7nbHJ8991T?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-40/ホーム",details:{applicableProject:"契約書と異なる現場表記での請求書発行",subject:"現場名変更_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて現場表記での請求書発行に関する申請を致します。

■派遣先：XXX
■対象月：XX月
■技術社員：XXX
■締日：XXX
■変更前現場名：XXX
■変更後現場名：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"2. 請求書の合算・分割を行う",children:[{title:"1. 合算する（同月内で、同一人物での処理を行う）",children:[{title:"未入金以外の合算請求",link:"【特例】未入金以外の合算請求",geminiUrl:"https://gemini.google.com/gem/1jBovWYePoDlAotTbTbUJco5BgtuXHrSe?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-35/ホーム",details:{applicableProject:"未入金以外の合算請求",subject:"未入金以外の合算請求_株式会社XXX",attachments:[{name:"合算請求書2部（手元にない場合は添付不要）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて合算請求に関する申請を致します。

■技術者名：XXX
■現場：XXX
■合算対象：XX現場とXX現場
■経緯：XXX（自由記載）

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 合算する（同月内で、複数人物に影響が生じる処理を行う）",children:[{title:"技術者の経費精算を後任技術者の請求書で請求",link:"【特例】技術者の経費精算を後任技術者の請求書で請求",geminiUrl:"https://gemini.google.com/gem/1cCEq_z5dnVsXc1y09C2Snrn8uvzUYPJu?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-36/ホーム",details:{applicableProject:"技術者の経費精算を後任技術者の請求書で請求",subject:"合算請求_株式会社XXX（X月分Aさん/X月分Bさん）",attachments:[{name:"請求書（手元にない場合は添付不要）",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて後任技術者の請求書請求に関する申請を致します。

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

ご裁可の程、よろしくお願い致します。`}}]},{title:"3. 分割する（割合変更の発生）",children:[{title:"分割請求",link:"【特例】分割請求",geminiUrl:"https://gemini.google.com/gem/1deGxhXZ79nSfIH4O1CVV5ZHqw0IueH3b?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-39/ホーム",details:{applicableProject:"分割請求",subject:"分割請求_株式会社XXX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて分割請求に関する申請を致します。

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

ご裁可の程、よろしくお願い致します。`}}]},{title:"4. 分割する（費目変更の発生）",children:[{title:"人件費・残業代・交通費で請求明細を分割",link:"【特例】人件費・残業代・交通費で請求明細を分割",geminiUrl:"https://gemini.google.com/gem/1d-wy5baKsX6AKaJThRXCV0cibI-QokQq?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-41/ホーム",details:{applicableProject:"人件費・残業代・交通費で請求明細を分割",subject:"請求明細を分割_株式会社XX",attachments:[{name:"-",required:!1}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて分割請求に関する申請を致します。

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

ご裁可の程、よろしくお願い致します。`}}]}]},{title:"3. その他請求・売上修正",children:[{title:"1. 売上修正",children:[{title:"勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",link:"【特例】勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",geminiUrl:"https://gemini.google.com/gem/1_O6wtRrxfu9antJFZQ1HzQYX1_CskG2a?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-34/ホーム",details:{applicableProject:"勤怠入力、交通費・経費等の報告・申請の修正等に伴う売上の修正",subject:"XX月分人件費の売上修正_株式会社XXXX",attachments:[{name:"修正前請求書",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて売上修正に関する申請を致します。

■技術社員：XXX
■社員番号：XXX
■請求対象月：XX月
■社名：XXX
■配属先：XXX
■配属日：2025年XX月XX日～
■差額金額：XXX円（税込）

■差額発生経緯：XXX

＝＝

ご裁可の程、よろしくお願い致します。`}}]},{title:"2. 請求書修正",children:[{title:"契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",link:"【特例】契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",geminiUrl:"https://gemini.google.com/gem/1ApOfUMQCsRxGRCF4qFs98079E_paa0qX?usp=sharing",url:"https://sites.google.com/nareru-group.co.jp/ringi-37/ホーム",details:{applicableProject:"契約期間内で実働期間と差異が生じたが、請求可能となったものの請求",subject:`(差分請求の場合)差分請求依頼_X月分Aさん_株式会社XXX
(単一請求の場合)新規請求依頼_X月分Aさん_株式会社XXX`,attachments:[{name:"差が生じた際の勤務表",required:!0}],concurrentProposals:[],applicationContent:`表題の件につきまして、下記にて実働期間との差異請求に関する申請を致します。

■技術者：XXX
■社員番号：XXXXXXXX
■現場名：XXX
■請求対象項目：ex.残業申請忘れ/領収書送付忘れ

■経緯：

＝＝

ご裁可の程、よろしくお願い致します。`}}]}]}],Uf=()=>{const[e,n]=Fe.useState(""),t=Fe.useMemo(()=>{if(!e.trim())return $u;const r=e.toLowerCase(),l=i=>i.map(o=>{const u=o.title.toLowerCase().includes(r)||o.link&&o.link.toLowerCase().includes(r);let s;o.children&&(s=l(o.children));const c=s&&s.length>0;return u||c?Object.assign(Object.assign({},o),{children:s}):null}).filter(o=>o!==null);return l($u)},[e]);return v.jsxs("div",{className:"max-w-4xl mx-auto",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4",children:[v.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight",children:"特例扱申請・指示書"}),v.jsx("a",{href:"#/",className:"inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"← 稟議起案フローに戻る"})]}),v.jsxs("div",{className:"text-left mb-8 text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-4",children:[v.jsx("p",{className:"font-semibold text-blue-800 mb-2",children:"ℹ️ 特例扱申請・指示書について"}),v.jsx("p",{className:"text-blue-700",children:"対象月における請求額の変更が発生しない場合は、該当する項目を選択してWFへ進んでください。"})]}),v.jsxs("div",{className:"mb-8 relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center",children:v.jsx("svg",{className:"h-5 w-5 text-slate-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),v.jsx("input",{type:"search",value:e,onChange:r=>n(r.target.value),placeholder:"キーワードで検索...",className:"w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200","aria-label":"特例扱申請・指示書を検索"})]}),v.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:t.length>0?t.map((r,l)=>v.jsx(Lo,{item:r,searchTerm:e},l)):v.jsxs("div",{className:"p-8 text-center text-slate-500",children:[v.jsx("p",{className:"font-semibold",children:"検索結果が見つかりませんでした。"}),v.jsx("p",{className:"text-sm mt-1",children:"別のキーワードでお試しください。"})]})}),v.jsx("footer",{className:"text-center mt-12 text-slate-500",children:v.jsx("p",{children:"© 2024 Ringi Proposal Flow Guide. All Rights Reserved."})})]})},Of=()=>{const[e,n]=Fe.useState(window.location.hash);Fe.useEffect(()=>{const i=()=>n(window.location.hash);return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const[t,r]=Fe.useState(""),l=Fe.useMemo(()=>{if(!t.trim())return qu;const i=t.toLowerCase(),o=u=>u.map(s=>{const c=s.title.toLowerCase().includes(i)||s.link&&s.link.toLowerCase().includes(i);let m;s.children&&(m=o(s.children));const p=m&&m.length>0;return c||p?Object.assign(Object.assign({},s),{children:m}):null}).filter(s=>s!==null);return o(qu)},[t]);return v.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans antialiased",children:[v.jsx("header",{className:"bg-white border-b border-slate-200",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsx("div",{className:"flex justify-center items-center py-4",children:v.jsx("a",{href:"https://worldcorp-jp.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"World Corporation Homepage",children:v.jsx("img",{src:"https://prcdn.freetls.fastly.net/release_image/132820/8/132820-8-3af0ab6387a4e3bdde6e85f50849d3bf-360x160.png?format=jpeg&auto=webp&fit=bounds&width=720&height=480",alt:"株式会社ワールドコーポレーション ロゴ",className:"h-8 w-auto"})})})})}),v.jsx("main",{className:"container mx-auto px-4 py-12 sm:py-16",children:e==="#/special"?v.jsx(Uf,{}):v.jsxs("div",{className:"max-w-4xl mx-auto",children:[v.jsxs("div",{className:"text-center mb-6",children:[v.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight",children:"稟議起案フロー"}),v.jsx("p",{className:"mt-4 max-w-2xl mx-auto text-lg text-slate-600",children:"必要な申請項目を選択するか、キーワードで検索してください。"})]}),v.jsx("div",{className:"text-center mb-8 text-slate-600",children:v.jsxs("p",{children:["もし起案できる稟議に複数候補がある場合は、",v.jsx("strong",{className:"text-red-600 underline decoration-2",children:"決裁権が高い方の稟議"}),"を選択ください"]})}),v.jsxs("div",{className:"text-left mb-4 text-slate-600 bg-sky-50 border border-sky-200 rounded-lg p-4",children:[v.jsx("p",{className:"font-semibold text-sky-800 mb-2",children:"💬 汎用稟議申請サポートチャットはこちら"}),v.jsxs("p",{className:"text-sky-700",children:["起案するべき稟議に悩む場合はこちらをお使いください：",v.jsx("a",{href:"https://gemini.google.com/gem/1GGUJfNZw0xBts6tUHFkF2U52ocomCecH?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"text-sky-700 hover:text-sky-900 hover:underline font-semibold",children:"汎用稟議申請チャット"})]})]}),v.jsxs("div",{className:"text-left mb-8 text-slate-600 bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[v.jsx("p",{className:"font-semibold text-yellow-800 mb-2",children:"⚠️ 特例扱申請書の提出について"}),v.jsxs("p",{className:"text-yellow-700",children:["対象月における請求額の変更が発生しない場合は稟議ではなく、",v.jsx("a",{href:"#/special",className:"text-indigo-600 hover:underline font-semibold",children:"「特例扱申請・指示書」"}),"の提出が必要です"]})]}),v.jsxs("div",{className:"mb-8 relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center",children:v.jsx("svg",{className:"h-5 w-5 text-slate-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),v.jsx("input",{type:"search",value:t,onChange:i=>r(i.target.value),placeholder:"キーワードで検索...",className:"w-full pl-11 pr-4 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200","aria-label":"稟議フローを検索"})]}),v.jsx("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:l.length>0?l.map((i,o)=>v.jsx(Lo,{item:i,searchTerm:t},o)):v.jsxs("div",{className:"p-8 text-center text-slate-500",children:[v.jsx("p",{className:"font-semibold",children:"検索結果が見つかりませんでした。"}),v.jsx("p",{className:"text-sm mt-1",children:"別のキーワードでお試しください。"})]})}),v.jsx("footer",{className:"text-center mt-12 text-slate-500",children:v.jsx("p",{children:"© 2024 Ringi Proposal Flow Guide. All Rights Reserved."})})]})})]})},ic=document.getElementById("root");if(!ic)throw new Error("Could not find root element to mount to");const Mf=lc(ic);Mf.render(v.jsx(Ec.StrictMode,{children:v.jsx(Of,{})}));
//# sourceMappingURL=index-54VyXxf0.js.map
