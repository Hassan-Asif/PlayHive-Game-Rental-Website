(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},As=[],Tn=()=>{},sm=()=>!1,Oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tu=t=>t.startsWith("onUpdate:"),it=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yv=Object.prototype.hasOwnProperty,ke=(t,e)=>Yv.call(t,e),he=Array.isArray,Rs=t=>Ma(t)==="[object Map]",im=t=>Ma(t)==="[object Set]",me=t=>typeof t=="function",Ye=t=>typeof t=="string",kr=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",om=t=>($e(t)||me(t))&&me(t.then)&&me(t.catch),am=Object.prototype.toString,Ma=t=>am.call(t),Jv=t=>Ma(t).slice(8,-1),lm=t=>Ma(t)==="[object Object]",ru=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wi=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Xv=/-(\w)/g,tn=La(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),Zv=/\B([A-Z])/g,ss=La(t=>t.replace(Zv,"-$1").toLowerCase()),Fa=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vl=La(t=>t?`on${Fa(t)}`:""),gr=(t,e)=>!Object.is(t,e),jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ew=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let _d;const Ua=()=>_d||(_d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function su(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?sw(r):su(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||$e(t))return t}const tw=/;(?![^(]*\))/g,nw=/:([^]+)/,rw=/\/\*[^]*?\*\//g;function sw(t){const e={};return t.replace(rw,"").split(tw).forEach(n=>{if(n){const r=n.split(nw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sn(t){let e="";if(Ye(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=sn(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ow=eu(iw);function um(t){return!!t||t===""}const hm=t=>!!(t&&t.__v_isRef===!0),Y=t=>Ye(t)?t:t==null?"":he(t)||$e(t)&&(t.toString===am||!me(t.toString))?hm(t)?Y(t.value):JSON.stringify(t,dm,2):String(t),dm=(t,e)=>hm(e)?dm(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ol(r,i)+" =>"]=s,n),{})}:im(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:kr(e)?Ol(e):$e(e)&&!he(e)&&!lm(e)?String(e):e,Ol=(t,e="")=>{var n;return kr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class aw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lw(){return Dt}let Me;const Ml=new WeakSet;class fm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yd(this),gm(this);const e=Me,n=ln;Me=this,ln=!0;try{return this.fn()}finally{_m(this),Me=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)au(e);this.deps=this.depsTail=void 0,yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hc(this)&&this.run()}get dirty(){return hc(this)}}let pm=0,Ei,Ti;function mm(t,e=!1){if(t.flags|=8,e){t.next=Ti,Ti=t;return}t.next=Ei,Ei=t}function iu(){pm++}function ou(){if(--pm>0)return;if(Ti){let e=Ti;for(Ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ei;){let e=Ei;for(Ei=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _m(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),au(r),cw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function hc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ym(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ym(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Li)||(t.globalVersion=Li,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=ln;Me=t,ln=!0;try{gm(t);const s=t.fn(t._value);(e.version===0||gr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,ln=r,_m(t),t.flags&=-3}}function au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const vm=[];function zn(){vm.push(ln),ln=!1}function Wn(){const t=vm.pop();ln=t===void 0?!0:t}function yd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Li=0;class uw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!ln||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new uw(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,wm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Li++,this.notify(e)}notify(e){iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ou()}}}function wm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dc=new WeakMap,Kr=Symbol(""),fc=Symbol(""),Fi=Symbol("");function vt(t,e,n){if(ln&&Me){let r=dc.get(t);r||dc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new lu),s.map=r,s.key=n),s.track()}}function Un(t,e,n,r,s,i){const o=dc.get(t);if(!o){Li++;return}const l=c=>{c&&c.trigger()};if(iu(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&ru(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Fi||!kr(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Fi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),Rs(t)&&l(o.get(fc)));break;case"delete":c||(l(o.get(Kr)),Rs(t)&&l(o.get(fc)));break;case"set":Rs(t)&&l(o.get(Kr));break}}ou()}function gs(t){const e=Pe(t);return e===t?e:(vt(e,"iterate",Fi),Xt(t)?e:e.map(ht))}function $a(t){return vt(t=Pe(t),"iterate",Fi),t}const hw={__proto__:null,[Symbol.iterator](){return Ll(this,Symbol.iterator,ht)},concat(...t){return gs(this).concat(...t.map(e=>he(e)?gs(e):e))},entries(){return Ll(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return Vn(this,"every",t,e,void 0,arguments)},filter(t,e){return Vn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return Vn(this,"find",t,e,ht,arguments)},findIndex(t,e){return Vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return Vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Fl(this,"includes",t)},indexOf(...t){return Fl(this,"indexOf",t)},join(t){return gs(this).join(t)},lastIndexOf(...t){return Fl(this,"lastIndexOf",t)},map(t,e){return Vn(this,"map",t,e,void 0,arguments)},pop(){return ui(this,"pop")},push(...t){return ui(this,"push",t)},reduce(t,...e){return vd(this,"reduce",t,e)},reduceRight(t,...e){return vd(this,"reduceRight",t,e)},shift(){return ui(this,"shift")},some(t,e){return Vn(this,"some",t,e,void 0,arguments)},splice(...t){return ui(this,"splice",t)},toReversed(){return gs(this).toReversed()},toSorted(t){return gs(this).toSorted(t)},toSpliced(...t){return gs(this).toSpliced(...t)},unshift(...t){return ui(this,"unshift",t)},values(){return Ll(this,"values",ht)}};function Ll(t,e,n){const r=$a(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const dw=Array.prototype;function Vn(t,e,n,r,s,i){const o=$a(t),l=o!==t&&!Xt(t),c=o[e];if(c!==dw[e]){const p=c.apply(t,i);return l?ht(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ht(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function vd(t,e,n,r){const s=$a(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ht(l),c,t)}),s[e](i,...r)}function Fl(t,e,n){const r=Pe(t);vt(r,"iterate",Fi);const s=r[e](...n);return(s===-1||s===!1)&&hu(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function ui(t,e,n=[]){zn(),iu();const r=Pe(t)[e].apply(t,n);return ou(),Wn(),r}const fw=eu("__proto__,__v_isRef,__isVue"),Em=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kr));function pw(t){kr(t)||(t=String(t));const e=Pe(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Tm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bw:Rm:i?Am:bm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=hw[n]))return c;if(n==="hasOwnProperty")return pw}const l=Reflect.get(e,n,It(e)?e:r);return(kr(n)?Em.has(n):fw(n))||(s||vt(e,"get",n),i)?l:It(l)?o&&ru(n)?l:l.value:$e(l)?s?Cm(l):Ba(l):l}}class Im extends Tm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Er(i);if(!Xt(r)&&!Er(r)&&(i=Pe(i),r=Pe(r)),!he(e)&&It(i)&&!It(r))return c||(i.value=r),!0}const o=he(e)&&ru(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,It(e)?e:s);return e===Pe(s)&&(o?gr(r,i)&&Un(e,"set",n,r):Un(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kr(n)||!Em.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",he(e)?"length":Kr),Reflect.ownKeys(e)}}class mw extends Tm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gw=new Im,_w=new mw,yw=new Im(!0);const pc=t=>t,No=t=>Reflect.getPrototypeOf(t);function vw(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=Rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?pc:e?sa:ht;return!e&&vt(i,"iterate",c?fc:Kr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ww(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(gr(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=No(o),u=e?pc:t?sa:ht;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Pe(s),"iterate",Kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(gr(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),u=e?pc:t?sa:ht;return!t&&vt(c,"iterate",Kr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return it(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){!e&&!Xt(s)&&!Er(s)&&(s=Pe(s));const i=Pe(this);return No(i).has.call(i,s)||(i.add(s),Un(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Er(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Pe(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?gr(i,d)&&Un(o,"set",s,i):Un(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Un(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vw(s,t,e)}),n}function cu(t,e){const n=ww(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Ew={get:cu(!1,!1)},Tw={get:cu(!1,!0)},Iw={get:cu(!0,!1)};const bm=new WeakMap,Am=new WeakMap,Rm=new WeakMap,bw=new WeakMap;function Aw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rw(t){return t.__v_skip||!Object.isExtensible(t)?0:Aw(Jv(t))}function Ba(t){return Er(t)?t:uu(t,!1,gw,Ew,bm)}function Sm(t){return uu(t,!1,yw,Tw,Am)}function Cm(t){return uu(t,!0,_w,Iw,Rm)}function uu(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Rw(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ss(t){return Er(t)?Ss(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function hu(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Sw(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&cm(t,"__v_skip",!0),t}const ht=t=>$e(t)?Ba(t):t,sa=t=>$e(t)?Cm(t):t;function It(t){return t?t.__v_isRef===!0:!1}function St(t){return Pm(t,!1)}function Cw(t){return Pm(t,!0)}function Pm(t,e){return It(t)?t:new Pw(t,e)}class Pw{constructor(e,n){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Er(e);e=r?e:Pe(e),gr(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function Cs(t){return It(t)?t.value:t}const xw={get:(t,e,n)=>e==="__v_raw"?t:Cs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xm(t){return Ss(t)?t:new Proxy(t,xw)}class kw{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return mm(this,!0),!0}get value(){const e=this.dep.track();return ym(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nw(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new kw(r,s,n)}const Vo={},ia=new WeakMap;let qr;function Dw(t,e=!1,n=qr){if(n){let r=ia.get(n);r||ia.set(n,r=[]),r.push(t)}}function Vw(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=W=>s?W:Xt(W)||s===!1||s===0?$n(W,1):$n(W);let d,p,m,_,P=!1,N=!1;if(It(t)?(p=()=>t.value,P=Xt(t)):Ss(t)?(p=()=>u(t),P=!0):he(t)?(N=!0,P=t.some(W=>Ss(W)||Xt(W)),p=()=>t.map(W=>{if(It(W))return W.value;if(Ss(W))return u(W);if(me(W))return c?c(W,2):W()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){zn();try{m()}finally{Wn()}}const W=qr;qr=d;try{return c?c(t,3,[_]):t(_)}finally{qr=W}}:p=Tn,e&&s){const W=p,de=s===!0?1/0:s;p=()=>$n(W(),de)}const k=lw(),U=()=>{d.stop(),k&&k.active&&nu(k.effects,d)};if(i&&e){const W=e;e=(...de)=>{W(...de),U()}}let B=N?new Array(t.length).fill(Vo):Vo;const q=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const de=d.run();if(s||P||(N?de.some((pe,S)=>gr(pe,B[S])):gr(de,B))){m&&m();const pe=qr;qr=d;try{const S=[de,B===Vo?void 0:N&&B[0]===Vo?[]:B,_];B=de,c?c(e,3,S):e(...S)}finally{qr=pe}}}else d.run()};return l&&l(q),d=new fm(p),d.scheduler=o?()=>o(q,!1):q,_=W=>Dw(W,!1,d),m=d.onStop=()=>{const W=ia.get(d);if(W){if(c)c(W,4);else for(const de of W)de();ia.delete(d)}},e?r?q(!0):B=d.run():o?o(q.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function $n(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))$n(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)$n(t[r],e,n);else if(im(t)||Rs(t))t.forEach(r=>{$n(r,e,n)});else if(lm(t)){for(const r in t)$n(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&$n(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,r){try{return r?t(...r):t()}catch(s){ja(s,e,n)}}function un(t,e,n,r){if(me(t)){const s=to(t,e,n,r);return s&&om(s)&&s.catch(i=>{ja(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){zn(),to(i,null,10,[t,c,u]),Wn();return}}Ow(t,n,s,r,o)}function Ow(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let vn=-1;const Ps=[];let lr=null,_s=0;const km=Promise.resolve();let oa=null;function Nm(t){const e=oa||km;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=vn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=Ui(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function du(t){if(!(t.flags&1)){const e=Ui(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=Ui(n)?Ct.push(t):Ct.splice(Mw(e),0,t),t.flags|=1,Dm()}}function Dm(){oa||(oa=km.then(Om))}function Lw(t){he(t)?Ps.push(...t):lr&&t.id===-1?lr.splice(_s+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),Dm()}function wd(t,e,n=vn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vm(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>Ui(n)-Ui(r));if(Ps.length=0,lr){lr.push(...e);return}for(lr=e,_s=0;_s<lr.length;_s++){const n=lr[_s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,_s=0}}const Ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Om(t){try{for(vn=0;vn<Ct.length;vn++){const e=Ct[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Ct.length;vn++){const e=Ct[vn];e&&(e.flags&=-2)}vn=-1,Ct.length=0,Vm(),oa=null,(Ct.length||Ps.length)&&Om()}}let Bt=null,Mm=null;function aa(t){const e=Bt;return Bt=t,Mm=t&&t.type.__scopeId||null,e}function Xe(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&kd(-1);const i=aa(e);let o;try{o=t(...s)}finally{aa(i),r._d&&kd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pt(t,e){if(Bt===null)return t;const n=Wa(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Oe]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&$n(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(zn(),un(c,n,8,[t.el,l,t,e]),Wn())}}const Fw=Symbol("_vte"),Lm=t=>t.__isTeleport,Fn=Symbol("_leaveCb"),Oo=Symbol("_enterCb");function Uw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fu(()=>{t.isMounted=!0}),pu(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],Fm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},Um=t=>{const e=t.subTree;return e.component?Um(e.component):e},$w={name:"BaseTransition",props:Fm,setup(t,{slots:e}){const n=dg(),r=Uw();return()=>{const s=e.default&&jm(e.default(),!0);if(!s||!s.length)return;const i=$m(s),o=Pe(t),{mode:l}=o;if(r.isLeaving)return Ul(i);const c=Ed(i);if(!c)return Ul(i);let u=mc(c,o,r,n,p=>u=p);c.type!==xt&&$i(c,u);let d=n.subTree&&Ed(n.subTree);if(d&&d.type!==xt&&!Gr(c,d)&&Um(n).type!==xt){let p=mc(d,o,r,n);if($i(d,p),l==="out-in"&&c.type!==xt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ul(i);l==="in-out"&&c.type!==xt?p.delayLeave=(m,_,P)=>{const N=Bm(r,d);N[String(d.key)]=d,m[Fn]=()=>{_(),m[Fn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function $m(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==xt){e=n;break}}return e}const Bw=$w;function Bm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function mc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:P,onLeaveCancelled:N,onBeforeAppear:k,onAppear:U,onAfterAppear:B,onAppearCancelled:q}=e,W=String(t.key),de=Bm(n,t),pe=(y,A)=>{y&&un(y,r,9,A)},S=(y,A)=>{const R=A[1];pe(y,A),he(y)?y.every(b=>b.length<=1)&&R():y.length<=1&&R()},v={mode:o,persisted:l,beforeEnter(y){let A=c;if(!n.isMounted)if(i)A=k||c;else return;y[Fn]&&y[Fn](!0);const R=de[W];R&&Gr(t,R)&&R.el[Fn]&&R.el[Fn](),pe(A,[y])},enter(y){let A=u,R=d,b=p;if(!n.isMounted)if(i)A=U||u,R=B||d,b=q||p;else return;let w=!1;const De=y[Oo]=tt=>{w||(w=!0,tt?pe(b,[y]):pe(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Oo]=void 0)};A?S(A,[y,De]):De()},leave(y,A){const R=String(t.key);if(y[Oo]&&y[Oo](!0),n.isUnmounting)return A();pe(m,[y]);let b=!1;const w=y[Fn]=De=>{b||(b=!0,A(),De?pe(N,[y]):pe(P,[y]),y[Fn]=void 0,de[R]===t&&delete de[R])};de[R]=t,_?S(_,[y,w]):w()},clone(y){const A=mc(y,e,n,r,s);return s&&s(A),A}};return v}function Ul(t){if(qa(t))return t=Tr(t),t.children=null,t}function Ed(t){if(!qa(t))return Lm(t.type)&&t.children?$m(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function $i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ze?(o.patchFlag&128&&s++,r=r.concat(jm(o.children,e,l))):(e||o.type!==xt)&&r.push(l!=null?Tr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qm(t,e){return me(t)?it({name:t.name},e,{setup:t}):t}function Hm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ii(t,e,n,r,s=!1){if(he(t)){t.forEach((P,N)=>Ii(P,e&&(he(e)?e[N]:e),n,r,s));return}if(bi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ii(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,m=Pe(p),_=p===Oe?sm:P=>ke(m,P);if(u!=null&&u!==c){if(Ye(u))d[u]=null,_(u)&&(p[u]=null);else if(It(u)){u.value=null;const P=e;P.k&&(d[P.k]=null)}}if(me(c))to(c,l,12,[o,d]);else{const P=Ye(c),N=It(c);if(P||N){const k=()=>{if(t.f){const U=P?_(c)?p[c]:d[c]:c.value;if(s)he(U)&&nu(U,i);else if(he(U))U.includes(i)||U.push(i);else if(P)d[c]=[i],_(c)&&(p[c]=d[c]);else{const B=[i];c.value=B,t.k&&(d[t.k]=B)}}else P?(d[c]=o,_(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,$t(k,n)):k()}}}Ua().requestIdleCallback;Ua().cancelIdleCallback;const bi=t=>!!t.type.__asyncLoader,qa=t=>t.type.__isKeepAlive;function jw(t,e){Gm(t,"a",e)}function qw(t,e){Gm(t,"da",e)}function Gm(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qa(s.parent.vnode)&&Hw(r,e,n,s),s=s.parent}}function Hw(t,e,n,r){const s=Ha(e,t,r,!0);zm(()=>{nu(r[e],s)},n)}function Ha(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{zn();const l=no(n),c=un(e,n,t,o);return l(),Wn(),c});return r?s.unshift(i):s.push(i),i}}const Xn=t=>(e,n=Et)=>{(!ji||t==="sp")&&Ha(t,(...r)=>e(...r),n)},Gw=Xn("bm"),fu=Xn("m"),zw=Xn("bu"),Ww=Xn("u"),pu=Xn("bum"),zm=Xn("um"),Kw=Xn("sp"),Qw=Xn("rtg"),Yw=Xn("rtc");function Jw(t,e=Et){Ha("ec",t,e)}const Xw="components";function qn(t,e){return eE(Xw,t,!0,e)||t}const Zw=Symbol.for("v-ndc");function eE(t,e,n=!0,r=!1){const s=Bt||Et;if(s){const i=s.type;{const l=BE(i,!1);if(l&&(l===e||l===tn(e)||l===Fa(tn(e))))return i}const o=Td(s[t]||i[t],e)||Td(s.appContext[t],e);return!o&&r?i:o}}function Td(t,e){return t&&(t[e]||t[tn(e)]||t[Fa(tn(e))])}function Jt(t,e,n,r){let s;const i=n,o=he(t);if(o||Ye(t)){const l=o&&Ss(t);let c=!1,u=!1;l&&(c=!Xt(t),u=Er(t),t=$a(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?sa(ht(t[d])):ht(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const gc=t=>t?fg(t)?Wa(t):gc(t.parent):null,Ai=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Km(t),$forceUpdate:t=>t.f||(t.f=()=>{du(t.update)}),$nextTick:t=>t.n||(t.n=Nm.bind(t.proxy)),$watch:t=>EE.bind(t)}),$l=(t,e)=>t!==Oe&&!t.__isScriptSetup&&ke(t,e),tE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($l(r,e))return o[e]=1,r[e];if(s!==Oe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Oe&&ke(n,e))return o[e]=4,n[e];_c&&(o[e]=0)}}const d=Ai[e];let p,m;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $l(s,e)?(s[e]=n,!0):r!==Oe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Oe&&l[0]!=="$"&&ke(t,l)||$l(e,l)||(c=i[0])&&ke(c,l)||ke(r,l)||ke(Ai,l)||ke(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Id(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function nE(t){const e=Km(t),n=t.proxy,r=t.ctx;_c=!1,e.beforeCreate&&bd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:P,activated:N,deactivated:k,beforeDestroy:U,beforeUnmount:B,destroyed:q,unmounted:W,render:de,renderTracked:pe,renderTriggered:S,errorCaptured:v,serverPrefetch:y,expose:A,inheritAttrs:R,components:b,directives:w,filters:De}=e;if(u&&rE(u,r,null),o)for(const be in o){const ye=o[be];me(ye)&&(r[be]=ye.bind(n))}if(s){const be=s.call(n,n);$e(be)&&(t.data=Ba(be))}if(_c=!0,i)for(const be in i){const ye=i[be],Ft=me(ye)?ye.bind(n,n):me(ye.get)?ye.get.bind(n,n):Tn,nn=!me(ye)&&me(ye.set)?ye.set.bind(n):Tn,Gt=Ot({get:Ft,set:nn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:je=>Gt.value=je})}if(l)for(const be in l)Wm(l[be],r,n,be);if(c){const be=me(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ye=>{qo(ye,be[ye])})}d&&bd(d,t,"c");function Be(be,ye){he(ye)?ye.forEach(Ft=>be(Ft.bind(n))):ye&&be(ye.bind(n))}if(Be(Gw,p),Be(fu,m),Be(zw,_),Be(Ww,P),Be(jw,N),Be(qw,k),Be(Jw,v),Be(Yw,pe),Be(Qw,S),Be(pu,B),Be(zm,W),Be(Kw,y),he(A))if(A.length){const be=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(be,ye,{get:()=>n[ye],set:Ft=>n[ye]=Ft,enumerable:!0})})}else t.exposed||(t.exposed={});de&&t.render===Tn&&(t.render=de),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),w&&(t.directives=w),y&&Hm(t)}function rE(t,e,n=Tn){he(t)&&(t=yc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=In(s.from||r,s.default,!0):i=In(s.from||r):i=In(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bd(t,e,n){un(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wm(t,e,n,r){let s=r.includes(".")?ag(n,r):()=>n[r];if(Ye(t)){const i=e[t];me(i)&&Ho(s,i)}else if(me(t))Ho(s,t.bind(n));else if($e(t))if(he(t))t.forEach(i=>Wm(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Ho(s,i,t)}}function Km(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>la(c,u,o,!0)),la(c,e,o)),$e(e)&&i.set(e,c),c}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=sE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sE={data:Ad,props:Rd,emits:Rd,methods:fi,computed:fi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:fi,directives:fi,watch:oE,provide:Ad,inject:iE};function Ad(t,e){return e?t?function(){return it(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function iE(t,e){return fi(yc(t),yc(e))}function yc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?it(Object.create(null),t,e):e}function Rd(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:it(Object.create(null),Id(t),Id(e??{})):e}function oE(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Qm(){return{app:null,config:{isNativeTag:sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aE=0;function lE(t,e){return function(r,s=null){me(r)||(r=it({},r)),s!=null&&!$e(s)&&(s=null);const i=Qm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:aE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(u,...p)):me(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||ve(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Wa(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(un(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=xs;xs=u;try{return d()}finally{xs=p}}};return u}}let xs=null;function qo(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=dg();if(r||xs){let s=xs?xs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const Ym={},Jm=()=>Object.create(Ym),Xm=t=>Object.getPrototypeOf(t)===Ym;function cE(t,e,n,r=!1){const s={},i=Jm();t.propsDefaults=Object.create(null),Zm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ga(t.emitsOptions,m))continue;const _=e[m];if(c)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const P=tn(m);s[P]=vc(c,l,P,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Zm(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=ss(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=vc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Un(t.attrs,"set","")}function Zm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(wi(c))continue;const u=e[c];let d;s&&ke(s,d=tn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ga(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=vc(s,c,p,u[p],t,!ke(u,p))}}return o}function vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=no(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ss(n))&&(r=!0))}return r}const hE=new WeakMap;function eg(t,e,n=!1){const r=n?hE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[m,_]=eg(p,e,!0);it(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return $e(t)&&r.set(t,As),As;if(he(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);Sd(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=tn(d);if(Sd(p)){const m=i[d],_=o[p]=he(m)||me(m)?{type:m}:it({},m),P=_.type;let N=!1,k=!0;if(he(P))for(let U=0;U<P.length;++U){const B=P[U],q=me(B)&&B.name;if(q==="Boolean"){N=!0;break}else q==="String"&&(k=!1)}else N=me(P)&&P.name==="Boolean";_[0]=N,_[1]=k,(N||ke(_,"default"))&&l.push(p)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function Sd(t){return t[0]!=="$"&&!wi(t)}const mu=t=>t==="_"||t==="_ctx"||t==="$stable",gu=t=>he(t)?t.map(En):[En(t)],dE=(t,e,n)=>{if(e._n)return e;const r=Xe((...s)=>gu(e(...s)),n);return r._c=!1,r},tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mu(s))continue;const i=t[s];if(me(i))e[s]=dE(s,i,r);else if(i!=null){const o=gu(i);e[s]=()=>o}}},ng=(t,e)=>{const n=gu(e);t.slots.default=()=>n},rg=(t,e,n)=>{for(const r in e)(n||!mu(r))&&(t[r]=e[r])},fE=(t,e,n)=>{const r=t.slots=Jm();if(t.vnode.shapeFlag&32){const s=e._;s?(rg(r,e,n),n&&cm(r,"_",s,!0)):tg(e,r)}else e&&ng(t,e)},pE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:rg(s,e,n):(i=!e.$stable,tg(e,s)),o=e}else e&&(ng(t,e),o={default:1});if(i)for(const l in s)!mu(l)&&o[l]==null&&delete s[l]},$t=CE;function mE(t){return gE(t)}function gE(t,e){const n=Ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Tn,insertStaticContent:P}=t,N=(E,I,C,O=null,$=null,M=null,K=void 0,G=null,H=!!I.dynamicChildren)=>{if(E===I)return;E&&!Gr(E,I)&&(O=V(E),je(E,$,M,!0),E=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:J}=I;switch(j){case za:k(E,I,C,O);break;case xt:U(E,I,C,O);break;case Go:E==null&&B(I,C,O,K);break;case ze:b(E,I,C,O,$,M,K,G,H);break;default:J&1?de(E,I,C,O,$,M,K,G,H):J&6?w(E,I,C,O,$,M,K,G,H):(J&64||J&128)&&j.process(E,I,C,O,$,M,K,G,H,re)}oe!=null&&$?Ii(oe,E&&E.ref,M,I||E,!I):oe==null&&E&&E.ref!=null&&Ii(E.ref,null,M,E,!0)},k=(E,I,C,O)=>{if(E==null)r(I.el=l(I.children),C,O);else{const $=I.el=E.el;I.children!==E.children&&u($,I.children)}},U=(E,I,C,O)=>{E==null?r(I.el=c(I.children||""),C,O):I.el=E.el},B=(E,I,C,O)=>{[E.el,E.anchor]=P(E.children,I,C,O,E.el,E.anchor)},q=({el:E,anchor:I},C,O)=>{let $;for(;E&&E!==I;)$=m(E),r(E,C,O),E=$;r(I,C,O)},W=({el:E,anchor:I})=>{let C;for(;E&&E!==I;)C=m(E),s(E),E=C;s(I)},de=(E,I,C,O,$,M,K,G,H)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),E==null?pe(I,C,O,$,M,K,G,H):y(E,I,$,M,K,G,H)},pe=(E,I,C,O,$,M,K,G)=>{let H,j;const{props:oe,shapeFlag:J,transition:se,dirs:ue}=E;if(H=E.el=o(E.type,M,oe&&oe.is,oe),J&8?d(H,E.children):J&16&&v(E.children,H,null,O,$,Bl(E,M),K,G),ue&&Ur(E,null,O,"created"),S(H,E,E.scopeId,K,O),oe){for(const _e in oe)_e!=="value"&&!wi(_e)&&i(H,_e,null,oe[_e],M,O);"value"in oe&&i(H,"value",null,oe.value,M),(j=oe.onVnodeBeforeMount)&&yn(j,O,E)}ue&&Ur(E,null,O,"beforeMount");const ae=_E($,se);ae&&se.beforeEnter(H),r(H,I,C),((j=oe&&oe.onVnodeMounted)||ae||ue)&&$t(()=>{j&&yn(j,O,E),ae&&se.enter(H),ue&&Ur(E,null,O,"mounted")},$)},S=(E,I,C,O,$)=>{if(C&&_(E,C),O)for(let M=0;M<O.length;M++)_(E,O[M]);if($){let M=$.subTree;if(I===M||cg(M.type)&&(M.ssContent===I||M.ssFallback===I)){const K=$.vnode;S(E,K,K.scopeId,K.slotScopeIds,$.parent)}}},v=(E,I,C,O,$,M,K,G,H=0)=>{for(let j=H;j<E.length;j++){const oe=E[j]=G?cr(E[j]):En(E[j]);N(null,oe,I,C,O,$,M,K,G)}},y=(E,I,C,O,$,M,K)=>{const G=I.el=E.el;let{patchFlag:H,dynamicChildren:j,dirs:oe}=I;H|=E.patchFlag&16;const J=E.props||Oe,se=I.props||Oe;let ue;if(C&&$r(C,!1),(ue=se.onVnodeBeforeUpdate)&&yn(ue,C,I,E),oe&&Ur(I,E,C,"beforeUpdate"),C&&$r(C,!0),(J.innerHTML&&se.innerHTML==null||J.textContent&&se.textContent==null)&&d(G,""),j?A(E.dynamicChildren,j,G,C,O,Bl(I,$),M):K||ye(E,I,G,null,C,O,Bl(I,$),M,!1),H>0){if(H&16)R(G,J,se,C,$);else if(H&2&&J.class!==se.class&&i(G,"class",null,se.class,$),H&4&&i(G,"style",J.style,se.style,$),H&8){const ae=I.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Ae=ae[_e],ot=J[Ae],at=se[Ae];(at!==ot||Ae==="value")&&i(G,Ae,ot,at,$,C)}}H&1&&E.children!==I.children&&d(G,I.children)}else!K&&j==null&&R(G,J,se,C,$);((ue=se.onVnodeUpdated)||oe)&&$t(()=>{ue&&yn(ue,C,I,E),oe&&Ur(I,E,C,"updated")},O)},A=(E,I,C,O,$,M,K)=>{for(let G=0;G<I.length;G++){const H=E[G],j=I[G],oe=H.el&&(H.type===ze||!Gr(H,j)||H.shapeFlag&198)?p(H.el):C;N(H,j,oe,null,O,$,M,K,!0)}},R=(E,I,C,O,$)=>{if(I!==C){if(I!==Oe)for(const M in I)!wi(M)&&!(M in C)&&i(E,M,I[M],null,$,O);for(const M in C){if(wi(M))continue;const K=C[M],G=I[M];K!==G&&M!=="value"&&i(E,M,G,K,$,O)}"value"in C&&i(E,"value",I.value,C.value,$)}},b=(E,I,C,O,$,M,K,G,H)=>{const j=I.el=E?E.el:l(""),oe=I.anchor=E?E.anchor:l("");let{patchFlag:J,dynamicChildren:se,slotScopeIds:ue}=I;ue&&(G=G?G.concat(ue):ue),E==null?(r(j,C,O),r(oe,C,O),v(I.children||[],C,oe,$,M,K,G,H)):J>0&&J&64&&se&&E.dynamicChildren?(A(E.dynamicChildren,se,C,$,M,K,G),(I.key!=null||$&&I===$.subTree)&&sg(E,I,!0)):ye(E,I,C,oe,$,M,K,G,H)},w=(E,I,C,O,$,M,K,G,H)=>{I.slotScopeIds=G,E==null?I.shapeFlag&512?$.ctx.activate(I,C,O,K,H):De(I,C,O,$,M,K,H):tt(E,I,H)},De=(E,I,C,O,$,M,K)=>{const G=E.component=ME(E,O,$);if(qa(E)&&(G.ctx.renderer=re),LE(G,!1,K),G.asyncDep){if($&&$.registerDep(G,Be,K),!E.el){const H=G.subTree=ve(xt);U(null,H,I,C),E.placeholder=H.el}}else Be(G,E,I,C,$,M,K)},tt=(E,I,C)=>{const O=I.component=E.component;if(RE(E,I,C))if(O.asyncDep&&!O.asyncResolved){be(O,I,C);return}else O.next=I,O.update();else I.el=E.el,O.vnode=I},Be=(E,I,C,O,$,M,K)=>{const G=()=>{if(E.isMounted){let{next:J,bu:se,u:ue,parent:ae,vnode:_e}=E;{const pt=ig(E);if(pt){J&&(J.el=_e.el,be(E,J,K)),pt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ae=J,ot;$r(E,!1),J?(J.el=_e.el,be(E,J,K)):J=_e,se&&jo(se),(ot=J.props&&J.props.onVnodeBeforeUpdate)&&yn(ot,ae,J,_e),$r(E,!0);const at=Pd(E),zt=E.subTree;E.subTree=at,N(zt,at,p(zt.el),V(zt),E,$,M),J.el=at.el,Ae===null&&SE(E,at.el),ue&&$t(ue,$),(ot=J.props&&J.props.onVnodeUpdated)&&$t(()=>yn(ot,ae,J,_e),$)}else{let J;const{el:se,props:ue}=I,{bm:ae,m:_e,parent:Ae,root:ot,type:at}=E,zt=bi(I);$r(E,!1),ae&&jo(ae),!zt&&(J=ue&&ue.onVnodeBeforeMount)&&yn(J,Ae,I),$r(E,!0);{ot.ce&&ot.ce._def.shadowRoot!==!1&&ot.ce._injectChildStyle(at);const pt=E.subTree=Pd(E);N(null,pt,C,O,E,$,M),I.el=pt.el}if(_e&&$t(_e,$),!zt&&(J=ue&&ue.onVnodeMounted)){const pt=I;$t(()=>yn(J,Ae,pt),$)}(I.shapeFlag&256||Ae&&bi(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&$t(E.a,$),E.isMounted=!0,I=C=O=null}};E.scope.on();const H=E.effect=new fm(G);E.scope.off();const j=E.update=H.run.bind(H),oe=E.job=H.runIfDirty.bind(H);oe.i=E,oe.id=E.uid,H.scheduler=()=>du(oe),$r(E,!0),j()},be=(E,I,C)=>{I.component=E;const O=E.vnode.props;E.vnode=I,E.next=null,uE(E,I.props,O,C),pE(E,I.children,C),zn(),wd(E),Wn()},ye=(E,I,C,O,$,M,K,G,H=!1)=>{const j=E&&E.children,oe=E?E.shapeFlag:0,J=I.children,{patchFlag:se,shapeFlag:ue}=I;if(se>0){if(se&128){nn(j,J,C,O,$,M,K,G,H);return}else if(se&256){Ft(j,J,C,O,$,M,K,G,H);return}}ue&8?(oe&16&&Nt(j,$,M),J!==j&&d(C,J)):oe&16?ue&16?nn(j,J,C,O,$,M,K,G,H):Nt(j,$,M,!0):(oe&8&&d(C,""),ue&16&&v(J,C,O,$,M,K,G,H))},Ft=(E,I,C,O,$,M,K,G,H)=>{E=E||As,I=I||As;const j=E.length,oe=I.length,J=Math.min(j,oe);let se;for(se=0;se<J;se++){const ue=I[se]=H?cr(I[se]):En(I[se]);N(E[se],ue,C,null,$,M,K,G,H)}j>oe?Nt(E,$,M,!0,!1,J):v(I,C,O,$,M,K,G,H,J)},nn=(E,I,C,O,$,M,K,G,H)=>{let j=0;const oe=I.length;let J=E.length-1,se=oe-1;for(;j<=J&&j<=se;){const ue=E[j],ae=I[j]=H?cr(I[j]):En(I[j]);if(Gr(ue,ae))N(ue,ae,C,null,$,M,K,G,H);else break;j++}for(;j<=J&&j<=se;){const ue=E[J],ae=I[se]=H?cr(I[se]):En(I[se]);if(Gr(ue,ae))N(ue,ae,C,null,$,M,K,G,H);else break;J--,se--}if(j>J){if(j<=se){const ue=se+1,ae=ue<oe?I[ue].el:O;for(;j<=se;)N(null,I[j]=H?cr(I[j]):En(I[j]),C,ae,$,M,K,G,H),j++}}else if(j>se)for(;j<=J;)je(E[j],$,M,!0),j++;else{const ue=j,ae=j,_e=new Map;for(j=ae;j<=se;j++){const lt=I[j]=H?cr(I[j]):En(I[j]);lt.key!=null&&_e.set(lt.key,j)}let Ae,ot=0;const at=se-ae+1;let zt=!1,pt=0;const tr=new Array(at);for(j=0;j<at;j++)tr[j]=0;for(j=ue;j<=J;j++){const lt=E[j];if(ot>=at){je(lt,$,M,!0);continue}let Wt;if(lt.key!=null)Wt=_e.get(lt.key);else for(Ae=ae;Ae<=se;Ae++)if(tr[Ae-ae]===0&&Gr(lt,I[Ae])){Wt=Ae;break}Wt===void 0?je(lt,$,M,!0):(tr[Wt-ae]=j+1,Wt>=pt?pt=Wt:zt=!0,N(lt,I[Wt],C,null,$,M,K,G,H),ot++)}const Js=zt?yE(tr):As;for(Ae=Js.length-1,j=at-1;j>=0;j--){const lt=ae+j,Wt=I[lt],go=I[lt+1],hs=lt+1<oe?go.el||go.placeholder:O;tr[j]===0?N(null,Wt,C,hs,$,M,K,G,H):zt&&(Ae<0||j!==Js[Ae]?Gt(Wt,C,hs,2):Ae--)}}},Gt=(E,I,C,O,$=null)=>{const{el:M,type:K,transition:G,children:H,shapeFlag:j}=E;if(j&6){Gt(E.component.subTree,I,C,O);return}if(j&128){E.suspense.move(I,C,O);return}if(j&64){K.move(E,I,C,re);return}if(K===ze){r(M,I,C);for(let J=0;J<H.length;J++)Gt(H[J],I,C,O);r(E.anchor,I,C);return}if(K===Go){q(E,I,C);return}if(O!==2&&j&1&&G)if(O===0)G.beforeEnter(M),r(M,I,C),$t(()=>G.enter(M),$);else{const{leave:J,delayLeave:se,afterLeave:ue}=G,ae=()=>{E.ctx.isUnmounted?s(M):r(M,I,C)},_e=()=>{M._isLeaving&&M[Fn](!0),J(M,()=>{ae(),ue&&ue()})};se?se(M,ae,_e):_e()}else r(M,I,C)},je=(E,I,C,O=!1,$=!1)=>{const{type:M,props:K,ref:G,children:H,dynamicChildren:j,shapeFlag:oe,patchFlag:J,dirs:se,cacheIndex:ue}=E;if(J===-2&&($=!1),G!=null&&(zn(),Ii(G,null,C,E,!0),Wn()),ue!=null&&(I.renderCache[ue]=void 0),oe&256){I.ctx.deactivate(E);return}const ae=oe&1&&se,_e=!bi(E);let Ae;if(_e&&(Ae=K&&K.onVnodeBeforeUnmount)&&yn(Ae,I,E),oe&6)_n(E.component,C,O);else{if(oe&128){E.suspense.unmount(C,O);return}ae&&Ur(E,null,I,"beforeUnmount"),oe&64?E.type.remove(E,I,C,re,O):j&&!j.hasOnce&&(M!==ze||J>0&&J&64)?Nt(j,I,C,!1,!0):(M===ze&&J&384||!$&&oe&16)&&Nt(H,I,C),O&&qe(E)}(_e&&(Ae=K&&K.onVnodeUnmounted)||ae)&&$t(()=>{Ae&&yn(Ae,I,E),ae&&Ur(E,null,I,"unmounted")},C)},qe=E=>{const{type:I,el:C,anchor:O,transition:$}=E;if(I===ze){er(C,O);return}if(I===Go){W(E);return}const M=()=>{s(C),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:G}=$,H=()=>K(C,M);G?G(E.el,M,H):H()}else M()},er=(E,I)=>{let C;for(;E!==I;)C=m(E),s(E),E=C;s(I)},_n=(E,I,C)=>{const{bum:O,scope:$,job:M,subTree:K,um:G,m:H,a:j}=E;Cd(H),Cd(j),O&&jo(O),$.stop(),M&&(M.flags|=8,je(K,E,I,C)),G&&$t(G,I),$t(()=>{E.isUnmounted=!0},I)},Nt=(E,I,C,O=!1,$=!1,M=0)=>{for(let K=M;K<E.length;K++)je(E[K],I,C,O,$)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),C=I&&I[Fw];return C?m(C):I};let te=!1;const Q=(E,I,C)=>{E==null?I._vnode&&je(I._vnode,null,null,!0):N(I._vnode||null,E,I,null,null,null,C),I._vnode=E,te||(te=!0,wd(),Vm(),te=!1)},re={p:N,um:je,m:Gt,r:qe,mt:De,mc:v,pc:ye,pbc:A,n:V,o:t};return{render:Q,hydrate:void 0,createApp:lE(Q)}}function Bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _E(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sg(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&sg(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===xt&&!l.el&&(l.el=o.el)}}function yE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ig(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ig(e)}function Cd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vE=Symbol.for("v-scx"),wE=()=>In(vE);function Ho(t,e,n){return og(t,e,n)}function og(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,l=it({},n),c=e&&r||!e&&i!=="post";let u;if(ji){if(i==="sync"){const _=wE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Tn,_.resume=Tn,_.pause=Tn,_}}const d=Et;l.call=(_,P,N)=>un(_,d,P,N);let p=!1;i==="post"?l.scheduler=_=>{$t(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,P)=>{P?_():du(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=Vw(t,e,l);return ji&&(u?u.push(m):c&&m()),m}function EE(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?ag(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=no(this),l=og(s,i.bind(r),n);return o(),l}function ag(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const TE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${ss(e)}Modifiers`];function IE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&TE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ye(d)?d.trim():d)),o.number&&(s=n.map(uc)));let l,c=r[l=Vl(e)]||r[l=Vl(tn(e))];!c&&i&&(c=r[l=Vl(ss(e))]),c&&un(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,un(u,t,6,s)}}function lg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=u=>{const d=lg(u,e,!0);d&&(l=!0,it(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):it(o,i),$e(t)&&r.set(t,o),o)}function Ga(t,e){return!t||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,ss(e))||ke(t,e))}function Pd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:P,inheritAttrs:N}=t,k=aa(t);let U,B;try{if(n.shapeFlag&4){const W=s||r,de=W;U=En(u.call(de,W,d,p,_,m,P)),B=l}else{const W=e;U=En(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),B=e.props?l:bE(l)}}catch(W){Ri.length=0,ja(W,t,1),U=ve(xt)}let q=U;if(B&&N!==!1){const W=Object.keys(B),{shapeFlag:de}=q;W.length&&de&7&&(i&&W.some(tu)&&(B=AE(B,i)),q=Tr(q,B,!1,!0))}return n.dirs&&(q=Tr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&$i(q,n.transition),U=q,aa(k),U}const bE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oa(n))&&((e||(e={}))[n]=t[n]);return e},AE=(t,e)=>{const n={};for(const r in t)(!tu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ga(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?xd(r,o,u):!0:!!o;return!1}function xd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ga(n,i))return!0}return!1}function SE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cg=t=>t.__isSuspense;function CE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Lw(t)}const ze=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Ri=[];let jt=null;function Z(t=!1){Ri.push(jt=t?null:[])}function PE(){Ri.pop(),jt=Ri[Ri.length-1]||null}let Bi=1;function kd(t,e=!1){Bi+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function ug(t){return t.dynamicChildren=Bi>0?jt||As:null,PE(),Bi>0&&jt&&jt.push(t),t}function ee(t,e,n,r,s,i){return ug(T(t,e,n,r,s,i,!0))}function xE(t,e,n,r,s){return ug(ve(t,e,n,r,s,!0))}function ca(t){return t?t.__v_isVNode===!0:!1}function Gr(t,e){return t.type===e.type&&t.key===e.key}const hg=({key:t})=>t??null,zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||It(t)||me(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,r=0,s=null,i=t===ze?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&zo(e),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return l?(yu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),Bi>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const ve=kE;function kE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zw)&&(t=xt),ca(t)){const l=Tr(t,e,!0);return n&&yu(l,n),Bi>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(jE(t)&&(t=t.__vccOpts),e){e=NE(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=sn(l)),$e(c)&&(hu(c)&&!he(c)&&(c=it({},c)),e.style=su(c))}const o=Ye(t)?1:cg(t)?128:Lm(t)?64:$e(t)?4:me(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function NE(t){return t?hu(t)||Xm(t)?it({},t):t:null}function Tr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?DE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&hg(u),ref:e&&e.ref?n&&i?he(i)?i.concat(zo(e)):[i,zo(e)]:zo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tr(t.ssContent),ssFallback:t.ssFallback&&Tr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&$i(d,c.clone(d)),d}function Ee(t=" ",e=0){return ve(za,null,t,e)}function _u(t,e){const n=ve(Go,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(Z(),xE(xt,null,t)):ve(xt,null,t)}function En(t){return t==null||typeof t=="boolean"?ve(xt):he(t)?ve(ze,null,t.slice()):ca(t)?cr(t):ve(za,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tr(t)}function yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Xm(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function DE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sn([e.class,r.class]));else if(s==="style")e.style=su([e.style,r.style]);else if(Oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yn(t,e,n,r=null){un(t,e,7,[n,r])}const VE=Qm();let OE=0;function ME(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VE,i={uid:OE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new aw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eg(r,s),emitsOptions:lg(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=IE.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const dg=()=>Et||Bt;let ua,wc;{const t=Ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ua=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),wc=e("__VUE_SSR_SETTERS__",n=>ji=n)}const no=t=>{const e=Et;return ua(t),t.scope.on(),()=>{t.scope.off(),ua(e)}},Nd=()=>{Et&&Et.scope.off(),ua(null)};function fg(t){return t.vnode.shapeFlag&4}let ji=!1;function LE(t,e=!1,n=!1){e&&wc(e);const{props:r,children:s}=t.vnode,i=fg(t);cE(t,r,i,e),fE(t,s,n||e);const o=i?FE(t,e):void 0;return e&&wc(!1),o}function FE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tE);const{setup:r}=n;if(r){zn();const s=t.setupContext=r.length>1?$E(t):null,i=no(t),o=to(r,t,0,[t.props,s]),l=om(o);if(Wn(),i(),(l||t.sp)&&!bi(t)&&Hm(t),l){if(o.then(Nd,Nd),e)return o.then(c=>{Dd(t,c)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else Dd(t,o)}else pg(t)}function Dd(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=xm(e)),pg(t)}function pg(t,e,n){const r=t.type;t.render||(t.render=r.render||Tn);{const s=no(t);zn();try{nE(t)}finally{Wn(),s()}}}const UE={get(t,e){return vt(t,"get",""),t[e]}};function $E(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,UE),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xm(Sw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function BE(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function jE(t){return me(t)&&"__vccOpts"in t}const Ot=(t,e)=>Nw(t,e,ji);function vu(t,e,n){const r=arguments.length;return r===2?$e(e)&&!he(e)?ca(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ca(n)&&(n=[n]),ve(t,e,n))}const qE="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ec;const Vd=typeof window<"u"&&window.trustedTypes;if(Vd)try{Ec=Vd.createPolicy("vue",{createHTML:t=>t})}catch{}const mg=Ec?t=>Ec.createHTML(t):t=>t,HE="http://www.w3.org/2000/svg",GE="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,Od=Ln&&Ln.createElement("template"),zE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ln.createElementNS(HE,t):e==="mathml"?Ln.createElementNS(GE,t):n?Ln.createElement(t,{is:n}):Ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Od.innerHTML=mg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Od.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ir="transition",hi="animation",qi=Symbol("_vtc"),gg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WE=it({},Fm,gg),KE=t=>(t.displayName="Transition",t.props=WE,t),Tc=KE((t,{slots:e})=>vu(Bw,QE(t),e)),Br=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Md=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function QE(t){const e={};for(const b in t)b in gg||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,P=YE(s),N=P&&P[0],k=P&&P[1],{onBeforeEnter:U,onEnter:B,onEnterCancelled:q,onLeave:W,onLeaveCancelled:de,onBeforeAppear:pe=U,onAppear:S=B,onAppearCancelled:v=q}=e,y=(b,w,De,tt)=>{b._enterCancelled=tt,jr(b,w?d:l),jr(b,w?u:o),De&&De()},A=(b,w)=>{b._isLeaving=!1,jr(b,p),jr(b,_),jr(b,m),w&&w()},R=b=>(w,De)=>{const tt=b?S:B,Be=()=>y(w,b,De);Br(tt,[w,Be]),Ld(()=>{jr(w,b?c:i),On(w,b?d:l),Md(tt)||Fd(w,r,N,Be)})};return it(e,{onBeforeEnter(b){Br(U,[b]),On(b,i),On(b,o)},onBeforeAppear(b){Br(pe,[b]),On(b,c),On(b,u)},onEnter:R(!1),onAppear:R(!0),onLeave(b,w){b._isLeaving=!0;const De=()=>A(b,w);On(b,p),b._enterCancelled?(On(b,m),Bd()):(Bd(),On(b,m)),Ld(()=>{b._isLeaving&&(jr(b,p),On(b,_),Md(W)||Fd(b,r,k,De))}),Br(W,[b,De])},onEnterCancelled(b){y(b,!1,void 0,!0),Br(q,[b])},onAppearCancelled(b){y(b,!0,void 0,!0),Br(v,[b])},onLeaveCancelled(b){A(b),Br(de,[b])}})}function YE(t){if(t==null)return null;if($e(t))return[jl(t.enter),jl(t.leave)];{const e=jl(t);return[e,e]}}function jl(t){return ew(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qi]||(t[qi]=new Set)).add(e)}function jr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qi];n&&(n.delete(e),n.size||(t[qi]=void 0))}function Ld(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let JE=0;function Fd(t,e,n,r){const s=t._endId=++JE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=XE(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function XE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${ir}Delay`),i=r(`${ir}Duration`),o=Ud(s,i),l=r(`${hi}Delay`),c=r(`${hi}Duration`),u=Ud(l,c);let d=null,p=0,m=0;e===ir?o>0&&(d=ir,p=o,m=i.length):e===hi?u>0&&(d=hi,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?ir:hi:null,m=d?d===ir?i.length:c.length:0);const _=d===ir&&/\b(transform|all)(,|$)/.test(r(`${ir}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:_}}function Ud(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$d(n)+$d(t[r])))}function $d(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bd(){return document.body.offsetHeight}function ZE(t,e,n){const r=t[qi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jd=Symbol("_vod"),eT=Symbol("_vsh"),tT=Symbol(""),nT=/(^|;)\s*display\s*:/;function rT(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wo(r,l,"")}else for(const o in e)n[o]==null&&Wo(r,o,"");for(const o in n)o==="display"&&(i=!0),Wo(r,o,n[o])}else if(s){if(e!==n){const o=r[tT];o&&(n+=";"+o),r.cssText=n,i=nT.test(n)}}else e&&t.removeAttribute("style");jd in t&&(t[jd]=i?r.display:"",t[eT]&&(r.display="none"))}const qd=/\s*!important$/;function Wo(t,e,n){if(he(n))n.forEach(r=>Wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sT(t,e);qd.test(n)?t.setProperty(ss(r),n.replace(qd,""),"important"):t[r]=n}}const Hd=["Webkit","Moz","ms"],ql={};function sT(t,e){const n=ql[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return ql[e]=r;r=Fa(r);for(let s=0;s<Hd.length;s++){const i=Hd[s]+r;if(i in t)return ql[e]=i}return e}const Gd="http://www.w3.org/1999/xlink";function zd(t,e,n,r,s,i=ow(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gd,e.slice(6,e.length)):t.setAttributeNS(Gd,e,n):n==null||i&&!um(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kr(n)?String(n):n)}function Wd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=um(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ys(t,e,n,r){t.addEventListener(e,n,r)}function iT(t,e,n,r){t.removeEventListener(e,n,r)}const Kd=Symbol("_vei");function oT(t,e,n,r,s=null){const i=t[Kd]||(t[Kd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=aT(e);if(r){const u=i[e]=uT(r,s);ys(t,l,u,c)}else o&&(iT(t,l,o,c),i[e]=void 0)}}const Qd=/(?:Once|Passive|Capture)$/;function aT(t){let e;if(Qd.test(t)){e={};let r;for(;r=t.match(Qd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let Hl=0;const lT=Promise.resolve(),cT=()=>Hl||(lT.then(()=>Hl=0),Hl=Date.now());function uT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(hT(r,n.value),e,5,[r])};return n.value=t,n.attached=cT(),n}function hT(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ZE(t,r,o):e==="style"?rT(t,n,r):Oa(e)?tu(e)||oT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fT(t,e,r,o))?(Wd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?Wd(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zd(t,e,r,o))};function fT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yd(e)&&Ye(n)?!1:e in t}const Jd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>jo(e,n):e};function pT(t){t.target.composing=!0}function Xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gl=Symbol("_assign"),kt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gl]=Jd(s);const i=r||s.props&&s.props.type==="number";ys(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=uc(l)),t[Gl](l)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",pT),ys(t,"compositionend",Xd),ys(t,"change",Xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gl]=Jd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?uc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},mT=["ctrl","shift","alt","meta"],gT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mT.some(n=>t[`${n}Key`]&&!e.includes(n))},_T=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=gT[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},yT=it({patchProp:dT},zE);let Zd;function vT(){return Zd||(Zd=mE(yT))}const wT=((...t)=>{const e=vT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=TT(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ET(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function ET(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function TT(t){return Ye(t)?document.querySelector(t):t}const IT=()=>{};var ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new AT;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RT=function(t){const e=_g(t);return yg.encodeByteArray(e,!0)},ha=function(t){return RT(t).replace(/\./g,"")},vg=function(t){try{return yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=()=>ST().__FIREBASE_DEFAULTS__,PT=()=>{if(typeof process>"u"||typeof ef>"u")return;const t=ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vg(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return IT()||CT()||PT()||xT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wg=t=>Ka()?.emulatorHosts?.[t],kT=t=>{const e=wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Eg=()=>Ka()?.config,Tg=t=>Ka()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ig(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ha(JSON.stringify(n)),ha(JSON.stringify(o)),""].join(".")}const Si={};function VT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?t.emulator.push(e):t.prod.push(e);return t}function OT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tf=!1;function bg(t,e){if(typeof window>"u"||typeof document>"u"||!Hs(window.location.host)||Si[t]===e||Si[t]||tf)return;Si[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=VT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{tf=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=OT(r),_=n("text"),P=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),U=n("preprendIcon"),B=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),d(k,N);const W=u();c(B,U),q.append(B,P,k,W),document.body.appendChild(q)}i?(P.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function LT(){const t=Ka()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ag(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $T(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BT(){return!LT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rg(){try{return typeof indexedDB=="object"}catch{return!1}}function Sg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function jT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qT,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?HT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new mn(s,l,r)}}function HT(t,e){return t.replace(GT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const GT=/\{\$([^}]+)}/g;function zT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nf(i)&&nf(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WT(t,e){const n=new KT(t,e);return n.subscribe.bind(n)}class KT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zl),s.error===void 0&&(s.error=zl),s.complete===void 0&&(s.complete=zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=1e3,JT=2,XT=14400*1e3,ZT=.5;function rf(t,e=YT,n=JT){const r=e*Math.pow(n,t),s=Math.round(ZT*r*(Math.random()-.5)*2);return Math.min(XT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nI(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tI(t){return t===Hr?void 0:t}function nI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const sI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},iI=we.INFO,oI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},aI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=oI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=iI,this._logHandler=aI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const lI=(t,e)=>e.some(n=>t instanceof n);let sf,of;function cI(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uI(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Ic=new WeakMap,Pg=new WeakMap,Wl=new WeakMap,wu=new WeakMap;function hI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,t)}).catch(()=>{}),wu.set(e,t),e}function dI(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fI(t){bc=t(bc)}function pI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kl(this),e,...n);return Pg.set(r,e.sort?e.sort():[e]),_r(r)}:uI().includes(t)?function(...e){return t.apply(Kl(this),e),_r(Cg.get(this))}:function(...e){return _r(t.apply(Kl(this),e))}}function mI(t){return typeof t=="function"?pI(t):(t instanceof IDBTransaction&&dI(t),lI(t,cI())?new Proxy(t,bc):t)}function _r(t){if(t instanceof IDBRequest)return hI(t);if(Wl.has(t))return Wl.get(t);const e=mI(t);return e!==t&&(Wl.set(t,e),wu.set(e,t)),e}const Kl=t=>wu.get(t);function xg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const gI=["get","getKey","getAll","getAllKeys","count"],_I=["put","add","delete","clear"],Ql=new Map;function af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ql.set(e,i),i}fI(t=>({...t,get:(e,n,r)=>af(e,n)||t.get(e,n,r),has:(e,n)=>!!af(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vI(t){return t.getComponent()?.type==="VERSION"}const Ac="@firebase/app",lf="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Qa("@firebase/app"),wI="@firebase/app-compat",EI="@firebase/analytics-compat",TI="@firebase/analytics",II="@firebase/app-check-compat",bI="@firebase/app-check",AI="@firebase/auth",RI="@firebase/auth-compat",SI="@firebase/database",CI="@firebase/data-connect",PI="@firebase/database-compat",xI="@firebase/functions",kI="@firebase/functions-compat",NI="@firebase/installations",DI="@firebase/installations-compat",VI="@firebase/messaging",OI="@firebase/messaging-compat",MI="@firebase/performance",LI="@firebase/performance-compat",FI="@firebase/remote-config",UI="@firebase/remote-config-compat",$I="@firebase/storage",BI="@firebase/storage-compat",jI="@firebase/firestore",qI="@firebase/ai",HI="@firebase/firestore-compat",GI="firebase",zI="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",WI={[Ac]:"fire-core",[wI]:"fire-core-compat",[TI]:"fire-analytics",[EI]:"fire-analytics-compat",[bI]:"fire-app-check",[II]:"fire-app-check-compat",[AI]:"fire-auth",[RI]:"fire-auth-compat",[SI]:"fire-rtdb",[CI]:"fire-data-connect",[PI]:"fire-rtdb-compat",[xI]:"fire-fn",[kI]:"fire-fn-compat",[NI]:"fire-iid",[DI]:"fire-iid-compat",[VI]:"fire-fcm",[OI]:"fire-fcm-compat",[MI]:"fire-perf",[LI]:"fire-perf-compat",[FI]:"fire-rc",[UI]:"fire-rc-compat",[$I]:"fire-gcs",[BI]:"fire-gcs-compat",[jI]:"fire-fst",[HI]:"fire-fst-compat",[qI]:"fire-vertex","fire-js":"fire-js",[GI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Map,KI=new Map,Sc=new Map;function cf(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Sc.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of da.values())cf(n,t);for(const n of KI.values())cf(n,t);return!0}function os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new is("app","Firebase",QI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=zI;function kg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=Eg()),!n)throw yr.create("no-options");const i=da.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new rI(s);for(const c of Sc.values())o.addComponent(c);const l=new YI(n,r,o);return da.set(s,l),l}function Eu(t=Rc){const e=da.get(t);if(!e&&t===Rc&&Eg())return kg();if(!e)throw yr.create("no-app",{appName:t});return e}function Zt(t,e,n){let r=WI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(o.join(" "));return}xn(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="firebase-heartbeat-database",XI=1,Hi="firebase-heartbeat-store";let Yl=null;function Ng(){return Yl||(Yl=xg(JI,XI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Yl}async function ZI(t){try{const n=(await Ng()).transaction(Hi),r=await n.objectStore(Hi).get(Dg(t));return await n.done,r}catch(e){if(e instanceof mn)Kn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e?.message});Kn.warn(n.message)}}}async function uf(t,e){try{const r=(await Ng()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,Dg(t)),await r.done}catch(n){if(n instanceof mn)Kn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n?.message});Kn.warn(r.message)}}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=1024,tb=30;class nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>tb){const s=ib(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Kn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hf(),{heartbeatsToSend:n,unsentEntries:r}=rb(this._heartbeatsCache.heartbeats),s=ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Kn.warn(e),""}}}function hf(){return new Date().toISOString().substring(0,10)}function rb(t,e=eb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),df(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rg()?Sg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function df(t){return ha(JSON.stringify({version:2,heartbeats:t})).length}function ib(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){xn(new hn("platform-logger",e=>new yI(e),"PRIVATE")),xn(new hn("heartbeat",e=>new nb(e),"PRIVATE")),Zt(Ac,lf,t),Zt(Ac,lf,"esm2020"),Zt("fire-js","")}ob("");function Vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=Vg,Og=new is("auth","Firebase",Vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Qa("@firebase/auth");function lb(t,...e){fa.logLevel<=we.WARN&&fa.warn(`Auth (${Gs}): ${t}`,...e)}function Ko(t,...e){fa.logLevel<=we.ERROR&&fa.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Tu(t,...e)}function bn(t,...e){return Tu(t,...e)}function Mg(t,e,n){const r={...ab(),[e]:n};return new is("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Mg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Og.create(t,...e)}function le(t,e,...n){if(!t)throw Tu(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ko(e),new Error(e)}function Qn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof self<"u"&&self.location?.href||""}function cb(){return ff()==="http:"||ff()==="https:"}function ff(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||Ag()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=MT()||UT()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pb=new so(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Zn(t,e,n,r,s={}){return Fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ro({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return FT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(u.credentials="include"),Lg.fetch()(await Ug(t,t.config.apiHost,n,l),u)})}async function Fg(t,e,n){t._canInitEmulator=!1;const r={...db,...e};try{const s=new gb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mg(t,d,u);dn(t,d)}}catch(s){if(s instanceof mn)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function io(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ug(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Iu(t.config,s):`${t.config.apiScheme}://${s}`;return fb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function mb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),pb.get())})}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function pf(t){return t!==void 0&&t.enterprise!==void 0}class _b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yb(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function pa(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wb(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=bu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ci(Jl(s.auth_time)),issuedAtTime:Ci(Jl(s.iat)),expirationTime:Ci(Jl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Jl(t){return Number(t)*1e3}function bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=vg(n);return s?JSON.parse(s):(Ko("Failed to decode base64 JWT payload"),null)}catch(s){return Ko("Caught error parsing JWT payload as JSON",s?.toString()),null}}function mf(t){const e=bu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&Eb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Eb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){const e=t.auth,n=await t.getIdToken(),r=await Os(t,pa(e,{idToken:n}));le(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$g(s.providerUserInfo):[],o=bb(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Pc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ib(t){const e=We(t);await ma(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $g(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e){const n=await Fg(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ug(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(c.credentials="include"),Lg.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ab(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ks;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Os(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wb(this,e)}reload(){return Ib(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ma(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Os(this,vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:P,stsTokenManager:N}=n;le(p&&N,e,"internal-error");const k=ks.fromJSON(this.name,N);le(typeof p=="string",e,"internal-error"),or(r,e.name),or(s,e.name),le(typeof m=="boolean",e,"internal-error"),le(typeof _=="boolean",e,"internal-error"),or(i,e.name),or(o,e.name),or(l,e.name),or(c,e.name),or(u,e.name),or(d,e.name);const U=new on({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:u,lastLoginAt:d});return P&&Array.isArray(P)&&(U.providerData=P.map(B=>({...B}))),c&&(U._redirectEventId=c),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new ks;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ma(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$g(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new ks;l.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bg.type="NONE";const _f=Bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pa(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(jn(_f),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jn(_f);const o=Qo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await pa(e,{idToken:d}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,d)}else p=on._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ns(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ns(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wg(e))return"Blackberry";if(Kg(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||Hg(e))&&!e.includes("edge/"))return"Chrome";if(zg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function jg(t=bt()){return/firefox\//i.test(t)}function qg(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hg(t=bt()){return/crios\//i.test(t)}function Gg(t=bt()){return/iemobile/i.test(t)}function zg(t=bt()){return/android/i.test(t)}function Wg(t=bt()){return/blackberry/i.test(t)}function Kg(t=bt()){return/webos/i.test(t)}function Au(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sb(t=bt()){return Au(t)&&!!window.navigator?.standalone}function Cb(){return $T()&&document.documentMode===10}function Qg(t=bt()){return Au(t)||zg(t)||Kg(t)||Wg(t)||/windows phone/i.test(t)||Gg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t,e=[]){let n;switch(t){case"Browser":n=yf(bt());break;case"Worker":n=`${yf(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=6;class Nb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pa(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Qt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ma(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Hn(this));const n=e?We(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&lb(`Error while retrieving App Check token: ${e.error}`),e?.token}}function as(t){return We(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=WT(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vb(t){Ya=t}function Jg(t){return Ya.loadJS(t)}function Ob(){return Ya.recaptchaEnterpriseScript}function Mb(){return Ya.gapiScript}function Lb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Fb{constructor(){this.enterprise=new Ub}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ub{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $b="recaptcha-enterprise",Xg="NO_RECAPTCHA";class Bb{constructor(e){this.type=$b,this.auth=as(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{yb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new _b(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;pf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&pf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Ob();c.length!==0&&(c+=l),Jg(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function wf(t,e,n,r=!1,s=!1){const i=new Bb(t);let o;if(s)o=Xg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function xc(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){const n=os(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function qb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(jn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Hb(t,e,n){const r=as(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zg(e),{host:o,port:l}=Gb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Ir(u,r.config.emulator)&&Ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Hs(o)?(Ig(`${i}//${o}${c}`),bg("Auth",!0)):zb()}function Zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gb(t){const e=Zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ef(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ef(o)}}}function Ef(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function Wb(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function Yb(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",Kb);case"emailLink":return Qb(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",Wb);case"emailLink":return Yb(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="http://localhost";class Xr extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:Jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zb(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class Su{constructor(e){const n=pi(mi(e)),r=n.apiKey??null,s=n.oobCode??null,i=Xb(n.mode??null);le(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Zb(e);try{return new Su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Su.parseLink(n);return le(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends oo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends oo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends oo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e){return io(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=Tf(r);return new Zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new Zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ga(e,n,r,s)}}function t_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(t,i,e,r):i})}async function t0(t,e,n=!1){const r=await Os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await Os(t,t_(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=bu(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),Zr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){if(Qt(t.app))return Promise.reject(Hn(t));const r="signIn",s=await t_(t,r,e),i=await Zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function r0(t,e){return n_(as(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function s0(t,e,n){if(Qt(t.app))return Promise.reject(Hn(t));const r=as(t),o=await xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&r_(t),c}),l=await Zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function i0(t,e,n){return Qt(t.app)?Promise.reject(Hn(t)):r0(We(t),zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&r_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Os(r,o0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function l0(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function c0(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function Cu(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function u0(t){return We(t).signOut()}const _a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_a,"1"),this.storage.removeItem(_a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=1e3,d0=10;class i_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Cb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,d0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i_.type="LOCAL";const f0=i_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o_.type="SESSION";const a_=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ja(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await p0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Pu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function g0(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function _0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y0(){return navigator?.serviceWorker?.controller||null}function v0(){return l_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebaseLocalStorageDb",w0=1,ya="firebaseLocalStorage",u_="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([ya],e?"readwrite":"readonly").objectStore(ya)}function E0(){const t=indexedDB.deleteDatabase(c_);return new ao(t).toPromise()}function kc(){const t=indexedDB.open(c_,w0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ya,{keyPath:u_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ya)?e(r):(r.close(),await E0(),e(await kc()))})})}async function If(t,e,n){const r=Xa(t,!0).put({[u_]:e,value:n});return new ao(r).toPromise()}async function T0(t,e){const n=Xa(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function bf(t,e){const n=Xa(t,!0).delete(e);return new ao(n).toPromise()}const I0=800,b0=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>b0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(v0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await _0(),!this.activeServiceWorker)return;this.sender=new m0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kc();return await If(e,_a,"1"),await bf(e,_a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>T0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const A0=h_;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e){return e?jn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S0(t){return n_(t.auth,new xu(t),t.bypassAuthState)}function C0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),n0(n,new xu(t),t.bypassAuthState)}async function P0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),t0(n,new xu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S0;case"linkViaPopup":case"linkViaRedirect":return P0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:dn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=new so(2e3,1e4);class bs extends d_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x0.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="pendingRedirect",Yo=new Map;class N0 extends d_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await D0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D0(t,e){const n=M0(e),r=O0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function V0(t,e){Yo.set(t._key(),e)}function O0(t){return jn(t._redirectPersistence)}function M0(t){return Qo(k0,t.config.apiKey,t.name)}async function L0(t,e,n=!1){if(Qt(t.app))return Promise.reject(Hn(t));const r=as(t),s=R0(r,e),o=await new N0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=600*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!f_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(bn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function $0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B0(t);for(const n of e)try{if(G0(n))return}catch{}dn(t,"unauthorized-domain")}function G0(t){const e=Cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!q0.test(n))return!1;if(j0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new so(3e4,6e4);function Rf(){const t=An().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W0(t){return new Promise((e,n)=>{function r(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(bn(t,"network-request-failed"))},timeout:z0.get()})}if(An().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(An().gapi?.load)r();else{const s=Lb("iframefcb");return An()[s]=()=>{gapi.load?r():n(bn(t,"network-request-failed"))},Jg(`${Mb()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function K0(t){return Jo=Jo||W0(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new so(5e3,15e3),Y0="__/auth/iframe",J0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eA(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iu(e,J0):`https://${t.config.authDomain}/${Y0}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},s=Z0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ro(r).slice(1)}`}async function tA(t){const e=await K0(t),n=An().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:eA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=An().setTimeout(()=>{i(o)},Q0.get());function c(){An().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rA=500,sA=600,iA="_blank",oA="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aA(t,e,n,r=rA,s=sA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...nA,width:r.toString(),height:s.toString(),top:i,left:o},u=bt().toLowerCase();n&&(l=Hg(u)?iA:n),jg(u)&&(e=e||oA,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,P])=>`${m}${_}=${P},`,"");if(Sb(u)&&l!=="_self")return lA(e||"",l),new Sf(null);const p=window.open(e||"",l,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Sf(p)}function lA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="__/auth/handler",uA="emulator/auth/handler",hA=encodeURIComponent("fac");async function Cf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:s};if(e instanceof e_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof oo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${hA}=${encodeURIComponent(c)}`:"";return`${dA(t)}?${ro(l).slice(1)}${u}`}function dA({config:t}){return t.emulator?Iu(t,uA):`https://${t.authDomain}/${cA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="webStorageSupport";class fA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a_,this._completeRedirectFn=L0,this._overrideRedirectResult=V0}async _openPopup(e,n,r,s){Qn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Cf(e,n,r,Cc(),s);return aA(e,i,Pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cf(e,n,r,Cc(),s);return g0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tA(e),r=new U0(e);return n.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xl,{type:Xl},s=>{const i=s?.[0]?.[Xl];i!==void 0&&n(!!i),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qg()||qg()||Au()}}const pA=fA;var Pf="@firebase/auth",xf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _A(t){xn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(t)},u=new Db(r,s,i,c);return qb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new hn("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new mA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Pf,xf,gA(t)),Zt(Pf,xf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=300,vA=Tg("authIdTokenMaxAge")||yA;let kf=null;const wA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;const s=n?.token;kf!==s&&(kf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zi(t=Eu()){const e=os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jb(t,{popupRedirectResolver:pA,persistence:[A0,f0,a_]}),r=Tg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wA(i.toString());c0(n,o,()=>o(n.currentUser)),l0(n,l=>o(l))}}const s=wg("auth");return s&&Hb(n,`http://${s}`),n}function EA(){return document.getElementsByTagName("head")?.[0]??document}Vb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_A("Browser");const gn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},TA={name:"Navbar",data(){return{menuOpen:!1,user:null}},created(){const t=zi();Cu(t,e=>{this.user=e})},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},logout(){const t=zi();u0(t).then(()=>{this.user=null,this.$router.push("/")})}}},IA={class:"bg-gray-900 text-white fixed w-full z-50 shadow-lg"},bA={class:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"},AA={class:"hidden md:flex items-center gap-8"},RA={key:0},SA={class:"hidden md:flex items-center gap-4"},CA={class:"md:hidden"},PA={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},xA={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},kA={key:0,class:"md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4"},NA={key:0},DA={key:1};function VA(t,e,n,r,s,i){const o=qn("router-link");return Z(),ee("header",IA,[T("nav",bA,[e[10]||(e[10]=T("p",{class:"text-2xl font-bold cursor-pointer hover:text-indigo-500 transition-colors"}," PlayHive ",-1)),T("ul",AA,[T("li",null,[ve(o,{to:"/",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[3]||(e[3]=[Ee("Home",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/games",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[4]||(e[4]=[Ee("Games",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/#how-it-works",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[5]||(e[5]=[Ee("How It Works",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/about",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[6]||(e[6]=[Ee("About",-1)])]),_:1})]),s.user?(Z(),ee("li",RA,[ve(o,{to:"/cart",class:"hover:text-indigo-500 text-xl"},{default:Xe(()=>[...e[7]||(e[7]=[Ee(" 🛒 ",-1)])]),_:1})])):nt("",!0)]),T("div",SA,[s.user?(Z(),ee("button",{key:0,onClick:e[0]||(e[0]=(...l)=>i.logout&&i.logout(...l)),class:"hover:text-red-500 text-xl"}," 🚪 ")):nt("",!0)]),T("div",CA,[T("button",{onClick:e[1]||(e[1]=(...l)=>i.toggleMenu&&i.toggleMenu(...l)),class:"focus:outline-none"},[s.menuOpen?(Z(),ee("svg",xA,[...e[9]||(e[9]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(Z(),ee("svg",PA,[...e[8]||(e[8]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])])]),ve(Tc,{name:"slide-fade"},{default:Xe(()=>[s.menuOpen?(Z(),ee("ul",kA,[T("li",null,[ve(o,{to:"/",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[11]||(e[11]=[Ee("Home",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/games",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[12]||(e[12]=[Ee("Games",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/#how-it-works",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[13]||(e[13]=[Ee("How It Works",-1)])]),_:1})]),T("li",null,[ve(o,{to:"/about",class:"hover:text-indigo-500 transition-colors"},{default:Xe(()=>[...e[14]||(e[14]=[Ee("About",-1)])]),_:1})]),s.user?(Z(),ee("li",NA,[ve(o,{to:"/cart",class:"hover:text-indigo-500 text-xl"},{default:Xe(()=>[...e[15]||(e[15]=[Ee(" 🛒 ",-1)])]),_:1})])):nt("",!0),s.user?(Z(),ee("li",DA,[T("button",{onClick:e[2]||(e[2]=(...l)=>i.logout&&i.logout(...l)),class:"hover:text-red-500 text-xl"}," 🚪 ")])):nt("",!0)])):nt("",!0)]),_:1})])}const OA=gn(TA,[["render",VA],["__scopeId","data-v-6cbdd4c3"]]),MA={name:"Footer"},LA={class:"bg-gray-800 text-gray-300 py-10"},FA={class:"border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs"},UA={class:"border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs"};function $A(t,e,n,r,s,i){return Z(),ee("footer",LA,[T("div",FA,[e[0]||(e[0]=_u('<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm"><div><h2 class="text-xl font-bold text-white mb-2">PlayHive</h2><p class="text-gray-400"> Custom Software Solutions Built for Your Business </p><div class="flex gap-3 mt-3"><a href="#" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.02 4.92 4.92 0 0 1 1.02 1.77c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.02 1.77 4.92 4.92 0 0 1-1.77 1.02c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.02 4.92 4.92 0 0 1-1.02-1.77c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.02-1.77 4.92 4.92 0 0 1 1.77-1.02c.46-.163 1.26-.35 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.013 7.052.072 5.772.131 4.842.326 4.042.634c-.813.322-1.498.757-2.178 1.437S.956 3.23.634 4.042C.326 4.842.131 5.772.072 7.052.013 8.332 0 8.735 0 12s.013 3.668.072 4.948c.059 1.28.254 2.21.562 3.01.322.813.757 1.498 1.437 2.178s1.365 1.115 2.178 1.437c.8.308 1.73.503 3.01.562C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.28-.059 2.21-.254 3.01-.562.813-.322 1.498-.757 2.178-1.437s1.115-1.365 1.437-2.178c.308-.8.503-1.73.562-3.01.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.059-1.28-.254-2.21-.562-3.01-.322-.813-.757-1.498-1.437-2.178s-1.365-1.115-2.178-1.437c-.8-.308-1.73-.503-3.01-.562C15.668.013 15.265 0 12 0z"></path><circle cx="12" cy="12" r="3.6"></circle></svg></a><a href="#" class="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.45 4.65-2.45 4.95 0 5.85 3.25 5.85 7.45V24h-5v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.95V24h-5V8z"></path></svg></a></div></div></div>',1)),T("div",UA," © "+Y(new Date().getFullYear())+" AqilLabs. All rights reserved. ",1)])])}const BA=gn(MA,[["render",$A]]),jA={components:{Navbar:OA,Footer:BA}};function qA(t,e,n,r,s,i){const o=qn("Navbar"),l=qn("router-view"),c=qn("Footer");return Z(),ee("div",null,[ve(o),ve(l),ve(c)])}const HA=gn(jA,[["render",qA]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof document<"u";function p_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function GA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&p_(t.default)}const xe=Object.assign;function Zl(t,e){const n={};for(const r in e){const s=e[r];n[r]=fn(s)?s.map(t):t(s)}return n}const Pi=()=>{},fn=Array.isArray,m_=/#/g,zA=/&/g,WA=/\//g,KA=/=/g,QA=/\?/g,g_=/\+/g,YA=/%5B/g,JA=/%5D/g,__=/%5E/g,XA=/%60/g,y_=/%7B/g,ZA=/%7C/g,v_=/%7D/g,e1=/%20/g;function ku(t){return encodeURI(""+t).replace(ZA,"|").replace(YA,"[").replace(JA,"]")}function t1(t){return ku(t).replace(y_,"{").replace(v_,"}").replace(__,"^")}function Nc(t){return ku(t).replace(g_,"%2B").replace(e1,"+").replace(m_,"%23").replace(zA,"%26").replace(XA,"`").replace(y_,"{").replace(v_,"}").replace(__,"^")}function n1(t){return Nc(t).replace(KA,"%3D")}function r1(t){return ku(t).replace(m_,"%23").replace(QA,"%3F")}function s1(t){return t==null?"":r1(t).replace(WA,"%2F")}function Wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const i1=/\/$/,o1=t=>t.replace(i1,"");function ec(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=u1(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Wi(o)}}function a1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ms(e.matched[r],n.matched[s])&&w_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function w_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!c1(t[n],e[n]))return!1;return!0}function c1(t,e){return fn(t)?Df(t,e):fn(e)?Df(e,t):t===e}function Df(t,e){return fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function u1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ki;(function(t){t.pop="pop",t.push="push"})(Ki||(Ki={}));var xi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xi||(xi={}));function h1(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o1(t)}const d1=/^[^#]+#/;function f1(t,e){return t.replace(d1,"#")+e}function p1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Za=()=>({left:window.scrollX,top:window.scrollY});function m1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=p1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vf(t,e){return(history.state?history.state.position-e:-1)+t}const Dc=new Map;function g1(t,e){Dc.set(t,e)}function _1(t){const e=Dc.get(t);return Dc.delete(t),e}let y1=()=>location.protocol+"//"+location.host;function E_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Nf(c,"")}return Nf(n,t)+r+s}function v1(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=E_(t,location),P=n.value,N=e.value;let k=0;if(m){if(n.value=_,e.value=m,o&&o===P){o=null;return}k=N?m.position-N.position:0}else r(_);s.forEach(U=>{U(n.value,P,{delta:k,type:Ki.pop,direction:k?k>0?xi.forward:xi.back:xi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:Za()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Za():null}}function w1(t){const{history:e,location:n}=window,r={value:E_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:y1()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=xe({},e.state,Of(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=xe({},s.value,e.state,{forward:c,scroll:Za()});i(d.current,d,!0);const p=xe({},Of(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function E1(t){t=h1(t);const e=w1(t),n=v1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:f1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function T1(t){return typeof t=="string"||t&&typeof t=="object"}function T_(t){return typeof t=="string"||typeof t=="symbol"}const I_=Symbol("");var Mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mf||(Mf={}));function Ls(t,e){return xe(new Error,{type:t,[I_]:!0},e)}function Mn(t,e){return t instanceof Error&&I_ in t&&(e==null||!!(t.type&e))}const Lf="[^/]+?",I1={sensitive:!1,strict:!1,start:!0,end:!0},b1=/[.+*?^${}()[\]/\\]/g;function A1(t,e){const n=xe({},I1,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(b1,"\\$&"),_+=40;else if(m.type===1){const{value:P,repeatable:N,optional:k,regexp:U}=m;i.push({name:P,repeatable:N,optional:k});const B=U||Lf;if(B!==Lf){_+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${P}" (${B}): `+W.message)}}let q=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=k&&u.length<2?`(?:/${q})`:"/"+q),k&&(q+="?"),s+=q,_+=20,k&&(_+=-8),N&&(_+=-20),B===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",P=i[m-1];p[P.name]=_&&P.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:P,repeatable:N,optional:k}=_,U=P in u?u[P]:"";if(fn(U)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const B=fn(U)?U.join("/"):U;if(!B)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function R1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function b_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=R1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ff(r))return 1;if(Ff(s))return-1}return s.length-r.length}function Ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S1={type:0,value:""},C1=/[a-zA-Z0-9_]/;function P1(t){if(!t)return[[]];if(t==="/")return[[S1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:C1.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function x1(t,e,n){const r=A1(P1(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function k1(t,e){const n=[],r=new Map;e=jf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const P=!_,N=$f(p);N.aliasOf=_&&_.record;const k=jf(e,p),U=[N];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of W)U.push($f(xe({},N,{components:_?_.record.components:N.components,path:de,aliasOf:_?_.record:N})))}let B,q;for(const W of U){const{path:de}=W;if(m&&de[0]!=="/"){const pe=m.record.path,S=pe[pe.length-1]==="/"?"":"/";W.path=m.record.path+(de&&S+de)}if(B=x1(W,m,k),_?_.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),P&&p.name&&!Bf(B)&&o(p.name)),A_(B)&&c(B),N.children){const pe=N.children;for(let S=0;S<pe.length;S++)i(pe[S],B,_&&_.children[S])}_=_||B}return q?()=>{o(q)}:Pi}function o(p){if(T_(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=V1(p,n);n.splice(m,0,p),p.record.name&&!Bf(p)&&r.set(p.record.name,p)}function u(p,m){let _,P={},N,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ls(1,{location:p});k=_.record.name,P=xe(Uf(m.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Uf(p.params,_.keys.map(q=>q.name))),N=_.stringify(P)}else if(p.path!=null)N=p.path,_=n.find(q=>q.re.test(N)),_&&(P=_.parse(N),k=_.record.name);else{if(_=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!_)throw Ls(1,{location:p,currentLocation:m});k=_.record.name,P=xe({},m.params,p.params),N=_.stringify(P)}const U=[];let B=_;for(;B;)U.unshift(B.record),B=B.parent;return{name:k,path:N,params:P,matched:U,meta:D1(U)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:N1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function N1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function D1(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function jf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function V1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;b_(t,e[i])<0?r=i:n=i+1}const s=O1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function O1(t){let e=t;for(;e=e.parent;)if(A_(e)&&b_(t,e)===0)return e}function A_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function M1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(g_," "),o=i.indexOf("="),l=Wi(o<0?i:i.slice(0,o)),c=o<0?null:Wi(i.slice(o+1));if(l in e){let u=e[l];fn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function qf(t){let e="";for(let n in t){const r=t[n];if(n=n1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(r)?r.map(i=>i&&Nc(i)):[r&&Nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function L1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const F1=Symbol(""),Hf=Symbol(""),el=Symbol(""),R_=Symbol(""),Vc=Symbol("");function di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ls(4,{from:n,to:e})):m instanceof Error?c(m):T1(m)?c(Ls(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function tc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(p_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ur(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=GA(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&ur(_,n,r,o,l,s)()}))}}return i}function Gf(t){const e=In(el),n=In(R_),r=Ot(()=>{const c=Cs(t.to);return e.resolve(c)}),s=Ot(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Ms.bind(null,d));if(m>-1)return m;const _=zf(c[u-2]);return u>1&&zf(d)===_&&p[p.length-1].path!==_?p.findIndex(Ms.bind(null,c[u-2])):m}),i=Ot(()=>s.value>-1&&q1(n.params,r.value.params)),o=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&w_(n.params,r.value.params));function l(c={}){if(j1(c)){const u=e[Cs(t.replace)?"replace":"push"](Cs(t.to)).catch(Pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function U1(t){return t.length===1?t[0]:t}const $1=qm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gf,setup(t,{slots:e}){const n=Ba(Gf(t)),{options:r}=In(el),s=Ot(()=>({[Wf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&U1(e.default(n));return t.custom?i:vu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),B1=$1;function j1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function q1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!fn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wf=(t,e,n)=>t??e??n,H1=qm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=In(Vc),s=Ot(()=>t.route||r.value),i=In(Hf,0),o=Ot(()=>{let u=Cs(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ot(()=>s.value.matched[o.value]);qo(Hf,Ot(()=>o.value+1)),qo(F1,l),qo(Vc,s);const c=St();return Ho(()=>[c.value,l.value,t.name],([u,d,p],[m,_,P])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Ms(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Kf(n.default,{Component:m,route:u});const _=p.props[d],P=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=vu(m,xe({},P,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Kf(n.default,{Component:k,route:u})||k}}});function Kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const G1=H1;function z1(t){const e=k1(t.routes,t),n=t.parseQuery||M1,r=t.stringifyQuery||qf,s=t.history,i=di(),o=di(),l=di(),c=Cw(ar);let u=ar;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Zl.bind(null,V=>""+V),p=Zl.bind(null,s1),m=Zl.bind(null,Wi);function _(V,te){let Q,re;return T_(V)?(Q=e.getRecordMatcher(V),re=te):re=V,e.addRoute(re,Q)}function P(V){const te=e.getRecordMatcher(V);te&&e.removeRoute(te)}function N(){return e.getRoutes().map(V=>V.record)}function k(V){return!!e.getRecordMatcher(V)}function U(V,te){if(te=xe({},te||c.value),typeof V=="string"){const C=ec(n,V,te.path),O=e.resolve({path:C.path},te),$=s.createHref(C.fullPath);return xe(C,O,{params:m(O.params),hash:Wi(C.hash),redirectedFrom:void 0,href:$})}let Q;if(V.path!=null)Q=xe({},V,{path:ec(n,V.path,te.path).path});else{const C=xe({},V.params);for(const O in C)C[O]==null&&delete C[O];Q=xe({},V,{params:p(C)}),te.params=p(te.params)}const re=e.resolve(Q,te),Se=V.hash||"";re.params=d(m(re.params));const E=a1(r,xe({},V,{hash:t1(Se),path:re.path})),I=s.createHref(E);return xe({fullPath:E,hash:Se,query:r===qf?L1(V.query):V.query||{}},re,{redirectedFrom:void 0,href:I})}function B(V){return typeof V=="string"?ec(n,V,c.value.path):xe({},V)}function q(V,te){if(u!==V)return Ls(8,{from:te,to:V})}function W(V){return S(V)}function de(V){return W(xe(B(V),{replace:!0}))}function pe(V){const te=V.matched[V.matched.length-1];if(te&&te.redirect){const{redirect:Q}=te;let re=typeof Q=="function"?Q(V):Q;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=B(re):{path:re},re.params={}),xe({query:V.query,hash:V.hash,params:re.path!=null?{}:V.params},re)}}function S(V,te){const Q=u=U(V),re=c.value,Se=V.state,E=V.force,I=V.replace===!0,C=pe(Q);if(C)return S(xe(B(C),{state:typeof C=="object"?xe({},Se,C.state):Se,force:E,replace:I}),te||Q);const O=Q;O.redirectedFrom=te;let $;return!E&&l1(r,re,Q)&&($=Ls(16,{to:O,from:re}),Gt(re,re,!0,!1)),($?Promise.resolve($):A(O,re)).catch(M=>Mn(M)?Mn(M,2)?M:nn(M):ye(M,O,re)).then(M=>{if(M){if(Mn(M,2))return S(xe({replace:I},B(M.to),{state:typeof M.to=="object"?xe({},Se,M.to.state):Se,force:E}),te||O)}else M=b(O,re,!0,I,Se);return R(O,re,M),M})}function v(V,te){const Q=q(V,te);return Q?Promise.reject(Q):Promise.resolve()}function y(V){const te=er.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(V):V()}function A(V,te){let Q;const[re,Se,E]=W1(V,te);Q=tc(re.reverse(),"beforeRouteLeave",V,te);for(const C of re)C.leaveGuards.forEach(O=>{Q.push(ur(O,V,te))});const I=v.bind(null,V,te);return Q.push(I),Nt(Q).then(()=>{Q=[];for(const C of i.list())Q.push(ur(C,V,te));return Q.push(I),Nt(Q)}).then(()=>{Q=tc(Se,"beforeRouteUpdate",V,te);for(const C of Se)C.updateGuards.forEach(O=>{Q.push(ur(O,V,te))});return Q.push(I),Nt(Q)}).then(()=>{Q=[];for(const C of E)if(C.beforeEnter)if(fn(C.beforeEnter))for(const O of C.beforeEnter)Q.push(ur(O,V,te));else Q.push(ur(C.beforeEnter,V,te));return Q.push(I),Nt(Q)}).then(()=>(V.matched.forEach(C=>C.enterCallbacks={}),Q=tc(E,"beforeRouteEnter",V,te,y),Q.push(I),Nt(Q))).then(()=>{Q=[];for(const C of o.list())Q.push(ur(C,V,te));return Q.push(I),Nt(Q)}).catch(C=>Mn(C,8)?C:Promise.reject(C))}function R(V,te,Q){l.list().forEach(re=>y(()=>re(V,te,Q)))}function b(V,te,Q,re,Se){const E=q(V,te);if(E)return E;const I=te===ar,C=vs?history.state:{};Q&&(re||I?s.replace(V.fullPath,xe({scroll:I&&C&&C.scroll},Se)):s.push(V.fullPath,Se)),c.value=V,Gt(V,te,Q,I),nn()}let w;function De(){w||(w=s.listen((V,te,Q)=>{if(!_n.listening)return;const re=U(V),Se=pe(re);if(Se){S(xe(Se,{replace:!0,force:!0}),re).catch(Pi);return}u=re;const E=c.value;vs&&g1(Vf(E.fullPath,Q.delta),Za()),A(re,E).catch(I=>Mn(I,12)?I:Mn(I,2)?(S(xe(B(I.to),{force:!0}),re).then(C=>{Mn(C,20)&&!Q.delta&&Q.type===Ki.pop&&s.go(-1,!1)}).catch(Pi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(I,re,E))).then(I=>{I=I||b(re,E,!1),I&&(Q.delta&&!Mn(I,8)?s.go(-Q.delta,!1):Q.type===Ki.pop&&Mn(I,20)&&s.go(-1,!1)),R(re,E,I)}).catch(Pi)}))}let tt=di(),Be=di(),be;function ye(V,te,Q){nn(V);const re=Be.list();return re.length?re.forEach(Se=>Se(V,te,Q)):console.error(V),Promise.reject(V)}function Ft(){return be&&c.value!==ar?Promise.resolve():new Promise((V,te)=>{tt.add([V,te])})}function nn(V){return be||(be=!V,De(),tt.list().forEach(([te,Q])=>V?Q(V):te()),tt.reset()),V}function Gt(V,te,Q,re){const{scrollBehavior:Se}=t;if(!vs||!Se)return Promise.resolve();const E=!Q&&_1(Vf(V.fullPath,0))||(re||!Q)&&history.state&&history.state.scroll||null;return Nm().then(()=>Se(V,te,E)).then(I=>I&&m1(I)).catch(I=>ye(I,V,te))}const je=V=>s.go(V);let qe;const er=new Set,_n={currentRoute:c,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:U,options:t,push:W,replace:de,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Be.add,isReady:Ft,install(V){const te=this;V.component("RouterLink",B1),V.component("RouterView",G1),V.config.globalProperties.$router=te,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Cs(c)}),vs&&!qe&&c.value===ar&&(qe=!0,W(s.location).catch(Se=>{}));const Q={};for(const Se in ar)Object.defineProperty(Q,Se,{get:()=>c.value[Se],enumerable:!0});V.provide(el,te),V.provide(R_,Sm(Q)),V.provide(Vc,c);const re=V.unmount;er.add(V),V.unmount=function(){er.delete(V),er.size<1&&(u=ar,w&&w(),w=null,c.value=ar,qe=!1,be=!1),re()}}};function Nt(V){return V.reduce((te,Q)=>te.then(()=>y(Q)),Promise.resolve())}return _n}function W1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ms(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ms(u,c))||s.push(c))}return[n,r,s]}function Nu(){return In(el)}var K1="firebase",Q1="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(K1,Q1,"app");const S_="@firebase/installations",Du="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1e4,P_=`w:${Du}`,x_="FIS_v2",Y1="https://firebaseinstallations.googleapis.com/v1",J1=3600*1e3,X1="installations",Z1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new is(X1,Z1,eR);function k_(t){return t instanceof mn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_({projectId:t}){return`${Y1}/projects/${t}/installations`}function D_(t){return{token:t.token,requestStatus:2,expiresIn:nR(t.expiresIn),creationTime:Date.now()}}async function V_(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function O_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tR(t,{refreshToken:e}){const n=O_(t);return n.append("Authorization",rR(e)),n}async function M_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nR(t){return Number(t.replace("s","000"))}function rR(t){return`${x_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=N_(t),s=O_(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:x_,appId:t.appId,sdkVersion:P_},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await M_(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:D_(u.authToken)}}else throw await V_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=/^[cdef][\w-]{21}$/,Oc="";function aR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lR(t);return oR.test(n)?n:Oc}catch{return Oc}}function lR(t){return iR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Map;function U_(t,e){const n=tl(t);$_(n,e),cR(n,e)}function $_(t,e){const n=F_.get(t);if(n)for(const r of n)r(e)}function cR(t,e){const n=uR();n&&n.postMessage({key:t,fid:e}),hR()}let zr=null;function uR(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{$_(t.data.key,t.data.fid)}),zr}function hR(){F_.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="firebase-installations-database",fR=1,ts="firebase-installations-store";let nc=null;function Vu(){return nc||(nc=xg(dR,fR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),nc}async function va(t,e){const n=tl(t),s=(await Vu()).transaction(ts,"readwrite"),i=s.objectStore(ts),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&U_(t,e.fid),e}async function B_(t){const e=tl(t),r=(await Vu()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function nl(t,e){const n=tl(t),s=(await Vu()).transaction(ts,"readwrite"),i=s.objectStore(ts),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&U_(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){let e;const n=await nl(t.appConfig,r=>{const s=pR(r),i=mR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Oc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pR(t){const e=t||{fid:aR(),registrationStatus:0};return j_(e)}function mR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_R(t)}:{installationEntry:e}}async function gR(t,e){try{const n=await sR(t,e);return va(t.appConfig,n)}catch(n){throw k_(n)&&n.customData.serverCode===409?await B_(t.appConfig):await va(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _R(t){let e=await Qf(t.appConfig);for(;e.registrationStatus===1;)await L_(100),e=await Qf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ou(t);return r||n}return e}function Qf(t){return nl(t,e=>{if(!e)throw es.create("installation-not-found");return j_(e)})}function j_(t){return yR(t)?{fid:t.fid,registrationStatus:0}:t}function yR(t){return t.registrationStatus===1&&t.registrationTime+C_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR({appConfig:t,heartbeatServiceProvider:e},n){const r=wR(t,n),s=tR(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:P_,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await M_(()=>fetch(r,l));if(c.ok){const u=await c.json();return D_(u)}else throw await V_("Generate Auth Token",c)}function wR(t,{fid:e}){return`${N_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t,e=!1){let n;const r=await nl(t.appConfig,i=>{if(!q_(i))throw es.create("not-registered");const o=i.authToken;if(!e&&IR(o))return i;if(o.requestStatus===1)return n=ER(t,e),i;{if(!navigator.onLine)throw es.create("app-offline");const l=AR(i);return n=TR(t,l),l}});return n?await n:r.authToken}async function ER(t,e){let n=await Yf(t.appConfig);for(;n.authToken.requestStatus===1;)await L_(100),n=await Yf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mu(t,e):r}function Yf(t){return nl(t,e=>{if(!q_(e))throw es.create("not-registered");const n=e.authToken;return RR(n)?{...e,authToken:{requestStatus:0}}:e})}async function TR(t,e){try{const n=await vR(t,e),r={...e,authToken:n};return await va(t.appConfig,r),n}catch(n){if(k_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await B_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await va(t.appConfig,r)}throw n}}function q_(t){return t!==void 0&&t.registrationStatus===2}function IR(t){return t.requestStatus===2&&!bR(t)}function bR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+J1}function AR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function RR(t){return t.requestStatus===1&&t.requestTime+C_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ou(e);return r?r.catch(console.error):Mu(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e=!1){const n=t;return await PR(n),(await Mu(n,e)).token}async function PR(t){const{registrationPromise:e}=await Ou(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){if(!t||!t.options)throw rc("App Configuration");if(!t.name)throw rc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rc(t){return es.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="installations",kR="installations-internal",NR=t=>{const e=t.getProvider("app").getImmediate(),n=xR(e),r=os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DR=t=>{const e=t.getProvider("app").getImmediate(),n=os(e,H_).getImmediate();return{getId:()=>SR(n),getToken:s=>CR(n,s)}};function VR(){xn(new hn(H_,NR,"PUBLIC")),xn(new hn(kR,DR,"PRIVATE"))}VR();Zt(S_,Du);Zt(S_,Du,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="analytics",OR="firebase_id",MR="origin",LR=60*1e3,FR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Qa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ht=new is("analytics","Analytics",UR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){if(!t.startsWith(Lu)){const e=Ht.create("invalid-gtag-resource",{gtagURL:t});return Lt.warn(e.message),""}return t}function G_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function BR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jR(t,e){const n=BR("firebase-js-sdk-policy",{createScriptURL:$R}),r=document.createElement("script"),s=`${Lu}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function qR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HR(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await G_(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Lt.error(l)}t("config",s,i)}async function GR(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await G_(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function zR(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await GR(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await HR(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Lt.error(l)}}return s}function WR(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zR(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function KR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=30,YR=1e3;class JR{constructor(e={},n=YR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const z_=new JR;function XR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZR(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:XR(n)},s=FR.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function eS(t,e=z_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ht.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ht.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new rS;return setTimeout(async()=>{l.abort()},LR),W_({appId:r,apiKey:s,measurementId:i},o,l,e)}async function W_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=z_){const{appId:i,measurementId:o}=t;try{await tS(r,e)}catch(l){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await ZR(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!nS(c)){if(s.deleteThrottleMetadata(i),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?rf(n,s.intervalMillis,QR):rf(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,d),Lt.debug(`Calling attemptFetch again in ${u} millis`),W_(t,d,r,s)}}function tS(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nS(t){if(!(t instanceof mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sS(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(){if(Rg())try{await Sg()}catch(t){return Lt.warn(Ht.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Lt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oS(t,e,n,r,s,i,o){const l=eS(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Lt.error(m)),e.push(l);const c=iS().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([l,c]);KR(i)||jR(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[MR]="firebase",p.update=!0,d!=null&&(p[OR]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.app=e}_delete(){return delete ki[this.app.options.appId],Promise.resolve()}}let ki={},Jf=[];const Xf={};let sc="dataLayer",lS="gtag",Zf,K_,ep=!1;function cS(){const t=[];if(Ag()&&t.push("This is a browser extension environment."),jT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function uS(t,e,n){cS();const r=t.options.appId;if(!r)throw Ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(ki[r]!=null)throw Ht.create("already-exists",{id:r});if(!ep){qR(sc);const{wrappedGtag:i,gtagCore:o}=WR(ki,Jf,Xf,sc,lS);K_=i,Zf=o,ep=!0}return ki[r]=oS(t,Jf,Xf,e,Zf,sc,n),new aS(t)}function hS(t=Eu()){t=We(t);const e=os(t,wa);return e.isInitialized()?e.getImmediate():dS(t)}function dS(t,e={}){const n=os(t,wa);if(n.isInitialized()){const s=n.getImmediate();if(Ir(e,n.getOptions()))return s;throw Ht.create("already-initialized")}return n.initialize({options:e})}function fS(t,e,n,r){t=We(t),sS(K_,ki[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const tp="@firebase/analytics",np="0.10.18";function pS(){xn(new hn(wa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return uS(r,s,n)},"PUBLIC")),xn(new hn("analytics-internal",t,"PRIVATE")),Zt(tp,np),Zt(tp,np,"esm2020");function t(e){try{const n=e.getProvider(wa).getImmediate();return{logEvent:(r,s,i)=>fS(n,r,s,i)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}pS();var rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,Q_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function y(){}y.prototype=v.prototype,S.D=v.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(A,R,b){for(var w=Array(arguments.length-2),De=2;De<arguments.length;De++)w[De-2]=arguments[De];return v.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,v,y){y||(y=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)A[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=S.g[0],y=S.g[1],R=S.g[2];var b=S.g[3],w=v+(b^y&(R^b))+A[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=b+(R^v&(y^R))+A[1]+3905402710&4294967295,b=v+(w<<12&4294967295|w>>>20),w=R+(y^b&(v^y))+A[2]+606105819&4294967295,R=b+(w<<17&4294967295|w>>>15),w=y+(v^R&(b^v))+A[3]+3250441966&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(b^y&(R^b))+A[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(R^v&(y^R))+A[5]+1200080426&4294967295,b=v+(w<<12&4294967295|w>>>20),w=R+(y^b&(v^y))+A[6]+2821735955&4294967295,R=b+(w<<17&4294967295|w>>>15),w=y+(v^R&(b^v))+A[7]+4249261313&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(b^y&(R^b))+A[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(R^v&(y^R))+A[9]+2336552879&4294967295,b=v+(w<<12&4294967295|w>>>20),w=R+(y^b&(v^y))+A[10]+4294925233&4294967295,R=b+(w<<17&4294967295|w>>>15),w=y+(v^R&(b^v))+A[11]+2304563134&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(b^y&(R^b))+A[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=b+(R^v&(y^R))+A[13]+4254626195&4294967295,b=v+(w<<12&4294967295|w>>>20),w=R+(y^b&(v^y))+A[14]+2792965006&4294967295,R=b+(w<<17&4294967295|w>>>15),w=y+(v^R&(b^v))+A[15]+1236535329&4294967295,y=R+(w<<22&4294967295|w>>>10),w=v+(R^b&(y^R))+A[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^R&(v^y))+A[6]+3225465664&4294967295,b=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(b^v))+A[11]+643717713&4294967295,R=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(R^b))+A[0]+3921069994&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^b&(y^R))+A[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^R&(v^y))+A[10]+38016083&4294967295,b=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(b^v))+A[15]+3634488961&4294967295,R=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(R^b))+A[4]+3889429448&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^b&(y^R))+A[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^R&(v^y))+A[14]+3275163606&4294967295,b=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(b^v))+A[3]+4107603335&4294967295,R=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(R^b))+A[8]+1163531501&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(R^b&(y^R))+A[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=b+(y^R&(v^y))+A[2]+4243563512&4294967295,b=v+(w<<9&4294967295|w>>>23),w=R+(v^y&(b^v))+A[7]+1735328473&4294967295,R=b+(w<<14&4294967295|w>>>18),w=y+(b^v&(R^b))+A[12]+2368359562&4294967295,y=R+(w<<20&4294967295|w>>>12),w=v+(y^R^b)+A[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^R)+A[8]+2272392833&4294967295,b=v+(w<<11&4294967295|w>>>21),w=R+(b^v^y)+A[11]+1839030562&4294967295,R=b+(w<<16&4294967295|w>>>16),w=y+(R^b^v)+A[14]+4259657740&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^b)+A[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^R)+A[4]+1272893353&4294967295,b=v+(w<<11&4294967295|w>>>21),w=R+(b^v^y)+A[7]+4139469664&4294967295,R=b+(w<<16&4294967295|w>>>16),w=y+(R^b^v)+A[10]+3200236656&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^b)+A[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^R)+A[0]+3936430074&4294967295,b=v+(w<<11&4294967295|w>>>21),w=R+(b^v^y)+A[3]+3572445317&4294967295,R=b+(w<<16&4294967295|w>>>16),w=y+(R^b^v)+A[6]+76029189&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(y^R^b)+A[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=b+(v^y^R)+A[12]+3873151461&4294967295,b=v+(w<<11&4294967295|w>>>21),w=R+(b^v^y)+A[15]+530742520&4294967295,R=b+(w<<16&4294967295|w>>>16),w=y+(R^b^v)+A[2]+3299628645&4294967295,y=R+(w<<23&4294967295|w>>>9),w=v+(R^(y|~b))+A[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~R))+A[7]+1126891415&4294967295,b=v+(w<<10&4294967295|w>>>22),w=R+(v^(b|~y))+A[14]+2878612391&4294967295,R=b+(w<<15&4294967295|w>>>17),w=y+(b^(R|~v))+A[5]+4237533241&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~b))+A[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~R))+A[3]+2399980690&4294967295,b=v+(w<<10&4294967295|w>>>22),w=R+(v^(b|~y))+A[10]+4293915773&4294967295,R=b+(w<<15&4294967295|w>>>17),w=y+(b^(R|~v))+A[1]+2240044497&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~b))+A[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~R))+A[15]+4264355552&4294967295,b=v+(w<<10&4294967295|w>>>22),w=R+(v^(b|~y))+A[6]+2734768916&4294967295,R=b+(w<<15&4294967295|w>>>17),w=y+(b^(R|~v))+A[13]+1309151649&4294967295,y=R+(w<<21&4294967295|w>>>11),w=v+(R^(y|~b))+A[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=b+(y^(v|~R))+A[11]+3174756917&4294967295,b=v+(w<<10&4294967295|w>>>22),w=R+(v^(b|~y))+A[2]+718787259&4294967295,R=b+(w<<15&4294967295|w>>>17),w=y+(b^(R|~v))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+R&4294967295,S.g[3]=S.g[3]+b&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var y=v-this.blockSize,A=this.B,R=this.h,b=0;b<v;){if(R==0)for(;b<=y;)s(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<v;)if(A[R++]=S.charCodeAt(b++),R==this.blockSize){s(this,A),R=0;break}}else for(;b<v;)if(A[R++]=S[b++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var y=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=y&255,y/=256;for(this.u(S),S=Array(16),v=y=0;4>v;++v)for(var A=0;32>A;A+=8)S[y++]=this.g[v]>>>A&255;return S};function i(S,v){var y=l;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=v(S)}function o(S,v){this.h=v;for(var y=[],A=!0,R=S.length-1;0<=R;R--){var b=S[R]|0;A&&b==v||(y[R]=b,A=!1)}this.g=y}var l={};function c(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return k(u(-S));for(var v=[],y=1,A=0;S>=y;A++)v[A]=S/y|0,y*=4294967296;return new o(v,0)}function d(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return k(d(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),A=p,R=0;R<S.length;R+=8){var b=Math.min(8,S.length-R),w=parseInt(S.substring(R,R+b),v);8>b?(b=u(Math.pow(v,b)),A=A.j(b).add(u(w))):(A=A.j(y),A=A.add(u(w)))}return A}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var S=0,v=1,y=0;y<this.g.length;y++){var A=this.i(y);S+=(0<=A?A:4294967296+A)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(N(this))return"-"+k(this).toString(S);for(var v=u(Math.pow(S,6)),y=this,A="";;){var R=W(y,v).g;y=U(y,R.j(v));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=R,P(y))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function N(S){return S.h==-1}t.l=function(S){return S=U(this,S),N(S)?-1:P(S)?0:1};function k(S){for(var v=S.g.length,y=[],A=0;A<v;A++)y[A]=~S.g[A];return new o(y,~S.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],A=0,R=0;R<=v;R++){var b=A+(this.i(R)&65535)+(S.i(R)&65535),w=(b>>>16)+(this.i(R)>>>16)+(S.i(R)>>>16);A=w>>>16,b&=65535,w&=65535,y[R]=w<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(S,v){return S.add(k(v))}t.j=function(S){if(P(this)||P(S))return p;if(N(this))return N(S)?k(this).j(k(S)):k(k(this).j(S));if(N(S))return k(this.j(k(S)));if(0>this.l(_)&&0>S.l(_))return u(this.m()*S.m());for(var v=this.g.length+S.g.length,y=[],A=0;A<2*v;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<S.g.length;R++){var b=this.i(A)>>>16,w=this.i(A)&65535,De=S.i(R)>>>16,tt=S.i(R)&65535;y[2*A+2*R]+=w*tt,B(y,2*A+2*R),y[2*A+2*R+1]+=b*tt,B(y,2*A+2*R+1),y[2*A+2*R+1]+=w*De,B(y,2*A+2*R+1),y[2*A+2*R+2]+=b*De,B(y,2*A+2*R+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function B(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function q(S,v){this.g=S,this.h=v}function W(S,v){if(P(v))throw Error("division by zero");if(P(S))return new q(p,p);if(N(S))return v=W(k(S),v),new q(k(v.g),k(v.h));if(N(v))return v=W(S,k(v)),new q(k(v.g),v.h);if(30<S.g.length){if(N(S)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,A=v;0>=A.l(S);)y=de(y),A=de(A);var R=pe(y,1),b=pe(A,1);for(A=pe(A,2),y=pe(y,2);!P(A);){var w=b.add(A);0>=w.l(S)&&(R=R.add(y),b=w),A=pe(A,1),y=pe(y,1)}return v=U(S,R.j(v)),new q(R,v)}for(R=p;0<=S.l(v);){for(y=Math.max(1,Math.floor(S.m()/v.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=u(y),w=b.j(v);N(w)||0<w.l(S);)y-=A,b=u(y),w=b.j(v);P(b)&&(b=m),R=R.add(b),S=U(S,w)}return new q(R,S)}t.A=function(S){return W(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)&S.i(A);return new o(y,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)|S.i(A);return new o(y,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)^S.i(A);return new o(y,this.h^S.h)};function de(S){for(var v=S.g.length+1,y=[],A=0;A<v;A++)y[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(y,S.h)}function pe(S,v){var y=v>>5;v%=32;for(var A=S.g.length-y,R=[],b=0;b<A;b++)R[b]=0<v?S.i(b+y)>>>v|S.i(b+y+1)<<32-v:S.i(b+y);return new o(R,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Q_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,vr=o}).apply(typeof rp<"u"?rp:typeof self<"u"?self:typeof window<"u"?window:{});var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y_,gi,J_,Xo,Mc,X_,Z_,ey;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lo=="object"&&Lo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,D){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return h.prototype[x].apply(g,z)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const x=a.length||0,D=g.length||0;a.length=x+D;for(let z=0;z<D;z++)a[x+z]=g[z]}else a.push(g)}}class U{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var de=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function pe(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function S(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Ft;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class De{constructor(){this.h=this.g=null}add(h,f){const g=tt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var tt=new U(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let be,ye=!1,Ft=new De,nn=()=>{const a=l.Promise.resolve(void 0);be=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){b(f)}var h=tt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var er=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a})();function _n(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(de){e:{try{W(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_n.aa.h.call(this)}}P(_n,qe);var Nt={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),te=0;function Q(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++te,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,f,g,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=I(a,h,g,x);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new Q(h,this.src,D,!!g,x),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(g,x,1),D&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function I(a,h,f,g){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return x}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function $(a,h,f,g,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)$(a,h[D],f,g,x);return null}return f=ue(f),a&&a[V]?a.K(h,f,u(g)?!!g.capture:!1,x):M(a,h,f,!1,g,x)}function M(a,h,f,g,x,D){if(!h)throw Error("Invalid event type");var z=u(x)?!!x.capture:!!x,Ve=J(a);if(Ve||(a[C]=Ve=new Se(a)),f=Ve.add(h,f,g,z,D),f.proxy)return f;if(g=K(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)er||(x=z),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return h.call(a.src,a.listener,f)}const h=oe;return a}function G(a,h,f,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],f,g,x);else g=u(g)?!!g.capture:!!g,f=ue(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=I(D,f,g,x),-1<f&&(re(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,f,g,x)),(f=-1<a?h[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(j(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=J(h))?(E(f,a),f.h==0&&(f.src=null,h[C]=null)):re(a)}}}function j(a){return a in O?O[a]:O[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new _n(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&H(a),a=f.call(g,h)}return a}function J(a){return a=a[C],a instanceof Se?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ae(){je.call(this),this.i=new Se(this),this.M=this,this.F=null}P(ae,je),ae.prototype[V]=!0,ae.prototype.removeEventListener=function(a,h,f,g){G(this,a,h,f,g)};function _e(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var x=h;h=new qe(g,a),A(h,x)}if(x=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];x=Ae(z,g,!0,h)&&x}if(z=h.g=a,x=Ae(z,g,!0,h)&&x,x=Ae(z,g,!1,h)&&x,f)for(D=0;D<f.length;D++)z=h.g=f[D],x=Ae(z,g,!1,h)&&x}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)re(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ae(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var Ve=z.listener,ct=z.ha||z.src;z.fa&&E(a.i,z),x=Ve.call(ct,g)!==!1&&x}}return x&&!g.defaultPrevented}function ot(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function at(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,at(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class zt extends je{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(a){je.call(this),this.h=a,this.g={}}P(pt,je);var tr=[];function Js(a){pe(a.g,function(h,f){this.g.hasOwnProperty(f)&&H(h)},a),a.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Js(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=l.JSON.stringify,Wt=l.JSON.parse,go=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hs(){}hs.prototype.h=null;function Rh(a){return a.h||(a.h=a.i())}function Sh(){}var Xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wl(){qe.call(this,"d")}P(wl,qe);function El(){qe.call(this,"c")}P(El,qe);var Or={},Ch=null;function _o(){return Ch=Ch||new ae}Or.La="serverreachability";function Ph(a){qe.call(this,Or.La,a)}P(Ph,qe);function Zs(a){const h=_o();_e(h,new Ph(h))}Or.STAT_EVENT="statevent";function xh(a,h){qe.call(this,Or.STAT_EVENT,a),this.stat=h}P(xh,qe);function At(a){const h=_o();_e(h,new xh(h,a))}Or.Ma="timingevent";function kh(a,h){qe.call(this,Or.Ma,a),this.size=h}P(kh,qe);function ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function Sv(a,h,f,g,x,D){a.info(function(){if(a.g)if(D)for(var z="",Ve=D.split("&"),ct=0;ct<Ve.length;ct++){var Ce=Ve[ct].split("=");if(1<Ce.length){var mt=Ce[0];Ce=Ce[1];var gt=mt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(mt+"="+Ce+"&"):z+(mt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+z})}function Cv(a,h,f,g,x,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+z})}function ds(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xv(a,f)+(g?" "+g:"")})}function Pv(a,h){a.info(function(){return"TIMEOUT: "+h})}ti.prototype.info=function(){};function xv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return lt(f)}catch{return h}}var yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tl;function vo(){}P(vo,hs),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},Tl=new vo;function nr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dh}function Dh(){this.i=null,this.g="",this.h=!1}var Vh={},Il={};function bl(a,h,f){a.L=1,a.v=Io(Nn(h)),a.m=f,a.P=!0,Oh(a,null)}function Oh(a,h){a.F=Date.now(),wo(a),a.A=Nn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Qh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Dh,a.g=fd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new zt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(tr[0]=x.toString()),x=tr);for(var D=0;D<x.length;D++){var z=$(f,x[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Zs(),Sv(a.i,a.u,a.A,a.l,a.R,a.m)}nr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Dn(a)==3?h.j():this.Y(a)},nr.prototype.Y=function(a){try{if(a==this.g)e:{const gt=Dn(this.g);var h=this.g.Ba();const ms=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||nd(this.g)))){this.J||gt!=4||h==7||(h==8||0>=ms?Zs(3):Zs(2)),Al(this);var f=this.g.Z();this.X=f;t:if(Mh(this)){var g=nd(this.g);a="";var x=g.length,D=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),ni(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Cv(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ct=this.g;if((Ve=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ve)){var Ce=Ve;break t}}Ce=null}if(f=Ce)ds(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rl(this,f);else{this.o=!1,this.s=3,At(12),Mr(this),ni(this);break e}}if(this.P){f=!0;let rn;for(;!this.J&&this.C<z.length;)if(rn=kv(this,z),rn==Il){gt==4&&(this.s=4,At(14),f=!1),ds(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Vh){this.s=4,At(15),ds(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ds(this.i,this.l,rn,null),Rl(this,rn);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)ds(this.i,this.l,z,"[Invalid Chunked Response]"),Mr(this),ni(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Nl(mt),mt.M=!0,At(11))}}else ds(this.i,this.l,z,null),Rl(this,z);gt==4&&Mr(this),this.o&&!this.J&&(gt==4?cd(this.j,this):(this.o=!1,wo(this)))}else Kv(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Mr(this),ni(this)}}}catch{}finally{}};function Mh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Il:(f=Number(h.substring(f,g)),isNaN(f)?Vh:(g+=1,g+f>h.length?Il:(h=h.slice(g,g+f),a.C=g+f,h)))}nr.prototype.cancel=function(){this.J=!0,Mr(this)};function wo(a){a.S=Date.now()+a.I,Lh(a,a.I)}function Lh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ei(m(a.ba,a),h)}function Al(a){a.B&&(l.clearTimeout(a.B),a.B=null)}nr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Pv(this.i,this.A),this.L!=2&&(Zs(),At(17)),Mr(this),this.s=2,ni(this)):Lh(this,this.S-a)};function ni(a){a.j.G==0||a.J||cd(a.j,a)}function Mr(a){Al(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Js(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Rl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Sl(f.h,a))){if(!a.K&&Sl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Po(f),So(f);else break e;kl(f),At(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=ei(m(f.Za,f),6e3));if(1>=$h(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Fr(f,11)}else if((a.K||f.g==a)&&Po(f),!B(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let Ce=x[h];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const mt=Ce[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=Ce[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const ms=Ce[5];ms!=null&&typeof ms=="number"&&0<ms&&(g=1.5*ms,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const rn=a.g;if(rn){const ko=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ko){var D=g.h;D.g||ko.indexOf("spdy")==-1&&ko.indexOf("quic")==-1&&ko.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Cl(D,D.h),D.h=null))}if(g.D){const Dl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(g.ya=Dl,Fe(g.I,g.D,Dl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=dd(g,g.J?g.ia:null,g.W),z.K){Bh(g.h,z);var Ve=z,ct=g.L;ct&&(Ve.I=ct),Ve.B&&(Al(Ve),wo(Ve)),g.g=z}else ad(g);0<f.i.length&&Co(f)}else Ce[0]!="stop"&&Ce[0]!="close"||Fr(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Fr(f,7):xl(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Zs(4)}catch{}}var Nv=class{constructor(a,h){this.g=a,this.map=h}};function Fh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $h(a){return a.h?1:a.g?a.g.size:0}function Sl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Cl(a,h){a.g?a.g.add(h):a.h=h}function Bh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fh.prototype.cancel=function(){if(this.i=jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function Dv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Vv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function qh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Vv(a),g=Dv(a),x=g.length,D=0;D<x;D++)h.call(void 0,g[D],f&&f[D],a)}var Hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ov(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var D=a[f].substring(0,g);x=a[f].substring(g+1)}else D=a[f];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Eo(this,a.j),this.o=a.o,this.g=a.g,To(this,a.s),this.l=a.l;var h=a.i,f=new ii;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Gh(this,f),this.m=a.m}else a&&(h=String(a).match(Hh))?(this.h=!1,Eo(this,h[1]||"",!0),this.o=ri(h[2]||""),this.g=ri(h[3]||"",!0),To(this,h[4]),this.l=ri(h[5]||"",!0),Gh(this,h[6]||"",!0),this.m=ri(h[7]||"")):(this.h=!1,this.i=new ii(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(si(h,zh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(si(h,zh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(si(f,f.charAt(0)=="/"?Fv:Lv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",si(f,$v)),a.join("")};function Nn(a){return new Lr(a)}function Eo(a,h,f){a.j=f?ri(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function To(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Gh(a,h,f){h instanceof ii?(a.i=h,Bv(a.i,a.h)):(f||(h=si(h,Uv)),a.i=new ii(h,a.h))}function Fe(a,h,f){a.i.set(h,f)}function Io(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ri(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function si(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Mv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zh=/[#\/\?@]/g,Lv=/[#\?:]/g,Fv=/[#\?]/g,Uv=/[#\?@]/g,$v=/#/g;function ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&Ov(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ii.prototype,t.add=function(a,h){rr(this),this.i=null,a=fs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Wh(a,h){rr(a),h=fs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Kh(a,h){return rr(a),h=fs(a,h),a.g.has(h)}t.forEach=function(a,h){rr(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){rr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let D=0;D<x.length;D++)f.push(h[g])}return f},t.V=function(a){rr(this);let h=[];if(typeof a=="string")Kh(this,a)&&(h=h.concat(this.g.get(fs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return rr(this),this.i=null,a=fs(this,a),Kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Qh(a,h,f){Wh(a,h),0<f.length&&(a.i=null,a.g.set(fs(a,h),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var x=D;z[g]!==""&&(x+="="+encodeURIComponent(String(z[g]))),a.push(x)}}return this.i=a.join("&")};function fs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Bv(a,h){h&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(Wh(this,g),Qh(this,x,f))},a)),a.j=h}function jv(a,h){const f=new ti;if(l.Image){const g=new Image;g.onload=_(sr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(sr,f,"TestLoadImage: error",!1,h,g),g.onabort=_(sr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(sr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function qv(a,h){const f=new ti,g=new AbortController,x=setTimeout(()=>{g.abort(),sr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?sr(f,"TestPingServer: ok",!0,h):sr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),sr(f,"TestPingServer: error",!1,h)})}function sr(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function Hv(){this.g=new go}function Gv(a,h,f){const g=f||"";try{qh(a,function(x,D){let z=x;u(x)&&(z=lt(x)),h.push(g+D+"="+encodeURIComponent(z))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function bo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(bo,hs),bo.prototype.g=function(){return new Ao(this.l,this.j)},bo.prototype.i=(function(a){return function(){return a}})({});function Ao(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ao,ae),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?oi(this):ai(this),this.readyState==3&&Yh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oi(this))},t.Qa=function(a){this.g&&(this.response=a,oi(this))},t.ga=function(){this.g&&oi(this)};function oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ai(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jh(a){let h="";return pe(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Pl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Jh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,h,f))}function Ge(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ge,ae);var zv=/^https?$/i,Wv=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tl.g(),this.v=this.o?Rh(this.o):Rh(Tl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Xh(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Wv,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{td(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Xh(this,D)}};function Xh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Zh(a),Ro(a)}function Zh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ed(this):this.bb())},t.bb=function(){ed(this)};function ed(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Dn(a)!=4||a.Z()!=2)){if(a.u&&Dn(a)==4)ot(a.Ea,0,a);else if(_e(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var x=String(a.D).match(Hh)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!zv.test(x?x.toLowerCase():"")}f=g}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var D=2<Dn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Zh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){td(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=g}catch{}}}function td(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Wt(h)}};function nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kv(a){const h={};a=(a.g&&2<=Dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=R(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}S(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function li(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function rd(a){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=li("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=li("baseRetryDelayMs",5e3,a),this.cb=li("retryDelaySeedMs",1e4,a),this.Wa=li("forwardChannelMaxRetries",2,a),this.wa=li("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fh(a&&a.concurrentRequestLimit),this.Da=new Hv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){At(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=dd(this,null,this.W),Co(this)};function xl(a){if(sd(a),a.G==3){var h=a.U++,f=Nn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",h),Fe(f,"TYPE","terminate"),ci(a,f),h=new nr(a,a.j,h),h.L=2,h.v=Io(Nn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=fd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),wo(h)}hd(a)}function So(a){a.g&&(Nl(a),a.g.cancel(),a.g=null)}function sd(a){So(a),a.u&&(l.clearTimeout(a.u),a.u=null),Po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Co(a){if(!Uh(a.h)&&!a.s){a.s=!0;var h=a.Ga;be||nn(),ye||(be(),ye=!0),Ft.add(h,a),a.B=0}}function Qv(a,h){return $h(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ei(m(a.Ga,a,h),ud(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new nr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=od(this,x,h),f=Nn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),ci(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Jh(D)))+"&"+h:this.m&&Pl(f,this.m,D)),Cl(this.h,x),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",h),Fe(f,"SID","null"),x.T=!0,bl(x,f,null)):bl(x,f,h),this.G=2}}else this.G==3&&(a?id(this,a):this.i.length==0||Uh(this.h)||id(this))};function id(a,h){var f;h?f=h.l:f=a.U++;const g=Nn(a.I);Fe(g,"SID",a.K),Fe(g,"RID",f),Fe(g,"AID",a.T),ci(a,g),a.m&&a.o&&Pl(g,a.m,a.o),f=new nr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=od(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cl(a.h,f),bl(f,g,h)}function ci(a,h){a.H&&pe(a.H,function(f,g){Fe(h,g,f)}),a.l&&qh({},function(f,g){Fe(h,g,f)})}function od(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=x[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Ve=!0;for(let ct=0;ct<f;ct++){let Ce=x[ct].g;const mt=x[ct].map;if(Ce-=D,0>Ce)D=Math.max(0,x[ct].g-100),Ve=!1;else try{Gv(mt,z,"req"+Ce+"_")}catch{g&&g(mt)}}if(Ve){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function ad(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;be||nn(),ye||(be(),ye=!0),Ft.add(h,a),a.v=0}}function kl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ei(m(a.Fa,a),ud(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ld(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ei(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),So(this),ld(this))};function Nl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ld(a){a.g=new nr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Nn(a.qa);Fe(h,"RID","rpc"),Fe(h,"SID",a.K),Fe(h,"AID",a.T),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(h,"TO",a.ja),Fe(h,"TYPE","xmlhttp"),ci(a,h),a.m&&a.o&&Pl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Io(Nn(h)),f.m=null,f.P=!0,Oh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,So(this),kl(this),At(19))};function Po(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cd(a,h){var f=null;if(a.g==h){Po(a),Nl(a),a.g=null;var g=2}else if(Sl(a.h,h))f=h.D,Bh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=_o(),_e(g,new kh(g,f)),Co(a)}else ad(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&Qv(a,h)||g==2&&kl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function ud(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Fr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Eo(g,"https"),Io(g),x?jv(g.toString(),f):qv(g.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(h),hd(a),sd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function hd(a){if(a.G=0,a.ka=[],a.l){const h=jh(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function dd(a,h,f){var g=f instanceof Lr?Nn(f):new Lr(f);if(g.g!="")h&&(g.g=h+"."+g.g),To(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new Lr(null);g&&Eo(D,g),h&&(D.g=h),x&&To(D,x),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&Fe(g,f,h),Fe(g,"VER",a.la),ci(a,g),g}function fd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new bo({eb:f})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pd(){}t=pd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xo(){}xo.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){ae.call(this),this.g=new rd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!B(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ps(this)}P(Ut,ae),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){xl(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=lt(a),a=f);h.i.push(new Nv(h.Ya++,a)),h.G==3&&Co(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,Ut.aa.N.call(this)};function md(a){wl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(md,wl);function gd(){El.call(this),this.status=1}P(gd,El);function ps(a){this.g=a}P(ps,pd),ps.prototype.ua=function(){_e(this.g,"a")},ps.prototype.ta=function(a){_e(this.g,new md(a))},ps.prototype.sa=function(a){_e(this.g,new gd)},ps.prototype.ra=function(){_e(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,ey=function(){return new xo},Z_=function(){return _o()},X_=Or,Mc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,Xo=yo,Nh.COMPLETE="complete",J_=Nh,Sh.EventType=Xs,Xs.OPEN="a",Xs.CLOSE="b",Xs.ERROR="c",Xs.MESSAGE="d",ae.prototype.listen=ae.prototype.K,gi=Sh,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Y_=Ge}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});const sp="@firebase/firestore",ip="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Qa("@firebase/firestore");function ws(){return ns.logLevel}function ne(t,...e){if(ns.logLevel<=we.DEBUG){const n=e.map(Fu);ns.debug(`Firestore (${Ws}): ${t}`,...n)}}function Yn(t,...e){if(ns.logLevel<=we.ERROR){const n=e.map(Fu);ns.error(`Firestore (${Ws}): ${t}`,...n)}}function Fs(t,...e){if(ns.logLevel<=we.WARN){const n=e.map(Fu);ns.warn(`Firestore (${Ws}): ${t}`,...n)}}function Fu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ty(t,r,n)}function ty(t,e,n){let r=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ty(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class gS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new ny(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class yS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class vS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new yS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class op{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new op(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new op(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ES(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Lc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ic(s)===ic(i)?Te(s,i):ic(s)?1:-1}return Te(t.length,e.length)}const TS=55296,IS=57343;function ic(t){const e=t.charCodeAt(0);return e>=TS&&e<=IS}function Us(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),s=wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Lc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class Le extends wn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Le(n)}static emptyPath(){return new Le([])}}const bS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends wn{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return bS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ap}static keyField(){return new dt([ap])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Le.fromString(e))}static fromName(e){return new ie(Le.fromString(e).popFirst(5))}static empty(){return new ie(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e,n){if(!n)throw new X(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AS(t,e,n,r){if(e===!0&&r===!0)throw new X(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lp(t){if(!ie.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(ie.isDocumentKey(t))throw new X(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function rl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rl(t);throw new X(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function lo(t,e){if(!sy(t))throw new X(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=-62135596800,hp=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hp);return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<up)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hp}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(lo(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-up;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:et("string",Ue._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Ue(0,0))}static max(){return new fe(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=-1;function RS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new br(s,ie.empty(),e)}function SS(t){return new br(t.readTime,t.key,Qi)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(fe.min(),ie.empty(),Qi)}static max(){return new br(fe.max(),ie.empty(),Qi)}}function CS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==PS)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((d=>{o[u]=d,++l,l===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function kS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=-1;function il(t){return t==null}function Ea(t){return t===0&&1/t==-1/0}function NS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="";function DS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dp(e)),e=VS(t.get(n),e);return dp(e)}function VS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case iy:n+="";break;default:n+=i}}return n}function dp(t){return t+iy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pp(this.data.getIterator())}getIteratorFrom(e){return new pp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class pp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new rt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ay("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const OS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=OS.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="server_timestamp",cy="__type__",uy="__previous_value__",hy="__local_write_time__";function Bu(t){return(t?.mapValue?.fields||{})[cy]?.stringValue===ly}function ol(t){const e=t.mapValue.fields[uy];return Bu(e)?ol(e):e}function Yi(t){const e=Ar(t.mapValue.fields[hy].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ta="(default)";class Ji{constructor(e,n){this.projectId=e,this.database=n||Ta}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database===Ta}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="__type__",LS="__max__",Uo={mapValue:{}},fy="__vector__",Ia="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bu(t)?4:US(t)?9007199254740991:FS(t)?10:11:ce(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),l=Ar(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),l=Ke(i.doubleValue);return o===l?Ea(o)===Ea(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fp(o)!==fp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!kn(o[c],l[c])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Xi(t,e){return(t.values||[]).find((n=>kn(n,e)))!==void 0}function $s(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return mp(t.timestampValue,e.timestampValue);case 4:return mp(Yi(t),Yi(e));case 5:return Lc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Rr(i),c=Rr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Te(l[u],c[u]);if(d!==0)return d}return Te(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Te(Ke(i.latitude),Ke(o.latitude));return l!==0?l:Te(Ke(i.longitude),Ke(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return gp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[Ia]?.arrayValue,d=c[Ia]?.arrayValue,p=Te(u?.values?.length||0,d?.values?.length||0);return p!==0?p:gp(u,d)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Lc(c[p],d[p]);if(m!==0)return m;const _=$s(l[c[p]],u[d[p]]);if(_!==0)return _}return Te(c.length,d.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function mp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ar(t),r=Ar(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function gp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$s(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Bs(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Rr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ie.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Zo(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ol(t);return e?16+Zo(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Zo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Dr(r.fields,((i,o)=>{s+=i.length+Zo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function _p(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function ju(t){return!!t&&"arrayValue"in t}function yp(t){return!!t&&"nullValue"in t}function vp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function FS(t){return(t?.mapValue?.fields||{})[dy]?.stringValue===fy}function Ni(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ni(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return{...t}}function US(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===LS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ni(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Mt(Ni(this.value))}}function py(t){const e=[];return Dr(t.fields,((n,r)=>{const s=new dt([n]);if(ea(r)){const i=py(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,fe.min(),fe.min(),fe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,fe.min(),fe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,fe.min(),fe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ep(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function $S(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{}class Ze extends my{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jS(e,n,r):n==="array-contains"?new GS(e,r):n==="in"?new zS(e,r):n==="not-in"?new WS(e,r):n==="array-contains-any"?new KS(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qS(e,r):new HS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($s(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends my{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return gy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gy(t){return t.op==="and"}function _y(t){return BS(t)&&gy(t)}function BS(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function $c(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(_y(t))return t.filters.map((e=>$c(e))).join(",");{const e=t.filters.map((n=>$c(n))).join(",");return`${t.op}(${e})`}}function yy(t,e){return t instanceof Ze?(function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)})(t,e):t instanceof pn?(function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&yy(o,s.filters[l])),!0):!1})(t,e):void ce(19439)}function vy(t){return t instanceof Ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`})(t):t instanceof pn?(function(n){return n.op.toString()+" {"+n.getFilters().map(vy).join(" ,")+"}"})(t):"Filter"}class jS extends Ze{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class qS extends Ze{constructor(e,n){super(e,"in",n),this.keys=wy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class HS extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=wy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function wy(t,e){return(e.arrayValue?.values||[]).map((n=>ie.fromName(n.referenceValue)))}class GS extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ju(n)&&Xi(n.arrayValue,this.value)}}class zS extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class WS extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xi(this.value.arrayValue,n)}}class KS extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Xi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Tp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new QS(t,e,n,r,s,i,o)}function qu(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>$c(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Bs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Bs(r))).join(",")),e.Te=n}return e.Te}function Hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$S(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ep(t.startAt,e.startAt)&&Ep(t.endAt,e.endAt)}function Bc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function YS(t,e,n,r,s,i,o,l){return new co(t,e,n,r,s,i,o,l)}function al(t){return new co(t)}function Ip(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ey(t){return t.collectionGroup!==null}function Di(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(dt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Aa(i,r))})),n.has(dt.keyField().canonicalString())||e.Ie.push(new Aa(dt.keyField(),r))}return e.Ie}function Rn(t){const e=ge(t);return e.Ee||(e.Ee=JS(e,Di(t))),e.Ee}function JS(t,e){if(t.limitType==="F")return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Aa(s.field,i)}));const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jc(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qc(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ll(t,e){return Hu(Rn(t),Rn(e))&&t.limitType===e.limitType}function Ty(t){return`${qu(Rn(t))}|lt:${t.limitType}`}function Es(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>vy(s))).join(", ")}]`),il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Bs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Bs(s))).join(",")),`Target(${r})`})(Rn(t))}; limitType=${t.limitType})`}function cl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=wp(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Di(r),s)||r.endAt&&!(function(o,l,c){const u=wp(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Di(r),s))})(t,e)}function XS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Iy(t){return(e,n)=>{let r=!1;for(const s of Di(t)){const i=ZS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZS(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?$s(c,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return oy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new He(ie.comparator);function Jn(){return eC}const by=new He(ie.comparator);function _i(...t){let e=by;for(const n of t)e=e.insert(n.key,n);return e}function Ay(t){let e=by;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Wr(){return Vi()}function Ry(){return Vi()}function Vi(){return new ls((t=>t.toString()),((t,e)=>t.isEqual(e)))}const tC=new He(ie.comparator),nC=new rt(ie.comparator);function Ie(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new rt(Te);function sC(){return rC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function Sy(t){return{integerValue:""+t}}function iC(t,e){return NS(e)?Sy(e):Gu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this._=void 0}}function oC(t,e,n){return t instanceof Ra?(function(s,i){const o={fields:{[cy]:{stringValue:ly},[hy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bu(i)&&(i=ol(i)),i&&(o.fields[uy]=i),{mapValue:o}})(n,e):t instanceof Zi?Py(t,e):t instanceof eo?xy(t,e):(function(s,i){const o=Cy(s,i),l=bp(o)+bp(s.Ae);return Uc(o)&&Uc(s.Ae)?Sy(l):Gu(s.serializer,l)})(t,e)}function aC(t,e,n){return t instanceof Zi?Py(t,e):t instanceof eo?xy(t,e):n}function Cy(t,e){return t instanceof Sa?(function(r){return Uc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ra extends ul{}class Zi extends ul{constructor(e){super(),this.elements=e}}function Py(t,e){const n=ky(e);for(const r of t.elements)n.some((s=>kn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class eo extends ul{constructor(e){super(),this.elements=e}}function xy(t,e){let n=ky(e);for(const r of t.elements)n=n.filter((s=>!kn(s,r)));return{arrayValue:{values:n}}}class Sa extends ul{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bp(t){return Ke(t.integerValue||t.doubleValue)}function ky(t){return ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Us(r.elements,s.elements,kn):r instanceof Sa&&s instanceof Sa?kn(r.Ae,s.Ae):r instanceof Ra&&s instanceof Ra})(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function Ny(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zu(t.key,cn.none()):new uo(t.key,t.data,cn.none());{const n=t.data,r=Mt.empty();let s=new rt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(t.key,r,new qt(s.toArray()),cn.none())}}function uC(t,e,n){t instanceof uo?(function(s,i,o){const l=s.value.clone(),c=Rp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Vr?(function(s,i,o){if(!ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Rp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dy(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Oi(t,e,n,r){return t instanceof uo?(function(i,o,l,c){if(!ta(i.precondition,o))return l;const u=i.value.clone(),d=Sp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Vr?(function(i,o,l,c){if(!ta(i.precondition,o))return l;const u=Sp(i.fieldTransforms,c,o),d=o.data;return d.setAll(Dy(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function hC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cy(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Ap(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Us(r,s,((i,o)=>lC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Rp(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,aC(o,l,n[s]))}return r}function Sp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oC(i,o,e))}return r}class zu extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dC extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ry();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ny(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,((n,r)=>Ap(n,r)))&&Us(this.baseMutations,e.baseMutations,((n,r)=>Ap(n,r)))}}class Wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return tC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Re;function gC(t){switch(t){case L.OK:return ce(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function Vy(t){if(t===void 0)return Yn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Je.OK:return L.OK;case Je.CANCELLED:return L.CANCELLED;case Je.UNKNOWN:return L.UNKNOWN;case Je.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Je.INTERNAL:return L.INTERNAL;case Je.UNAVAILABLE:return L.UNAVAILABLE;case Je.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Je.NOT_FOUND:return L.NOT_FOUND;case Je.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Je.ABORTED:return L.ABORTED;case Je.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Je.DATA_LOSS:return L.DATA_LOSS;default:return ce(39323,{code:t})}}(Re=Je||(Je={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new vr([4294967295,4294967295],0);function Cp(t){const e=_C().encode(t),n=new Q_;return n.update(e),new Uint8Array(n.digest())}function Pp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,r],0),new vr([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=vr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(vr.fromNumber(r)));return s.compare(yC)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cp(e),[r,s]=Pp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Cp(e),[r,s]=Pp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dl(fe.min(),s,new He(Te),Jn(),Ie())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Oy{constructor(e,n){this.targetId=e,this.Ce=n}}class My{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xp{constructor(){this.ve=0,this.Fe=kp(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new ho(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=kp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=$o(),this.He=$o(),this.Ye=new He(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Bc(i))if(r===0){const o=new ie(i.path);this.et(n,o,wt.newNoDocument(o,fe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(c){if(c instanceof ay)return Fs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ku(o,s,i)}catch(c){return Fs(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Bc(l.target)){const c=new ie(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,wt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new dl(e,n,this.Ye,this.je,r);return this.je=Jn(),this.Je=$o(),this.He=$o(),this.Ye=new He(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new xp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new rt(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new rt(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function $o(){return new He(ie.comparator)}function kp(){return new He(ie.comparator)}const wC={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TC={and:"AND",or:"OR"};class IC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hc(t,e){return t.useProto3Json||il(e)?e:{value:e}}function Ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ly(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bC(t,e){return Ca(t,e.toTimestamp())}function Sn(t){return Ne(!!t,49232),fe.fromTimestamp((function(n){const r=Ar(n);return new Ue(r.seconds,r.nanos)})(t))}function Qu(t,e){return Gc(t,e).canonicalString()}function Gc(t,e){const n=(function(s){return new Le(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Fy(t){const e=Le.fromString(t);return Ne(qy(e),10190,{key:e.toString()}),e}function zc(t,e){return Qu(t.databaseId,e.path)}function oc(t,e){const n=Fy(e);if(n.get(1)!==t.databaseId.projectId)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie($y(n))}function Uy(t,e){return Qu(t.databaseId,e)}function AC(t){const e=Fy(t);return e.length===4?Le.emptyPath():$y(e)}function Wc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $y(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Np(t,e,n){return{name:zc(t,e),fields:n.value.mapValue.fields}}function RC(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string",58123),ft.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ft.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const d=u.code===void 0?L.UNKNOWN:Vy(u.code);return new X(d,u.message||"")})(o);n=new My(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(t,r.document.name),i=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):fe.min(),l=new Mt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new na(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(t,r.document),i=r.readTime?Sn(r.readTime):fe.min(),o=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new na([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(t,r.document),i=r.removedTargetIds||[];n=new na([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mC(s,i),l=r.targetId;n=new Oy(l,o)}}return n}function SC(t,e){let n;if(e instanceof uo)n={update:Np(t,e.key,e.value)};else if(e instanceof zu)n={delete:zc(t,e.key)};else if(e instanceof Vr)n={update:Np(t,e.key,e.data),updateMask:MC(e.fieldMask)};else{if(!(e instanceof dC))return ce(16599,{Vt:e.type});n={verify:zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:bC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function CC(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Sn(s.updateTime):Sn(i);return o.isEqual(fe.min())&&(o=Sn(i)),new cC(o,s.transformResults||[])})(n,e)))):[]}function PC(t,e){return{documents:[Uy(t,e.path)]}}function xC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uy(t,s);const i=(function(u){if(u.length!==0)return jy(pn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:Ts(m.field),direction:DC(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Hc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function kC(t){let e=AC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const m=By(p);return m instanceof pn&&_y(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(P){return new Aa(Is(P.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,il(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,_=p.values||[];return new ba(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ba(_,m)})(n.endAt)),YS(e,s,o,i,l,"F",c,u)}function NC(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function By(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ze.create(Is(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return pn.create(n.compositeFilter.filters.map((r=>By(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function DC(t){return wC[t]}function VC(t){return EC[t]}function OC(t){return TC[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return dt.fromServerFormat(t.fieldPath)}function jy(t){return t instanceof Ze?(function(n){if(n.op==="=="){if(vp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NAN"}};if(yp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NAN"}};if(yp(n.value))return{unaryFilter:{field:Ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(n.field),op:VC(n.op),value:n.value}}})(t):t instanceof pn?(function(n){const r=n.getFilters().map((s=>jy(s)));return r.length===1?r[0]:{compositeFilter:{op:OC(n.op),filters:r}}})(t):ce(54877,{filter:t})}function MC(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function qy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.yt=e}}function FC(t){const e=kC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.Cn=new $C}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(br.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class $C{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hy=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(Hy,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new js(0)}static cr(){return new js(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="LruGarbageCollector",BC=1048576;function Op([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class jC{constructor(e){this.Ir=e,this.buffer=new rt(Op),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Op(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Vp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qs(n)?ne(Vp,"Ignoring IndexedDB error during garbage collection: ",n):await Ks(n)}await this.Vr(3e5)}))}}class HC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(sl.ce);const r=new jC(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Dp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dp):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ws()<=we.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function GC(t,e){return new HC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.changes=new ls((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Oi(r.mutation,s,qt.empty(),Ue.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Wr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=_i();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Jn();const o=Vi(),l=(function(){return Vi()})();return n.forEach(((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Vr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Oi(d.mutation,u,d.mutation.getFieldMask(),Ue.now())):o.set(u.key,qt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>l.set(u,new WC(d,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new He(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||qt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Ry();d.forEach((m=>{if(!i.has(m)){const _=Ny(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ey(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Wr());let l=Qi,c=i;return o.next((u=>F.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((d=>({batchId:l,changes:Ay(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next((r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next((l=>F.forEach(l,(c=>{const u=(function(p,m){return new co(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,wt.newInvalidDocument(d)))}));let l=_i();return o.forEach(((c,u)=>{const d=i.get(c);d!==void 0&&Oi(d.mutation,u,qt.empty(),Ue.now()),cl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Sn(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:FC(s.bundledQuery),readTime:Sn(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.overlays=new He(ie.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Wr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pC(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Qr=new rt(st.$r),this.Ur=new rt(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ie(new Le([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new Le([])),r=new st(n,e),s=new st(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new rt(st.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?$u:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Te);return n.forEach((s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new st(new ie(i),0);let l=new rt(Te);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ne(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new st(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.ri=e,this.docs=(function(){return new He(ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new ie(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CS(SS(d),r)<=0||(s.has(d.key)||cl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new eP(this)}getSize(e){return F.resolve(this.size)}}class eP extends zC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.persistence=e,this.si=new ls((n=>qu(n)),Hu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.oi=0,this._i=new Yu,this.targetCount=0,this.ai=js.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new js(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.ui={},this.overlays={},this.ci=new sl(0),this.li=!1,this.li=!0,this.hi=new JC,this.referenceDelegate=e(this),this.Pi=new tP(this),this.indexManager=new UC,this.remoteDocumentCache=(function(s){return new ZC(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new LC(n),this.Ii=new QC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new XC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new nP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class nP extends xS{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Ri=new Yu,this.Vi=null}static mi(e){return new Ju(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=ie.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,fe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pa{constructor(e,n){this.persistence=e,this.pi=new ls((r=>DS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=GC(this,n)}static mi(e,n){return new Pa(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,fe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zo(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return BT()?8:kS(bt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new rP;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(ws()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ws()<=we.DEBUG&&ne("QueryEngine","Query:",Es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ws()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):F.resolve())}ys(e,n){if(Ip(n))return F.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=qc(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,qc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return Ip(n)||s.isEqual(fe.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(ws()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Es(n)),this.vs(e,o,n,RS(s,Qi)).next((l=>l)))}))}Ds(e,n){let r=new rt(Iy(e));return n.forEach(((s,i)=>{cl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ws()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Es(n)),this.ps.getDocumentsMatchingQuery(e,n,br.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="LocalStore",iP=3e8;class oP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(Te),this.xs=new ls((i=>qu(i)),Hu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function aP(t,e,n,r){return new oP(t,e,n,r)}async function zy(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function lP(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((P=>{_=_.next((()=>d.getEntry(c,P))).next((N=>{const k=u.docVersions.get(P);Ne(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Wy(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function cP(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),(function(N,k,U){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=iP?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,_,d)&&l.push(n.Pi.updateTargetData(i,_))}));let c=Jn(),u=Ie();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(uP(i,o,e.documentUpdates).next((d=>{c=d.ks,u=d.qs}))),!r.isEqual(fe.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return F.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function uP(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Jn();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne(Zu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function hP(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=$u),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function dP(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Kc(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Qs(o))throw o;ne(Zu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Mp(t,e,n){const r=ge(t);let s=fe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,d){const p=ge(c),m=p.xs.get(d);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)})(r,o,Rn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ie()))).next((l=>(fP(r,XS(e),l),{documents:l,Qs:i})))))}function fP(t,e,n){let r=t.Os.get(e)||fe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Lp{constructor(){this.activeTargetIds=sC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pP{constructor(){this.Mo=new Lp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="ConnectivityMonitor";class Up{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(Fp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(Fp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=null;function Qc(){return Bo===null?Bo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="RestConnection",gP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _P{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ta?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Qc(),l=this.zo(e,n.toUriEncodedString());ne(ac,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),d=Hs(u);return this.Jo(e,l,c,r,d).then((p=>(ne(ac,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Fs(ac,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ws})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=gP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class vP extends _P{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Qc();return new Promise(((l,c)=>{const u=new Y_;u.setWithCredentials(!0),u.listenOnce(J_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Xo.NO_ERROR:const p=u.getResponseJson();ne(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Xo.TIMEOUT:ne(_t,`RPC '${e}' ${o} timed out`),c(new X(L.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const m=u.getStatus();if(ne(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_?.error;if(P&&P.status&&P.message){const N=(function(U){const B=U.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN})(P.status);c(new X(N,P.message))}else c(new X(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(L.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(_t,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);ne(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)}))}T_(e,n,r){const s=Qc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ey(),l=Z_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(_t,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let m=!1,_=!1;const P=new yP({Yo:k=>{_?ne(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(ne(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(_t,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),N=(k,U,B)=>{k.listen(U,(q=>{try{B(q)}catch(W){setTimeout((()=>{throw W}),0)}}))};return N(p,gi.EventType.OPEN,(()=>{_||(ne(_t,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),N(p,gi.EventType.CLOSE,(()=>{_||(_=!0,ne(_t,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),N(p,gi.EventType.ERROR,(k=>{_||(_=!0,Fs(_t,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),P.a_(new X(L.UNAVAILABLE,"The operation could not be completed")))})),N(p,gi.EventType.MESSAGE,(k=>{if(!_){const U=k.data[0];Ne(!!U,16349);const B=U,q=B?.error||B[0]?.error;if(q){ne(_t,`RPC '${e}' stream ${s} received error:`,q);const W=q.status;let de=(function(v){const y=Je[v];if(y!==void 0)return Vy(y)})(W),pe=q.message;de===void 0&&(de=L.INTERNAL,pe="Unknown error status: "+W+" with message "+q.message),_=!0,P.a_(new X(de,pe)),p.close()}else ne(_t,`RPC '${e}' stream ${s} received:`,U),P.u_(U)}})),N(l,X_.STAT_EVENT,(k=>{k.stat===Mc.PROXY?ne(_t,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Mc.NOPROXY&&ne(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return new IC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="PersistentStream";class Qy{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ky(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne($p,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ne($p,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wP extends Qy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=RC(this.serializer,e),r=(function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Sn(o.readTime):fe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Wc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Bc(c)?{documents:PC(i,c)}:{query:xC(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ly(i,o.resumeToken);const u=Hc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ca(i,o.snapshotVersion.toTimestamp());const u=Hc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=NC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Wc(this.serializer),n.removeTarget=e,this.q_(n)}}class EP extends Qy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=CC(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Wc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>SC(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{}class IP extends TP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Gc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(L.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Gc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):ne("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="RemoteStore";class AP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{cs(this)&&(ne(rs,"Restarting streams for network reachability change."),await(async function(c){const u=ge(c);u.Ea.add(4),await fo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await pl(u)})(this))}))})),this.Ra=new bP(r,s)}}async function pl(t){if(cs(t))for(const e of t.da)await e(!0)}async function fo(t){for(const e of t.da)await e(!1)}function Yy(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),rh(n)?nh(n):Ys(n).O_()&&th(n,e))}function eh(t,e){const n=ge(t),r=Ys(n);n.Ia.delete(e),r.O_()&&Jy(n,e),n.Ia.size===0&&(r.O_()?r.L_():cs(n)&&n.Ra.set("Unknown"))}function th(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).Y_(e)}function Jy(t,e){t.Va.Ue(e),Ys(t).Z_(e)}function nh(t){t.Va=new vC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.Ra.ua()}function rh(t){return cs(t)&&!Ys(t).x_()&&t.Ia.size>0}function cs(t){return ge(t).Ea.size===0}function Xy(t){t.Va=void 0}async function RP(t){t.Ra.set("Online")}async function SP(t){t.Ia.forEach(((e,n)=>{th(t,e)}))}async function CP(t,e){Xy(t),rh(t)?(t.Ra.ha(e),nh(t)):t.Ra.set("Unknown")}async function PP(t,e,n){if(t.Ra.set("Online"),e instanceof My&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){ne(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xa(t,r)}else if(e instanceof na?t.Va.Ze(e):e instanceof Oy?t.Va.st(e):t.Va.tt(e),!n.isEqual(fe.min()))try{const r=await Wy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),Jy(i,c);const p=new mr(d.target,c,u,d.sequenceNumber);th(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ne(rs,"Failed to raise snapshot:",r),await xa(t,r)}}async function xa(t,e,n){if(!Qs(e))throw e;t.Ea.add(1),await fo(t),t.Ra.set("Offline"),n||(n=()=>Wy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ne(rs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pl(t)}))}function Zy(t,e){return e().catch((n=>xa(t,n,e)))}async function ml(t){const e=ge(t),n=Cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$u;for(;xP(e);)try{const s=await hP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,kP(e,s)}catch(s){await xa(e,s)}ev(e)&&tv(e)}function xP(t){return cs(t)&&t.Ta.length<10}function kP(t,e){t.Ta.push(e);const n=Cr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ev(t){return cs(t)&&!Cr(t).x_()&&t.Ta.length>0}function tv(t){Cr(t).start()}async function NP(t){Cr(t).ra()}async function DP(t){const e=Cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function VP(t,e,n){const r=t.Ta.shift(),s=Wu.from(r,e,n);await Zy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ml(t)}async function OP(t,e){e&&Cr(t).X_&&await(async function(r,s){if((function(o){return gC(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();Cr(r).B_(),await Zy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ml(r)}})(t,e),ev(t)&&tv(t)}async function Bp(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ne(rs,"RemoteStore received new credentials");const r=cs(n);n.Ea.add(3),await fo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pl(n)}async function MP(t,e){const n=ge(t);e?(n.Ea.delete(2),await pl(n)):e||(n.Ea.add(2),await fo(n),n.Ra.set("Unknown"))}function Ys(t){return t.ma||(t.ma=(function(n,r,s){const i=ge(n);return i.sa(),new wP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:RP.bind(null,t),t_:SP.bind(null,t),r_:CP.bind(null,t),H_:PP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),rh(t)?nh(t):t.Ra.set("Unknown")):(await t.ma.stop(),Xy(t))}))),t.ma}function Cr(t){return t.fa||(t.fa=(function(n,r,s){const i=ge(n);return i.sa(),new EP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:NP.bind(null,t),r_:OP.bind(null,t),ta:DP.bind(null,t),na:VP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ml(t)):(await t.fa.stop(),t.Ta.length>0&&(ne(rs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new sh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ih(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Qs(t))return new X(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.ga=new He(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class qs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new qs(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class FP{constructor(){this.queries=qp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=qp(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new X(L.ABORTED,"Firestore shutting down"))}}function qp(){return new ls((t=>Ty(t)),ll)}async function oh(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new LP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ih(o,`Initialization of query '${Es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&lh(n)}async function ah(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UP(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&lh(n)}function $P(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function lh(t){t.Ca.forEach((e=>{e.next()}))}var Yc,Hp;(Hp=Yc||(Yc={})).Ma="default",Hp.Cache="cache";class ch{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class BP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Iy(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new jp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),_=cl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?P!==N&&(r.track({type:3,doc:_}),k=!0):this.su(m,_)||(r.track({type:2,doc:_}),k=!0,(c&&this.eu(_,c)>0||u&&this.eu(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(l=!0)),k&&(_?(o=o.add(_),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(_,P){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:k})}};return N(_)-N(P)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new qs(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new rv(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new nv(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const uh="SyncEngine";class jP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qP{constructor(e){this.key=e,this.hu=!1}}class HP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ls((l=>Ty(l)),ll),this.Iu=new Map,this.Eu=new Set,this.du=new He(ie.comparator),this.Au=new Map,this.Ru=new Yu,this.Vu={},this.mu=new Map,this.fu=js.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GP(t,e,n=!0){const r=cv(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await sv(r,e,n,!0),s}async function zP(t,e){const n=cv(t);await sv(n,e,!0,!1)}async function sv(t,e,n,r){const s=await dP(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await WP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Yy(t.remoteStore,s),l}async function WP(t,e,n,r,s){t.pu=(p,m,_)=>(async function(N,k,U,B){let q=k.view.ru(U);q.Cs&&(q=await Mp(N.localStore,k.query,!1).then((({documents:S})=>k.view.ru(S,q))));const W=B&&B.targetChanges.get(k.targetId),de=B&&B.targetMismatches.get(k.targetId)!=null,pe=k.view.applyChanges(q,N.isPrimaryClient,W,de);return zp(N,k.targetId,pe.au),pe.snapshot})(t,p,m,_);const i=await Mp(t.localStore,e,!0),o=new BP(e,i.Qs),l=o.ru(i.documents),c=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);zp(t,n,u.au);const d=new jP(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function KP(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ll(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eh(r.remoteStore,s.targetId),Jc(r,s.targetId)})).catch(Ks)):(Jc(r,s.targetId),await Kc(r.localStore,s.targetId,!0))}async function QP(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eh(n.remoteStore,r.targetId))}async function YP(t,e,n){const r=rx(t);try{const s=await(function(o,l){const c=ge(o),u=Ue.now(),d=l.reduce(((_,P)=>_.add(P.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let P=Jn(),N=Ie();return c.Ns.getEntries(_,d).next((k=>{P=k,P.forEach(((U,B)=>{B.isValidDocument()||(N=N.add(U))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,P))).next((k=>{p=k;const U=[];for(const B of l){const q=hC(B,p.get(B.key).overlayedDocument);q!=null&&U.push(new Vr(B.key,q,py(q.value.mapValue),cn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,U,l)})).next((k=>{m=k;const U=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(_,k.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:Ay(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(Te)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await po(r,s.changes),await ml(r.remoteStore)}catch(s){const i=ih(s,"Failed to persist write");n.reject(i)}}async function iv(t,e){const n=ge(t);try{const r=await cP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ne(o.hu,14607):s.removedDocuments.size>0&&(Ne(o.hu,42227),o.hu=!1))})),await po(n,r,e)}catch(r){await Ks(r)}}function Gp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&lh(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JP(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(ie.comparator);o=o.insert(i,wt.newNoDocument(i,fe.min()));const l=Ie().add(i),c=new dl(fe.min(),new Map,new He(Te),o,l);await iv(r,c),r.du=r.du.remove(i),r.Au.delete(e),hh(r)}else await Kc(r.localStore,e,!1).then((()=>Jc(r,e,n))).catch(Ks)}async function XP(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await lP(n.localStore,e);av(n,r,null),ov(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await Ks(s)}}async function ZP(t,e,n){const r=ge(t);try{const s=await(function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ne(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);av(r,e,n),ov(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await Ks(s)}}function ov(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function av(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||lv(t,r)}))}function lv(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(eh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),hh(t))}function zp(t,e,n){for(const r of n)r instanceof nv?(t.Ru.addReference(r.key,e),ex(t,r)):r instanceof rv?(ne(uh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||lv(t,r.key)):ce(19791,{wu:r})}function ex(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ne(uh,"New document in limbo: "+n),t.Eu.add(r),hh(t))}function hh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new qP(n)),t.du=t.du.insert(n,r),Yy(t.remoteStore,new mr(Rn(al(n.path)),r,"TargetPurposeLimboResolution",sl.ce))}}async function po(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Xu.As(c.targetId,u);i.push(d)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Es,(_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Qs(p))throw p;ne(Zu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Ms.get(m),P=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(P);d.Ms=d.Ms.insert(m,N)}}})(r.localStore,i))}async function tx(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ne(uh,"User change. New user:",e.toKey());const r=await zy(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new X(L.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.Ls)}}function nx(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function cv(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JP.bind(null,e),e.Pu.H_=UP.bind(null,e.eventManager),e.Pu.yu=$P.bind(null,e.eventManager),e}function rx(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZP.bind(null,e),e}class ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return aP(this.persistence,new sP,e.initialUser,this.serializer)}Cu(e){return new Gy(Ju.mi,this.serializer)}Du(e){return new pP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ka.provider={build:()=>new ka};class sx extends ka{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ne(this.persistence.referenceDelegate instanceof Pa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Gy((r=>Pa.mi(r,n)),this.serializer)}}class Xc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tx.bind(null,this.syncEngine),await MP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FP})()}createDatastore(e){const n=fl(e.databaseInfo.databaseId),r=(function(i){return new vP(i)})(e.databaseInfo);return(function(i,o,l,c){return new IP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new AP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Gp(this.syncEngine,n,0)),(function(){return Up.v()?new Up:new mP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,d){const p=new HP(s,i,o,l,c,u);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ge(n);ne(rs,"RemoteStore shutting down."),r.Ea.add(5),await fo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Xc.provider={build:()=>new Xc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class ix{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ne(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ne(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ih(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function cc(t,e){t.asyncQueue.verifyOperationInProgress(),ne(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await zy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Wp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ox(t);ne(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Bp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Bp(e.remoteStore,s))),t._onlineComponents=e}async function ox(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(Pr,"Using user provided OfflineComponentProvider");try{await cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await cc(t,new ka)}}else ne(Pr,"Using default OfflineComponentProvider"),await cc(t,new sx(void 0));return t._offlineComponents}async function uv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(Pr,"Using user provided OnlineComponentProvider"),await Wp(t,t._uninitializedComponentsProvider._online)):(ne(Pr,"Using default OnlineComponentProvider"),await Wp(t,new Xc))),t._onlineComponents}function ax(t){return uv(t).then((e=>e.syncEngine))}async function Na(t){const e=await uv(t),n=e.eventManager;return n.onListen=GP.bind(null,e.syncEngine),n.onUnlisten=KP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QP.bind(null,e.syncEngine),n}function lx(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const d=new dh({next:m=>{d.Nu(),o.enqueueAndForget((()=>ah(i,p)));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new X(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new X(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ch(al(l.path),d,{includeMetadataChanges:!0,qa:!0});return oh(i,p)})(await Na(t),t.asyncQueue,e,n,r))),r.promise}function cx(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const d=new dh({next:m=>{d.Nu(),o.enqueueAndForget((()=>ah(i,p))),m.fromCache&&c.source==="server"?u.reject(new X(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ch(l,d,{includeMetadataChanges:!0,qa:!0});return oh(i,p)})(await Na(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firestore.googleapis.com",Qp=!0;class Yp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dv,this.ssl=Qp}else this.host=e.host,this.ssl=e.ssl??Qp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BC)throw new X(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hv(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new mS;switch(r.type){case"firstParty":return new vS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Kp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Kp.delete(n),r.terminate())})(this),Promise.resolve()}}function ux(t,e,n,r={}){t=en(t,gl);const s=Hs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Ig(`https://${l}`),bg("Firestore",!0)),i.host!==dv&&i.host!==l&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Ir(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=yt.MOCK_USER;else{u=DT(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(p)}t._authCredentials=new gS(new ny(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(lo(n,Qe._jsonSchema))return new Qe(e,r||null,new ie(Le.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:et("string",Qe._jsonSchemaVersion),referencePath:et("string")};class wr extends us{constructor(e,n,r){super(e,n,al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new ie(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function an(t,e,...n){if(t=We(t),ry("collection","path",e),t instanceof gl){const r=Le.fromString(e,...n);return cp(r),new wr(t,null,r)}{if(!(t instanceof Qe||t instanceof wr))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return cp(r),new wr(t.firestore,null,r)}}function Qr(t,e,...n){if(t=We(t),arguments.length===1&&(e=Uu.newId()),ry("doc","path",e),t instanceof gl){const r=Le.fromString(e,...n);return lp(r),new Qe(t,null,new ie(r))}{if(!(t instanceof Qe||t instanceof wr))throw new X(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return lp(r),new Qe(t.firestore,t instanceof wr?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="AsyncQueue";class Xp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ky(this,"async_queue_retry"),this._c=()=>{const r=lc();r&&ne(Jp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Qs(e))throw e;ne(Jp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",Zp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=sh.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Zp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class xr extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xp(e),this._firestoreClient=void 0,await e}}}function fv(t,e){const n=typeof t=="object"?t:Eu(),r=typeof t=="string"?t:Ta,s=os(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kT("firestore");i&&ux(s,...i)}return s}function _l(t){if(t._terminated)throw new X(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hx(t),t._firestoreClient}function hx(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new MS(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hv(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ix(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(ft.fromBase64String(e))}catch(n){throw new X(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(lo(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:et("string",Yt._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(lo(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:et("string",Cn._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(lo(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Pn(e.vectorValues);throw new X(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:et("string",Pn._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=/^__.*__$/;class fx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class pv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ph({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Da(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(mv(this.Ac)&&dx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class px{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fl(e)}Cc(e,n,r,s=!1){return new ph({Ac:e,methodName:n,Dc:r,path:dt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mh(t){const e=t._freezeSettings(),n=fl(t._databaseId);return new px(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mx(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);gh("Data must be an object, but it was:",o,r);const l=gv(r,o);let c,u;if(i.merge)c=new qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Zc(e,p,n);if(!o.contains(m))throw new X(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);yv(d,m)||d.push(m)}c=new qt(d),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new fx(new Mt(l),c,u)}class vl extends fh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vl}}function gx(t,e,n,r){const s=t.Cc(1,e,n);gh("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Dr(r,((c,u)=>{const d=_h(e,c,n);u=We(u);const p=s.yc(d);if(u instanceof vl)i.push(d);else{const m=mo(u,p);m!=null&&(i.push(d),o.set(d,m))}}));const l=new qt(i);return new pv(o,l,s.fieldTransforms)}function _x(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[Zc(e,r,n)],c=[s];if(i.length%2!=0)throw new X(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Zc(e,i[m])),c.push(i[m+1]);const u=[],d=Mt.empty();for(let m=l.length-1;m>=0;--m)if(!yv(u,l[m])){const _=l[m];let P=c[m];P=We(P);const N=o.yc(_);if(P instanceof vl)u.push(_);else{const k=mo(P,N);k!=null&&(u.push(_),d.set(_,k))}}const p=new qt(u);return new pv(d,p,o.fieldTransforms)}function yx(t,e,n,r=!1){return mo(n,t.Cc(r?4:3,e))}function mo(t,e){if(_v(t=We(t)))return gh("Unsupported field value:",e,t),gv(t,e);if(t instanceof fh)return(function(r,s){if(!mv(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=mo(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Ca(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,i)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:Ly(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pn)return(function(o,l){return{mapValue:{fields:{[dy]:{stringValue:fy},[Ia]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Gu(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${rl(r)}`)})(t,e)}function gv(t,e){const n={};return oy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,((r,s)=>{const i=mo(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function _v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Cn||t instanceof Yt||t instanceof Qe||t instanceof fh||t instanceof Pn)}function gh(t,e,n){if(!_v(n)||!sy(n)){const r=rl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Zc(t,e,n){if((e=We(e))instanceof yl)return e._internalPath;if(typeof e=="string")return _h(t,e);throw Da("Field path arguments must be of type string or ",t,!1,void 0,n)}const vx=new RegExp("[~\\*/\\[\\]]");function _h(t,e,n){if(e.search(vx)>=0)throw Da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yl(...e.split("."))._internalPath}catch{throw Da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(L.INVALID_ARGUMENT,l+t+c)}function yv(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wx extends vv{data(){return super.data()}}function wv(t,e){return typeof e=="string"?_h(t,e):e instanceof yl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class Ex extends yh{}function Tv(t,e,...n){let r=[];e instanceof yh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof wh)).length,l=i.filter((c=>c instanceof vh)).length;if(o>1||o>0&&l>0)throw new X(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class vh extends Ex{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=this._parse(e);return Iv(e._query,n),new us(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=mh(e.firestore);return(function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){nm(p,d);const P=[];for(const N of p)P.push(tm(c,i,N));m={arrayValue:{values:P}}}else m=tm(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||nm(p,d),m=yx(l,o,p,d==="in"||d==="not-in");return Ze.create(u,d,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wh extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Iv(o,c),o=jc(o,c)})(e._query,n),new us(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tm(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new X(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ey(e)&&n.indexOf("/")!==-1)throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!ie.isDocumentKey(r))throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _p(t,new ie(r))}if(n instanceof Qe)return _p(t,n._key);throw new X(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rl(n)}.`)}function nm(t,e){if(!Array.isArray(t)||t.length===0)throw new X(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iv(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Tx{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Dr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Ia].arrayValue?.values?.map((r=>Ke(r.doubleValue)));return new Pn(n)}convertGeoPoint(e){return new Cn(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ol(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ne(qy(r),9688,{name:e});const s=new Ji(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yr extends vv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yr._jsonSchema={type:et("string",Yr._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class ra extends Yr{data(e={}){return super.data(e)}}class Jr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new ra(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new ra(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:bx(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){t=en(t,Qe);const e=en(t.firestore,xr);return lx(_l(e),t._key).then((n=>Av(e,t,n)))}Jr._jsonSchemaVersion="firestore/querySnapshot/1.0",Jr._jsonSchema={type:et("string",Jr._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class Eh extends Tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function Mi(t){t=en(t,us);const e=en(t.firestore,xr),n=_l(e),r=new Eh(e);return Ev(t._query),cx(n,t._query).then((s=>new Jr(e,r,t,s)))}function rm(t,e,n,...r){t=en(t,Qe);const s=en(t.firestore,xr),i=mh(s);let o;return o=typeof(e=We(e))=="string"||e instanceof yl?_x(i,"updateDoc",t._key,e,n,r):gx(i,"updateDoc",t._key,e),Ih(s,[o.toMutation(t._key,cn.exists(!0))])}function Th(t){return Ih(en(t.firestore,xr),[new zu(t._key,cn.none())])}function Va(t,e){const n=en(t.firestore,xr),r=Qr(t),s=Ix(t.converter,e);return Ih(n,[mx(mh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then((()=>r))}function bv(t,...e){t=We(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||em(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(em(e[r])){const c=e[r];e[r]=c.next?.bind(c),e[r+1]=c.error?.bind(c),e[r+2]=c.complete?.bind(c)}let i,o,l;if(t instanceof Qe)o=en(t.firestore,xr),l=al(t._key.path),i={next:c=>{e[r]&&e[r](Av(o,t,c))},error:e[r+1],complete:e[r+2]};else{const c=en(t,us);o=en(c.firestore,xr),l=c._query;const u=new Eh(o);i={next:d=>{e[r]&&e[r](new Jr(o,u,c,d))},error:e[r+1],complete:e[r+2]},Ev(t._query)}return(function(u,d,p,m){const _=new dh(m),P=new ch(d,_,p);return u.asyncQueue.enqueueAndForget((async()=>oh(await Na(u),P))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>ah(await Na(u),P)))}})(_l(o),l,s,i)}function Ih(t,e){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>YP(await ax(r),s,i))),i.promise})(_l(t),e)}function Av(t,e,n){const r=n.docs.get(e._key),s=new Eh(t);return new Yr(t,s,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ws=s})(Gs),xn(new hn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xr(new _S(r.getProvider("auth-internal")),new wS(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,d)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Zt(sp,ip,e),Zt(sp,ip,"esm2020")})();const Rx={apiKey:"AIzaSyDnme0_88tmhiJTfl4ugJczTT0J9pffDRE",authDomain:"playhive-67e29.firebaseapp.com",projectId:"playhive-67e29",storageBucket:"playhive-67e29.firebasestorage.app",messagingSenderId:"474414789224",appId:"1:474414789224:web:ebfd38b495cfc4ffab81dd",measurementId:"G-KZ5FSNR0SH"},bh=kg(Rx);hS(bh);const Tt=fv(bh),Ah=zi(bh),Sx={name:"Home",data(){return{games:[]}},computed:{featuredGames(){return this.games.slice(0,4)}},async mounted(){const t=await Mi(an(Tt,"games"));this.games=t.docs.map(e=>({id:e.id,...e.data()}))}},Cx={class:"min-h-screen bg-gray-900 text-white overflow-x-hidden"},Px={class:"relative bg-gradient-to-r from-purple-800 to-indigo-900 py-32"},xx={class:"container mx-auto px-6 text-center"},kx={class:"py-20"},Nx={class:"flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory"},Dx=["src","alt"],Vx={class:"p-4"},Ox={class:"text-lg font-semibold"},Mx={class:"text-gray-400 mt-1"};function Lx(t,e,n,r,s,i){const o=qn("router-link");return Z(),ee("div",Cx,[T("section",Px,[T("div",xx,[e[1]||(e[1]=T("h1",{class:"text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInDown"}," Rent the Best Games Instantly ",-1)),e[2]||(e[2]=T("p",{class:"text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn"}," From GTA to FIFA, experience gaming without buying. ",-1)),ve(o,{to:"/games",class:"bg-indigo-500 hover:bg-indigo-600 transition-transform transform hover:scale-105 px-8 py-3 rounded-lg text-lg font-semibold animate-bounce"},{default:Xe(()=>[...e[0]||(e[0]=[Ee(" Browse More Games ",-1)])]),_:1})])]),T("section",kx,[e[4]||(e[4]=T("h2",{class:"text-3xl font-bold text-center mb-12 animate-fadeInUp"},"Featured Games",-1)),T("div",Nx,[(Z(!0),ee(ze,null,Jt(i.featuredGames,l=>(Z(),ee("div",{key:l.id,class:"min-w-[250px] snap-start bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500"},[T("img",{src:l.image,alt:l.title,class:"w-full h-40 object-cover"},null,8,Dx),T("div",Vx,[T("h3",Ox,Y(l.title),1),T("p",Mx,Y(l.genre||"Action"),1),ve(o,{to:`/rent/${l.id}`},{default:Xe(()=>[...e[3]||(e[3]=[T("button",{class:"mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"}," Rent Now ",-1)])]),_:2},1032,["to"])])]))),128))])]),e[5]||(e[5]=_u('<section class="py-20 bg-gray-800" data-v-ccfbc781><h2 class="text-3xl font-bold text-center mb-12" data-v-ccfbc781>How It Works</h2><div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center" data-v-ccfbc781><div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500" data-v-ccfbc781><h3 class="text-xl font-semibold mb-2" data-v-ccfbc781>Choose Your Game</h3><p class="text-gray-300" data-v-ccfbc781>Browse our wide collection and pick your favorite.</p></div><div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500" data-v-ccfbc781><h3 class="text-xl font-semibold mb-2" data-v-ccfbc781>Rent Online</h3><p class="text-gray-300" data-v-ccfbc781>Pay online and get instant access to the game.</p></div><div class="bg-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500" data-v-ccfbc781><h3 class="text-xl font-semibold mb-2" data-v-ccfbc781>Play &amp; Enjoy</h3><p class="text-gray-300" data-v-ccfbc781>Download or play online and enjoy your gaming session.</p></div></div></section>',1))])}const Fx=gn(Sx,[["render",Lx],["__scopeId","data-v-ccfbc781"]]),Ux={name:"GameDetail",data(){return{tabs:["Description","Reviews","System Requirements"],currentTab:"Description",game:{id:1,name:"GTA V",genre:"Action / Adventure",price:5.99,rating:4.8,releaseDate:"2013-09-17",developer:"Rockstar North",publisher:"Rockstar Games",platform:["PC","PS5","Xbox"],image:"/images/gta.jpg",description:"GTA V is an action-adventure game set in the fictional city of Los Santos...",reviews:[{id:1,user:"Player1",comment:"Amazing game!",rating:5},{id:2,user:"Player2",comment:"Great graphics and gameplay",rating:4.5}],systemRequirements:{OS:"Windows 10",Processor:"Intel i5",Memory:"8 GB RAM",Graphics:"NVIDIA GTX 970",Storage:"72 GB available space"},relatedGames:[{id:2,name:"Red Dead Redemption 2",image:"/images/rdr2.jpg"},{id:3,name:"Cyberpunk 2077",image:"/images/cyberpunk.jpg"}]}}}},$x={class:"min-h-screen bg-gray-100"},Bx={class:"relative w-full h-96 overflow-hidden"},jx=["src","alt"],qx={class:"absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6"},Hx={class:"text-4xl font-bold text-white mb-2"},Gx={class:"text-gray-300 text-lg"},zx={class:"flex items-center gap-4 mt-3"},Wx={class:"text-yellow-400 font-semibold"},Kx={class:"text-white font-bold text-xl"},Qx={class:"max-w-7xl mx-auto px-6 md:px-12 py-12"},Yx={class:"flex flex-col md:flex-row gap-12"},Jx={class:"flex-1 bg-white rounded-xl shadow-lg p-6"},Xx={class:"flex gap-4 border-b border-gray-200 mb-4"},Zx=["onClick"],ek={class:"mt-4 text-gray-700"},tk={key:0},nk={key:1,class:"space-y-4"},rk={class:"font-semibold"},sk={class:"text-yellow-400"},ik={key:2,class:"space-y-2"},ok={class:"font-semibold"},ak={class:"w-full md:w-1/3 flex flex-col gap-4"},lk={class:"bg-white rounded-xl shadow-lg p-6"},ck={class:"text-gray-700"},uk={class:"bg-white rounded-xl shadow-lg p-6"},hk={class:"grid grid-cols-2 gap-4"},dk=["src","alt"],fk={class:"absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-white font-semibold"};function pk(t,e,n,r,s,i){return Z(),ee("div",$x,[T("div",Bx,[T("img",{src:s.game.image,alt:s.game.name,class:"w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"},null,8,jx),T("div",qx,[T("h1",Hx,Y(s.game.name),1),T("p",Gx,Y(s.game.genre)+" | Released: "+Y(s.game.releaseDate),1),T("div",zx,[T("span",Wx,Y(s.game.rating)+"⭐",1),T("span",Kx,"Rs "+Y(s.game.price.toFixed(2)),1)])])]),T("div",Qx,[T("div",Yx,[T("div",Jx,[T("div",Xx,[(Z(!0),ee(ze,null,Jt(s.tabs,o=>(Z(),ee("button",{key:o,onClick:l=>s.currentTab=o,class:sn(o===s.currentTab?"border-b-2 border-indigo-500 text-indigo-500 font-semibold":"text-gray-500 hover:text-indigo-500")},Y(o),11,Zx))),128))]),T("div",ek,[s.currentTab==="Description"?(Z(),ee("p",tk,Y(s.game.description),1)):nt("",!0),s.currentTab==="Reviews"?(Z(),ee("ul",nk,[(Z(!0),ee(ze,null,Jt(s.game.reviews,o=>(Z(),ee("li",{key:o.id,class:"border p-4 rounded-lg"},[T("p",rk,Y(o.user),1),T("p",null,Y(o.comment),1),T("p",sk,Y(o.rating)+"⭐",1)]))),128))])):nt("",!0),s.currentTab==="System Requirements"?(Z(),ee("ul",ik,[(Z(!0),ee(ze,null,Jt(s.game.systemRequirements,(o,l)=>(Z(),ee("li",{key:l},[T("span",ok,Y(l)+":",1),Ee(" "+Y(o),1)]))),128))])):nt("",!0)]),e[0]||(e[0]=T("div",{class:"mt-6 flex gap-4"},[T("button",{class:"bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105"}," Rent Now "),T("button",{class:"bg-gray-300 hover:bg-gray-400 text-gray-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105"}," Add to Wishlist ")],-1))]),T("div",ak,[T("div",lk,[e[6]||(e[6]=T("h3",{class:"font-semibold text-lg mb-2"},"Game Details",-1)),T("ul",ck,[T("li",null,[e[1]||(e[1]=T("span",{class:"font-semibold"},"Genre:",-1)),Ee(" "+Y(s.game.genre),1)]),T("li",null,[e[2]||(e[2]=T("span",{class:"font-semibold"},"Developer:",-1)),Ee(" "+Y(s.game.developer),1)]),T("li",null,[e[3]||(e[3]=T("span",{class:"font-semibold"},"Publisher:",-1)),Ee(" "+Y(s.game.publisher),1)]),T("li",null,[e[4]||(e[4]=T("span",{class:"font-semibold"},"Release Date:",-1)),Ee(" "+Y(s.game.releaseDate),1)]),T("li",null,[e[5]||(e[5]=T("span",{class:"font-semibold"},"Platform:",-1)),Ee(" "+Y(s.game.platform.join(", ")),1)])])]),T("div",uk,[e[7]||(e[7]=T("h3",{class:"font-semibold text-lg mb-4"},"Related Games",-1)),T("div",hk,[(Z(!0),ee(ze,null,Jt(s.game.relatedGames,o=>(Z(),ee("div",{key:o.id,class:"relative overflow-hidden rounded-lg shadow hover:scale-105 transition-transform"},[T("img",{src:o.image,alt:o.name,class:"w-full h-24 object-cover"},null,8,dk),T("div",fk,Y(o.name),1)]))),128))])])])])])])}const mk=gn(Ux,[["render",pk],["__scopeId","data-v-e969a7fe"]]),gk={name:"Cart",data(){return{cartItems:[],userId:null,loading:!0,unsubscribe:null}},mounted(){Cu(Ah,t=>{if(!t){this.$router.push("/login");return}this.userId=t.uid;const e=an(Tt,"users",this.userId,"cart"),n=Tv(e);this.unsubscribe=bv(n,r=>{this.cartItems=r.docs.map(s=>({id:s.id,...s.data()})),this.loading=!1},r=>{console.error("Error fetching cart:",r),this.loading=!1})})},beforeUnmount(){this.unsubscribe&&this.unsubscribe()},computed:{subtotal(){return this.cartItems.reduce((t,e)=>t+e.price*e.quantity,0)},tax(){return this.subtotal*.1},total(){return this.subtotal+this.tax}},methods:{async increaseQty(t){const e=Qr(Tt,"users",this.userId,"cart",t.id);await rm(e,{quantity:t.quantity+1})},async decreaseQty(t){if(t.quantity>1){const e=Qr(Tt,"users",this.userId,"cart",t.id);await rm(e,{quantity:t.quantity-1})}},async removeItem(t){const e=Qr(Tt,"users",this.userId,"cart",t);await Th(e)},goToCheckout(){this.$router.push("/checkout")}}},_k={class:"min-h-screen bg-gray-100 py-12 px-6 md:px-12"},yk={key:0,class:"text-center py-32 text-gray-500"},vk={key:1,class:"text-center py-32"},wk={key:2,class:"grid md:grid-cols-3 gap-8"},Ek={class:"md:col-span-2 space-y-4"},Tk=["src","alt"],Ik={class:"flex-1"},bk={class:"font-semibold text-lg"},Ak={class:"text-gray-500"},Rk={class:"text-gray-400 text-sm"},Sk={class:"text-indigo-500"},Ck={class:"flex items-center gap-2 mt-2"},Pk=["onClick","disabled"],xk={class:"px-2"},kk=["onClick"],Nk={class:"text-right"},Dk={class:"font-semibold"},Vk=["onClick"],Ok={class:"bg-white p-6 rounded-lg shadow animate-fadeIn"},Mk={class:"flex justify-between mb-2"},Lk={class:"flex justify-between mb-2"},Fk={class:"flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mb-4"},Uk=["disabled"];function $k(t,e,n,r,s,i){const o=qn("router-link");return Z(),ee("div",_k,[e[8]||(e[8]=T("h1",{class:"text-4xl font-bold mb-8 text-gray-900 animate-fadeInDown"},"Your Cart",-1)),s.loading?(Z(),ee("div",yk," Loading your cart... ")):s.cartItems.length===0?(Z(),ee("div",vk,[e[2]||(e[2]=T("p",{class:"text-gray-500 text-xl mb-4"},"Your cart is empty.",-1)),ve(o,{to:"/games",class:"bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition transform hover:scale-105"},{default:Xe(()=>[...e[1]||(e[1]=[Ee(" Browse Games ",-1)])]),_:1})])):(Z(),ee("div",wk,[T("div",Ek,[(Z(!0),ee(ze,null,Jt(s.cartItems,l=>(Z(),ee("div",{key:l.id,class:"bg-white p-4 rounded-lg shadow flex items-center gap-4 hover:shadow-2xl transition-all animate-fadeIn"},[T("img",{src:l.image,alt:l.title,class:"w-24 h-24 object-cover rounded-lg"},null,8,Tk),T("div",Ik,[T("h2",bk,Y(l.title),1),T("p",Ak,Y(l.description),1),T("p",Rk,[e[3]||(e[3]=Ee(" Rental Plan: ",-1)),T("span",Sk,Y(l.rentalPlan),1)]),T("div",Ck,[T("button",{onClick:c=>i.decreaseQty(l),class:"bg-gray-200 hover:bg-gray-300 rounded px-2 transition",disabled:l.quantity<=1}," - ",8,Pk),T("span",xk,Y(l.quantity),1),T("button",{onClick:c=>i.increaseQty(l),class:"bg-gray-200 hover:bg-gray-300 rounded px-2 transition"}," + ",8,kk)])]),T("div",Nk,[T("p",Dk,"Rs "+Y((l.price*l.quantity).toFixed(2)),1),T("button",{onClick:c=>i.removeItem(l.id),class:"text-red-500 hover:text-red-700 mt-2 transition"}," Remove ",8,Vk)])]))),128))]),T("div",Ok,[e[7]||(e[7]=T("h2",{class:"text-2xl font-bold mb-4"},"Order Summary",-1)),T("div",Mk,[e[4]||(e[4]=T("span",null,"Subtotal",-1)),T("span",null,"Rs "+Y(i.subtotal.toFixed(2)),1)]),T("div",Lk,[e[5]||(e[5]=T("span",null,"Tax (10%)",-1)),T("span",null,"Rs "+Y(i.tax.toFixed(2)),1)]),T("div",Fk,[e[6]||(e[6]=T("span",null,"Total",-1)),T("span",null,"Rs "+Y(i.total.toFixed(2)),1)]),T("button",{onClick:e[0]||(e[0]=(...l)=>i.goToCheckout&&i.goToCheckout(...l)),class:"w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg transition transform hover:scale-105",disabled:s.cartItems.length===0}," Proceed to Checkout ",8,Uk)])]))])}const Bk=gn(gk,[["render",$k],["__scopeId","data-v-31b86461"]]),jk={name:"AdminPanel",data(){return{email:"admin@example.com",registeredAdminEmail:"admin@example.com",currentTab:"dashboard",newGame:{title:"",description:"",image:"",price:null,rating:5},games:[],users:[],orders:[],expandedOrderId:null}},computed:{isAdmin(){return this.email===this.registeredAdminEmail}},methods:{tabClass(t){return["block w-full text-left px-4 py-2 rounded hover:bg-gray-800 transition",this.currentTab===t?"bg-gray-700 font-semibold":""]},async fetchGames(){const t=await Mi(an(Tt,"games"));this.games=t.docs.map(e=>({id:e.id,...e.data()}))},async addGame(){const t=await Va(an(Tt,"games"),this.newGame);this.games.push({id:t.id,...this.newGame}),this.newGame={title:"",description:"",image:"",price:null,rating:5}},async removeGame(t){await Th(Qr(Tt,"games",t)),this.games=this.games.filter(e=>e.id!==t)},async fetchOrders(){const t=await Mi(an(Tt,"orders"));this.orders=t.docs.map(e=>({id:e.id,...e.data()}))},async fetchUsers(){const t=await Mi(an(Tt,"users"));this.users=t.docs.map(e=>({id:e.id,...e.data()}))},toggleOrder(t){this.expandedOrderId=this.expandedOrderId===t?null:t}},async mounted(){await this.fetchGames(),await this.fetchUsers(),await this.fetchOrders()}},qk={key:0,class:"flex min-h-screen bg-gray-100"},Hk={class:"w-64 bg-gray-900 text-white flex flex-col"},Gk={class:"flex-1 p-6 space-y-4"},zk={class:"flex-1 p-8"},Wk={key:0,class:"animate-fadeIn"},Kk={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},Qk={class:"bg-white shadow rounded-lg p-6"},Yk={class:"text-3xl font-bold mt-2"},Jk={class:"bg-white shadow rounded-lg p-6"},Xk={class:"text-3xl font-bold mt-2"},Zk={class:"bg-white shadow rounded-lg p-6"},e2={class:"text-3xl font-bold mt-2"},t2={key:1,class:"animate-fadeIn"},n2={class:"bg-white p-6 rounded-lg shadow mb-6"},r2={class:"space-y-2"},s2={class:"font-semibold"},i2={class:"text-sm text-gray-500"},o2=["onClick"],a2={key:2,class:"animate-fadeIn"},l2={class:"mb-4 bg-white p-4 rounded shadow text-lg font-semibold"},c2={class:"space-y-2"},u2={class:"text-gray-500"},h2={key:3,class:"animate-fadeIn"},d2={class:"space-y-2"},f2=["onClick"],p2={class:"flex justify-between items-center"},m2={class:"font-semibold"},g2={class:"text-gray-500"},_2={key:0,class:"mt-3 border-t pt-3 text-sm text-gray-700"},y2={class:"mt-2"},v2={class:"list-disc ml-6"},w2={key:1,class:"flex items-center justify-center min-h-screen bg-gray-100"};function E2(t,e,n,r,s,i){return i.isAdmin?(Z(),ee("div",qk,[T("aside",Hk,[e[10]||(e[10]=T("div",{class:"text-2xl font-bold p-6 border-b border-gray-800"},"PlayHive Admin",-1)),T("nav",Gk,[T("button",{onClick:e[0]||(e[0]=o=>s.currentTab="dashboard"),class:sn(i.tabClass("dashboard"))},"Dashboard",2),T("button",{onClick:e[1]||(e[1]=o=>s.currentTab="games"),class:sn(i.tabClass("games"))},"Manage Games",2),T("button",{onClick:e[2]||(e[2]=o=>s.currentTab="users"),class:sn(i.tabClass("users"))},"Users",2),T("button",{onClick:e[3]||(e[3]=o=>s.currentTab="orders"),class:sn(i.tabClass("orders"))},"Orders",2)])]),T("main",zk,[s.currentTab==="dashboard"?(Z(),ee("div",Wk,[e[14]||(e[14]=T("h1",{class:"text-3xl font-bold mb-6"},"Dashboard",-1)),T("div",Kk,[T("div",Qk,[e[11]||(e[11]=T("h2",{class:"text-xl font-semibold"},"Total Games",-1)),T("p",Yk,Y(s.games.length),1)]),T("div",Jk,[e[12]||(e[12]=T("h2",{class:"text-xl font-semibold"},"Active Users",-1)),T("p",Xk,Y(s.users.length),1)]),T("div",Zk,[e[13]||(e[13]=T("h2",{class:"text-xl font-semibold"},"Pending Orders",-1)),T("p",e2,Y(s.orders.filter(o=>o.status==="Pending").length),1)])])])):nt("",!0),s.currentTab==="games"?(Z(),ee("div",t2,[e[17]||(e[17]=Ee("     ",-1)),e[18]||(e[18]=T("h1",{class:"text-3xl font-bold mb-6"},"Manage Games",-1)),T("div",n2,[e[16]||(e[16]=T("h2",{class:"text-xl font-semibold mb-4"},"Create Game",-1)),T("form",{onSubmit:e[9]||(e[9]=_T((...o)=>i.addGame&&i.addGame(...o),["prevent"])),class:"grid grid-cols-1 md:grid-cols-2 gap-4"},[Pt(T("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.newGame.title=o),type:"text",placeholder:"Game Title",class:"p-2 border rounded",required:""},null,512),[[kt,s.newGame.title]]),Pt(T("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>s.newGame.image=o),type:"url",placeholder:"Image URL",class:"p-2 border rounded",required:""},null,512),[[kt,s.newGame.image]]),Pt(T("textarea",{"onUpdate:modelValue":e[6]||(e[6]=o=>s.newGame.description=o),placeholder:"Description",class:"p-2 border rounded md:col-span-2",required:""},null,512),[[kt,s.newGame.description]]),Pt(T("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>s.newGame.price=o),type:"number",placeholder:"Price (Rs)",class:"p-2 border rounded",required:""},null,512),[[kt,s.newGame.price,void 0,{number:!0}]]),Pt(T("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>s.newGame.rating=o),type:"number",min:"1",max:"5",placeholder:"Rating (1-5)",class:"p-2 border rounded",required:""},null,512),[[kt,s.newGame.rating,void 0,{number:!0}]]),e[15]||(e[15]=T("button",{type:"submit",class:"bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 md:col-span-2"}," Add Game ",-1))],32)]),T("ul",r2,[(Z(!0),ee(ze,null,Jt(s.games,o=>(Z(),ee("li",{key:o.id,class:"flex justify-between items-center bg-white p-4 rounded shadow"},[T("div",null,[T("p",s2,Y(o.title),1),T("p",i2,"Rs"+Y(o.price)+" | ⭐ "+Y(o.rating),1)]),T("button",{onClick:l=>i.removeGame(o.id),class:"text-red-500 hover:text-red-700"},"Delete",8,o2)]))),128))])])):nt("",!0),e[29]||(e[29]=Ee(" < ",-1)),s.currentTab==="users"?(Z(),ee("div",a2,[e[19]||(e[19]=Ee("   ",-1)),e[20]||(e[20]=T("h1",{class:"text-3xl font-bold mb-6"},"Users",-1)),T("div",l2," Total Registered Users: "+Y(s.users.length),1),T("ul",c2,[(Z(!0),ee(ze,null,Jt(s.users,o=>(Z(),ee("li",{key:o.email,class:"flex justify-between bg-white p-4 rounded shadow"},[T("span",null,Y(o.email),1),T("span",u2,Y(o.role||"user"),1)]))),128))])])):nt("",!0),s.currentTab==="orders"?(Z(),ee("div",h2,[e[27]||(e[27]=Ee("   ",-1)),e[28]||(e[28]=T("h1",{class:"text-3xl font-bold mb-6"},"Orders",-1)),T("ul",d2,[(Z(!0),ee(ze,null,Jt(s.orders,o=>(Z(),ee("li",{key:o.id,class:"bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50",onClick:l=>i.toggleOrder(o.id)},[T("div",p2,[T("span",m2,Y(o.billing?.fullName||"Unknown User")+" - Rs"+Y(o.total),1),T("span",g2,Y(o.status),1)]),s.expandedOrderId===o.id?(Z(),ee("div",_2,[T("p",null,[e[21]||(e[21]=T("strong",null,"User Email:",-1)),Ee(" "+Y(o.billing?.email),1)]),T("p",null,[e[22]||(e[22]=T("strong",null,"Address:",-1)),Ee(" "+Y(o.billing?.address),1)]),T("p",null,[e[23]||(e[23]=T("strong",null,"Total:",-1)),Ee(" Rs"+Y(o.total),1)]),T("p",null,[e[24]||(e[24]=T("strong",null,"Status:",-1)),Ee(" "+Y(o.status),1)]),T("p",null,[e[25]||(e[25]=T("strong",null,"Date:",-1)),Ee(" "+Y(o.createdAt?.toDate?o.createdAt.toDate().toLocaleString():"N/A"),1)]),T("div",y2,[e[26]||(e[26]=T("strong",null,"Items:",-1)),T("ul",v2,[(Z(!0),ee(ze,null,Jt(o.items,l=>(Z(),ee("li",{key:l.id},Y(l.title)+" x"+Y(l.quantity)+" - Rs"+Y((l.price*l.quantity).toFixed(2)),1))),128))])])])):nt("",!0)],8,f2))),128))])])):nt("",!0)])])):(Z(),ee("div",w2,[...e[30]||(e[30]=[T("h1",{class:"text-3xl font-bold text-red-500"},"Access Denied",-1)])]))}const T2=gn(jk,[["render",E2]]),I2={name:"About",data(){return{team:[{name:"Aqil Khan",role:"Founder & CEO",image:"/images/team1.jpg",linkedin:"#",twitter:"#"},{name:"Sarah Lee",role:"Lead Developer",image:"/images/team2.jpg",linkedin:"#",twitter:"#"},{name:"John Doe",role:"UI/UX Designer",image:"/images/team3.jpg",linkedin:"#",twitter:"#"},{name:"Emily Clark",role:"Marketing Lead",image:"/images/team4.jpg",linkedin:"#",twitter:"#"}]}}},b2={class:"min-h-screen bg-gray-100 text-gray-900"};function A2(t,e,n,r,s,i){return Z(),ee("div",b2,[...e[0]||(e[0]=[_u('<section class="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-32" data-v-1f8a8495><div class="max-w-7xl mx-auto px-6 text-center" data-v-1f8a8495><h1 class="text-5xl font-extrabold mb-4 animate-fadeInDown" data-v-1f8a8495>About PlayHive</h1><p class="text-xl text-gray-200 animate-fadeIn" data-v-1f8a8495> Your ultimate platform to rent the best games instantly. </p></div></section><section class="max-w-6xl mx-auto px-6 py-20" data-v-1f8a8495><div class="text-center mb-12" data-v-1f8a8495><h2 class="text-3xl font-bold mb-4" data-v-1f8a8495>Our Mission</h2><p class="text-gray-700 text-lg" data-v-1f8a8495> PlayHive is dedicated to bringing gamers closer to the games they love without the hassle of purchasing. Rent, play, and enjoy — anytime, anywhere. </p></div><div class="grid md:grid-cols-3 gap-8 text-center" data-v-1f8a8495><div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" data-v-1f8a8495><h3 class="text-xl font-semibold mb-2" data-v-1f8a8495>Founded</h3><p class="text-gray-600" data-v-1f8a8495>2023</p></div><div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" data-v-1f8a8495><h3 class="text-xl font-semibold mb-2" data-v-1f8a8495>Games Available</h3><p class="text-gray-600" data-v-1f8a8495>100+ titles</p></div><div class="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" data-v-1f8a8495><h3 class="text-xl font-semibold mb-2" data-v-1f8a8495>Happy Gamers</h3><p class="text-gray-600" data-v-1f8a8495>5000+ users</p></div></div></section>',2)])])}const R2=gn(I2,[["render",A2],["__scopeId","data-v-1f8a8495"]]),S2={class:"flex justify-center items-center min-h-screen bg-gray-100"},C2={class:"bg-white p-6 rounded-xl shadow-lg w-96"},P2={class:"text-sm text-gray-600 mb-3"},x2={key:0,class:"text-red-500 mt-2"},k2={__name:"Login",setup(t){const e=St(""),n=St(""),r=Nu(),s=St(""),i=async()=>{const o=zi();if(s.value="",!e.value||!n.value){s.value="Please enter both email and password!";return}try{const l=await i0(o,e.value,n.value),c=await l.user.getIdToken();localStorage.setItem("token",c),localStorage.setItem("user",JSON.stringify({uid:l.user.uid,email:l.user.email,name:l.user.displayName})),r.push("/")}catch(l){console.error(l),s.value=l.message||"Login failed"}};return(o,l)=>{const c=qn("router-link");return Z(),ee("div",S2,[T("div",C2,[l[4]||(l[4]=T("h2",{class:"text-2xl font-bold mb-4"},"Login",-1)),l[5]||(l[5]=T("p",null,"Email",-1)),Pt(T("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"Email",class:"w-full p-2 border rounded mb-3"},null,512),[[kt,e.value]]),l[6]||(l[6]=T("p",null,"password",-1)),Pt(T("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"Password",class:"w-full p-2 border rounded mb-3"},null,512),[[kt,n.value]]),T("p",P2,[l[3]||(l[3]=Ee(" Don’t have an account? ",-1)),ve(c,{to:"/register",class:"text-blue-600 hover:underline"},{default:Xe(()=>[...l[2]||(l[2]=[Ee(" Register ",-1)])]),_:1})]),T("button",{onClick:i,class:"w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"}," Login "),s.value?(Z(),ee("p",x2,Y(s.value),1)):nt("",!0)])])}}},N2={class:"flex justify-center items-center min-h-screen bg-gray-100"},D2={class:"bg-white p-6 rounded-xl shadow-lg w-96"},V2={class:"text-sm text-gray-600 mb-3"},O2={key:0,class:"text-red-500 mt-2"},M2={__name:"Register",setup(t){const e=St(""),n=St(""),r=St(""),s=Nu(),i=St(""),o=async()=>{const l=zi();if(i.value="",!e.value||!n.value||!r.value){i.value="All fields are required!";return}try{const c=await s0(l,n.value,r.value);await a0(c.user,{displayName:e.value});const u=await c.user.getIdToken();localStorage.setItem("token",u),localStorage.setItem("user",JSON.stringify({uid:c.user.uid,email:c.user.email,name:c.user.displayName})),s.push("/")}catch(c){console.error(c),i.value=c.message||"Registration failed"}};return(l,c)=>{const u=qn("router-link");return Z(),ee("div",N2,[T("div",D2,[c[5]||(c[5]=T("h2",{class:"text-2xl font-bold mb-4"},"Register",-1)),c[6]||(c[6]=T("p",null,"Name",-1)),Pt(T("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>e.value=d),type:"text",placeholder:"Name",class:"w-full p-2 border rounded mb-3"},null,512),[[kt,e.value]]),c[7]||(c[7]=T("p",null,"Email",-1)),Pt(T("input",{"onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),type:"email",placeholder:"Email",class:"w-full p-2 border rounded mb-3"},null,512),[[kt,n.value]]),c[8]||(c[8]=T("p",null,"Password",-1)),Pt(T("input",{"onUpdate:modelValue":c[2]||(c[2]=d=>r.value=d),type:"password",placeholder:"Password",class:"w-full p-2 border rounded mb-3"},null,512),[[kt,r.value]]),T("p",V2,[c[4]||(c[4]=Ee(" Already have an account? ",-1)),ve(u,{to:"/login",class:"text-blue-600 hover:underline"},{default:Xe(()=>[...c[3]||(c[3]=[Ee(" Login ",-1)])]),_:1})]),T("button",{onClick:o,class:"w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"}," Register "),i.value?(Z(),ee("p",O2,Y(i.value),1)):nt("",!0)])])}}},L2={name:"GameRent",data(){return{game:null,selectedPlan:null}},computed:{calculatePrice(){if(!this.selectedPlan)return 0;switch(this.selectedPlan){case"hourly":return(this.game.price/24).toFixed(2);case"daily":return this.game.price.toFixed(2);case"weekly":return(this.game.price*7).toFixed(2);default:return this.game.price.toFixed(2)}}},methods:{selectPlan(t){this.selectedPlan=t},planClass(t){return this.selectedPlan===t?"border-2 border-indigo-500 bg-indigo-50":"border"},async confirmOrder(){if(!this.selectedPlan){alert("Please select a rental plan!");return}const t=Ah.currentUser;if(!t){alert("You must be logged in to rent a game."),this.$router.push("/login");return}try{const e=an(Tt,"users",t.uid,"cart");await Va(e,{gameId:this.game.id,title:this.game.title,image:this.game.image,rentalPlan:this.selectedPlan,price:parseFloat(this.calculatePrice),quantity:1,createdAt:new Date}),this.$router.push("/cart")}catch(e){console.error("Error adding to cart:",e)}}},async mounted(){const t=this.$route.params.id,e=Qr(Tt,"games",t),n=await Ax(e);n.exists()?this.game={id:n.id,...n.data()}:this.game=null}},F2={class:"min-h-screen bg-gray-100 py-12 px-6"},U2={key:0,class:"max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden"},$2={class:"h-80 bg-gray-200"},B2=["src","alt"],j2={class:"p-8"},q2={class:"text-3xl font-bold mb-2"},H2={class:"text-gray-600 mb-4"},G2={class:"text-xl font-semibold text-indigo-600 mb-4"},z2={class:"text-yellow-500 mb-6"},W2={class:"bg-gray-50 p-6 rounded-xl shadow-md"},K2={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},Q2={class:"text-indigo-600 font-bold mt-4"},Y2={class:"text-indigo-600 font-bold mt-4"},J2={class:"text-indigo-600 font-bold mt-4"},X2={key:0,class:"mt-8 p-6 bg-indigo-50 rounded-xl"},Z2={class:"mt-2"},eN={class:"font-bold capitalize"},tN={class:"text-indigo-600 font-bold"},nN={key:1,class:"text-center text-gray-600 text-xl font-semibold mt-12"};function rN(t,e,n,r,s,i){return Z(),ee("div",F2,[s.game?(Z(),ee("div",U2,[T("div",$2,[T("img",{src:s.game.image,alt:s.game.title,class:"w-full h-full object-cover"},null,8,B2)]),T("div",j2,[T("h1",q2,Y(s.game.title),1),T("p",H2,Y(s.game.description),1),T("p",G2,"Price: Rs "+Y(s.game.price),1),T("p",z2,"⭐ "+Y(s.game.rating)+"/5",1),T("div",W2,[e[12]||(e[12]=T("h2",{class:"text-2xl font-bold mb-4"},"Choose Your Rental Plan",-1)),T("div",K2,[T("div",{onClick:e[0]||(e[0]=o=>i.selectPlan("hourly")),class:sn([i.planClass("hourly"),"cursor-pointer p-6 rounded-xl border hover:shadow-lg transition"])},[e[4]||(e[4]=T("h3",{class:"text-xl font-semibold"},"Hourly Plan",-1)),e[5]||(e[5]=T("p",{class:"text-gray-600 mt-2"},"Rent this game for an hour.",-1)),T("p",Q2,"Rs "+Y((s.game.price/24).toFixed(2))+" / hour",1)],2),T("div",{onClick:e[1]||(e[1]=o=>i.selectPlan("daily")),class:sn([i.planClass("daily"),"cursor-pointer p-6 rounded-xl border hover:shadow-lg transition"])},[e[6]||(e[6]=T("h3",{class:"text-xl font-semibold"},"Daily Plan",-1)),e[7]||(e[7]=T("p",{class:"text-gray-600 mt-2"},"Rent this game for a full day.",-1)),T("p",Y2,"Rs "+Y(s.game.price)+" / day",1)],2),T("div",{onClick:e[2]||(e[2]=o=>i.selectPlan("weekly")),class:sn([i.planClass("weekly"),"cursor-pointer p-6 rounded-xl border hover:shadow-lg transition"])},[e[8]||(e[8]=T("h3",{class:"text-xl font-semibold"},"Weekly Plan",-1)),e[9]||(e[9]=T("p",{class:"text-gray-600 mt-2"},"Rent this game for 7 days.",-1)),T("p",J2,"Rs "+Y((s.game.price*7).toFixed(2))+" / week",1)],2)]),s.selectedPlan?(Z(),ee("div",X2,[e[11]||(e[11]=T("h3",{class:"text-lg font-semibold"},"You selected:",-1)),T("p",Z2,[T("span",eN,Y(s.selectedPlan),1),e[10]||(e[10]=Ee(" Plan → ",-1)),T("span",tN,"Rs "+Y(i.calculatePrice),1)]),T("button",{onClick:e[3]||(e[3]=(...o)=>i.confirmOrder&&i.confirmOrder(...o)),class:"mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"}," Confirm Rental ")])):nt("",!0)])])])):(Z(),ee("div",nN," Game not found! "))])}const sN=gn(L2,[["render",rN]]),iN={name:"Games",data(){return{games:[]}},async mounted(){try{const t=fv(),e=an(t,"games"),n=await Mi(e);this.games=n.docs.map(r=>({id:r.id,...r.data()}))}catch(t){console.error("Error fetching games from Firebase:",t)}}},oN={class:"min-h-screen bg-gray-900 text-white"},aN={class:"py-16 container mx-auto px-6"},lN={key:0,class:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},cN={class:"relative h-48"},uN=["src","alt"],hN={class:"absolute top-2 right-2 bg-indigo-600 px-2 py-1 rounded text-xs font-semibold"},dN={class:"p-5"},fN={class:"text-xl font-bold truncate"},pN={class:"text-gray-400 text-sm mt-2 line-clamp-2"},mN={class:"mt-4 flex items-center justify-between"},gN={class:"text-lg font-semibold text-indigo-400"},_N={key:1,class:"text-center text-gray-400"};function yN(t,e,n,r,s,i){const o=qn("router-link");return Z(),ee("div",oN,[e[2]||(e[2]=Ee("     ",-1)),e[3]||(e[3]=T("header",{class:"bg-gradient-to-r from-purple-700 to-indigo-800 py-12 shadow-lg"},[T("div",{class:"container mx-auto px-6 text-center"},[T("h1",{class:"text-4xl md:text-5xl font-extrabold mb-4"},"Explore All Games"),T("p",{class:"text-lg text-gray-300"},"Browse and rent your favorite titles instantly")])],-1)),T("section",aN,[s.games.length?(Z(),ee("div",lN,[(Z(!0),ee(ze,null,Jt(s.games,l=>(Z(),ee("div",{key:l.id,class:"bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"},[T("div",cN,[T("img",{src:l.image,alt:l.title,class:"w-full h-full object-cover"},null,8,uN),T("div",hN," ⭐ "+Y(l.rating),1)]),T("div",dN,[T("h2",fN,Y(l.title),1),T("p",pN,Y(l.description),1),T("div",mN,[T("span",gN,"Rs "+Y(l.price),1),ve(o,{to:`/rent/${l.id}`,class:"bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"},{default:Xe(()=>[...e[0]||(e[0]=[Ee(" Rent Now ",-1)])]),_:2},1032,["to"])])])]))),128))])):(Z(),ee("div",_N,[...e[1]||(e[1]=[T("p",{class:"text-xl"},"No games available yet. Please check back later!",-1)])]))])])}const vN=gn(iN,[["render",yN],["__scopeId","data-v-127689c7"]]),wN={class:"min-h-screen bg-gray-100 py-10 px-4"},EN={class:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"},TN={class:"lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"},IN={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"},bN={class:"bg-white p-8 rounded-2xl shadow-lg border border-gray-200"},AN={key:0,class:"text-center py-8 text-gray-500"},RN={key:1,class:"text-center py-8 text-gray-500"},SN={key:2,class:"space-y-4"},CN={class:"font-semibold"},PN={class:"text-sm text-gray-500"},xN={class:"font-bold"},kN={key:3,class:"mt-6 border-t pt-4 space-y-2"},NN={class:"flex justify-between text-gray-700"},DN={class:"flex justify-between text-gray-700"},VN={class:"flex justify-between font-bold text-lg"},ON=["disabled"],MN={key:0,class:"mt-4 text-red-500 text-center"},LN={key:0,class:"mt-4 text-green-600 text-center"},FN={__name:"Checkout",setup(t){const e=Nu(),n=St([]),r=St(null),s=St(!0),i=St(!1),o=St(""),l=St(""),c=St({fullName:"",email:"",phone:"",address:"",city:"",postalCode:""});let u=null,d=null;fu(()=>{d=Cu(Ah,N=>{if(!N){e.push("/login");return}r.value=N.uid;const k=an(Tt,"users",N.uid,"cart"),U=Tv(k);u=bv(U,B=>{n.value=B.docs.map(q=>({id:q.id,...q.data()})),s.value=!1},B=>{console.error("Error fetching cart:",B),s.value=!1})})}),pu(()=>{u&&u(),d&&d()});const p=Ot(()=>n.value.reduce((N,k)=>N+k.price*k.quantity,0)),m=Ot(()=>p.value*.1),_=Ot(()=>p.value+m.value),P=async()=>{if(o.value="",l.value="",!c.value.fullName||!c.value.email||!c.value.address){o.value="⚠️ Please fill in all required billing fields.";return}i.value=!0;try{const N={userId:r.value,items:n.value,subtotal:p.value,tax:m.value,total:_.value,billing:c.value,createdAt:new Date,status:"Pending"};await Va(an(Tt,"users",r.value,"orders"),N),await Va(an(Tt,"orders"),N);for(const k of n.value)await Th(Qr(Tt,"users",r.value,"cart",k.id));l.value="✅ Order placed successfully!",setTimeout(()=>e.push("/"),2e3)}catch(N){console.error(N),o.value="❌ Failed to place order. Try again."}finally{i.value=!1}};return(N,k)=>(Z(),ee("div",wN,[T("div",EN,[T("div",TN,[k[5]||(k[5]=T("h2",{class:"text-3xl font-bold mb-6 text-gray-800"},"Checkout",-1)),k[6]||(k[6]=T("h3",{class:"text-lg font-semibold mb-3 text-gray-700"},"Billing Information",-1)),T("div",IN,[Pt(T("input",{"onUpdate:modelValue":k[0]||(k[0]=U=>c.value.fullName=U),type:"text",placeholder:"Full Name *",class:"checkout-input"},null,512),[[kt,c.value.fullName]]),Pt(T("input",{"onUpdate:modelValue":k[1]||(k[1]=U=>c.value.email=U),type:"email",placeholder:"Email *",class:"checkout-input"},null,512),[[kt,c.value.email]]),Pt(T("input",{"onUpdate:modelValue":k[2]||(k[2]=U=>c.value.phone=U),type:"text",placeholder:"Phone Number",class:"checkout-input"},null,512),[[kt,c.value.phone]]),Pt(T("input",{"onUpdate:modelValue":k[3]||(k[3]=U=>c.value.address=U),type:"text",placeholder:"Address *",class:"checkout-input col-span-2"},null,512),[[kt,c.value.address]]),Pt(T("input",{"onUpdate:modelValue":k[4]||(k[4]=U=>c.value.city=U),type:"text",placeholder:"City",class:"checkout-input"},null,512),[[kt,c.value.city]])])]),T("div",bN,[k[10]||(k[10]=T("h3",{class:"text-xl font-bold mb-6"},"Order Summary",-1)),s.value?(Z(),ee("div",AN,"Loading cart...")):n.value.length===0?(Z(),ee("div",RN,"Your cart is empty.")):(Z(),ee("div",SN,[(Z(!0),ee(ze,null,Jt(n.value,U=>(Z(),ee("div",{key:U.id,class:"flex justify-between items-center border-b pb-3"},[T("div",null,[T("p",CN,Y(U.title),1),T("p",PN,"x"+Y(U.quantity),1)]),T("p",xN,"Rs "+Y((U.price*U.quantity).toFixed(2)),1)]))),128))])),n.value.length>0?(Z(),ee("div",kN,[T("div",NN,[k[7]||(k[7]=T("span",null,"Subtotal",-1)),T("span",null,"Rs "+Y(p.value.toFixed(2)),1)]),T("div",DN,[k[8]||(k[8]=T("span",null,"Tax (10%)",-1)),T("span",null,"Rs "+Y(m.value.toFixed(2)),1)]),T("div",VN,[k[9]||(k[9]=T("span",null,"Total",-1)),T("span",null,"Rs "+Y(_.value.toFixed(2)),1)])])):nt("",!0),T("button",{onClick:P,class:"w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md",disabled:n.value.length===0||i.value},Y(i.value?"Placing Order...":"Place Order"),9,ON),ve(Tc,{name:"fade"},{default:Xe(()=>[o.value?(Z(),ee("p",MN,Y(o.value),1)):nt("",!0)]),_:1}),ve(Tc,{name:"fade"},{default:Xe(()=>[l.value?(Z(),ee("p",LN,Y(l.value),1)):nt("",!0)]),_:1})])])]))}},UN=gn(FN,[["__scopeId","data-v-f36210df"]]),$N=[{path:"/",component:Fx},{path:"/game/:id",component:mk},{path:"/cart",component:Bk},{path:"/about",component:R2},{path:"/admin",component:T2,meta:{requiresAdmin:!0}},{path:"/login",component:k2},{path:"/register",component:M2},{path:"/rent/:id",component:sN},{path:"/games",component:vN},{path:"/checkout",component:UN}],Rv=z1({history:E1(),routes:$N});Rv.beforeEach((t,e,n)=>{const r=JSON.parse(localStorage.getItem("user"));if(t.meta.requiresAdmin){if(!r)return n("/login");if(r.email!=="onlyadmin@gmail.com")return n("/")}n()});wT(HA).use(Rv).mount("#app");
