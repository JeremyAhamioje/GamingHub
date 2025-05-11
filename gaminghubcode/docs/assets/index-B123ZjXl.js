(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function b_(a,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in a)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(a,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function S_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Lp={exports:{}},dt={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Np;function M_(){if(Np)return dt;Np=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(I,re,De){this.props=I,this.context=re,this.refs=M,this.updater=De||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=x.prototype;function U(I,re,De){this.props=I,this.context=re,this.refs=M,this.updater=De||b}var N=U.prototype=new v;N.constructor=U,E(N,x.prototype),N.isPureReactComponent=!0;var A=Array.isArray,j=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(I,re,De){var Z,de={},Ee=null,ye=null;if(re!=null)for(Z in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Ee=""+re.key),re)j.call(re,Z)&&!O.hasOwnProperty(Z)&&(de[Z]=re[Z]);var Re=arguments.length-2;if(Re===1)de.children=De;else if(1<Re){for(var Oe=Array(Re),Qe=0;Qe<Re;Qe++)Oe[Qe]=arguments[Qe+2];de.children=Oe}if(I&&I.defaultProps)for(Z in Re=I.defaultProps,Re)de[Z]===void 0&&(de[Z]=Re[Z]);return{$$typeof:a,type:I,key:Ee,ref:ye,props:de,_owner:B.current}}function C(I,re){return{$$typeof:a,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function H(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return re[De]})}var ae=/\/+/g;function te(I,re){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):re.toString(36)}function ue(I,re,De,Z,de){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case a:case e:ye=!0}}if(ye)return ye=I,de=de(ye),I=Z===""?"."+te(ye,0):Z,A(de)?(De="",I!=null&&(De=I.replace(ae,"$&/")+"/"),ue(de,re,De,"",function(Qe){return Qe})):de!=null&&(R(de)&&(de=C(de,De+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+I)),re.push(de)),1;if(ye=0,Z=Z===""?".":Z+":",A(I))for(var Re=0;Re<I.length;Re++){Ee=I[Re];var Oe=Z+te(Ee,Re);ye+=ue(Ee,re,De,Oe,de)}else if(Oe=y(I),typeof Oe=="function")for(I=Oe.call(I),Re=0;!(Ee=I.next()).done;)Ee=Ee.value,Oe=Z+te(Ee,Re++),ye+=ue(Ee,re,De,Oe,de);else if(Ee==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ve(I,re,De){if(I==null)return I;var Z=[],de=0;return ue(I,Z,"","",function(Ee){return re.call(De,Ee,de++)}),Z}function oe(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var pe={current:null},F={transition:null},ie={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:F,ReactCurrentOwner:B};function le(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:ve,forEach:function(I,re,De){ve(I,function(){re.apply(this,arguments)},De)},count:function(I){var re=0;return ve(I,function(){re++}),re},toArray:function(I){return ve(I,function(re){return re})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=x,dt.Fragment=r,dt.Profiler=o,dt.PureComponent=U,dt.StrictMode=i,dt.Suspense=f,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,dt.act=le,dt.cloneElement=function(I,re,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=E({},I.props),de=I.key,Ee=I.ref,ye=I._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,ye=B.current),re.key!==void 0&&(de=""+re.key),I.type&&I.type.defaultProps)var Re=I.type.defaultProps;for(Oe in re)j.call(re,Oe)&&!O.hasOwnProperty(Oe)&&(Z[Oe]=re[Oe]===void 0&&Re!==void 0?Re[Oe]:re[Oe])}var Oe=arguments.length-2;if(Oe===1)Z.children=De;else if(1<Oe){Re=Array(Oe);for(var Qe=0;Qe<Oe;Qe++)Re[Qe]=arguments[Qe+2];Z.children=Re}return{$$typeof:a,type:I.type,key:de,ref:Ee,props:Z,_owner:ye}},dt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},dt.createElement=X,dt.createFactory=function(I){var re=X.bind(null,I);return re.type=I,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:d,render:I}},dt.isValidElement=R,dt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:oe}},dt.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},dt.startTransition=function(I){var re=F.transition;F.transition={};try{I()}finally{F.transition=re}},dt.unstable_act=le,dt.useCallback=function(I,re){return pe.current.useCallback(I,re)},dt.useContext=function(I){return pe.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return pe.current.useDeferredValue(I)},dt.useEffect=function(I,re){return pe.current.useEffect(I,re)},dt.useId=function(){return pe.current.useId()},dt.useImperativeHandle=function(I,re,De){return pe.current.useImperativeHandle(I,re,De)},dt.useInsertionEffect=function(I,re){return pe.current.useInsertionEffect(I,re)},dt.useLayoutEffect=function(I,re){return pe.current.useLayoutEffect(I,re)},dt.useMemo=function(I,re){return pe.current.useMemo(I,re)},dt.useReducer=function(I,re,De){return pe.current.useReducer(I,re,De)},dt.useRef=function(I){return pe.current.useRef(I)},dt.useState=function(I){return pe.current.useState(I)},dt.useSyncExternalStore=function(I,re,De){return pe.current.useSyncExternalStore(I,re,De)},dt.useTransition=function(){return pe.current.useTransition()},dt.version="18.3.1",dt}var Ip;function Zd(){return Ip||(Ip=1,Lp.exports=M_()),Lp.exports}var ce=Zd();const E_=S_(ce),T_=b_({__proto__:null,default:E_},[ce]);var Au={exports:{}},Ar={},Dp={exports:{}},Op={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var kp;function w_(){return kp||(kp=1,function(a){function e(F,ie){var le=F.length;F.push(ie);e:for(;0<le;){var I=le-1>>>1,re=F[I];if(0<o(re,ie))F[I]=ie,F[le]=re,le=I;else break e}}function r(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ie=F[0],le=F.pop();if(le!==ie){F[0]=le;e:for(var I=0,re=F.length,De=re>>>1;I<De;){var Z=2*(I+1)-1,de=F[Z],Ee=Z+1,ye=F[Ee];if(0>o(de,le))Ee<re&&0>o(ye,de)?(F[I]=ye,F[Ee]=le,I=Ee):(F[I]=de,F[Z]=le,I=Z);else if(Ee<re&&0>o(ye,le))F[I]=ye,F[Ee]=le,I=Ee;else break e}}return ie}function o(F,ie){var le=F.sortIndex-ie.sortIndex;return le!==0?le:F.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var f=[],p=[],_=1,g=null,y=3,b=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(F){for(var ie=r(p);ie!==null;){if(ie.callback===null)i(p);else if(ie.startTime<=F)i(p),ie.sortIndex=ie.expirationTime,e(f,ie);else break;ie=r(p)}}function A(F){if(M=!1,N(F),!E)if(r(f)!==null)E=!0,oe(j);else{var ie=r(p);ie!==null&&pe(A,ie.startTime-F)}}function j(F,ie){E=!1,M&&(M=!1,v(X),X=-1),b=!0;var le=y;try{for(N(ie),g=r(f);g!==null&&(!(g.expirationTime>ie)||F&&!H());){var I=g.callback;if(typeof I=="function"){g.callback=null,y=g.priorityLevel;var re=I(g.expirationTime<=ie);ie=a.unstable_now(),typeof re=="function"?g.callback=re:g===r(f)&&i(f),N(ie)}else i(f);g=r(f)}if(g!==null)var De=!0;else{var Z=r(p);Z!==null&&pe(A,Z.startTime-ie),De=!1}return De}finally{g=null,y=le,b=!1}}var B=!1,O=null,X=-1,C=5,R=-1;function H(){return!(a.unstable_now()-R<C)}function ae(){if(O!==null){var F=a.unstable_now();R=F;var ie=!0;try{ie=O(!0,F)}finally{ie?te():(B=!1,O=null)}}else B=!1}var te;if(typeof U=="function")te=function(){U(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ve=ue.port2;ue.port1.onmessage=ae,te=function(){ve.postMessage(null)}}else te=function(){x(ae,0)};function oe(F){O=F,B||(B=!0,te())}function pe(F,ie){X=x(function(){F(a.unstable_now())},ie)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_continueExecution=function(){E||b||(E=!0,oe(j))},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_getFirstCallbackNode=function(){return r(f)},a.unstable_next=function(F){switch(y){case 1:case 2:case 3:var ie=3;break;default:ie=y}var le=y;y=ie;try{return F()}finally{y=le}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(F,ie){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var le=y;y=F;try{return ie()}finally{y=le}},a.unstable_scheduleCallback=function(F,ie,le){var I=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?I+le:I):le=I,F){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,F={id:_++,callback:ie,priorityLevel:F,startTime:le,expirationTime:re,sortIndex:-1},le>I?(F.sortIndex=le,e(p,F),r(f)===null&&F===r(p)&&(M?(v(X),X=-1):M=!0,pe(A,le-I))):(F.sortIndex=re,e(f,F),E||b||(E=!0,oe(j))),F},a.unstable_shouldYield=H,a.unstable_wrapCallback=function(F){var ie=y;return function(){var le=y;y=ie;try{return F.apply(this,arguments)}finally{y=le}}}}(Op)),Op}var Fp;function R_(){return Fp||(Fp=1,Dp.exports=w_()),Dp.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var zp;function A_(){if(zp)return Ar;zp=1;var a=Zd(),e=R_();function r(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(t,n){u(t,n),u(t+"Capture",n)}function u(t,n){for(o[t]=n,t=0;t<n.length;t++)i.add(n[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function y(t){return f.call(g,t)?!0:f.call(_,t)?!1:p.test(t)?g[t]=!0:(_[t]=!0,!1)}function b(t,n,s,c){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,n,s,c){if(n===null||typeof n>"u"||b(t,n,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function M(t,n,s,c,h,m,S){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=s,this.propertyName=t,this.type=n,this.sanitizeURL=m,this.removeEmptyString=S}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];x[n]=new M(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(v,U);x[n]=new M(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(v,U);x[n]=new M(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(v,U);x[n]=new M(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,n,s,c){var h=x.hasOwnProperty(n)?x[n]:null;(h!==null?h.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,s,h,c)&&(s=null),c||h===null?y(n)&&(s===null?t.removeAttribute(n):t.setAttribute(n,""+s)):h.mustUseProperty?t[h.propertyName]=s===null?h.type===3?!1:"":s:(n=h.attributeName,c=h.attributeNamespace,s===null?t.removeAttribute(n):(h=h.type,s=h===3||h===4&&s===!0?"":""+s,c?t.setAttributeNS(c,n,s):t.setAttribute(n,s))))}var A=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),F=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,I;function re(t){if(I===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||""}return`
`+I+t}var De=!1;function Z(t,n){if(!t||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(J){var c=J}Reflect.construct(t,[],n)}else{try{n.call()}catch(J){c=J}t.call(n.prototype)}else{try{throw Error()}catch(J){c=J}t()}}catch(J){if(J&&c&&typeof J.stack=="string"){for(var h=J.stack.split(`
`),m=c.stack.split(`
`),S=h.length-1,L=m.length-1;1<=S&&0<=L&&h[S]!==m[L];)L--;for(;1<=S&&0<=L;S--,L--)if(h[S]!==m[L]){if(S!==1||L!==1)do if(S--,L--,0>L||h[S]!==m[L]){var D=`
`+h[S].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=S&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?re(t):""}function de(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case B:return"Portal";case C:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ae:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ve:return n=t.displayName||null,n!==null?n:Ee(t.type)||"Memo";case oe:n=t._payload,t=t._init;try{return Ee(t(n))}catch{}}return null}function ye(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(n);case 8:return n===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Re(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t){var n=Oe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){t._valueTracker||(t._valueTracker=Qe(t))}function ft(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),c="";return t&&(c=Oe(t)?t.checked?"true":"false":t.value),t=c,t!==s?(n.setValue(t),!0):!1}function Ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,n){var s=n.checked;return le({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function mr(t,n){var s=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;s=Re(n.value!=null?n.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pt(t,n){n=n.checked,n!=null&&N(t,"checked",n,!1)}function ct(t,n){pt(t,n);var s=Re(n.value),c=n.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Et(t,n.type,s):n.hasOwnProperty("defaultValue")&&Et(t,n.type,Re(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Xe(t,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,s||n===t.value||(t.value=n),t.defaultValue=n}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Et(t,n,s){(n!=="number"||Ut(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function P(t,n,s,c){if(t=t.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=n.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&c&&(t[s].defaultSelected=!0)}else{for(s=""+Re(s),n=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function T(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return le({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(r(92));if(We(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),s=n}t._wrapperState={initialValue:Re(s)}}function fe(t,n){var s=Re(n.value),c=Re(n.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),n.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function be(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?he(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,et=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,c,h){MSApp.execUnsafeLocalFunction(function(){return t(n,s,c,h)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function qe(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Fe.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Se[n]=Se[t]})});function tt(t,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Se.hasOwnProperty(t)&&Se[t]?(""+n).trim():n+"px"}function rt(t,n){t=t.style;for(var s in n)if(n.hasOwnProperty(s)){var c=s.indexOf("--")===0,h=tt(s,n[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,h):t[s]=h}}var ze=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,n){if(n){if(ze[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function at(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var St=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,ne=null,me=null;function Ue(t){if(t=xs(t)){if(typeof Ce!="function")throw Error(r(280));var n=t.stateNode;n&&(n=Mo(n),Ce(t.stateNode,t.type,n))}}function we(t){ne?me?me.push(t):me=[t]:ne=t}function ht(){if(ne){var t=ne,n=me;if(me=ne=null,Ue(t),n)for(t=0;t<n.length;t++)Ue(n[t])}}function Nt(t,n){return t(n)}function Yt(){}var vt=!1;function Sr(t,n,s){if(vt)return t(n,s);vt=!0;try{return Nt(t,n,s)}finally{vt=!1,(ne!==null||me!==null)&&(Yt(),ht())}}function gr(t,n){var s=t.stateNode;if(s===null)return null;var c=Mo(s);if(c===null)return null;s=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var la=!1;if(d)try{var $n={};Object.defineProperty($n,"passive",{get:function(){la=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{la=!1}function xn(t,n,s,c,h,m,S,L,D){var J=Array.prototype.slice.call(arguments,3);try{n.apply(s,J)}catch(_e){this.onError(_e)}}var yn=!1,Li=null,Ni=!1,Yn=null,eo={onError:function(t){yn=!0,Li=t}};function ca(t,n,s,c,h,m,S,L,D){yn=!1,Li=null,xn.apply(eo,arguments)}function to(t,n,s,c,h,m,S,L,D){if(ca.apply(this,arguments),yn){if(yn){var J=Li;yn=!1,Li=null}else throw Error(r(198));Ni||(Ni=!0,Yn=J)}}function un(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function ro(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function no(t){if(un(t)!==t)throw Error(r(188))}function Jl(t){var n=t.alternate;if(!n){if(n=un(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,c=n;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return no(h),t;if(m===c)return no(h),n;m=m.sibling}throw Error(r(188))}if(s.return!==c.return)s=h,c=m;else{for(var S=!1,L=h.child;L;){if(L===s){S=!0,s=h,c=m;break}if(L===c){S=!0,c=h,s=m;break}L=L.sibling}if(!S){for(L=m.child;L;){if(L===s){S=!0,s=m,c=h;break}if(L===c){S=!0,c=m,s=h;break}L=L.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function io(t){return t=Jl(t),t!==null?ao(t):null}function ao(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=ao(t);if(n!==null)return n;t=t.sibling}return null}var so=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,Q=e.unstable_requestPaint,Y=e.unstable_now,G=e.unstable_getCurrentPriorityLevel,xe=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Ke=null,Ye=null;function gt(t){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Rt,Bt=Math.log,Mt=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(Bt(t)/Mt|0)|0}var $e=64,Wt=4194304;function Ir(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function or(t,n){var s=t.pendingLanes;if(s===0)return 0;var c=0,h=t.suspendedLanes,m=t.pingedLanes,S=s&268435455;if(S!==0){var L=S&~h;L!==0?c=Ir(L):(m&=S,m!==0&&(c=Ir(m)))}else S=s&~h,S!==0?c=Ir(S):m!==0&&(c=Ir(m));if(c===0)return 0;if(n!==0&&n!==c&&(n&h)===0&&(h=c&-c,m=n&-n,h>=m||h===16&&(m&4194240)!==0))return n;if((c&4)!==0&&(c|=s&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)s=31-ot(n),h=1<<s,c|=t[s],n&=~h;return c}function qn(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(t,n){for(var s=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes;0<m;){var S=31-ot(m),L=1<<S,D=h[S];D===-1?((L&s)===0||(L&c)!==0)&&(h[S]=qn(L,n)):D<=n&&(t.expiredLanes|=L),m&=~L}}function bn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ct(){var t=$e;return $e<<=1,($e&4194240)===0&&($e=64),t}function lr(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function er(t,n,s){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-ot(n),t[n]=s}function qt(t,n){var s=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var h=31-ot(s),m=1<<h;n[h]=0,c[h]=-1,t[h]=-1,s&=~m}}function _r(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var c=31-ot(s),h=1<<c;h&n|t[c]&n&&(t[c]|=n),s&=~h}}var _t=0;function dn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ch,Ql,uh,dh,hh,ec=!1,oo=[],Kn=null,Zn=null,Jn=null,ns=new Map,is=new Map,Qn=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(t,n){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(n.pointerId)}}function as(t,n,s,c,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},n!==null&&(n=xs(n),n!==null&&Ql(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function Wg(t,n,s,c,h){switch(n){case"focusin":return Kn=as(Kn,t,n,s,c,h),!0;case"dragenter":return Zn=as(Zn,t,n,s,c,h),!0;case"mouseover":return Jn=as(Jn,t,n,s,c,h),!0;case"pointerover":var m=h.pointerId;return ns.set(m,as(ns.get(m)||null,t,n,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,is.set(m,as(is.get(m)||null,t,n,s,c,h)),!0}return!1}function ph(t){var n=Ii(t.target);if(n!==null){var s=un(n);if(s!==null){if(n=s.tag,n===13){if(n=ro(s),n!==null){t.blockedOn=n,hh(t.priority,function(){uh(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=rc(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);St=c,s.target.dispatchEvent(c),St=null}else return n=xs(s),n!==null&&Ql(n),t.blockedOn=s,!1;n.shift()}return!0}function mh(t,n,s){lo(t)&&s.delete(n)}function jg(){ec=!1,Kn!==null&&lo(Kn)&&(Kn=null),Zn!==null&&lo(Zn)&&(Zn=null),Jn!==null&&lo(Jn)&&(Jn=null),ns.forEach(mh),is.forEach(mh)}function ss(t,n){t.blockedOn===n&&(t.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jg)))}function os(t){function n(h){return ss(h,t)}if(0<oo.length){ss(oo[0],t);for(var s=1;s<oo.length;s++){var c=oo[s];c.blockedOn===t&&(c.blockedOn=null)}}for(Kn!==null&&ss(Kn,t),Zn!==null&&ss(Zn,t),Jn!==null&&ss(Jn,t),ns.forEach(n),is.forEach(n),s=0;s<Qn.length;s++)c=Qn[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<Qn.length&&(s=Qn[0],s.blockedOn===null);)ph(s),s.blockedOn===null&&Qn.shift()}var ua=A.ReactCurrentBatchConfig,co=!0;function Xg(t,n,s,c){var h=_t,m=ua.transition;ua.transition=null;try{_t=1,tc(t,n,s,c)}finally{_t=h,ua.transition=m}}function $g(t,n,s,c){var h=_t,m=ua.transition;ua.transition=null;try{_t=4,tc(t,n,s,c)}finally{_t=h,ua.transition=m}}function tc(t,n,s,c){if(co){var h=rc(t,n,s,c);if(h===null)xc(t,n,c,uo,s),fh(t,c);else if(Wg(h,t,n,s,c))c.stopPropagation();else if(fh(t,c),n&4&&-1<Gg.indexOf(t)){for(;h!==null;){var m=xs(h);if(m!==null&&ch(m),m=rc(t,n,s,c),m===null&&xc(t,n,c,uo,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else xc(t,n,c,null,s)}}var uo=null;function rc(t,n,s,c){if(uo=null,t=V(c),t=Ii(t),t!==null)if(n=un(t),n===null)t=null;else if(s=n.tag,s===13){if(t=ro(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return uo=t,null}function gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G()){case xe:return 1;case Ne:return 4;case Le:case Ge:return 16;case nt:return 536870912;default:return 16}default:return 16}}var ei=null,nc=null,ho=null;function vh(){if(ho)return ho;var t,n=nc,s=n.length,c,h="value"in ei?ei.value:ei.textContent,m=h.length;for(t=0;t<s&&n[t]===h[t];t++);var S=s-t;for(c=1;c<=S&&n[s-c]===h[m-c];c++);return ho=h.slice(t,1<c?1-c:void 0)}function fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function _h(){return!1}function Dr(t){function n(s,c,h,m,S){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?po:_h,this.isPropagationStopped=_h,this}return le(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),n}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Dr(da),ls=le({},da,{view:0,detail:0}),Yg=Dr(ls),ac,sc,cs,mo=le({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(ac=t.screenX-cs.screenX,sc=t.screenY-cs.screenY):sc=ac=0,cs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),xh=Dr(mo),qg=le({},mo,{dataTransfer:0}),Kg=Dr(qg),Zg=le({},ls,{relatedTarget:0}),oc=Dr(Zg),Jg=le({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=Dr(Jg),ev=le({},da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tv=Dr(ev),rv=le({},da,{data:0}),yh=Dr(rv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=av[t])?!!n[t]:!1}function lc(){return sv}var ov=le({},ls,{key:function(t){if(t.key){var n=nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lv=Dr(ov),cv=le({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Dr(cv),uv=le({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),dv=Dr(uv),hv=le({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Dr(hv),pv=le({},mo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=Dr(pv),gv=[9,13,27,32],cc=d&&"CompositionEvent"in window,us=null;d&&"documentMode"in document&&(us=document.documentMode);var vv=d&&"TextEvent"in window&&!us,Sh=d&&(!cc||us&&8<us&&11>=us),Mh=" ",Eh=!1;function Th(t,n){switch(t){case"keyup":return gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ha=!1;function _v(t,n){switch(t){case"compositionend":return wh(n);case"keypress":return n.which!==32?null:(Eh=!0,Mh);case"textInput":return t=n.data,t===Mh&&Eh?null:t;default:return null}}function xv(t,n){if(ha)return t==="compositionend"||!cc&&Th(t,n)?(t=vh(),ho=nc=ei=null,ha=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sh&&n.locale!=="ko"?null:n.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yv[t.type]:n==="textarea"}function Ah(t,n,s,c){we(c),n=yo(n,"onChange"),0<n.length&&(s=new ic("onChange","change",null,s,c),t.push({event:s,listeners:n}))}var ds=null,hs=null;function bv(t){Xh(t,0)}function go(t){var n=va(t);if(ft(n))return t}function Sv(t,n){if(t==="change")return n}var Ch=!1;if(d){var uc;if(d){var dc="oninput"in document;if(!dc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),dc=typeof Ph.oninput=="function"}uc=dc}else uc=!1;Ch=uc&&(!document.documentMode||9<document.documentMode)}function Uh(){ds&&(ds.detachEvent("onpropertychange",Lh),hs=ds=null)}function Lh(t){if(t.propertyName==="value"&&go(hs)){var n=[];Ah(n,hs,t,V(t)),Sr(bv,n)}}function Mv(t,n,s){t==="focusin"?(Uh(),ds=n,hs=s,ds.attachEvent("onpropertychange",Lh)):t==="focusout"&&Uh()}function Ev(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return go(hs)}function Tv(t,n){if(t==="click")return go(n)}function wv(t,n){if(t==="input"||t==="change")return go(n)}function Rv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kr=typeof Object.is=="function"?Object.is:Rv;function fs(t,n){if(Kr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),c=Object.keys(n);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!f.call(n,h)||!Kr(t[h],n[h]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ih(t,n){var s=Nh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=n&&c>=n)return{node:s,offset:n-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Nh(s)}}function Dh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Oh(){for(var t=window,n=Ut();n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Ut(t.document)}return n}function hc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Av(t){var n=Oh(),s=t.focusedElem,c=t.selectionRange;if(n!==s&&s&&s.ownerDocument&&Dh(s.ownerDocument.documentElement,s)){if(c!==null&&hc(s)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(t,s.value.length);else if(t=(n=s.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var h=s.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!t.extend&&m>c&&(h=c,c=m,m=h),h=Ih(s,m);var S=Ih(s,c);h&&S&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),t.removeAllRanges(),m>c?(t.addRange(n),t.extend(S.node,S.offset)):(n.setEnd(S.node,S.offset),t.addRange(n)))}}for(n=[],t=s;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)t=n[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cv=d&&"documentMode"in document&&11>=document.documentMode,fa=null,fc=null,ps=null,pc=!1;function kh(t,n,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;pc||fa==null||fa!==Ut(c)||(c=fa,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ps&&fs(ps,c)||(ps=c,c=yo(fc,"onSelect"),0<c.length&&(n=new ic("onSelect","select",null,n,s),t.push({event:n,listeners:c}),n.target=fa)))}function vo(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var pa={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},mc={},Fh={};d&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function _o(t){if(mc[t])return mc[t];if(!pa[t])return t;var n=pa[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Fh)return mc[t]=n[s];return t}var zh=_o("animationend"),Bh=_o("animationiteration"),Hh=_o("animationstart"),Vh=_o("transitionend"),Gh=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,n){Gh.set(t,n),l(n,[t])}for(var gc=0;gc<Wh.length;gc++){var vc=Wh[gc],Pv=vc.toLowerCase(),Uv=vc[0].toUpperCase()+vc.slice(1);ti(Pv,"on"+Uv)}ti(zh,"onAnimationEnd"),ti(Bh,"onAnimationIteration"),ti(Hh,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Vh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function jh(t,n,s){var c=t.type||"unknown-event";t.currentTarget=s,to(c,n,void 0,t),t.currentTarget=null}function Xh(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],h=c.event;c=c.listeners;e:{var m=void 0;if(n)for(var S=c.length-1;0<=S;S--){var L=c[S],D=L.instance,J=L.currentTarget;if(L=L.listener,D!==m&&h.isPropagationStopped())break e;jh(h,L,J),m=D}else for(S=0;S<c.length;S++){if(L=c[S],D=L.instance,J=L.currentTarget,L=L.listener,D!==m&&h.isPropagationStopped())break e;jh(h,L,J),m=D}}}if(Ni)throw t=Yn,Ni=!1,Yn=null,t}function It(t,n){var s=n[Tc];s===void 0&&(s=n[Tc]=new Set);var c=t+"__bubble";s.has(c)||($h(n,t,2,!1),s.add(c))}function _c(t,n,s){var c=0;n&&(c|=4),$h(s,t,c,n)}var xo="_reactListening"+Math.random().toString(36).slice(2);function gs(t){if(!t[xo]){t[xo]=!0,i.forEach(function(s){s!=="selectionchange"&&(Lv.has(s)||_c(s,!1,t),_c(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[xo]||(n[xo]=!0,_c("selectionchange",!1,n))}}function $h(t,n,s,c){switch(gh(n)){case 1:var h=Xg;break;case 4:h=$g;break;default:h=tc}s=h.bind(null,n,s,t),h=void 0,!la||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(n,s,{capture:!0,passive:h}):t.addEventListener(n,s,!0):h!==void 0?t.addEventListener(n,s,{passive:h}):t.addEventListener(n,s,!1)}function xc(t,n,s,c,h){var m=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var L=c.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(S===4)for(S=c.return;S!==null;){var D=S.tag;if((D===3||D===4)&&(D=S.stateNode.containerInfo,D===h||D.nodeType===8&&D.parentNode===h))return;S=S.return}for(;L!==null;){if(S=Ii(L),S===null)return;if(D=S.tag,D===5||D===6){c=m=S;continue e}L=L.parentNode}}c=c.return}Sr(function(){var J=m,_e=V(s),Me=[];e:{var ge=Gh.get(t);if(ge!==void 0){var Ie=ic,Be=t;switch(t){case"keypress":if(fo(s)===0)break e;case"keydown":case"keyup":Ie=lv;break;case"focusin":Be="focus",Ie=oc;break;case"focusout":Be="blur",Ie=oc;break;case"beforeblur":case"afterblur":Ie=oc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=dv;break;case zh:case Bh:case Hh:Ie=Qg;break;case Vh:Ie=fv;break;case"scroll":Ie=Yg;break;case"wheel":Ie=mv;break;case"copy":case"cut":case"paste":Ie=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=bh}var He=(n&4)!==0,Ht=!He&&t==="scroll",$=He?ge!==null?ge+"Capture":null:ge;He=[];for(var z=J,q;z!==null;){q=z;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,$!==null&&(Te=gr(z,$),Te!=null&&He.push(vs(z,Te,q)))),Ht)break;z=z.return}0<He.length&&(ge=new Ie(ge,Be,null,s,_e),Me.push({event:ge,listeners:He}))}}if((n&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&s!==St&&(Be=s.relatedTarget||s.fromElement)&&(Ii(Be)||Be[Sn]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=s.relatedTarget||s.toElement,Ie=J,Be=Be?Ii(Be):null,Be!==null&&(Ht=un(Be),Be!==Ht||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=J),Ie!==Be)){if(He=xh,Te="onMouseLeave",$="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=bh,Te="onPointerLeave",$="onPointerEnter",z="pointer"),Ht=Ie==null?ge:va(Ie),q=Be==null?ge:va(Be),ge=new He(Te,z+"leave",Ie,s,_e),ge.target=Ht,ge.relatedTarget=q,Te=null,Ii(_e)===J&&(He=new He($,z+"enter",Be,s,_e),He.target=q,He.relatedTarget=Ht,Te=He),Ht=Te,Ie&&Be)t:{for(He=Ie,$=Be,z=0,q=He;q;q=ma(q))z++;for(q=0,Te=$;Te;Te=ma(Te))q++;for(;0<z-q;)He=ma(He),z--;for(;0<q-z;)$=ma($),q--;for(;z--;){if(He===$||$!==null&&He===$.alternate)break t;He=ma(He),$=ma($)}He=null}else He=null;Ie!==null&&Yh(Me,ge,Ie,He,!1),Be!==null&&Ht!==null&&Yh(Me,Ht,Be,He,!0)}}e:{if(ge=J?va(J):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=Sv;else if(Rh(ge))if(Ch)je=wv;else{je=Ev;var Ze=Mv}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Tv);if(je&&(je=je(t,J))){Ah(Me,je,s,_e);break e}Ze&&Ze(t,ge,J),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Et(ge,"number",ge.value)}switch(Ze=J?va(J):window,t){case"focusin":(Rh(Ze)||Ze.contentEditable==="true")&&(fa=Ze,fc=J,ps=null);break;case"focusout":ps=fc=fa=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,kh(Me,s,_e);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":kh(Me,s,_e)}var Je;if(cc)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ha?Th(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(Sh&&s.locale!=="ko"&&(ha||it!=="onCompositionStart"?it==="onCompositionEnd"&&ha&&(Je=vh()):(ei=_e,nc="value"in ei?ei.value:ei.textContent,ha=!0)),Ze=yo(J,it),0<Ze.length&&(it=new yh(it,t,null,s,_e),Me.push({event:it,listeners:Ze}),Je?it.data=Je:(Je=wh(s),Je!==null&&(it.data=Je)))),(Je=vv?_v(t,s):xv(t,s))&&(J=yo(J,"onBeforeInput"),0<J.length&&(_e=new yh("onBeforeInput","beforeinput",null,s,_e),Me.push({event:_e,listeners:J}),_e.data=Je))}Xh(Me,n)})}function vs(t,n,s){return{instance:t,listener:n,currentTarget:s}}function yo(t,n){for(var s=n+"Capture",c=[];t!==null;){var h=t,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=gr(t,s),m!=null&&c.unshift(vs(t,m,h)),m=gr(t,n),m!=null&&c.push(vs(t,m,h))),t=t.return}return c}function ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,n,s,c,h){for(var m=n._reactName,S=[];s!==null&&s!==c;){var L=s,D=L.alternate,J=L.stateNode;if(D!==null&&D===c)break;L.tag===5&&J!==null&&(L=J,h?(D=gr(s,m),D!=null&&S.unshift(vs(s,D,L))):h||(D=gr(s,m),D!=null&&S.push(vs(s,D,L)))),s=s.return}S.length!==0&&t.push({event:n,listeners:S})}var Nv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(Nv,`
`).replace(Iv,"")}function bo(t,n,s){if(n=qh(n),qh(t)!==n&&s)throw Error(r(425))}function So(){}var yc=null,bc=null;function Sc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(kv)}:Mc;function kv(t){setTimeout(function(){throw t})}function Ec(t,n){var s=n,c=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(c===0){t.removeChild(h),os(n);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=h}while(s);os(n)}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),hn="__reactFiber$"+ga,_s="__reactProps$"+ga,Sn="__reactContainer$"+ga,Tc="__reactEvents$"+ga,Fv="__reactListeners$"+ga,zv="__reactHandles$"+ga;function Ii(t){var n=t[hn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Sn]||s[hn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Zh(t);t!==null;){if(s=t[hn])return s;t=Zh(t)}return n}t=s,s=t.parentNode}return null}function xs(t){return t=t[hn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function va(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(r(33))}function Mo(t){return t[_s]||null}var wc=[],_a=-1;function ni(t){return{current:t}}function Dt(t){0>_a||(t.current=wc[_a],wc[_a]=null,_a--)}function Lt(t,n){_a++,wc[_a]=t.current,t.current=n}var ii={},cr=ni(ii),Mr=ni(!1),Di=ii;function xa(t,n){var s=t.type.contextTypes;if(!s)return ii;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in s)h[m]=n[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=h),h}function Er(t){return t=t.childContextTypes,t!=null}function Eo(){Dt(Mr),Dt(cr)}function Jh(t,n,s){if(cr.current!==ii)throw Error(r(168));Lt(cr,n),Lt(Mr,s)}function Qh(t,n,s){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var h in c)if(!(h in n))throw Error(r(108,ye(t)||"Unknown",h));return le({},s,c)}function To(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ii,Di=cr.current,Lt(cr,t),Lt(Mr,Mr.current),!0}function ef(t,n,s){var c=t.stateNode;if(!c)throw Error(r(169));s?(t=Qh(t,n,Di),c.__reactInternalMemoizedMergedChildContext=t,Dt(Mr),Dt(cr),Lt(cr,t)):Dt(Mr),Lt(Mr,s)}var Mn=null,wo=!1,Rc=!1;function tf(t){Mn===null?Mn=[t]:Mn.push(t)}function Bv(t){wo=!0,tf(t)}function ai(){if(!Rc&&Mn!==null){Rc=!0;var t=0,n=_t;try{var s=Mn;for(_t=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Mn=null,wo=!1}catch(h){throw Mn!==null&&(Mn=Mn.slice(t+1)),so(xe,ai),h}finally{_t=n,Rc=!1}}return null}var ya=[],ba=0,Ro=null,Ao=0,Hr=[],Vr=0,Oi=null,En=1,Tn="";function ki(t,n){ya[ba++]=Ao,ya[ba++]=Ro,Ro=t,Ao=n}function rf(t,n,s){Hr[Vr++]=En,Hr[Vr++]=Tn,Hr[Vr++]=Oi,Oi=t;var c=En;t=Tn;var h=32-ot(c)-1;c&=~(1<<h),s+=1;var m=32-ot(n)+h;if(30<m){var S=h-h%5;m=(c&(1<<S)-1).toString(32),c>>=S,h-=S,En=1<<32-ot(n)+h|s<<h|c,Tn=m+t}else En=1<<m|s<<h|c,Tn=t}function Ac(t){t.return!==null&&(ki(t,1),rf(t,1,0))}function Cc(t){for(;t===Ro;)Ro=ya[--ba],ya[ba]=null,Ao=ya[--ba],ya[ba]=null;for(;t===Oi;)Oi=Hr[--Vr],Hr[Vr]=null,Tn=Hr[--Vr],Hr[Vr]=null,En=Hr[--Vr],Hr[Vr]=null}var Or=null,kr=null,Ot=!1,Zr=null;function nf(t,n){var s=Xr(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=t,n=t.deletions,n===null?(t.deletions=[s],t.flags|=16):n.push(s)}function af(t,n){switch(t.tag){case 5:var s=t.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Or=t,kr=ri(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Or=t,kr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=Oi!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Xr(18,null,null,0),s.stateNode=n,s.return=t,t.child=s,Or=t,kr=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(Ot){var n=kr;if(n){var s=n;if(!af(t,n)){if(Pc(t))throw Error(r(418));n=ri(s.nextSibling);var c=Or;n&&af(t,n)?nf(c,s):(t.flags=t.flags&-4097|2,Ot=!1,Or=t)}}else{if(Pc(t))throw Error(r(418));t.flags=t.flags&-4097|2,Ot=!1,Or=t}}}function sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Or=t}function Co(t){if(t!==Or)return!1;if(!Ot)return sf(t),Ot=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Sc(t.type,t.memoizedProps)),n&&(n=kr)){if(Pc(t))throw of(),Error(r(418));for(;n;)nf(t,n),n=ri(n.nextSibling)}if(sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(n===0){kr=ri(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}t=t.nextSibling}kr=null}}else kr=Or?ri(t.stateNode.nextSibling):null;return!0}function of(){for(var t=kr;t;)t=ri(t.nextSibling)}function Sa(){kr=Or=null,Ot=!1}function Lc(t){Zr===null?Zr=[t]:Zr.push(t)}var Hv=A.ReactCurrentBatchConfig;function ys(t,n,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(r(309));var c=s.stateNode}if(!c)throw Error(r(147,t));var h=c,m=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===m?n.ref:(n=function(S){var L=h.refs;S===null?delete L[m]:L[m]=S},n._stringRef=m,n)}if(typeof t!="string")throw Error(r(284));if(!s._owner)throw Error(r(290,t))}return t}function Po(t,n){throw t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function lf(t){var n=t._init;return n(t._payload)}function cf(t){function n($,z){if(t){var q=$.deletions;q===null?($.deletions=[z],$.flags|=16):q.push(z)}}function s($,z){if(!t)return null;for(;z!==null;)n($,z),z=z.sibling;return null}function c($,z){for($=new Map;z!==null;)z.key!==null?$.set(z.key,z):$.set(z.index,z),z=z.sibling;return $}function h($,z){return $=fi($,z),$.index=0,$.sibling=null,$}function m($,z,q){return $.index=q,t?(q=$.alternate,q!==null?(q=q.index,q<z?($.flags|=2,z):q):($.flags|=2,z)):($.flags|=1048576,z)}function S($){return t&&$.alternate===null&&($.flags|=2),$}function L($,z,q,Te){return z===null||z.tag!==6?(z=Su(q,$.mode,Te),z.return=$,z):(z=h(z,q),z.return=$,z)}function D($,z,q,Te){var je=q.type;return je===O?_e($,z,q.props.children,Te,q.key):z!==null&&(z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&lf(je)===z.type)?(Te=h(z,q.props),Te.ref=ys($,z,q),Te.return=$,Te):(Te=el(q.type,q.key,q.props,null,$.mode,Te),Te.ref=ys($,z,q),Te.return=$,Te)}function J($,z,q,Te){return z===null||z.tag!==4||z.stateNode.containerInfo!==q.containerInfo||z.stateNode.implementation!==q.implementation?(z=Mu(q,$.mode,Te),z.return=$,z):(z=h(z,q.children||[]),z.return=$,z)}function _e($,z,q,Te,je){return z===null||z.tag!==7?(z=ji(q,$.mode,Te,je),z.return=$,z):(z=h(z,q),z.return=$,z)}function Me($,z,q){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Su(""+z,$.mode,q),z.return=$,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case j:return q=el(z.type,z.key,z.props,null,$.mode,q),q.ref=ys($,null,z),q.return=$,q;case B:return z=Mu(z,$.mode,q),z.return=$,z;case oe:var Te=z._init;return Me($,Te(z._payload),q)}if(We(z)||ie(z))return z=ji(z,$.mode,q,null),z.return=$,z;Po($,z)}return null}function ge($,z,q,Te){var je=z!==null?z.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return je!==null?null:L($,z,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case j:return q.key===je?D($,z,q,Te):null;case B:return q.key===je?J($,z,q,Te):null;case oe:return je=q._init,ge($,z,je(q._payload),Te)}if(We(q)||ie(q))return je!==null?null:_e($,z,q,Te,null);Po($,q)}return null}function Ie($,z,q,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(q)||null,L(z,$,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case j:return $=$.get(Te.key===null?q:Te.key)||null,D(z,$,Te,je);case B:return $=$.get(Te.key===null?q:Te.key)||null,J(z,$,Te,je);case oe:var Ze=Te._init;return Ie($,z,q,Ze(Te._payload),je)}if(We(Te)||ie(Te))return $=$.get(q)||null,_e(z,$,Te,je,null);Po(z,Te)}return null}function Be($,z,q,Te){for(var je=null,Ze=null,Je=z,it=z=0,nr=null;Je!==null&&it<q.length;it++){Je.index>it?(nr=Je,Je=null):nr=Je.sibling;var yt=ge($,Je,q[it],Te);if(yt===null){Je===null&&(Je=nr);break}t&&Je&&yt.alternate===null&&n($,Je),z=m(yt,z,it),Ze===null?je=yt:Ze.sibling=yt,Ze=yt,Je=nr}if(it===q.length)return s($,Je),Ot&&ki($,it),je;if(Je===null){for(;it<q.length;it++)Je=Me($,q[it],Te),Je!==null&&(z=m(Je,z,it),Ze===null?je=Je:Ze.sibling=Je,Ze=Je);return Ot&&ki($,it),je}for(Je=c($,Je);it<q.length;it++)nr=Ie(Je,$,it,q[it],Te),nr!==null&&(t&&nr.alternate!==null&&Je.delete(nr.key===null?it:nr.key),z=m(nr,z,it),Ze===null?je=nr:Ze.sibling=nr,Ze=nr);return t&&Je.forEach(function(pi){return n($,pi)}),Ot&&ki($,it),je}function He($,z,q,Te){var je=ie(q);if(typeof je!="function")throw Error(r(150));if(q=je.call(q),q==null)throw Error(r(151));for(var Ze=je=null,Je=z,it=z=0,nr=null,yt=q.next();Je!==null&&!yt.done;it++,yt=q.next()){Je.index>it?(nr=Je,Je=null):nr=Je.sibling;var pi=ge($,Je,yt.value,Te);if(pi===null){Je===null&&(Je=nr);break}t&&Je&&pi.alternate===null&&n($,Je),z=m(pi,z,it),Ze===null?je=pi:Ze.sibling=pi,Ze=pi,Je=nr}if(yt.done)return s($,Je),Ot&&ki($,it),je;if(Je===null){for(;!yt.done;it++,yt=q.next())yt=Me($,yt.value,Te),yt!==null&&(z=m(yt,z,it),Ze===null?je=yt:Ze.sibling=yt,Ze=yt);return Ot&&ki($,it),je}for(Je=c($,Je);!yt.done;it++,yt=q.next())yt=Ie(Je,$,it,yt.value,Te),yt!==null&&(t&&yt.alternate!==null&&Je.delete(yt.key===null?it:yt.key),z=m(yt,z,it),Ze===null?je=yt:Ze.sibling=yt,Ze=yt);return t&&Je.forEach(function(y_){return n($,y_)}),Ot&&ki($,it),je}function Ht($,z,q,Te){if(typeof q=="object"&&q!==null&&q.type===O&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case j:e:{for(var je=q.key,Ze=z;Ze!==null;){if(Ze.key===je){if(je=q.type,je===O){if(Ze.tag===7){s($,Ze.sibling),z=h(Ze,q.props.children),z.return=$,$=z;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&lf(je)===Ze.type){s($,Ze.sibling),z=h(Ze,q.props),z.ref=ys($,Ze,q),z.return=$,$=z;break e}s($,Ze);break}else n($,Ze);Ze=Ze.sibling}q.type===O?(z=ji(q.props.children,$.mode,Te,q.key),z.return=$,$=z):(Te=el(q.type,q.key,q.props,null,$.mode,Te),Te.ref=ys($,z,q),Te.return=$,$=Te)}return S($);case B:e:{for(Ze=q.key;z!==null;){if(z.key===Ze)if(z.tag===4&&z.stateNode.containerInfo===q.containerInfo&&z.stateNode.implementation===q.implementation){s($,z.sibling),z=h(z,q.children||[]),z.return=$,$=z;break e}else{s($,z);break}else n($,z);z=z.sibling}z=Mu(q,$.mode,Te),z.return=$,$=z}return S($);case oe:return Ze=q._init,Ht($,z,Ze(q._payload),Te)}if(We(q))return Be($,z,q,Te);if(ie(q))return He($,z,q,Te);Po($,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,z!==null&&z.tag===6?(s($,z.sibling),z=h(z,q),z.return=$,$=z):(s($,z),z=Su(q,$.mode,Te),z.return=$,$=z),S($)):s($,z)}return Ht}var Ma=cf(!0),uf=cf(!1),Uo=ni(null),Lo=null,Ea=null,Nc=null;function Ic(){Nc=Ea=Lo=null}function Dc(t){var n=Uo.current;Dt(Uo),t._currentValue=n}function Oc(t,n,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===s)break;t=t.return}}function Ta(t,n){Lo=t,Nc=Ea=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Tr=!0),t.firstContext=null)}function Gr(t){var n=t._currentValue;if(Nc!==t)if(t={context:t,memoizedValue:n,next:null},Ea===null){if(Lo===null)throw Error(r(308));Ea=t,Lo.dependencies={lanes:0,firstContext:t}}else Ea=Ea.next=t;return n}var Fi=null;function kc(t){Fi===null?Fi=[t]:Fi.push(t)}function df(t,n,s,c){var h=n.interleaved;return h===null?(s.next=s,kc(n)):(s.next=h.next,h.next=s),n.interleaved=s,wn(t,c)}function wn(t,n){t.lanes|=n;var s=t.alternate;for(s!==null&&(s.lanes|=n),s=t,t=t.return;t!==null;)t.childLanes|=n,s=t.alternate,s!==null&&(s.childLanes|=n),s=t,t=t.return;return s.tag===3?s.stateNode:null}var si=!1;function Fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function oi(t,n,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var h=c.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),c.pending=n,wn(t,s)}return h=c.interleaved,h===null?(n.next=n,kc(c)):(n.next=h.next,h.next=n),c.interleaved=n,wn(t,s)}function No(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,s|=c,n.lanes=s,_r(t,s)}}function ff(t,n){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};m===null?h=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?h=m=n:m=m.next=n}else h=m=n;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}function Io(t,n,s,c){var h=t.updateQueue;si=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var D=L,J=D.next;D.next=null,S===null?m=J:S.next=J,S=D;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==S&&(L===null?_e.firstBaseUpdate=J:L.next=J,_e.lastBaseUpdate=D))}if(m!==null){var Me=h.baseState;S=0,_e=J=D=null,L=m;do{var ge=L.lane,Ie=L.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(ge=n,Ie=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Me=Be.call(Ie,Me,ge);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ie,Me,ge):Be,ge==null)break e;Me=le({},Me,ge);break e;case 2:si=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=h.effects,ge===null?h.effects=[L]:ge.push(L))}else Ie={eventTime:Ie,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(J=_e=Ie,D=Me):_e=_e.next=Ie,S|=ge;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(_e===null&&(D=Me),h.baseState=D,h.firstBaseUpdate=J,h.lastBaseUpdate=_e,n=h.shared.interleaved,n!==null){h=n;do S|=h.lane,h=h.next;while(h!==n)}else m===null&&(h.shared.lanes=0);Hi|=S,t.lanes=S,t.memoizedState=Me}}function pf(t,n,s){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],h=c.callback;if(h!==null){if(c.callback=null,c=s,typeof h!="function")throw Error(r(191,h));h.call(c)}}}var bs={},fn=ni(bs),Ss=ni(bs),Ms=ni(bs);function zi(t){if(t===bs)throw Error(r(174));return t}function zc(t,n){switch(Lt(Ms,n),Lt(Ss,t),Lt(fn,bs),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ve(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Ve(n,t)}Dt(fn),Lt(fn,n)}function wa(){Dt(fn),Dt(Ss),Dt(Ms)}function mf(t){zi(Ms.current);var n=zi(fn.current),s=Ve(n,t.type);n!==s&&(Lt(Ss,t),Lt(fn,s))}function Bc(t){Ss.current===t&&(Dt(fn),Dt(Ss))}var kt=ni(0);function Do(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Oo=A.ReactCurrentDispatcher,Gc=A.ReactCurrentBatchConfig,Bi=0,Ft=null,Kt=null,tr=null,ko=!1,Es=!1,Ts=0,Vv=0;function ur(){throw Error(r(321))}function Wc(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Kr(t[s],n[s]))return!1;return!0}function jc(t,n,s,c,h,m){if(Bi=m,Ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oo.current=t===null||t.memoizedState===null?Xv:$v,t=s(c,h),Es){m=0;do{if(Es=!1,Ts=0,25<=m)throw Error(r(301));m+=1,tr=Kt=null,n.updateQueue=null,Oo.current=Yv,t=s(c,h)}while(Es)}if(Oo.current=Bo,n=Kt!==null&&Kt.next!==null,Bi=0,tr=Kt=Ft=null,ko=!1,n)throw Error(r(300));return t}function Xc(){var t=Ts!==0;return Ts=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tr===null?Ft.memoizedState=tr=t:tr=tr.next=t,tr}function Wr(){if(Kt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var n=tr===null?Ft.memoizedState:tr.next;if(n!==null)tr=n,Kt=t;else{if(t===null)throw Error(r(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tr===null?Ft.memoizedState=tr=t:tr=tr.next=t}return tr}function ws(t,n){return typeof n=="function"?n(t):n}function $c(t){var n=Wr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var c=Kt,h=c.baseQueue,m=s.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}c.baseQueue=h=m,s.pending=null}if(h!==null){m=h.next,c=c.baseState;var L=S=null,D=null,J=m;do{var _e=J.lane;if((Bi&_e)===_e)D!==null&&(D=D.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),c=J.hasEagerState?J.eagerState:t(c,J.action);else{var Me={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};D===null?(L=D=Me,S=c):D=D.next=Me,Ft.lanes|=_e,Hi|=_e}J=J.next}while(J!==null&&J!==m);D===null?S=c:D.next=L,Kr(c,n.memoizedState)||(Tr=!0),n.memoizedState=c,n.baseState=S,n.baseQueue=D,s.lastRenderedState=c}if(t=s.interleaved,t!==null){h=t;do m=h.lane,Ft.lanes|=m,Hi|=m,h=h.next;while(h!==t)}else h===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Yc(t){var n=Wr(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var c=s.dispatch,h=s.pending,m=n.memoizedState;if(h!==null){s.pending=null;var S=h=h.next;do m=t(m,S.action),S=S.next;while(S!==h);Kr(m,n.memoizedState)||(Tr=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),s.lastRenderedState=m}return[m,c]}function gf(){}function vf(t,n){var s=Ft,c=Wr(),h=n(),m=!Kr(c.memoizedState,h);if(m&&(c.memoizedState=h,Tr=!0),c=c.queue,qc(yf.bind(null,s,c,t),[t]),c.getSnapshot!==n||m||tr!==null&&tr.memoizedState.tag&1){if(s.flags|=2048,Rs(9,xf.bind(null,s,c,h,n),void 0,null),rr===null)throw Error(r(349));(Bi&30)!==0||_f(s,n,h)}return h}function _f(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=Ft.updateQueue,n===null?(n={lastEffect:null,stores:null},Ft.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function xf(t,n,s,c){n.value=s,n.getSnapshot=c,bf(n)&&Sf(t)}function yf(t,n,s){return s(function(){bf(n)&&Sf(t)})}function bf(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Kr(t,s)}catch{return!0}}function Sf(t){var n=wn(t,1);n!==null&&tn(n,t,1,-1)}function Mf(t){var n=pn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},n.queue=t,t=t.dispatch=jv.bind(null,Ft,t),[n.memoizedState,t]}function Rs(t,n,s,c){return t={tag:t,create:n,destroy:s,deps:c,next:null},n=Ft.updateQueue,n===null?(n={lastEffect:null,stores:null},Ft.updateQueue=n,n.lastEffect=t.next=t):(s=n.lastEffect,s===null?n.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,n.lastEffect=t)),t}function Ef(){return Wr().memoizedState}function Fo(t,n,s,c){var h=pn();Ft.flags|=t,h.memoizedState=Rs(1|n,s,void 0,c===void 0?null:c)}function zo(t,n,s,c){var h=Wr();c=c===void 0?null:c;var m=void 0;if(Kt!==null){var S=Kt.memoizedState;if(m=S.destroy,c!==null&&Wc(c,S.deps)){h.memoizedState=Rs(n,s,m,c);return}}Ft.flags|=t,h.memoizedState=Rs(1|n,s,m,c)}function Tf(t,n){return Fo(8390656,8,t,n)}function qc(t,n){return zo(2048,8,t,n)}function wf(t,n){return zo(4,2,t,n)}function Rf(t,n){return zo(4,4,t,n)}function Af(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cf(t,n,s){return s=s!=null?s.concat([t]):null,zo(4,4,Af.bind(null,n,t),s)}function Kc(){}function Pf(t,n){var s=Wr();n=n===void 0?null:n;var c=s.memoizedState;return c!==null&&n!==null&&Wc(n,c[1])?c[0]:(s.memoizedState=[t,n],t)}function Uf(t,n){var s=Wr();n=n===void 0?null:n;var c=s.memoizedState;return c!==null&&n!==null&&Wc(n,c[1])?c[0]:(t=t(),s.memoizedState=[t,n],t)}function Lf(t,n,s){return(Bi&21)===0?(t.baseState&&(t.baseState=!1,Tr=!0),t.memoizedState=s):(Kr(s,n)||(s=Ct(),Ft.lanes|=s,Hi|=s,t.baseState=!0),n)}function Gv(t,n){var s=_t;_t=s!==0&&4>s?s:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),n()}finally{_t=s,Gc.transition=c}}function Nf(){return Wr().memoizedState}function Wv(t,n,s){var c=di(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},If(t))Df(n,s);else if(s=df(t,n,s,c),s!==null){var h=yr();tn(s,t,c,h),Of(s,n,c)}}function jv(t,n,s){var c=di(t),h={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(If(t))Df(n,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var S=n.lastRenderedState,L=m(S,s);if(h.hasEagerState=!0,h.eagerState=L,Kr(L,S)){var D=n.interleaved;D===null?(h.next=h,kc(n)):(h.next=D.next,D.next=h),n.interleaved=h;return}}catch{}finally{}s=df(t,n,h,c),s!==null&&(h=yr(),tn(s,t,c,h),Of(s,n,c))}}function If(t){var n=t.alternate;return t===Ft||n!==null&&n===Ft}function Df(t,n){Es=ko=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function Of(t,n,s){if((s&4194240)!==0){var c=n.lanes;c&=t.pendingLanes,s|=c,n.lanes=s,_r(t,s)}}var Bo={readContext:Gr,useCallback:ur,useContext:ur,useEffect:ur,useImperativeHandle:ur,useInsertionEffect:ur,useLayoutEffect:ur,useMemo:ur,useReducer:ur,useRef:ur,useState:ur,useDebugValue:ur,useDeferredValue:ur,useTransition:ur,useMutableSource:ur,useSyncExternalStore:ur,useId:ur,unstable_isNewReconciler:!1},Xv={readContext:Gr,useCallback:function(t,n){return pn().memoizedState=[t,n===void 0?null:n],t},useContext:Gr,useEffect:Tf,useImperativeHandle:function(t,n,s){return s=s!=null?s.concat([t]):null,Fo(4194308,4,Af.bind(null,n,t),s)},useLayoutEffect:function(t,n){return Fo(4194308,4,t,n)},useInsertionEffect:function(t,n){return Fo(4,2,t,n)},useMemo:function(t,n){var s=pn();return n=n===void 0?null:n,t=t(),s.memoizedState=[t,n],t},useReducer:function(t,n,s){var c=pn();return n=s!==void 0?s(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=Wv.bind(null,Ft,t),[c.memoizedState,t]},useRef:function(t){var n=pn();return t={current:t},n.memoizedState=t},useState:Mf,useDebugValue:Kc,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=Mf(!1),n=t[0];return t=Gv.bind(null,t[1]),pn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,s){var c=Ft,h=pn();if(Ot){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),rr===null)throw Error(r(349));(Bi&30)!==0||_f(c,n,s)}h.memoizedState=s;var m={value:s,getSnapshot:n};return h.queue=m,Tf(yf.bind(null,c,m,t),[t]),c.flags|=2048,Rs(9,xf.bind(null,c,m,s,n),void 0,null),s},useId:function(){var t=pn(),n=rr.identifierPrefix;if(Ot){var s=Tn,c=En;s=(c&~(1<<32-ot(c)-1)).toString(32)+s,n=":"+n+"R"+s,s=Ts++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=Vv++,n=":"+n+"r"+s.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},$v={readContext:Gr,useCallback:Pf,useContext:Gr,useEffect:qc,useImperativeHandle:Cf,useInsertionEffect:wf,useLayoutEffect:Rf,useMemo:Uf,useReducer:$c,useRef:Ef,useState:function(){return $c(ws)},useDebugValue:Kc,useDeferredValue:function(t){var n=Wr();return Lf(n,Kt.memoizedState,t)},useTransition:function(){var t=$c(ws)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:gf,useSyncExternalStore:vf,useId:Nf,unstable_isNewReconciler:!1},Yv={readContext:Gr,useCallback:Pf,useContext:Gr,useEffect:qc,useImperativeHandle:Cf,useInsertionEffect:wf,useLayoutEffect:Rf,useMemo:Uf,useReducer:Yc,useRef:Ef,useState:function(){return Yc(ws)},useDebugValue:Kc,useDeferredValue:function(t){var n=Wr();return Kt===null?n.memoizedState=t:Lf(n,Kt.memoizedState,t)},useTransition:function(){var t=Yc(ws)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:gf,useSyncExternalStore:vf,useId:Nf,unstable_isNewReconciler:!1};function Jr(t,n){if(t&&t.defaultProps){n=le({},n),t=t.defaultProps;for(var s in t)n[s]===void 0&&(n[s]=t[s]);return n}return n}function Zc(t,n,s,c){n=t.memoizedState,s=s(c,n),s=s==null?n:le({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ho={isMounted:function(t){return(t=t._reactInternals)?un(t)===t:!1},enqueueSetState:function(t,n,s){t=t._reactInternals;var c=yr(),h=di(t),m=Rn(c,h);m.payload=n,s!=null&&(m.callback=s),n=oi(t,m,h),n!==null&&(tn(n,t,h,c),No(n,t,h))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var c=yr(),h=di(t),m=Rn(c,h);m.tag=1,m.payload=n,s!=null&&(m.callback=s),n=oi(t,m,h),n!==null&&(tn(n,t,h,c),No(n,t,h))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=yr(),c=di(t),h=Rn(s,c);h.tag=2,n!=null&&(h.callback=n),n=oi(t,h,c),n!==null&&(tn(n,t,c,s),No(n,t,c))}};function kf(t,n,s,c,h,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,S):n.prototype&&n.prototype.isPureReactComponent?!fs(s,c)||!fs(h,m):!0}function Ff(t,n,s){var c=!1,h=ii,m=n.contextType;return typeof m=="object"&&m!==null?m=Gr(m):(h=Er(n)?Di:cr.current,c=n.contextTypes,m=(c=c!=null)?xa(t,h):ii),n=new n(s,m),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ho,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=m),n}function zf(t,n,s,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,c),n.state!==t&&Ho.enqueueReplaceState(n,n.state,null)}function Jc(t,n,s,c){var h=t.stateNode;h.props=s,h.state=t.memoizedState,h.refs={},Fc(t);var m=n.contextType;typeof m=="object"&&m!==null?h.context=Gr(m):(m=Er(n)?Di:cr.current,h.context=xa(t,m)),h.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Zc(t,n,m,s),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(n=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),n!==h.state&&Ho.enqueueReplaceState(h,h.state,null),Io(t,s,h,c),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ra(t,n){try{var s="",c=n;do s+=de(c),c=c.return;while(c);var h=s}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:n,stack:h,digest:null}}function Qc(t,n,s){return{value:t,source:null,stack:s??null,digest:n??null}}function eu(t,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function Bf(t,n,s){s=Rn(-1,s),s.tag=3,s.payload={element:null};var c=n.value;return s.callback=function(){Yo||(Yo=!0,pu=c),eu(t,n)},s}function Hf(t,n,s){s=Rn(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var h=n.value;s.payload=function(){return c(h)},s.callback=function(){eu(t,n)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(s.callback=function(){eu(t,n),typeof c!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var S=n.stack;this.componentDidCatch(n.value,{componentStack:S!==null?S:""})}),s}function Vf(t,n,s){var c=t.pingCache;if(c===null){c=t.pingCache=new qv;var h=new Set;c.set(n,h)}else h=c.get(n),h===void 0&&(h=new Set,c.set(n,h));h.has(s)||(h.add(s),t=c_.bind(null,t,n,s),n.then(t,t))}function Gf(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Wf(t,n,s,c,h){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=Rn(-1,1),n.tag=2,oi(s,n,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Kv=A.ReactCurrentOwner,Tr=!1;function xr(t,n,s,c){n.child=t===null?uf(n,null,s,c):Ma(n,t.child,s,c)}function jf(t,n,s,c,h){s=s.render;var m=n.ref;return Ta(n,h),c=jc(t,n,s,c,m,h),s=Xc(),t!==null&&!Tr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,An(t,n,h)):(Ot&&s&&Ac(n),n.flags|=1,xr(t,n,c,h),n.child)}function Xf(t,n,s,c,h){if(t===null){var m=s.type;return typeof m=="function"&&!bu(m)&&m.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=m,$f(t,n,m,c,h)):(t=el(s.type,null,c,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,(t.lanes&h)===0){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:fs,s(S,c)&&t.ref===n.ref)return An(t,n,h)}return n.flags|=1,t=fi(m,c),t.ref=n.ref,t.return=n,n.child=t}function $f(t,n,s,c,h){if(t!==null){var m=t.memoizedProps;if(fs(m,c)&&t.ref===n.ref)if(Tr=!1,n.pendingProps=c=m,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Tr=!0);else return n.lanes=t.lanes,An(t,n,h)}return tu(t,n,s,c,h)}function Yf(t,n,s){var c=n.pendingProps,h=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ca,Fr),Fr|=s;else{if((s&1073741824)===0)return t=m!==null?m.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Lt(Ca,Fr),Fr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:s,Lt(Ca,Fr),Fr|=c}else m!==null?(c=m.baseLanes|s,n.memoizedState=null):c=s,Lt(Ca,Fr),Fr|=c;return xr(t,n,h,s),n.child}function qf(t,n){var s=n.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function tu(t,n,s,c,h){var m=Er(s)?Di:cr.current;return m=xa(n,m),Ta(n,h),s=jc(t,n,s,c,m,h),c=Xc(),t!==null&&!Tr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,An(t,n,h)):(Ot&&c&&Ac(n),n.flags|=1,xr(t,n,s,h),n.child)}function Kf(t,n,s,c,h){if(Er(s)){var m=!0;To(n)}else m=!1;if(Ta(n,h),n.stateNode===null)Go(t,n),Ff(n,s,c),Jc(n,s,c,h),c=!0;else if(t===null){var S=n.stateNode,L=n.memoizedProps;S.props=L;var D=S.context,J=s.contextType;typeof J=="object"&&J!==null?J=Gr(J):(J=Er(s)?Di:cr.current,J=xa(n,J));var _e=s.getDerivedStateFromProps,Me=typeof _e=="function"||typeof S.getSnapshotBeforeUpdate=="function";Me||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==c||D!==J)&&zf(n,S,c,J),si=!1;var ge=n.memoizedState;S.state=ge,Io(n,c,S,h),D=n.memoizedState,L!==c||ge!==D||Mr.current||si?(typeof _e=="function"&&(Zc(n,s,_e,c),D=n.memoizedState),(L=si||kf(n,s,L,c,ge,D,J))?(Me||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(n.flags|=4194308)):(typeof S.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=D),S.props=c,S.state=D,S.context=J,c=L):(typeof S.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{S=n.stateNode,hf(t,n),L=n.memoizedProps,J=n.type===n.elementType?L:Jr(n.type,L),S.props=J,Me=n.pendingProps,ge=S.context,D=s.contextType,typeof D=="object"&&D!==null?D=Gr(D):(D=Er(s)?Di:cr.current,D=xa(n,D));var Ie=s.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==Me||ge!==D)&&zf(n,S,c,D),si=!1,ge=n.memoizedState,S.state=ge,Io(n,c,S,h);var Be=n.memoizedState;L!==Me||ge!==Be||Mr.current||si?(typeof Ie=="function"&&(Zc(n,s,Ie,c),Be=n.memoizedState),(J=si||kf(n,s,J,c,ge,Be,D)||!1)?(_e||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(c,Be,D),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(c,Be,D)),typeof S.componentDidUpdate=="function"&&(n.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=Be),S.props=c,S.state=Be,S.context=D,c=J):(typeof S.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),c=!1)}return ru(t,n,s,c,m,h)}function ru(t,n,s,c,h,m){qf(t,n);var S=(n.flags&128)!==0;if(!c&&!S)return h&&ef(n,s,!1),An(t,n,m);c=n.stateNode,Kv.current=n;var L=S&&typeof s.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&S?(n.child=Ma(n,t.child,null,m),n.child=Ma(n,null,L,m)):xr(t,n,L,m),n.memoizedState=c.state,h&&ef(n,s,!0),n.child}function Zf(t){var n=t.stateNode;n.pendingContext?Jh(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Jh(t,n.context,!1),zc(t,n.containerInfo)}function Jf(t,n,s,c,h){return Sa(),Lc(h),n.flags|=256,xr(t,n,s,c),n.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qf(t,n,s){var c=n.pendingProps,h=kt.current,m=!1,S=(n.flags&128)!==0,L;if((L=S)||(L=t!==null&&t.memoizedState===null?!1:(h&2)!==0),L?(m=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Lt(kt,h&1),t===null)return Uc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(S=c.children,t=c.fallback,m?(c=n.mode,m=n.child,S={mode:"hidden",children:S},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=S):m=tl(S,c,0,null),t=ji(t,c,s,null),m.return=n,t.return=n,m.sibling=t,n.child=m,n.child.memoizedState=iu(s),n.memoizedState=nu,t):au(n,S));if(h=t.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return Zv(t,n,S,c,L,h,s);if(m){m=c.fallback,S=n.mode,h=t.child,L=h.sibling;var D={mode:"hidden",children:c.children};return(S&1)===0&&n.child!==h?(c=n.child,c.childLanes=0,c.pendingProps=D,n.deletions=null):(c=fi(h,D),c.subtreeFlags=h.subtreeFlags&14680064),L!==null?m=fi(L,m):(m=ji(m,S,s,null),m.flags|=2),m.return=n,c.return=n,c.sibling=m,n.child=c,c=m,m=n.child,S=t.child.memoizedState,S=S===null?iu(s):{baseLanes:S.baseLanes|s,cachePool:null,transitions:S.transitions},m.memoizedState=S,m.childLanes=t.childLanes&~s,n.memoizedState=nu,c}return m=t.child,t=m.sibling,c=fi(m,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=s),c.return=n,c.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=c,n.memoizedState=null,c}function au(t,n){return n=tl({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Vo(t,n,s,c){return c!==null&&Lc(c),Ma(n,t.child,null,s),t=au(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Zv(t,n,s,c,h,m,S){if(s)return n.flags&256?(n.flags&=-257,c=Qc(Error(r(422))),Vo(t,n,S,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(m=c.fallback,h=n.mode,c=tl({mode:"visible",children:c.children},h,0,null),m=ji(m,h,S,null),m.flags|=2,c.return=n,m.return=n,c.sibling=m,n.child=c,(n.mode&1)!==0&&Ma(n,t.child,null,S),n.child.memoizedState=iu(S),n.memoizedState=nu,m);if((n.mode&1)===0)return Vo(t,n,S,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var L=c.dgst;return c=L,m=Error(r(419)),c=Qc(m,c,void 0),Vo(t,n,S,c)}if(L=(S&t.childLanes)!==0,Tr||L){if(c=rr,c!==null){switch(S&-S){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|S))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,wn(t,h),tn(c,t,h,-1))}return yu(),c=Qc(Error(r(421))),Vo(t,n,S,c)}return h.data==="$?"?(n.flags|=128,n.child=t.child,n=u_.bind(null,t),h._reactRetry=n,null):(t=m.treeContext,kr=ri(h.nextSibling),Or=n,Ot=!0,Zr=null,t!==null&&(Hr[Vr++]=En,Hr[Vr++]=Tn,Hr[Vr++]=Oi,En=t.id,Tn=t.overflow,Oi=n),n=au(n,c.children),n.flags|=4096,n)}function ep(t,n,s){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),Oc(t.return,n,s)}function su(t,n,s,c,h){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=h)}function tp(t,n,s){var c=n.pendingProps,h=c.revealOrder,m=c.tail;if(xr(t,n,c.children,s),c=kt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,s,n);else if(t.tag===19)ep(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Lt(kt,c),(n.mode&1)===0)n.memoizedState=null;else switch(h){case"forwards":for(s=n.child,h=null;s!==null;)t=s.alternate,t!==null&&Do(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),su(n,!1,h,s,m);break;case"backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Do(t)===null){n.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}su(n,!0,s,null,m);break;case"together":su(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Go(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function An(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Hi|=n.lanes,(s&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=fi(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=fi(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Jv(t,n,s){switch(n.tag){case 3:Zf(n),Sa();break;case 5:mf(n);break;case 1:Er(n.type)&&To(n);break;case 4:zc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,h=n.memoizedProps.value;Lt(Uo,c._currentValue),c._currentValue=h;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(Lt(kt,kt.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?Qf(t,n,s):(Lt(kt,kt.current&1),t=An(t,n,s),t!==null?t.sibling:null);Lt(kt,kt.current&1);break;case 19:if(c=(s&n.childLanes)!==0,(t.flags&128)!==0){if(c)return tp(t,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Lt(kt,kt.current),c)break;return null;case 22:case 23:return n.lanes=0,Yf(t,n,s)}return An(t,n,s)}var rp,ou,np,ip;rp=function(t,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ou=function(){},np=function(t,n,s,c){var h=t.memoizedProps;if(h!==c){t=n.stateNode,zi(fn.current);var m=null;switch(s){case"input":h=k(t,h),c=k(t,c),m=[];break;case"select":h=le({},h,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":h=T(t,h),c=T(t,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=So)}ut(s,c);var S;s=null;for(J in h)if(!c.hasOwnProperty(J)&&h.hasOwnProperty(J)&&h[J]!=null)if(J==="style"){var L=h[J];for(S in L)L.hasOwnProperty(S)&&(s||(s={}),s[S]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in c){var D=c[J];if(L=h!=null?h[J]:void 0,c.hasOwnProperty(J)&&D!==L&&(D!=null||L!=null))if(J==="style")if(L){for(S in L)!L.hasOwnProperty(S)||D&&D.hasOwnProperty(S)||(s||(s={}),s[S]="");for(S in D)D.hasOwnProperty(S)&&L[S]!==D[S]&&(s||(s={}),s[S]=D[S])}else s||(m||(m=[]),m.push(J,s)),s=D;else J==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,L=L?L.__html:void 0,D!=null&&L!==D&&(m=m||[]).push(J,D)):J==="children"?typeof D!="string"&&typeof D!="number"||(m=m||[]).push(J,""+D):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(D!=null&&J==="onScroll"&&It("scroll",t),m||L===D||(m=[])):(m=m||[]).push(J,D))}s&&(m=m||[]).push("style",s);var J=m;(n.updateQueue=J)&&(n.flags|=4)}},ip=function(t,n,s,c){s!==c&&(n.flags|=4)};function As(t,n){if(!Ot)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function dr(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(n)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=s,n}function Qv(t,n,s){var c=n.pendingProps;switch(Cc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dr(n),null;case 1:return Er(n.type)&&Eo(),dr(n),null;case 3:return c=n.stateNode,wa(),Dt(Mr),Dt(cr),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Co(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zr!==null&&(vu(Zr),Zr=null))),ou(t,n),dr(n),null;case 5:Bc(n);var h=zi(Ms.current);if(s=n.type,t!==null&&n.stateNode!=null)np(t,n,s,c,h),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(r(166));return dr(n),null}if(t=zi(fn.current),Co(n)){c=n.stateNode,s=n.type;var m=n.memoizedProps;switch(c[hn]=n,c[_s]=m,t=(n.mode&1)!==0,s){case"dialog":It("cancel",c),It("close",c);break;case"iframe":case"object":case"embed":It("load",c);break;case"video":case"audio":for(h=0;h<ms.length;h++)It(ms[h],c);break;case"source":It("error",c);break;case"img":case"image":case"link":It("error",c),It("load",c);break;case"details":It("toggle",c);break;case"input":mr(c,m),It("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},It("invalid",c);break;case"textarea":K(c,m),It("invalid",c)}ut(s,m),h=null;for(var S in m)if(m.hasOwnProperty(S)){var L=m[S];S==="children"?typeof L=="string"?c.textContent!==L&&(m.suppressHydrationWarning!==!0&&bo(c.textContent,L,t),h=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&bo(c.textContent,L,t),h=["children",""+L]):o.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&It("scroll",c)}switch(s){case"input":wt(c),Xe(c,m,!0);break;case"textarea":wt(c),be(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=So)}c=h,n.updateQueue=c,c!==null&&(n.flags|=4)}else{S=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=S.createElement(s,{is:c.is}):(t=S.createElement(s),s==="select"&&(S=t,c.multiple?S.multiple=!0:c.size&&(S.size=c.size))):t=S.createElementNS(t,s),t[hn]=n,t[_s]=c,rp(t,n,!1,!1),n.stateNode=t;e:{switch(S=at(s,c),s){case"dialog":It("cancel",t),It("close",t),h=c;break;case"iframe":case"object":case"embed":It("load",t),h=c;break;case"video":case"audio":for(h=0;h<ms.length;h++)It(ms[h],t);h=c;break;case"source":It("error",t),h=c;break;case"img":case"image":case"link":It("error",t),It("load",t),h=c;break;case"details":It("toggle",t),h=c;break;case"input":mr(t,c),h=k(t,c),It("invalid",t);break;case"option":h=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},h=le({},c,{value:void 0}),It("invalid",t);break;case"textarea":K(t,c),h=T(t,c),It("invalid",t);break;default:h=c}ut(s,h),L=h;for(m in L)if(L.hasOwnProperty(m)){var D=L[m];m==="style"?rt(t,D):m==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&et(t,D)):m==="children"?typeof D=="string"?(s!=="textarea"||D!=="")&&qe(t,D):typeof D=="number"&&qe(t,""+D):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?D!=null&&m==="onScroll"&&It("scroll",t):D!=null&&N(t,m,D,S))}switch(s){case"input":wt(t),Xe(t,c,!1);break;case"textarea":wt(t),be(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Re(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?P(t,!!c.multiple,m,!1):c.defaultValue!=null&&P(t,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=So)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return dr(n),null;case 6:if(t&&n.stateNode!=null)ip(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(r(166));if(s=zi(Ms.current),zi(fn.current),Co(n)){if(c=n.stateNode,s=n.memoizedProps,c[hn]=n,(m=c.nodeValue!==s)&&(t=Or,t!==null))switch(t.tag){case 3:bo(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(c.nodeValue,s,(t.mode&1)!==0)}m&&(n.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[hn]=n,n.stateNode=c}return dr(n),null;case 13:if(Dt(kt),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&kr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)of(),Sa(),n.flags|=98560,m=!1;else if(m=Co(n),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(r(318));if(m=n.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[hn]=n}else Sa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dr(n),m=!1}else Zr!==null&&(vu(Zr),Zr=null),m=!0;if(!m)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(kt.current&1)!==0?Zt===0&&(Zt=3):yu())),n.updateQueue!==null&&(n.flags|=4),dr(n),null);case 4:return wa(),ou(t,n),t===null&&gs(n.stateNode.containerInfo),dr(n),null;case 10:return Dc(n.type._context),dr(n),null;case 17:return Er(n.type)&&Eo(),dr(n),null;case 19:if(Dt(kt),m=n.memoizedState,m===null)return dr(n),null;if(c=(n.flags&128)!==0,S=m.rendering,S===null)if(c)As(m,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(S=Do(t),S!==null){for(n.flags|=128,As(m,!1),c=S.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=s,s=n.child;s!==null;)m=s,t=c,m.flags&=14680066,S=m.alternate,S===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=S.childLanes,m.lanes=S.lanes,m.child=S.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=S.memoizedProps,m.memoizedState=S.memoizedState,m.updateQueue=S.updateQueue,m.type=S.type,t=S.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(kt,kt.current&1|2),n.child}t=t.sibling}m.tail!==null&&Y()>Pa&&(n.flags|=128,c=!0,As(m,!1),n.lanes=4194304)}else{if(!c)if(t=Do(S),t!==null){if(n.flags|=128,c=!0,s=t.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),As(m,!0),m.tail===null&&m.tailMode==="hidden"&&!S.alternate&&!Ot)return dr(n),null}else 2*Y()-m.renderingStartTime>Pa&&s!==1073741824&&(n.flags|=128,c=!0,As(m,!1),n.lanes=4194304);m.isBackwards?(S.sibling=n.child,n.child=S):(s=m.last,s!==null?s.sibling=S:n.child=S,m.last=S)}return m.tail!==null?(n=m.tail,m.rendering=n,m.tail=n.sibling,m.renderingStartTime=Y(),n.sibling=null,s=kt.current,Lt(kt,c?s&1|2:s&1),n):(dr(n),null);case 22:case 23:return xu(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(Fr&1073741824)!==0&&(dr(n),n.subtreeFlags&6&&(n.flags|=8192)):dr(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function e_(t,n){switch(Cc(n),n.tag){case 1:return Er(n.type)&&Eo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return wa(),Dt(Mr),Dt(cr),Vc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Bc(n),null;case 13:if(Dt(kt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Sa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Dt(kt),null;case 4:return wa(),null;case 10:return Dc(n.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Wo=!1,hr=!1,t_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Aa(t,n){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){zt(t,n,c)}else s.current=null}function ap(t,n,s){try{s()}catch(c){zt(t,n,c)}}var sp=!1;function r_(t,n){if(yc=co,t=Oh(),hc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,L=-1,D=-1,J=0,_e=0,Me=t,ge=null;t:for(;;){for(var Ie;Me!==s||h!==0&&Me.nodeType!==3||(L=S+h),Me!==m||c!==0&&Me.nodeType!==3||(D=S+c),Me.nodeType===3&&(S+=Me.nodeValue.length),(Ie=Me.firstChild)!==null;)ge=Me,Me=Ie;for(;;){if(Me===t)break t;if(ge===s&&++J===h&&(L=S),ge===m&&++_e===c&&(D=S),(Ie=Me.nextSibling)!==null)break;Me=ge,ge=Me.parentNode}Me=Ie}s=L===-1||D===-1?null:{start:L,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(bc={focusedElem:t,selectionRange:s},co=!1,ke=n;ke!==null;)if(n=ke,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ke=t;else for(;ke!==null;){n=ke;try{var Be=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Ht=Be.memoizedState,$=n.stateNode,z=$.getSnapshotBeforeUpdate(n.elementType===n.type?He:Jr(n.type,He),Ht);$.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var q=n.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Te){zt(n,n.return,Te)}if(t=n.sibling,t!==null){t.return=n.return,ke=t;break}ke=n.return}return Be=sp,sp=!1,Be}function Cs(t,n,s){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&t)===t){var m=h.destroy;h.destroy=void 0,m!==void 0&&ap(n,s,m)}h=h.next}while(h!==c)}}function jo(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==n)}}function lu(t){var n=t.ref;if(n!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof n=="function"?n(t):n.current=t}}function op(t){var n=t.alternate;n!==null&&(t.alternate=null,op(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[hn],delete n[_s],delete n[Tc],delete n[Fv],delete n[zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,n,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(t,n):s.insertBefore(t,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(t,s)):(n=s,n.appendChild(t)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=So));else if(c!==4&&(t=t.child,t!==null))for(cu(t,n,s),t=t.sibling;t!==null;)cu(t,n,s),t=t.sibling}function uu(t,n,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(uu(t,n,s),t=t.sibling;t!==null;)uu(t,n,s),t=t.sibling}var ar=null,Qr=!1;function li(t,n,s){for(s=s.child;s!==null;)up(t,n,s),s=s.sibling}function up(t,n,s){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ke,s)}catch{}switch(s.tag){case 5:hr||Aa(s,n);case 6:var c=ar,h=Qr;ar=null,li(t,n,s),ar=c,Qr=h,ar!==null&&(Qr?(t=ar,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):ar.removeChild(s.stateNode));break;case 18:ar!==null&&(Qr?(t=ar,s=s.stateNode,t.nodeType===8?Ec(t.parentNode,s):t.nodeType===1&&Ec(t,s),os(t)):Ec(ar,s.stateNode));break;case 4:c=ar,h=Qr,ar=s.stateNode.containerInfo,Qr=!0,li(t,n,s),ar=c,Qr=h;break;case 0:case 11:case 14:case 15:if(!hr&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,S=m.destroy;m=m.tag,S!==void 0&&((m&2)!==0||(m&4)!==0)&&ap(s,n,S),h=h.next}while(h!==c)}li(t,n,s);break;case 1:if(!hr&&(Aa(s,n),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(L){zt(s,n,L)}li(t,n,s);break;case 21:li(t,n,s);break;case 22:s.mode&1?(hr=(c=hr)||s.memoizedState!==null,li(t,n,s),hr=c):li(t,n,s);break;default:li(t,n,s)}}function dp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new t_),n.forEach(function(c){var h=d_.bind(null,t,c);s.has(c)||(s.add(c),c.then(h,h))})}}function en(t,n){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c];try{var m=t,S=n,L=S;e:for(;L!==null;){switch(L.tag){case 5:ar=L.stateNode,Qr=!1;break e;case 3:ar=L.stateNode.containerInfo,Qr=!0;break e;case 4:ar=L.stateNode.containerInfo,Qr=!0;break e}L=L.return}if(ar===null)throw Error(r(160));up(m,S,h),ar=null,Qr=!1;var D=h.alternate;D!==null&&(D.return=null),h.return=null}catch(J){zt(h,n,J)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hp(n,t),n=n.sibling}function hp(t,n){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(n,t),mn(t),c&4){try{Cs(3,t,t.return),jo(3,t)}catch(He){zt(t,t.return,He)}try{Cs(5,t,t.return)}catch(He){zt(t,t.return,He)}}break;case 1:en(n,t),mn(t),c&512&&s!==null&&Aa(s,s.return);break;case 5:if(en(n,t),mn(t),c&512&&s!==null&&Aa(s,s.return),t.flags&32){var h=t.stateNode;try{qe(h,"")}catch(He){zt(t,t.return,He)}}if(c&4&&(h=t.stateNode,h!=null)){var m=t.memoizedProps,S=s!==null?s.memoizedProps:m,L=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&pt(h,m),at(L,S);var J=at(L,m);for(S=0;S<D.length;S+=2){var _e=D[S],Me=D[S+1];_e==="style"?rt(h,Me):_e==="dangerouslySetInnerHTML"?et(h,Me):_e==="children"?qe(h,Me):N(h,_e,Me,J)}switch(L){case"input":ct(h,m);break;case"textarea":fe(h,m);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?P(h,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?P(h,!!m.multiple,m.defaultValue,!0):P(h,!!m.multiple,m.multiple?[]:"",!1))}h[_s]=m}catch(He){zt(t,t.return,He)}}break;case 6:if(en(n,t),mn(t),c&4){if(t.stateNode===null)throw Error(r(162));h=t.stateNode,m=t.memoizedProps;try{h.nodeValue=m}catch(He){zt(t,t.return,He)}}break;case 3:if(en(n,t),mn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{os(n.containerInfo)}catch(He){zt(t,t.return,He)}break;case 4:en(n,t),mn(t);break;case 13:en(n,t),mn(t),h=t.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(fu=Y())),c&4&&dp(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hr=(J=hr)||_e,en(n,t),hr=J):en(n,t),mn(t),c&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&(t.mode&1)!==0)for(ke=t,_e=t.child;_e!==null;){for(Me=ke=_e;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Cs(4,ge,ge.return);break;case 1:Aa(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){c=ge,s=ge.return;try{n=c,Be.props=n.memoizedProps,Be.state=n.memoizedState,Be.componentWillUnmount()}catch(He){zt(c,s,He)}}break;case 5:Aa(ge,ge.return);break;case 22:if(ge.memoizedState!==null){mp(Me);continue}}Ie!==null?(Ie.return=ge,ke=Ie):mp(Me)}_e=_e.sibling}e:for(_e=null,Me=t;;){if(Me.tag===5){if(_e===null){_e=Me;try{h=Me.stateNode,J?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=Me.stateNode,D=Me.memoizedProps.style,S=D!=null&&D.hasOwnProperty("display")?D.display:null,L.style.display=tt("display",S))}catch(He){zt(t,t.return,He)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=J?"":Me.memoizedProps}catch(He){zt(t,t.return,He)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:en(n,t),mn(t),c&4&&dp(t);break;case 21:break;default:en(n,t),mn(t)}}function mn(t){var n=t.flags;if(n&2){try{e:{for(var s=t.return;s!==null;){if(lp(s)){var c=s;break e}s=s.return}throw Error(r(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(qe(h,""),c.flags&=-33);var m=cp(t);uu(t,m,h);break;case 3:case 4:var S=c.stateNode.containerInfo,L=cp(t);cu(t,L,S);break;default:throw Error(r(161))}}catch(D){zt(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function n_(t,n,s){ke=t,fp(t)}function fp(t,n,s){for(var c=(t.mode&1)!==0;ke!==null;){var h=ke,m=h.child;if(h.tag===22&&c){var S=h.memoizedState!==null||Wo;if(!S){var L=h.alternate,D=L!==null&&L.memoizedState!==null||hr;L=Wo;var J=hr;if(Wo=S,(hr=D)&&!J)for(ke=h;ke!==null;)S=ke,D=S.child,S.tag===22&&S.memoizedState!==null?gp(h):D!==null?(D.return=S,ke=D):gp(h);for(;m!==null;)ke=m,fp(m),m=m.sibling;ke=h,Wo=L,hr=J}pp(t)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,ke=m):pp(t)}}function pp(t){for(;ke!==null;){var n=ke;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:hr||jo(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!hr)if(s===null)c.componentDidMount();else{var h=n.elementType===n.type?s.memoizedProps:Jr(n.type,s.memoizedProps);c.componentDidUpdate(h,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=n.updateQueue;m!==null&&pf(n,m,c);break;case 3:var S=n.updateQueue;if(S!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}pf(n,S,s)}break;case 5:var L=n.stateNode;if(s===null&&n.flags&4){s=L;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&s.focus();break;case"img":D.src&&(s.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var J=n.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&os(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}hr||n.flags&512&&lu(n)}catch(ge){zt(n,n.return,ge)}}if(n===t){ke=null;break}if(s=n.sibling,s!==null){s.return=n.return,ke=s;break}ke=n.return}}function mp(t){for(;ke!==null;){var n=ke;if(n===t){ke=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ke=s;break}ke=n.return}}function gp(t){for(;ke!==null;){var n=ke;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{jo(4,n)}catch(D){zt(n,s,D)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var h=n.return;try{c.componentDidMount()}catch(D){zt(n,h,D)}}var m=n.return;try{lu(n)}catch(D){zt(n,m,D)}break;case 5:var S=n.return;try{lu(n)}catch(D){zt(n,S,D)}}}catch(D){zt(n,n.return,D)}if(n===t){ke=null;break}var L=n.sibling;if(L!==null){L.return=n.return,ke=L;break}ke=n.return}}var i_=Math.ceil,Xo=A.ReactCurrentDispatcher,du=A.ReactCurrentOwner,jr=A.ReactCurrentBatchConfig,xt=0,rr=null,jt=null,sr=0,Fr=0,Ca=ni(0),Zt=0,Ps=null,Hi=0,$o=0,hu=0,Us=null,wr=null,fu=0,Pa=1/0,Cn=null,Yo=!1,pu=null,ci=null,qo=!1,ui=null,Ko=0,Ls=0,mu=null,Zo=-1,Jo=0;function yr(){return(xt&6)!==0?Y():Zo!==-1?Zo:Zo=Y()}function di(t){return(t.mode&1)===0?1:(xt&2)!==0&&sr!==0?sr&-sr:Hv.transition!==null?(Jo===0&&(Jo=Ct()),Jo):(t=_t,t!==0||(t=window.event,t=t===void 0?16:gh(t.type)),t)}function tn(t,n,s,c){if(50<Ls)throw Ls=0,mu=null,Error(r(185));er(t,s,c),((xt&2)===0||t!==rr)&&(t===rr&&((xt&2)===0&&($o|=s),Zt===4&&hi(t,sr)),Rr(t,c),s===1&&xt===0&&(n.mode&1)===0&&(Pa=Y()+500,wo&&ai()))}function Rr(t,n){var s=t.callbackNode;vr(t,n);var c=or(t,t===rr?sr:0);if(c===0)s!==null&&w(s),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(s!=null&&w(s),n===1)t.tag===0?Bv(_p.bind(null,t)):tf(_p.bind(null,t)),Ov(function(){(xt&6)===0&&ai()}),s=null;else{switch(dn(c)){case 1:s=xe;break;case 4:s=Ne;break;case 16:s=Le;break;case 536870912:s=nt;break;default:s=Le}s=wp(s,vp.bind(null,t))}t.callbackPriority=n,t.callbackNode=s}}function vp(t,n){if(Zo=-1,Jo=0,(xt&6)!==0)throw Error(r(327));var s=t.callbackNode;if(Ua()&&t.callbackNode!==s)return null;var c=or(t,t===rr?sr:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||n)n=Qo(t,c);else{n=c;var h=xt;xt|=2;var m=yp();(rr!==t||sr!==n)&&(Cn=null,Pa=Y()+500,Gi(t,n));do try{o_();break}catch(L){xp(t,L)}while(!0);Ic(),Xo.current=m,xt=h,jt!==null?n=0:(rr=null,sr=0,n=Zt)}if(n!==0){if(n===2&&(h=bn(t),h!==0&&(c=h,n=gu(t,h))),n===1)throw s=Ps,Gi(t,0),hi(t,c),Rr(t,Y()),s;if(n===6)hi(t,c);else{if(h=t.current.alternate,(c&30)===0&&!a_(h)&&(n=Qo(t,c),n===2&&(m=bn(t),m!==0&&(c=m,n=gu(t,m))),n===1))throw s=Ps,Gi(t,0),hi(t,c),Rr(t,Y()),s;switch(t.finishedWork=h,t.finishedLanes=c,n){case 0:case 1:throw Error(r(345));case 2:Wi(t,wr,Cn);break;case 3:if(hi(t,c),(c&130023424)===c&&(n=fu+500-Y(),10<n)){if(or(t,0)!==0)break;if(h=t.suspendedLanes,(h&c)!==c){yr(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=Mc(Wi.bind(null,t,wr,Cn),n);break}Wi(t,wr,Cn);break;case 4:if(hi(t,c),(c&4194240)===c)break;for(n=t.eventTimes,h=-1;0<c;){var S=31-ot(c);m=1<<S,S=n[S],S>h&&(h=S),c&=~m}if(c=h,c=Y()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*i_(c/1960))-c,10<c){t.timeoutHandle=Mc(Wi.bind(null,t,wr,Cn),c);break}Wi(t,wr,Cn);break;case 5:Wi(t,wr,Cn);break;default:throw Error(r(329))}}}return Rr(t,Y()),t.callbackNode===s?vp.bind(null,t):null}function gu(t,n){var s=Us;return t.current.memoizedState.isDehydrated&&(Gi(t,n).flags|=256),t=Qo(t,n),t!==2&&(n=wr,wr=s,n!==null&&vu(n)),t}function vu(t){wr===null?wr=t:wr.push.apply(wr,t)}function a_(t){for(var n=t;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!Kr(m(),h))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hi(t,n){for(n&=~hu,n&=~$o,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var s=31-ot(n),c=1<<s;t[s]=-1,n&=~c}}function _p(t){if((xt&6)!==0)throw Error(r(327));Ua();var n=or(t,0);if((n&1)===0)return Rr(t,Y()),null;var s=Qo(t,n);if(t.tag!==0&&s===2){var c=bn(t);c!==0&&(n=c,s=gu(t,c))}if(s===1)throw s=Ps,Gi(t,0),hi(t,n),Rr(t,Y()),s;if(s===6)throw Error(r(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Wi(t,wr,Cn),Rr(t,Y()),null}function _u(t,n){var s=xt;xt|=1;try{return t(n)}finally{xt=s,xt===0&&(Pa=Y()+500,wo&&ai())}}function Vi(t){ui!==null&&ui.tag===0&&(xt&6)===0&&Ua();var n=xt;xt|=1;var s=jr.transition,c=_t;try{if(jr.transition=null,_t=1,t)return t()}finally{_t=c,jr.transition=s,xt=n,(xt&6)===0&&ai()}}function xu(){Fr=Ca.current,Dt(Ca)}function Gi(t,n){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Dv(s)),jt!==null)for(s=jt.return;s!==null;){var c=s;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Eo();break;case 3:wa(),Dt(Mr),Dt(cr),Vc();break;case 5:Bc(c);break;case 4:wa();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:Dc(c.type._context);break;case 22:case 23:xu()}s=s.return}if(rr=t,jt=t=fi(t.current,null),sr=Fr=n,Zt=0,Ps=null,hu=$o=Hi=0,wr=Us=null,Fi!==null){for(n=0;n<Fi.length;n++)if(s=Fi[n],c=s.interleaved,c!==null){s.interleaved=null;var h=c.next,m=s.pending;if(m!==null){var S=m.next;m.next=h,c.next=S}s.pending=c}Fi=null}return t}function xp(t,n){do{var s=jt;try{if(Ic(),Oo.current=Bo,ko){for(var c=Ft.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ko=!1}if(Bi=0,tr=Kt=Ft=null,Es=!1,Ts=0,du.current=null,s===null||s.return===null){Zt=1,Ps=n,jt=null;break}e:{var m=t,S=s.return,L=s,D=n;if(n=sr,L.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var J=D,_e=L,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Gf(S);if(Ie!==null){Ie.flags&=-257,Wf(Ie,S,L,m,n),Ie.mode&1&&Vf(m,J,n),n=Ie,D=J;var Be=n.updateQueue;if(Be===null){var He=new Set;He.add(D),n.updateQueue=He}else Be.add(D);break e}else{if((n&1)===0){Vf(m,J,n),yu();break e}D=Error(r(426))}}else if(Ot&&L.mode&1){var Ht=Gf(S);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Wf(Ht,S,L,m,n),Lc(Ra(D,L));break e}}m=D=Ra(D,L),Zt!==4&&(Zt=2),Us===null?Us=[m]:Us.push(m),m=S;do{switch(m.tag){case 3:m.flags|=65536,n&=-n,m.lanes|=n;var $=Bf(m,D,n);ff(m,$);break e;case 1:L=D;var z=m.type,q=m.stateNode;if((m.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(ci===null||!ci.has(q)))){m.flags|=65536,n&=-n,m.lanes|=n;var Te=Hf(m,L,n);ff(m,Te);break e}}m=m.return}while(m!==null)}Sp(s)}catch(je){n=je,jt===s&&s!==null&&(jt=s=s.return);continue}break}while(!0)}function yp(){var t=Xo.current;return Xo.current=Bo,t===null?Bo:t}function yu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rr===null||(Hi&268435455)===0&&($o&268435455)===0||hi(rr,sr)}function Qo(t,n){var s=xt;xt|=2;var c=yp();(rr!==t||sr!==n)&&(Cn=null,Gi(t,n));do try{s_();break}catch(h){xp(t,h)}while(!0);if(Ic(),xt=s,Xo.current=c,jt!==null)throw Error(r(261));return rr=null,sr=0,Zt}function s_(){for(;jt!==null;)bp(jt)}function o_(){for(;jt!==null&&!W();)bp(jt)}function bp(t){var n=Tp(t.alternate,t,Fr);t.memoizedProps=t.pendingProps,n===null?Sp(t):jt=n,du.current=null}function Sp(t){var n=t;do{var s=n.alternate;if(t=n.return,(n.flags&32768)===0){if(s=Qv(s,n,Fr),s!==null){jt=s;return}}else{if(s=e_(s,n),s!==null){s.flags&=32767,jt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,jt=null;return}}if(n=n.sibling,n!==null){jt=n;return}jt=n=t}while(n!==null);Zt===0&&(Zt=5)}function Wi(t,n,s){var c=_t,h=jr.transition;try{jr.transition=null,_t=1,l_(t,n,s,c)}finally{jr.transition=h,_t=c}return null}function l_(t,n,s,c){do Ua();while(ui!==null);if((xt&6)!==0)throw Error(r(327));s=t.finishedWork;var h=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0;var m=s.lanes|s.childLanes;if(qt(t,m),t===rr&&(jt=rr=null,sr=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||qo||(qo=!0,wp(Le,function(){return Ua(),null})),m=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||m){m=jr.transition,jr.transition=null;var S=_t;_t=1;var L=xt;xt|=4,du.current=null,r_(t,s),hp(s,t),Av(bc),co=!!yc,bc=yc=null,t.current=s,n_(s),Q(),xt=L,_t=S,jr.transition=m}else t.current=s;if(qo&&(qo=!1,ui=t,Ko=h),m=t.pendingLanes,m===0&&(ci=null),gt(s.stateNode),Rr(t,Y()),n!==null)for(c=t.onRecoverableError,s=0;s<n.length;s++)h=n[s],c(h.value,{componentStack:h.stack,digest:h.digest});if(Yo)throw Yo=!1,t=pu,pu=null,t;return(Ko&1)!==0&&t.tag!==0&&Ua(),m=t.pendingLanes,(m&1)!==0?t===mu?Ls++:(Ls=0,mu=t):Ls=0,ai(),null}function Ua(){if(ui!==null){var t=dn(Ko),n=jr.transition,s=_t;try{if(jr.transition=null,_t=16>t?16:t,ui===null)var c=!1;else{if(t=ui,ui=null,Ko=0,(xt&6)!==0)throw Error(r(331));var h=xt;for(xt|=4,ke=t.current;ke!==null;){var m=ke,S=m.child;if((ke.flags&16)!==0){var L=m.deletions;if(L!==null){for(var D=0;D<L.length;D++){var J=L[D];for(ke=J;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Cs(8,_e,m)}var Me=_e.child;if(Me!==null)Me.return=_e,ke=Me;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ie=_e.return;if(op(_e),_e===J){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var Be=m.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Ht=He.sibling;He.sibling=null,He=Ht}while(He!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&S!==null)S.return=m,ke=S;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Cs(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,ke=$;break e}ke=m.return}}var z=t.current;for(ke=z;ke!==null;){S=ke;var q=S.child;if((S.subtreeFlags&2064)!==0&&q!==null)q.return=S,ke=q;else e:for(S=z;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:jo(9,L)}}catch(je){zt(L,L.return,je)}if(L===S){ke=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,ke=Te;break e}ke=L.return}}if(xt=h,ai(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ke,t)}catch{}c=!0}return c}finally{_t=s,jr.transition=n}}return!1}function Mp(t,n,s){n=Ra(s,n),n=Bf(t,n,1),t=oi(t,n,1),n=yr(),t!==null&&(er(t,1,n),Rr(t,n))}function zt(t,n,s){if(t.tag===3)Mp(t,t,s);else for(;n!==null;){if(n.tag===3){Mp(n,t,s);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ci===null||!ci.has(c))){t=Ra(s,t),t=Hf(n,t,1),n=oi(n,t,1),t=yr(),n!==null&&(er(n,1,t),Rr(n,t));break}}n=n.return}}function c_(t,n,s){var c=t.pingCache;c!==null&&c.delete(n),n=yr(),t.pingedLanes|=t.suspendedLanes&s,rr===t&&(sr&s)===s&&(Zt===4||Zt===3&&(sr&130023424)===sr&&500>Y()-fu?Gi(t,0):hu|=s),Rr(t,n)}function Ep(t,n){n===0&&((t.mode&1)===0?n=1:(n=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var s=yr();t=wn(t,n),t!==null&&(er(t,n,s),Rr(t,s))}function u_(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ep(t,s)}function d_(t,n){var s=0;switch(t.tag){case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(r(314))}c!==null&&c.delete(n),Ep(t,s)}var Tp;Tp=function(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps||Mr.current)Tr=!0;else{if((t.lanes&s)===0&&(n.flags&128)===0)return Tr=!1,Jv(t,n,s);Tr=(t.flags&131072)!==0}else Tr=!1,Ot&&(n.flags&1048576)!==0&&rf(n,Ao,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;Go(t,n),t=n.pendingProps;var h=xa(n,cr.current);Ta(n,s),h=jc(null,n,c,t,h,s);var m=Xc();return n.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Er(c)?(m=!0,To(n)):m=!1,n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Fc(n),h.updater=Ho,n.stateNode=h,h._reactInternals=n,Jc(n,c,t,s),n=ru(null,n,c,!0,m,s)):(n.tag=0,Ot&&m&&Ac(n),xr(null,n,h,s),n=n.child),n;case 16:c=n.elementType;e:{switch(Go(t,n),t=n.pendingProps,h=c._init,c=h(c._payload),n.type=c,h=n.tag=f_(c),t=Jr(c,t),h){case 0:n=tu(null,n,c,t,s);break e;case 1:n=Kf(null,n,c,t,s);break e;case 11:n=jf(null,n,c,t,s);break e;case 14:n=Xf(null,n,c,Jr(c.type,t),s);break e}throw Error(r(306,c,""))}return n;case 0:return c=n.type,h=n.pendingProps,h=n.elementType===c?h:Jr(c,h),tu(t,n,c,h,s);case 1:return c=n.type,h=n.pendingProps,h=n.elementType===c?h:Jr(c,h),Kf(t,n,c,h,s);case 3:e:{if(Zf(n),t===null)throw Error(r(387));c=n.pendingProps,m=n.memoizedState,h=m.element,hf(t,n),Io(n,c,null,s);var S=n.memoizedState;if(c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){h=Ra(Error(r(423)),n),n=Jf(t,n,c,s,h);break e}else if(c!==h){h=Ra(Error(r(424)),n),n=Jf(t,n,c,s,h);break e}else for(kr=ri(n.stateNode.containerInfo.firstChild),Or=n,Ot=!0,Zr=null,s=uf(n,null,c,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Sa(),c===h){n=An(t,n,s);break e}xr(t,n,c,s)}n=n.child}return n;case 5:return mf(n),t===null&&Uc(n),c=n.type,h=n.pendingProps,m=t!==null?t.memoizedProps:null,S=h.children,Sc(c,h)?S=null:m!==null&&Sc(c,m)&&(n.flags|=32),qf(t,n),xr(t,n,S,s),n.child;case 6:return t===null&&Uc(n),null;case 13:return Qf(t,n,s);case 4:return zc(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=Ma(n,null,c,s):xr(t,n,c,s),n.child;case 11:return c=n.type,h=n.pendingProps,h=n.elementType===c?h:Jr(c,h),jf(t,n,c,h,s);case 7:return xr(t,n,n.pendingProps,s),n.child;case 8:return xr(t,n,n.pendingProps.children,s),n.child;case 12:return xr(t,n,n.pendingProps.children,s),n.child;case 10:e:{if(c=n.type._context,h=n.pendingProps,m=n.memoizedProps,S=h.value,Lt(Uo,c._currentValue),c._currentValue=S,m!==null)if(Kr(m.value,S)){if(m.children===h.children&&!Mr.current){n=An(t,n,s);break e}}else for(m=n.child,m!==null&&(m.return=n);m!==null;){var L=m.dependencies;if(L!==null){S=m.child;for(var D=L.firstContext;D!==null;){if(D.context===c){if(m.tag===1){D=Rn(-1,s&-s),D.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?D.next=D:(D.next=_e.next,_e.next=D),J.pending=D}}m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),Oc(m.return,s,n),L.lanes|=s;break}D=D.next}}else if(m.tag===10)S=m.type===n.type?null:m.child;else if(m.tag===18){if(S=m.return,S===null)throw Error(r(341));S.lanes|=s,L=S.alternate,L!==null&&(L.lanes|=s),Oc(S,s,n),S=m.sibling}else S=m.child;if(S!==null)S.return=m;else for(S=m;S!==null;){if(S===n){S=null;break}if(m=S.sibling,m!==null){m.return=S.return,S=m;break}S=S.return}m=S}xr(t,n,h.children,s),n=n.child}return n;case 9:return h=n.type,c=n.pendingProps.children,Ta(n,s),h=Gr(h),c=c(h),n.flags|=1,xr(t,n,c,s),n.child;case 14:return c=n.type,h=Jr(c,n.pendingProps),h=Jr(c.type,h),Xf(t,n,c,h,s);case 15:return $f(t,n,n.type,n.pendingProps,s);case 17:return c=n.type,h=n.pendingProps,h=n.elementType===c?h:Jr(c,h),Go(t,n),n.tag=1,Er(c)?(t=!0,To(n)):t=!1,Ta(n,s),Ff(n,c,h),Jc(n,c,h,s),ru(null,n,c,!0,t,s);case 19:return tp(t,n,s);case 22:return Yf(t,n,s)}throw Error(r(156,n.tag))};function wp(t,n){return so(t,n)}function h_(t,n,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xr(t,n,s,c){return new h_(t,n,s,c)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===ve)return 14}return 2}function fi(t,n){var s=t.alternate;return s===null?(s=Xr(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function el(t,n,s,c,h,m){var S=2;if(c=t,typeof t=="function")bu(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case O:return ji(s.children,h,m,n);case X:S=8,h|=8;break;case C:return t=Xr(12,s,n,h|2),t.elementType=C,t.lanes=m,t;case te:return t=Xr(13,s,n,h),t.elementType=te,t.lanes=m,t;case ue:return t=Xr(19,s,n,h),t.elementType=ue,t.lanes=m,t;case pe:return tl(s,h,m,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:S=10;break e;case H:S=9;break e;case ae:S=11;break e;case ve:S=14;break e;case oe:S=16,c=null;break e}throw Error(r(130,t==null?t:typeof t,""))}return n=Xr(S,s,n,h),n.elementType=t,n.type=c,n.lanes=m,n}function ji(t,n,s,c){return t=Xr(7,t,c,n),t.lanes=s,t}function tl(t,n,s,c){return t=Xr(22,t,c,n),t.elementType=pe,t.lanes=s,t.stateNode={isHidden:!1},t}function Su(t,n,s){return t=Xr(6,t,null,n),t.lanes=s,t}function Mu(t,n,s){return n=Xr(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function p_(t,n,s,c,h){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lr(0),this.expirationTimes=lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Eu(t,n,s,c,h,m,S,L,D){return t=new p_(t,n,s,L,D),n===1?(n=1,m===!0&&(n|=8)):n=0,m=Xr(3,null,null,n),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(m),t}function m_(t,n,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:t,containerInfo:n,implementation:s}}function Rp(t){if(!t)return ii;t=t._reactInternals;e:{if(un(t)!==t||t.tag!==1)throw Error(r(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Er(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(t.tag===1){var s=t.type;if(Er(s))return Qh(t,s,n)}return n}function Ap(t,n,s,c,h,m,S,L,D){return t=Eu(s,c,!0,t,h,m,S,L,D),t.context=Rp(null),s=t.current,c=yr(),h=di(s),m=Rn(c,h),m.callback=n??null,oi(s,m,h),t.current.lanes=h,er(t,h,c),Rr(t,c),t}function rl(t,n,s,c){var h=n.current,m=yr(),S=di(h);return s=Rp(s),n.context===null?n.context=s:n.pendingContext=s,n=Rn(m,S),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=oi(h,n,S),t!==null&&(tn(t,h,S,m),No(t,h,S)),S}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Tu(t,n){Cp(t,n),(t=t.alternate)&&Cp(t,n)}function g_(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function wu(t){this._internalRoot=t}il.prototype.render=wu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));rl(t,n,null,null)},il.prototype.unmount=wu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vi(function(){rl(null,t,null,null)}),n[Sn]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var n=dh();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Qn.length&&n!==0&&n<Qn[s].priority;s++);Qn.splice(s,0,t),s===0&&ph(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function v_(t,n,s,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var J=nl(S);m.call(J)}}var S=Ap(n,c,t,0,null,!1,!1,"",Up);return t._reactRootContainer=S,t[Sn]=S.current,gs(t.nodeType===8?t.parentNode:t),Vi(),S}for(;h=t.lastChild;)t.removeChild(h);if(typeof c=="function"){var L=c;c=function(){var J=nl(D);L.call(J)}}var D=Eu(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=D,t[Sn]=D.current,gs(t.nodeType===8?t.parentNode:t),Vi(function(){rl(n,D,s,c)}),D}function sl(t,n,s,c,h){var m=s._reactRootContainer;if(m){var S=m;if(typeof h=="function"){var L=h;h=function(){var D=nl(S);L.call(D)}}rl(n,S,t,h)}else S=v_(s,n,t,h,c);return nl(S)}ch=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var s=Ir(n.pendingLanes);s!==0&&(_r(n,s|1),Rr(n,Y()),(xt&6)===0&&(Pa=Y()+500,ai()))}break;case 13:Vi(function(){var c=wn(t,1);if(c!==null){var h=yr();tn(c,t,1,h)}}),Tu(t,1)}},Ql=function(t){if(t.tag===13){var n=wn(t,134217728);if(n!==null){var s=yr();tn(n,t,134217728,s)}Tu(t,134217728)}},uh=function(t){if(t.tag===13){var n=di(t),s=wn(t,n);if(s!==null){var c=yr();tn(s,t,n,c)}Tu(t,n)}},dh=function(){return _t},hh=function(t,n){var s=_t;try{return _t=t,n()}finally{_t=s}},Ce=function(t,n,s){switch(n){case"input":if(ct(t,s),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var c=s[n];if(c!==t&&c.form===t.form){var h=Mo(c);if(!h)throw Error(r(90));ft(c),ct(c,h)}}}break;case"textarea":fe(t,s);break;case"select":n=s.value,n!=null&&P(t,!!s.multiple,n,!1)}},Nt=_u,Yt=Vi;var __={usingClientEntryPoint:!1,Events:[xs,va,Mo,we,ht,_u]},Ns={findFiberByHostInstance:Ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x_={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=io(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||g_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Ke=ol.inject(x_),Ye=ol}catch{}}return Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,Ar.createPortal=function(t,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(n))throw Error(r(200));return m_(t,n,null,s)},Ar.createRoot=function(t,n){if(!Ru(t))throw Error(r(299));var s=!1,c="",h=Pp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=Eu(t,1,!1,null,null,s,!1,c,h),t[Sn]=n.current,gs(t.nodeType===8?t.parentNode:t),new wu(n)},Ar.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=io(n),t=t===null?null:t.stateNode,t},Ar.flushSync=function(t){return Vi(t)},Ar.hydrate=function(t,n,s){if(!al(n))throw Error(r(200));return sl(null,t,n,!0,s)},Ar.hydrateRoot=function(t,n,s){if(!Ru(t))throw Error(r(405));var c=s!=null&&s.hydratedSources||null,h=!1,m="",S=Pp;if(s!=null&&(s.unstable_strictMode===!0&&(h=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(S=s.onRecoverableError)),n=Ap(n,null,t,1,s??null,h,!1,m,S),t[Sn]=n.current,gs(t),c)for(t=0;t<c.length;t++)s=c[t],h=s._getVersion,h=h(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,h]:n.mutableSourceEagerHydrationData.push(s,h);return new il(n)},Ar.render=function(t,n,s){if(!al(n))throw Error(r(200));return sl(null,t,n,!1,s)},Ar.unmountComponentAtNode=function(t){if(!al(t))throw Error(r(40));return t._reactRootContainer?(Vi(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1},Ar.unstable_batchedUpdates=_u,Ar.unstable_renderSubtreeIntoContainer=function(t,n,s,c){if(!al(s))throw Error(r(200));if(t==null||t._reactInternals===void 0)throw Error(r(38));return sl(t,n,s,!1,c)},Ar.version="18.3.1-next-f1338f8080-20240426",Ar}var Bp;function Qm(){if(Bp)return Au.exports;Bp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Au.exports=A_(),Au.exports}Qm();/**
* @remix-run/router v1.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Hs(){return Hs=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},Hs.apply(this,arguments)}var Ti;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Ti||(Ti={}));const Hp="popstate";function C_(a){a===void 0&&(a={});function e(i,o){let{pathname:l,search:u,hash:d}=i.location;return sd("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){return typeof o=="string"?o:Vl(o)}return U_(e,r,null,a)}function $t(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function eg(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P_(){return Math.random().toString(36).substr(2,8)}function Vp(a,e){return{usr:a.state,key:a.key,idx:e}}function sd(a,e,r,i){return r===void 0&&(r=null),Hs({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof e=="string"?es(e):e,{state:r,key:e&&e.key||i||P_()})}function Vl(a){let{pathname:e="/",search:r="",hash:i=""}=a;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function es(a){let e={};if(a){let r=a.indexOf("#");r>=0&&(e.hash=a.substr(r),a=a.substr(0,r));let i=a.indexOf("?");i>=0&&(e.search=a.substr(i),a=a.substr(0,i)),a&&(e.pathname=a)}return e}function U_(a,e,r,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,d=Ti.Pop,f=null,p=_();p==null&&(p=0,u.replaceState(Hs({},u.state,{idx:p}),""));function _(){return(u.state||{idx:null}).idx}function g(){d=Ti.Pop;let x=_(),v=x==null?null:x-p;p=x,f&&f({action:d,location:M.location,delta:v})}function y(x,v){d=Ti.Push;let U=sd(M.location,x,v);p=_()+1;let N=Vp(U,p),A=M.createHref(U);try{u.pushState(N,"",A)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(A)}l&&f&&f({action:d,location:M.location,delta:1})}function b(x,v){d=Ti.Replace;let U=sd(M.location,x,v);p=_();let N=Vp(U,p),A=M.createHref(U);u.replaceState(N,"",A),l&&f&&f({action:d,location:M.location,delta:0})}function E(x){let v=o.location.origin!=="null"?o.location.origin:o.location.href,U=typeof x=="string"?x:Vl(x);return U=U.replace(/ $/,"%20"),$t(v,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,v)}let M={get action(){return d},get location(){return a(o,u)},listen(x){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Hp,g),f=x,()=>{o.removeEventListener(Hp,g),f=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let v=E(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:b,go(x){return u.go(x)}};return M}var Gp;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(Gp||(Gp={}));function L_(a,e,r){return r===void 0&&(r="/"),N_(a,e,r)}function N_(a,e,r,i){let o=typeof e=="string"?es(e):e,l=Jd(o.pathname||"/",r);if(l==null)return null;let u=tg(a);I_(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let p=X_(l);d=G_(u[f],p)}return d}function tg(a,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&($t(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let p=wi([i,f.relativePath]),_=r.concat(f);l.children&&l.children.length>0&&($t(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),tg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:H_(p,l.index),routesMeta:_})};return a.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of rg(l.path))o(l,u,f)}),e}function rg(a){let e=a.split("/");if(e.length===0)return[];let[r,...i]=e,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=rg(i.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>a.startsWith("/")&&f===""?"/":f)}function I_(a){a.sort((e,r)=>e.score!==r.score?r.score-e.score:V_(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const D_=/^:[\w-]+$/,O_=3,k_=2,F_=1,z_=10,B_=-2,Wp=a=>a==="*";function H_(a,e){let r=a.split("/"),i=r.length;return r.some(Wp)&&(i+=B_),e&&(i+=k_),r.filter(o=>!Wp(o)).reduce((o,l)=>o+(D_.test(l)?O_:l===""?F_:z_),i)}function V_(a,e){return a.length===e.length&&a.slice(0,-1).every((r,i)=>r===e[i])?a[a.length-1]-e[e.length-1]:0}function G_(a,e,r){let{routesMeta:i}=a,o={},l="/",u=[];for(let d=0;d<i.length;++d){let f=i[d],p=d===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=W_({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},_),y=f.route;if(!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:wi([l,g.pathname]),pathnameBase:K_(wi([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=wi([l,g.pathnameBase]))}return u}function W_(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,i]=j_(a.path,a.caseSensitive,a.end),o=e.match(r);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((f,p,_)=>{let{paramName:g,isOptional:y}=p;if(g==="*"){let E=d[_]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const b=d[_];return y&&!b?f[g]=void 0:f[g]=(b||"").replace(/%2F/g,"/"),f},{}),pathname:l,pathnameBase:u,pattern:a}}function j_(a,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),eg(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let i=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(i.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(i.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function X_(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eg(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),a}}function Jd(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=a.charAt(r);return i&&i!=="/"?null:a.slice(r)||"/"}function $_(a,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:o=""}=typeof a=="string"?es(a):a;return{pathname:r?r.startsWith("/")?r:Y_(r,e):e,search:Z_(i),hash:J_(o)}}function Y_(a,e){let r=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Cu(a,e,r,i){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q_(a){return a.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function ng(a,e){let r=q_(a);return e?r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function ig(a,e,r,i){i===void 0&&(i=!1);let o;typeof a=="string"?o=es(a):(o=Hs({},a),$t(!o.pathname||!o.pathname.includes("?"),Cu("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),Cu("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),Cu("#","search","hash",o)));let l=a===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=r;else{let g=e.length-1;if(!i&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),g-=1;o.pathname=y.join("/")}d=g>=0?e[g]:"/"}let f=$_(o,d),p=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(p||_)&&(f.pathname+="/"),f}const wi=a=>a.join("/").replace(/\/\/+/g,"/"),K_=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Z_=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,J_=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Q_(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const ag=["post","put","patch","delete"];new Set(ag);const e0=["get",...ag];new Set(e0);/**
* React Router v6.30.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Vs(){return Vs=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},Vs.apply(this,arguments)}const Qd=ce.createContext(null),t0=ce.createContext(null),sa=ce.createContext(null),Xl=ce.createContext(null),oa=ce.createContext({outlet:null,matches:[],isDataRoute:!1}),sg=ce.createContext(null);function r0(a,e){let{relative:r}=e===void 0?{}:e;$s()||$t(!1);let{basename:i,navigator:o}=ce.useContext(sa),{hash:l,pathname:u,search:d}=lg(a,{relative:r}),f=u;return i!=="/"&&(f=u==="/"?i:wi([i,u])),o.createHref({pathname:f,search:d,hash:l})}function $s(){return ce.useContext(Xl)!=null}function $l(){return $s()||$t(!1),ce.useContext(Xl).location}function og(a){ce.useContext(sa).static||ce.useLayoutEffect(a)}function n0(){let{isDataRoute:a}=ce.useContext(oa);return a?g0():i0()}function i0(){$s()||$t(!1);let a=ce.useContext(Qd),{basename:e,future:r,navigator:i}=ce.useContext(sa),{matches:o}=ce.useContext(oa),{pathname:l}=$l(),u=JSON.stringify(ng(o,r.v7_relativeSplatPath)),d=ce.useRef(!1);return og(()=>{d.current=!0}),ce.useCallback(function(f,p){if(p===void 0&&(p={}),!d.current)return;if(typeof f=="number"){i.go(f);return}let _=ig(f,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:wi([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,a])}function lg(a,e){let{relative:r}=e===void 0?{}:e,{future:i}=ce.useContext(sa),{matches:o}=ce.useContext(oa),{pathname:l}=$l(),u=JSON.stringify(ng(o,i.v7_relativeSplatPath));return ce.useMemo(()=>ig(a,JSON.parse(u),l,r==="path"),[a,u,l,r])}function a0(a,e){return s0(a,e)}function s0(a,e,r,i){$s()||$t(!1);let{navigator:o,static:l}=ce.useContext(sa),{matches:u}=ce.useContext(oa),d=u[u.length-1],f=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let _=$l(),g;if(e){var y;let v=typeof e=="string"?es(e):e;p==="/"||(y=v.pathname)!=null&&y.startsWith(p)||$t(!1),g=v}else g=_;let b=g.pathname||"/",E=b;if(p!=="/"){let v=p.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(v.length).join("/")}let M=L_(a,{pathname:E}),x=d0(M&&M.map(v=>Object.assign({},v,{params:Object.assign({},f,v.params),pathname:wi([p,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?p:wi([p,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),u,r,i);return e&&x?ce.createElement(Xl.Provider,{value:{location:Vs({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Ti.Pop}},x):x}function o0(){let a=m0(),e=Q_(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),r?ce.createElement("pre",{style:i},r):null,null)}const l0=ce.createElement(o0,null);let c0=class extends ce.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?ce.createElement(oa.Provider,{value:this.props.routeContext},ce.createElement(sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function u0(a){let{routeContext:e,match:r,children:i}=a,o=ce.useContext(Qd);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),ce.createElement(oa.Provider,{value:e},i)}function d0(a,e,r,i){var o;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),a==null){var l;if(!r)return null;if(r.errors)a=r.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let u=a,d=(o=r)==null?void 0:o.errors;if(d!=null){let _=u.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);_>=0||$t(!1),u=u.slice(0,Math.min(u.length,_+1))}let f=!1,p=-1;if(r&&i&&i.v7_partialHydration)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:y,errors:b}=r,E=g.route.loader&&y[g.route.id]===void 0&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((_,g,y)=>{let b,E=!1,M=null,x=null;r&&(b=d&&g.route.id?d[g.route.id]:void 0,M=g.route.errorElement||l0,f&&(p<0&&y===0?(v0("route-fallback"),E=!0,x=null):p===y&&(E=!0,x=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,y+1)),U=()=>{let N;return b?N=M:E?N=x:g.route.Component?N=ce.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=_,ce.createElement(u0,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:r!=null},children:N})};return r&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?ce.createElement(c0,{location:r.location,revalidation:r.revalidation,component:M,error:b,children:U(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):U()},null)}var cg=function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a}(cg||{}),ug=function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a}(ug||{});function h0(a){let e=ce.useContext(Qd);return e||$t(!1),e}function f0(a){let e=ce.useContext(t0);return e||$t(!1),e}function p0(a){let e=ce.useContext(oa);return e||$t(!1),e}function dg(a){let e=p0(),r=e.matches[e.matches.length-1];return r.route.id||$t(!1),r.route.id}function m0(){var a;let e=ce.useContext(sg),r=f0(),i=dg();return e!==void 0?e:(a=r.errors)==null?void 0:a[i]}function g0(){let{router:a}=h0(cg.UseNavigateStable),e=dg(ug.UseNavigateStable),r=ce.useRef(!1);return og(()=>{r.current=!0}),ce.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?a.navigate(i):a.navigate(i,Vs({fromRouteId:e},o)))},[a,e])}const jp={};function v0(a,e,r){jp[a]||(jp[a]=!0)}function _0(a,e){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function kn(a){$t(!1)}function x0(a){let{basename:e="/",children:r=null,location:i,navigationType:o=Ti.Pop,navigator:l,static:u=!1,future:d}=a;$s()&&$t(!1);let f=e.replace(/^\/*/,"/"),p=ce.useMemo(()=>({basename:f,navigator:l,static:u,future:Vs({v7_relativeSplatPath:!1},d)}),[f,d,l,u]);typeof i=="string"&&(i=es(i));let{pathname:_="/",search:g="",hash:y="",state:b=null,key:E="default"}=i,M=ce.useMemo(()=>{let x=Jd(_,f);return x==null?null:{location:{pathname:x,search:g,hash:y,state:b,key:E},navigationType:o}},[f,_,g,y,b,E,o]);return M==null?null:ce.createElement(sa.Provider,{value:p},ce.createElement(Xl.Provider,{children:r,value:M}))}function y0(a){let{children:e,location:r}=a;return a0(od(e),r)}new Promise(()=>{});function od(a,e){e===void 0&&(e=[]);let r=[];return ce.Children.forEach(a,(i,o)=>{if(!ce.isValidElement(i))return;let l=[...e,o];if(i.type===ce.Fragment){r.push.apply(r,od(i.props.children,l));return}i.type!==kn&&$t(!1),!i.props.index||!i.props.children||$t(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=od(i.props.children,l)),r.push(u)}),r}/**
* React Router DOM v6.30.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function ld(){return ld=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},ld.apply(this,arguments)}function b0(a,e){if(a==null)return{};var r={},i=Object.keys(a),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(r[o]=a[o]);return r}function S0(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function M0(a,e){return a.button===0&&(!e||e==="_self")&&!S0(a)}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T0="6";try{window.__reactRouterVersion=T0}catch{}const w0="startTransition",Xp=T_[w0];function R0(a){let{basename:e,children:r,future:i,window:o}=a,l=ce.useRef();l.current==null&&(l.current=C_({window:o,v5Compat:!0}));let u=l.current,[d,f]=ce.useState({action:u.action,location:u.location}),{v7_startTransition:p}=i||{},_=ce.useCallback(g=>{p&&Xp?Xp(()=>f(g)):f(g)},[f,p]);return ce.useLayoutEffect(()=>u.listen(_),[u,_]),ce.useEffect(()=>_0(i),[i]),ce.createElement(x0,{basename:e,children:r,location:d.location,navigationType:d.action,navigator:u,future:i})}const A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mi=ce.forwardRef(function(a,e){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:u,target:d,to:f,preventScrollReset:p,viewTransition:_}=a,g=b0(a,E0),{basename:y}=ce.useContext(sa),b,E=!1;if(typeof f=="string"&&C0.test(f)&&(b=f,A0))try{let U=new URL(window.location.href),N=f.startsWith("//")?new URL(U.protocol+f):new URL(f),A=Jd(N.pathname,y);N.origin===U.origin&&A!=null?f=A+N.search+N.hash:E=!0}catch{}let M=r0(f,{relative:i}),x=P0(f,{replace:l,state:u,target:d,preventScrollReset:p,relative:i,viewTransition:_});function v(U){r&&r(U),U.defaultPrevented||x(U)}return ce.createElement("a",ld({},g,{href:b||M,onClick:E||o?r:v,ref:e,target:d}))});var $p;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})($p||($p={}));var Yp;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function P0(a,e){let{target:r,replace:i,state:o,preventScrollReset:l,relative:u,viewTransition:d}=e===void 0?{}:e,f=n0(),p=$l(),_=lg(a,{relative:u});return ce.useCallback(g=>{if(M0(g,r)){g.preventDefault();let y=i!==void 0?i:Vl(p)===Vl(_);f(a,{replace:y,state:o,preventScrollReset:l,relative:u,viewTransition:d})}},[p,f,_,i,o,r,a,l,u,d])}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var qp={exports:{}},Is={};/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Kp;function U0(){if(Kp)return Is;Kp=1;var a=Zd(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var _,g={},y=null,b=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(b=f.ref);for(_ in f)i.call(f,_)&&!l.hasOwnProperty(_)&&(g[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)g[_]===void 0&&(g[_]=f[_]);return{$$typeof:e,type:d,key:y,ref:b,props:g,_owner:o.current}}return Is.Fragment=r,Is.jsx=u,Is.jsxs=u,Is}var Zp;function L0(){return Zp||(Zp=1,qp.exports=U0()),qp.exports}var se=L0(),ll={},Jp;function N0(){if(Jp)return ll;Jp=1;var a=Qm();return ll.createRoot=a.createRoot,ll.hydrateRoot=a.hydrateRoot,ll}var I0=N0();/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const eh="176",D0=0,Qp=1,O0=2,hg=1,k0=2,Fn=3,Pi=0,Ur=1,zn=2,Ri=0,$a=1,em=2,tm=3,rm=4,F0=5,ea=100,z0=101,B0=102,H0=103,V0=104,G0=200,W0=201,j0=202,X0=203,cd=204,ud=205,$0=206,Y0=207,q0=208,K0=209,Z0=210,J0=211,Q0=212,ex=213,tx=214,dd=0,hd=1,fd=2,qa=3,pd=4,md=5,gd=6,vd=7,fg=0,rx=1,nx=2,Ai=0,ix=1,ax=2,sx=3,ox=4,lx=5,cx=6,ux=7,pg=300,Ka=301,Za=302,_d=303,xd=304,Yl=306,yd=1e3,ra=1001,bd=1002,cn=1003,dx=1004,cl=1005,vn=1006,Pu=1007,na=1008,Wn=1009,mg=1010,gg=1011,Gs=1012,th=1013,ia=1014,Bn=1015,Ys=1016,rh=1017,nh=1018,Ws=1020,vg=35902,_g=1021,xg=1022,ln=1023,js=1026,Xs=1027,yg=1028,ih=1029,bg=1030,ah=1031,sh=1033,Dl=33776,Ol=33777,kl=33778,Fl=33779,Sd=35840,Md=35841,Ed=35842,Td=35843,wd=36196,Rd=37492,Ad=37496,Cd=37808,Pd=37809,Ud=37810,Ld=37811,Nd=37812,Id=37813,Dd=37814,Od=37815,kd=37816,Fd=37817,zd=37818,Bd=37819,Hd=37820,Vd=37821,zl=36492,Gd=36494,Wd=36495,Sg=36283,jd=36284,Xd=36285,$d=36286,hx=3200,fx=3201,px=0,mx=1,Ei="",Yr="srgb",Ja="srgb-linear",Gl="linear",At="srgb",La=7680,nm=519,gx=512,vx=513,_x=514,Mg=515,xx=516,yx=517,bx=518,Sx=519,im=35044,am="300 es",Hn=2e3,Wl=2001;class ts{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const l=o.indexOf(r);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const r=this._listeners;if(r===void 0)return;const i=r[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const fr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Yd=180/Math.PI;function qs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fr[a&255]+fr[a>>8&255]+fr[a>>16&255]+fr[a>>24&255]+"-"+fr[e&255]+fr[e>>8&255]+"-"+fr[e>>16&15|64]+fr[e>>24&255]+"-"+fr[r&63|128]+fr[r>>8&255]+"-"+fr[r>>16&255]+fr[r>>24&255]+fr[i&255]+fr[i>>8&255]+fr[i>>16&255]+fr[i>>24&255]).toLowerCase()}function mt(a,e,r){return Math.max(e,Math.min(r,a))}function Mx(a,e){return(a%e+e)%e}function Lu(a,e,r){return(1-r)*a+r*e}function Ds(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Cr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,r=0){Pt.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,o=e.elements;return this.x=o[0]*r+o[3]*i+o[6],this.y=o[1]*r+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=mt(this.x,e.x,r.x),this.y=mt(this.y,e.y,r.y),this}clampScalar(e,r){return this.x=mt(this.x,e,r),this.y=mt(this.y,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),o=Math.sin(r),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*o+e.x,this.y=l*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,r,i,o,l,u,d,f,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,o,l,u,d,f,p)}set(e,r,i,o,l,u,d,f,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=r,_[4]=l,_[5]=f,_[6]=i,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,l=this.elements,u=i[0],d=i[3],f=i[6],p=i[1],_=i[4],g=i[7],y=i[2],b=i[5],E=i[8],M=o[0],x=o[3],v=o[6],U=o[1],N=o[4],A=o[7],j=o[2],B=o[5],O=o[8];return l[0]=u*M+d*U+f*j,l[3]=u*x+d*N+f*B,l[6]=u*v+d*A+f*O,l[1]=p*M+_*U+g*j,l[4]=p*x+_*N+g*B,l[7]=p*v+_*A+g*O,l[2]=y*M+b*U+E*j,l[5]=y*x+b*N+E*B,l[8]=y*v+b*A+E*O,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8];return r*u*_-r*d*p-i*l*_+i*d*f+o*l*p-o*u*f}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],g=_*u-d*p,y=d*f-_*l,b=p*l-u*f,E=r*g+i*y+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*p-_*i)*M,e[2]=(d*i-o*u)*M,e[3]=y*M,e[4]=(_*r-o*f)*M,e[5]=(o*l-d*r)*M,e[6]=b*M,e[7]=(i*f-p*r)*M,e[8]=(u*r-i*l)*M,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(i*f,i*p,-i*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+r,0,0,1),this}scale(e,r){return this.premultiply(Nu.makeScale(e,r)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,r){return this.premultiply(Nu.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<9;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new st;function Eg(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function jl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ex(){const a=jl("canvas");return a.style.display="block",a}const sm={};function Bl(a){a in sm||(sm[a]=!0,console.warn(a))}function Tx(a,e,r){return new Promise(function(i,o){function l(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(l,r);break;default:i()}}setTimeout(l,r)})}function wx(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rx(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const om=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ax(){const a={enabled:!0,workingColorSpace:Ja,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===At&&(o.r=Gn(o.r),o.g=Gn(o.g),o.b=Gn(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===At&&(o.r=Ya(o.r),o.g=Ya(o.g),o.b=Ya(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ei?Gl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Ja]:{primaries:e,whitePoint:i,transfer:Gl,toXYZ:om,fromXYZ:lm,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:Yr},outputColorSpaceConfig:{drawingBufferColorSpace:Yr}},[Yr]:{primaries:e,whitePoint:i,transfer:At,toXYZ:om,fromXYZ:lm,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:Yr}}}),a}const bt=Ax();function Gn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Na;class Cx{static getDataURL(e,r="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Na===void 0&&(Na=jl("canvas")),Na.width=e.width,Na.height=e.height;const o=Na.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Na}return i.toDataURL(r)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=jl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Gn(l[u]/255)*255;return i.putImageData(o,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(Gn(r[i]/255)*255):r[i]=Gn(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Px=0;class oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Iu(o[u].image)):l.push(Iu(o[u]))}else l=Iu(o);i.url=l}return r||(e.images[this.uuid]=i),i}}function Iu(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Cx.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class Lr extends ts{constructor(e=Lr.DEFAULT_IMAGE,r=Lr.DEFAULT_MAPPING,i=ra,o=ra,l=vn,u=na,d=ln,f=Wn,p=Lr.DEFAULT_ANISOTROPY,_=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=qs(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case ra:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case ra:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lr.DEFAULT_IMAGE=null;Lr.DEFAULT_MAPPING=pg;Lr.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,r=0,i=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,o){return this.x=e,this.y=r,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*r+u[4]*i+u[8]*o+u[12]*l,this.y=u[1]*r+u[5]*i+u[9]*o+u[13]*l,this.z=u[2]*r+u[6]*i+u[10]*o+u[14]*l,this.w=u[3]*r+u[7]*i+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,o,l;const u=e.elements,d=u[0],f=u[4],p=u[8],_=u[1],g=u[5],y=u[9],b=u[2],E=u[6],M=u[10];if(Math.abs(f-_)<.01&&Math.abs(p-b)<.01&&Math.abs(y-E)<.01){if(Math.abs(f+_)<.1&&Math.abs(p+b)<.1&&Math.abs(y+E)<.1&&Math.abs(d+g+M-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const v=(d+1)/2,U=(g+1)/2,N=(M+1)/2,A=(f+_)/4,j=(p+b)/4,B=(y+E)/4;return v>U&&v>N?v<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(v),o=A/i,l=j/i):U>N?U<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(U),i=A/o,l=B/o):N<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),i=j/l,o=B/l),this.set(i,o,l,r),this}let x=Math.sqrt((E-y)*(E-y)+(p-b)*(p-b)+(_-f)*(_-f));return Math.abs(x)<.001&&(x=1),this.x=(E-y)/x,this.y=(p-b)/x,this.z=(_-f)/x,this.w=Math.acos((d+g+M-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=mt(this.x,e.x,r.x),this.y=mt(this.y,e.y,r.y),this.z=mt(this.z,e.z,r.z),this.w=mt(this.w,e.w,r.w),this}clampScalar(e,r){return this.x=mt(this.x,e,r),this.y=mt(this.y,e,r),this.z=mt(this.z,e,r),this.w=mt(this.w,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lx extends ts{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=i.depth?i.depth:1,this.scissor=new Vt(0,0,e,r),this.scissorTest=!1,this.viewport=new Vt(0,0,e,r);const o={width:e,height:r,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const l=new Lr(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=r,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++){this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const o=Object.assign({},e.textures[r].image);this.textures[r].source=new oh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends Lx{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Tg extends Lr{constructor(e=null,r=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nx extends Lr{constructor(e=null,r=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,r=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=o}static slerpFlat(e,r,i,o,l,u,d){let f=i[o+0],p=i[o+1],_=i[o+2],g=i[o+3];const y=l[u+0],b=l[u+1],E=l[u+2],M=l[u+3];if(d===0){e[r+0]=f,e[r+1]=p,e[r+2]=_,e[r+3]=g;return}if(d===1){e[r+0]=y,e[r+1]=b,e[r+2]=E,e[r+3]=M;return}if(g!==M||f!==y||p!==b||_!==E){let x=1-d;const v=f*y+p*b+_*E+g*M,U=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const j=Math.sqrt(N),B=Math.atan2(j,v*U);x=Math.sin(x*B)/j,d=Math.sin(d*B)/j}const A=d*U;if(f=f*x+y*A,p=p*x+b*A,_=_*x+E*A,g=g*x+M*A,x===1-d){const j=1/Math.sqrt(f*f+p*p+_*_+g*g);f*=j,p*=j,_*=j,g*=j}}e[r]=f,e[r+1]=p,e[r+2]=_,e[r+3]=g}static multiplyQuaternionsFlat(e,r,i,o,l,u){const d=i[o],f=i[o+1],p=i[o+2],_=i[o+3],g=l[u],y=l[u+1],b=l[u+2],E=l[u+3];return e[r]=d*E+_*g+f*b-p*y,e[r+1]=f*E+_*y+p*g-d*b,e[r+2]=p*E+_*b+d*y-f*g,e[r+3]=_*E-d*g-f*y-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,o){return this._x=e,this._y=r,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(i/2),_=d(o/2),g=d(l/2),y=f(i/2),b=f(o/2),E=f(l/2);switch(u){case"XYZ":this._x=y*_*g+p*b*E,this._y=p*b*g-y*_*E,this._z=p*_*E+y*b*g,this._w=p*_*g-y*b*E;break;case"YXZ":this._x=y*_*g+p*b*E,this._y=p*b*g-y*_*E,this._z=p*_*E-y*b*g,this._w=p*_*g+y*b*E;break;case"ZXY":this._x=y*_*g-p*b*E,this._y=p*b*g+y*_*E,this._z=p*_*E+y*b*g,this._w=p*_*g-y*b*E;break;case"ZYX":this._x=y*_*g-p*b*E,this._y=p*b*g+y*_*E,this._z=p*_*E-y*b*g,this._w=p*_*g+y*b*E;break;case"YZX":this._x=y*_*g+p*b*E,this._y=p*b*g+y*_*E,this._z=p*_*E-y*b*g,this._w=p*_*g-y*b*E;break;case"XZY":this._x=y*_*g-p*b*E,this._y=p*b*g-y*_*E,this._z=p*_*E+y*b*g,this._w=p*_*g+y*b*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],o=r[4],l=r[8],u=r[1],d=r[5],f=r[9],p=r[2],_=r[6],g=r[10],y=i+d+g;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(_-f)*b,this._y=(l-p)*b,this._z=(u-o)*b}else if(i>d&&i>g){const b=2*Math.sqrt(1+i-d-g);this._w=(_-f)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(l+p)/b}else if(d>g){const b=2*Math.sqrt(1+d-i-g);this._w=(l-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(f+_)/b}else{const b=2*Math.sqrt(1+g-i-d);this._w=(u-o)/b,this._x=(l+p)/b,this._y=(f+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,r/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,o=e._y,l=e._z,u=e._w,d=r._x,f=r._y,p=r._z,_=r._w;return this._x=i*_+u*d+o*p-l*f,this._y=o*_+u*f+l*d-i*p,this._z=l*_+u*p+i*f-o*d,this._w=u*_-i*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+i*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=i,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const b=1-r;return this._w=b*u+r*this._w,this._x=b*i+r*this._x,this._y=b*o+r*this._y,this._z=b*l+r*this._z,this.normalize(),this}const p=Math.sqrt(f),_=Math.atan2(p,d),g=Math.sin((1-r)*_)/p,y=Math.sin(r*_)/p;return this._w=u*g+this._w*y,this._x=i*g+this._x*y,this._y=o*g+this._y*y,this._z=l*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(r),l*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,r=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(cm.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*r+l[3]*i+l[6]*o,this.y=l[1]*r+l[4]*i+l[7]*o,this.z=l[2]*r+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,o=this.z,l=e.elements,u=1/(l[3]*r+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*r+l[4]*i+l[8]*o+l[12])*u,this.y=(l[1]*r+l[5]*i+l[9]*o+l[13])*u,this.z=(l[2]*r+l[6]*i+l[10]*o+l[14])*u,this}applyQuaternion(e){const r=this.x,i=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*i),_=2*(d*r-l*o),g=2*(l*i-u*r);return this.x=r+f*p+u*g-d*_,this.y=i+f*_+d*p-l*g,this.z=o+f*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*r+l[4]*i+l[8]*o,this.y=l[1]*r+l[5]*i+l[9]*o,this.z=l[2]*r+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=mt(this.x,e.x,r.x),this.y=mt(this.y,e.y,r.y),this.z=mt(this.z,e.z,r.z),this}clampScalar(e,r){return this.x=mt(this.x,e,r),this.y=mt(this.y,e,r),this.z=mt(this.z,e,r),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,r))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,o=e.y,l=e.z,u=r.x,d=r.y,f=r.z;return this.x=o*f-l*d,this.y=l*u-i*f,this.z=i*d-o*u,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return r*r+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const o=Math.sin(r)*e;return this.x=o*Math.sin(i),this.y=Math.cos(r)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=o,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new ee,cm=new Ks;class Zs{constructor(e=new ee(1/0,1/0,1/0),r=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(rn.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(rn.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=rn.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(r===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,rn):rn.fromBufferAttribute(l,u),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),dl.subVectors(this.max,Os),Ia.subVectors(e.a,Os),Da.subVectors(e.b,Os),Oa.subVectors(e.c,Os),gi.subVectors(Da,Ia),vi.subVectors(Oa,Da),Xi.subVectors(Ia,Oa);let r=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Xi.z,Xi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Xi.z,0,-Xi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Xi.y,Xi.x,0];return!Ou(r,Ia,Da,Oa,dl)||(r=[1,0,0,0,1,0,0,0,1],!Ou(r,Ia,Da,Oa,dl))?!1:(hl.crossVectors(gi,vi),r=[hl.x,hl.y,hl.z],Ou(r,Ia,Da,Oa,dl))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],rn=new ee,ul=new Zs,Ia=new ee,Da=new ee,Oa=new ee,gi=new ee,vi=new ee,Xi=new ee,Os=new ee,dl=new ee,hl=new ee,$i=new ee;function Ou(a,e,r,i,o){for(let l=0,u=a.length-3;l<=u;l+=3){$i.fromArray(a,l);const d=o.x*Math.abs($i.x)+o.y*Math.abs($i.y)+o.z*Math.abs($i.z),f=e.dot($i),p=r.dot($i),_=i.dot($i);if(Math.max(-Math.max(f,p,_),Math.min(f,p,_))>d)return!1}return!0}const Ix=new Zs,ks=new ee,ku=new ee;class ql{constructor(e=new ee,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):Ix.setFromPoints(e).getCenter(i);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const r=ks.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),o=(i-this.radius)*.5;this.center.addScaledVector(ks,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ku)),this.expandByPoint(ks.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new ee,Fu=new ee,fl=new ee,_i=new ee,zu=new ee,pl=new ee,Bu=new ee;class wg{constructor(e=new ee,r=new ee(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Un.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,r),Un.distanceToSquared(e))}distanceSqToSegment(e,r,i,o){Fu.copy(e).add(r).multiplyScalar(.5),fl.copy(r).sub(e).normalize(),_i.copy(this.origin).sub(Fu);const l=e.distanceTo(r)*.5,u=-this.direction.dot(fl),d=_i.dot(this.direction),f=-_i.dot(fl),p=_i.lengthSq(),_=Math.abs(1-u*u);let g,y,b,E;if(_>0)if(g=u*f-d,y=u*d-f,E=l*_,g>=0)if(y>=-E)if(y<=E){const M=1/_;g*=M,y*=M,b=g*(g+u*y+2*d)+y*(u*g+y+2*f)+p}else y=l,g=Math.max(0,-(u*y+d)),b=-g*g+y*(y+2*f)+p;else y=-l,g=Math.max(0,-(u*y+d)),b=-g*g+y*(y+2*f)+p;else y<=-E?(g=Math.max(0,-(-u*l+d)),y=g>0?-l:Math.min(Math.max(-l,-f),l),b=-g*g+y*(y+2*f)+p):y<=E?(g=0,y=Math.min(Math.max(-l,-f),l),b=y*(y+2*f)+p):(g=Math.max(0,-(u*l+d)),y=g>0?l:Math.min(Math.max(-l,-f),l),b=-g*g+y*(y+2*f)+p);else y=u>0?-l:l,g=Math.max(0,-(u*y+d)),b=-g*g+y*(y+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Fu).addScaledVector(fl,y),b}intersectSphere(e,r){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),o=Un.dot(Un)-i*i,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=i-u,f=i+u;return f<0?null:d<0?this.at(f,r):this.at(d,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,o,l,u,d,f;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(i=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(i=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),i>u||l>o||((l>i||isNaN(i))&&(i=l),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-y.z)*g,f=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,f=(e.min.z-y.z)*g),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,r)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,r,i,o,l){zu.subVectors(r,e),pl.subVectors(i,e),Bu.crossVectors(zu,pl);let u=this.direction.dot(Bu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;_i.subVectors(this.origin,e);const f=d*this.direction.dot(pl.crossVectors(_i,pl));if(f<0)return null;const p=d*this.direction.dot(zu.cross(_i));if(p<0||f+p>u)return null;const _=-d*_i.dot(Bu);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,r,i,o,l,u,d,f,p,_,g,y,b,E,M,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,o,l,u,d,f,p,_,g,y,b,E,M,x)}set(e,r,i,o,l,u,d,f,p,_,g,y,b,E,M,x){const v=this.elements;return v[0]=e,v[4]=r,v[8]=i,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=f,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=b,v[7]=E,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,o=1/ka.setFromMatrixColumn(e,0).length(),l=1/ka.setFromMatrixColumn(e,1).length(),u=1/ka.setFromMatrixColumn(e,2).length();return r[0]=i[0]*o,r[1]=i[1]*o,r[2]=i[2]*o,r[3]=0,r[4]=i[4]*l,r[5]=i[5]*l,r[6]=i[6]*l,r[7]=0,r[8]=i[8]*u,r[9]=i[9]*u,r[10]=i[10]*u,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,o=e.y,l=e.z,u=Math.cos(i),d=Math.sin(i),f=Math.cos(o),p=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const y=u*_,b=u*g,E=d*_,M=d*g;r[0]=f*_,r[4]=-f*g,r[8]=p,r[1]=b+E*p,r[5]=y-M*p,r[9]=-d*f,r[2]=M-y*p,r[6]=E+b*p,r[10]=u*f}else if(e.order==="YXZ"){const y=f*_,b=f*g,E=p*_,M=p*g;r[0]=y+M*d,r[4]=E*d-b,r[8]=u*p,r[1]=u*g,r[5]=u*_,r[9]=-d,r[2]=b*d-E,r[6]=M+y*d,r[10]=u*f}else if(e.order==="ZXY"){const y=f*_,b=f*g,E=p*_,M=p*g;r[0]=y-M*d,r[4]=-u*g,r[8]=E+b*d,r[1]=b+E*d,r[5]=u*_,r[9]=M-y*d,r[2]=-u*p,r[6]=d,r[10]=u*f}else if(e.order==="ZYX"){const y=u*_,b=u*g,E=d*_,M=d*g;r[0]=f*_,r[4]=E*p-b,r[8]=y*p+M,r[1]=f*g,r[5]=M*p+y,r[9]=b*p-E,r[2]=-p,r[6]=d*f,r[10]=u*f}else if(e.order==="YZX"){const y=u*f,b=u*p,E=d*f,M=d*p;r[0]=f*_,r[4]=M-y*g,r[8]=E*g+b,r[1]=g,r[5]=u*_,r[9]=-d*_,r[2]=-p*_,r[6]=b*g+E,r[10]=y-M*g}else if(e.order==="XZY"){const y=u*f,b=u*p,E=d*f,M=d*p;r[0]=f*_,r[4]=-g,r[8]=p*_,r[1]=y*g+M,r[5]=u*_,r[9]=b*g-E,r[2]=E*g-b,r[6]=d*_,r[10]=M*g+y}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Ox)}lookAt(e,r,i){const o=this.elements;return zr.subVectors(e,r),zr.lengthSq()===0&&(zr.z=1),zr.normalize(),xi.crossVectors(i,zr),xi.lengthSq()===0&&(Math.abs(i.z)===1?zr.x+=1e-4:zr.z+=1e-4,zr.normalize(),xi.crossVectors(i,zr)),xi.normalize(),ml.crossVectors(zr,xi),o[0]=xi.x,o[4]=ml.x,o[8]=zr.x,o[1]=xi.y,o[5]=ml.y,o[9]=zr.y,o[2]=xi.z,o[6]=ml.z,o[10]=zr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,o=r.elements,l=this.elements,u=i[0],d=i[4],f=i[8],p=i[12],_=i[1],g=i[5],y=i[9],b=i[13],E=i[2],M=i[6],x=i[10],v=i[14],U=i[3],N=i[7],A=i[11],j=i[15],B=o[0],O=o[4],X=o[8],C=o[12],R=o[1],H=o[5],ae=o[9],te=o[13],ue=o[2],ve=o[6],oe=o[10],pe=o[14],F=o[3],ie=o[7],le=o[11],I=o[15];return l[0]=u*B+d*R+f*ue+p*F,l[4]=u*O+d*H+f*ve+p*ie,l[8]=u*X+d*ae+f*oe+p*le,l[12]=u*C+d*te+f*pe+p*I,l[1]=_*B+g*R+y*ue+b*F,l[5]=_*O+g*H+y*ve+b*ie,l[9]=_*X+g*ae+y*oe+b*le,l[13]=_*C+g*te+y*pe+b*I,l[2]=E*B+M*R+x*ue+v*F,l[6]=E*O+M*H+x*ve+v*ie,l[10]=E*X+M*ae+x*oe+v*le,l[14]=E*C+M*te+x*pe+v*I,l[3]=U*B+N*R+A*ue+j*F,l[7]=U*O+N*H+A*ve+j*ie,l[11]=U*X+N*ae+A*oe+j*le,l[15]=U*C+N*te+A*pe+j*I,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],_=e[2],g=e[6],y=e[10],b=e[14],E=e[3],M=e[7],x=e[11],v=e[15];return E*(+l*f*g-o*p*g-l*d*y+i*p*y+o*d*b-i*f*b)+M*(+r*f*b-r*p*y+l*u*y-o*u*b+o*p*_-l*f*_)+x*(+r*p*g-r*d*b-l*u*g+i*u*b+l*d*_-i*p*_)+v*(-o*d*_-r*f*g+r*d*y+o*u*g-i*u*y+i*f*_)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=r,o[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],g=e[9],y=e[10],b=e[11],E=e[12],M=e[13],x=e[14],v=e[15],U=g*x*p-M*y*p+M*f*b-d*x*b-g*f*v+d*y*v,N=E*y*p-_*x*p-E*f*b+u*x*b+_*f*v-u*y*v,A=_*M*p-E*g*p+E*d*b-u*M*b-_*d*v+u*g*v,j=E*g*f-_*M*f-E*d*y+u*M*y+_*d*x-u*g*x,B=r*U+i*N+o*A+l*j;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=U*O,e[1]=(M*y*l-g*x*l-M*o*b+i*x*b+g*o*v-i*y*v)*O,e[2]=(d*x*l-M*f*l+M*o*p-i*x*p-d*o*v+i*f*v)*O,e[3]=(g*f*l-d*y*l-g*o*p+i*y*p+d*o*b-i*f*b)*O,e[4]=N*O,e[5]=(_*x*l-E*y*l+E*o*b-r*x*b-_*o*v+r*y*v)*O,e[6]=(E*f*l-u*x*l-E*o*p+r*x*p+u*o*v-r*f*v)*O,e[7]=(u*y*l-_*f*l+_*o*p-r*y*p-u*o*b+r*f*b)*O,e[8]=A*O,e[9]=(E*g*l-_*M*l-E*i*b+r*M*b+_*i*v-r*g*v)*O,e[10]=(u*M*l-E*d*l+E*i*p-r*M*p-u*i*v+r*d*v)*O,e[11]=(_*d*l-u*g*l-_*i*p+r*g*p+u*i*b-r*d*b)*O,e[12]=j*O,e[13]=(_*M*o-E*g*o+E*i*y-r*M*y-_*i*x+r*g*x)*O,e[14]=(E*d*o-u*M*o-E*i*f+r*M*f+u*i*x-r*d*x)*O,e[15]=(u*g*o-_*d*o+_*i*f-r*g*f-u*i*y+r*d*y)*O,this}scale(e){const r=this.elements,i=e.x,o=e.y,l=e.z;return r[0]*=i,r[4]*=o,r[8]*=l,r[1]*=i,r[5]*=o,r[9]*=l,r[2]*=i,r[6]*=o,r[10]*=l,r[3]*=i,r[7]*=o,r[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,o))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),o=Math.sin(r),l=1-i,u=e.x,d=e.y,f=e.z,p=l*u,_=l*d;return this.set(p*u+i,p*d-o*f,p*f+o*d,0,p*d+o*f,_*d+i,_*f-o*u,0,p*f-o*d,_*f+o*u,l*f*f+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,o,l,u){return this.set(1,i,l,0,e,1,u,0,r,o,1,0,0,0,0,1),this}compose(e,r,i){const o=this.elements,l=r._x,u=r._y,d=r._z,f=r._w,p=l+l,_=u+u,g=d+d,y=l*p,b=l*_,E=l*g,M=u*_,x=u*g,v=d*g,U=f*p,N=f*_,A=f*g,j=i.x,B=i.y,O=i.z;return o[0]=(1-(M+v))*j,o[1]=(b+A)*j,o[2]=(E-N)*j,o[3]=0,o[4]=(b-A)*B,o[5]=(1-(y+v))*B,o[6]=(x+U)*B,o[7]=0,o[8]=(E+N)*O,o[9]=(x-U)*O,o[10]=(1-(y+M))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,r,i){const o=this.elements;let l=ka.set(o[0],o[1],o[2]).length();const u=ka.set(o[4],o[5],o[6]).length(),d=ka.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],nn.copy(this);const f=1/l,p=1/u,_=1/d;return nn.elements[0]*=f,nn.elements[1]*=f,nn.elements[2]*=f,nn.elements[4]*=p,nn.elements[5]*=p,nn.elements[6]*=p,nn.elements[8]*=_,nn.elements[9]*=_,nn.elements[10]*=_,r.setFromRotationMatrix(nn),i.x=l,i.y=u,i.z=d,this}makePerspective(e,r,i,o,l,u,d=Hn){const f=this.elements,p=2*l/(r-e),_=2*l/(i-o),g=(r+e)/(r-e),y=(i+o)/(i-o);let b,E;if(d===Hn)b=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Wl)b=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=_,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,r,i,o,l,u,d=Hn){const f=this.elements,p=1/(r-e),_=1/(i-o),g=1/(u-l),y=(r+e)*p,b=(i+o)*_;let E,M;if(d===Hn)E=(u+l)*g,M=-2*g;else if(d===Wl)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*_,f[9]=0,f[13]=-b,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let o=0;o<16;o++)if(r[o]!==i[o])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const ka=new ee,nn=new Gt,Dx=new ee(0,0,0),Ox=new ee(1,1,1),xi=new ee,ml=new ee,zr=new ee,um=new Gt,dm=new Ks;class jn{constructor(e=0,r=0,i=0,o=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,o=this._order){return this._x=e,this._y=r,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],_=o[9],g=o[2],y=o[6],b=o[10];switch(r){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kx=0;const hm=new ee,Fa=new Ks,Ln=new Gt,gl=new ee,Fs=new ee,Fx=new ee,zx=new Ks,fm=new ee(1,0,0),pm=new ee(0,1,0),mm=new ee(0,0,1),gm={type:"added"},Bx={type:"removed"},za={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Nr extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nr.DEFAULT_UP.clone();const e=new ee,r=new jn,i=new Ks,o=new ee(1,1,1);function l(){i.setFromEuler(r,!1)}function u(){r.setFromQuaternion(i,void 0,!1)}r._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new st}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Nr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Fa.setFromAxisAngle(e,r),this.quaternion.multiply(Fa),this}rotateOnWorldAxis(e,r){return Fa.setFromAxisAngle(e,r),this.quaternion.premultiply(Fa),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,r){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?gl.copy(e):gl.set(e,r,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Fs,gl,this.up):Ln.lookAt(gl,Fs,this.up),this.quaternion.setFromRotationMatrix(Ln),o&&(Ln.extractRotation(o.matrixWorld),Fa.setFromRotationMatrix(Ln),this.quaternion.premultiply(Fa.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),za.child=e,this.dispatchEvent(za),za.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Bx),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,o=this.children.length;i<o;i++){const l=this.children[i].getObjectByProperty(e,r);if(l!==void 0)return l}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,o=r.length;i<o;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,_=f.length;p<_;p++){const g=f[p];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(r){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),y=u(e.skeletons),b=u(e.animations),E=u(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),_.length>0&&(i.images=_),g.length>0&&(i.shapes=g),y.length>0&&(i.skeletons=y),b.length>0&&(i.animations=b),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(d){const f=[];for(const p in d){const _=d[p];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Nr.DEFAULT_UP=new ee(0,1,0);Nr.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new ee,Nn=new ee,Vu=new ee,In=new ee,Ba=new ee,Ha=new ee,vm=new ee,Gu=new ee,Wu=new ee,ju=new ee,Xu=new Vt,$u=new Vt,Yu=new Vt;class on{constructor(e=new ee,r=new ee,i=new ee){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,o){o.subVectors(i,r),an.subVectors(e,r),o.cross(an);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,r,i,o,l){an.subVectors(o,r),Nn.subVectors(i,r),Vu.subVectors(e,r);const u=an.dot(an),d=an.dot(Nn),f=an.dot(Vu),p=Nn.dot(Nn),_=Nn.dot(Vu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const y=1/g,b=(p*f-d*_)*y,E=(u*_-d*f)*y;return l.set(1-b-E,E,b)}static containsPoint(e,r,i,o){return this.getBarycoord(e,r,i,o,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,r,i,o,l,u,d,f){return this.getBarycoord(e,r,i,o,In)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,In.x),f.addScaledVector(u,In.y),f.addScaledVector(d,In.z),f)}static getInterpolatedAttribute(e,r,i,o,l,u){return Xu.setScalar(0),$u.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,r),$u.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Xu,l.x),u.addScaledVector($u,l.y),u.addScaledVector(Yu,l.z),u}static isFrontFacing(e,r,i,o){return an.subVectors(i,r),Nn.subVectors(e,r),an.cross(Nn).dot(o)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,o){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,r,i,o){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),an.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return on.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,o,l){return on.getInterpolation(e,this.a,this.b,this.c,r,i,o,l)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,o=this.b,l=this.c;let u,d;Ba.subVectors(o,i),Ha.subVectors(l,i),Gu.subVectors(e,i);const f=Ba.dot(Gu),p=Ha.dot(Gu);if(f<=0&&p<=0)return r.copy(i);Wu.subVectors(e,o);const _=Ba.dot(Wu),g=Ha.dot(Wu);if(_>=0&&g<=_)return r.copy(o);const y=f*g-_*p;if(y<=0&&f>=0&&_<=0)return u=f/(f-_),r.copy(i).addScaledVector(Ba,u);ju.subVectors(e,l);const b=Ba.dot(ju),E=Ha.dot(ju);if(E>=0&&b<=E)return r.copy(l);const M=b*p-f*E;if(M<=0&&p>=0&&E<=0)return d=p/(p-E),r.copy(i).addScaledVector(Ha,d);const x=_*E-b*g;if(x<=0&&g-_>=0&&b-E>=0)return vm.subVectors(l,o),d=(g-_)/(g-_+(b-E)),r.copy(o).addScaledVector(vm,d);const v=1/(x+M+y);return u=M*v,d=y*v,r.copy(i).addScaledVector(Ba,u).addScaledVector(Ha,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},vl={h:0,s:0,l:0};function qu(a,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(e-a)*6*r:r<1/2?e:r<2/3?a+(e-a)*6*(2/3-r):a}class Tt{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Yr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,r),this}setRGB(e,r,i,o=bt.workingColorSpace){return this.r=e,this.g=r,this.b=i,bt.toWorkingColorSpace(this,o),this}setHSL(e,r,i,o=bt.workingColorSpace){if(e=Mx(e,1),r=mt(r,0,1),i=mt(i,0,1),r===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+r):i+r-i*r,u=2*i-l;this.r=qu(u,l,e+1/3),this.g=qu(u,l,e),this.b=qu(u,l,e-1/3)}return bt.toWorkingColorSpace(this,o),this}setStyle(e,r=Yr){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,r);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,r);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,r);if(u===6)return this.setHex(parseInt(l,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Yr){const i=Ag[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yr){return bt.fromWorkingColorSpace(pr.copy(this),e),Math.round(mt(pr.r*255,0,255))*65536+Math.round(mt(pr.g*255,0,255))*256+Math.round(mt(pr.b*255,0,255))}getHexString(e=Yr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=bt.workingColorSpace){bt.fromWorkingColorSpace(pr.copy(this),r);const i=pr.r,o=pr.g,l=pr.b,u=Math.max(i,o,l),d=Math.min(i,o,l);let f,p;const _=(d+u)/2;if(d===u)f=0,p=0;else{const g=u-d;switch(p=_<=.5?g/(u+d):g/(2-u-d),u){case i:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-i)/g+2;break;case l:f=(i-o)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=_,e}getRGB(e,r=bt.workingColorSpace){return bt.fromWorkingColorSpace(pr.copy(this),r),e.r=pr.r,e.g=pr.g,e.b=pr.b,e}getStyle(e=Yr){bt.fromWorkingColorSpace(pr.copy(this),e);const r=pr.r,i=pr.g,o=pr.b;return e!==Yr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,r,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+r,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(yi),e.getHSL(vl);const i=Lu(yi.h,vl.h,r),o=Lu(yi.s,vl.s,r),l=Lu(yi.l,vl.l,r);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*r+l[3]*i+l[6]*o,this.g=l[1]*r+l[4]*i+l[7]*o,this.b=l[2]*r+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pr=new Tt;Tt.NAMES=Ag;let Hx=0;class Js extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=$a,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const o=this[r];if(o===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$a&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==ea&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(i.stencilFail=this.stencilFail),this.stencilZFail!==La&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(r){const l=o(e.textures),u=o(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const o=r.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=r[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cg extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new ee,_l=new Pt;let Vx=0;class _n{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vx++}),this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=im,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=r.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)_l.fromBufferAttribute(this,r),_l.applyMatrix3(e),this.setXY(r,_l.x,_l.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)Xt.fromBufferAttribute(this,r),Xt.applyMatrix3(e),this.setXYZ(r,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)Xt.fromBufferAttribute(this,r),Xt.applyMatrix4(e),this.setXYZ(r,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)Xt.fromBufferAttribute(this,r),Xt.applyNormalMatrix(e),this.setXYZ(r,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)Xt.fromBufferAttribute(this,r),Xt.transformDirection(e),this.setXYZ(r,Xt.x,Xt.y,Xt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Cr(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Ds(r,this.array)),r}setX(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Ds(r,this.array)),r}setY(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Ds(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Ds(r,this.array)),r}setW(e,r){return this.normalized&&(r=Cr(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),i=Cr(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,o){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),i=Cr(i,this.array),o=Cr(o,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,r,i,o,l){return e*=this.itemSize,this.normalized&&(r=Cr(r,this.array),i=Cr(i,this.array),o=Cr(o,this.array),l=Cr(l,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class Pg extends _n{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class Ug extends _n{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class Ci extends _n{constructor(e,r,i){super(new Float32Array(e),r,i)}}let Gx=0;const $r=new Gt,Ku=new Nr,Va=new ee,Br=new Zs,zs=new Zs,ir=new ee;class Xn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Ug:Pg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new st().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $r.makeRotationFromQuaternion(e),this.applyMatrix4($r),this}rotateX(e){return $r.makeRotationX(e),this.applyMatrix4($r),this}rotateY(e){return $r.makeRotationY(e),this.applyMatrix4($r),this}rotateZ(e){return $r.makeRotationZ(e),this.applyMatrix4($r),this}translate(e,r,i){return $r.makeTranslation(e,r,i),this.applyMatrix4($r),this}scale(e,r,i){return $r.makeScale(e,r,i),this.applyMatrix4($r),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Va).negate(),this.translate(Va.x,Va.y,Va.z),this}setFromPoints(e){const r=this.getAttribute("position");if(r===void 0){const i=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,r.count);for(let o=0;o<i;o++){const l=e[o];r.setXYZ(o,l.x,l.y,l.z||0)}e.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,o=r.length;i<o;i++){const l=r[i];Br.setFromBufferAttribute(l),this.morphTargetsRelative?(ir.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(ir),ir.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(ir)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),r)for(let l=0,u=r.length;l<u;l++){const d=r[l];zs.setFromBufferAttribute(d),this.morphTargetsRelative?(ir.addVectors(Br.min,zs.min),Br.expandByPoint(ir),ir.addVectors(Br.max,zs.max),Br.expandByPoint(ir)):(Br.expandByPoint(zs.min),Br.expandByPoint(zs.max))}Br.getCenter(i);let o=0;for(let l=0,u=e.count;l<u;l++)ir.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(ir));if(r)for(let l=0,u=r.length;l<u;l++){const d=r[l],f=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ir.fromBufferAttribute(d,p),f&&(Va.fromBufferAttribute(e,p),ir.add(Va)),o=Math.max(o,i.distanceToSquared(ir))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,o=r.normal,l=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let X=0;X<i.count;X++)d[X]=new ee,f[X]=new ee;const p=new ee,_=new ee,g=new ee,y=new Pt,b=new Pt,E=new Pt,M=new ee,x=new ee;function v(X,C,R){p.fromBufferAttribute(i,X),_.fromBufferAttribute(i,C),g.fromBufferAttribute(i,R),y.fromBufferAttribute(l,X),b.fromBufferAttribute(l,C),E.fromBufferAttribute(l,R),_.sub(p),g.sub(p),b.sub(y),E.sub(y);const H=1/(b.x*E.y-E.x*b.y);isFinite(H)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(H),x.copy(g).multiplyScalar(b.x).addScaledVector(_,-E.x).multiplyScalar(H),d[X].add(M),d[C].add(M),d[R].add(M),f[X].add(x),f[C].add(x),f[R].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,C=U.length;X<C;++X){const R=U[X],H=R.start,ae=R.count;for(let te=H,ue=H+ae;te<ue;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const N=new ee,A=new ee,j=new ee,B=new ee;function O(X){j.fromBufferAttribute(o,X),B.copy(j);const C=d[X];N.copy(C),N.sub(j.multiplyScalar(j.dot(C))).normalize(),A.crossVectors(B,C);const R=A.dot(f[X])<0?-1:1;u.setXYZW(X,N.x,N.y,N.z,R)}for(let X=0,C=U.length;X<C;++X){const R=U[X],H=R.start,ae=R.count;for(let te=H,ue=H+ae;te<ue;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let y=0,b=i.count;y<b;y++)i.setXYZ(y,0,0,0);const o=new ee,l=new ee,u=new ee,d=new ee,f=new ee,p=new ee,_=new ee,g=new ee;if(e)for(let y=0,b=e.count;y<b;y+=3){const E=e.getX(y+0),M=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(r,E),l.fromBufferAttribute(r,M),u.fromBufferAttribute(r,x),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),p.fromBufferAttribute(i,x),d.add(_),f.add(_),p.add(_),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,b=r.count;y<b;y+=3)o.fromBufferAttribute(r,y+0),l.fromBufferAttribute(r,y+1),u.fromBufferAttribute(r,y+2),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),i.setXYZ(y+0,_.x,_.y,_.z),i.setXYZ(y+1,_.x,_.y,_.z),i.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)ir.fromBufferAttribute(e,r),ir.normalize(),e.setXYZ(r,ir.x,ir.y,ir.z)}toNonIndexed(){function e(d,f){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(f.length*_);let b=0,E=0;for(let M=0,x=f.length;M<x;M++){d.isInterleavedBufferAttribute?b=f[M]*d.data.stride+d.offset:b=f[M]*_;for(let v=0;v<_;v++)y[E++]=p[b++]}return new _n(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Xn,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,i);r.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],b=e(y,i);f.push(b)}r.morphAttributes[d]=f}r.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];r.addGroup(p.start,p.count,p.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],_=[];for(let g=0,y=p.length;g<y;g++){const b=p[g];_.push(b.toJSON(e.data))}_.length>0&&(o[f]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(r))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let y=0,b=g.length;y<b;y++)_.push(g[y].clone(r));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Gt,Yi=new wg,xl=new ql,xm=new ee,yl=new ee,bl=new ee,Sl=new ee,Zu=new ee,Ml=new ee,ym=new ee,El=new ee;class Vn extends Nr{constructor(e=new Xn,r=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const u=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,r){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;r.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ml.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const _=d[f],g=l[f];_!==0&&(Zu.fromBufferAttribute(g,e),u?Ml.addScaledVector(Zu,_):Ml.addScaledVector(Zu.sub(r),_))}r.add(Ml)}return r}raycast(e,r){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(l),Yi.copy(e.ray).recast(e.near),!(xl.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(xl,xm)===null||Yi.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(_m.copy(l).invert(),Yi.copy(e.ray).applyMatrix4(_m),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Yi)))}_computeIntersections(e,r,i){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,y=l.groups,b=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,M=y.length;E<M;E++){const x=y[E],v=u[x.materialIndex],U=Math.max(x.start,b.start),N=Math.min(d.count,Math.min(x.start+x.count,b.start+b.count));for(let A=U,j=N;A<j;A+=3){const B=d.getX(A),O=d.getX(A+1),X=d.getX(A+2);o=Tl(this,v,e,i,p,_,g,B,O,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,r.push(o))}}else{const E=Math.max(0,b.start),M=Math.min(d.count,b.start+b.count);for(let x=E,v=M;x<v;x+=3){const U=d.getX(x),N=d.getX(x+1),A=d.getX(x+2);o=Tl(this,u,e,i,p,_,g,U,N,A),o&&(o.faceIndex=Math.floor(x/3),r.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,M=y.length;E<M;E++){const x=y[E],v=u[x.materialIndex],U=Math.max(x.start,b.start),N=Math.min(f.count,Math.min(x.start+x.count,b.start+b.count));for(let A=U,j=N;A<j;A+=3){const B=A,O=A+1,X=A+2;o=Tl(this,v,e,i,p,_,g,B,O,X),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,r.push(o))}}else{const E=Math.max(0,b.start),M=Math.min(f.count,b.start+b.count);for(let x=E,v=M;x<v;x+=3){const U=x,N=x+1,A=x+2;o=Tl(this,u,e,i,p,_,g,U,N,A),o&&(o.faceIndex=Math.floor(x/3),r.push(o))}}}}function Wx(a,e,r,i,o,l,u,d){let f;if(e.side===Ur?f=i.intersectTriangle(u,l,o,!0,d):f=i.intersectTriangle(o,l,u,e.side===Pi,d),f===null)return null;El.copy(d),El.applyMatrix4(a.matrixWorld);const p=r.ray.origin.distanceTo(El);return p<r.near||p>r.far?null:{distance:p,point:El.clone(),object:a}}function Tl(a,e,r,i,o,l,u,d,f,p){a.getVertexPosition(d,yl),a.getVertexPosition(f,bl),a.getVertexPosition(p,Sl);const _=Wx(a,e,r,i,yl,bl,Sl,ym);if(_){const g=new ee;on.getBarycoord(ym,yl,bl,Sl,g),o&&(_.uv=on.getInterpolatedAttribute(o,d,f,p,g,new Pt)),l&&(_.uv1=on.getInterpolatedAttribute(l,d,f,p,g,new Pt)),u&&(_.normal=on.getInterpolatedAttribute(u,d,f,p,g,new ee),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new ee,materialIndex:0};on.getNormal(yl,bl,Sl,y.normal),_.face=y,_.barycoord=g}return _}class Qs extends Xn{constructor(e=1,r=1,i=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],_=[],g=[];let y=0,b=0;E("z","y","x",-1,-1,i,r,e,u,l,0),E("z","y","x",1,-1,i,r,-e,u,l,1),E("x","z","y",1,1,e,i,r,o,u,2),E("x","z","y",1,-1,e,i,-r,o,u,3),E("x","y","z",1,-1,e,r,i,o,l,4),E("x","y","z",-1,-1,e,r,-i,o,l,5),this.setIndex(f),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(g,2));function E(M,x,v,U,N,A,j,B,O,X,C){const R=A/O,H=j/X,ae=A/2,te=j/2,ue=B/2,ve=O+1,oe=X+1;let pe=0,F=0;const ie=new ee;for(let le=0;le<oe;le++){const I=le*H-te;for(let re=0;re<ve;re++){const De=re*R-ae;ie[M]=De*U,ie[x]=I*N,ie[v]=ue,p.push(ie.x,ie.y,ie.z),ie[M]=0,ie[x]=0,ie[v]=B>0?1:-1,_.push(ie.x,ie.y,ie.z),g.push(re/O),g.push(1-le/X),pe+=1}}for(let le=0;le<X;le++)for(let I=0;I<O;I++){const re=y+I+ve*le,De=y+I+ve*(le+1),Z=y+(I+1)+ve*(le+1),de=y+(I+1)+ve*le;f.push(re,De,de),f.push(De,Z,de),F+=6}d.addGroup(b,F,C),b+=F,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(a){const e={};for(const r in a){e[r]={};for(const i in a[r]){const o=a[r][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=o.clone():Array.isArray(o)?e[r][i]=o.slice():e[r][i]=o}}return e}function br(a){const e={};for(let r=0;r<a.length;r++){const i=Qa(a[r]);for(const o in i)e[o]=i[o]}return e}function jx(a){const e=[];for(let r=0;r<a.length;r++)e.push(a[r].clone());return e}function Lg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Xx={clone:Qa,merge:br};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const o in this.uniforms){const l=this.uniforms[o].value;l&&l.isTexture?r.uniforms[o]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?r.uniforms[o]={type:"c",value:l.getHex()}:l&&l.isVector2?r.uniforms[o]={type:"v2",value:l.toArray()}:l&&l.isVector3?r.uniforms[o]={type:"v3",value:l.toArray()}:l&&l.isVector4?r.uniforms[o]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?r.uniforms[o]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?r.uniforms[o]={type:"m4",value:l.toArray()}:r.uniforms[o]={value:l}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class Ng extends Nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Hn}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new ee,bm=new Pt,Sm=new Pt;class qr extends Ng{constructor(e=50,r=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,r){return this.getViewBounds(e,bm,Sm),r.subVectors(Sm,bm)}setViewOffset(e,r,i,o,l,u){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Uu*.5*this.fov)/this.zoom,i=2*r,o=this.aspect*i,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,r-=u.offsetY*i/p,o*=u.width/f,i*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Ga=-90,Wa=1;class qx extends Nr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qr(Ga,Wa,e,r);o.layers=this.layers,this.add(o);const l=new qr(Ga,Wa,e,r);l.layers=this.layers,this.add(l);const u=new qr(Ga,Wa,e,r);u.layers=this.layers,this.add(u);const d=new qr(Ga,Wa,e,r);d.layers=this.layers,this.add(d);const f=new qr(Ga,Wa,e,r);f.layers=this.layers,this.add(f);const p=new qr(Ga,Wa,e,r);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,o,l,u,d,f]=r;for(const p of r)this.remove(p);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of r)this.add(p),p.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(r,l),e.setRenderTarget(i,1,o),e.render(r,u),e.setRenderTarget(i,2,o),e.render(r,d),e.setRenderTarget(i,3,o),e.render(r,f),e.setRenderTarget(i,4,o),e.render(r,p),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(r,_),e.setRenderTarget(g,y,b),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Ig extends Lr{constructor(e=[],r=Ka,i,o,l,u,d,f,p,_){super(e,r,i,o,l,u,d,f,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends aa{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Ig(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:vn}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Qs(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ur,blending:Ri});l.uniforms.tEquirect.value=r;const u=new Vn(o,l),d=r.minFilter;return r.minFilter===na&&(r.minFilter=vn),new qx(1,10,this).update(e,u),r.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,r=!0,i=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(r,i,o);e.setRenderTarget(l)}}class wl extends Nr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const M of e.hand.values()){const x=r.getJointPose(M,i),v=this._getHandJoint(p,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&y>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=r.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=r.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}class Jx extends Nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}const Qu=new ee,Qx=new ee,ey=new st;class Ji{constructor(e=new ee(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,o){return this.normal.set(e,r,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const o=Qu.subVectors(i,r).cross(Qx.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Qu),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:r.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||ey.getNormalMatrix(e),o=this.coplanarPoint(Qu).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new ql,Rl=new ee;class Dg{constructor(e=new Ji,r=new Ji,i=new Ji,o=new Ji,l=new Ji,u=new Ji){this.planes=[e,r,i,o,l,u]}set(e,r,i,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(r),d[2].copy(i),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=Hn){const i=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],_=o[5],g=o[6],y=o[7],b=o[8],E=o[9],M=o[10],x=o[11],v=o[12],U=o[13],N=o[14],A=o[15];if(i[0].setComponents(f-l,y-p,x-b,A-v).normalize(),i[1].setComponents(f+l,y+p,x+b,A+v).normalize(),i[2].setComponents(f+u,y+_,x+E,A+U).normalize(),i[3].setComponents(f-u,y-_,x-E,A-U).normalize(),i[4].setComponents(f-d,y-g,x-M,A-N).normalize(),r===Hn)i[5].setComponents(f+d,y+g,x+M,A+N).normalize();else if(r===Wl)i[5].setComponents(d,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),qi.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const r=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(r[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const o=r[i];if(Rl.x=o.normal.x>0?e.max.x:e.min.x,Rl.y=o.normal.y>0?e.max.y:e.min.y,Rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Og extends Js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mm=new Gt,qd=new wg,Al=new ql,Cl=new ee;class ty extends Nr{constructor(e=new Xn,r=new Og){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(o),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Mm.copy(o).invert(),qd.copy(e.ray).applyMatrix4(Mm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=i.index,_=i.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let b=g,E=y;b<E;b++){const M=p.getX(b);Cl.fromBufferAttribute(_,M),Em(Cl,M,f,o,e,r,this)}}else{const g=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let b=g,E=y;b<E;b++)Cl.fromBufferAttribute(_,b),Em(Cl,b,f,o,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const u=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Em(a,e,r,i,o,l,u){const d=qd.distanceSqToPoint(a);if(d<r){const f=new ee;qd.closestPointToPoint(a,f),f.applyMatrix4(i);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class kg extends Lr{constructor(e,r,i=ia,o,l,u,d=cn,f=cn,p,_=js){if(_!==js&&_!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,u,d,f,_,i,p),this.isDepthTexture=!0,this.image={width:e,height:r},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class Kl extends Xn{constructor(e=1,r=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:o};const l=e/2,u=r/2,d=Math.floor(i),f=Math.floor(o),p=d+1,_=f+1,g=e/d,y=r/f,b=[],E=[],M=[],x=[];for(let v=0;v<_;v++){const U=v*y-u;for(let N=0;N<p;N++){const A=N*g-l;E.push(A,-U,0),M.push(0,0,1),x.push(N/d),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let U=0;U<d;U++){const N=U+p*v,A=U+p*(v+1),j=U+1+p*(v+1),B=U+1+p*v;b.push(N,A,B),b.push(A,j,B)}this.setIndex(b),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(M,3)),this.setAttribute("uv",new Ci(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ry extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ny extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iy extends Ng{constructor(e=-1,r=1,i=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,u=i+e,d=o+r,f=o-r;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,f=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}class ay extends qr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tm(a,e,r,i){const o=sy(i);switch(r){case _g:return a*e;case yg:return a*e/o.components*o.byteLength;case ih:return a*e/o.components*o.byteLength;case bg:return a*e*2/o.components*o.byteLength;case ah:return a*e*2/o.components*o.byteLength;case xg:return a*e*3/o.components*o.byteLength;case ln:return a*e*4/o.components*o.byteLength;case sh:return a*e*4/o.components*o.byteLength;case Dl:case Ol:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case kl:case Fl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Md:case Td:return Math.max(a,16)*Math.max(e,8)/4;case Sd:case Ed:return Math.max(a,8)*Math.max(e,8)/2;case wd:case Rd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case zl:case Gd:case Wd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Sg:case jd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Xd:case $d:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function sy(a){switch(a){case Wn:case mg:return{byteLength:1,components:1};case Gs:case gg:case Ys:return{byteLength:2,components:1};case rh:case nh:return{byteLength:2,components:4};case ia:case th:case Bn:return{byteLength:4,components:1};case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Fg(){let a=null,e=!1,r=null,i=null;function o(l,u){r(l,u),i=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&r!==null&&(i=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){r=l},setContext:function(l){a=l}}}function oy(a){const e=new WeakMap;function r(d,f){const p=d.array,_=d.usage,g=p.byteLength,y=a.createBuffer();a.bindBuffer(f,y),a.bufferData(f,p,_),d.onUploadCallback();let b;if(p instanceof Float32Array)b=a.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=a.SHORT;else if(p instanceof Uint32Array)b=a.UNSIGNED_INT;else if(p instanceof Int32Array)b=a.INT;else if(p instanceof Int8Array)b=a.BYTE;else if(p instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function i(d,f,p){const _=f.array,g=f.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,_);else{g.sort((b,E)=>b.start-E.start);let y=0;for(let b=1;b<g.length;b++){const E=g[y],M=g[b];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,g[y]=M)}g.length=y+1;for(let b=0,E=g.length;b<E;b++){const M=g[b];a.bufferSubData(p,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(a.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,r(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ub=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Db=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:dy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:vy,begin_vertex:_y,beginnormal_vertex:xy,bsdfs:yy,iridescence_fragment:by,bumpmap_pars_fragment:Sy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:wy,color_fragment:Ry,color_pars_fragment:Ay,color_pars_vertex:Cy,color_vertex:Py,common:Uy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Iy,displacementmap_vertex:Dy,emissivemap_fragment:Oy,emissivemap_pars_fragment:ky,colorspace_fragment:Fy,colorspace_pars_fragment:zy,envmap_fragment:By,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Vy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:eb,envmap_vertex:Wy,fog_vertex:jy,fog_pars_vertex:Xy,fog_fragment:$y,fog_pars_fragment:Yy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Jy,lights_pars_begin:Qy,lights_toon_fragment:tb,lights_toon_pars_fragment:rb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:ab,lights_physical_pars_fragment:sb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:cb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:fb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:vb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:xb,morphinstance_vertex:yb,morphcolor_vertex:bb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Eb,normal_fragment_begin:Tb,normal_fragment_maps:wb,normal_pars_fragment:Rb,normal_pars_vertex:Ab,normal_vertex:Cb,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Ib,opaque_fragment:Db,packing:Ob,premultiplied_alpha_fragment:kb,project_vertex:Fb,dithering_fragment:zb,dithering_pars_fragment:Bb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Wb,shadowmap_vertex:jb,shadowmask_pars_fragment:Xb,skinbase_vertex:$b,skinning_pars_vertex:Yb,skinning_vertex:qb,skinnormal_vertex:Kb,specularmap_fragment:Zb,specularmap_pars_fragment:Jb,tonemapping_fragment:Qb,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:rS,uv_pars_fragment:nS,uv_pars_vertex:iS,uv_vertex:aS,worldpos_vertex:sS,background_vert:oS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:dS,cube_frag:hS,depth_vert:fS,depth_frag:pS,distanceRGBA_vert:mS,distanceRGBA_frag:gS,equirect_vert:vS,equirect_frag:_S,linedashed_vert:xS,linedashed_frag:yS,meshbasic_vert:bS,meshbasic_frag:SS,meshlambert_vert:MS,meshlambert_frag:ES,meshmatcap_vert:TS,meshmatcap_frag:wS,meshnormal_vert:RS,meshnormal_frag:AS,meshphong_vert:CS,meshphong_frag:PS,meshphysical_vert:US,meshphysical_frag:LS,meshtoon_vert:NS,meshtoon_frag:IS,points_vert:DS,points_frag:OS,shadow_vert:kS,shadow_frag:FS,sprite_vert:zS,sprite_frag:BS},Pe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gn={basic:{uniforms:br([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:br([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:br([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:br([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:br([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:br([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:br([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:br([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:br([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:br([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:br([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:br([Pe.common,Pe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:br([Pe.lights,Pe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gn.physical={uniforms:br([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Pl={r:0,b:0,g:0},Ki=new jn,HS=new Gt;function VS(a,e,r,i,o,l,u){const d=new Tt(0);let f=l===!0?0:1,p,_,g=null,y=0,b=null;function E(N){let A=N.isScene===!0?N.background:null;return A&&A.isTexture&&(A=(N.backgroundBlurriness>0?r:e).get(A)),A}function M(N){let A=!1;const j=E(N);j===null?v(d,f):j&&j.isColor&&(v(j,1),A=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(a.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(N,A){const j=E(A);j&&(j.isCubeTexture||j.mapping===Yl)?(_===void 0&&(_=new Vn(new Qs(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Qa(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Ki.copy(A.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),_.material.uniforms.envMap.value=j,_.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(HS.makeRotationFromEuler(Ki)),_.material.toneMapped=bt.getTransfer(j.colorSpace)!==At,(g!==j||y!==j.version||b!==a.toneMapping)&&(_.material.needsUpdate=!0,g=j,y=j.version,b=a.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Vn(new Kl(2,2),new Ui({name:"BackgroundMaterial",uniforms:Qa(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=bt.getTransfer(j.colorSpace)!==At,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(g!==j||y!==j.version||b!==a.toneMapping)&&(p.material.needsUpdate=!0,g=j,y=j.version,b=a.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,A){N.getRGB(Pl,Lg(a)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,A,u)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,A=1){d.set(N),f=A,v(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,v(d,f)},render:M,addToRenderList:x,dispose:U}}function GS(a,e){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},o=y(null);let l=o,u=!1;function d(R,H,ae,te,ue){let ve=!1;const oe=g(te,ae,H);l!==oe&&(l=oe,p(l.object)),ve=b(R,te,ae,ue),ve&&E(R,te,ae,ue),ue!==null&&e.update(ue,a.ELEMENT_ARRAY_BUFFER),(ve||u)&&(u=!1,A(R,H,ae,te),ue!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return a.createVertexArray()}function p(R){return a.bindVertexArray(R)}function _(R){return a.deleteVertexArray(R)}function g(R,H,ae){const te=ae.wireframe===!0;let ue=i[R.id];ue===void 0&&(ue={},i[R.id]=ue);let ve=ue[H.id];ve===void 0&&(ve={},ue[H.id]=ve);let oe=ve[te];return oe===void 0&&(oe=y(f()),ve[te]=oe),oe}function y(R){const H=[],ae=[],te=[];for(let ue=0;ue<r;ue++)H[ue]=0,ae[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ae,attributeDivisors:te,object:R,attributes:{},index:null}}function b(R,H,ae,te){const ue=l.attributes,ve=H.attributes;let oe=0;const pe=ae.getAttributes();for(const F in pe)if(pe[F].location>=0){const ie=ue[F];let le=ve[F];if(le===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;oe++}return l.attributesNum!==oe||l.index!==te}function E(R,H,ae,te){const ue={},ve=H.attributes;let oe=0;const pe=ae.getAttributes();for(const F in pe)if(pe[F].location>=0){let ie=ve[F];ie===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),ue[F]=le,oe++}l.attributes=ue,l.attributesNum=oe,l.index=te}function M(){const R=l.newAttributes;for(let H=0,ae=R.length;H<ae;H++)R[H]=0}function x(R){v(R,0)}function v(R,H){const ae=l.newAttributes,te=l.enabledAttributes,ue=l.attributeDivisors;ae[R]=1,te[R]===0&&(a.enableVertexAttribArray(R),te[R]=1),ue[R]!==H&&(a.vertexAttribDivisor(R,H),ue[R]=H)}function U(){const R=l.newAttributes,H=l.enabledAttributes;for(let ae=0,te=H.length;ae<te;ae++)H[ae]!==R[ae]&&(a.disableVertexAttribArray(ae),H[ae]=0)}function N(R,H,ae,te,ue,ve,oe){oe===!0?a.vertexAttribIPointer(R,H,ae,ue,ve):a.vertexAttribPointer(R,H,ae,te,ue,ve)}function A(R,H,ae,te){M();const ue=te.attributes,ve=ae.getAttributes(),oe=H.defaultAttributeValues;for(const pe in ve){const F=ve[pe];if(F.location>=0){let ie=ue[pe];if(ie===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){const le=ie.normalized,I=ie.itemSize,re=e.get(ie);if(re===void 0)continue;const De=re.buffer,Z=re.type,de=re.bytesPerElement,Ee=Z===a.INT||Z===a.UNSIGNED_INT||ie.gpuType===th;if(ie.isInterleavedBufferAttribute){const ye=ie.data,Re=ye.stride,Oe=ie.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<F.locationSize;Qe++)v(F.location+Qe,ye.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<F.locationSize;Qe++)x(F.location+Qe);a.bindBuffer(a.ARRAY_BUFFER,De);for(let Qe=0;Qe<F.locationSize;Qe++)N(F.location+Qe,I/F.locationSize,Z,le,Re*de,(Oe+I/F.locationSize*Qe)*de,Ee)}else{if(ie.isInstancedBufferAttribute){for(let ye=0;ye<F.locationSize;ye++)v(F.location+ye,ie.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<F.locationSize;ye++)x(F.location+ye);a.bindBuffer(a.ARRAY_BUFFER,De);for(let ye=0;ye<F.locationSize;ye++)N(F.location+ye,I/F.locationSize,Z,le,I*de,I/F.locationSize*ye*de,Ee)}}else if(oe!==void 0){const le=oe[pe];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(F.location,le);break;case 3:a.vertexAttrib3fv(F.location,le);break;case 4:a.vertexAttrib4fv(F.location,le);break;default:a.vertexAttrib1fv(F.location,le)}}}}U()}function j(){X();for(const R in i){const H=i[R];for(const ae in H){const te=H[ae];for(const ue in te)_(te[ue].object),delete te[ue];delete H[ae]}delete i[R]}}function B(R){if(i[R.id]===void 0)return;const H=i[R.id];for(const ae in H){const te=H[ae];for(const ue in te)_(te[ue].object),delete te[ue];delete H[ae]}delete i[R.id]}function O(R){for(const H in i){const ae=i[H];if(ae[R.id]===void 0)continue;const te=ae[R.id];for(const ue in te)_(te[ue].object),delete te[ue];delete ae[R.id]}}function X(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:x,disableUnusedAttributes:U}}function WS(a,e,r){let i;function o(p){i=p}function l(p,_){a.drawArrays(i,p,_),r.update(_,i,1)}function u(p,_,g){g!==0&&(a.drawArraysInstanced(i,p,_,g),r.update(_,i,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];r.update(y,i,1)}function f(p,_,g,y){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)u(p[E],_[E],y[E]);else{b.multiDrawArraysInstancedWEBGL(i,p,0,_,0,y,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*y[M];r.update(E,i,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function jS(a,e,r,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==ln&&i.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Wn&&i.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Bn&&!X)}function f(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=r.precision!==void 0?r.precision:"highp";const _=f(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=r.logarithmicDepthBuffer===!0,y=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:A,vertexTextures:j,maxSamples:B}}function XS(a){const e=this;let r=null,i=0,o=!1,l=!1;const u=new Ji,d=new st,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const b=g.length!==0||y||i!==0||o;return o=y,i=g.length,b},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,y){r=_(g,y,0)},this.setState=function(g,y,b){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,v=a.get(g);if(!o||E===null||E.length===0||l&&!x)l?_(null):p();else{const U=l?0:i,N=U*4;let A=v.clippingState||null;f.value=A,A=_(E,y,N,b);for(let j=0;j!==N;++j)A[j]=r[j];v.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function p(){f.value!==r&&(f.value=r,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(g,y,b,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const v=b+M*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<v)&&(x=new Float32Array(v));for(let N=0,A=b;N!==M;++N,A+=4)u.copy(g[N]).applyMatrix4(U,d),u.normal.toArray(x,A),x[A+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function $S(a){let e=new WeakMap;function r(u,d){return d===_d?u.mapping=Ka:d===xd&&(u.mapping=Za),u}function i(u){if(u&&u.isTexture){const d=u.mapping;if(d===_d||d===xd)if(e.has(u)){const f=e.get(u).texture;return r(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Kx(f.height);return p.fromEquirectangularTexture(a,u),e.set(u,p),u.addEventListener("dispose",o),r(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const Xa=4,wm=[.125,.215,.35,.446,.526,.582],ta=20,ed=new iy,Rm=new Tt;let td=null,rd=0,nd=0,id=!1;const Qi=(1+Math.sqrt(5))/2,ja=1/Qi,Am=[new ee(-Qi,ja,0),new ee(Qi,ja,0),new ee(-ja,0,Qi),new ee(ja,0,Qi),new ee(0,Qi,-ja),new ee(0,Qi,ja),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],YS=new ee;class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,o=100,l={}){const{size:u=256,position:d=YS}=l;td=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,d),r>0&&this._blur(f,0,0,r),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,rd,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ka||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ys,format:ln,colorSpace:Ja,depthBuffer:!1},o=Pm(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,r,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qS(l)),this._blurMaterial=KS(l,e,r)}return o}_compileMaterial(e){const r=new Vn(this._lodPlanes[0],e);this._renderer.compile(r,ed)}_sceneToCubeUV(e,r,i,o,l){const u=new qr(90,1,r,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(Rm),p.toneMapping=Ai,p.autoClear=!1;const y=new Cg({name:"PMREM.Background",side:Ur,depthWrite:!1,depthTest:!1}),b=new Vn(new Qs,y);let E=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,E=!0):(y.color.copy(Rm),E=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(u.up.set(0,d[x],0),u.position.set(l.x,l.y,l.z),u.lookAt(l.x+f[x],l.y,l.z)):v===1?(u.up.set(0,0,d[x]),u.position.set(l.x,l.y,l.z),u.lookAt(l.x,l.y+f[x],l.z)):(u.up.set(0,d[x],0),u.position.set(l.x,l.y,l.z),u.lookAt(l.x,l.y,l.z+f[x]));const U=this._cubeSize;Ul(o,v*U,x>2?U:0,U,U),p.setRenderTarget(o),E&&p.render(b,u),p.render(e,u)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=M}_textureToCubeUV(e,r){const i=this._renderer,o=e.mapping===Ka||e.mapping===Za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Vn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Ul(r,0,0,3*f,2*f),i.setRenderTarget(r),i.render(u,ed)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Am[(o-l-1)%Am.length];this._blur(e,l-1,l,u,d)}r.autoClear=i}_blur(e,r,i,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,r,i,o,"latitudinal",l),this._halfBlur(u,e,i,i,o,"longitudinal",l)}_halfBlur(e,r,i,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Vn(this._lodPlanes[o],p),y=p.uniforms,b=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*b):2*Math.PI/(2*ta-1),M=l/E,x=isFinite(l)?1+Math.floor(_*M):ta;x>ta&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ta}`);const v=[];let U=0;for(let O=0;O<ta;++O){const X=O/M,C=Math.exp(-X*X/2);v.push(C),O===0?U+=C:O<x&&(U+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/U;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-i;const A=this._sizeLods[o],j=3*A*(o>N-Xa?o-N+Xa:0),B=4*(this._cubeSize-A);Ul(r,j,B,3*A,2*A),f.setRenderTarget(r),f.render(g,ed)}}function qS(a){const e=[],r=[],i=[];let o=a;const l=a-Xa+1+wm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);r.push(d);let f=1/d;u>a-Xa?f=wm[u-a+Xa-1]:u===0&&(f=0),i.push(f);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],b=6,E=6,M=3,x=2,v=1,U=new Float32Array(M*E*b),N=new Float32Array(x*E*b),A=new Float32Array(v*E*b);for(let B=0;B<b;B++){const O=B%3*2/3-1,X=B>2?0:-1,C=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];U.set(C,M*E*B),N.set(y,x*E*B);const R=[B,B,B,B,B,B];A.set(R,v*E*B)}const j=new Xn;j.setAttribute("position",new _n(U,M)),j.setAttribute("uv",new _n(N,x)),j.setAttribute("faceIndex",new _n(A,v)),e.push(j),o>Xa&&o--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function Pm(a,e,r){const i=new aa(a,e,r);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(a,e,r,i,o){a.viewport.set(e,r,i,o),a.scissor.set(e,r,i,o)}function KS(a,e,r){const i=new Float32Array(ta),o=new ee(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ta,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Um(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Lm(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZS(a){let e=new WeakMap,r=null;function i(d){if(d&&d.isTexture){const f=d.mapping,p=f===_d||f===xd,_=f===Ka||f===Za;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return r===null&&(r=new Cm(a)),g=p?r.fromEquirectangular(d,g):r.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return p&&b&&b.height>0||_&&b&&o(b)?(r===null&&(r=new Cm(a)),g=p?r.fromEquirectangular(d):r.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:u}}function JS(a){const e={};function r(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(i)}return e[i]=o,o}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const o=r(i);return o===null&&Bl("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function QS(a,e,r,i){const o={},l=new WeakMap;function u(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete o[y.id];const b=l.get(y);b&&(e.remove(b),l.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,r.memory.geometries--}function d(g,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,r.memory.geometries++),y}function f(g){const y=g.attributes;for(const b in y)e.update(y[b],a.ARRAY_BUFFER)}function p(g){const y=[],b=g.index,E=g.attributes.position;let M=0;if(b!==null){const U=b.array;M=b.version;for(let N=0,A=U.length;N<A;N+=3){const j=U[N+0],B=U[N+1],O=U[N+2];y.push(j,B,B,O,O,j)}}else if(E!==void 0){const U=E.array;M=E.version;for(let N=0,A=U.length/3-1;N<A;N+=3){const j=N+0,B=N+1,O=N+2;y.push(j,B,B,O,O,j)}}else return;const x=new(Eg(y)?Ug:Pg)(y,1);x.version=M;const v=l.get(g);v&&e.remove(v),l.set(g,x)}function _(g){const y=l.get(g);if(y){const b=g.index;b!==null&&y.version<b.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:_}}function eM(a,e,r){let i;function o(y){i=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,b){a.drawElements(i,b,l,y*u),r.update(b,i,1)}function p(y,b,E){E!==0&&(a.drawElementsInstanced(i,b,l,y*u,E),r.update(b,i,E))}function _(y,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,b,0,l,y,0,E);let M=0;for(let x=0;x<E;x++)M+=b[x];r.update(M,i,1)}function g(y,b,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)p(y[v]/u,b[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(i,b,0,l,y,0,M,0,E);let v=0;for(let U=0;U<E;U++)v+=b[U]*M[U];r.update(v,i,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function tM(a){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,d){switch(r.calls++,u){case a.TRIANGLES:r.triangles+=d*(l/3);break;case a.LINES:r.lines+=d*(l/2);break;case a.LINE_STRIP:r.lines+=d*(l-1);break;case a.LINE_LOOP:r.lines+=d*l;break;case a.POINTS:r.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:o,update:i}}function rM(a,e,r){const i=new WeakMap,o=new Vt;function l(u,d,f){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=i.get(d);if(y===void 0||y.count!==g){let b=function(){X.dispose(),i.delete(d),d.removeEventListener("dispose",b)};y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),x===!0&&(A=3);let j=d.attributes.position.count*A,B=1;j>e.maxTextureSize&&(B=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const O=new Float32Array(j*B*4*g),X=new Tg(O,j,B,g);X.type=Bn,X.needsUpdate=!0;const C=A*4;for(let R=0;R<g;R++){const H=v[R],ae=U[R],te=N[R],ue=j*B*4*R;for(let ve=0;ve<H.count;ve++){const oe=ve*C;E===!0&&(o.fromBufferAttribute(H,ve),O[ue+oe+0]=o.x,O[ue+oe+1]=o.y,O[ue+oe+2]=o.z,O[ue+oe+3]=0),M===!0&&(o.fromBufferAttribute(ae,ve),O[ue+oe+4]=o.x,O[ue+oe+5]=o.y,O[ue+oe+6]=o.z,O[ue+oe+7]=0),x===!0&&(o.fromBufferAttribute(te,ve),O[ue+oe+8]=o.x,O[ue+oe+9]=o.y,O[ue+oe+10]=o.z,O[ue+oe+11]=te.itemSize===4?o.w:1)}}y={count:g,texture:X,size:new Pt(j,B)},i.set(d,y),d.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(a,"morphTexture",u.morphTexture,r);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const E=d.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",E),f.getUniforms().setValue(a,"morphTargetInfluences",p)}f.getUniforms().setValue(a,"morphTargetsTexture",y.texture,r),f.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:l}}function nM(a,e,r,i){let o=new WeakMap;function l(f){const p=i.render.frame,_=f.geometry,g=e.get(f,_);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(r.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&r.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return g}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),r.remove(p.instanceMatrix),p.instanceColor!==null&&r.remove(p.instanceColor)}return{update:l,dispose:u}}const zg=new Lr,Nm=new kg(1,1),Bg=new Tg,Hg=new Nx,Vg=new Ig,Im=[],Dm=[],Om=new Float32Array(16),km=new Float32Array(9),Fm=new Float32Array(4);function rs(a,e,r){const i=a[0];if(i<=0||i>0)return a;const o=e*r;let l=Im[o];if(l===void 0&&(l=new Float32Array(o),Im[o]=l),e!==0){i.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=r,a[u].toArray(l,d)}return l}function Jt(a,e){if(a.length!==e.length)return!1;for(let r=0,i=a.length;r<i;r++)if(a[r]!==e[r])return!1;return!0}function Qt(a,e){for(let r=0,i=e.length;r<i;r++)a[r]=e[r]}function Zl(a,e){let r=Dm[e];r===void 0&&(r=new Int32Array(e),Dm[e]=r);for(let i=0;i!==e;++i)r[i]=a.allocateTextureUnit();return r}function iM(a,e){const r=this.cache;r[0]!==e&&(a.uniform1f(this.addr,e),r[0]=e)}function aM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Jt(r,e))return;a.uniform2fv(this.addr,e),Qt(r,e)}}function sM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Jt(r,e))return;a.uniform3fv(this.addr,e),Qt(r,e)}}function oM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Jt(r,e))return;a.uniform4fv(this.addr,e),Qt(r,e)}}function lM(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Jt(r,e))return;a.uniformMatrix2fv(this.addr,!1,e),Qt(r,e)}else{if(Jt(r,i))return;Fm.set(i),a.uniformMatrix2fv(this.addr,!1,Fm),Qt(r,i)}}function cM(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Jt(r,e))return;a.uniformMatrix3fv(this.addr,!1,e),Qt(r,e)}else{if(Jt(r,i))return;km.set(i),a.uniformMatrix3fv(this.addr,!1,km),Qt(r,i)}}function uM(a,e){const r=this.cache,i=e.elements;if(i===void 0){if(Jt(r,e))return;a.uniformMatrix4fv(this.addr,!1,e),Qt(r,e)}else{if(Jt(r,i))return;Om.set(i),a.uniformMatrix4fv(this.addr,!1,Om),Qt(r,i)}}function dM(a,e){const r=this.cache;r[0]!==e&&(a.uniform1i(this.addr,e),r[0]=e)}function hM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Jt(r,e))return;a.uniform2iv(this.addr,e),Qt(r,e)}}function fM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Jt(r,e))return;a.uniform3iv(this.addr,e),Qt(r,e)}}function pM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Jt(r,e))return;a.uniform4iv(this.addr,e),Qt(r,e)}}function mM(a,e){const r=this.cache;r[0]!==e&&(a.uniform1ui(this.addr,e),r[0]=e)}function gM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Jt(r,e))return;a.uniform2uiv(this.addr,e),Qt(r,e)}}function vM(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Jt(r,e))return;a.uniform3uiv(this.addr,e),Qt(r,e)}}function _M(a,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Jt(r,e))return;a.uniform4uiv(this.addr,e),Qt(r,e)}}function xM(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o);let l;this.type===a.SAMPLER_2D_SHADOW?(Nm.compareFunction=Mg,l=Nm):l=zg,r.setTexture2D(e||l,o)}function yM(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture3D(e||Hg,o)}function bM(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTextureCube(e||Vg,o)}function SM(a,e,r){const i=this.cache,o=r.allocateTextureUnit();i[0]!==o&&(a.uniform1i(this.addr,o),i[0]=o),r.setTexture2DArray(e||Bg,o)}function MM(a){switch(a){case 5126:return iM;case 35664:return aM;case 35665:return sM;case 35666:return oM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return dM;case 35667:case 35671:return hM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return SM}}function EM(a,e){a.uniform1fv(this.addr,e)}function TM(a,e){const r=rs(e,this.size,2);a.uniform2fv(this.addr,r)}function wM(a,e){const r=rs(e,this.size,3);a.uniform3fv(this.addr,r)}function RM(a,e){const r=rs(e,this.size,4);a.uniform4fv(this.addr,r)}function AM(a,e){const r=rs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,r)}function CM(a,e){const r=rs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,r)}function PM(a,e){const r=rs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,r)}function UM(a,e){a.uniform1iv(this.addr,e)}function LM(a,e){a.uniform2iv(this.addr,e)}function NM(a,e){a.uniform3iv(this.addr,e)}function IM(a,e){a.uniform4iv(this.addr,e)}function DM(a,e){a.uniform1uiv(this.addr,e)}function OM(a,e){a.uniform2uiv(this.addr,e)}function kM(a,e){a.uniform3uiv(this.addr,e)}function FM(a,e){a.uniform4uiv(this.addr,e)}function zM(a,e,r){const i=this.cache,o=e.length,l=Zl(r,o);Jt(i,l)||(a.uniform1iv(this.addr,l),Qt(i,l));for(let u=0;u!==o;++u)r.setTexture2D(e[u]||zg,l[u])}function BM(a,e,r){const i=this.cache,o=e.length,l=Zl(r,o);Jt(i,l)||(a.uniform1iv(this.addr,l),Qt(i,l));for(let u=0;u!==o;++u)r.setTexture3D(e[u]||Hg,l[u])}function HM(a,e,r){const i=this.cache,o=e.length,l=Zl(r,o);Jt(i,l)||(a.uniform1iv(this.addr,l),Qt(i,l));for(let u=0;u!==o;++u)r.setTextureCube(e[u]||Vg,l[u])}function VM(a,e,r){const i=this.cache,o=e.length,l=Zl(r,o);Jt(i,l)||(a.uniform1iv(this.addr,l),Qt(i,l));for(let u=0;u!==o;++u)r.setTexture2DArray(e[u]||Bg,l[u])}function GM(a){switch(a){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return RM;case 35674:return AM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return UM;case 35667:case 35671:return LM;case 35668:case 35672:return NM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return OM;case 36295:return kM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}class WM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=MM(r.type)}}class jM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=GM(r.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,r[d.id],i)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function zm(a,e){a.seq.push(e),a.map[e.id]=e}function $M(a,e,r){const i=a.name,o=i.length;for(ad.lastIndex=0;;){const l=ad.exec(i),u=ad.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){zm(r,p===void 0?new WM(d,a,e):new jM(d,a,e));break}else{let _=r.map[d];_===void 0&&(_=new XM(d),zm(r,_)),r=_}}}class Hl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(r,o),u=e.getUniformLocation(r,l.name);$M(l,u,this)}}setValue(e,r,i,o){const l=this.map[r];l!==void 0&&l.setValue(e,i,o)}setOptional(e,r,i){const o=r[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,r,i,o){for(let l=0,u=r.length;l!==u;++l){const d=r[l],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,r){const i=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in r&&i.push(u)}return i}}function Bm(a,e,r){const i=a.createShader(e);return a.shaderSource(i,r),a.compileShader(i),i}const YM=37297;let qM=0;function KM(a,e){const r=a.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,r.length);for(let u=o;u<l;u++){const d=u+1;i.push(`${d===e?">":" "} ${d}: ${r[u]}`)}return i.join(`
`)}const Hm=new st;function ZM(a){bt._getMatrix(Hm,bt.workingColorSpace,a);const e=`mat3( ${Hm.elements.map(r=>r.toFixed(4))} )`;switch(bt.getTransfer(a)){case Gl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Vm(a,e,r){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return r.toUpperCase()+`

`+o+`

`+KM(a.getShaderSource(e),u)}else return o}function JM(a,e){const r=ZM(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function QM(a,e){let r;switch(e){case ix:r="Linear";break;case ax:r="Reinhard";break;case sx:r="Cineon";break;case ox:r="ACESFilmic";break;case cx:r="AgX";break;case ux:r="Neutral";break;case lx:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+a+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Ll=new ee;function eE(){bt.getLuminanceCoefficients(Ll);const a=Ll.x.toFixed(4),e=Ll.y.toFixed(4),r=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function rE(a){const e=[];for(const r in a){const i=a[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function nE(a,e){const r={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=a.getActiveAttrib(e,o),u=l.name;let d=1;l.type===a.FLOAT_MAT2&&(d=2),l.type===a.FLOAT_MAT3&&(d=3),l.type===a.FLOAT_MAT4&&(d=4),r[u]={type:l.type,location:a.getAttribLocation(e,u),locationSize:d}}return r}function Bs(a){return a!==""}function Gm(a,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(a){return a.replace(iE,sE)}const aE=new Map;function sE(a,e){let r=lt[e];if(r===void 0){const i=aE.get(e);if(i!==void 0)r=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(r)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(a){return a.replace(oE,lE)}function lE(a,e,r,i){let o="";for(let l=parseInt(e);l<parseInt(r);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Xm(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cE(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function uE(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ka:case Za:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function hE(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function fE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function pE(a,e,r,i){const o=a.getContext(),l=r.defines;let u=r.vertexShader,d=r.fragmentShader;const f=cE(r),p=uE(r),_=dE(r),g=hE(r),y=fE(r),b=tE(r),E=rE(l),M=o.createProgram();let x,v,U=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(x=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E].filter(Bs).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E].filter(Bs).join(`
`),v.length>0&&(v+=`
`)):(x=[Xm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+_:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),v=[Xm(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,E,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+p:"",r.envMap?"#define "+_:"",r.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+f:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Ai?"#define TONE_MAPPING":"",r.toneMapping!==Ai?lt.tonemapping_pars_fragment:"",r.toneMapping!==Ai?QM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,JM("linearToOutputTexel",r.outputColorSpace),eE(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Bs).join(`
`)),u=Kd(u),u=Gm(u,r),u=Wm(u,r),d=Kd(d),d=Gm(d,r),d=Wm(d,r),u=jm(u),d=jm(d),r.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",r.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=U+x+u,A=U+v+d,j=Bm(o,o.VERTEX_SHADER,N),B=Bm(o,o.FRAGMENT_SHADER,A);o.attachShader(M,j),o.attachShader(M,B),r.index0AttributeName!==void 0?o.bindAttribLocation(M,0,r.index0AttributeName):r.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function O(H){if(a.debug.checkShaderErrors){const ae=o.getProgramInfoLog(M).trim(),te=o.getShaderInfoLog(j).trim(),ue=o.getShaderInfoLog(B).trim();let ve=!0,oe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ve=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,M,j,B);else{const pe=Vm(o,j,"vertex"),F=Vm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+pe+`
`+F)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||ue==="")&&(oe=!1);oe&&(H.diagnostics={runnable:ve,programLog:ae,vertexShader:{log:te,prefix:x},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(j),o.deleteShader(B),X=new Hl(o,M),C=nE(o,M)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let R=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(M,YM)),R},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=j,this.fragmentShader=B,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(r),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new vE(e),r.set(e,i)),i}}class vE{constructor(e){this.id=mE++,this.code=e,this.usedTimes=0}}function _E(a,e,r,i,o,l,u){const d=new Rg,f=new gE,p=new Set,_=[],g=o.logarithmicDepthBuffer,y=o.vertexTextures;let b=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,R,H,ae,te){const ue=ae.fog,ve=te.geometry,oe=C.isMeshStandardMaterial?ae.environment:null,pe=(C.isMeshStandardMaterial?r:e).get(C.envMap||oe),F=pe&&pe.mapping===Yl?pe.image.height:null,ie=E[C.type];C.precision!==null&&(b=o.getMaxPrecision(C.precision),b!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",b,"instead."));const le=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,I=le!==void 0?le.length:0;let re=0;ve.morphAttributes.position!==void 0&&(re=1),ve.morphAttributes.normal!==void 0&&(re=2),ve.morphAttributes.color!==void 0&&(re=3);let De,Z,de,Ee;if(ie){const vt=gn[ie];De=vt.vertexShader,Z=vt.fragmentShader}else De=C.vertexShader,Z=C.fragmentShader,f.update(C),de=f.getVertexShaderID(C),Ee=f.getFragmentShaderID(C);const ye=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Oe=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,wt=!!C.map,ft=!!C.matcap,Ut=!!pe,k=!!C.aoMap,mr=!!C.lightMap,pt=!!C.bumpMap,ct=!!C.normalMap,Xe=!!C.displacementMap,Et=!!C.emissiveMap,We=!!C.metalnessMap,P=!!C.roughnessMap,T=C.anisotropy>0,K=C.clearcoat>0,fe=C.dispersion>0,be=C.iridescence>0,he=C.sheen>0,Ve=C.transmission>0,Ae=T&&!!C.anisotropyMap,et=K&&!!C.clearcoatMap,qe=K&&!!C.clearcoatNormalMap,Se=K&&!!C.clearcoatRoughnessMap,Fe=be&&!!C.iridescenceMap,tt=be&&!!C.iridescenceThicknessMap,rt=he&&!!C.sheenColorMap,ze=he&&!!C.sheenRoughnessMap,ut=!!C.specularMap,at=!!C.specularColorMap,St=!!C.specularIntensityMap,V=Ve&&!!C.transmissionMap,Ce=Ve&&!!C.thicknessMap,ne=!!C.gradientMap,me=!!C.alphaMap,Ue=C.alphaTest>0,we=!!C.alphaHash,ht=!!C.extensions;let Nt=Ai;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Nt=a.toneMapping);const Yt={shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:Z,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:b,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&te.instanceColor!==null,instancingMorph:Oe&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ye===null?a.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ja,alphaToCoverage:!!C.alphaToCoverage,map:wt,matcap:ft,envMap:Ut,envMapMode:Ut&&pe.mapping,envMapCubeUVHeight:F,aoMap:k,lightMap:mr,bumpMap:pt,normalMap:ct,displacementMap:y&&Xe,emissiveMap:Et,normalMapObjectSpace:ct&&C.normalMapType===mx,normalMapTangentSpace:ct&&C.normalMapType===px,metalnessMap:We,roughnessMap:P,anisotropy:T,anisotropyMap:Ae,clearcoat:K,clearcoatMap:et,clearcoatNormalMap:qe,clearcoatRoughnessMap:Se,dispersion:fe,iridescence:be,iridescenceMap:Fe,iridescenceThicknessMap:tt,sheen:he,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:ut,specularColorMap:at,specularIntensityMap:St,transmission:Ve,transmissionMap:V,thicknessMap:Ce,gradientMap:ne,opaque:C.transparent===!1&&C.blending===$a&&C.alphaToCoverage===!1,alphaMap:me,alphaTest:Ue,alphaHash:we,combine:C.combine,mapUv:wt&&M(C.map.channel),aoMapUv:k&&M(C.aoMap.channel),lightMapUv:mr&&M(C.lightMap.channel),bumpMapUv:pt&&M(C.bumpMap.channel),normalMapUv:ct&&M(C.normalMap.channel),displacementMapUv:Xe&&M(C.displacementMap.channel),emissiveMapUv:Et&&M(C.emissiveMap.channel),metalnessMapUv:We&&M(C.metalnessMap.channel),roughnessMapUv:P&&M(C.roughnessMap.channel),anisotropyMapUv:Ae&&M(C.anisotropyMap.channel),clearcoatMapUv:et&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(C.sheenRoughnessMap.channel),specularMapUv:ut&&M(C.specularMap.channel),specularColorMapUv:at&&M(C.specularColorMap.channel),specularIntensityMapUv:St&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:Ce&&M(C.thicknessMap.channel),alphaMapUv:me&&M(C.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(ct||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ve.attributes.uv&&(wt||me),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Re,skinning:te.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:Nt,decodeVideoTexture:wt&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===At,decodeVideoTextureEmissive:Et&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===At,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zn,flipSided:C.side===Ur,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ht&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&C.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(U(R,C),N(R,C),R.push(a.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function U(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function N(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function A(C){const R=E[C.type];let H;if(R){const ae=gn[R];H=Xx.clone(ae.uniforms)}else H=C.uniforms;return H}function j(C,R){let H;for(let ae=0,te=_.length;ae<te;ae++){const ue=_[ae];if(ue.cacheKey===R){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new pE(a,R,C,l),_.push(H)),H}function B(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function O(C){f.remove(C)}function X(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:A,acquireProgram:j,releaseProgram:B,releaseShaderCache:O,programs:_,dispose:X}}function xE(){let a=new WeakMap;function e(u){return a.has(u)}function r(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function i(u){a.delete(u)}function o(u,d,f){a.get(u)[d]=f}function l(){a=new WeakMap}return{has:e,get:r,remove:i,update:o,dispose:l}}function yE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $m(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ym(){const a=[];let e=0;const r=[],i=[],o=[];function l(){e=0,r.length=0,i.length=0,o.length=0}function u(g,y,b,E,M,x){let v=a[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:b,groupOrder:E,renderOrder:g.renderOrder,z:M,group:x},a[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=b,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=M,v.group=x),e++,v}function d(g,y,b,E,M,x){const v=u(g,y,b,E,M,x);b.transmission>0?i.push(v):b.transparent===!0?o.push(v):r.push(v)}function f(g,y,b,E,M,x){const v=u(g,y,b,E,M,x);b.transmission>0?i.unshift(v):b.transparent===!0?o.unshift(v):r.unshift(v)}function p(g,y){r.length>1&&r.sort(g||yE),i.length>1&&i.sort(y||$m),o.length>1&&o.sort(y||$m)}function _(){for(let g=e,y=a.length;g<y;g++){const b=a[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:r,transmissive:i,transparent:o,init:l,push:d,unshift:f,finish:_,sort:p}}function bE(){let a=new WeakMap;function e(i,o){const l=a.get(i);let u;return l===void 0?(u=new Ym,a.set(i,[u])):o>=l.length?(u=new Ym,l.push(u)):u=l[o],u}function r(){a=new WeakMap}return{get:e,dispose:r}}function SE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new ee,color:new Tt};break;case"SpotLight":r={position:new ee,direction:new ee,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new ee,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":r={direction:new ee,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":r={color:new Tt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=r,r}}}function ME(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=r,r}}}let EE=0;function TE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function wE(a){const e=new SE,r=ME(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new ee);const o=new ee,l=new Gt,u=new Gt;function d(p){let _=0,g=0,y=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let b=0,E=0,M=0,x=0,v=0,U=0,N=0,A=0,j=0,B=0,O=0;p.sort(TE);for(let C=0,R=p.length;C<R;C++){const H=p[C],ae=H.color,te=H.intensity,ue=H.distance,ve=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=ae.r*te,g+=ae.g*te,y+=ae.b*te;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(H.sh.coefficients[oe],te);O++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pe=H.shadow,F=r.get(H);F.shadowIntensity=pe.intensity,F.shadowBias=pe.bias,F.shadowNormalBias=pe.normalBias,F.shadowRadius=pe.radius,F.shadowMapSize=pe.mapSize,i.directionalShadow[b]=F,i.directionalShadowMap[b]=ve,i.directionalShadowMatrix[b]=H.shadow.matrix,U++}i.directional[b]=oe,b++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(ae).multiplyScalar(te),oe.distance=ue,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,i.spot[M]=oe;const pe=H.shadow;if(H.map&&(i.spotLightMap[j]=H.map,j++,pe.updateMatrices(H),H.castShadow&&B++),i.spotLightMatrix[M]=pe.matrix,H.castShadow){const F=r.get(H);F.shadowIntensity=pe.intensity,F.shadowBias=pe.bias,F.shadowNormalBias=pe.normalBias,F.shadowRadius=pe.radius,F.shadowMapSize=pe.mapSize,i.spotShadow[M]=F,i.spotShadowMap[M]=ve,A++}M++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(ae).multiplyScalar(te),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),i.rectArea[x]=oe,x++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const pe=H.shadow,F=r.get(H);F.shadowIntensity=pe.intensity,F.shadowBias=pe.bias,F.shadowNormalBias=pe.normalBias,F.shadowRadius=pe.radius,F.shadowMapSize=pe.mapSize,F.shadowCameraNear=pe.camera.near,F.shadowCameraFar=pe.camera.far,i.pointShadow[E]=F,i.pointShadowMap[E]=ve,i.pointShadowMatrix[E]=H.shadow.matrix,N++}i.point[E]=oe,E++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(te),oe.groundColor.copy(H.groundColor).multiplyScalar(te),i.hemi[v]=oe,v++}}x>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=g,i.ambient[2]=y;const X=i.hash;(X.directionalLength!==b||X.pointLength!==E||X.spotLength!==M||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==U||X.numPointShadows!==N||X.numSpotShadows!==A||X.numSpotMaps!==j||X.numLightProbes!==O)&&(i.directional.length=b,i.spot.length=M,i.rectArea.length=x,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=A+j-B,i.spotLightMap.length=j,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=O,X.directionalLength=b,X.pointLength=E,X.spotLength=M,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=U,X.numPointShadows=N,X.numSpotShadows=A,X.numSpotMaps=j,X.numLightProbes=O,i.version=EE++)}function f(p,_){let g=0,y=0,b=0,E=0,M=0;const x=_.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const N=p[v];if(N.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),g++}else if(N.isSpotLight){const A=i.spot[b];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),b++}else if(N.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const A=i.point[y];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(x),y++}else if(N.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:d,setupView:f,state:i}}function qm(a){const e=new wE(a),r=[],i=[];function o(_){p.camera=_,r.length=0,i.length=0}function l(_){r.push(_)}function u(_){i.push(_)}function d(){e.setup(r)}function f(_){e.setupView(r,_)}const p={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function RE(a){let e=new WeakMap;function r(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new qm(a),e.set(o,[d])):l>=u.length?(d=new qm(a),u.push(d)):d=u[l],d}function i(){e=new WeakMap}return{get:r,dispose:i}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PE(a,e,r){let i=new Dg;const o=new Pt,l=new Pt,u=new Vt,d=new ry({depthPacking:fx}),f=new ny,p={},_=r.maxTextureSize,g={[Pi]:Ur,[Ur]:Pi,[zn]:zn},y=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:AE,fragmentShader:CE}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const E=new Xn;E.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let v=this.type;this.render=function(B,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const C=a.getRenderTarget(),R=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ae=a.state;ae.setBlending(Ri),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=v!==Fn&&this.type===Fn,ue=v===Fn&&this.type!==Fn;for(let ve=0,oe=B.length;ve<oe;ve++){const pe=B[ve],F=pe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const ie=F.getFrameExtents();if(o.multiply(ie),l.copy(F.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ie.x),o.x=l.x*ie.x,F.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ie.y),o.y=l.y*ie.y,F.mapSize.y=l.y)),F.map===null||te===!0||ue===!0){const I=this.type!==Fn?{minFilter:cn,magFilter:cn}:{};F.map!==null&&F.map.dispose(),F.map=new aa(o.x,o.y,I),F.map.texture.name=pe.name+".shadowMap",F.camera.updateProjectionMatrix()}a.setRenderTarget(F.map),a.clear();const le=F.getViewportCount();for(let I=0;I<le;I++){const re=F.getViewport(I);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ae.viewport(u),F.updateMatrices(pe,I),i=F.getFrustum(),A(O,X,F.camera,pe,this.type)}F.isPointLightShadow!==!0&&this.type===Fn&&U(F,X),F.needsUpdate=!1}v=this.type,x.needsUpdate=!1,a.setRenderTarget(C,R,H)};function U(B,O){const X=e.update(M);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new aa(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(O,null,X,y,M,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value=B.mapSize,b.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(O,null,X,b,M,null)}function N(B,O,X,C){let R=null;const H=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?f:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ae=R.uuid,te=O.uuid;let ue=p[ae];ue===void 0&&(ue={},p[ae]=ue);let ve=ue[te];ve===void 0&&(ve=R.clone(),ue[te]=ve,O.addEventListener("dispose",j)),R=ve}if(R.visible=O.visible,R.wireframe=O.wireframe,C===Fn?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=a.properties.get(R);ae.light=X}return R}function A(B,O,X,C,R){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Fn)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const ae=e.update(B),te=B.material;if(Array.isArray(te)){const ue=ae.groups;for(let ve=0,oe=ue.length;ve<oe;ve++){const pe=ue[ve],F=te[pe.materialIndex];if(F&&F.visible){const ie=N(B,F,C,R);B.onBeforeShadow(a,B,O,X,ae,ie,pe),a.renderBufferDirect(X,null,ae,ie,B,pe),B.onAfterShadow(a,B,O,X,ae,ie,pe)}}}else if(te.visible){const ue=N(B,te,C,R);B.onBeforeShadow(a,B,O,X,ae,ue,null),a.renderBufferDirect(X,null,ae,ue,B,null),B.onAfterShadow(a,B,O,X,ae,ue,null)}}const H=B.children;for(let ae=0,te=H.length;ae<te;ae++)A(H[ae],O,X,C,R)}function j(B){B.target.removeEventListener("dispose",j);for(const O in p){const X=p[O],C=B.target.uuid;C in X&&(X[C].dispose(),delete X[C])}}}const UE={[dd]:hd,[fd]:gd,[pd]:vd,[qa]:md,[hd]:dd,[gd]:fd,[vd]:pd,[md]:qa};function LE(a,e){function r(){let V=!1;const Ce=new Vt;let ne=null;const me=new Vt(0,0,0,0);return{setMask:function(Ue){ne!==Ue&&!V&&(a.colorMask(Ue,Ue,Ue,Ue),ne=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,we,ht,Nt,Yt){Yt===!0&&(Ue*=Nt,we*=Nt,ht*=Nt),Ce.set(Ue,we,ht,Nt),me.equals(Ce)===!1&&(a.clearColor(Ue,we,ht,Nt),me.copy(Ce))},reset:function(){V=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let V=!1,Ce=!1,ne=null,me=null,Ue=null;return{setReversed:function(we){if(Ce!==we){const ht=e.get("EXT_clip_control");we?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),Ce=we;const Nt=Ue;Ue=null,this.setClear(Nt)}},getReversed:function(){return Ce},setTest:function(we){we?ye(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(we){ne!==we&&!V&&(a.depthMask(we),ne=we)},setFunc:function(we){if(Ce&&(we=UE[we]),me!==we){switch(we){case dd:a.depthFunc(a.NEVER);break;case hd:a.depthFunc(a.ALWAYS);break;case fd:a.depthFunc(a.LESS);break;case qa:a.depthFunc(a.LEQUAL);break;case pd:a.depthFunc(a.EQUAL);break;case md:a.depthFunc(a.GEQUAL);break;case gd:a.depthFunc(a.GREATER);break;case vd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}me=we}},setLocked:function(we){V=we},setClear:function(we){Ue!==we&&(Ce&&(we=1-we),a.clearDepth(we),Ue=we)},reset:function(){V=!1,ne=null,me=null,Ue=null,Ce=!1}}}function o(){let V=!1,Ce=null,ne=null,me=null,Ue=null,we=null,ht=null,Nt=null,Yt=null;return{setTest:function(vt){V||(vt?ye(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(vt){Ce!==vt&&!V&&(a.stencilMask(vt),Ce=vt)},setFunc:function(vt,Sr,gr){(ne!==vt||me!==Sr||Ue!==gr)&&(a.stencilFunc(vt,Sr,gr),ne=vt,me=Sr,Ue=gr)},setOp:function(vt,Sr,gr){(we!==vt||ht!==Sr||Nt!==gr)&&(a.stencilOp(vt,Sr,gr),we=vt,ht=Sr,Nt=gr)},setLocked:function(vt){V=vt},setClear:function(vt){Yt!==vt&&(a.clearStencil(vt),Yt=vt)},reset:function(){V=!1,Ce=null,ne=null,me=null,Ue=null,we=null,ht=null,Nt=null,Yt=null}}}const l=new r,u=new i,d=new o,f=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,b=[],E=null,M=!1,x=null,v=null,U=null,N=null,A=null,j=null,B=null,O=new Tt(0,0,0),X=0,C=!1,R=null,H=null,ae=null,te=null,ue=null;const ve=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,pe=0;const F=a.getParameter(a.VERSION);F.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(F)[1]),oe=pe>=1):F.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),oe=pe>=2);let ie=null,le={};const I=a.getParameter(a.SCISSOR_BOX),re=a.getParameter(a.VIEWPORT),De=new Vt().fromArray(I),Z=new Vt().fromArray(re);function de(V,Ce,ne,me){const Ue=new Uint8Array(4),we=a.createTexture();a.bindTexture(V,we),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ht=0;ht<ne;ht++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,me,0,a.RGBA,a.UNSIGNED_BYTE,Ue):a.texImage2D(Ce+ht,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ue);return we}const Ee={};Ee[a.TEXTURE_2D]=de(a.TEXTURE_2D,a.TEXTURE_2D,1),Ee[a.TEXTURE_CUBE_MAP]=de(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[a.TEXTURE_2D_ARRAY]=de(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ee[a.TEXTURE_3D]=de(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(a.DEPTH_TEST),u.setFunc(qa),pt(!1),ct(Qp),ye(a.CULL_FACE),k(Ri);function ye(V){_[V]!==!0&&(a.enable(V),_[V]=!0)}function Re(V){_[V]!==!1&&(a.disable(V),_[V]=!1)}function Oe(V,Ce){return g[V]!==Ce?(a.bindFramebuffer(V,Ce),g[V]=Ce,V===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ce),V===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(V,Ce){let ne=b,me=!1;if(V){ne=y.get(Ce),ne===void 0&&(ne=[],y.set(Ce,ne));const Ue=V.textures;if(ne.length!==Ue.length||ne[0]!==a.COLOR_ATTACHMENT0){for(let we=0,ht=Ue.length;we<ht;we++)ne[we]=a.COLOR_ATTACHMENT0+we;ne.length=Ue.length,me=!0}}else ne[0]!==a.BACK&&(ne[0]=a.BACK,me=!0);me&&a.drawBuffers(ne)}function wt(V){return E!==V?(a.useProgram(V),E=V,!0):!1}const ft={[ea]:a.FUNC_ADD,[z0]:a.FUNC_SUBTRACT,[B0]:a.FUNC_REVERSE_SUBTRACT};ft[H0]=a.MIN,ft[V0]=a.MAX;const Ut={[G0]:a.ZERO,[W0]:a.ONE,[j0]:a.SRC_COLOR,[cd]:a.SRC_ALPHA,[Z0]:a.SRC_ALPHA_SATURATE,[q0]:a.DST_COLOR,[$0]:a.DST_ALPHA,[X0]:a.ONE_MINUS_SRC_COLOR,[ud]:a.ONE_MINUS_SRC_ALPHA,[K0]:a.ONE_MINUS_DST_COLOR,[Y0]:a.ONE_MINUS_DST_ALPHA,[J0]:a.CONSTANT_COLOR,[Q0]:a.ONE_MINUS_CONSTANT_COLOR,[ex]:a.CONSTANT_ALPHA,[tx]:a.ONE_MINUS_CONSTANT_ALPHA};function k(V,Ce,ne,me,Ue,we,ht,Nt,Yt,vt){if(V===Ri){M===!0&&(Re(a.BLEND),M=!1);return}if(M===!1&&(ye(a.BLEND),M=!0),V!==F0){if(V!==x||vt!==C){if((v!==ea||A!==ea)&&(a.blendEquation(a.FUNC_ADD),v=ea,A=ea),vt)switch(V){case $a:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case em:a.blendFunc(a.ONE,a.ONE);break;case tm:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case rm:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case $a:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case em:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case tm:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case rm:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,N=null,j=null,B=null,O.set(0,0,0),X=0,x=V,C=vt}return}Ue=Ue||Ce,we=we||ne,ht=ht||me,(Ce!==v||Ue!==A)&&(a.blendEquationSeparate(ft[Ce],ft[Ue]),v=Ce,A=Ue),(ne!==U||me!==N||we!==j||ht!==B)&&(a.blendFuncSeparate(Ut[ne],Ut[me],Ut[we],Ut[ht]),U=ne,N=me,j=we,B=ht),(Nt.equals(O)===!1||Yt!==X)&&(a.blendColor(Nt.r,Nt.g,Nt.b,Yt),O.copy(Nt),X=Yt),x=V,C=!1}function mr(V,Ce){V.side===zn?Re(a.CULL_FACE):ye(a.CULL_FACE);let ne=V.side===Ur;Ce&&(ne=!ne),pt(ne),V.blending===$a&&V.transparent===!1?k(Ri):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const me=V.stencilWrite;d.setTest(me),me&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Et(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){R!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),R=V)}function ct(V){V!==D0?(ye(a.CULL_FACE),V!==H&&(V===Qp?a.cullFace(a.BACK):V===O0?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),H=V}function Xe(V){V!==ae&&(oe&&a.lineWidth(V),ae=V)}function Et(V,Ce,ne){V?(ye(a.POLYGON_OFFSET_FILL),(te!==Ce||ue!==ne)&&(a.polygonOffset(Ce,ne),te=Ce,ue=ne)):Re(a.POLYGON_OFFSET_FILL)}function We(V){V?ye(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function P(V){V===void 0&&(V=a.TEXTURE0+ve-1),ie!==V&&(a.activeTexture(V),ie=V)}function T(V,Ce,ne){ne===void 0&&(ie===null?ne=a.TEXTURE0+ve-1:ne=ie);let me=le[ne];me===void 0&&(me={type:void 0,texture:void 0},le[ne]=me),(me.type!==V||me.texture!==Ce)&&(ie!==ne&&(a.activeTexture(ne),ie=ne),a.bindTexture(V,Ce||Ee[V]),me.type=V,me.texture=Ce)}function K(){const V=le[ie];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{a.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{a.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{a.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{a.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{a.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{a.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{a.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{a.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{a.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{a.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(V){De.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),De.copy(V))}function ze(V){Z.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ut(V,Ce){let ne=p.get(Ce);ne===void 0&&(ne=new WeakMap,p.set(Ce,ne));let me=ne.get(V);me===void 0&&(me=a.getUniformBlockIndex(Ce,V.name),ne.set(V,me))}function at(V,Ce){const ne=p.get(Ce).get(V);f.get(Ce)!==ne&&(a.uniformBlockBinding(Ce,ne,V.__bindingPointIndex),f.set(Ce,ne))}function St(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},ie=null,le={},g={},y=new WeakMap,b=[],E=null,M=!1,x=null,v=null,U=null,N=null,A=null,j=null,B=null,O=new Tt(0,0,0),X=0,C=!1,R=null,H=null,ae=null,te=null,ue=null,De.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:Re,bindFramebuffer:Oe,drawBuffers:Qe,useProgram:wt,setBlending:k,setMaterial:mr,setFlipSided:pt,setCullFace:ct,setLineWidth:Xe,setPolygonOffset:Et,setScissorTest:We,activeTexture:P,bindTexture:T,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:be,texImage2D:Fe,texImage3D:tt,updateUBOMapping:ut,uniformBlockBinding:at,texStorage2D:qe,texStorage3D:Se,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:et,scissor:rt,viewport:ze,reset:St}}function NE(a,e,r,i,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return b?new OffscreenCanvas(P,T):jl("canvas")}function M(P,T,K){let fe=1;const be=We(P);if((be.width>K||be.height>K)&&(fe=K/Math.max(be.width,be.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(fe*be.width),Ve=Math.floor(fe*be.height);g===void 0&&(g=E(he,Ve));const Ae=T?E(he,Ve):g;return Ae.width=he,Ae.height=Ve,Ae.getContext("2d").drawImage(P,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+he+"x"+Ve+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function x(P){return P.generateMipmaps}function v(P){a.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(P,T,K,fe,be=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=T;if(T===a.RED&&(K===a.FLOAT&&(he=a.R32F),K===a.HALF_FLOAT&&(he=a.R16F),K===a.UNSIGNED_BYTE&&(he=a.R8)),T===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.R8UI),K===a.UNSIGNED_SHORT&&(he=a.R16UI),K===a.UNSIGNED_INT&&(he=a.R32UI),K===a.BYTE&&(he=a.R8I),K===a.SHORT&&(he=a.R16I),K===a.INT&&(he=a.R32I)),T===a.RG&&(K===a.FLOAT&&(he=a.RG32F),K===a.HALF_FLOAT&&(he=a.RG16F),K===a.UNSIGNED_BYTE&&(he=a.RG8)),T===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RG8UI),K===a.UNSIGNED_SHORT&&(he=a.RG16UI),K===a.UNSIGNED_INT&&(he=a.RG32UI),K===a.BYTE&&(he=a.RG8I),K===a.SHORT&&(he=a.RG16I),K===a.INT&&(he=a.RG32I)),T===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RGB8UI),K===a.UNSIGNED_SHORT&&(he=a.RGB16UI),K===a.UNSIGNED_INT&&(he=a.RGB32UI),K===a.BYTE&&(he=a.RGB8I),K===a.SHORT&&(he=a.RGB16I),K===a.INT&&(he=a.RGB32I)),T===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),K===a.UNSIGNED_INT&&(he=a.RGBA32UI),K===a.BYTE&&(he=a.RGBA8I),K===a.SHORT&&(he=a.RGBA16I),K===a.INT&&(he=a.RGBA32I)),T===a.RGB&&K===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),T===a.RGBA){const Ve=be?Gl:bt.getTransfer(fe);K===a.FLOAT&&(he=a.RGBA32F),K===a.HALF_FLOAT&&(he=a.RGBA16F),K===a.UNSIGNED_BYTE&&(he=Ve===At?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function A(P,T){let K;return P?T===null||T===ia||T===Ws?K=a.DEPTH24_STENCIL8:T===Bn?K=a.DEPTH32F_STENCIL8:T===Gs&&(K=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ia||T===Ws?K=a.DEPTH_COMPONENT24:T===Bn?K=a.DEPTH_COMPONENT32F:T===Gs&&(K=a.DEPTH_COMPONENT16),K}function j(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==vn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&_.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),R(T)}function X(P){const T=i.get(P);if(T.__webglInit===void 0)return;const K=P.source,fe=y.get(K);if(fe){const be=fe[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&C(P),Object.keys(fe).length===0&&y.delete(K)}i.remove(P)}function C(P){const T=i.get(P);a.deleteTexture(T.__webglTexture);const K=P.source,fe=y.get(K);delete fe[T.__cacheKey],u.memory.textures--}function R(P){const T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let be=0;be<T.__webglFramebuffer[fe].length;be++)a.deleteFramebuffer(T.__webglFramebuffer[fe][be]);else a.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)a.deleteFramebuffer(T.__webglFramebuffer[fe]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=P.textures;for(let fe=0,be=K.length;fe<be;fe++){const he=i.get(K[fe]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),u.memory.textures--),i.remove(K[fe])}i.remove(P)}let H=0;function ae(){H=0}function te(){const P=H;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),H+=1,P}function ue(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ve(P,T){const K=i.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,P,T);return}}r.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+T)}function oe(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,T);return}r.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+T)}function pe(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Z(K,P,T);return}r.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+T)}function F(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,T);return}r.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+T)}const ie={[yd]:a.REPEAT,[ra]:a.CLAMP_TO_EDGE,[bd]:a.MIRRORED_REPEAT},le={[cn]:a.NEAREST,[dx]:a.NEAREST_MIPMAP_NEAREST,[cl]:a.NEAREST_MIPMAP_LINEAR,[vn]:a.LINEAR,[Pu]:a.LINEAR_MIPMAP_NEAREST,[na]:a.LINEAR_MIPMAP_LINEAR},I={[gx]:a.NEVER,[Sx]:a.ALWAYS,[vx]:a.LESS,[Mg]:a.LEQUAL,[_x]:a.EQUAL,[bx]:a.GEQUAL,[xx]:a.GREATER,[yx]:a.NOTEQUAL};function re(P,T){if(T.type===Bn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vn||T.magFilter===Pu||T.magFilter===cl||T.magFilter===na||T.minFilter===vn||T.minFilter===Pu||T.minFilter===cl||T.minFilter===na)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,ie[T.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,ie[T.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,ie[T.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,le[T.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==cl&&T.minFilter!==na||T.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function De(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const fe=T.source;let be=y.get(fe);be===void 0&&(be={},y.set(fe,be));const he=ue(T);if(he!==P.__cacheKey){be[he]===void 0&&(be[he]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,K=!0),be[he].usedTimes++;const Ve=be[P.__cacheKey];Ve!==void 0&&(be[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(T)),P.__cacheKey=he,P.__webglTexture=be[he].texture}return K}function Z(P,T,K){let fe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=a.TEXTURE_3D);const be=De(P,T),he=T.source;r.bindTexture(fe,P.__webglTexture,a.TEXTURE0+K);const Ve=i.get(he);if(he.version!==Ve.__version||be===!0){r.activeTexture(a.TEXTURE0+K);const Ae=bt.getPrimaries(bt.workingColorSpace),et=T.colorSpace===Ei?null:bt.getPrimaries(T.colorSpace),qe=T.colorSpace===Ei||Ae===et?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Se=M(T.image,!1,o.maxTextureSize);Se=Et(T,Se);const Fe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let rt=N(T.internalFormat,Fe,tt,T.colorSpace,T.isVideoTexture);re(fe,T);let ze;const ut=T.mipmaps,at=T.isVideoTexture!==!0,St=Ve.__version===void 0||be===!0,V=he.dataReady,Ce=j(T,Se);if(T.isDepthTexture)rt=A(T.format===Xs,T.type),St&&(at?r.texStorage2D(a.TEXTURE_2D,1,rt,Se.width,Se.height):r.texImage2D(a.TEXTURE_2D,0,rt,Se.width,Se.height,0,Fe,tt,null));else if(T.isDataTexture)if(ut.length>0){at&&St&&r.texStorage2D(a.TEXTURE_2D,Ce,rt,ut[0].width,ut[0].height);for(let ne=0,me=ut.length;ne<me;ne++)ze=ut[ne],at?V&&r.texSubImage2D(a.TEXTURE_2D,ne,0,0,ze.width,ze.height,Fe,tt,ze.data):r.texImage2D(a.TEXTURE_2D,ne,rt,ze.width,ze.height,0,Fe,tt,ze.data);T.generateMipmaps=!1}else at?(St&&r.texStorage2D(a.TEXTURE_2D,Ce,rt,Se.width,Se.height),V&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,tt,Se.data)):r.texImage2D(a.TEXTURE_2D,0,rt,Se.width,Se.height,0,Fe,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&St&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,rt,ut[0].width,ut[0].height,Se.depth);for(let ne=0,me=ut.length;ne<me;ne++)if(ze=ut[ne],T.format!==ln)if(Fe!==null)if(at){if(V)if(T.layerUpdates.size>0){const Ue=Tm(ze.width,ze.height,T.format,T.type);for(const we of T.layerUpdates){const ht=ze.data.subarray(we*Ue/ze.data.BYTES_PER_ELEMENT,(we+1)*Ue/ze.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,we,ze.width,ze.height,1,Fe,ht)}T.clearLayerUpdates()}else r.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,ze.width,ze.height,Se.depth,Fe,ze.data)}else r.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ne,rt,ze.width,ze.height,Se.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&r.texSubImage3D(a.TEXTURE_2D_ARRAY,ne,0,0,0,ze.width,ze.height,Se.depth,Fe,tt,ze.data):r.texImage3D(a.TEXTURE_2D_ARRAY,ne,rt,ze.width,ze.height,Se.depth,0,Fe,tt,ze.data)}else{at&&St&&r.texStorage2D(a.TEXTURE_2D,Ce,rt,ut[0].width,ut[0].height);for(let ne=0,me=ut.length;ne<me;ne++)ze=ut[ne],T.format!==ln?Fe!==null?at?V&&r.compressedTexSubImage2D(a.TEXTURE_2D,ne,0,0,ze.width,ze.height,Fe,ze.data):r.compressedTexImage2D(a.TEXTURE_2D,ne,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&r.texSubImage2D(a.TEXTURE_2D,ne,0,0,ze.width,ze.height,Fe,tt,ze.data):r.texImage2D(a.TEXTURE_2D,ne,rt,ze.width,ze.height,0,Fe,tt,ze.data)}else if(T.isDataArrayTexture)if(at){if(St&&r.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,rt,Se.width,Se.height,Se.depth),V)if(T.layerUpdates.size>0){const ne=Tm(Se.width,Se.height,T.format,T.type);for(const me of T.layerUpdates){const Ue=Se.data.subarray(me*ne/Se.data.BYTES_PER_ELEMENT,(me+1)*ne/Se.data.BYTES_PER_ELEMENT);r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Fe,tt,Ue)}T.clearLayerUpdates()}else r.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)}else r.texImage3D(a.TEXTURE_2D_ARRAY,0,rt,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isData3DTexture)at?(St&&r.texStorage3D(a.TEXTURE_3D,Ce,rt,Se.width,Se.height,Se.depth),V&&r.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)):r.texImage3D(a.TEXTURE_3D,0,rt,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isFramebufferTexture){if(St)if(at)r.texStorage2D(a.TEXTURE_2D,Ce,rt,Se.width,Se.height);else{let ne=Se.width,me=Se.height;for(let Ue=0;Ue<Ce;Ue++)r.texImage2D(a.TEXTURE_2D,Ue,rt,ne,me,0,Fe,tt,null),ne>>=1,me>>=1}}else if(ut.length>0){if(at&&St){const ne=We(ut[0]);r.texStorage2D(a.TEXTURE_2D,Ce,rt,ne.width,ne.height)}for(let ne=0,me=ut.length;ne<me;ne++)ze=ut[ne],at?V&&r.texSubImage2D(a.TEXTURE_2D,ne,0,0,Fe,tt,ze):r.texImage2D(a.TEXTURE_2D,ne,rt,Fe,tt,ze);T.generateMipmaps=!1}else if(at){if(St){const ne=We(Se);r.texStorage2D(a.TEXTURE_2D,Ce,rt,ne.width,ne.height)}V&&r.texSubImage2D(a.TEXTURE_2D,0,0,0,Fe,tt,Se)}else r.texImage2D(a.TEXTURE_2D,0,rt,Fe,tt,Se);x(T)&&v(fe),Ve.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,K){if(T.image.length!==6)return;const fe=De(P,T),be=T.source;r.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+K);const he=i.get(be);if(be.version!==he.__version||fe===!0){r.activeTexture(a.TEXTURE0+K);const Ve=bt.getPrimaries(bt.workingColorSpace),Ae=T.colorSpace===Ei?null:bt.getPrimaries(T.colorSpace),et=T.colorSpace===Ei||Ve===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!qe&&!Se?Fe[me]=M(T.image[me],!0,o.maxCubemapSize):Fe[me]=Se?T.image[me].image:T.image[me],Fe[me]=Et(T,Fe[me]);const tt=Fe[0],rt=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),ut=N(T.internalFormat,rt,ze,T.colorSpace),at=T.isVideoTexture!==!0,St=he.__version===void 0||fe===!0,V=be.dataReady;let Ce=j(T,tt);re(a.TEXTURE_CUBE_MAP,T);let ne;if(qe){at&&St&&r.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ut,tt.width,tt.height);for(let me=0;me<6;me++){ne=Fe[me].mipmaps;for(let Ue=0;Ue<ne.length;Ue++){const we=ne[Ue];T.format!==ln?rt!==null?at?V&&r.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,we.width,we.height,rt,we.data):r.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ut,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?V&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,0,0,we.width,we.height,rt,ze,we.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue,ut,we.width,we.height,0,rt,ze,we.data)}}}else{if(ne=T.mipmaps,at&&St){ne.length>0&&Ce++;const me=We(Fe[0]);r.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Se){at?V&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,rt,ze,Fe[me].data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Fe[me].width,Fe[me].height,0,rt,ze,Fe[me].data);for(let Ue=0;Ue<ne.length;Ue++){const we=ne[Ue].image[me].image;at?V&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,we.width,we.height,rt,ze,we.data):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ut,we.width,we.height,0,rt,ze,we.data)}}else{at?V&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,rt,ze,Fe[me]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,rt,ze,Fe[me]);for(let Ue=0;Ue<ne.length;Ue++){const we=ne[Ue];at?V&&r.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,0,0,rt,ze,we.image[me]):r.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue+1,ut,rt,ze,we.image[me])}}}x(T)&&v(a.TEXTURE_CUBE_MAP),he.__version=be.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ee(P,T,K,fe,be,he){const Ve=l.convert(K.format,K.colorSpace),Ae=l.convert(K.type),et=N(K.internalFormat,Ve,Ae,K.colorSpace),qe=i.get(T),Se=i.get(K);if(Se.__renderTarget=T,!qe.__hasExternalTextures){const Fe=Math.max(1,T.width>>he),tt=Math.max(1,T.height>>he);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?r.texImage3D(be,he,et,Fe,tt,T.depth,0,Ve,Ae,null):r.texImage2D(be,he,et,Fe,tt,0,Ve,Ae,null)}r.bindFramebuffer(a.FRAMEBUFFER,P),ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,be,Se.__webglTexture,0,pt(T)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,fe,be,Se.__webglTexture,he),r.bindFramebuffer(a.FRAMEBUFFER,null)}function ye(P,T,K){if(a.bindRenderbuffer(a.RENDERBUFFER,P),T.depthBuffer){const fe=T.depthTexture,be=fe&&fe.isDepthTexture?fe.type:null,he=A(T.stencilBuffer,be),Ve=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=pt(T);ct(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ae,he,T.width,T.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,he,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,he,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ve,a.RENDERBUFFER,P)}else{const fe=T.textures;for(let be=0;be<fe.length;be++){const he=fe[be],Ve=l.convert(he.format,he.colorSpace),Ae=l.convert(he.type),et=N(he.internalFormat,Ve,Ae,he.colorSpace),qe=pt(T);K&&ct(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,qe,et,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,qe,et,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,et,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Re(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(a.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ve(T.depthTexture,0);const fe=K.__webglTexture,be=pt(T);if(T.depthTexture.format===js)ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0,be):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0);else if(T.depthTexture.format===Xs)ct(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0,be):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const T=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const fe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const be=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",be)};fe.addEventListener("dispose",be),T.__depthDisposeCallback=be}T.__boundDepthTexture=fe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const fe=P.texture.mipmaps;fe&&fe.length>0?Re(T.__webglFramebuffer[0],P):Re(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=a.createRenderbuffer(),ye(T.__webglDepthbuffer[fe],P,!1);else{const be=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[fe];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,he)}}else{const fe=P.texture.mipmaps;if(fe&&fe.length>0?r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):r.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),ye(T.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,he)}}r.bindFramebuffer(a.FRAMEBUFFER,null)}function Qe(P,T,K){const fe=i.get(P);T!==void 0&&Ee(fe.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&Oe(P)}function wt(P){const T=P.texture,K=i.get(P),fe=i.get(T);P.addEventListener("dispose",O);const be=P.textures,he=P.isWebGLCubeRenderTarget===!0,Ve=be.length>1;if(Ve||(fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture()),fe.__version=T.version,u.memory.textures++),he){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let et=0;et<T.mipmaps.length;et++)K.__webglFramebuffer[Ae][et]=a.createFramebuffer()}else K.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(Ve)for(let Ae=0,et=be.length;Ae<et;Ae++){const qe=i.get(be[Ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&ct(P)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],r.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<be.length;Ae++){const et=be[Ae];K.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const qe=l.convert(et.format,et.colorSpace),Se=l.convert(et.type),Fe=N(et.internalFormat,qe,Se,et.colorSpace,P.isXRRenderTarget===!0),tt=pt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,tt,Fe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(K.__webglDepthRenderbuffer,P,!0)),r.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){r.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),re(a.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ee(K.__webglFramebuffer[Ae][et],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,et);else Ee(K.__webglFramebuffer[Ae],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(T)&&v(a.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ve){for(let Ae=0,et=be.length;Ae<et;Ae++){const qe=be[Ae],Se=i.get(qe);r.bindTexture(a.TEXTURE_2D,Se.__webglTexture),re(a.TEXTURE_2D,qe),Ee(K.__webglFramebuffer,P,qe,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,0),x(qe)&&v(a.TEXTURE_2D)}r.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),r.bindTexture(Ae,fe.__webglTexture),re(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)Ee(K.__webglFramebuffer[et],P,T,a.COLOR_ATTACHMENT0,Ae,et);else Ee(K.__webglFramebuffer,P,T,a.COLOR_ATTACHMENT0,Ae,0);x(T)&&v(Ae),r.unbindTexture()}P.depthBuffer&&Oe(P)}function ft(P){const T=P.textures;for(let K=0,fe=T.length;K<fe;K++){const be=T[K];if(x(be)){const he=U(P),Ve=i.get(be).__webglTexture;r.bindTexture(he,Ve),v(he),r.unbindTexture()}}}const Ut=[],k=[];function mr(P){if(P.samples>0){if(ct(P)===!1){const T=P.textures,K=P.width,fe=P.height;let be=a.COLOR_BUFFER_BIT;const he=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ve=i.get(P),Ae=T.length>1;if(Ae)for(let qe=0;qe<T.length;qe++)r.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+qe,a.RENDERBUFFER,null),r.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+qe,a.TEXTURE_2D,null,0);r.bindFramebuffer(a.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const et=P.texture.mipmaps;et&&et.length>0?r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ve.__webglColorRenderbuffer[qe]);const Se=i.get(T[qe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Se,0)}a.blitFramebuffer(0,0,K,fe,0,0,K,fe,be,a.NEAREST),f===!0&&(Ut.length=0,k.length=0,Ut.push(a.COLOR_ATTACHMENT0+qe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ut.push(he),k.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,k)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ut))}if(r.bindFramebuffer(a.READ_FRAMEBUFFER,null),r.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let qe=0;qe<T.length;qe++){r.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+qe,a.RENDERBUFFER,Ve.__webglColorRenderbuffer[qe]);const Se=i.get(T[qe]).__webglTexture;r.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+qe,a.TEXTURE_2D,Se,0)}r.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const T=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function pt(P){return Math.min(o.maxSamples,P.samples)}function ct(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(P){const T=u.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Et(P,T){const K=P.colorSpace,fe=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Ja&&K!==Ei&&(bt.getTransfer(K)===At?(fe!==ln||be!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=ve,this.setTexture2DArray=oe,this.setTexture3D=pe,this.setTextureCube=F,this.rebindTextures=Qe,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=mr,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function IE(a,e){function r(i,o=Ei){let l;const u=bt.getTransfer(o);if(i===Wn)return a.UNSIGNED_BYTE;if(i===rh)return a.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return a.UNSIGNED_SHORT_5_5_5_1;if(i===vg)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===mg)return a.BYTE;if(i===gg)return a.SHORT;if(i===Gs)return a.UNSIGNED_SHORT;if(i===th)return a.INT;if(i===ia)return a.UNSIGNED_INT;if(i===Bn)return a.FLOAT;if(i===Ys)return a.HALF_FLOAT;if(i===_g)return a.ALPHA;if(i===xg)return a.RGB;if(i===ln)return a.RGBA;if(i===js)return a.DEPTH_COMPONENT;if(i===Xs)return a.DEPTH_STENCIL;if(i===yg)return a.RED;if(i===ih)return a.RED_INTEGER;if(i===bg)return a.RG;if(i===ah)return a.RG_INTEGER;if(i===sh)return a.RGBA_INTEGER;if(i===Dl||i===Ol||i===kl||i===Fl)if(u===At)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Dl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Dl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===Md||i===Ed||i===Td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Rd||i===Ad)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===wd||i===Rd)return u===At?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Ad)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cd||i===Pd||i===Ud||i===Ld||i===Nd||i===Id||i===Dd||i===Od||i===kd||i===Fd||i===zd||i===Bd||i===Hd||i===Vd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Cd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vd)return u===At?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Gd||i===Wd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===zl)return u===At?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sg||i===jd||i===Xd||i===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(i===jd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:r}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const o=new Lr,l=e.properties.get(o);l.__webglTexture=r.texture,(r.depthNear!==i.depthNear||r.depthFar!==i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new Ui({vertexShader:DE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Vn(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends ts{constructor(e,r){super();const i=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,_=null,g=null,y=null,b=null,E=null;const M=new kE,x=r.getContextAttributes();let v=null,U=null;const N=[],A=[],j=new Pt;let B=null;const O=new qr;O.viewport=new Vt;const X=new qr;X.viewport=new Vt;const C=[O,X],R=new ay;let H=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=N[Z];return de===void 0&&(de=new Ju,N[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=N[Z];return de===void 0&&(de=new Ju,N[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=N[Z];return de===void 0&&(de=new Ju,N[Z]=de),de.getHandSpace()};function te(Z){const de=A.indexOf(Z.inputSource);if(de===-1)return;const Ee=N[de];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||u),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",ve);for(let Z=0;Z<N.length;Z++){const de=A[Z];de!==null&&(A[Z]=null,N[Z].disconnect(de))}H=null,ae=null,M.reset(),e.setRenderTarget(v),b=null,y=null,g=null,o=null,U=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(j.width,j.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",ve),x.xrCompatible!==!0&&await r.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ee=null,ye=null;x.depth&&(ye=x.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,de=x.stencil?Xs:js,Ee=x.stencil?Ws:ia);const Re={colorFormat:r.RGBA8,depthFormat:ye,scaleFactor:l};g=new XRWebGLBinding(o,r),y=g.createProjectionLayer(Re),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new aa(y.textureWidth,y.textureHeight,{format:ln,type:Wn,depthTexture:new kg(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,r,de),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new aa(b.framebufferWidth,b.framebufferHeight,{format:ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ve(Z){for(let de=0;de<Z.removed.length;de++){const Ee=Z.removed[de],ye=A.indexOf(Ee);ye>=0&&(A[ye]=null,N[ye].disconnect(Ee))}for(let de=0;de<Z.added.length;de++){const Ee=Z.added[de];let ye=A.indexOf(Ee);if(ye===-1){for(let Oe=0;Oe<N.length;Oe++)if(Oe>=A.length){A.push(Ee),ye=Oe;break}else if(A[Oe]===null){A[Oe]=Ee,ye=Oe;break}if(ye===-1)break}const Re=N[ye];Re&&Re.connect(Ee)}}const oe=new ee,pe=new ee;function F(Z,de,Ee){oe.setFromMatrixPosition(de.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const ye=oe.distanceTo(pe),Re=de.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,Qe=Re[14]/(Re[10]-1),wt=Re[14]/(Re[10]+1),ft=(Re[9]+1)/Re[5],Ut=(Re[9]-1)/Re[5],k=(Re[8]-1)/Re[0],mr=(Oe[8]+1)/Oe[0],pt=Qe*k,ct=Qe*mr,Xe=ye/(-k+mr),Et=Xe*-k;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=Qe+Xe,P=wt+Xe,T=pt-Et,K=ct+(ye-Et),fe=ft*wt/P*We,be=Ut*wt/P*We;Z.projectionMatrix.makePerspective(T,K,fe,be,We,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let de=Z.near,Ee=Z.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),R.near=X.near=O.near=de,R.far=X.far=O.far=Ee,(H!==R.near||ae!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ae=R.far),O.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=O.layers.mask|X.layers.mask;const ye=Z.parent,Re=R.cameras;ie(R,ye);for(let Oe=0;Oe<Re.length;Oe++)ie(Re[Oe],ye);Re.length===2?F(R,O,X):R.projectionMatrix.copy(O.projectionMatrix),le(Z,R,ye)};function le(Z,de,Ee){Ee===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&b===null))return f},this.setFoveation=function(Z){f=Z,y!==null&&(y.fixedFoveation=Z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let I=null;function re(Z,de){if(_=de.getViewerPose(p||u),E=de,_!==null){const Ee=_.views;b!==null&&(e.setRenderTargetFramebuffer(U,b.framebuffer),e.setRenderTarget(U));let ye=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Oe=0;Oe<Ee.length;Oe++){const Qe=Ee[Oe];let wt=null;if(b!==null)wt=b.getViewport(Qe);else{const Ut=g.getViewSubImage(y,Qe);wt=Ut.viewport,Oe===0&&(e.setRenderTargetTextures(U,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(U))}let ft=C[Oe];ft===void 0&&(ft=new qr,ft.layers.enable(Oe),ft.viewport=new Vt,C[Oe]=ft),ft.matrix.fromArray(Qe.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Qe.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(wt.x,wt.y,wt.width,wt.height),Oe===0&&(R.matrix.copy(ft.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(ft)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Oe=g.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,o.renderState)}}for(let Ee=0;Ee<N.length;Ee++){const ye=A[Ee],Re=N[Ee];ye!==null&&Re!==void 0&&Re.update(ye,de,p||u)}I&&I(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const De=new Fg;De.setAnimationLoop(re),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Zi=new jn,zE=new Gt;function BE(a,e){function r(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,Lg(a)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,U,N,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),g(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&b(x,v,A)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),M(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?f(x,v,U,N):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,r(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,r(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Ur&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,r(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Ur&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,r(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,r(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,r(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const U=e.get(v),N=U.envMap,A=U.envMapRotation;N&&(x.envMap.value=N,Zi.copy(A),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),x.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(Zi)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,r(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,r(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,r(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,U,N){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*U,x.scale.value=N*.5,v.map&&(x.map.value=v.map,r(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,r(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,r(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,r(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,r(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function b(x,v,U){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,r(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,r(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,r(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,r(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,r(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ur&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,r(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,r(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,r(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,r(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,r(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,r(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,r(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){const U=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function HE(a,e,r,i){let o={},l={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,N){const A=N.program;i.uniformBlockBinding(U,A)}function p(U,N){let A=o[U.id];A===void 0&&(E(U),A=_(U),o[U.id]=A,U.addEventListener("dispose",x));const j=N.program;i.updateUBOMapping(U,j);const B=e.render.frame;l[U.id]!==B&&(y(U),l[U.id]=B)}function _(U){const N=g();U.__bindingPointIndex=N;const A=a.createBuffer(),j=U.__size,B=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,A),a.bufferData(a.UNIFORM_BUFFER,j,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,A),A}function g(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const N=o[U.id],A=U.uniforms,j=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let B=0,O=A.length;B<O;B++){const X=Array.isArray(A[B])?A[B]:[A[B]];for(let C=0,R=X.length;C<R;C++){const H=X[C];if(b(H,B,C,j)===!0){const ae=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let ve=0;ve<te.length;ve++){const oe=te[ve],pe=M(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,a.bufferSubData(a.UNIFORM_BUFFER,ae+ue,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,ue),ue+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ae,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(U,N,A,j){const B=U.value,O=N+"_"+A;if(j[O]===void 0)return typeof B=="number"||typeof B=="boolean"?j[O]=B:j[O]=B.clone(),!0;{const X=j[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return j[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(U){const N=U.uniforms;let A=0;const j=16;for(let O=0,X=N.length;O<X;O++){const C=Array.isArray(N[O])?N[O]:[N[O]];for(let R=0,H=C.length;R<H;R++){const ae=C[R],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,ve=te.length;ue<ve;ue++){const oe=te[ue],pe=M(oe),F=A%j,ie=F%pe.boundary,le=F+ie;A+=ie,le!==0&&j-le<pe.storage&&(A+=j-le),ae.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=pe.storage}}}const B=A%j;return B>0&&(A+=j-B),U.__size=A,U.__cache={},this}function M(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function x(U){const N=U.target;N.removeEventListener("dispose",x);const A=u.indexOf(N.__bindingPointIndex);u.splice(A,1),a.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function v(){for(const U in o)a.deleteBuffer(o[U]);u=[],o={},l={}}return{bind:f,update:p,dispose:v}}class VE{constructor(e={}){const{canvas:r=Ex(),context:i=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=u;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,v=null;const U=[],N=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let j=!1;this._outputColorSpace=Yr;let B=0,O=0,X=null,C=-1,R=null;const H=new Vt,ae=new Vt;let te=null;const ue=new Tt(0);let ve=0,oe=r.width,pe=r.height,F=1,ie=null,le=null;const I=new Vt(0,0,oe,pe),re=new Vt(0,0,oe,pe);let De=!1;const Z=new Dg;let de=!1,Ee=!1;const ye=new Gt,Re=new Gt,Oe=new ee,Qe=new Vt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ut(){return X===null?F:1}let k=i;function mr(w,W){return r.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${eh}`),r.addEventListener("webglcontextlost",me,!1),r.addEventListener("webglcontextrestored",Ue,!1),r.addEventListener("webglcontextcreationerror",we,!1),k===null){const W="webgl2";if(k=mr(W,w),k===null)throw mr(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,ct,Xe,Et,We,P,T,K,fe,be,he,Ve,Ae,et,qe,Se,Fe,tt,rt,ze,ut,at,St,V;function Ce(){pt=new JS(k),pt.init(),at=new IE(k,pt),ct=new jS(k,pt,e,at),Xe=new LE(k,pt),ct.reverseDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),Et=new tM(k),We=new xE,P=new NE(k,pt,Xe,We,ct,at,Et),T=new $S(A),K=new ZS(A),fe=new oy(k),St=new GS(k,fe),be=new QS(k,fe,Et,St),he=new nM(k,be,fe,Et),rt=new rM(k,ct,P),Se=new XS(We),Ve=new _E(A,T,K,pt,ct,St,Se),Ae=new BE(A,We),et=new bE,qe=new RE(pt),tt=new VS(A,T,K,Xe,he,b,f),Fe=new PE(A,he,ct),V=new HE(k,Et,ct,Xe),ze=new WS(k,pt,Et),ut=new eM(k,pt,Et),Et.programs=Ve.programs,A.capabilities=ct,A.extensions=pt,A.properties=We,A.renderLists=et,A.shadowMap=Fe,A.state=Xe,A.info=Et}Ce();const ne=new FE(A,k);this.xr=ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(oe,pe,!1))},this.getSize=function(w){return w.set(oe,pe)},this.setSize=function(w,W,Q=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,pe=W,r.width=Math.floor(w*F),r.height=Math.floor(W*F),Q===!0&&(r.style.width=w+"px",r.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(oe*F,pe*F).floor()},this.setDrawingBufferSize=function(w,W,Q){oe=w,pe=W,F=Q,r.width=Math.floor(w*Q),r.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,W,Q,Y){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,W,Q,Y),Xe.viewport(H.copy(I).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,W,Q,Y){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,W,Q,Y),Xe.scissor(ae.copy(re).multiplyScalar(F).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Xe.setScissorTest(De=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,Q=!0){let Y=0;if(w){let G=!1;if(X!==null){const xe=X.texture.format;G=xe===sh||xe===ah||xe===ih}if(G){const xe=X.texture.type,Ne=xe===Wn||xe===ia||xe===Gs||xe===Ws||xe===rh||xe===nh,Le=tt.getClearColor(),Ge=tt.getClearAlpha(),nt=Le.r,Ke=Le.g,Ye=Le.b;Ne?(E[0]=nt,E[1]=Ke,E[2]=Ye,E[3]=Ge,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=nt,M[1]=Ke,M[2]=Ye,M[3]=Ge,k.clearBufferiv(k.COLOR,0,M))}else Y|=k.COLOR_BUFFER_BIT}W&&(Y|=k.DEPTH_BUFFER_BIT),Q&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",me,!1),r.removeEventListener("webglcontextrestored",Ue,!1),r.removeEventListener("webglcontextcreationerror",we,!1),tt.dispose(),et.dispose(),qe.dispose(),We.dispose(),T.dispose(),K.dispose(),he.dispose(),St.dispose(),V.dispose(),Ve.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",la),ne.removeEventListener("sessionend",$n),xn.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=Et.autoReset,W=Fe.enabled,Q=Fe.autoUpdate,Y=Fe.needsUpdate,G=Fe.type;Ce(),Et.autoReset=w,Fe.enabled=W,Fe.autoUpdate=Q,Fe.needsUpdate=Y,Fe.type=G}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ht(w){const W=w.target;W.removeEventListener("dispose",ht),Nt(W)}function Nt(w){Yt(w),We.remove(w)}function Yt(w){const W=We.get(w).programs;W!==void 0&&(W.forEach(function(Q){Ve.releaseProgram(Q)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,Y,G,xe){W===null&&(W=wt);const Ne=G.isMesh&&G.matrixWorld.determinant()<0,Le=ro(w,W,Q,Y,G);Xe.setMaterial(Y,Ne);let Ge=Q.index,nt=1;if(Y.wireframe===!0){if(Ge=be.getWireframeAttribute(Q),Ge===void 0)return;nt=2}const Ke=Q.drawRange,Ye=Q.attributes.position;let gt=Ke.start*nt,ot=(Ke.start+Ke.count)*nt;xe!==null&&(gt=Math.max(gt,xe.start*nt),ot=Math.min(ot,(xe.start+xe.count)*nt)),Ge!==null?(gt=Math.max(gt,0),ot=Math.min(ot,Ge.count)):Ye!=null&&(gt=Math.max(gt,0),ot=Math.min(ot,Ye.count));const Bt=ot-gt;if(Bt<0||Bt===1/0)return;St.setup(G,Y,Le,Q,Ge);let Mt,Rt=ze;if(Ge!==null&&(Mt=fe.get(Ge),Rt=ut,Rt.setIndex(Mt)),G.isMesh)Y.wireframe===!0?(Xe.setLineWidth(Y.wireframeLinewidth*Ut()),Rt.setMode(k.LINES)):Rt.setMode(k.TRIANGLES);else if(G.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),Xe.setLineWidth($e*Ut()),G.isLineSegments?Rt.setMode(k.LINES):G.isLineLoop?Rt.setMode(k.LINE_LOOP):Rt.setMode(k.LINE_STRIP)}else G.isPoints?Rt.setMode(k.POINTS):G.isSprite&&Rt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Bl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Wt=G._multiDrawCounts,Ir=G._multiDrawCount,or=Ge?fe.get(Ge).bytesPerElement:1,qn=We.get(Y).currentProgram.getUniforms();for(let vr=0;vr<Ir;vr++)qn.setValue(k,"_gl_DrawID",vr),Rt.render($e[vr]/or,Wt[vr])}else if(G.isInstancedMesh)Rt.renderInstances(gt,Bt,G.count);else if(Q.isInstancedBufferGeometry){const $e=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Wt=Math.min(Q.instanceCount,$e);Rt.renderInstances(gt,Bt,Wt)}else Rt.render(gt,Bt)};function vt(w,W,Q){w.transparent===!0&&w.side===zn&&w.forceSinglePass===!1?(w.side=Ur,w.needsUpdate=!0,ca(w,W,Q),w.side=Pi,w.needsUpdate=!0,ca(w,W,Q),w.side=zn):ca(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),v=qe.get(Q),v.init(W),N.push(v),Q.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),w!==Q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const Y=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Ne=0;Ne<xe.length;Ne++){const Le=xe[Ne];vt(Le,Q,G),Y.add(Le)}else vt(xe,Q,G),Y.add(xe)}),v=N.pop(),Y},this.compileAsync=function(w,W,Q=null){const Y=this.compile(w,W,Q);return new Promise(G=>{function xe(){if(Y.forEach(function(Ne){We.get(Ne).currentProgram.isReady()&&Y.delete(Ne)}),Y.size===0){G(w);return}setTimeout(xe,10)}pt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sr=null;function gr(w){Sr&&Sr(w)}function la(){xn.stop()}function $n(){xn.start()}const xn=new Fg;xn.setAnimationLoop(gr),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(w){Sr=w,ne.setAnimationLoop(w),w===null?xn.stop():xn.start()},ne.addEventListener("sessionstart",la),ne.addEventListener("sessionend",$n),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,X),v=qe.get(w,N.length),v.init(W),N.push(v),Re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,de=Se.init(this.clippingPlanes,Ee),x=et.get(w,U.length),x.init(),U.push(x),ne.enabled===!0&&ne.isPresenting===!0){const xe=A.xr.getDepthSensingMesh();xe!==null&&yn(xe,W,-1/0,A.sortObjects)}yn(w,W,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ie,le),ft=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ft&&tt.addToRenderList(x,w),this.info.render.frame++,de===!0&&Se.beginShadows();const Q=v.state.shadowsArray;Fe.render(Q,w,W),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,G=x.transmissive;if(v.setupLights(),W.isArrayCamera){const xe=W.cameras;if(G.length>0)for(let Ne=0,Le=xe.length;Ne<Le;Ne++){const Ge=xe[Ne];Ni(Y,G,w,Ge)}ft&&tt.render(w);for(let Ne=0,Le=xe.length;Ne<Le;Ne++){const Ge=xe[Ne];Li(x,w,Ge,Ge.viewport)}}else G.length>0&&Ni(Y,G,w,W),ft&&tt.render(w),Li(x,w,W);X!==null&&O===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(A,w,W),St.resetDefaultState(),C=-1,R=null,N.pop(),N.length>0?(v=N[N.length-1],de===!0&&Se.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function yn(w,W,Q,Y){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){Y&&Qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const xe=he.update(w),Ne=w.material;Ne.visible&&x.push(w,xe,Ne,Q,Qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const xe=he.update(w),Ne=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qe.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Qe.copy(xe.boundingSphere.center)),Qe.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(Ne)){const Le=xe.groups;for(let Ge=0,nt=Le.length;Ge<nt;Ge++){const Ke=Le[Ge],Ye=Ne[Ke.materialIndex];Ye&&Ye.visible&&x.push(w,xe,Ye,Q,Qe.z,Ke)}}else Ne.visible&&x.push(w,xe,Ne,Q,Qe.z,null)}}const G=w.children;for(let xe=0,Ne=G.length;xe<Ne;xe++)yn(G[xe],W,Q,Y)}function Li(w,W,Q,Y){const G=w.opaque,xe=w.transmissive,Ne=w.transparent;v.setupLightsView(Q),de===!0&&Se.setGlobalState(A.clippingPlanes,Q),Y&&Xe.viewport(H.copy(Y)),G.length>0&&Yn(G,W,Q),xe.length>0&&Yn(xe,W,Q),Ne.length>0&&Yn(Ne,W,Q),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Ni(w,W,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Y.id]===void 0&&(v.state.transmissionRenderTarget[Y.id]=new aa(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ys:Wn,minFilter:na,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const G=v.state.transmissionRenderTarget[Y.id],xe=Y.viewport||H;G.setSize(xe.z*A.transmissionResolutionScale,xe.w*A.transmissionResolutionScale);const Ne=A.getRenderTarget();A.setRenderTarget(G),A.getClearColor(ue),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),ft&&tt.render(Q);const Le=A.toneMapping;A.toneMapping=Ai;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),v.setupLightsView(Y),de===!0&&Se.setGlobalState(A.clippingPlanes,Y),Yn(w,Q,Y),P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G),pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ke=0,Ye=W.length;Ke<Ye;Ke++){const gt=W[Ke],ot=gt.object,Bt=gt.geometry,Mt=gt.material,Rt=gt.group;if(Mt.side===zn&&ot.layers.test(Y.layers)){const $e=Mt.side;Mt.side=Ur,Mt.needsUpdate=!0,eo(ot,Q,Y,Bt,Mt,Rt),Mt.side=$e,Mt.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G))}A.setRenderTarget(Ne),A.setClearColor(ue,ve),Ge!==void 0&&(Y.viewport=Ge),A.toneMapping=Le}function Yn(w,W,Q){const Y=W.isScene===!0?W.overrideMaterial:null;for(let G=0,xe=w.length;G<xe;G++){const Ne=w[G],Le=Ne.object,Ge=Ne.geometry,nt=Ne.group;let Ke=Ne.material;Ke.allowOverride===!0&&Y!==null&&(Ke=Y),Le.layers.test(Q.layers)&&eo(Le,W,Q,Ge,Ke,nt)}}function eo(w,W,Q,Y,G,xe){w.onBeforeRender(A,W,Q,Y,G,xe),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(A,W,Q,Y,w,xe),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=Ur,G.needsUpdate=!0,A.renderBufferDirect(Q,W,Y,G,w,xe),G.side=Pi,G.needsUpdate=!0,A.renderBufferDirect(Q,W,Y,G,w,xe),G.side=zn):A.renderBufferDirect(Q,W,Y,G,w,xe),w.onAfterRender(A,W,Q,Y,G,xe)}function ca(w,W,Q){W.isScene!==!0&&(W=wt);const Y=We.get(w),G=v.state.lights,xe=v.state.shadowsArray,Ne=G.state.version,Le=Ve.getParameters(w,G.state,xe,W,Q),Ge=Ve.getProgramCacheKey(Le);let nt=Y.programs;Y.environment=w.isMeshStandardMaterial?W.environment:null,Y.fog=W.fog,Y.envMap=(w.isMeshStandardMaterial?K:T).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",ht),nt=new Map,Y.programs=nt);let Ke=nt.get(Ge);if(Ke!==void 0){if(Y.currentProgram===Ke&&Y.lightsStateVersion===Ne)return un(w,Le),Ke}else Le.uniforms=Ve.getUniforms(w),w.onBeforeCompile(Le,A),Ke=Ve.acquireProgram(Le,Ge),nt.set(Ge,Ke),Y.uniforms=Le.uniforms;const Ye=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Se.uniform),un(w,Le),Y.needsLights=Jl(w),Y.lightsStateVersion=Ne,Y.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ke,Y.uniformsList=null,Ke}function to(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Hl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function un(w,W){const Q=We.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function ro(w,W,Q,Y,G){W.isScene!==!0&&(W=wt),P.resetTextureUnits();const xe=W.fog,Ne=Y.isMeshStandardMaterial?W.environment:null,Le=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ja,Ge=(Y.isMeshStandardMaterial?K:T).get(Y.envMap||Ne),nt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ke=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ye=!!Q.morphAttributes.position,gt=!!Q.morphAttributes.normal,ot=!!Q.morphAttributes.color;let Bt=Ai;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=A.toneMapping);const Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=Mt!==void 0?Mt.length:0,$e=We.get(Y),Wt=v.state.lights;if(de===!0&&(Ee===!0||w!==R)){const qt=w===R&&Y.id===C;Se.setState(Y,w,qt)}let Ir=!1;Y.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Le||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isBatchedMesh&&$e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$e.instancingMorph===!1&&G.morphTexture!==null||$e.envMap!==Ge||Y.fog===!0&&$e.fog!==xe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==Ke||$e.morphTargets!==Ye||$e.morphNormals!==gt||$e.morphColors!==ot||$e.toneMapping!==Bt||$e.morphTargetsCount!==Rt)&&(Ir=!0):(Ir=!0,$e.__version=Y.version);let or=$e.currentProgram;Ir===!0&&(or=ca(Y,W,G));let qn=!1,vr=!1,bn=!1;const Ct=or.getUniforms(),lr=$e.uniforms;if(Xe.useProgram(or.program)&&(qn=!0,vr=!0,bn=!0),Y.id!==C&&(C=Y.id,vr=!0),qn||R!==w){Xe.buffers.depth.getReversed()?(ye.copy(w.projectionMatrix),wx(ye),Rx(ye),Ct.setValue(k,"projectionMatrix",ye)):Ct.setValue(k,"projectionMatrix",w.projectionMatrix),Ct.setValue(k,"viewMatrix",w.matrixWorldInverse);const qt=Ct.map.cameraPosition;qt!==void 0&&qt.setValue(k,Oe.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,vr=!0,bn=!0)}if(G.isSkinnedMesh){Ct.setOptional(k,G,"bindMatrix"),Ct.setOptional(k,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ct.setValue(k,"boneTexture",qt.boneTexture,P))}G.isBatchedMesh&&(Ct.setOptional(k,G,"batchingTexture"),Ct.setValue(k,"batchingTexture",G._matricesTexture,P),Ct.setOptional(k,G,"batchingIdTexture"),Ct.setValue(k,"batchingIdTexture",G._indirectTexture,P),Ct.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(k,"batchingColorTexture",G._colorsTexture,P));const er=Q.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&rt.update(G,Q,or),(vr||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,Ct.setValue(k,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(lr.envMap.value=Ge,lr.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&W.environment!==null&&(lr.envMapIntensity.value=W.environmentIntensity),vr&&(Ct.setValue(k,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&no(lr,bn),xe&&Y.fog===!0&&Ae.refreshFogUniforms(lr,xe),Ae.refreshMaterialUniforms(lr,Y,F,pe,v.state.transmissionRenderTarget[w.id]),Hl.upload(k,to($e),lr,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hl.upload(k,to($e),lr,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(k,"center",G.center),Ct.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(k,"normalMatrix",G.normalMatrix),Ct.setValue(k,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const qt=Y.uniformsGroups;for(let _r=0,_t=qt.length;_r<_t;_r++){const dn=qt[_r];V.update(dn,or),V.bind(dn,or)}}return or}function no(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,W,Q){const Y=We.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=W,We.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const Q=We.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const io=k.createFramebuffer();this.setRenderTarget=function(w,W=0,Q=0){X=w,B=W,O=Q;let Y=!0,G=null,xe=!1,Ne=!1;if(w){const Le=We.get(w);if(Le.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(Le.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Le.__hasExternalTextures)P.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(Le.__boundDepthTexture!==Ke){if(Ke!==null&&We.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);const nt=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?G=nt[W][Q]:G=nt[W],xe=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?G=We.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[Q]:G=nt,H.copy(w.viewport),ae.copy(w.scissor),te=w.scissorTest}else H.copy(I).multiplyScalar(F).floor(),ae.copy(re).multiplyScalar(F).floor(),te=De;if(Q!==0&&(G=io),Xe.bindFramebuffer(k.FRAMEBUFFER,G)&&Y&&Xe.drawBuffers(w,G),Xe.viewport(H),Xe.scissor(ae),Xe.setScissorTest(te),xe){const Le=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,Q)}else if(Ne){const Le=We.get(w.texture),Ge=W;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,Q,Ge)}else if(w!==null&&Q!==0){const Le=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Le.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(w,W,Q,Y,G,xe,Ne){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le){Xe.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Ge=w.texture,nt=Ge.format,Ke=Ge.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Y&&Q>=0&&Q<=w.height-G&&k.readPixels(W,Q,Y,G,at.convert(nt),at.convert(Ke),xe)}finally{const Ge=X!==null?We.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,W,Q,Y,G,xe,Ne){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Le=Le[Ne]),Le)if(W>=0&&W<=w.width-Y&&Q>=0&&Q<=w.height-G){Xe.bindFramebuffer(k.FRAMEBUFFER,Le);const Ge=w.texture,nt=Ge.format,Ke=Ge.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(W,Q,Y,G,at.convert(nt),at.convert(Ke),0);const gt=X!==null?We.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(k.FRAMEBUFFER,gt);const ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Tx(k,ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.deleteBuffer(Ye),k.deleteSync(ot),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,Q=0){const Y=Math.pow(2,-Q),G=Math.floor(w.image.width*Y),xe=Math.floor(w.image.height*Y),Ne=W!==null?W.x:0,Le=W!==null?W.y:0;P.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ne,Le,G,xe),Xe.unbindTexture()};const ao=k.createFramebuffer(),so=k.createFramebuffer();this.copyTextureToTexture=function(w,W,Q=null,Y=null,G=0,xe=null){xe===null&&(G!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=G,G=0):xe=0);let Ne,Le,Ge,nt,Ke,Ye,gt,ot,Bt;const Mt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(Q!==null)Ne=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,Ge=Q.isBox3?Q.max.z-Q.min.z:1,nt=Q.min.x,Ke=Q.min.y,Ye=Q.isBox3?Q.min.z:0;else{const er=Math.pow(2,-G);Ne=Math.floor(Mt.width*er),Le=Math.floor(Mt.height*er),w.isDataArrayTexture?Ge=Mt.depth:w.isData3DTexture?Ge=Math.floor(Mt.depth*er):Ge=1,nt=0,Ke=0,Ye=0}Y!==null?(gt=Y.x,ot=Y.y,Bt=Y.z):(gt=0,ot=0,Bt=0);const Rt=at.convert(W.format),$e=at.convert(W.type);let Wt;W.isData3DTexture?(P.setTexture3D(W,0),Wt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Wt=k.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Wt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ir=k.getParameter(k.UNPACK_ROW_LENGTH),or=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qn=k.getParameter(k.UNPACK_SKIP_PIXELS),vr=k.getParameter(k.UNPACK_SKIP_ROWS),bn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const Ct=w.isDataArrayTexture||w.isData3DTexture,lr=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const er=We.get(w),qt=We.get(W),_r=We.get(er.__renderTarget),_t=We.get(qt.__renderTarget);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,_r.__webglFramebuffer),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dn=0;dn<Ge;dn++)Ct&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(w).__webglTexture,G,Ye+dn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(W).__webglTexture,xe,Bt+dn)),k.blitFramebuffer(nt,Ke,Ne,Le,gt,ot,Ne,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||We.has(w)){const er=We.get(w),qt=We.get(W);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,ao),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,so);for(let _r=0;_r<Ge;_r++)Ct?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,er.__webglTexture,G,Ye+_r):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,er.__webglTexture,G),lr?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,xe,Bt+_r):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,xe),G!==0?k.blitFramebuffer(nt,Ke,Ne,Le,gt,ot,Ne,Le,k.COLOR_BUFFER_BIT,k.NEAREST):lr?k.copyTexSubImage3D(Wt,xe,gt,ot,Bt+_r,nt,Ke,Ne,Le):k.copyTexSubImage2D(Wt,xe,gt,ot,nt,Ke,Ne,Le);Xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else lr?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Wt,xe,gt,ot,Bt,Ne,Le,Ge,Rt,$e,Mt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Wt,xe,gt,ot,Bt,Ne,Le,Ge,Rt,Mt.data):k.texSubImage3D(Wt,xe,gt,ot,Bt,Ne,Le,Ge,Rt,$e,Mt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,gt,ot,Ne,Le,Rt,$e,Mt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,gt,ot,Mt.width,Mt.height,Rt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,xe,gt,ot,Ne,Le,Rt,$e,Mt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ir),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,or),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qn),k.pixelStorei(k.UNPACK_SKIP_ROWS,vr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,bn),xe===0&&W.generateMipmaps&&k.generateMipmap(Wt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q=null,Y=null,G=0){return Bl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,Q,Y,G)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){B=0,O=0,X=null,Xe.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),r.unpackColorSpace=bt._getUnpackColorSpace()}}const GE=({className:a="",children:e})=>{const r=ce.useRef(null),i=ce.useRef(null);return ce.useEffect(()=>{const o=window.innerWidth,l=window.innerHeight,u=new Jx,d=new qr(75,o/l,.1,1e3);d.position.set(0,0,0);const f=new VE({alpha:!0});f.setSize(o,l),f.setClearColor(0,0),i.current=f,r.current&&r.current.appendChild(f.domElement);const p=new Xn,_=new Og({color:16777215,size:.5}),g=[];for(let M=0;M<1e4;M++)g.push(Math.random()*2e3-1e3),g.push(Math.random()*2e3-1e3),g.push(Math.random()*2e3-1e3);p.setAttribute("position",new Ci(g,3));const y=new ty(p,_);u.add(y);const b=()=>{requestAnimationFrame(b),y.rotation.x+=5e-4,y.rotation.y+=5e-4,f.render(u,d)};b();const E=()=>{const M=window.innerWidth,x=window.innerHeight;d.aspect=M/x,d.updateProjectionMatrix(),f.setSize(M,x)};return window.addEventListener("resize",E),()=>{r.current&&f.domElement&&r.current.removeChild(f.domElement),window.removeEventListener("resize",E),f.dispose(),p.dispose()}},[]),se.jsxs("div",{ref:r,className:`absolute inset-0 w-full h-full pointer-events-none z-0 ${a}`,children:[e," "]})},WE=({pixelRunnerScore:a,moonDropScore:e,numberSmashScore:r,colorClashScore:i,worldWhirlScore:o,memoryGridScore:l})=>{const[u,d]=ce.useState({pixelRunnerScore:a,moonDropScore:e,numberSmashScore:r,colorClashScore:i,worldWhirlScore:o,memoryGridScore:l});return ce.useEffect(()=>{const f={pixelRunnerScore:localStorage.getItem("pixelRunnerScore"),moonDropScore:localStorage.getItem("moonDropScore"),numberSmashScore:localStorage.getItem("numberSmashScore"),colorClashScore:localStorage.getItem("colorClashScore"),worldWhirlScore:localStorage.getItem("worldWhirlScore"),memoryGridScore:localStorage.getItem("memoryGridScore")};d({pixelRunnerScore:f.pixelRunnerScore?Number(f.pixelRunnerScore):0,moonDropScore:f.moonDropScore?Number(f.moonDropScore):0,numberSmashScore:f.numberSmashScore?Number(f.numberSmashScore):0,colorClashScore:f.colorClashScore?Number(f.colorClashScore):0,worldWhirlScore:f.worldWhirlScore?Number(f.worldWhirlScore):0,memoryGridScore:f.memoryGridScore?Number(f.memoryGridScore):0})},[]),se.jsxs("div",{className:"home-container",children:[se.jsx("div",{className:"overlay"}),se.jsxs("div",{className:"user-icon",children:[se.jsx("img",{src:"/user.jpeg",alt:"User Avatar"}),se.jsx("span",{className:"user-name",children:"User"})]}),se.jsxs("div",{className:"score-display",children:[se.jsx("h2",{children:"Game Scores"}),se.jsxs("div",{className:"score-item",children:["Pixel Runner: ",u.pixelRunnerScore]}),se.jsxs("div",{className:"score-item",children:["Moon Drop: ",u.moonDropScore]}),se.jsxs("div",{className:"score-item",children:["Number Smash: ",u.numberSmashScore]}),se.jsxs("div",{className:"score-item",children:["Color Clash: ",u.colorClashScore]}),se.jsxs("div",{className:"score-item",children:["World Whirl: ",u.worldWhirlScore]}),se.jsxs("div",{className:"score-item",children:["Memory Grid: ",u.memoryGridScore]})]})]})},Si=[{title:"Color Clash",description:"Click the right color before time runs out!",image:"/color.png"},{title:"World Whirl",description:"Rearrange the scrambled words before time runs out.",image:"/word.png"},{title:"About",description:"Learn more about the developer and the mission behind these games.",image:"/about.png"},{title:"Home",description:"Return to the homepage and explore more games.",image:"/home.png"},{title:"Memory Grid",description:"Flip the cards and test your memory in this brain workout.",image:"/memory.png"},{title:"Moondrop",description:"Avoid falling meteors as you catch moons across space!",image:"/moondrop.png"},{title:"Number Smash",description:"Smash the correct numbers before they vanish!",image:"/number.png"},{title:"Pixel Runner",description:"Jump over obstacles and run as far as you can!",image:"/pixel.png"}],jE=()=>{const[a,e]=ce.useState(0);ce.useEffect(()=>{const o=setInterval(()=>{e(l=>(l+1)%Si.length)},5e3);return()=>clearInterval(o)},[]);const r=()=>e(o=>(o+1)%Si.length),i=()=>e(o=>(o-1+Si.length)%Si.length);return se.jsxs("div",{className:"about-container",children:[se.jsx("h1",{className:"carousel-title",children:"How to Play"}),se.jsxs("div",{className:"carousel-container",children:[se.jsx("button",{className:"carousel-button left",onClick:i,children:"‹"}),se.jsxs("div",{className:"carousel-slide",children:[se.jsx("img",{src:Si[a].image,alt:Si[a].title,className:"carousel-image"}),se.jsxs("div",{className:"carousel-text",children:[se.jsx("h2",{children:Si[a].title}),se.jsx("p",{children:Si[a].description})]})]}),se.jsx("button",{className:"carousel-button right",onClick:r,children:"›"})]}),se.jsxs("div",{className:"about-container",children:[se.jsx("h1",{children:"About Me"}),se.jsx("p",{children:"I'm a passionate designer and coder, blending creativity with functionality. I enjoy creating visually appealing and user-friendly experiences, whether it's through web design or app development. My focus is on intuitive design and clean, efficient code. I believe that design is not just about aesthetics but about creating seamless interactions that make the user's journey as easy as possible."}),se.jsx("img",{src:"/me.jpg",alt:"Profile",className:"about-image"})]})]})},XE=({setScore:a,score:e})=>{const[r,i]=ce.useState([]),[o,l]=ce.useState([]),[u,d]=ce.useState({x:0,y:0}),f=ce.useRef({}),p=ce.useRef({}),_=ce.useRef(Date.now());return ce.useEffect(()=>{const g=setInterval(()=>{const y=crypto.randomUUID();i(b=>[...b,{id:y,left:Math.random()*window.innerWidth}]),setTimeout(()=>{i(b=>b.filter(E=>E.id!==y))},1e4)},1e3);return()=>clearInterval(g)},[]),ce.useEffect(()=>{const g=setInterval(()=>{const y=crypto.randomUUID();l(b=>[...b,{id:y,left:Math.random()*window.innerWidth}]),setTimeout(()=>{l(b=>b.filter(E=>E.id!==y))},1e4)},3e3);return()=>clearInterval(g)},[]),ce.useEffect(()=>{const g=y=>d({x:y.clientX,y:y.clientY});return window.addEventListener("mousemove",g),()=>window.removeEventListener("mousemove",g)},[]),ce.useEffect(()=>{const g=setInterval(()=>{const y=(Date.now()-_.current)/1e4,b=Math.max(1,6-y);r.forEach(E=>{const M=f.current[E.id];if(M){const x=M.getBoundingClientRect();u.x>=x.left&&u.x<=x.right&&u.y>=x.top&&u.y<=x.bottom&&(a(v=>{const U=v+1;return localStorage.setItem("gameScore",String(U)),U}),i(v=>v.filter(U=>U.id!==E.id)),delete f.current[E.id]),M.style.animationDuration=`${b}s`}}),o.forEach(E=>{const M=p.current[E.id];if(M){const x=M.getBoundingClientRect();u.x>=x.left&&u.x<=x.right&&u.y>=x.top&&u.y<=x.bottom&&(a(0),localStorage.setItem("gameScore","0"),l(v=>v.filter(U=>U.id!==E.id)),delete p.current[E.id]),M.style.animationDuration=`${b}s`}})},50);return()=>clearInterval(g)},[u,r,o,a]),se.jsxs("div",{style:Nl.gameArea,children:[se.jsx(GE,{}),se.jsxs("div",{style:Nl.score,children:["Score: ",e]}),r.map(g=>{const y=(Date.now()-_.current)/1e4,b=Math.max(1,6-y);return se.jsx("img",{ref:E=>{f.current[g.id]=E},src:"/moon.png",alt:"moon",style:{...Nl.entity,left:g.left,animation:`fall ${b}s linear forwards`}},g.id)}),o.map(g=>{const y=(Date.now()-_.current)/1e4,b=Math.max(1,6-y);return se.jsx("img",{ref:E=>{p.current[g.id]=E},src:"/bomb.png",alt:"bomb",style:{...Nl.entity,left:g.left,animation:`fall ${b}s linear forwards`}},g.id)}),se.jsx("style",{children:`
        @keyframes fall {
          0% { top: -50px; opacity: 1; transform: scale(1); }
          100% { top: 100vh; opacity: 0.3; transform: scale(1.1); }
        }
      `})]})},Nl={gameArea:{position:"relative",width:"45vw",height:"100vh",overflow:"hidden"},score:{position:"absolute",top:"20px",left:"50%",transform:"translateX(-50%)",color:"#fff",fontSize:"24px",fontWeight:"bold",zIndex:10},entity:{position:"absolute",width:"40px",height:"40px",top:"-50px",pointerEvents:"none"}},$E=({setScore:a,score:e})=>{const[r,i]=ce.useState(0),[o,l]=ce.useState([]),[u,d]=ce.useState(!1),[f,p]=ce.useState(50),_=ce.useRef(null),g=ce.useRef(null);ce.useEffect(()=>{const b=E=>{E.key==="ArrowRight"&&i(M=>M+10)};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[]),ce.useEffect(()=>{const b=setInterval(()=>{l(E=>[...E,{left:1e3,top:Math.random()*200,width:50,height:50,passed:!1}])},2e3);return()=>clearInterval(b)},[]),ce.useEffect(()=>{const b=setInterval(()=>{l(E=>E.map(M=>({...M,left:M.left-10})).filter(M=>M.left>-50))},30);return()=>clearInterval(b)},[]);const y=()=>{u||(d(!0),p(150),setTimeout(()=>{d(!1),p(50)},500))};return ce.useEffect(()=>{l(b=>b.map(E=>g.current&&E.left<r+30&&E.left+E.width>r&&E.top<f+30&&E.top+E.height>f?(a(0),null):!E.passed&&E.left+E.width<0?(a(M=>M+1),{...E,passed:!0}):E).filter(Boolean))},[r,f,a]),se.jsxs("div",{ref:_,style:Il.gameArea,onClick:y,children:[se.jsx("div",{ref:g,style:{...Il.player,bottom:`${f}px`,left:`${r}px`}}),o.map((b,E)=>se.jsx("div",{style:{...Il.obstacle,left:`${b.left}px`,top:`${b.top}px`}},E)),se.jsxs("div",{style:Il.score,children:["Score: ",e]})]})},Il={gameArea:{position:"relative",width:"100%",height:"300px",overflow:"hidden",backgroundColor:"#f0f0f0"},player:{position:"absolute",width:"30px",height:"30px",backgroundColor:"blue"},obstacle:{position:"absolute",width:"50px",height:"50px",backgroundColor:"red"},score:{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",fontSize:"20px",fontWeight:"bold",color:"black"}},YE=({setScore:a,score:e})=>{const[r,i]=ce.useState(0),[o,l]=ce.useState(30),[u,d]=ce.useState(!1),[f,p]=ce.useState(!1);ce.useEffect(()=>{if(f&&o>0){const y=setInterval(()=>{l(b=>b-1)},1e3);return()=>clearInterval(y)}o===0&&d(!0)},[f,o]),ce.useEffect(()=>{const y=Math.floor(Math.random()*100)+1;i(y)},[e]);const _=()=>{p(!0),d(!1),l(30),a(0)},g=y=>{y===r&&(a(b=>b+1),i(Math.floor(Math.random()*100)+1))};return se.jsxs("div",{style:Mi.gameArea,children:[se.jsx("h1",{style:Mi.title,children:"Number Smash"}),u?se.jsxs("div",{style:Mi.gameOver,children:[se.jsx("h2",{children:"Game Over!"}),se.jsxs("p",{children:["Your score: ",e]}),se.jsx("button",{style:Mi.startButton,onClick:_,children:"Start New Game"})]}):se.jsxs(se.Fragment,{children:[se.jsxs("div",{style:Mi.timer,children:["Time Left: ",o,"s"]}),se.jsx("div",{style:Mi.numberContainer,children:se.jsx("button",{style:Mi.numberButton,onClick:()=>g(r),children:r})}),se.jsxs("div",{style:Mi.score,children:["Score: ",e]})]})]})},Mi={gameArea:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundColor:"#f0f0f0",minHeight:"400px"},title:{fontSize:"32px",fontWeight:"bold",marginBottom:"20px"},timer:{fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},numberContainer:{marginBottom:"20px"},numberButton:{fontSize:"40px",padding:"20px",backgroundColor:"#00bcd4",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"},score:{fontSize:"24px",fontWeight:"bold"},startButton:{padding:"10px 20px",fontSize:"18px",backgroundColor:"#4caf50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},gameOver:{textAlign:"center"}},Km=["red","blue","green","yellow","orange","purple","pink","cyan"],qE=({setScore:a,score:e})=>{const[r,i]=ce.useState([]),[o,l]=ce.useState([]),[u,d]=ce.useState([]),[f,p]=ce.useState(0),[_,g]=ce.useState(!1);ce.useEffect(()=>{const M=y([...Km,...Km]);i(M),l([]),d([]),p(0),g(!1)},[]);const y=M=>{for(let x=M.length-1;x>0;x--){const v=Math.floor(Math.random()*(x+1));[M[x],M[v]]=[M[v],M[x]]}return M},b=M=>{if(o.length===2||o.includes(M)||u.includes(M))return;const x=[...o,M];l(x),x.length===2&&(p(v=>v+1),E(x))},E=M=>{const[x,v]=M;if(r[x]===r[v]){const U=[...u,x,v];d(U),a(N=>N+1),U.length===r.length&&g(!0)}else setTimeout(()=>{l([])},1e3)};return se.jsxs("div",{style:Dn.gameArea,children:[se.jsx("h1",{style:Dn.title,children:"Color Clash"}),_?se.jsxs("div",{style:Dn.gameOver,children:[se.jsx("h2",{children:"Congratulations!"}),se.jsxs("p",{children:["You won the game with ",f," moves!"]}),se.jsx("button",{style:Dn.startButton,onClick:()=>window.location.reload(),children:"Start New Game"})]}):se.jsxs(se.Fragment,{children:[se.jsx("div",{style:Dn.cardGrid,children:r.map((M,x)=>se.jsx("div",{onClick:()=>b(x),style:{...Dn.card,backgroundColor:o.includes(x)||u.includes(x)?M:"#888"},children:(o.includes(x)||u.includes(x))&&se.jsx("span",{style:Dn.cardText,children:M})},x))}),se.jsxs("div",{style:Dn.moves,children:["Moves: ",f]}),se.jsxs("div",{style:Dn.score,children:["Score: ",e]})]})]})},Dn={gameArea:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundColor:"#fafafa",minHeight:"400px"},title:{fontSize:"32px",fontWeight:"bold",marginBottom:"20px"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(4, 100px)",gap:"10px",marginBottom:"20px"},card:{width:"100px",height:"100px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"24px",color:"white"},cardText:{fontSize:"24px",fontWeight:"bold"},moves:{fontSize:"20px",marginTop:"10px"},score:{fontSize:"20px",fontWeight:"bold",marginTop:"10px"},startButton:{padding:"10px 20px",fontSize:"18px",backgroundColor:"#4caf50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},gameOver:{textAlign:"center"}},Zm=["apple","banana","cherry","grape","orange","kiwi","mango"],KE=({setScore:a,score:e})=>{const[r,i]=ce.useState(""),[o,l]=ce.useState(""),[u,d]=ce.useState(""),[f,p]=ce.useState(30),[_,g]=ce.useState(3),[y,b]=ce.useState(!1);ce.useEffect(()=>{if(f>0&&!y){const U=setInterval(()=>{p(N=>N-1)},1e3);return()=>clearInterval(U)}else(f===0||_===0)&&b(!0)},[f,y,_]),ce.useEffect(()=>{!y&&!r&&E()},[y,r]);const E=()=>{const U=Zm[Math.floor(Math.random()*Zm.length)];i(U),l(M(U))},M=U=>U.split("").sort(()=>Math.random()-.5).join(""),x=()=>{u.toLowerCase()===r.toLowerCase()?(a(U=>U+1),E(),d("")):(g(U=>U-1),d(""))},v=()=>{b(!1),p(30),g(3),a(0),E(),d("")};return se.jsxs("div",{style:sn.gameArea,children:[se.jsx("h1",{style:sn.title,children:"World Whirl"}),y?se.jsxs("div",{style:sn.gameOver,children:[se.jsx("h2",{children:"Game Over!"}),se.jsxs("p",{children:["Your score: ",e]}),se.jsx("button",{style:sn.startButton,onClick:v,children:"Start New Game"})]}):se.jsxs(se.Fragment,{children:[se.jsxs("div",{style:sn.timer,children:["Time Left: ",f,"s"]}),se.jsx("div",{style:sn.wordContainer,children:se.jsxs("h3",{children:["Scrambled Word: ",o]})}),se.jsxs("div",{style:sn.attempts,children:["Attempts Left: ",_]}),se.jsxs("div",{style:sn.inputContainer,children:[se.jsx("input",{type:"text",value:u,onChange:U=>d(U.target.value),placeholder:"Enter your guess",style:sn.input}),se.jsx("button",{style:sn.submitButton,onClick:x,children:"Submit"})]}),se.jsxs("div",{style:sn.score,children:["Score: ",e]})]})]})},sn={gameArea:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundColor:"grey",minHeight:"400px"},title:{fontSize:"32px",fontWeight:"bold",marginBottom:"20px"},timer:{fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},wordContainer:{marginBottom:"20px"},attempts:{fontSize:"20px",fontWeight:"bold",marginBottom:"10px"},inputContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"},input:{fontSize:"18px",padding:"10px",marginBottom:"10px",border:"1px solid #ddd",borderRadius:"5px",width:"200px"},submitButton:{padding:"10px 20px",fontSize:"18px",backgroundColor:"#00bcd4",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"},score:{fontSize:"24px",fontWeight:"bold"},startButton:{padding:"10px 20px",fontSize:"18px",backgroundColor:"#4caf50",color:"blue",border:"none",borderRadius:"5px",cursor:"pointer"},gameOver:{textAlign:"center"}},Jm=["A","B","C","D","E","F","G","H"],ZE=({setScore:a,score:e})=>{const[r,i]=ce.useState([]),[o,l]=ce.useState([]),[u,d]=ce.useState([]),[f,p]=ce.useState(0),[_,g]=ce.useState(!1);ce.useEffect(()=>{const M=y([...Jm,...Jm]);i(M),l([]),d([]),p(0),g(!1)},[]);const y=M=>{for(let x=M.length-1;x>0;x--){const v=Math.floor(Math.random()*(x+1));[M[x],M[v]]=[M[v],M[x]]}return M},b=M=>{if(o.length===2||o.includes(M)||u.includes(M))return;const x=[...o,M];l(x),x.length===2&&(p(v=>v+1),E(x))},E=M=>{const[x,v]=M;if(r[x]===r[v]){const U=[...u,x,v];d(U),a(N=>N+1),U.length===r.length&&g(!0)}else setTimeout(()=>{l([])},1e3)};return se.jsxs("div",{style:On.gameArea,children:[se.jsx("h1",{style:On.title,children:"Memory Grid"}),_?se.jsxs("div",{style:On.gameOver,children:[se.jsx("h2",{children:"Congratulations!"}),se.jsxs("p",{children:["You won the game with ",f," moves!"]}),se.jsx("button",{style:On.startButton,onClick:()=>window.location.reload(),children:"Start New Game"})]}):se.jsxs(se.Fragment,{children:[se.jsx("div",{style:On.cardGrid,children:r.map((M,x)=>se.jsx("div",{onClick:()=>b(x),style:{...On.card,backgroundColor:o.includes(x)||u.includes(x)?"#00bcd4":"#888"},children:(o.includes(x)||u.includes(x))&&se.jsx("span",{style:On.cardText,children:M})},x))}),se.jsxs("div",{style:On.moves,children:["Moves: ",f]}),se.jsxs("div",{style:On.score,children:["Score: ",e]})]})]})},On={gameArea:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",backgroundColor:"#fafafa",minHeight:"400px"},title:{fontSize:"32px",fontWeight:"bold",marginBottom:"20px"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(4, 100px)",gap:"10px",marginBottom:"20px"},card:{width:"100px",height:"100px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",fontSize:"24px",color:"white"},cardText:{fontSize:"24px",fontWeight:"bold"},moves:{fontSize:"20px",marginTop:"10px"},score:{fontSize:"20px",fontWeight:"bold",marginTop:"10px"},startButton:{padding:"10px 20px",fontSize:"18px",backgroundColor:"#4caf50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},gameOver:{textAlign:"center"}},JE=()=>{const[a,e]=ce.useState(0),[r,i]=ce.useState(0),[o,l]=ce.useState(0),[u,d]=ce.useState(0),[f,p]=ce.useState(0),[_,g]=ce.useState(0),y=ce.useRef(null);return ce.useEffect(()=>{y.current},[]),se.jsx(R0,{children:se.jsxs("div",{style:Pr.appContainer,children:[se.jsx("div",{ref:y,style:Pr.staryfieldBackground}),se.jsxs("div",{style:Pr.contentOverlay,children:[se.jsxs("nav",{style:Pr.nav,children:[se.jsx(mi,{to:"/",style:Pr.navLink,children:"Home"}),se.jsx(mi,{to:"/about",style:Pr.navLink,children:"About"}),se.jsx(mi,{to:"/moon-drop",style:Pr.navLink,children:"Moon Drop"}),se.jsx(mi,{to:"/pixel-runner",style:Pr.navLink,children:"Pixel Runner"}),se.jsx(mi,{to:"/number-smash",style:Pr.navLink,children:"Number Smash"}),se.jsx(mi,{to:"/color-clash",style:Pr.navLink,children:"Color Clash"}),se.jsx(mi,{to:"/world-whirl",style:Pr.navLink,children:"World Whirl"}),se.jsx(mi,{to:"/memory-grid",style:Pr.navLink,children:"Memory Grid"})]}),se.jsxs("div",{style:Pr.gameContainer,children:[se.jsx("div",{style:Pr.leftPane,children:se.jsxs(y0,{children:[se.jsx(kn,{path:"/",element:se.jsx(WE,{pixelRunnerScore:a,moonDropScore:r,numberSmashScore:o,colorClashScore:u,worldWhirlScore:f,memoryGridScore:_})}),se.jsx(kn,{path:"/about",element:se.jsx(jE,{})}),se.jsx(kn,{path:"/moon-drop",element:se.jsx(XE,{score:r,setScore:i})}),se.jsx(kn,{path:"/pixel-runner",element:se.jsx($E,{score:a,setScore:e})}),se.jsx(kn,{path:"/number-smash",element:se.jsx(YE,{score:o,setScore:l})}),se.jsx(kn,{path:"/color-clash",element:se.jsx(qE,{score:u,setScore:d})}),se.jsx(kn,{path:"/world-whirl",element:se.jsx(KE,{score:f,setScore:p})}),se.jsx(kn,{path:"/memory-grid",element:se.jsx(ZE,{score:_,setScore:g})})]})}),se.jsx("div",{className:"right-pane",children:se.jsx("img",{src:"/video.gif",alt:"Video Preview",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]})]})})},Pr={appContainer:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column"},staryfieldBackground:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:-1},contentOverlay:{position:"relative",zIndex:1,flex:1,display:"flex",flexDirection:"column"},nav:{padding:"1rem",display:"flex",justifyContent:"center",gap:"1rem",backgroundColor:"rgba(40, 44, 52, 0.8)",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},navLink:{color:"white",textDecoration:"none",fontSize:"16px",fontWeight:"500"},gameContainer:{flex:1,padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.7)",display:"flex",justifyContent:"center",alignItems:"center"},leftPane:{width:"100%",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center"}};I0.createRoot(document.getElementById("root")).render(se.jsx(ce.StrictMode,{children:se.jsx(JE,{})}));
