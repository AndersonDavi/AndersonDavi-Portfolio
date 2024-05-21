var Zg=Object.defineProperty,Jg=Object.defineProperties;var Kg=Object.getOwnPropertyDescriptors;var Id=Object.getOwnPropertySymbols;var Qg=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable;var Rd=(n,e,t)=>e in n?Zg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Cn=(n,e)=>{for(var t in e||={})Qg.call(e,t)&&Rd(n,t,e[t]);if(Id)for(var t of Id(e))ev.call(e,t)&&Rd(n,t,e[t]);return n},qn=(n,e)=>Jg(n,Kg(e));var Fa=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Nd=null;var Ua=1,Pd=Symbol("SIGNAL");function We(n){let e=Nd;return Nd=n,e}var Ld={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tv(n){if(!(Va(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Ua)){if(!n.producerMustRecompute(n)&&!ka(n)){n.dirty=!1,n.lastCleanEpoch=Ua;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Ua}}function Od(n){return n&&(n.nextProducerIndex=0),We(n)}function Fd(n,e){if(We(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Va(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ba(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function ka(n){Vs(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(tv(t),i!==t.version))return!0}return!1}function Ud(n){if(Vs(n),Va(n))for(let e=0;e<n.producerNode.length;e++)Ba(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Ba(n,e){if(nv(n),Vs(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Ba(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Vs(r),r.producerIndexOfThis[i]=e}}function Va(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Vs(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function nv(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function iv(){throw new Error}var rv=iv;function kd(n){rv=n}function Ft(n){return typeof n=="function"}function Hs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var zs=Hs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Qr(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ut=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ft(i))try{i()}catch(s){e=s instanceof zs?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Bd(s)}catch(o){e=e??[],o instanceof zs?e=[...e,...o.errors]:e.push(o)}}if(e)throw new zs(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Bd(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Qr(t,e)}remove(e){let{_finalizers:t}=this;t&&Qr(t,e),e instanceof n&&e._removeParent(this)}};Ut.EMPTY=(()=>{let n=new Ut;return n.closed=!0,n})();var Ha=Ut.EMPTY;function Gs(n){return n instanceof Ut||n&&"closed"in n&&Ft(n.remove)&&Ft(n.add)&&Ft(n.unsubscribe)}function Bd(n){Ft(n)?n():n.unsubscribe()}var Kt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Qi={setTimeout(n,e,...t){let{delegate:i}=Qi;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Qi;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Vd(n){Qi.setTimeout(()=>{let{onUnhandledError:e}=Kt;if(e)e(n);else throw n})}function za(){}var Hd=Ga("C",void 0,void 0);function zd(n){return Ga("E",void 0,n)}function Gd(n){return Ga("N",n,void 0)}function Ga(n,e,t){return{kind:n,value:e,error:t}}var vi=null;function er(n){if(Kt.useDeprecatedSynchronousErrorHandling){let e=!vi;if(e&&(vi={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vi;if(vi=null,t)throw i}}else n()}function Wd(n){Kt.useDeprecatedSynchronousErrorHandling&&vi&&(vi.errorThrown=!0,vi.error=n)}var yi=class extends Ut{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Gs(e)&&e.add(this)):this.destination=av}static create(e,t,i){return new tr(e,t,i)}next(e){this.isStopped?ja(Gd(e),this):this._next(e)}error(e){this.isStopped?ja(zd(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ja(Hd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},sv=Function.prototype.bind;function Wa(n,e){return sv.call(n,e)}var $a=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ws(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ws(i)}else Ws(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ws(t)}}},tr=class extends yi{constructor(e,t,i){super();let r;if(Ft(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Kt.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Wa(e.next,s),error:e.error&&Wa(e.error,s),complete:e.complete&&Wa(e.complete,s)}):r=e}this.destination=new $a(r)}};function Ws(n){Kt.useDeprecatedSynchronousErrorHandling?Wd(n):Vd(n)}function ov(n){throw n}function ja(n,e){let{onStoppedNotification:t}=Kt;t&&Qi.setTimeout(()=>t(n,e))}var av={closed:!0,next:za,error:ov,complete:za};var jd=typeof Symbol=="function"&&Symbol.observable||"@@observable";function $d(n){return n}function qd(n){return n.length===0?$d:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var qa=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=lv(t)?t:new tr(t,i,r);return er(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Xd(i),new i((r,s)=>{let o=new tr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[jd](){return this}pipe(...t){return qd(t)(this)}toPromise(t){return t=Xd(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Xd(n){var e;return(e=n??Kt.Promise)!==null&&e!==void 0?e:Promise}function cv(n){return n&&Ft(n.next)&&Ft(n.error)&&Ft(n.complete)}function lv(n){return n&&n instanceof yi||cv(n)&&Gs(n)}function uv(n){return Ft(n?.lift)}function Yd(n){return e=>{if(uv(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Zd(n,e,t,i,r){return new Xa(n,e,t,i,r)}var Xa=class extends yi{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Jd=Hs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Xn=(()=>{class n extends qa{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new js(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Jd}next(t){er(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){er(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){er(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Ha:(this.currentObservers=null,s.push(t),new Ut(()=>{this.currentObservers=null,Qr(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new qa;return t.source=this,t}}return n.create=(e,t)=>new js(e,t),n})(),js=class extends Xn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Ha}};var es=class extends Xn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function Ya(n,e){return Yd((t,i)=>{let r=0;t.subscribe(Zd(i,s=>{i.next(n.call(e,s,r++))}))})}var Of="https://g.co/ng/security#xss",Ze=class extends Error{constructor(e,t){super(qc(e,t)),this.code=e}};function qc(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Xc(n){return{toString:n}.toString()}var ts=globalThis;function st(n){for(let e in n)if(n[e]===st)return e;throw Error("Could not find renamed property on target object.")}function tn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(tn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Kd(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var dv=st({__forward_ref__:st});function Ff(n){return n.__forward_ref__=Ff,n.toString=function(){return tn(this())},n}function en(n){return fv(n)?n():n}function fv(n){return typeof n=="function"&&n.hasOwnProperty(dv)&&n.__forward_ref__===Ff}function ft(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Yc(n){return{providers:n.providers||[],imports:n.imports||[]}}function Zc(n){return Qd(n,Uf)||Qd(n,kf)}function Qd(n,e){return n.hasOwnProperty(e)?n[e]:null}function hv(n){let e=n&&(n[Uf]||n[kf]);return e||null}function ef(n){return n&&(n.hasOwnProperty(tf)||n.hasOwnProperty(pv))?n[tf]:null}var Uf=st({\u0275prov:st}),tf=st({\u0275inj:st}),kf=st({ngInjectableDef:st}),pv=st({ngInjectorDef:st}),ct=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ft({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Bf(n){return n&&!!n.\u0275providers}var mv=st({\u0275cmp:st}),gv=st({\u0275dir:st}),vv=st({\u0275pipe:st});var nf=st({\u0275fac:st}),ns=st({__NG_ELEMENT_ID__:st}),rf=st({__NG_ENV_ID__:st});function Jc(n){return typeof n=="string"?n:n==null?"":String(n)}function yv(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Jc(n)}function _v(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ze(-200,n)}function Kc(n,e){throw new Ze(-201,!1)}var Ve=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ve||{}),ac;function Vf(){return ac}function pn(n){let e=ac;return ac=n,e}function Hf(n,e,t){let i=Zc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ve.Optional)return null;if(e!==void 0)return e;Kc(n,"Injector")}var xv={},is=xv,Mv="__NG_DI_FLAG__",Ks="ngTempTokenPath",Ev="ngTokenPath",Sv=/\n/gm,wv="\u0275",sf="__source",ar;function bv(){return ar}function nr(n){let e=ar;return ar=n,e}function Tv(n,e=Ve.Default){if(ar===void 0)throw new Ze(-203,!1);return ar===null?Hf(n,void 0,e):ar.get(n,e&Ve.Optional?null:void 0,e)}function Je(n,e=Ve.Default){return(Vf()||Tv)(en(n),e)}function gt(n,e=Ve.Default){return Je(n,vo(e))}function vo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function cc(n){let e=[];for(let t=0;t<n.length;t++){let i=en(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ze(900,!1);let r,s=Ve.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Cv(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Je(r,s))}else e.push(Je(i))}return e}function Cv(n){return n[Mv]}function Dv(n,e,t,i){let r=n[Ks];throw e[sf]&&r.unshift(e[sf]),n.message=Av(`
`+n.message,r,t,i),n[Ev]=r,n[Ks]=null,n}function Av(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==wv?n.slice(2):n;let r=tn(e);if(Array.isArray(e))r=e.map(tn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):tn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Sv,`
  `)}`}function rs(n,e){let t=n.hasOwnProperty(nf);return t?n[nf]:null}function Iv(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function Rv(n){return n.flat(Number.POSITIVE_INFINITY)}function Qc(n,e){n.forEach(t=>Array.isArray(t)?Qc(t,e):e(t))}function zf(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Qs(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ss={},mn=[],os=new ct(""),Gf=new ct("",-1),Wf=new ct(""),eo=class{get(e,t=is){if(t===is){let i=new Error(`NullInjectorError: No provider for ${tn(e)}!`);throw i.name="NullInjectorError",i}return t}},jf=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(jf||{}),yn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(yn||{}),Zn=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Zn||{});function Nv(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function lc(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Lv(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Pv(n){return n===3||n===4||n===6}function Lv(n){return n.charCodeAt(0)===64}function el(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?of(n,t,r,null,e[++i]):of(n,t,r,null,null))}}return n}function of(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var $f="ng-template";function Ov(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Nv(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(tl(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function tl(n){return n.type===4&&n.value!==$f}function Fv(n,e,t){let i=n.type===4&&!t?$f:n.value;return e===i}function Uv(n,e,t){let i=4,r=n.attrs,s=r!==null?Vv(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Qt(i)&&!Qt(c))return!1;if(o&&Qt(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Fv(n,c,t)||c===""&&e.length===1){if(Qt(i))return!1;o=!0}}else if(i&8){if(r===null||!Ov(n,r,c,t)){if(Qt(i))return!1;o=!0}}else{let l=e[++a],u=kv(c,r,tl(n),t);if(u===-1){if(Qt(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Qt(i))return!1;o=!0}}}}return Qt(i)||o}function Qt(n){return(n&1)===0}function kv(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Hv(e,n)}function Bv(n,e,t=!1){for(let i=0;i<e.length;i++)if(Uv(n,e[i],t))return!0;return!1}function Vv(n){for(let e=0;e<n.length;e++){let t=n[e];if(Pv(t))return e}return n.length}function Hv(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function af(n,e){return n?":not("+e.trim()+")":e}function zv(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Qt(o)&&(e+=af(s,r),r=""),i=o,s=s||!Qt(i);t++}return r!==""&&(e+=af(s,r)),e}function Gv(n){return n.map(zv).join(",")}function Wv(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Qt(r))break;r=s}i++}return{attrs:e,classes:t}}function qt(n){return Xc(()=>{let e=Zf(n),t=qn(Cn({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===jf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||yn.Emulated,styles:n.styles||mn,_:null,schemas:n.schemas||null,tView:null,id:""});Jf(t);let i=n.dependencies;return t.directiveDefs=lf(i,!1),t.pipeDefs=lf(i,!0),t.id=Xv(t),t})}function jv(n){return lr(n)||Xf(n)}function $v(n){return n!==null}function nl(n){return Xc(()=>({type:n.type,bootstrap:n.bootstrap||mn,declarations:n.declarations||mn,imports:n.imports||mn,exports:n.exports||mn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function cf(n,e){if(n==null)return ss;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Zn.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Zn.None?[i,a]:i,e[s]=o):t[s]=i}return t}function qf(n){return Xc(()=>{let e=Zf(n);return Jf(e),e})}function lr(n){return n[mv]||null}function Xf(n){return n[gv]||null}function Yf(n){return n[vv]||null}function qv(n){let e=lr(n)||Xf(n)||Yf(n);return e!==null?e.standalone:!1}function Zf(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ss,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||mn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:cf(n.inputs,e),outputs:cf(n.outputs),debugInfo:null}}function Jf(n){n.features?.forEach(e=>e(n))}function lf(n,e){if(!n)return null;let t=e?Yf:jv;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter($v)}function Xv(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Kf(n){return{\u0275providers:n}}function Yv(...n){return{\u0275providers:Qf(!0,n),\u0275fromNgModule:!0}}function Qf(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qc(e,o=>{let a=o;uc(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&eh(r,s),t}function eh(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];il(r,s=>{e(s,i)})}}function uc(n,e,t,i){if(n=en(n),!n)return!1;let r=null,s=ef(n),o=!s&&lr(n);if(!s&&!o){let c=n.ngModule;if(s=ef(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)uc(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qc(s.imports,u=>{uc(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&eh(l,e)}if(!a){let l=rs(r)||(()=>new r);e({provide:r,useFactory:l,deps:mn},r),e({provide:Wf,useValue:r,multi:!0},r),e({provide:os,useValue:()=>Je(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;il(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function il(n,e){for(let t of n)Bf(t)&&(t=t.\u0275providers),Array.isArray(t)?il(t,e):e(t)}var Zv=st({provide:String,useValue:st});function th(n){return n!==null&&typeof n=="object"&&Zv in n}function Jv(n){return!!(n&&n.useExisting)}function Kv(n){return!!(n&&n.useFactory)}function dc(n){return typeof n=="function"}var yo=new ct(""),$s={},Qv={},Za;function rl(){return Za===void 0&&(Za=new eo),Za}var Jn=class{},to=class extends Jn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,hc(e,o=>this.processProvider(o)),this.records.set(Gf,ir(void 0,this)),r.has("environment")&&this.records.set(Jn,ir(void 0,this));let s=this.records.get(yo);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Wf,mn,Ve.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=We(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),We(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=nr(this),i=pn(void 0),r;try{return e()}finally{nr(t),pn(i)}}get(e,t=is,i=Ve.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(rf))return e[rf](this);i=vo(i);let r,s=nr(this),o=pn(void 0);try{if(!(i&Ve.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=sy(e)&&Zc(e);l&&this.injectableDefInScope(l)?c=ir(fc(e),$s):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ve.Self?rl():this.parent;return t=i&Ve.Optional&&t===is?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ks]=a[Ks]||[]).unshift(tn(e)),s)throw a;return Dv(a,e,"R3InjectorError",this.source)}else throw a}finally{pn(o),nr(s)}}resolveInjectorInitializers(){let e=We(null),t=nr(this),i=pn(void 0),r;try{let s=this.get(os,mn,Ve.Self);for(let o of s)o()}finally{nr(t),pn(i),We(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(tn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ze(205,!1)}processProvider(e){e=en(e);let t=dc(e)?e:en(e&&e.provide),i=ty(e);if(!dc(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ir(void 0,$s,!0),r.factory=()=>cc(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=We(null);try{return t.value===$s&&(t.value=Qv,t.value=t.factory()),typeof t.value=="object"&&t.value&&ry(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{We(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=en(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function fc(n){let e=Zc(n),t=e!==null?e.factory:rs(n);if(t!==null)return t;if(n instanceof ct)throw new Ze(204,!1);if(n instanceof Function)return ey(n);throw new Ze(204,!1)}function ey(n){if(n.length>0)throw new Ze(204,!1);let t=hv(n);return t!==null?()=>t.factory(n):()=>new n}function ty(n){if(th(n))return ir(void 0,n.useValue);{let e=ny(n);return ir(e,$s)}}function ny(n,e,t){let i;if(dc(n)){let r=en(n);return rs(r)||fc(r)}else if(th(n))i=()=>en(n.useValue);else if(Kv(n))i=()=>n.useFactory(...cc(n.deps||[]));else if(Jv(n))i=()=>Je(en(n.useExisting));else{let r=en(n&&(n.useClass||n.provide));if(iy(n))i=()=>new r(...cc(n.deps));else return rs(r)||fc(r)}return i}function ir(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function iy(n){return!!n.deps}function ry(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function sy(n){return typeof n=="function"||typeof n=="object"&&n instanceof ct}function hc(n,e){for(let t of n)Array.isArray(t)?hc(t,e):t&&Bf(t)?hc(t.\u0275providers,e):e(t)}function oy(){return Vf()!==void 0||bv()!=null}function ay(n){return typeof n=="function"}var Rn=0,be=1,Me=2,St=3,nn=4,sn=5,as=6,cs=7,Nt=8,ur=9,rn=10,Pt=11,ls=12,uf=13,mr=14,_n=15,vs=16,rr=17,Dn=18,_o=19,nh=20,Yn=21,Ja=22,Mi=23,An=25,ih=1;var Ei=7,no=8,dr=9,Dt=10,sl=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(sl||{});function _i(n){return Array.isArray(n)&&typeof n[ih]=="object"}function Nn(n){return Array.isArray(n)&&n[ih]===!0}function rh(n){return(n.flags&4)!==0}function ol(n){return n.componentOffset>-1}function al(n){return(n.flags&1)===1}function ys(n){return!!n.template}function cy(n){return(n[Me]&512)!==0}var pc=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function sh(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function oh(){return ah}function ah(n){return n.type.prototype.ngOnChanges&&(n.setInput=uy),ly}oh.ngInherit=!0;function ly(){let n=lh(this),e=n?.current;if(e){let t=n.previous;if(t===ss)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function uy(n,e,t,i,r){let s=this.declaredInputs[i],o=lh(n)||dy(n,{previous:ss,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new pc(l&&l.currentValue,t,c===ss),sh(n,e,r,t)}var ch="__ngSimpleChanges__";function lh(n){return n[ch]||null}function dy(n,e){return n[ch]=e}var df=null;var gn=function(n,e,t){df?.(n,e,t)},fy="svg",hy="math",py=!1;function my(){return py}function xn(n){for(;Array.isArray(n);)n=n[Rn];return n}function gy(n,e){return xn(e[n])}function on(n,e){return xn(e[n.index])}function cl(n,e){return n.data[e]}function bi(n,e){let t=e[n];return _i(t)?t:t[Rn]}function vy(n){return(n[Me]&4)===4}function ll(n){return(n[Me]&128)===128}function yy(n){return Nn(n[St])}function io(n,e){return e==null?null:n[e]}function uh(n){n[rr]=0}function _y(n){n[Me]&1024||(n[Me]|=1024,ll(n)&&us(n))}function xy(n,e){for(;n>0;)e=e[mr],n--;return e}function ul(n){return!!(n[Me]&9216||n[Mi]?.dirty)}function mc(n){n[rn].changeDetectionScheduler?.notify(1),ul(n)?us(n):n[Me]&64&&(my()?(n[Me]|=1024,us(n)):n[rn].changeDetectionScheduler?.notify())}function us(n){n[rn].changeDetectionScheduler?.notify();let e=ds(n);for(;e!==null&&!(e[Me]&8192||(e[Me]|=8192,!ll(e)));)e=ds(e)}function dh(n,e){if((n[Me]&256)===256)throw new Ze(911,!1);n[Yn]===null&&(n[Yn]=[]),n[Yn].push(e)}function My(n,e){if(n[Yn]===null)return;let t=n[Yn].indexOf(e);t!==-1&&n[Yn].splice(t,1)}function ds(n){let e=n[St];return Nn(e)?e[St]:e}var Oe={lFrame:_h(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Ey(){return Oe.lFrame.elementDepthCount}function Sy(){Oe.lFrame.elementDepthCount++}function wy(){Oe.lFrame.elementDepthCount--}function fh(){return Oe.bindingsEnabled}function by(){return Oe.skipHydrationRootTNode!==null}function Ty(n){return Oe.skipHydrationRootTNode===n}function Cy(){Oe.skipHydrationRootTNode=null}function tt(){return Oe.lFrame.lView}function Pn(){return Oe.lFrame.tView}function xo(n){return Oe.lFrame.contextLView=n,n[Nt]}function Mo(n){return Oe.lFrame.contextLView=null,n}function Mn(){let n=hh();for(;n!==null&&n.type===64;)n=n.parent;return n}function hh(){return Oe.lFrame.currentTNode}function Dy(){let n=Oe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function _s(n,e){let t=Oe.lFrame;t.currentTNode=n,t.isParent=e}function ph(){return Oe.lFrame.isParent}function Ay(){Oe.lFrame.isParent=!1}function mh(){let n=Oe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function Iy(n){return Oe.lFrame.bindingIndex=n}function dl(){return Oe.lFrame.bindingIndex++}function Ry(){return Oe.lFrame.inI18n}function Ny(n,e){let t=Oe.lFrame;t.bindingIndex=t.bindingRootIndex=n,gc(e)}function Py(){return Oe.lFrame.currentDirectiveIndex}function gc(n){Oe.lFrame.currentDirectiveIndex=n}function gh(){return Oe.lFrame.currentQueryIndex}function fl(n){Oe.lFrame.currentQueryIndex=n}function Ly(n){let e=n[be];return e.type===2?e.declTNode:e.type===1?n[sn]:null}function vh(n,e,t){if(t&Ve.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ve.Host);)if(r=Ly(s),r===null||(s=s[mr],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Oe.lFrame=yh();return i.currentTNode=e,i.lView=n,!0}function hl(n){let e=yh(),t=n[be];Oe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function yh(){let n=Oe.lFrame,e=n===null?null:n.child;return e===null?_h(n):e}function _h(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function xh(){let n=Oe.lFrame;return Oe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Mh=xh;function pl(){let n=xh();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Oy(n){return(Oe.lFrame.contextLView=xy(n,Oe.lFrame.contextLView))[Nt]}function Eo(){return Oe.lFrame.selectedIndex}function Si(n){Oe.lFrame.selectedIndex=n}function Fy(){let n=Oe.lFrame;return cl(n.tView,n.selectedIndex)}function Uy(){return Oe.lFrame.currentNamespace}var Eh=!0;function ml(){return Eh}function gl(n){Eh=n}function ky(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=ah(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function vl(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function qs(n,e,t){Sh(n,e,3,t)}function Xs(n,e,t,i){(n[Me]&3)===t&&Sh(n,e,t,i)}function Ka(n,e){let t=n[Me];(t&3)===e&&(t&=16383,t+=1,n[Me]=t)}function Sh(n,e,t,i){let r=i!==void 0?n[rr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[rr]+=65536),(a<s||s==-1)&&(By(n,t,e,c),n[rr]=(n[rr]&4294901760)+c+2),c++}function ff(n,e){gn(4,n,e);let t=We(null);try{e.call(n)}finally{We(t),gn(5,n,e)}}function By(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Me]>>14<n[rr]>>16&&(n[Me]&3)===e&&(n[Me]+=16384,ff(a,s)):ff(a,s)}var cr=-1,fs=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Vy(n){return n instanceof fs}function Hy(n){return(n.flags&8)!==0}function zy(n){return(n.flags&16)!==0}function wh(n){return n!==cr}function ro(n){return n&32767}function Gy(n){return n>>16}function so(n,e){let t=Gy(n),i=e;for(;t>0;)i=i[mr],t--;return i}var vc=!0;function hf(n){let e=vc;return vc=n,e}var Wy=256,bh=Wy-1,Th=5,jy=0,vn={};function $y(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ns)&&(i=t[ns]),i==null&&(i=t[ns]=jy++);let r=i&bh,s=1<<r;e.data[n+(r>>Th)]|=s}function Ch(n,e){let t=Dh(n,e);if(t!==-1)return t;let i=e[be];i.firstCreatePass&&(n.injectorIndex=e.length,Qa(i.data,n),Qa(e,null),Qa(i.blueprint,null));let r=yl(n,e),s=n.injectorIndex;if(wh(r)){let o=ro(r),a=so(r,e),c=a[be].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Qa(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Dh(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function yl(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Ph(r),i===null)return cr;if(t++,r=r[mr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return cr}function qy(n,e,t){$y(n,e,t)}function Ah(n,e,t){if(t&Ve.Optional||n!==void 0)return n;Kc(e,"NodeInjector")}function Ih(n,e,t,i){if(t&Ve.Optional&&i===void 0&&(i=null),!(t&(Ve.Self|Ve.Host))){let r=n[ur],s=pn(void 0);try{return r?r.get(e,i,t&Ve.Optional):Hf(e,i,t&Ve.Optional)}finally{pn(s)}}return Ah(i,e,t)}function Rh(n,e,t,i=Ve.Default,r){if(n!==null){if(e[Me]&2048&&!(i&Ve.Self)){let o=Jy(n,e,t,i,vn);if(o!==vn)return o}let s=Nh(n,e,t,i,vn);if(s!==vn)return s}return Ih(e,t,i,r)}function Nh(n,e,t,i,r){let s=Yy(t);if(typeof s=="function"){if(!vh(e,n,i))return i&Ve.Host?Ah(r,t,i):Ih(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ve.Optional))Kc(t);else return o}finally{Mh()}}else if(typeof s=="number"){let o=null,a=Dh(n,e),c=cr,l=i&Ve.Host?e[_n][sn]:null;for((a===-1||i&Ve.SkipSelf)&&(c=a===-1?yl(n,e):e[a+8],c===cr||!mf(i,!1)?a=-1:(o=e[be],a=ro(c),e=so(c,e)));a!==-1;){let u=e[be];if(pf(s,a,u.data)){let d=Xy(a,e,t,o,i,l);if(d!==vn)return d}c=e[a+8],c!==cr&&mf(i,e[be].data[a+8]===l)&&pf(s,a,e)?(o=u,a=ro(c),e=so(c,e)):a=-1}}return r}function Xy(n,e,t,i,r,s){let o=e[be],a=o.data[n+8],c=i==null?ol(a)&&vc:i!=o&&(a.type&3)!==0,l=r&Ve.Host&&s===a,u=Ys(a,o,t,c,l);return u!==null?fr(e,o,u,a):vn}function Ys(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let m=d;m<f;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&ys(m)&&m.type===t)return c}return null}function fr(n,e,t,i){let r=n[t],s=e.data;if(Vy(r)){let o=r;o.resolving&&_v(yv(s[t]));let a=hf(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?pn(o.injectImpl):null,u=vh(n,i,Ve.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&ky(t,s[t],e)}finally{l!==null&&pn(l),hf(a),o.resolving=!1,Mh()}}return r}function Yy(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ns)?n[ns]:void 0;return typeof e=="number"?e>=0?e&bh:Zy:e}function pf(n,e,t){let i=1<<n;return!!(t[e+(n>>Th)]&i)}function mf(n,e){return!(n&Ve.Self)&&!(n&Ve.Host&&e)}var xi=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Rh(this._tNode,this._lView,e,vo(i),t)}};function Zy(){return new xi(Mn(),tt())}function Jy(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Me]&2048&&!(o[Me]&512);){let a=Nh(s,o,t,i|Ve.Self,vn);if(a!==vn)return a;let c=s.parent;if(!c){let l=o[nh];if(l){let u=l.get(t,vn,i);if(u!==vn)return u}c=Ph(o),o=o[mr]}s=c}return r}function Ph(n){let e=n[be],t=e.type;return t===2?e.declTNode:t===1?n[sn]:null}function gf(n,e=null,t=null,i){let r=Ky(n,e,t,i);return r.resolveInjectorInitializers(),r}function Ky(n,e=null,t=null,i,r=new Set){let s=[t||mn,Yv(n)];return i=i||(typeof n=="object"?void 0:tn(n)),new to(s,e||rl(),i||null,r)}var _l=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return gf({name:""},r,i,"");{let s=i.name??"";return gf({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=is,e.NULL=new eo,e.\u0275prov=ft({token:e,providedIn:"any",factory:()=>Je(Gf)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var Qy="ngOriginalError";function ec(n){return n[Qy]}var In=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&ec(e);for(;t&&ec(t);)t=ec(t);return t||null}},Lh=new ct("",{providedIn:"root",factory:()=>gt(In).handleError.bind(void 0)}),Oh=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=e0,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),yc=class extends Oh{constructor(e){super(),this._lView=e}onDestroy(e){return dh(this._lView,e),()=>My(this._lView,e)}};function e0(){return new yc(tt())}function t0(){return gr(Mn(),tt())}function gr(n,e){return new Ti(on(n,e))}var Ti=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=t0;let n=e;return n})();function n0(n){return n instanceof Ti?n.nativeElement:n}var _c=class extends Xn{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,oy()&&(this.destroyRef=gt(Oh,{optional:!0})??void 0)}emit(e){let t=We(null);try{super.next(e)}finally{We(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=tc(s),r&&(r=tc(r)),o&&(o=tc(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ut&&e.add(a),a}};function tc(n){return e=>{setTimeout(n,void 0,e)}}var sr=_c;function i0(){return this._results[Symbol.iterator]()}var xc=class n{get changes(){return this._changes??=new sr}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=i0)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=Rv(e);(this._changesDetected=!Iv(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function Fh(n){return(n.flags&128)===128}var Uh=new Map,r0=0;function s0(){return r0++}function o0(n){Uh.set(n[_o],n)}function a0(n){Uh.delete(n[_o])}var vf="__ngContext__";function wi(n,e){_i(e)?(n[vf]=e[_o],o0(e)):n[vf]=e}function kh(n){return Vh(n[ls])}function Bh(n){return Vh(n[nn])}function Vh(n){for(;n!==null&&!Nn(n);)n=n[nn];return n}var Mc;function Hh(n){Mc=n}function c0(){if(Mc!==void 0)return Mc;if(typeof document<"u")return document;throw new Ze(210,!1)}var xl=new ct("",{providedIn:"root",factory:()=>l0}),l0="ng",Ml=new ct(""),vr=new ct("",{providedIn:"platform",factory:()=>"unknown"});var El=new ct("",{providedIn:"root",factory:()=>c0().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var u0="h",d0="b";var f0=()=>null;function Sl(n,e,t=!1){return f0(n,e,t)}var zh=!1,h0=new ct("",{providedIn:"root",factory:()=>zh});var oo=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Of})`}};function wl(n){return n instanceof oo?n.changingThisBreaksApplicationSecurity:n}function Gh(n,e){let t=p0(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Of})`)}return t===e}function p0(n){return n instanceof oo&&n.getTypeName()||null}var m0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wh(n){return n=String(n),n.match(m0)?n:"unsafe:"+n}var bl=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(bl||{});function Ci(n){let e=g0();return e?e.sanitize(bl.URL,n)||"":Gh(n,"URL")?wl(n):Wh(Jc(n))}function g0(){let n=tt();return n&&n[rn].sanitizer}var Di=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Di||{}),v0;function Tl(n,e){return v0(n,e)}function or(n,e,t,i,r){if(i!=null){let s,o=!1;Nn(i)?s=i:_i(i)&&(o=!0,i=i[Rn]);let a=xn(i);n===0&&t!==null?r==null?Xh(e,t,a):ao(e,t,a,r||null,!0):n===1&&t!==null?ao(e,t,a,r||null,!0):n===2?L0(e,a,o):n===3&&e.destroyNode(a),s!=null&&F0(e,n,s,t,r)}}function y0(n,e){return n.createText(e)}function _0(n,e,t){n.setValue(e,t)}function jh(n,e,t){return n.createElement(e,t)}function x0(n,e){$h(n,e),e[Rn]=null,e[sn]=null}function M0(n,e,t,i,r,s){i[Rn]=r,i[sn]=e,wo(n,i,t,1,r,s)}function $h(n,e){e[rn].changeDetectionScheduler?.notify(1),wo(n,e,e[Pt],2,null,null)}function E0(n){let e=n[ls];if(!e)return nc(n[be],n);for(;e;){let t=null;if(_i(e))t=e[ls];else{let i=e[Dt];i&&(t=i)}if(!t){for(;e&&!e[nn]&&e!==n;)_i(e)&&nc(e[be],e),e=e[St];e===null&&(e=n),_i(e)&&nc(e[be],e),t=e&&e[nn]}e=t}}function S0(n,e,t,i){let r=Dt+i,s=t.length;i>0&&(t[r-1][nn]=e),i<s-Dt?(e[nn]=t[r],zf(t,Dt+i,e)):(t.push(e),e[nn]=null),e[St]=t;let o=e[vs];o!==null&&t!==o&&w0(o,e);let a=e[Dn];a!==null&&a.insertView(n),mc(e),e[Me]|=128}function w0(n,e){let t=n[dr],r=e[St][St][_n];e[_n]!==r&&(n[Me]|=sl.HasTransplantedViews),t===null?n[dr]=[e]:t.push(e)}function qh(n,e){let t=n[dr],i=t.indexOf(e);t.splice(i,1)}function hs(n,e){if(n.length<=Dt)return;let t=Dt+e,i=n[t];if(i){let r=i[vs];r!==null&&r!==n&&qh(r,i),e>0&&(n[t-1][nn]=i[nn]);let s=Qs(n,Dt+e);x0(i[be],i);let o=s[Dn];o!==null&&o.detachView(s[be]),i[St]=null,i[nn]=null,i[Me]&=-129}return i}function So(n,e){if(!(e[Me]&256)){let t=e[Pt];t.destroyNode&&wo(n,e,t,3,null,null),E0(e)}}function nc(n,e){if(e[Me]&256)return;let t=We(null);try{e[Me]&=-129,e[Me]|=256,e[Mi]&&Ud(e[Mi]),T0(n,e),b0(n,e),e[be].type===1&&e[Pt].destroy();let i=e[vs];if(i!==null&&Nn(e[St])){i!==e[St]&&qh(i,e);let r=e[Dn];r!==null&&r.detachView(n)}a0(e)}finally{We(t)}}function b0(n,e){let t=n.cleanup,i=e[cs];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[cs]=null);let r=e[Yn];if(r!==null){e[Yn]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function T0(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof fs)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];gn(4,a,c);try{c.call(a)}finally{gn(5,a,c)}}else{gn(4,r,s);try{s.call(r)}finally{gn(5,r,s)}}}}}function C0(n,e,t){return D0(n,e.parent,t)}function D0(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[Rn];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===yn.None||s===yn.Emulated)return null}return on(i,t)}}function ao(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Xh(n,e,t){n.appendChild(e,t)}function yf(n,e,t,i,r){i!==null?ao(n,e,t,i,r):Xh(n,e,t)}function A0(n,e,t,i){n.removeChild(e,t,i)}function Cl(n,e){return n.parentNode(e)}function I0(n,e){return n.nextSibling(e)}function R0(n,e,t){return P0(n,e,t)}function N0(n,e,t){return n.type&40?on(n,t):null}var P0=N0,_f;function Dl(n,e,t,i){let r=C0(n,i,e),s=e[Pt],o=i.parent||e[sn],a=R0(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)yf(s,r,t[c],a,!1);else yf(s,r,t,a,!1);_f!==void 0&&_f(s,i,e,t,r)}function Zs(n,e){if(e!==null){let t=e.type;if(t&3)return on(e,n);if(t&4)return Ec(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Zs(n,i);{let r=n[e.index];return Nn(r)?Ec(-1,r):xn(r)}}else{if(t&32)return Tl(e,n)()||xn(n[e.index]);{let i=Yh(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=ds(n[_n]);return Zs(r,i)}else return Zs(n,e.next)}}}return null}function Yh(n,e){if(e!==null){let i=n[_n][sn],r=e.projection;return i.projection[r]}return null}function Ec(n,e){let t=Dt+n+1;if(t<e.length){let i=e[t],r=i[be].firstChild;if(r!==null)return Zs(i,r)}return e[Ei]}function L0(n,e,t){let i=Cl(n,e);i&&A0(n,i,e,t)}function Al(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&wi(xn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Al(n,e,t.child,i,r,s,!1),or(e,n,r,a,s);else if(c&32){let l=Tl(t,i),u;for(;u=l();)or(e,n,r,u,s);or(e,n,r,a,s)}else c&16?O0(n,e,i,t,r,s):or(e,n,r,a,s);t=o?t.projectionNext:t.next}}function wo(n,e,t,i,r,s){Al(t,i,n.firstChild,e,r,s,!1)}function O0(n,e,t,i,r,s){let o=t[_n],c=o[sn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];or(e,n,r,u,s)}else{let l=c,u=o[St];Fh(i)&&(l.flags|=128),Al(n,e,l,u,r,s,!0)}}function F0(n,e,t,i,r){let s=t[Ei],o=xn(t);s!==o&&or(e,n,i,s,r);for(let a=Dt;a<t.length;a++){let c=t[a];wo(c[be],c,n,e,i,s)}}function U0(n,e,t){n.setAttribute(e,"style",t)}function Zh(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Jh(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&lc(n,e,i),r!==null&&Zh(n,e,r),s!==null&&U0(n,e,s)}var xs={};function ht(n=1){Kh(Pn(),tt(),Eo()+n,!1)}function Kh(n,e,t,i){if(!i)if((e[Me]&3)===3){let s=n.preOrderCheckHooks;s!==null&&qs(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Xs(e,s,0,t)}Si(t)}function bo(n,e=Ve.Default){let t=tt();if(t===null)return Je(n,e);let i=Mn();return Rh(i,t,en(n),e)}function Qh(n,e,t,i,r,s){let o=We(null);try{let a=null;r&Zn.SignalBased&&(a=e[i][Pd]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Zn.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):sh(e,a,i,s)}finally{We(o)}}function k0(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Si(~r);else{let s=r,o=t[++i],a=t[++i];Ny(o,s);let c=e[s];a(2,c)}}}finally{Si(-1)}}function To(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Rn]=r,d[Me]=i|4|128|8|64,(l!==null||n&&n[Me]&2048)&&(d[Me]|=2048),uh(d),d[St]=d[mr]=n,d[Nt]=t,d[rn]=o||n&&n[rn],d[Pt]=a||n&&n[Pt],d[ur]=c||n&&n[ur]||null,d[sn]=s,d[_o]=s0(),d[as]=u,d[nh]=l,d[_n]=e.type==2?n[_n]:d,d}function Co(n,e,t,i,r){let s=n.data[e];if(s===null)s=B0(n,e,t,i,r),Ry()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Dy();s.injectorIndex=o===null?-1:o.injectorIndex}return _s(s,!0),s}function B0(n,e,t,i,r){let s=hh(),o=ph(),a=o?s:s&&s.parent,c=n.data[e]=j0(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function ep(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function tp(n,e,t,i,r){let s=Eo(),o=i&2;try{Si(-1),o&&e.length>An&&Kh(n,e,An,!1),gn(o?2:0,r),t(i,r)}finally{Si(s),gn(o?3:1,r)}}function np(n,e,t){if(rh(e)){let i=We(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{We(i)}}}function ip(n,e,t){fh()&&(K0(n,e,t,on(t,e)),(t.flags&64)===64&&cp(n,e,t))}function rp(n,e,t=on){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function sp(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Il(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Il(n,e,t,i,r,s,o,a,c,l,u){let d=An+i,f=d+r,m=V0(d,f),g=typeof l=="function"?l():l;return m[be]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function V0(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:xs);return t}function H0(n,e,t,i){let s=i.get(h0,zh)||t===yn.ShadowDom,o=n.selectRootElement(e,s);return z0(o),o}function z0(n){G0(n)}var G0=()=>null;function W0(n,e,t,i){let r=dp(e);r.push(t),n.firstCreatePass&&fp(n).push(i,r.length-1)}function j0(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return by()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function xf(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Zn.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Mf(i,t,l,a,c):Mf(i,t,l,a)}return i}function Mf(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function $0(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,m=f?f.inputs:null,g=f?f.outputs:null;c=xf(0,d.inputs,u,c,m),l=xf(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!tl(e)?a_(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function q0(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function X0(n,e,t,i,r,s,o,a){let c=on(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Rl(n,t,u,i,r),ol(e)&&Y0(t,e.index)):e.type&3?(i=q0(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function Y0(n,e){let t=bi(e,n);t[Me]&16||(t[Me]|=64)}function op(n,e,t,i){if(fh()){let r=i===null?null:{"":-1},s=e_(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&ap(n,e,t,o,r,a),r&&t_(t,i,r)}t.mergedAttrs=el(t.mergedAttrs,t.attrs)}function ap(n,e,t,i,r,s){for(let l=0;l<i.length;l++)qy(Ch(t,e),n,i[l].type);i_(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=ep(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=el(t.mergedAttrs,u.hostAttrs),r_(n,t,e,c,u),n_(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}$0(n,t,s)}function Z0(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;J0(o)!=a&&o.push(a),o.push(t,i,s)}}function J0(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function K0(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;ol(t)&&s_(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Ch(t,e),wi(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=fr(e,n,a,t);if(wi(l,e),o!==null&&o_(e,a-r,l,c,t,o),ys(c)){let u=bi(t.index,e);u[Nt]=fr(e,n,a,t)}}}function cp(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Py();try{Si(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];gc(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Q0(c,l)}}finally{Si(-1),gc(o)}}function Q0(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function e_(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Bv(e,o.selectors,!1))if(i||(i=[]),ys(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Sc(n,e,c)}else i.unshift(o),Sc(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Sc(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function t_(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ze(-301,!1);i.push(e[r],s)}}}function n_(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ys(e)&&(t[""]=n)}}function i_(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function r_(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=rs(r.type,!0)),o=new fs(s,ys(r),bo);n.blueprint[i]=o,t[i]=o,Z0(n,e,i,ep(n,t,r.hostVars,xs),r)}function s_(n,e,t){let i=on(e,n),r=sp(t),s=n[rn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Do(n,To(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function o_(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Qh(i,t,c,l,u,d)}}function a_(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function lp(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function up(n,e){let t=n.contentQueries;if(t!==null){let i=We(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];fl(s),a.contentQueries(2,e[o],o)}}}finally{We(i)}}}function Do(n,e){return n[ls]?n[uf][nn]=e:n[ls]=e,n[uf]=e,e}function wc(n,e,t){fl(0);let i=We(null);try{e(n,t)}finally{We(i)}}function dp(n){return n[cs]||(n[cs]=[])}function fp(n){return n.cleanup||(n.cleanup=[])}function hp(n,e){let t=n[ur],i=t?t.get(In,null):null;i&&i.handleError(e)}function Rl(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Qh(u,l,i,a,c,r)}}function c_(n,e,t){let i=gy(e,n);_0(n[Pt],i,t)}function l_(n,e){let t=bi(e,n),i=t[be];u_(i,t);let r=t[Rn];r!==null&&t[as]===null&&(t[as]=Sl(r,t[ur])),Nl(i,t,t[Nt])}function u_(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Nl(n,e,t){hl(e);try{let i=n.viewQuery;i!==null&&wc(1,i,t);let r=n.template;r!==null&&tp(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Dn]?.finishViewCreation(n),n.staticContentQueries&&up(n,e),n.staticViewQueries&&wc(2,n.viewQuery,t);let s=n.components;s!==null&&d_(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Me]&=-5,pl()}}function d_(n,e){for(let t=0;t<e.length;t++)l_(n,e[t])}function Pl(n,e,t,i){let r=We(null);try{let s=e.tView,a=n[Me]&4096?4096:16,c=To(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[vs]=l;let u=n[Dn];return u!==null&&(c[Dn]=u.createEmbeddedView(s)),Nl(s,c,t),c}finally{We(r)}}function f_(n,e){let t=Dt+e;if(t<n.length)return n[t]}function co(n,e){return!e||e.firstChild===null||Fh(n)}function Ll(n,e,t,i=!0){let r=e[be];if(S0(r,e,n,t),i){let o=Ec(t,n),a=e[Pt],c=Cl(a,n[Ei]);c!==null&&M0(r,n[sn],a,e,c,o)}let s=e[as];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function h_(n,e){let t=hs(n,e);return t!==void 0&&So(t[be],t),t}function lo(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(xn(s)),Nn(s)&&p_(s,i);let o=t.type;if(o&8)lo(n,e,t.child,i);else if(o&32){let a=Tl(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Yh(e,t);if(Array.isArray(a))i.push(...a);else{let c=ds(e[_n]);lo(c[be],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function p_(n,e){for(let t=Dt;t<n.length;t++){let i=n[t],r=i[be].firstChild;r!==null&&lo(i[be],i,r,e)}n[Ei]!==n[Rn]&&e.push(n[Ei])}var pp=[];function m_(n){return n[Mi]??g_(n)}function g_(n){let e=pp.pop()??Object.create(y_);return e.lView=n,e}function v_(n){n.lView[Mi]!==n&&(n.lView=null,pp.push(n))}var y_=qn(Cn({},Ld),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{us(n.lView)},consumerOnSignalRead(){this.lView[Mi]=this}}),mp=100;function gp(n,e=!0,t=0){let i=n[rn],r=i.rendererFactory,s=!1;s||r.begin?.();try{__(n,t)}catch(o){throw e&&hp(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function __(n,e){bc(n,e);let t=0;for(;ul(n);){if(t===mp)throw new Ze(103,!1);t++,bc(n,1)}}function x_(n,e,t,i){let r=e[Me];if((r&256)===256)return;let s=!1;!s&&e[rn].inlineEffectRunner?.flush(),hl(e);let o=null,a=null;!s&&M_(n)&&(a=m_(e),o=Od(a));try{uh(e),Iy(n.bindingStartIndex),t!==null&&tp(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&qs(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Xs(e,d,0,null),Ka(e,0)}if(E_(e),vp(e,0),n.contentQueries!==null&&up(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&qs(e,d)}else{let d=n.contentHooks;d!==null&&Xs(e,d,1),Ka(e,1)}k0(n,e);let l=n.components;l!==null&&_p(e,l,0);let u=n.viewQuery;if(u!==null&&wc(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&qs(e,d)}else{let d=n.viewHooks;d!==null&&Xs(e,d,2),Ka(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Ja]){for(let d of e[Ja])d();e[Ja]=null}s||(e[Me]&=-73)}catch(c){throw us(e),c}finally{a!==null&&(Fd(a,o),v_(a)),pl()}}function M_(n){return n.type!==2}function vp(n,e){for(let t=kh(n);t!==null;t=Bh(t))for(let i=Dt;i<t.length;i++){let r=t[i];yp(r,e)}}function E_(n){for(let e=kh(n);e!==null;e=Bh(e)){if(!(e[Me]&sl.HasTransplantedViews))continue;let t=e[dr];for(let i=0;i<t.length;i++){let r=t[i],s=r[St];_y(r)}}}function S_(n,e,t){let i=bi(e,n);yp(i,t)}function yp(n,e){ll(n)&&bc(n,e)}function bc(n,e){let i=n[be],r=n[Me],s=n[Mi],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ka(s)),s&&(s.dirty=!1),n[Me]&=-9217,o)x_(i,n,i.template,n[Nt]);else if(r&8192){vp(n,1);let a=i.components;a!==null&&_p(n,a,1)}}function _p(n,e,t){for(let i=0;i<e.length;i++)S_(n,e[i],t)}function Ol(n){for(n[rn].changeDetectionScheduler?.notify();n;){n[Me]|=64;let e=ds(n);if(cy(n)&&!e)return n;n=e}return null}var ps=class{get rootNodes(){let e=this._lView,t=e[be];return lo(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Nt]}set context(e){this._lView[Nt]=e}get destroyed(){return(this._lView[Me]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[St];if(Nn(e)){let t=e[no],i=t?t.indexOf(this):-1;i>-1&&(hs(e,i),Qs(t,i))}this._attachedToViewContainer=!1}So(this._lView[be],this._lView)}onDestroy(e){dh(this._lView,e)}markForCheck(){Ol(this._cdRefInjectingView||this._lView)}detach(){this._lView[Me]&=-129}reattach(){mc(this._lView),this._lView[Me]|=128}detectChanges(){this._lView[Me]|=1024,gp(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ze(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,$h(this._lView[be],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ze(902,!1);this._appRef=e,mc(this._lView)}},ms=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=T_;let n=e;return n})(),w_=ms,b_=class extends w_{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Pl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new ps(r)}};function T_(){return Fl(Mn(),tt())}function Fl(n,e){return n.type&4?new b_(e,n,gr(n,e)):null}var rA=new RegExp(`^(\\d+)*(${d0}|${u0})*(.*)`);var C_=()=>null;function uo(n,e){return C_(n,e)}var Tc=class{},Cc=class{},fo=class{};function D_(n){let e=Error(`No component factory found for ${tn(n)}.`);return e[A_]=n,e}var A_="ngComponent";var Dc=class{resolveComponentFactory(e){throw D_(e)}},Ul=(()=>{let e=class e{};e.NULL=new Dc;let n=e;return n})(),gs=class{},kl=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>I_();let n=e;return n})();function I_(){let n=tt(),e=Mn(),t=bi(e.index,n);return(_i(t)?t:n)[Pt]}var R_=(()=>{let e=class e{};e.\u0275prov=ft({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),ic={};var Ef=new Set;function Bl(n){Ef.has(n)||(Ef.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Sf(...n){}function N_(){let n=typeof ts.requestAnimationFrame=="function",e=ts[n?"requestAnimationFrame":"setTimeout"],t=ts[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var xt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new sr(!1),this.onMicrotaskEmpty=new sr(!1),this.onStable=new sr(!1),this.onError=new sr(!1),typeof Zone>"u")throw new Ze(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=N_().nativeRequestAnimationFrame,O_(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ze(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ze(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,P_,Sf,Sf);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},P_={};function Vl(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function L_(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(ts,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Ac(n),n.isCheckStableRunning=!0,Vl(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Ac(n))}function O_(n){let e=()=>{L_(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(F_(a))return t.invokeTask(r,s,o,a);try{return wf(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),bf(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return wf(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),bf(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ac(n),Vl(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ac(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function wf(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function bf(n){n._nesting--,Vl(n)}function F_(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var xp=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=ft({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Ic(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Kd(r,a);else if(s==2){let c=a,l=e[++o];i=Kd(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Rc=class extends Ul{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=lr(e);return new ho(t,this.ngModule)}};function Tf(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function U_(n){let e=n.toLowerCase();return e==="svg"?fy:e==="math"?hy:null}var Nc=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=vo(i);let r=this.injector.get(e,ic,i);return r!==ic||t===ic?r:this.parentInjector.get(e,t,i)}},ho=class extends fo{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Tf(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Tf(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Gv(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=We(null);try{r=r||this.ngModule;let o=r instanceof Jn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Nc(e,o):e,c=a.get(gs,null);if(c===null)throw new Ze(407,!1);let l=a.get(R_,null),u=a.get(xp,null),d=a.get(Tc,null),f={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",v=i?H0(m,i,this.componentDef.encapsulation,a):jh(m,g,U_(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let h=null;v!==null&&(h=Sl(v,a,!0));let b=Il(0,null,null,1,0,null,null,null,null,null,null),M=To(null,b,null,p,null,null,f,m,a,null,h);hl(M);let w,N;try{let C=this.componentDef,T,B=null;C.findHostDirectiveDefs?(T=[],B=new Map,C.findHostDirectiveDefs(C,T,B),T.push(C)):T=[C];let E=k_(M,v),_=B_(E,v,C,T,M,f,m);N=cl(b,An),v&&z_(m,C,v,i),t!==void 0&&G_(N,this.ngContentSelectors,t),w=H_(_,C,T,B,M,[W_]),Nl(b,M,null)}finally{pl()}return new Pc(this.componentType,w,gr(N,M),M,N)}finally{We(s)}}},Pc=class extends Cc{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new ps(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Rl(s[be],s,r,e,t),this.previousInputValues.set(e,t);let o=bi(this._tNode.index,s);Ol(o)}}get injector(){return new xi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function k_(n,e){let t=n[be],i=An;return n[i]=e,Co(t,i,2,"#host",null)}function B_(n,e,t,i,r,s,o){let a=r[be];V_(i,n,e,o);let c=null;e!==null&&(c=Sl(e,r[ur]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=To(r,sp(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Sc(a,n,i.length-1),Do(r,d),r[n.index]=d}function V_(n,e,t,i){for(let r of n)e.mergedAttrs=el(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Ic(e,e.mergedAttrs,!0),t!==null&&Jh(i,t,e))}function H_(n,e,t,i,r,s){let o=Mn(),a=r[be],c=on(o,r);ap(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=fr(r,a,d,o);wi(f,r)}cp(a,r,o),c&&wi(c,r);let l=fr(r,a,o.directiveStart+o.componentOffset,o);if(n[Nt]=r[Nt]=l,s!==null)for(let u of s)u(l,e);return np(a,o,r),l}function z_(n,e,t,i){if(i)lc(n,t,["ng-version","17.3.9"]);else{let{attrs:r,classes:s}=Wv(e.selectors[0]);r&&lc(n,t,r),s&&s.length>0&&Zh(n,t,s.join(" "))}}function G_(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function W_(){let n=Mn();vl(tt()[be],n)}var Ao=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=j_;let n=e;return n})();function j_(){let n=Mn();return Ep(n,tt())}var $_=Ao,Mp=class extends $_{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return gr(this._hostTNode,this._hostLView)}get injector(){return new xi(this._hostTNode,this._hostLView)}get parentInjector(){let e=yl(this._hostTNode,this._hostLView);if(wh(e)){let t=so(e,this._hostLView),i=ro(e),r=t[be].data[i+8];return new xi(r,t)}else return new xi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Cf(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Dt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=uo(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,co(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!ay(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ho(lr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Jn,null);v&&(s=v)}let u=lr(c.componentType??{}),d=uo(this._lContainer,u?.id??null),f=d?.firstChild??null,m=c.create(l,r,f,s);return this.insertImpl(m.hostView,a,co(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(yy(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[St],l=new Mp(c,c[sn],c[St]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Ll(o,r,s,i),e.attachToViewContainerRef(),zf(rc(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Cf(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=hs(this._lContainer,t);i&&(Qs(rc(this._lContainer),t),So(i[be],i))}detach(e){let t=this._adjustIndex(e,-1),i=hs(this._lContainer,t);return i&&Qs(rc(this._lContainer),t)!=null?new ps(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Cf(n){return n[no]}function rc(n){return n[no]||(n[no]=[])}function Ep(n,e){let t,i=e[n.index];return Nn(i)?t=i:(t=lp(i,e,null,n),e[n.index]=t,Do(e,t)),X_(t,e,n,i),new Mp(t,n,e)}function q_(n,e){let t=n[Pt],i=t.createComment(""),r=on(e,n),s=Cl(t,r);return ao(t,s,i,I0(t,r),!1),i}var X_=J_,Y_=()=>!1;function Z_(n,e,t){return Y_(n,e,t)}function J_(n,e,t,i){if(n[Ei])return;let r;t.type&8?r=xn(i):r=q_(e,t),n[Ei]=r}var Lc=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Oc=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Hl(e,t).matches!==null&&this.queries[t].setDirty()}},Fc=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=sx(e):this.predicate=e}},Uc=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},kc=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,K_(t,s)),this.matchTNodeWithReadOption(e,t,Ys(t,e,s,!1,!1))}else i===ms?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Ys(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ti||r===Ao||r===ms&&t.type&4)this.addMatch(t.index,-2);else{let s=Ys(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function K_(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function Q_(n,e){return n.type&11?gr(n,e):n.type&4?Fl(n,e):null}function ex(n,e,t,i){return t===-1?Q_(e,n):t===-2?tx(n,e,i):fr(n,n[be],t,e)}function tx(n,e,t){if(t===Ti)return gr(e,n);if(t===ms)return Fl(e,n);if(t===Ao)return Ep(e,n)}function Sp(n,e,t,i){let r=e[Dn].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(ex(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Bc(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Sp(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Dt;d<u.length;d++){let f=u[d];f[vs]===f[St]&&Bc(f[be],f,l,i)}if(u[dr]!==null){let d=u[dr];for(let f=0;f<d.length;f++){let m=d[f];Bc(m[be],m,l,i)}}}}}return i}function nx(n,e){return n[Dn].queries[e].queryList}function ix(n,e,t){let i=new xc((t&4)===4);return W0(n,e,i,i.destroy),(e[Dn]??=new Oc).queries.push(new Lc(i))-1}function rx(n,e,t){let i=Pn();return i.firstCreatePass&&(ox(i,new Fc(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),ix(i,tt(),e)}function sx(n){return n.split(",").map(e=>e.trim())}function ox(n,e,t){n.queries===null&&(n.queries=new Uc),n.queries.track(new kc(e,t))}function Hl(n,e){return n.queries.getByIndex(e)}function ax(n,e){let t=n[be],i=Hl(t,e);return i.crossesNgTemplate?Bc(t,n,e,[]):Sp(t,n,i,e)}var hr=class{};var po=class extends hr{constructor(e){super(),this.componentFactoryResolver=new Rc(this),this.instance=null;let t=new to([...e.providers,{provide:hr,useValue:this},{provide:Ul,useValue:this.componentFactoryResolver}],e.parent||rl(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function cx(n,e,t=null){return new po({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var wp=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new es(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function bp(n,e,t){return n[e]=t}function pr(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function lx(n,e,t,i){let r=pr(n,e,t);return pr(n,e+1,i)||r}function ux(n){return(n.flags&32)===32}function dx(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Co(e,n,4,o||null,io(l,a));op(e,t,u,io(l,c)),vl(e,u);let d=u.tView=Il(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Vc(n,e,t,i,r,s,o,a){let c=tt(),l=Pn(),u=n+An,d=l.firstCreatePass?dx(u,l,c,e,t,i,r,s,o):l.data[u];_s(d,!1);let f=fx(l,c,d,n);ml()&&Dl(l,c,f,d),wi(f,c);let m=lp(f,c,f,d);return c[u]=m,Do(c,m),Z_(m,d,c),al(d)&&ip(l,c,d),o!=null&&rp(c,d,a),Vc}var fx=hx;function hx(n,e,t,i){return gl(!0),e[Pt].createComment("")}function px(n,e,t,i){return pr(n,dl(),t)?e+Jc(t)+i:xs}function kt(n,e,t){let i=tt(),r=dl();if(pr(i,r,e)){let s=Pn(),o=Fy();X0(s,o,i,n,e,i[Pt],t,!1)}return kt}function Df(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Rl(n,t,s[o],o,i)}var Hc=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function sc(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function mx(n,e,t){let i,r,s=0,o=n.length-1;if(Array.isArray(e)){let a=e.length-1;for(;s<=o&&s<=a;){let c=n.at(s),l=e[s],u=sc(s,c,s,l,t);if(u!==0){u<0&&n.updateValue(s,l),s++;continue}let d=n.at(o),f=e[a],m=sc(o,d,a,f,t);if(m!==0){m<0&&n.updateValue(o,f),o--,a--;continue}let g=t(s,c),v=t(o,d),p=t(s,l);if(Object.is(p,v)){let h=t(a,f);Object.is(h,g)?(n.swap(s,o),n.updateValue(o,f),a--,o--):n.move(o,s),n.updateValue(s,l),s++;continue}if(i??=new mo,r??=If(n,s,o,t),zc(n,i,s,p))n.updateValue(s,l),s++,o++;else if(r.has(p))i.set(g,n.detach(s)),o--;else{let h=n.create(s,e[s]);n.attach(s,h),s++,o++}}for(;s<=a;)Af(n,i,t,s,e[s]),s++}else if(e!=null){let a=e[Symbol.iterator](),c=a.next();for(;!c.done&&s<=o;){let l=n.at(s),u=c.value,d=sc(s,l,s,u,t);if(d!==0)d<0&&n.updateValue(s,u),s++,c=a.next();else{i??=new mo,r??=If(n,s,o,t);let f=t(s,u);if(zc(n,i,s,f))n.updateValue(s,u),s++,o++,c=a.next();else if(!r.has(f))n.attach(s,n.create(s,u)),s++,o++,c=a.next();else{let m=t(s,l);i.set(m,n.detach(s)),o--}}}for(;!c.done;)Af(n,i,t,n.length,c.value),c=a.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(a=>{n.destroy(a)})}function zc(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function Af(n,e,t,i,r){if(zc(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function If(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var mo=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};var Gc=class{constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Dt}};function Ai(n){return n}var Wc=class{constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Ii(n,e,t,i,r,s,o,a,c,l,u,d,f){Bl("NgControlFlow");let m=c!==void 0,g=tt(),v=a?o.bind(g[_n][Nt]):o,p=new Wc(m,v);g[An+n]=p,Vc(n+1,e,t,i,r,s),m&&Vc(n+2,c,l,u,d,f)}var jc=class extends Hc{constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-Dt}at(e){return this.getLView(e)[Nt].$implicit}attach(e,t){let i=t[as];this.needsIndexUpdate||=e!==this.length,Ll(this.lContainer,t,e,co(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,gx(this.lContainer,e)}create(e,t){let i=uo(this.lContainer,this.templateTNode.tView.ssrId);return Pl(this.hostLView,this.templateTNode,new Gc(this.lContainer,t,e),{dehydratedView:i})}destroy(e){So(e[be],e)}updateValue(e,t){this.getLView(e)[Nt].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Nt].$index=e}getLView(e){return vx(this.lContainer,e)}};function Ri(n){let e=We(null),t=Eo();try{let i=tt(),r=i[be],s=i[t];if(s.liveCollection===void 0){let a=t+1,c=Rf(i,a),l=Nf(r,a);s.liveCollection=new jc(c,i,l)}else s.liveCollection.reset();let o=s.liveCollection;if(mx(o,n,s.trackByFn),o.updateIndexes(),s.hasEmptyBlock){let a=dl(),c=o.length===0;if(pr(i,a,c)){let l=t+2,u=Rf(i,l);if(c){let d=Nf(r,l),f=uo(u,d.tView.ssrId),m=Pl(i,d,void 0,{dehydratedView:f});Ll(u,m,0,co(d,f))}else h_(u,0)}}}finally{We(e)}}function Rf(n,e){return n[e]}function gx(n,e){return hs(n,e)}function vx(n,e){return f_(n,e)}function Nf(n,e){return cl(n,e)}function yx(n,e,t,i,r,s){let o=e.consts,a=io(o,r),c=Co(e,n,2,i,a);return op(e,t,c,io(o,s)),c.attrs!==null&&Ic(c,c.attrs,!1),c.mergedAttrs!==null&&Ic(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function de(n,e,t,i){let r=tt(),s=Pn(),o=An+n,a=r[Pt],c=s.firstCreatePass?yx(o,s,r,e,t,i):s.data[o],l=_x(s,r,c,a,e,n);r[o]=l;let u=al(c);return _s(c,!0),Jh(a,l,c),!ux(c)&&ml()&&Dl(s,r,l,c),Ey()===0&&wi(l,r),Sy(),u&&(ip(s,r,c),np(s,c,r)),i!==null&&rp(r,c),de}function he(){let n=Mn();ph()?Ay():(n=n.parent,_s(n,!1));let e=n;Ty(e)&&Cy(),wy();let t=Pn();return t.firstCreatePass&&(vl(t,n),rh(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Hy(e)&&Df(t,e,tt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&zy(e)&&Df(t,e,tt(),e.stylesWithoutHost,!1),he}function nt(n,e,t,i){return de(n,e,t,i),he(),nt}var _x=(n,e,t,i,r,s)=>(gl(!0),jh(i,r,Uy()));function Io(){return tt()}var go="en-US";var xx=go;function Mx(n){typeof n=="string"&&(xx=n.toLowerCase().replace(/_/g,"-"))}function Ni(n,e,t,i){let r=tt(),s=Pn(),o=Mn();return Sx(s,r,r[Pt],o,n,e,i),Ni}function Ex(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[cs],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function Sx(n,e,t,i,r,s,o){let a=al(i),l=n.firstCreatePass&&fp(n),u=e[Nt],d=dp(e),f=!0;if(i.type&3||o){let v=on(i,e),p=o?o(v):v,h=d.length,b=o?w=>o(xn(w[i.index])):i.index,M=null;if(!o&&a&&(M=Ex(n,e,r,i.index)),M!==null){let w=M.__ngLastListenerFn__||M;w.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,f=!1}else{s=Lf(i,e,u,s,!1);let w=t.listen(p,r,s);d.push(s,w),l&&l.push(r,b,h,h+1)}}else s=Lf(i,e,u,s,!1);let m=i.outputs,g;if(f&&m!==null&&(g=m[r])){let v=g.length;if(v)for(let p=0;p<v;p+=2){let h=g[p],b=g[p+1],N=e[h][b].subscribe(s),C=d.length;d.push(s,N),l&&l.push(r,i.index,C,-(C+1))}}}function Pf(n,e,t,i){let r=We(null);try{return gn(6,e,t),t(i)!==!1}catch(s){return hp(n,s),!1}finally{gn(7,e,t),We(r)}}function Lf(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?bi(n.index,e):e;Ol(a);let c=Pf(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Pf(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function yr(n=1){return Oy(n)}function Tp(n,e,t){rx(n,e,t)}function Cp(n){let e=tt(),t=Pn(),i=gh();fl(i+1);let r=Hl(t,i);if(n.dirty&&vy(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=ax(e,i);n.reset(s,n0),n.notifyOnChanges()}return!0}return!1}function Dp(){return nx(tt(),gh())}function Ce(n,e=""){let t=tt(),i=Pn(),r=n+An,s=i.firstCreatePass?Co(i,r,1,e,null):i.data[r],o=wx(i,t,s,e,n);t[r]=o,ml()&&Dl(i,t,o,s),_s(s,!1)}var wx=(n,e,t,i,r)=>(gl(!0),y0(e[Pt],i));function Pi(n){return Li("",n,""),Pi}function Li(n,e,t){let i=tt(),r=px(i,n,e,t);return r!==xs&&c_(i,Eo(),r),Li}var bx=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Qf(!1,i.type),s=r.length>0?cx([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=ft({token:e,providedIn:"environment",factory:()=>new e(Je(Jn))});let n=e;return n})();function Xt(n){Bl("NgStandalone"),n.getStandaloneInjector=e=>e.get(bx).getOrCreateStandaloneInjector(n)}function _r(n,e,t,i){return Tx(tt(),mh(),n,e,t,i)}function Ro(n,e,t,i,r){return Cx(tt(),mh(),n,e,t,i,r)}function Ap(n,e){let t=n[e];return t===xs?void 0:t}function Tx(n,e,t,i,r,s){let o=e+t;return pr(n,o,r)?bp(n,o+1,s?i.call(s,r):i(r)):Ap(n,o+1)}function Cx(n,e,t,i,r,s,o){let a=e+t;return lx(n,a,r,s)?bp(n,a+2,o?i.call(o,r,s):i(r,s)):Ap(n,a+2)}var Ip=new ct("");function zl(n){return!!n&&typeof n.then=="function"}function Rp(n){return!!n&&typeof n.subscribe=="function"}var Dx=new ct(""),Np=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=gt(Dx,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(zl(o))i.push(o);else if(Rp(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ax=new ct("");function Ix(){kd(()=>{throw new Ze(600,!1)})}function Rx(n){return n.isBoundToModule}function Nx(n,e,t){try{let i=t();return zl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Gl=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=gt(Lh),this.afterRenderEffectManager=gt(xp),this.externalTestViews=new Set,this.beforeRender=new Xn,this.afterTick=new Xn,this.componentTypes=[],this.components=[],this.isStable=gt(wp).hasPendingTasks.pipe(Ya(i=>!i)),this._injector=gt(Jn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof fo;if(!this._injector.get(Np).done){let m=!s&&qv(i),g=!1;throw new Ze(405,g)}let a;s?a=i:a=this._injector.get(Ul).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=Rx(a)?void 0:this._injector.get(hr),l=r||a.selector,u=a.create(_l.NULL,[],l,c),d=u.location.nativeElement,f=u.injector.get(Ip,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),oc(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new Ze(101,!1);let r=We(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,We(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===mp)throw new Ze(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)Px(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>$c(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>$c(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;oc(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(Ax,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>oc(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Ze(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function oc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Px(n,e,t){!e&&!$c(n)||Lx(n,t,e)}function $c(n){return ul(n)}function Lx(n,e,t){let i;t?(i=0,n[Me]|=1024):n[Me]&64?i=0:i=1,gp(n,e,i)}var Ox=(()=>{let e=class e{constructor(){this.zone=gt(xt),this.applicationRef=gt(Gl)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Fx(n){return[{provide:xt,useFactory:n},{provide:os,multi:!0,useFactory:()=>{let e=gt(Ox,{optional:!0});return()=>e.initialize()}},{provide:os,multi:!0,useFactory:()=>{let e=gt(Vx);return()=>{e.initialize()}}},{provide:Lh,useFactory:Ux}]}function Ux(){let n=gt(xt),e=gt(In);return t=>n.runOutsideAngular(()=>e.handleError(t))}function kx(n){let e=Fx(()=>new xt(Bx(n)));return Kf([[],e])}function Bx(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Vx=(()=>{let e=class e{constructor(){this.subscription=new Ut,this.initialized=!1,this.zone=gt(xt),this.pendingTasks=gt(wp)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{xt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{xt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Hx(){return typeof $localize<"u"&&$localize.locale||go}var Wl=new ct("",{providedIn:"root",factory:()=>gt(Wl,Ve.Optional|Ve.SkipSelf)||Hx()});var Pp=new ct("");var Js=null;function zx(n=[],e){return _l.create({name:e,providers:[{provide:yo,useValue:"platform"},{provide:Pp,useValue:new Set([()=>Js=null])},...n]})}function Gx(n=[]){if(Js)return Js;let e=zx(n);return Js=e,Ix(),Wx(e),e}function Wx(n){n.get(Ml,null)?.forEach(t=>t())}function Lp(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=Gx(i),s=[kx(),...t||[]],a=new po({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(xt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(In,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),f=r.get(Pp);return f.add(d),a.onDestroy(()=>{u.unsubscribe(),f.delete(d)}),Nx(l,c,()=>{let m=a.get(Np);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(Wl,go);Mx(g||go);let v=a.get(Gl);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}var Fp=null;function $l(){return Fp}function Up(n){Fp??=n}var No=class{};var Kn=new ct("");function kp(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var jl=/\s+/,Op=[],Qn=(()=>{let e=class e{constructor(i,r){this._ngEl=i,this._renderer=r,this.initialClasses=Op,this.stateMap=new Map}set klass(i){this.initialClasses=i!=null?i.trim().split(jl):Op}set ngClass(i){this.rawClass=typeof i=="string"?i.trim().split(jl):i}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let i=this.rawClass;if(Array.isArray(i)||i instanceof Set)for(let r of i)this._updateState(r,!0);else if(i!=null)for(let r of Object.keys(i))this._updateState(r,!!i[r]);this._applyStateDiff()}_updateState(i,r){let s=this.stateMap.get(i);s!==void 0?(s.enabled!==r&&(s.changed=!0,s.enabled=r),s.touched=!0):this.stateMap.set(i,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let i of this.stateMap){let r=i[0],s=i[1];s.changed?(this._toggleClass(r,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),s.touched=!1}}_toggleClass(i,r){i=i.trim(),i.length>0&&i.split(jl).forEach(s=>{r?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};e.\u0275fac=function(r){return new(r||e)(bo(Ti),bo(kl))},e.\u0275dir=qf({type:e,selectors:[["","ngClass",""]],inputs:{klass:[Zn.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let n=e;return n})();var an=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=nl({type:e}),e.\u0275inj=Yc({});let n=e;return n})(),Bp="browser",qx="server";function ql(n){return n===qx}var Po=class{};var Zl=class extends No{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Jl=class n extends Zl{static makeCurrent(){Up(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Yx();return t==null?null:Zx(t)}resetBaseElement(){Ms=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return kp(document.cookie,e)}},Ms=null;function Yx(){return Ms=Ms||document.querySelector("base"),Ms?Ms.getAttribute("href"):null}function Zx(n){return new URL(n,document.baseURI).pathname}var Jx=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})(),Kl=new ct(""),Gp=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Ze(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Je(Kl),Je(xt))},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})(),Oo=class{constructor(e){this._doc=e}},Xl="ng-app-id",Wp=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ql(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Xl}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Xl),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Xl,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Je(Kn),Je(xl),Je(El,8),Je(vr))},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})(),Yl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},eu=/%COMP%/g,jp="%COMP%",Kx=`_nghost-${jp}`,Qx=`_ngcontent-${jp}`,eM=!0,tM=new ct("",{providedIn:"root",factory:()=>eM});function nM(n){return Qx.replace(eu,n)}function iM(n){return Kx.replace(eu,n)}function $p(n,e){return e.map(t=>t.replace(eu,n))}var Vp=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=ql(c),this.defaultRenderer=new Es(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===yn.ShadowDom&&(r=qn(Cn({},r),{encapsulation:yn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Fo?s.applyToHost(i):s instanceof Ss&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(r.encapsulation){case yn.Emulated:o=new Fo(l,u,r,this.appId,d,a,c,f);break;case yn.ShadowDom:return new Ql(l,u,i,r,a,c,this.nonce,f);default:o=new Ss(l,u,r,d,a,c,f);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Je(Gp),Je(Wp),Je(xl),Je(tM),Je(Kn),Je(vr),Je(xt),Je(El))},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})(),Es=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Yl[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Hp(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Hp(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ze(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Yl[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Yl[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Di.DashCase|Di.Important)?e.style.setProperty(t,i,r&Di.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Di.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=$l().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Hp(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ql=class extends Es{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=$p(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ss=class extends Es{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?$p(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Fo=class extends Ss{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=nM(l),this.hostAttr=iM(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},rM=(()=>{let e=class e extends Oo{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Je(Kn))},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})(),zp=["alt","control","meta","shift"],sM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},oM={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},aM=(()=>{let e=class e extends Oo{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$l().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),zp.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=sM[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),zp.forEach(a=>{if(a!==s){let c=oM[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Je(Kn))},e.\u0275prov=ft({token:e,factory:e.\u0275fac});let n=e;return n})();function qp(n,e){return Lp(Cn({rootComponent:n},cM(e)))}function cM(n){return{appProviders:[...hM,...n?.providers??[]],platformProviders:fM}}function lM(){Jl.makeCurrent()}function uM(){return new In}function dM(){return Hh(document),document}var fM=[{provide:vr,useValue:Bp},{provide:Ml,useValue:lM,multi:!0},{provide:Kn,useFactory:dM,deps:[]}];var hM=[{provide:yo,useValue:"root"},{provide:In,useFactory:uM,deps:[]},{provide:Kl,useClass:rM,multi:!0,deps:[Kn,xt,vr]},{provide:Kl,useClass:aM,multi:!0,deps:[Kn]},Vp,Wp,Gp,{provide:gs,useExisting:Vp},{provide:Po,useClass:Jx,deps:[]},[]];var Xp={providers:[]};var gd="164";var pM=0,Yp=1,mM=2;var _g=1,gM=2,Vn=3,ui=0,Ht=1,zn=2,ci=0,Vr=1,Zp=2,Jp=3,Kp=4,vM=5,zi=100,yM=101,_M=102,xM=103,MM=104,EM=200,SM=201,wM=202,bM=203,Lu=204,Ou=205,TM=206,CM=207,DM=208,AM=209,IM=210,RM=211,NM=212,PM=213,LM=214,OM=0,FM=1,UM=2,oa=3,kM=4,BM=5,VM=6,HM=7,vd=0,zM=1,GM=2,li=0,WM=1,jM=2,$M=3,qM=4,XM=5,YM=6,ZM=7;var Qp=300,Wr=301,jr=302,Fu=303,Uu=304,Aa=306,ku=1e3,Wi=1001,Bu=1002,Zt=1003,JM=1004;var Uo=1005;var dn=1006,tu=1007;var ji=1008;var di=1009,KM=1010,QM=1011,xg=1012,Mg=1013,$r=1014,ai=1015,Ia=1016,Eg=1017,Sg=1018,Fs=1020,eE=35902,tE=1021,nE=1022,wn=1023,iE=1024,rE=1025,Hr=1026,Rs=1027,sE=1028,wg=1029,oE=1030,bg=1031,Tg=1033,nu=33776,iu=33777,ru=33778,su=33779,em=35840,tm=35841,nm=35842,im=35843,rm=36196,sm=37492,om=37496,am=37808,cm=37809,lm=37810,um=37811,dm=37812,fm=37813,hm=37814,pm=37815,mm=37816,gm=37817,vm=37818,ym=37819,_m=37820,xm=37821,ou=36492,Mm=36494,Em=36495,aE=36283,Sm=36284,wm=36285,bm=36286;var aa=2300,ca=2301,au=2302,Tm=2400,Cm=2401,Dm=2402;var cE=3200,lE=3201,Cg=0,uE=1,oi="",En="srgb",pi="srgb-linear",yd="display-p3",Ra="display-p3-linear",la="linear",ot="srgb",ua="rec709",da="p3";var xr=7680;var Am=519,dE=512,fE=513,hE=514,Dg=515,pE=516,mE=517,gE=518,vE=519,Im=35044;var Rm="300 es",Gn=2e3,fa=2001,fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cu=Math.PI/180,Vu=180/Math.PI;function Us(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function yE(n,e){return(n%e+e)%e}function lu(n,e,t){return(1-t)*n+t*e}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],b=r[1],M=r[4],w=r[7],N=r[2],C=r[5],T=r[8];return s[0]=o*v+a*b+c*N,s[3]=o*p+a*M+c*C,s[6]=o*h+a*w+c*T,s[1]=l*v+u*b+d*N,s[4]=l*p+u*M+d*C,s[7]=l*h+u*w+d*T,s[2]=f*v+m*b+g*N,s[5]=f*p+m*M+g*C,s[8]=f*h+m*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uu=new Ae;function Ag(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _E(){let n=Ns("canvas");return n.style.display="block",n}var Nm={};function xE(n){n in Nm||(Nm[n]=!0,console.warn(n))}var Pm=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lm=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ko={[pi]:{transfer:la,primaries:ua,toReference:n=>n,fromReference:n=>n},[En]:{transfer:ot,primaries:ua,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ra]:{transfer:la,primaries:da,toReference:n=>n.applyMatrix3(Lm),fromReference:n=>n.applyMatrix3(Pm)},[yd]:{transfer:ot,primaries:da,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lm),fromReference:n=>n.applyMatrix3(Pm).convertLinearToSRGB()}},ME=new Set([pi,Ra]),Ke={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ME.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ko[e].toReference,r=ko[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ko[n].primaries},getTransfer:function(n){return n===oi?la:ko[n].transfer}};function zr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function du(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,Hu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Ns("canvas")),Mr.width=e.width,Mr.height=e.height;let i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zr(t[i]/255)*255):t[i]=zr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},EE=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fu(r[o].image)):s.push(fu(r[o]))}else s=fu(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function fu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var SE=0,mi=(()=>{class n extends fi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Wi,s=Wi,o=dn,a=ji,c=wn,l=di,u=n.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Us(),this.name="",this.source=new ha(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ku:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Bu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ku:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Bu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Qp,n.DEFAULT_ANISOTROPY=1,n})(),wt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,w=(m+1)/2,N=(h+1)/2,C=(u+f)/4,T=(d+v)/4,B=(g+p)/4;return M>w&&M>N?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=T/i):w>N?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=B/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=T/s,r=B/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zu=class extends fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new mi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends zu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gu=class extends mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==m||u!==g){let p=1-a,h=c*f+l*m+u*g+d*v,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){let N=Math.sqrt(M),C=Math.atan2(N,h*b);p=Math.sin(p*C)/N,a=Math.sin(a*C)/N}let w=a*b;if(c=c*p+f*w,l=l*p+m*w,u=u*p+g*w,d=d*p+v*w,p===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-a*m,e[t+2]=l*g+u*m+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Om.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new F,Om=new hi,$i=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Vo.subVectors(this.max,bs),Er.subVectors(e.a,bs),Sr.subVectors(e.b,bs),wr.subVectors(e.c,bs),ei.subVectors(Sr,Er),ti.subVectors(wr,Sr),Oi.subVectors(Er,wr);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Oi.z,Oi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Oi.z,0,-Oi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Oi.y,Oi.x,0];return!pu(t,Er,Sr,wr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Er,Sr,wr,Vo))?!1:(Ho.crossVectors(ei,ti),t=[Ho.x,Ho.y,Ho.z],pu(t,Er,Sr,wr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},On=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,Bo=new $i,Er=new F,Sr=new F,wr=new F,ei=new F,ti=new F,Oi=new F,bs=new F,Vo=new F,Ho=new F,Fi=new F;function pu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fi.fromArray(n,s);let a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var wE=new $i,Ts=new F,mu=new F,Ps=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);let t=Ts.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(mu)),this.expandByPoint(Ts.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new F,gu=new F,zo=new F,ni=new F,vu=new F,Go=new F,yu=new F,Wu=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gu.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(gu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(zo),a=ni.dot(this.direction),c=-ni.dot(zo),l=ni.lengthSq(),u=Math.abs(1-o*o),d,f,m,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gu).addScaledVector(zo,f),m}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);let i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){vu.subVectors(t,e),Go.subVectors(i,e),yu.crossVectors(vu,Go);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);let c=a*this.direction.dot(Go.crossVectors(ni,Go));if(c<0)return null;let l=a*this.direction.dot(vu.cross(ni));if(l<0||c+l>o)return null;let u=-a*ni.dot(yu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,u,d,f,m,g,v,p){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,TE)}lookAt(e,t,i){let r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ii.crossVectors(i,Gt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ii.crossVectors(i,Gt)),ii.normalize(),Wo.crossVectors(Gt,ii),r[0]=ii.x,r[4]=Wo.x,r[8]=Gt.x,r[1]=ii.y,r[5]=Wo.y,r[9]=Gt.y,r[2]=ii.z,r[6]=Wo.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],b=i[3],M=i[7],w=i[11],N=i[15],C=r[0],T=r[4],B=r[8],E=r[12],_=r[1],O=r[5],G=r[9],A=r[13],$=r[2],W=r[6],K=r[10],Z=r[14],V=r[3],Q=r[7],J=r[11],me=r[15];return s[0]=o*C+a*_+c*$+l*V,s[4]=o*T+a*O+c*W+l*Q,s[8]=o*B+a*G+c*K+l*J,s[12]=o*E+a*A+c*Z+l*me,s[1]=u*C+d*_+f*$+m*V,s[5]=u*T+d*O+f*W+m*Q,s[9]=u*B+d*G+f*K+m*J,s[13]=u*E+d*A+f*Z+m*me,s[2]=g*C+v*_+p*$+h*V,s[6]=g*T+v*O+p*W+h*Q,s[10]=g*B+v*G+p*K+h*J,s[14]=g*E+v*A+p*Z+h*me,s[3]=b*C+M*_+w*$+N*V,s[7]=b*T+M*O+w*W+N*Q,s[11]=b*B+M*G+w*K+N*J,s[15]=b*E+M*A+w*Z+N*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*m-i*c*m)+v*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],b=d*p*l-v*f*l+v*c*m-a*p*m-d*c*h+a*f*h,M=g*f*l-u*p*l-g*c*m+o*p*m+u*c*h-o*f*h,w=u*v*l-g*d*l+g*a*m-o*v*m-u*a*h+o*d*h,N=g*d*c-u*v*c-g*a*f+o*v*f+u*a*p-o*d*p,C=t*b+i*M+r*w+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=b*T,e[1]=(v*f*s-d*p*s-v*r*m+i*p*m+d*r*h-i*f*h)*T,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*h+i*c*h)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*m-i*c*m)*T,e[4]=M*T,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*h-t*c*h)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*m+t*c*m)*T,e[8]=w*T,e[9]=(g*d*s-u*v*s-g*i*m+t*v*m+u*i*h-t*d*h)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=N*T,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,m=s*u,g=s*d,v=o*u,p=o*d,h=a*d,b=c*l,M=c*u,w=c*d,N=i.x,C=i.y,T=i.z;return r[0]=(1-(v+h))*N,r[1]=(m+w)*N,r[2]=(g-M)*N,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(f+h))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(g+M)*T,r[9]=(p-b)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=br.set(r[0],r[1],r[2]).length(),o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);let l=1/s,u=1/o,d=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gn){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),m,g;if(a===Gn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fa)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gn){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,m=(i+r)*u,g,v;if(a===Gn)g=(o+s)*d,v=-2*d;else if(a===fa)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},br=new F,ln=new Et,bE=new F(0,0,0),TE=new F(1,1,1),ii=new F,Wo=new F,Gt=new F,Fm=new Et,Um=new hi,qi=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Fm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fm,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Um.setFromEuler(this),this.setFromQuaternion(Um,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},CE=0,km=new F,Tr=new hi,Un=new Et,jo=new F,Cs=new F,DE=new F,AE=new hi,Bm=new F(1,0,0),Vm=new F(0,1,0),Hm=new F(0,0,1),zm={type:"added"},IE={type:"removed"},Cr={type:"childadded",child:null},_u={type:"childremoved",child:null},Ki=(()=>{class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new qi,r=new hi,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ae}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Bm,t)}rotateY(t){return this.rotateOnAxis(Vm,t)}rotateZ(t){return this.rotateOnAxis(Hm,t)}translateOnAxis(t,i){return km.copy(t).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bm,t)}translateY(t){return this.translateOnAxis(Vm,t)}translateZ(t){return this.translateOnAxis(Hm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?jo.copy(t):jo.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Cs,jo,this.up):Un.lookAt(jo,Cs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(Un),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zm),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IE),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zm),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,AE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),un=new F,kn=new F,xu=new F,Bn=new F,Dr=new F,Ar=new F,Gm=new F,Mu=new F,Eu=new F,Su=new F,Ur=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),kn.subVectors(i,t),xu.subVectors(e,t);let o=un.dot(un),a=un.dot(kn),c=un.dot(xu),l=kn.dot(kn),u=kn.dot(xu),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),kn.subVectors(e,t),un.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),un.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Dr.subVectors(r,i),Ar.subVectors(s,i),Mu.subVectors(e,i);let c=Dr.dot(Mu),l=Ar.dot(Mu);if(c<=0&&l<=0)return t.copy(i);Eu.subVectors(e,r);let u=Dr.dot(Eu),d=Ar.dot(Eu);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Dr,o);Su.subVectors(e,s);let m=Dr.dot(Su),g=Ar.dot(Su);if(g>=0&&m<=g)return t.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ar,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Gm.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Gm,a);let h=1/(p+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(Dr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},$o={h:0,s:0,l:0};function wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=yE(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){let i=Ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=du(e.r),this.g=du(e.g),this.b=du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ke.fromWorkingColorSpace(It.copy(this),e),Math.round(Vt(It.r*255,0,255))*65536+Math.round(Vt(It.g*255,0,255))*256+Math.round(Vt(It.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(It.copy(this),t);let i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=En){Ke.fromWorkingColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!==En?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL($o);let i=lu(ri.h,$o.h,t),r=lu(ri.s,$o.s,t),s=lu(ri.l,$o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new je;je.NAMES=Ig;var RE=0,Xi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Vr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Ou,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ga=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new F,qo=new qe,Jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Im,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Im&&(e.usage=this.usage),e}};var va=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ya=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Wn=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},NE=0,Yt=new Et,bu=new Ki,Ir=new F,Wt=new $i,Ds=new $i,Mt=new F,Yi=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?ya:va)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ae().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Wt.min,Ds.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,Ds.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(Ds.min),Wt.expandByPoint(Ds.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Mt.fromBufferAttribute(a,l),c&&(Ir.fromBufferAttribute(e,l),Mt.add(Ir)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new F,c[B]=new F;let l=new F,u=new F,d=new F,f=new qe,m=new qe,g=new qe,v=new F,p=new F;function h(B,E,_){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,B),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(f),g.sub(f);let O=1/(m.x*g.y-g.x*m.y);isFinite(O)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(O),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(O),a[B].add(v),a[E].add(v),a[_].add(v),c[B].add(p),c[E].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let B=0,E=b.length;B<E;++B){let _=b[B],O=_.start,G=_.count;for(let A=O,$=O+G;A<$;A+=3)h(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let M=new F,w=new F,N=new F,C=new F;function T(B){N.fromBufferAttribute(r,B),C.copy(N);let E=a[B];M.copy(E),M.sub(N.multiplyScalar(N.dot(E))).normalize(),w.crossVectors(C,E);let O=w.dot(c[B])<0?-1:1;o.setXYZW(B,M.x,M.y,M.z,O)}for(let B=0,E=b.length;B<E;++B){let _=b[B],O=_.start,G=_.count;for(let A=O,$=O+G;A<$;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new Jt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wm=new Et,Ui=new Wu,Xo=new Ps,jm=new F,Rr=new F,Nr=new F,Pr=new F,Tu=new F,Yo=new F,Zo=new qe,Jo=new qe,Ko=new qe,$m=new F,qm=new F,Xm=new F,Qo=new F,ea=new F,jt=class extends Ki{constructor(e=new Yi,t=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Tu.fromBufferAttribute(d,e),o?Yo.addScaledVector(Tu,u):Yo.addScaledVector(Tu.sub(t),u))}t.add(Yo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Xo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Xo,jm)===null||Ui.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,N=M;w<N;w+=3){let C=a.getX(w),T=a.getX(w+1),B=a.getX(w+2);r=ta(this,h,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){let b=a.getX(p),M=a.getX(p+1),w=a.getX(p+2);r=ta(this,o,e,i,l,u,d,b,M,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,N=M;w<N;w+=3){let C=w,T=w+1,B=w+2;r=ta(this,h,e,i,l,u,d,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){let b=p,M=p+1,w=p+2;r=ta(this,o,e,i,l,u,d,b,M,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function PE(n,e,t,i,r,s,o,a){let c;if(e.side===Ht?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ui,a),c===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ea);return l<t.near||l>t.far?null:{distance:l,point:ea.clone(),object:n}}function ta(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Rr),n.getVertexPosition(c,Nr),n.getVertexPosition(l,Pr);let u=PE(n,e,t,i,Rr,Nr,Pr,Qo);if(u){r&&(Zo.fromBufferAttribute(r,a),Jo.fromBufferAttribute(r,c),Ko.fromBufferAttribute(r,l),u.uv=Ur.getInterpolation(Qo,Rr,Nr,Pr,Zo,Jo,Ko,new qe)),s&&(Zo.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,c),Ko.fromBufferAttribute(s,l),u.uv1=Ur.getInterpolation(Qo,Rr,Nr,Pr,Zo,Jo,Ko,new qe)),o&&($m.fromBufferAttribute(o,a),qm.fromBufferAttribute(o,c),Xm.fromBufferAttribute(o,l),u.normal=Ur.getInterpolation(Qo,Rr,Nr,Pr,$m,qm,Xm,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Ur.getNormal(Rr,Nr,Pr,d.normal),u.face=d}return u}var Ls=class n extends Yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(d,2));function g(v,p,h,b,M,w,N,C,T,B,E){let _=w/T,O=N/B,G=w/2,A=N/2,$=C/2,W=T+1,K=B+1,Z=0,V=0,Q=new F;for(let J=0;J<K;J++){let me=J*O-A;for(let Fe=0;Fe<W;Fe++){let Qe=Fe*_-G;Q[v]=Qe*b,Q[p]=me*M,Q[h]=$,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[h]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Fe/T),d.push(1-J/B),Z+=1}}for(let J=0;J<B;J++)for(let me=0;me<T;me++){let Fe=f+me+W*J,Qe=f+me+W*(J+1),H=f+(me+1)+W*(J+1),ee=f+(me+1)+W*J;c.push(Fe,Qe,ee),c.push(Qe,H,ee),V+=6}a.addGroup(m,V,E),m+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){let e={};for(let t=0;t<n.length;t++){let i=qr(n[t]);for(let r in i)e[r]=i[r]}return e}function LE(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var OE={clone:qr,merge:Lt},FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_a=class extends Ki{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new F,Ym=new qe,Zm=new qe,Ot=class extends _a{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,Zm),t.subVectors(Zm,Ym)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Or=1,ju=class extends Ki{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(Lr,Or,e,t);r.layers=this.layers,this.add(r);let s=new Ot(Lr,Or,e,t);s.layers=this.layers,this.add(s);let o=new Ot(Lr,Or,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Lr,Or,e,t);a.layers=this.layers,this.add(a);let c=new Ot(Lr,Or,e,t);c.layers=this.layers,this.add(c);let l=new Ot(Lr,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xa=class extends mi{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$u=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ls(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ci});s.uniforms.tEquirect.value=t;let o=new jt(r,s),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=dn),new ju(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Cu=new F,kE=new F,BE=new Ae,Hn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Cu.subVectors(i,t).cross(kE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||BE.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Ps,na=new F,Ma=class{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],v=r[10],p=r[11],h=r[12],b=r[13],M=r[14],w=r[15];if(i[0].setComponents(c-s,f-l,p-m,w-h).normalize(),i[1].setComponents(c+s,f+l,p+m,w+h).normalize(),i[2].setComponents(c+o,f+u,p+g,w+b).normalize(),i[3].setComponents(c-o,f-u,p-g,w-b).normalize(),i[4].setComponents(c-a,f-d,p-v,w-M).normalize(),t===Gn)i[5].setComponents(c+a,f+d,p+v,w+M).normalize();else if(t===fa)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ng(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VE(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){let v=f[m];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Xr=class n extends Yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){let b=h*f-o;for(let M=0;M<l;M++){let w=M*d-s;g.push(w,-b,0),v.push(0,0,1),p.push(M/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){let M=b+l*h,w=b+l*(h+1),N=b+1+l*(h+1),C=b+1+l*h;m.push(M,w,C),m.push(w,N,C)}this.setIndex(m),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eS=`#ifdef USE_IRIDESCENCE
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
#endif`,tS=`#ifdef USE_BUMPMAP
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uS=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,dS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fS=`vec3 transformedNormal = objectNormal;
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
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_S=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
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
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,LS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kS=`PhysicalMaterial material;
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
#endif`,BS=`struct PhysicalMaterial {
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
}`,VS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZS=`#if defined( USE_POINTS_UV )
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
#endif`,JS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lw=`#ifdef USE_NORMALMAP
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
#endif`,uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
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
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Ow=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`#include <common>
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
}`,qw=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Xw=`#define DISTANCE
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
}`,Yw=`#define DISTANCE
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,db=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,hb=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_b=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:HE,alphahash_pars_fragment:zE,alphamap_fragment:GE,alphamap_pars_fragment:WE,alphatest_fragment:jE,alphatest_pars_fragment:$E,aomap_fragment:qE,aomap_pars_fragment:XE,batching_pars_vertex:YE,batching_vertex:ZE,begin_vertex:JE,beginnormal_vertex:KE,bsdfs:QE,iridescence_fragment:eS,bumpmap_pars_fragment:tS,clipping_planes_fragment:nS,clipping_planes_pars_fragment:iS,clipping_planes_pars_vertex:rS,clipping_planes_vertex:sS,color_fragment:oS,color_pars_fragment:aS,color_pars_vertex:cS,color_vertex:lS,common:uS,cube_uv_reflection_fragment:dS,defaultnormal_vertex:fS,displacementmap_pars_vertex:hS,displacementmap_vertex:pS,emissivemap_fragment:mS,emissivemap_pars_fragment:gS,colorspace_fragment:vS,colorspace_pars_fragment:yS,envmap_fragment:_S,envmap_common_pars_fragment:xS,envmap_pars_fragment:MS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:PS,envmap_vertex:SS,fog_vertex:wS,fog_pars_vertex:bS,fog_fragment:TS,fog_pars_fragment:CS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:AS,lights_lambert_fragment:IS,lights_lambert_pars_fragment:RS,lights_pars_begin:NS,lights_toon_fragment:LS,lights_toon_pars_fragment:OS,lights_phong_fragment:FS,lights_phong_pars_fragment:US,lights_physical_fragment:kS,lights_physical_pars_fragment:BS,lights_fragment_begin:VS,lights_fragment_maps:HS,lights_fragment_end:zS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:jS,logdepthbuf_vertex:$S,map_fragment:qS,map_pars_fragment:XS,map_particle_fragment:YS,map_particle_pars_fragment:ZS,metalnessmap_fragment:JS,metalnessmap_pars_fragment:KS,morphinstance_vertex:QS,morphcolor_vertex:ew,morphnormal_vertex:tw,morphtarget_pars_vertex:nw,morphtarget_vertex:iw,normal_fragment_begin:rw,normal_fragment_maps:sw,normal_pars_fragment:ow,normal_pars_vertex:aw,normal_vertex:cw,normalmap_pars_fragment:lw,clearcoat_normal_fragment_begin:uw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:fw,iridescence_pars_fragment:hw,opaque_fragment:pw,packing:mw,premultiplied_alpha_fragment:gw,project_vertex:vw,dithering_fragment:yw,dithering_pars_fragment:_w,roughnessmap_fragment:xw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:Sw,shadowmap_vertex:ww,shadowmask_pars_fragment:bw,skinbase_vertex:Tw,skinning_pars_vertex:Cw,skinning_vertex:Dw,skinnormal_vertex:Aw,specularmap_fragment:Iw,specularmap_pars_fragment:Rw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Pw,transmission_fragment:Lw,transmission_pars_fragment:Ow,uv_pars_fragment:Fw,uv_pars_vertex:Uw,uv_vertex:kw,worldpos_vertex:Bw,background_vert:Vw,background_frag:Hw,backgroundCube_vert:zw,backgroundCube_frag:Gw,cube_vert:Ww,cube_frag:jw,depth_vert:$w,depth_frag:qw,distanceRGBA_vert:Xw,distanceRGBA_frag:Yw,equirect_vert:Zw,equirect_frag:Jw,linedashed_vert:Kw,linedashed_frag:Qw,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:rb,meshmatcap_frag:sb,meshnormal_vert:ob,meshnormal_frag:ab,meshphong_vert:cb,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:db,meshtoon_vert:fb,meshtoon_frag:hb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:vb,sprite_vert:yb,sprite_frag:_b},ne={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},Sn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new je(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new je(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Sn.physical={uniforms:Lt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var ia={r:0,b:0,g:0},Bi=new qi,xb=new Et;function Mb(n,e,t,i,r,s,o){let a=new je(0),c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1,w=g(b);w===null?h(a,c):w&&w.isColor&&(h(w,1),M=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function p(b,M){let w=g(M);w&&(w.isCubeTexture||w.mapping===Aa)?(u===void 0&&(u=new jt(new Ls(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:qr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bi.copy(M.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Bi)),u.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ot,(d!==w||f!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new jt(new Xr(2,2),new bn({name:"BackgroundMaterial",uniforms:qr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,m=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,M){b.getRGB(ia,Rg(n)),i.buffers.color.setClear(ia.r,ia.g,ia.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:v,addToRenderList:p}}function Eb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(_,O,G,A,$){let W=!1,K=d(A,G,O);s!==K&&(s=K,l(s.object)),W=m(_,A,G,$),W&&g(_,A,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,w(_,O,G,A),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,O,G){let A=G.wireframe===!0,$=i[_.id];$===void 0&&($={},i[_.id]=$);let W=$[O.id];W===void 0&&(W={},$[O.id]=W);let K=W[A];return K===void 0&&(K=f(c()),W[A]=K),K}function f(_){let O=[],G=[],A=[];for(let $=0;$<t;$++)O[$]=0,G[$]=0,A[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:A,object:_,attributes:{},index:null}}function m(_,O,G,A){let $=s.attributes,W=O.attributes,K=0,Z=G.getAttributes();for(let V in Z)if(Z[V].location>=0){let J=$[V],me=W[V];if(me===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;K++}return s.attributesNum!==K||s.index!==A}function g(_,O,G,A){let $={},W=O.attributes,K=0,Z=G.getAttributes();for(let V in Z)if(Z[V].location>=0){let J=W[V];J===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(J=_.instanceColor));let me={};me.attribute=J,J&&J.data&&(me.data=J.data),$[V]=me,K++}s.attributes=$,s.attributesNum=K,s.index=A}function v(){let _=s.newAttributes;for(let O=0,G=_.length;O<G;O++)_[O]=0}function p(_){h(_,0)}function h(_,O){let G=s.newAttributes,A=s.enabledAttributes,$=s.attributeDivisors;G[_]=1,A[_]===0&&(n.enableVertexAttribArray(_),A[_]=1),$[_]!==O&&(n.vertexAttribDivisor(_,O),$[_]=O)}function b(){let _=s.newAttributes,O=s.enabledAttributes;for(let G=0,A=O.length;G<A;G++)O[G]!==_[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function M(_,O,G,A,$,W,K){K===!0?n.vertexAttribIPointer(_,O,G,$,W):n.vertexAttribPointer(_,O,G,A,$,W)}function w(_,O,G,A){v();let $=A.attributes,W=G.getAttributes(),K=O.defaultAttributeValues;for(let Z in W){let V=W[Z];if(V.location>=0){let Q=$[Z];if(Q===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){let J=Q.normalized,me=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;let Qe=Fe.buffer,H=Fe.type,ee=Fe.bytesPerElement,ue=H===n.INT||H===n.UNSIGNED_INT||Q.gpuType===Mg;if(Q.isInterleavedBufferAttribute){let ie=Q.data,Ue=ie.stride,ke=Q.offset;if(ie.isInstancedInterleavedBuffer){for(let R=0;R<V.locationSize;R++)h(V.location+R,ie.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let R=0;R<V.locationSize;R++)p(V.location+R);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let R=0;R<V.locationSize;R++)M(V.location+R,me/V.locationSize,H,J,Ue*ee,(ke+me/V.locationSize*R)*ee,ue)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)h(V.location+ie,Q.meshPerAttribute);_.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<V.locationSize;ie++)p(V.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ie=0;ie<V.locationSize;ie++)M(V.location+ie,me/V.locationSize,H,J,me*ee,me/V.locationSize*ie*ee,ue)}}else if(K!==void 0){let J=K[Z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(V.location,J);break;case 3:n.vertexAttrib3fv(V.location,J);break;case 4:n.vertexAttrib4fv(V.location,J);break;default:n.vertexAttrib1fv(V.location,J)}}}}b()}function N(){B();for(let _ in i){let O=i[_];for(let G in O){let A=O[G];for(let $ in A)u(A[$].object),delete A[$];delete O[G]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let O=i[_.id];for(let G in O){let A=O[G];for(let $ in A)u(A[$].object),delete A[$];delete O[G]}delete i[_.id]}function T(_){for(let O in i){let G=i[O];if(G[_.id]===void 0)continue;let A=G[_.id];for(let $ in A)u(A[$].object),delete A[$];delete G[_.id]}}function B(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Sb(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(l[m],u[m]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,i,1)}}function c(l,u,d,f){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let T=C===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!T)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:h,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:w,maxSamples:N}}function bb(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Hn,a=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let b=s?0:i,M=b*4,w=h.clippingState||null;c.value=w,w=u(g,f,M,m);for(let N=0;N!==M;++N)w[N]=t[N];h.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let h=m+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,w=m;M!==v;++M,w+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Tb(n){let e=new WeakMap;function t(o,a){return a===Fu?o.mapping=Wr:a===Uu&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fu||a===Uu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new $u(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var qu=class extends _a{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,Jm=[.125,.215,.35,.446,.526,.582],Gi=20,Du=new qu,Km=new je,Au=null,Iu=0,Ru=0,Nu=!1,Hi=(1+Math.sqrt(5))/2,Fr=1/Hi,Qm=[new F(-Hi,Fr,0),new F(Hi,Fr,0),new F(-Fr,0,Hi),new F(Fr,0,Hi),new F(0,Hi,-Fr),new F(0,Hi,Fr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Au=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Iu,Ru),this._renderer.xr.enabled=Nu,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ia,format:wn,colorSpace:pi,depthBuffer:!1},r=eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Db(s,e,t)}return r}_compileMaterial(e){let t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Du)}_sceneToCubeUV(e,t,i,r){let a=new Ot(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Km),u.toneMapping=li,u.autoClear=!1;let m=new ga({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new jt(new Ls,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Km),v=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let M=this._cubeSize;ra(r,b*M,h>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ra(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Du)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qm[(r-s-1)%Qm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new jt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gi-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Gi;p>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);let h=[],b=0;for(let T=0;T<Gi;++T){let B=T/v,E=Math.exp(-B*B/2);h.push(E),T===0?b+=E:T<p&&(b+=2*E)}for(let T=0;T<h.length;T++)h[T]=h[T]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let w=this._sizeLods[r],N=3*w*(r>M-kr?r-M+kr:0),C=4*(this._cubeSize-w);ra(t,N,C,3*w,2*w),c.setRenderTarget(t),c.render(d,Du)}};function Cb(n){let e=[],t=[],i=[],r=n,s=n-kr+1+Jm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-kr?c=Jm[o-n+kr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,h=1,b=new Float32Array(v*g*m),M=new Float32Array(p*g*m),w=new Float32Array(h*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,B=C>2?0:-1,E=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];b.set(E,v*g*C),M.set(f,p*g*C);let _=[C,C,C,C,C,C];w.set(_,h*g*C)}let N=new Yi;N.setAttribute("position",new Jt(b,v)),N.setAttribute("uv",new Jt(M,p)),N.setAttribute("faceIndex",new Jt(w,h)),e.push(N),r>kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eg(n,e,t){let i=new jn(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Db(n,e,t){let i=new Float32Array(Gi),r=new F(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tg(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ng(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function Ab(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Fu||c===Uu,u=c===Wr||c===jr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ea(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Ea(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ib(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rb(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){let f=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let b=m.array;v=m.version;for(let M=0,w=b.length;M<w;M+=3){let N=b[M+0],C=b[M+1],T=b[M+2];f.push(N,C,C,T,T,N)}}else if(g!==void 0){let b=g.array;v=g.version;for(let M=0,w=b.length/3-1;M<w;M+=3){let N=M+0,C=M+1,T=M+2;f.push(N,C,C,T,T,N)}}else return;let p=new(Ag(f)?ya:va)(f,1);p.version=v;let h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){let f=s.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Nb(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(f[p]/o,m[p]);else{v.multiDrawElementsWEBGL(i,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}}function d(f,m,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,v,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b];for(let b=0;b<v.length;b++)t.update(h,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Pb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Lb(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let _=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;g===!0&&(w=1),v===!0&&(w=2),p===!0&&(w=3);let N=a.attributes.position.count*w,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let T=new Float32Array(N*C*4*d),B=new pa(T,N,C,d);B.type=ai,B.needsUpdate=!0;let E=w*4;for(let O=0;O<d;O++){let G=h[O],A=b[O],$=M[O],W=N*C*4*O;for(let K=0;K<G.count;K++){let Z=K*E;g===!0&&(r.fromBufferAttribute(G,K),T[W+Z+0]=r.x,T[W+Z+1]=r.y,T[W+Z+2]=r.z,T[W+Z+3]=0),v===!0&&(r.fromBufferAttribute(A,K),T[W+Z+4]=r.x,T[W+Z+5]=r.y,T[W+Z+6]=r.z,T[W+Z+7]=0),p===!0&&(r.fromBufferAttribute($,K),T[W+Z+8]=r.x,T[W+Z+9]=r.y,T[W+Z+10]=r.z,T[W+Z+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:B,size:new qe(N,C)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Ob(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Sa=class extends mi{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Hr,u!==Hr&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hr&&(i=$r),i===void 0&&u===Rs&&(i=Fs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pg=new mi,Lg=new Sa(1,1);Lg.compareFunction=Dg;var Og=new pa,Fg=new Gu,Ug=new xa,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function Zr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ig[r];if(s===void 0&&(s=new Float32Array(r),ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Na(n,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Vb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;ag.set(i),n.uniformMatrix2fv(this.addr,!1,ag),_t(t,i)}}function Hb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;og.set(i),n.uniformMatrix3fv(this.addr,!1,og),_t(t,i)}}function zb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(yt(t,i))return;sg.set(i),n.uniformMatrix4fv(this.addr,!1,sg),_t(t,i)}}function Gb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function jb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function $b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function qb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Zb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Jb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Lg:Pg;t.setTexture2D(e||s,r)}function Kb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fg,r)}function Qb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ug,r)}function eT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Og,r)}function tT(n){switch(n){case 5126:return Fb;case 35664:return Ub;case 35665:return kb;case 35666:return Bb;case 35674:return Vb;case 35675:return Hb;case 35676:return zb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return jb;case 35669:case 35673:return $b;case 5125:return qb;case 36294:return Xb;case 36295:return Yb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(n,e){n.uniform1fv(this.addr,e)}function iT(n,e){let t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function rT(n,e){let t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function sT(n,e){let t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function oT(n,e){let t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aT(n,e){let t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cT(n,e){let t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lT(n,e){n.uniform1iv(this.addr,e)}function uT(n,e){n.uniform2iv(this.addr,e)}function dT(n,e){n.uniform3iv(this.addr,e)}function fT(n,e){n.uniform4iv(this.addr,e)}function hT(n,e){n.uniform1uiv(this.addr,e)}function pT(n,e){n.uniform2uiv(this.addr,e)}function mT(n,e){n.uniform3uiv(this.addr,e)}function gT(n,e){n.uniform4uiv(this.addr,e)}function vT(n,e,t){let i=this.cache,r=e.length,s=Na(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Pg,s[o])}function yT(n,e,t){let i=this.cache,r=e.length,s=Na(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fg,s[o])}function _T(n,e,t){let i=this.cache,r=e.length,s=Na(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ug,s[o])}function xT(n,e,t){let i=this.cache,r=e.length,s=Na(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Og,s[o])}function MT(n){switch(n){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return aT;case 35676:return cT;case 5124:case 35670:return lT;case 35667:case 35671:return uT;case 35668:case 35672:return dT;case 35669:case 35673:return fT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return xT}}var Xu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tT(t.type)}},Yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MT(t.type)}},Zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Pu=/(\w+)(\])?(\[|\.)?/g;function cg(n,e){n.seq.push(e),n.map[e.id]=e}function ET(n,e,t){let i=n.name,r=i.length;for(Pu.lastIndex=0;;){let s=Pu.exec(i),o=Pu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cg(t,l===void 0?new Xu(a,n,e):new Yu(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zu(a),cg(t,d)),t=d}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ET(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function lg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ST=37297,wT=0;function bT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function TT(n){let e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n),i;switch(e===t?i="":e===da&&t===ua?i="LinearDisplayP3ToLinearSRGB":e===ua&&t===da&&(i="LinearSRGBToLinearDisplayP3"),n){case pi:case Ra:return[i,"LinearTransferOETF"];case En:case yd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ug(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bT(n.getShaderSource(e),o)}else return r}function CT(n,e){let t=TT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function DT(n,e){let t;switch(e){case WM:t="Linear";break;case jM:t="Reinhard";break;case $M:t="OptimizedCineon";break;case qM:t="ACESFilmic";break;case YM:t="AgX";break;case ZM:t="Neutral";break;case XM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function AT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function IT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function dg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(NT,LT)}var PT=new Map;function LT(n,e){let t=De[e];if(t===void 0){let i=PT.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}var OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(OT,FT)}function FT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function kT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function VT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case zM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function HT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=UT(t),l=kT(t),u=BT(t),d=VT(t),f=HT(t),m=AT(t),g=IT(s),v=r.createProgram(),p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),h.length>0&&(h+=`
`)):(p=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),h=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?De.tonemapping_pars_fragment:"",t.toneMapping!==li?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,CT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Ju(o),o=dg(o,t),o=fg(o,t),a=Ju(a),a=dg(a,t),a=fg(a,t),o=hg(o),a=hg(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=b+p+o,w=b+h+a,N=lg(r,r.VERTEX_SHADER,M),C=lg(r,r.FRAGMENT_SHADER,w);r.attachShader(v,N),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(O){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(C).trim(),W=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,C);else{let Z=ug(r,N,"vertex"),V=ug(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+Z+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(A===""||$==="")&&(K=!1);K&&(O.diagnostics={runnable:W,programLog:G,vertexShader:{log:A,prefix:p},fragmentShader:{log:$,prefix:h}})}r.deleteShader(N),r.deleteShader(C),B=new Gr(r,v),E=RT(r,v)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,ST)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=C,this}var GT=0,Ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qu(e),t.set(e,i)),i}},Qu=class{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}};function WT(n,e,t,i,r,s,o){let a=new ma,c=new Ku,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,_,O,G,A){let $=G.fog,W=A.geometry,K=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),V=Z&&Z.mapping===Aa?Z.image.height:null,Q=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let J=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=J!==void 0?J.length:0,Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let Qe,H,ee,ue;if(Q){let Ye=Sn[Q];Qe=Ye.vertexShader,H=Ye.fragmentShader}else Qe=E.vertexShader,H=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),ue=c.getFragmentShaderID(E);let ie=n.getRenderTarget(),Ue=A.isInstancedMesh===!0,ke=A.isBatchedMesh===!0,R=!!E.map,it=!!E.matcap,ye=!!Z,et=!!E.aoMap,Ee=!!E.lightMap,He=!!E.bumpMap,Pe=!!E.normalMap,ze=!!E.displacementMap,lt=!!E.emissiveMap,S=!!E.metalnessMap,y=!!E.roughnessMap,k=E.anisotropy>0,j=E.clearcoat>0,X=E.dispersion>0,Y=E.iridescence>0,ve=E.sheen>0,ae=E.transmission>0,oe=k&&!!E.anisotropyMap,Ie=j&&!!E.clearcoatMap,te=j&&!!E.clearcoatNormalMap,ge=j&&!!E.clearcoatRoughnessMap,Ge=Y&&!!E.iridescenceMap,_e=Y&&!!E.iridescenceThicknessMap,le=ve&&!!E.sheenColorMap,Re=ve&&!!E.sheenRoughnessMap,Be=!!E.specularMap,dt=!!E.specularColorMap,Ne=!!E.specularIntensityMap,D=ae&&!!E.transmissionMap,q=ae&&!!E.thicknessMap,z=!!E.gradientMap,re=!!E.alphaMap,ce=E.alphaTest>0,$e=!!E.alphaHash,rt=!!E.extensions,ut=li;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ut=n.toneMapping);let bt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:H,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ke,instancing:Ue,instancingColor:Ue&&A.instanceColor!==null,instancingMorph:Ue&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:pi,alphaToCoverage:!!E.alphaToCoverage,map:R,matcap:it,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:Ee,bumpMap:He,normalMap:Pe,displacementMap:f&&ze,emissiveMap:lt,normalMapObjectSpace:Pe&&E.normalMapType===uE,normalMapTangentSpace:Pe&&E.normalMapType===Cg,metalnessMap:S,roughnessMap:y,anisotropy:k,anisotropyMap:oe,clearcoat:j,clearcoatMap:Ie,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:X,iridescence:Y,iridescenceMap:Ge,iridescenceThicknessMap:_e,sheen:ve,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:Be,specularColorMap:dt,specularIntensityMap:Ne,transmission:ae,transmissionMap:D,thicknessMap:q,gradientMap:z,opaque:E.transparent===!1&&E.blending===Vr&&E.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:$e,combine:E.combine,mapUv:R&&v(E.map.channel),aoMapUv:et&&v(E.aoMap.channel),lightMapUv:Ee&&v(E.lightMap.channel),bumpMapUv:He&&v(E.bumpMap.channel),normalMapUv:Pe&&v(E.normalMap.channel),displacementMapUv:ze&&v(E.displacementMap.channel),emissiveMapUv:lt&&v(E.emissiveMap.channel),metalnessMapUv:S&&v(E.metalnessMap.channel),roughnessMapUv:y&&v(E.roughnessMap.channel),anisotropyMapUv:oe&&v(E.anisotropyMap.channel),clearcoatMapUv:Ie&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(E.sheenRoughnessMap.channel),specularMapUv:Be&&v(E.specularMap.channel),specularColorMapUv:dt&&v(E.specularColorMap.channel),specularIntensityMapUv:Ne&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:q&&v(E.thicknessMap.channel),alphaMapUv:re&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!W.attributes.uv&&(R||re),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:A.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,useLegacyLights:n._useLegacyLights,decodeVideoTexture:R&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:rt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function h(E){let _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(let O in E.defines)_.push(O),_.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(b(_,E),M(_,E),_.push(n.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function b(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function M(E,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),E.push(a.mask)}function w(E){let _=g[E.type],O;if(_){let G=Sn[_];O=OE.clone(G.uniforms)}else O=E.uniforms;return O}function N(E,_){let O;for(let G=0,A=u.length;G<A;G++){let $=u[G];if($.cacheKey===_){O=$,++O.usedTimes;break}}return O===void 0&&(O=new zT(n,_,E,s),u.push(O)),O}function C(E){if(--E.usedTimes===0){let _=u.indexOf(E);u[_]=u[u.length-1],u.pop(),E.destroy()}}function T(E){c.remove(E)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:N,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:B}}function jT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function $T(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gg(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,g,v,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function a(d,f,m,g,v,p){let h=o(d,f,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,v,p){let h=o(d,f,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||$T),i.length>1&&i.sort(f||mg),r.length>1&&r.sort(f||mg)}function u(){for(let d=e,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function qT(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new gg,n.set(i,[o])):r>=s.length?(o=new gg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new je};break;case"SpotLight":t={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function YT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ZT=0;function JT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KT(n){let e=new XT,t=YT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let r=new F,s=new Et,o=new Et;function a(l,u){let d=0,f=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,v=0,p=0,h=0,b=0,M=0,w=0,N=0,C=0,T=0,B=0;l.sort(JT);let E=u===!0?Math.PI:1;for(let O=0,G=l.length;O<G;O++){let A=l[O],$=A.color,W=A.intensity,K=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=$.r*W*E,f+=$.g*W*E,m+=$.b*W*E;else if(A.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],W);B++}else if(A.isDirectionalLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){let Q=A.shadow,J=t.get(A);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=A.shadow.matrix,M++}i.directional[g]=V,g++}else if(A.isSpotLight){let V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy($).multiplyScalar(W*E),V.distance=K,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[p]=V;let Q=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,Q.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[p]=Q.matrix,A.castShadow){let J=t.get(A);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=Z,N++}p++}else if(A.isRectAreaLight){let V=e.get(A);V.color.copy($).multiplyScalar(W),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[h]=V,h++}else if(A.isPointLight){let V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity*E),V.distance=A.distance,V.decay=A.decay,A.castShadow){let Q=A.shadow,J=t.get(A);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=A.shadow.matrix,w++}i.point[v]=V,v++}else if(A.isHemisphereLight){let V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(W*E),V.groundColor.copy(A.groundColor).multiplyScalar(W*E),i.hemi[b]=V,b++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;let _=i.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==p||_.rectAreaLength!==h||_.hemiLength!==b||_.numDirectionalShadows!==M||_.numPointShadows!==w||_.numSpotShadows!==N||_.numSpotMaps!==C||_.numLightProbes!==B)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=h,i.point.length=v,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=N+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=B,_.directionalLength=g,_.pointLength=v,_.spotLength=p,_.rectAreaLength=h,_.hemiLength=b,_.numDirectionalShadows=M,_.numPointShadows=w,_.numSpotShadows=N,_.numSpotMaps=C,_.numLightProbes=B,i.version=ZT++)}function c(l,u){let d=0,f=0,m=0,g=0,v=0,p=u.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){let M=l[h];if(M.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(M.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=i.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function vg(n){let e=new KT(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function QT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new vg(n),e.set(r,[a])):s>=o.length?(a=new vg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ed=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},td=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tC=`uniform sampler2D shadow_pass;
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
}`;function nC(n,e,t){let i=new Ma,r=new qe,s=new qe,o=new wt,a=new ed({depthPacking:lE}),c=new td,l={},u=t.maxTextureSize,d={[ui]:Ht,[Ht]:ui,[zn]:zn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:eC,fragmentShader:tC}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yi;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let h=this.type;this.render=function(C,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let E=n.getRenderTarget(),_=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ci),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let A=h!==Vn&&this.type===Vn,$=h===Vn&&this.type!==Vn;for(let W=0,K=C.length;W<K;W++){let Z=C[W],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let Q=V.getFrameExtents();if(r.multiply(Q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,V.mapSize.y=s.y)),V.map===null||A===!0||$===!0){let me=this.type!==Vn?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new jn(r.x,r.y,me),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let J=V.getViewportCount();for(let me=0;me<J;me++){let Fe=V.getViewport(me);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(o),V.updateMatrices(Z,me),i=V.getFrustum(),w(T,B,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&b(V,B),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,_,O)};function b(C,T){let B=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new jn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,B,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,B,m,v,null)}function M(C,T,B,E){let _=null,O=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)_=O;else if(_=B.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=_.uuid,A=T.uuid,$=l[G];$===void 0&&($={},l[G]=$);let W=$[A];W===void 0&&(W=_.clone(),$[A]=W,T.addEventListener("dispose",N)),_=W}if(_.visible=T.visible,_.wireframe=T.wireframe,E===Vn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=n.properties.get(_);G.light=B}return _}function w(C,T,B,E,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Vn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);let A=e.update(C),$=C.material;if(Array.isArray($)){let W=A.groups;for(let K=0,Z=W.length;K<Z;K++){let V=W[K],Q=$[V.materialIndex];if(Q&&Q.visible){let J=M(C,Q,E,_);C.onBeforeShadow(n,C,T,B,A,J,V),n.renderBufferDirect(B,null,A,J,C,V),C.onAfterShadow(n,C,T,B,A,J,V)}}}else if($.visible){let W=M(C,$,E,_);C.onBeforeShadow(n,C,T,B,A,W,null),n.renderBufferDirect(B,null,A,W,C,null),C.onAfterShadow(n,C,T,B,A,W,null)}}let G=C.children;for(let A=0,$=G.length;A<$;A++)w(G[A],T,B,E,_)}function N(C){C.target.removeEventListener("dispose",N);for(let B in l){let E=l[B],_=C.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function iC(n){function e(){let D=!1,q=new wt,z=null,re=new wt(0,0,0,0);return{setMask:function(ce){z!==ce&&!D&&(n.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){D=ce},setClear:function(ce,$e,rt,ut,bt){bt===!0&&(ce*=ut,$e*=ut,rt*=ut),q.set(ce,$e,rt,ut),re.equals(q)===!1&&(n.clearColor(ce,$e,rt,ut),re.copy(q))},reset:function(){D=!1,z=null,re.set(-1,0,0,0)}}}function t(){let D=!1,q=null,z=null,re=null;return{setTest:function(ce){ce?ue(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ce){q!==ce&&!D&&(n.depthMask(ce),q=ce)},setFunc:function(ce){if(z!==ce){switch(ce){case OM:n.depthFunc(n.NEVER);break;case FM:n.depthFunc(n.ALWAYS);break;case UM:n.depthFunc(n.LESS);break;case oa:n.depthFunc(n.LEQUAL);break;case kM:n.depthFunc(n.EQUAL);break;case BM:n.depthFunc(n.GEQUAL);break;case VM:n.depthFunc(n.GREATER);break;case HM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=ce}},setLocked:function(ce){D=ce},setClear:function(ce){re!==ce&&(n.clearDepth(ce),re=ce)},reset:function(){D=!1,q=null,z=null,re=null}}}function i(){let D=!1,q=null,z=null,re=null,ce=null,$e=null,rt=null,ut=null,bt=null;return{setTest:function(Ye){D||(Ye?ue(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Ye){q!==Ye&&!D&&(n.stencilMask(Ye),q=Ye)},setFunc:function(Ye,hn,Rt){(z!==Ye||re!==hn||ce!==Rt)&&(n.stencilFunc(Ye,hn,Rt),z=Ye,re=hn,ce=Rt)},setOp:function(Ye,hn,Rt){($e!==Ye||rt!==hn||ut!==Rt)&&(n.stencilOp(Ye,hn,Rt),$e=Ye,rt=hn,ut=Rt)},setLocked:function(Ye){D=Ye},setClear:function(Ye){bt!==Ye&&(n.clearStencil(Ye),bt=Ye)},reset:function(){D=!1,q=null,z=null,re=null,ce=null,$e=null,rt=null,ut=null,bt=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,h=null,b=null,M=null,w=null,N=null,C=new je(0,0,0),T=0,B=!1,E=null,_=null,O=null,G=null,A=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,K=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=K>=2);let V=null,Q={},J=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Fe=new wt().fromArray(J),Qe=new wt().fromArray(me);function H(D,q,z,re){let ce=new Uint8Array(4),$e=n.createTexture();n.bindTexture(D,$e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<z;rt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(q+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return $e}let ee={};ee[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(n.DEPTH_TEST),s.setFunc(oa),He(!1),Pe(Yp),ue(n.CULL_FACE),et(ci);function ue(D){l[D]!==!0&&(n.enable(D),l[D]=!0)}function ie(D){l[D]!==!1&&(n.disable(D),l[D]=!1)}function Ue(D,q){return u[D]!==q?(n.bindFramebuffer(D,q),u[D]=q,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=q),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=q),!0):!1}function ke(D,q){let z=f,re=!1;if(D){z=d.get(q),z===void 0&&(z=[],d.set(q,z));let ce=D.textures;if(z.length!==ce.length||z[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,rt=ce.length;$e<rt;$e++)z[$e]=n.COLOR_ATTACHMENT0+$e;z.length=ce.length,re=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,re=!0);re&&n.drawBuffers(z)}function R(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let it={[zi]:n.FUNC_ADD,[yM]:n.FUNC_SUBTRACT,[_M]:n.FUNC_REVERSE_SUBTRACT};it[xM]=n.MIN,it[MM]=n.MAX;let ye={[EM]:n.ZERO,[SM]:n.ONE,[wM]:n.SRC_COLOR,[Lu]:n.SRC_ALPHA,[IM]:n.SRC_ALPHA_SATURATE,[DM]:n.DST_COLOR,[TM]:n.DST_ALPHA,[bM]:n.ONE_MINUS_SRC_COLOR,[Ou]:n.ONE_MINUS_SRC_ALPHA,[AM]:n.ONE_MINUS_DST_COLOR,[CM]:n.ONE_MINUS_DST_ALPHA,[RM]:n.CONSTANT_COLOR,[NM]:n.ONE_MINUS_CONSTANT_COLOR,[PM]:n.CONSTANT_ALPHA,[LM]:n.ONE_MINUS_CONSTANT_ALPHA};function et(D,q,z,re,ce,$e,rt,ut,bt,Ye){if(D===ci){g===!0&&(ie(n.BLEND),g=!1);return}if(g===!1&&(ue(n.BLEND),g=!0),D!==vM){if(D!==v||Ye!==B){if((p!==zi||M!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,M=zi),Ye)switch(D){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zp:n.blendFunc(n.ONE,n.ONE);break;case Jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,b=null,w=null,N=null,C.set(0,0,0),T=0,v=D,B=Ye}return}ce=ce||q,$e=$e||z,rt=rt||re,(q!==p||ce!==M)&&(n.blendEquationSeparate(it[q],it[ce]),p=q,M=ce),(z!==h||re!==b||$e!==w||rt!==N)&&(n.blendFuncSeparate(ye[z],ye[re],ye[$e],ye[rt]),h=z,b=re,w=$e,N=rt),(ut.equals(C)===!1||bt!==T)&&(n.blendColor(ut.r,ut.g,ut.b,bt),C.copy(ut),T=bt),v=D,B=!1}function Ee(D,q){D.side===zn?ie(n.CULL_FACE):ue(n.CULL_FACE);let z=D.side===Ht;q&&(z=!z),He(z),D.blending===Vr&&D.transparent===!1?et(ci):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);let re=D.stencilWrite;o.setTest(re),re&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function Pe(D){D!==pM?(ue(n.CULL_FACE),D!==_&&(D===Yp?n.cullFace(n.BACK):D===mM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),_=D}function ze(D){D!==O&&(W&&n.lineWidth(D),O=D)}function lt(D,q,z){D?(ue(n.POLYGON_OFFSET_FILL),(G!==q||A!==z)&&(n.polygonOffset(q,z),G=q,A=z)):ie(n.POLYGON_OFFSET_FILL)}function S(D){D?ue(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function y(D){D===void 0&&(D=n.TEXTURE0+$-1),V!==D&&(n.activeTexture(D),V=D)}function k(D,q,z){z===void 0&&(V===null?z=n.TEXTURE0+$-1:z=V);let re=Q[z];re===void 0&&(re={type:void 0,texture:void 0},Q[z]=re),(re.type!==D||re.texture!==q)&&(V!==z&&(n.activeTexture(z),V=z),n.bindTexture(D,q||ee[D]),re.type=D,re.texture=q)}function j(){let D=Q[V];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(D){Fe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Fe.copy(D))}function Re(D){Qe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function Be(D,q){let z=c.get(q);z===void 0&&(z=new WeakMap,c.set(q,z));let re=z.get(D);re===void 0&&(re=n.getUniformBlockIndex(q,D.name),z.set(D,re))}function dt(D,q){let re=c.get(q).get(D);a.get(q)!==re&&(n.uniformBlockBinding(q,re,D.__bindingPointIndex),a.set(q,re))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,Q={},u={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,h=null,b=null,M=null,w=null,N=null,C=new je(0,0,0),T=0,B=!1,E=null,_=null,O=null,G=null,A=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ie,bindFramebuffer:Ue,drawBuffers:ke,useProgram:R,setBlending:et,setMaterial:Ee,setFlipSided:He,setCullFace:Pe,setLineWidth:ze,setPolygonOffset:lt,setScissorTest:S,activeTexture:y,bindTexture:k,unbindTexture:j,compressedTexImage2D:X,compressedTexImage3D:Y,texImage2D:Ge,texImage3D:_e,updateUBOMapping:Be,uniformBlockBinding:dt,texStorage2D:te,texStorage3D:ge,texSubImage2D:ve,texSubImage3D:ae,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:le,viewport:Re,reset:Ne}}function rC(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return m?new OffscreenCanvas(S,y):Ns("canvas")}function v(S,y,k){let j=1,X=lt(S);if((X.width>k||X.height>k)&&(j=k/Math.max(X.width,X.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Y=Math.floor(j*X.width),ve=Math.floor(j*X.height);d===void 0&&(d=g(Y,ve));let ae=y?g(Y,ve):d;return ae.width=Y,ae.height=ve,ae.getContext("2d").drawImage(S,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+ve+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==Zt&&S.minFilter!==dn}function h(S){n.generateMipmap(S)}function b(S,y,k,j,X=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=y;if(y===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),y===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),y===n.RGBA){let ve=X?la:Ke.getTransfer(j);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=ve===ot?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(S,y){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Zt&&S.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function w(S){let y=S.target;y.removeEventListener("dispose",w),C(y),y.isVideoTexture&&u.delete(y)}function N(S){let y=S.target;y.removeEventListener("dispose",N),B(y)}function C(S){let y=i.get(S);if(y.__webglInit===void 0)return;let k=S.source,j=f.get(k);if(j){let X=j[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(S),Object.keys(j).length===0&&f.delete(k)}i.remove(S)}function T(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let k=S.source,j=f.get(k);delete j[y.__cacheKey],o.memory.textures--}function B(S){let y=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let X=0;X<y.__webglFramebuffer[j].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[j][X]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=S.textures;for(let j=0,X=k.length;j<X;j++){let Y=i.get(k[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(S)}let E=0;function _(){E=0}function O(){let S=E;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),E+=1,S}function G(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function A(S,y){let k=i.get(S);if(S.isVideoTexture&&Pe(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(k,S,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function $(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Fe(k,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function W(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Fe(k,S,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function K(S,y){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Qe(k,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let Z={[ku]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[Bu]:n.MIRRORED_REPEAT},V={[Zt]:n.NEAREST,[JM]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[tu]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Q={[dE]:n.NEVER,[vE]:n.ALWAYS,[fE]:n.LESS,[Dg]:n.LEQUAL,[hE]:n.EQUAL,[gE]:n.GEQUAL,[pE]:n.GREATER,[mE]:n.NOTEQUAL};function J(S,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===tu||y.magFilter===Uo||y.magFilter===ji||y.minFilter===dn||y.minFilter===tu||y.minFilter===Uo||y.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Z[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,V[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,V[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==Uo&&y.minFilter!==ji||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function me(S,y){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",w));let j=y.source,X=f.get(j);X===void 0&&(X={},f.set(j,X));let Y=G(y);if(Y!==S.__cacheKey){X[Y]===void 0&&(X[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),X[Y].usedTimes++;let ve=X[S.__cacheKey];ve!==void 0&&(X[S.__cacheKey].usedTimes--,ve.usedTimes===0&&T(y)),S.__cacheKey=Y,S.__webglTexture=X[Y].texture}return k}function Fe(S,y,k){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let X=me(S,y),Y=y.source;t.bindTexture(j,S.__webglTexture,n.TEXTURE0+k);let ve=i.get(Y);if(Y.version!==ve.__version||X===!0){t.activeTexture(n.TEXTURE0+k);let ae=Ke.getPrimaries(Ke.workingColorSpace),oe=y.colorSpace===oi?null:Ke.getPrimaries(y.colorSpace),Ie=y.colorSpace===oi||ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let te=v(y.image,!1,r.maxTextureSize);te=ze(y,te);let ge=s.convert(y.format,y.colorSpace),Ge=s.convert(y.type),_e=b(y.internalFormat,ge,Ge,y.colorSpace,y.isVideoTexture);J(j,y);let le,Re=y.mipmaps,Be=y.isVideoTexture!==!0,dt=ve.__version===void 0||X===!0,Ne=Y.dataReady,D=M(y,te);if(y.isDepthTexture)_e=n.DEPTH_COMPONENT16,y.type===ai?_e=n.DEPTH_COMPONENT32F:y.type===$r?_e=n.DEPTH_COMPONENT24:y.type===Fs&&(_e=n.DEPTH24_STENCIL8),dt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,ge,Ge,null));else if(y.isDataTexture)if(Re.length>0){Be&&dt&&t.texStorage2D(n.TEXTURE_2D,D,_e,Re[0].width,Re[0].height);for(let q=0,z=Re.length;q<z;q++)le=Re[q],Be?Ne&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,le.width,le.height,ge,Ge,le.data):t.texImage2D(n.TEXTURE_2D,q,_e,le.width,le.height,0,ge,Ge,le.data);y.generateMipmaps=!1}else Be?(dt&&t.texStorage2D(n.TEXTURE_2D,D,_e,te.width,te.height),Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ge,te.data)):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,ge,Ge,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,_e,Re[0].width,Re[0].height,te.depth);for(let q=0,z=Re.length;q<z;q++)le=Re[q],y.format!==wn?ge!==null?Be?Ne&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,te.depth,ge,le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,_e,le.width,le.height,te.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,le.width,le.height,te.depth,ge,Ge,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,_e,le.width,le.height,te.depth,0,ge,Ge,le.data)}else{Be&&dt&&t.texStorage2D(n.TEXTURE_2D,D,_e,Re[0].width,Re[0].height);for(let q=0,z=Re.length;q<z;q++)le=Re[q],y.format!==wn?ge!==null?Be?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(n.TEXTURE_2D,q,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ne&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,le.width,le.height,ge,Ge,le.data):t.texImage2D(n.TEXTURE_2D,q,_e,le.width,le.height,0,ge,Ge,le.data)}else if(y.isDataArrayTexture)Be?(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,D,_e,te.width,te.height,te.depth),Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ge,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,ge,Ge,te.data);else if(y.isData3DTexture)Be?(dt&&t.texStorage3D(n.TEXTURE_3D,D,_e,te.width,te.height,te.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ge,te.data)):t.texImage3D(n.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,ge,Ge,te.data);else if(y.isFramebufferTexture){if(dt)if(Be)t.texStorage2D(n.TEXTURE_2D,D,_e,te.width,te.height);else{let q=te.width,z=te.height;for(let re=0;re<D;re++)t.texImage2D(n.TEXTURE_2D,re,_e,q,z,0,ge,Ge,null),q>>=1,z>>=1}}else if(Re.length>0){if(Be&&dt){let q=lt(Re[0]);t.texStorage2D(n.TEXTURE_2D,D,_e,q.width,q.height)}for(let q=0,z=Re.length;q<z;q++)le=Re[q],Be?Ne&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ge,Ge,le):t.texImage2D(n.TEXTURE_2D,q,_e,ge,Ge,le);y.generateMipmaps=!1}else if(Be){if(dt){let q=lt(te);t.texStorage2D(n.TEXTURE_2D,D,_e,q.width,q.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ge,te)}else t.texImage2D(n.TEXTURE_2D,0,_e,ge,Ge,te);p(y)&&h(j),ve.__version=Y.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Qe(S,y,k){if(y.image.length!==6)return;let j=me(S,y),X=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+k);let Y=i.get(X);if(X.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+k);let ve=Ke.getPrimaries(Ke.workingColorSpace),ae=y.colorSpace===oi?null:Ke.getPrimaries(y.colorSpace),oe=y.colorSpace===oi||ve===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let z=0;z<6;z++)!Ie&&!te?ge[z]=v(y.image[z],!0,r.maxCubemapSize):ge[z]=te?y.image[z].image:y.image[z],ge[z]=ze(y,ge[z]);let Ge=ge[0],_e=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Re=b(y.internalFormat,_e,le,y.colorSpace),Be=y.isVideoTexture!==!0,dt=Y.__version===void 0||j===!0,Ne=X.dataReady,D=M(y,Ge);J(n.TEXTURE_CUBE_MAP,y);let q;if(Ie){Be&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Re,Ge.width,Ge.height);for(let z=0;z<6;z++){q=ge[z].mipmaps;for(let re=0;re<q.length;re++){let ce=q[re];y.format!==wn?_e!==null?Be?Ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,0,0,ce.width,ce.height,_e,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,Re,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,0,0,ce.width,ce.height,_e,le,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,Re,ce.width,ce.height,0,_e,le,ce.data)}}}else{if(q=y.mipmaps,Be&&dt){q.length>0&&D++;let z=lt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Re,z.width,z.height)}for(let z=0;z<6;z++)if(te){Be?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ge[z].width,ge[z].height,_e,le,ge[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Re,ge[z].width,ge[z].height,0,_e,le,ge[z].data);for(let re=0;re<q.length;re++){let $e=q[re].image[z].image;Be?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,0,0,$e.width,$e.height,_e,le,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,Re,$e.width,$e.height,0,_e,le,$e.data)}}else{Be?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,_e,le,ge[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Re,_e,le,ge[z]);for(let re=0;re<q.length;re++){let ce=q[re];Be?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,0,0,_e,le,ce.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,Re,_e,le,ce.image[z])}}}p(y)&&h(n.TEXTURE_CUBE_MAP),Y.__version=X.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function H(S,y,k,j,X,Y){let ve=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),oe=b(k.internalFormat,ve,ae,k.colorSpace);if(!i.get(y).__hasExternalTextures){let te=Math.max(1,y.width>>Y),ge=Math.max(1,y.height>>Y);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,Y,oe,te,ge,y.depth,0,ve,ae,null):t.texImage2D(X,Y,oe,te,ge,0,ve,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,X,i.get(k).__webglTexture,0,Ee(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,X,i.get(k).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(S,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let j=n.DEPTH_COMPONENT24;if(k||He(y)){let X=y.depthTexture;X&&X.isDepthTexture&&(X.type===ai?j=n.DEPTH_COMPONENT32F:X.type===$r&&(j=n.DEPTH_COMPONENT24));let Y=Ee(y);He(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,j,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,j,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let j=Ee(y);k&&He(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let j=y.textures;for(let X=0;X<j.length;X++){let Y=j[X],ve=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),oe=b(Y.internalFormat,ve,ae,Y.colorSpace),Ie=Ee(y);k&&He(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,oe,y.width,y.height):He(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),A(y.depthTexture,0);let j=i.get(y.depthTexture).__webglTexture,X=Ee(y);if(y.depthTexture.format===Hr)He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Rs)He(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ie(S){let y=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(y.__webglFramebuffer,S)}else if(k){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=n.createRenderbuffer(),ee(y.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),ee(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(S,y,k){let j=i.get(S);y!==void 0&&H(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ie(S)}function ke(S){let y=S.texture,k=i.get(S),j=i.get(y);S.addEventListener("dispose",N);let X=S.textures,Y=S.isWebGLCubeRenderTarget===!0,ve=X.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let oe=0;oe<y.mipmaps.length;oe++)k.__webglFramebuffer[ae][oe]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ae=0,oe=X.length;ae<oe;ae++){let Ie=i.get(X[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&He(S)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<X.length;ae++){let oe=X[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);let Ie=s.convert(oe.format,oe.colorSpace),te=s.convert(oe.type),ge=b(oe.internalFormat,Ie,te,oe.colorSpace,S.isXRRenderTarget===!0),Ge=Ee(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),J(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)H(k.__webglFramebuffer[ae][oe],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else H(k.__webglFramebuffer[ae],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,oe=X.length;ae<oe;ae++){let Ie=X[ae],te=i.get(Ie);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),J(n.TEXTURE_2D,Ie),H(k.__webglFramebuffer,S,Ie,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),p(Ie)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),J(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)H(k.__webglFramebuffer[oe],S,y,n.COLOR_ATTACHMENT0,ae,oe);else H(k.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ae,0);p(y)&&h(ae),t.unbindTexture()}S.depthBuffer&&ie(S)}function R(S){let y=S.textures;for(let k=0,j=y.length;k<j;k++){let X=y[k];if(p(X)){let Y=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(X).__webglTexture;t.bindTexture(Y,ve),h(Y),t.unbindTexture()}}}let it=[],ye=[];function et(S){if(S.samples>0){if(He(S)===!1){let y=S.textures,k=S.width,j=S.height,X=n.COLOR_BUFFER_BIT,Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(S),ae=y.length>1;if(ae)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[oe]);let Ie=i.get(y[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,X,n.NEAREST),c===!0&&(it.length=0,ye.length=0,it.push(n.COLOR_ATTACHMENT0+oe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(it.push(Y),ye.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[oe]);let Ie=i.get(y[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ee(S){return Math.min(r.maxSamples,S.samples)}function He(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pe(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function ze(S,y){let k=S.colorSpace,j=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||k!==pi&&k!==oi&&(Ke.getTransfer(k)===ot?(j!==wn||X!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function lt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=_,this.setTexture2D=A,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=H,this.useMultisampledRTT=He}function sC(n,e){function t(i,r=oi){let s,o=Ke.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Eg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===KM)return n.BYTE;if(i===QM)return n.SHORT;if(i===xg)return n.UNSIGNED_SHORT;if(i===Mg)return n.INT;if(i===$r)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Ia)return n.HALF_FLOAT;if(i===tE)return n.ALPHA;if(i===nE)return n.RGB;if(i===wn)return n.RGBA;if(i===iE)return n.LUMINANCE;if(i===rE)return n.LUMINANCE_ALPHA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===sE)return n.RED;if(i===wg)return n.RED_INTEGER;if(i===oE)return n.RG;if(i===bg)return n.RG_INTEGER;if(i===Tg)return n.RGBA_INTEGER;if(i===nu||i===iu||i===ru||i===su)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===em||i===tm||i===nm||i===im)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===em)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===im)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rm||i===sm||i===om)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rm||i===sm)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===om)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===am||i===cm||i===lm||i===um||i===dm||i===fm||i===hm||i===pm||i===mm||i===gm||i===vm||i===ym||i===_m||i===xm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===am)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===um)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ym)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_m)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xm)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===Mm||i===Em)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ou)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Em)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aE||i===Sm||i===wm||i===bm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ou)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nd=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Br=class extends Ki{constructor(){super(),this.isGroup=!0,this.type="Group"}},oC={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),h=this._getHandJoint(l,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oC)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
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

}`,id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new mi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new bn({vertexShader:aC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jt(new Xr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},rd=class extends fi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null,v=new id,p=t.getContextAttributes(),h=null,b=null,M=[],w=[],N=new qe,C=null,T=new Ot;T.layers.enable(1),T.viewport=new wt;let B=new Ot;B.layers.enable(2),B.viewport=new wt;let E=[T,B],_=new nd;_.layers.enable(1),_.layers.enable(2);let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=M[H];return ee===void 0&&(ee=new Is,M[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=M[H];return ee===void 0&&(ee=new Is,M[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=M[H];return ee===void 0&&(ee=new Is,M[H]=ee),ee.getHandSpace()};function A(H){let ee=w.indexOf(H.inputSource);if(ee===-1)return;let ue=M[ee];ue!==void 0&&(ue.update(H.inputSource,H.frame,l||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function $(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",W);for(let H=0;H<M.length;H++){let ee=w[H];ee!==null&&(w[H]=null,M[H].disconnect(ee))}O=null,G=null,v.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,b=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(H){return Fa(this,null,function*(){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",$),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){let ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new jn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ue=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Rs:Hr,ue=p.stencil?Fs:$r);let Ue={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new jn(f.textureWidth,f.textureHeight,{format:wn,type:di,depthTexture:new Sa(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(H){for(let ee=0;ee<H.removed.length;ee++){let ue=H.removed[ee],ie=w.indexOf(ue);ie>=0&&(w[ie]=null,M[ie].disconnect(ue))}for(let ee=0;ee<H.added.length;ee++){let ue=H.added[ee],ie=w.indexOf(ue);if(ie===-1){for(let ke=0;ke<M.length;ke++)if(ke>=w.length){w.push(ue),ie=ke;break}else if(w[ke]===null){w[ke]=ue,ie=ke;break}if(ie===-1)break}let Ue=M[ie];Ue&&Ue.connect(ue)}}let K=new F,Z=new F;function V(H,ee,ue){K.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);let ie=K.distanceTo(Z),Ue=ee.projectionMatrix.elements,ke=ue.projectionMatrix.elements,R=Ue[14]/(Ue[10]-1),it=Ue[14]/(Ue[10]+1),ye=(Ue[9]+1)/Ue[5],et=(Ue[9]-1)/Ue[5],Ee=(Ue[8]-1)/Ue[0],He=(ke[8]+1)/ke[0],Pe=R*Ee,ze=R*He,lt=ie/(-Ee+He),S=lt*-Ee;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(S),H.translateZ(lt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let y=R+lt,k=it+lt,j=Pe-S,X=ze+(ie-S),Y=ye*it/k*y,ve=et*it/k*y;H.projectionMatrix.makePerspective(j,X,Y,ve,y,k),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Q(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),_.near=B.near=T.near=H.near,_.far=B.far=T.far=H.far,(O!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),O=_.near,G=_.far,T.near=O,T.far=G,B.near=O,B.far=G,T.updateProjectionMatrix(),B.updateProjectionMatrix(),H.updateProjectionMatrix());let ee=H.parent,ue=_.cameras;Q(_,ee);for(let ie=0;ie<ue.length;ie++)Q(ue[ie],ee);ue.length===2?V(_,T,B):_.projectionMatrix.copy(T.projectionMatrix),J(H,_,ee)};function J(H,ee,ue){ue===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vu*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let me=null;function Fe(H,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ie=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ie=!0);for(let ke=0;ke<ue.length;ke++){let R=ue[ke],it=null;if(m!==null)it=m.getViewport(R);else{let et=d.getViewSubImage(f,R);it=et.viewport,ke===0&&(e.setRenderTargetTextures(b,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(b))}let ye=E[ke];ye===void 0&&(ye=new Ot,ye.layers.enable(ke),ye.viewport=new wt,E[ke]=ye),ye.matrix.fromArray(R.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(R.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(it.x,it.y,it.width,it.height),ke===0&&(_.matrix.copy(ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ie===!0&&_.cameras.push(ye)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let ke=d.getDepthInformation(ue[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let ue=0;ue<M.length;ue++){let ie=w[ue],Ue=M[ue];ie!==null&&Ue!==void 0&&Ue.update(ie,ee,l||o)}v.render(e,_),me&&me(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Qe=new Ng;Qe.setAnimationLoop(Fe),this.setAnimationLoop=function(H){me=H},this.dispose=function(){}}},Vi=new qi,lC=new Et;function uC(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Rg(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,M,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,w)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,b,M):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ht&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ht&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let b=e.get(h),M=b.envMap,w=b.envMapRotation;if(M&&(p.envMap.value=M,Vi.copy(w),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),p.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Vi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;let N=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*N,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,b,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){let b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dC(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let w=M.program;i.uniformBlockBinding(b,w)}function l(b,M){let w=r[b.id];w===void 0&&(g(b),w=u(b),r[b.id]=w,b.addEventListener("dispose",p));let N=M.program;i.updateUBOMapping(b,N);let C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){let M=d();b.__bindingPointIndex=M;let w=n.createBuffer(),N=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,N,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=r[b.id],w=b.uniforms,N=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,T=w.length;C<T;C++){let B=Array.isArray(w[C])?w[C]:[w[C]];for(let E=0,_=B.length;E<_;E++){let O=B[E];if(m(O,C,E,N)===!0){let G=O.__offset,A=Array.isArray(O.value)?O.value:[O.value],$=0;for(let W=0;W<A.length;W++){let K=A[W],Z=v(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,G+$,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,w,N){let C=b.value,T=M+"_"+w;if(N[T]===void 0)return typeof C=="number"||typeof C=="boolean"?N[T]=C:N[T]=C.clone(),!0;{let B=N[T];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return N[T]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(b){let M=b.uniforms,w=0,N=16;for(let T=0,B=M.length;T<B;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,O=E.length;_<O;_++){let G=E[_],A=Array.isArray(G.value)?G.value:[G.value];for(let $=0,W=A.length;$<W;$++){let K=A[$],Z=v(K),V=w%N;V!==0&&N-V<Z.boundary&&(w+=N-V),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=Z.storage}}}let C=w%N;return C>0&&(w+=N-C),b.__size=w,b.__cache={},this}function v(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){let M=b.target;M.removeEventListener("dispose",p);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var wa=class{constructor(e={}){let{canvas:t=_E(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=li,this.toneMappingExposure=1;let M=this,w=!1,N=0,C=0,T=null,B=-1,E=null,_=new wt,O=new wt,G=null,A=new je(0),$=0,W=t.width,K=t.height,Z=1,V=null,Q=null,J=new wt(0,0,W,K),me=new wt(0,0,W,K),Fe=!1,Qe=new Ma,H=!1,ee=!1,ue=new Et,ie=new F,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return T===null?Z:1}let R=i;function it(x,I){return t.getContext(x,I)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gd}`),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",z,!1),R===null){let I="webgl2";if(R=it(I,x),R===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,et,Ee,He,Pe,ze,lt,S,y,k,j,X,Y,ve,ae,oe,Ie,te,ge,Ge,_e,le,Re,Be;function dt(){ye=new Ib(R),ye.init(),le=new sC(R,ye),et=new wb(R,ye,e,le),Ee=new iC(R),He=new Pb(R),Pe=new jT,ze=new rC(R,ye,Ee,Pe,et,le,He),lt=new Tb(M),S=new Ab(M),y=new VE(R),Re=new Eb(R,y),k=new Rb(R,y,He,Re),j=new Ob(R,k,y,He),ge=new Lb(R,et,ze),oe=new bb(Pe),X=new WT(M,lt,S,ye,et,Re,oe),Y=new uC(M,Pe),ve=new qT,ae=new QT(ye),te=new Mb(M,lt,S,Ee,j,f,c),Ie=new nC(M,j,et),Be=new dC(R,He,et,Ee),Ge=new Sb(R,ye,He),_e=new Nb(R,ye,He),He.programs=X.programs,M.capabilities=et,M.extensions=ye,M.properties=Pe,M.renderLists=ve,M.shadowMap=Ie,M.state=Ee,M.info=He}dt();let Ne=new rd(M,R);this.xr=Ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize(W,K,!1))},this.getSize=function(x){return x.set(W,K)},this.setSize=function(x,I,U=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,K=I,t.width=Math.floor(x*Z),t.height=Math.floor(I*Z),U===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(W*Z,K*Z).floor()},this.setDrawingBufferSize=function(x,I,U){W=x,K=I,Z=U,t.width=Math.floor(x*U),t.height=Math.floor(I*U),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,I,U,P){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,I,U,P),Ee.viewport(_.copy(J).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,I,U,P){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,I,U,P),Ee.scissor(O.copy(me).multiplyScalar(Z).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(x){Ee.setScissorTest(Fe=x)},this.setOpaqueSort=function(x){V=x},this.setTransparentSort=function(x){Q=x},this.getClearColor=function(x){return x.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(x=!0,I=!0,U=!0){let P=0;if(x){let L=!1;if(T!==null){let se=T.texture.format;L=se===Tg||se===bg||se===wg}if(L){let se=T.texture.type,fe=se===di||se===$r||se===xg||se===Fs||se===Eg||se===Sg,pe=te.getClearColor(),xe=te.getClearAlpha(),Se=pe.r,Te=pe.g,Le=pe.b;fe?(m[0]=Se,m[1]=Te,m[2]=Le,m[3]=xe,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Se,g[1]=Te,g[2]=Le,g[3]=xe,R.clearBufferiv(R.COLOR,0,g))}else P|=R.COLOR_BUFFER_BIT}I&&(P|=R.DEPTH_BUFFER_BIT),U&&(P|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",z,!1),ve.dispose(),ae.dispose(),Pe.dispose(),lt.dispose(),S.dispose(),j.dispose(),Re.dispose(),Be.dispose(),X.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ye),Ne.removeEventListener("sessionend",hn),Rt.stop()};function D(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=He.autoReset,I=Ie.enabled,U=Ie.autoUpdate,P=Ie.needsUpdate,L=Ie.type;dt(),He.autoReset=x,Ie.enabled=I,Ie.autoUpdate=U,Ie.needsUpdate=P,Ie.type=L}function z(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){let I=x.target;I.removeEventListener("dispose",re),ce(I)}function ce(x){$e(x),Pe.remove(x)}function $e(x){let I=Pe.get(x).programs;I!==void 0&&(I.forEach(function(U){X.releaseProgram(U)}),x.isShaderMaterial&&X.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,U,P,L,se){I===null&&(I=Ue);let fe=L.isMesh&&L.matrixWorld.determinant()<0,pe=$g(x,I,U,P,L);Ee.setMaterial(P,fe);let xe=U.index,Se=1;if(P.wireframe===!0){if(xe=k.getWireframeAttribute(U),xe===void 0)return;Se=2}let Te=U.drawRange,Le=U.attributes.position,mt=Te.start*Se,Tt=(Te.start+Te.count)*Se;se!==null&&(mt=Math.max(mt,se.start*Se),Tt=Math.min(Tt,(se.start+se.count)*Se)),xe!==null?(mt=Math.max(mt,0),Tt=Math.min(Tt,xe.count)):Le!=null&&(mt=Math.max(mt,0),Tt=Math.min(Tt,Le.count));let zt=Tt-mt;if(zt<0||zt===1/0)return;Re.setup(L,P,pe,U,xe);let Tn,Xe=Ge;if(xe!==null&&(Tn=y.get(xe),Xe=_e,Xe.setIndex(Tn)),L.isMesh)P.wireframe===!0?(Ee.setLineWidth(P.wireframeLinewidth*ke()),Xe.setMode(R.LINES)):Xe.setMode(R.TRIANGLES);else if(L.isLine){let we=P.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*ke()),L.isLineSegments?Xe.setMode(R.LINES):L.isLineLoop?Xe.setMode(R.LINE_LOOP):Xe.setMode(R.LINE_STRIP)}else L.isPoints?Xe.setMode(R.POINTS):L.isSprite&&Xe.setMode(R.TRIANGLES);if(L.isBatchedMesh)L._multiDrawInstances!==null?Xe.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances):Xe.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)Xe.renderInstances(mt,zt,L.count);else if(U.isInstancedBufferGeometry){let we=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Jr=Math.min(U.instanceCount,we);Xe.renderInstances(mt,zt,Jr)}else Xe.render(mt,zt)};function rt(x,I,U){x.transparent===!0&&x.side===zn&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,Bs(x,I,U),x.side=ui,x.needsUpdate=!0,Bs(x,I,U),x.side=zn):Bs(x,I,U)}this.compile=function(x,I,U=null){U===null&&(U=x),p=ae.get(U),p.init(I),b.push(p),U.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),x!==U&&x.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights(M._useLegacyLights);let P=new Set;return x.traverse(function(L){let se=L.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let pe=se[fe];rt(pe,U,L),P.add(pe)}else rt(se,U,L),P.add(se)}),b.pop(),p=null,P},this.compileAsync=function(x,I,U=null){let P=this.compile(x,I,U);return new Promise(L=>{function se(){if(P.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&P.delete(fe)}),P.size===0){L(x);return}setTimeout(se,10)}ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ut=null;function bt(x){ut&&ut(x)}function Ye(){Rt.stop()}function hn(){Rt.start()}let Rt=new Ng;Rt.setAnimationLoop(bt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(x){ut=x,Ne.setAnimationLoop(x),x===null?Rt.stop():Rt.start()},Ne.addEventListener("sessionstart",Ye),Ne.addEventListener("sessionend",hn),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(I),I=Ne.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,I,T),p=ae.get(x,b.length),p.init(I),b.push(p),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Qe.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,H=oe.init(this.clippingPlanes,ee),v=ve.get(x,h.length),v.init(),h.push(v),Ed(x,I,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(V,Q);let U=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1;U&&te.addToRenderList(v,x),this.info.render.frame++,H===!0&&oe.beginShadows();let P=p.state.shadowsArray;Ie.render(P,x,I),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=v.opaque,se=v.transmissive;if(p.setupLights(M._useLegacyLights),I.isArrayCamera){let fe=I.cameras;if(se.length>0)for(let pe=0,xe=fe.length;pe<xe;pe++){let Se=fe[pe];wd(L,se,x,Se)}U&&te.render(x);for(let pe=0,xe=fe.length;pe<xe;pe++){let Se=fe[pe];Sd(v,x,Se,Se.viewport)}}else se.length>0&&wd(L,se,x,I),U&&te.render(x),Sd(v,x,I);T!==null&&(ze.updateMultisampleRenderTarget(T),ze.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(M,x,I),Re.resetDefaultState(),B=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],H===!0&&oe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Ed(x,I,U,P){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)U=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Qe.intersectsSprite(x)){P&&ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ue);let fe=j.update(x),pe=x.material;pe.visible&&v.push(x,fe,pe,U,ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Qe.intersectsObject(x))){let fe=j.update(x),pe=x.material;if(P&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ie.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ie.copy(fe.boundingSphere.center)),ie.applyMatrix4(x.matrixWorld).applyMatrix4(ue)),Array.isArray(pe)){let xe=fe.groups;for(let Se=0,Te=xe.length;Se<Te;Se++){let Le=xe[Se],mt=pe[Le.materialIndex];mt&&mt.visible&&v.push(x,fe,mt,U,ie.z,Le)}}else pe.visible&&v.push(x,fe,pe,U,ie.z,null)}}let se=x.children;for(let fe=0,pe=se.length;fe<pe;fe++)Ed(se[fe],I,U,P)}function Sd(x,I,U,P){let L=x.opaque,se=x.transmissive,fe=x.transparent;p.setupLightsView(U),H===!0&&oe.setGlobalState(M.clippingPlanes,U),P&&Ee.viewport(_.copy(P)),L.length>0&&ks(L,I,U),se.length>0&&ks(se,I,U),fe.length>0&&ks(fe,I,U),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function wd(x,I,U,P){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[P.id]===void 0&&(p.state.transmissionRenderTarget[P.id]=new jn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Ia:di,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let se=p.state.transmissionRenderTarget[P.id],fe=P.viewport||_;se.setSize(fe.z,fe.w);let pe=M.getRenderTarget();M.setRenderTarget(se),M.getClearColor(A),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear();let xe=M.toneMapping;M.toneMapping=li;let Se=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),p.setupLightsView(P),H===!0&&oe.setGlobalState(M.clippingPlanes,P),ks(x,U,P),ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Le=0,mt=I.length;Le<mt;Le++){let Tt=I[Le],zt=Tt.object,Tn=Tt.geometry,Xe=Tt.material,we=Tt.group;if(Xe.side===zn&&zt.layers.test(P.layers)){let Jr=Xe.side;Xe.side=Ht,Xe.needsUpdate=!0,bd(zt,U,P,Tn,Xe,we),Xe.side=Jr,Xe.needsUpdate=!0,Te=!0}}Te===!0&&(ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se))}M.setRenderTarget(pe),M.setClearColor(A,$),Se!==void 0&&(P.viewport=Se),M.toneMapping=xe}function ks(x,I,U){let P=I.isScene===!0?I.overrideMaterial:null;for(let L=0,se=x.length;L<se;L++){let fe=x[L],pe=fe.object,xe=fe.geometry,Se=P===null?fe.material:P,Te=fe.group;pe.layers.test(U.layers)&&bd(pe,I,U,xe,Se,Te)}}function bd(x,I,U,P,L,se){x.onBeforeRender(M,I,U,P,L,se),x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(M,I,U,P,x,se),L.transparent===!0&&L.side===zn&&L.forceSinglePass===!1?(L.side=Ht,L.needsUpdate=!0,M.renderBufferDirect(U,I,P,L,x,se),L.side=ui,L.needsUpdate=!0,M.renderBufferDirect(U,I,P,L,x,se),L.side=zn):M.renderBufferDirect(U,I,P,L,x,se),x.onAfterRender(M,I,U,P,L,se)}function Bs(x,I,U){I.isScene!==!0&&(I=Ue);let P=Pe.get(x),L=p.state.lights,se=p.state.shadowsArray,fe=L.state.version,pe=X.getParameters(x,L.state,se,I,U),xe=X.getProgramCacheKey(pe),Se=P.programs;P.environment=x.isMeshStandardMaterial?I.environment:null,P.fog=I.fog,P.envMap=(x.isMeshStandardMaterial?S:lt).get(x.envMap||P.environment),P.envMapRotation=P.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",re),Se=new Map,P.programs=Se);let Te=Se.get(xe);if(Te!==void 0){if(P.currentProgram===Te&&P.lightsStateVersion===fe)return Cd(x,pe),Te}else pe.uniforms=X.getUniforms(x),x.onBuild(U,pe,M),x.onBeforeCompile(pe,M),Te=X.acquireProgram(pe,xe),Se.set(xe,Te),P.uniforms=pe.uniforms;let Le=P.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=oe.uniform),Cd(x,pe),P.needsLights=Xg(x),P.lightsStateVersion=fe,P.needsLights&&(Le.ambientLightColor.value=L.state.ambient,Le.lightProbe.value=L.state.probe,Le.directionalLights.value=L.state.directional,Le.directionalLightShadows.value=L.state.directionalShadow,Le.spotLights.value=L.state.spot,Le.spotLightShadows.value=L.state.spotShadow,Le.rectAreaLights.value=L.state.rectArea,Le.ltc_1.value=L.state.rectAreaLTC1,Le.ltc_2.value=L.state.rectAreaLTC2,Le.pointLights.value=L.state.point,Le.pointLightShadows.value=L.state.pointShadow,Le.hemisphereLights.value=L.state.hemi,Le.directionalShadowMap.value=L.state.directionalShadowMap,Le.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Le.spotShadowMap.value=L.state.spotShadowMap,Le.spotLightMatrix.value=L.state.spotLightMatrix,Le.spotLightMap.value=L.state.spotLightMap,Le.pointShadowMap.value=L.state.pointShadowMap,Le.pointShadowMatrix.value=L.state.pointShadowMatrix),P.currentProgram=Te,P.uniformsList=null,Te}function Td(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=Gr.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Cd(x,I){let U=Pe.get(x);U.outputColorSpace=I.outputColorSpace,U.batching=I.batching,U.instancing=I.instancing,U.instancingColor=I.instancingColor,U.instancingMorph=I.instancingMorph,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function $g(x,I,U,P,L){I.isScene!==!0&&(I=Ue),ze.resetTextureUnits();let se=I.fog,fe=P.isMeshStandardMaterial?I.environment:null,pe=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:pi,xe=(P.isMeshStandardMaterial?S:lt).get(P.envMap||fe),Se=P.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Te=!!U.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Le=!!U.morphAttributes.position,mt=!!U.morphAttributes.normal,Tt=!!U.morphAttributes.color,zt=li;P.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(zt=M.toneMapping);let Tn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Xe=Tn!==void 0?Tn.length:0,we=Pe.get(P),Jr=p.state.lights;if(H===!0&&(ee===!0||x!==E)){let $t=x===E&&P.id===B;oe.setState(P,x,$t)}let at=!1;P.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Jr.state.version||we.outputColorSpace!==pe||L.isBatchedMesh&&we.batching===!1||!L.isBatchedMesh&&we.batching===!0||L.isInstancedMesh&&we.instancing===!1||!L.isInstancedMesh&&we.instancing===!0||L.isSkinnedMesh&&we.skinning===!1||!L.isSkinnedMesh&&we.skinning===!0||L.isInstancedMesh&&we.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&we.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&we.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&we.instancingMorph===!1&&L.morphTexture!==null||we.envMap!==xe||P.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==oe.numPlanes||we.numIntersection!==oe.numIntersection)||we.vertexAlphas!==Se||we.vertexTangents!==Te||we.morphTargets!==Le||we.morphNormals!==mt||we.morphColors!==Tt||we.toneMapping!==zt||we.morphTargetsCount!==Xe)&&(at=!0):(at=!0,we.__version=P.version);let gi=we.currentProgram;at===!0&&(gi=Bs(P,I,L));let Dd=!1,Kr=!1,Pa=!1,Ct=gi.getUniforms(),$n=we.uniforms;if(Ee.useProgram(gi.program)&&(Dd=!0,Kr=!0,Pa=!0),P.id!==B&&(B=P.id,Kr=!0),Dd||E!==x){Ct.setValue(R,"projectionMatrix",x.projectionMatrix),Ct.setValue(R,"viewMatrix",x.matrixWorldInverse);let $t=Ct.map.cameraPosition;$t!==void 0&&$t.setValue(R,ie.setFromMatrixPosition(x.matrixWorld)),et.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Kr=!0,Pa=!0)}if(L.isSkinnedMesh){Ct.setOptional(R,L,"bindMatrix"),Ct.setOptional(R,L,"bindMatrixInverse");let $t=L.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ct.setValue(R,"boneTexture",$t.boneTexture,ze))}L.isBatchedMesh&&(Ct.setOptional(R,L,"batchingTexture"),Ct.setValue(R,"batchingTexture",L._matricesTexture,ze));let La=U.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0)&&ge.update(L,U,gi),(Kr||we.receiveShadow!==L.receiveShadow)&&(we.receiveShadow=L.receiveShadow,Ct.setValue(R,"receiveShadow",L.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&($n.envMap.value=xe,$n.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&I.environment!==null&&($n.envMapIntensity.value=I.environmentIntensity),Kr&&(Ct.setValue(R,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&qg($n,Pa),se&&P.fog===!0&&Y.refreshFogUniforms($n,se),Y.refreshMaterialUniforms($n,P,Z,K,p.state.transmissionRenderTarget[x.id]),Gr.upload(R,Td(we),$n,ze)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Gr.upload(R,Td(we),$n,ze),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Ct.setValue(R,"center",L.center),Ct.setValue(R,"modelViewMatrix",L.modelViewMatrix),Ct.setValue(R,"normalMatrix",L.normalMatrix),Ct.setValue(R,"modelMatrix",L.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let $t=P.uniformsGroups;for(let Oa=0,Yg=$t.length;Oa<Yg;Oa++){let Ad=$t[Oa];Be.update(Ad,gi),Be.bind(Ad,gi)}}return gi}function qg(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Xg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,I,U){Pe.get(x.texture).__webglTexture=I,Pe.get(x.depthTexture).__webglTexture=U;let P=Pe.get(x);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=U===void 0,P.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){let U=Pe.get(x);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,U=0){T=x,N=I,C=U;let P=!0,L=null,se=!1,fe=!1;if(x){let xe=Pe.get(x);xe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(R.FRAMEBUFFER,null),P=!1):xe.__webglFramebuffer===void 0?ze.setupRenderTarget(x):xe.__hasExternalTextures&&ze.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);let Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);let Te=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?L=Te[I][U]:L=Te[I],se=!0):x.samples>0&&ze.useMultisampledRTT(x)===!1?L=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?L=Te[U]:L=Te,_.copy(x.viewport),O.copy(x.scissor),G=x.scissorTest}else _.copy(J).multiplyScalar(Z).floor(),O.copy(me).multiplyScalar(Z).floor(),G=Fe;if(Ee.bindFramebuffer(R.FRAMEBUFFER,L)&&P&&Ee.drawBuffers(x,L),Ee.viewport(_),Ee.scissor(O),Ee.setScissorTest(G),se){let xe=Pe.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,U)}else if(fe){let xe=Pe.get(x.texture),Se=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.__webglTexture,U||0,Se)}B=-1},this.readRenderTargetPixels=function(x,I,U,P,L,se,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(pe=pe[fe]),pe){Ee.bindFramebuffer(R.FRAMEBUFFER,pe);try{let xe=x.texture,Se=xe.format,Te=xe.type;if(!et.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-P&&U>=0&&U<=x.height-L&&R.readPixels(I,U,P,L,le.convert(Se),le.convert(Te),se)}finally{let xe=T!==null?Pe.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(x,I,U=0){let P=Math.pow(2,-U),L=Math.floor(I.image.width*P),se=Math.floor(I.image.height*P);ze.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,U,0,0,x.x,x.y,L,se),Ee.unbindTexture()},this.copyTextureToTexture=function(x,I,U,P=0){let L=I.image.width,se=I.image.height,fe=le.convert(U.format),pe=le.convert(U.type);ze.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,P,x.x,x.y,L,se,fe,pe,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,P,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,fe,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,P,x.x,x.y,fe,pe,I.image),P===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,I,U,P,L=0){let se=x.max.x-x.min.x,fe=x.max.y-x.min.y,pe=x.max.z-x.min.z,xe=le.convert(P.format),Se=le.convert(P.type),Te;if(P.isData3DTexture)ze.setTexture3D(P,0),Te=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)ze.setTexture2DArray(P,0),Te=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);let Le=R.getParameter(R.UNPACK_ROW_LENGTH),mt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tt=R.getParameter(R.UNPACK_SKIP_PIXELS),zt=R.getParameter(R.UNPACK_SKIP_ROWS),Tn=R.getParameter(R.UNPACK_SKIP_IMAGES),Xe=U.isCompressedTexture?U.mipmaps[L]:U.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Xe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,x.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,x.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,x.min.z),U.isDataTexture||U.isData3DTexture?R.texSubImage3D(Te,L,I.x,I.y,I.z,se,fe,pe,xe,Se,Xe.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(Te,L,I.x,I.y,I.z,se,fe,pe,xe,Xe.data):R.texSubImage3D(Te,L,I.x,I.y,I.z,se,fe,pe,xe,Se,Xe),R.pixelStorei(R.UNPACK_ROW_LENGTH,Le),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tt),R.pixelStorei(R.UNPACK_SKIP_ROWS,zt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tn),L===0&&P.generateMipmaps&&R.generateMipmap(Te),Ee.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?ze.setTextureCube(x,0):x.isData3DTexture?ze.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ze.setTexture2DArray(x,0):ze.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){N=0,C=0,T=null,Ee.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yd?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ra?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}};var ba=class extends Ki{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ta=class extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function sa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Yr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sd=class extends Yr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tm,endingEnd:Tm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cm:s=e,a=2*t-i;break;case Dm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cm:o=e,c=2*i-t;break;case Dm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,h=-f*p+2*f*v-f*g,b=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-m)*p+(1.5+m)*v+.5*g,w=m*p-m*v;for(let N=0;N!==a;++N)s[N]=h*o[u+N]+b*o[l+N]+M*o[c+N]+w*o[d+N];return s}},od=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},ad=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&fC(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===au,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,m=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ca;var Zi=class extends fn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=aa;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var cd=class extends fn{};cd.prototype.ValueTypeName="color";var ld=class extends fn{};ld.prototype.ValueTypeName="number";var ud=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)hi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Os=class extends fn{InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.DefaultInterpolation=ca;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends fn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=aa;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends fn{};dd.prototype.ValueTypeName="vector";var yg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},fd=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},hC=new fd,kg=(()=>{class n{constructor(t){this.manager=t!==void 0?t:hC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var hd=class extends kg{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=yg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ns("img");function c(){u(),yg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Ca=class extends kg{constructor(e){super(e)}load(e,t,i,r){let s=new mi,o=new hd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},pd=class extends Ki{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Da=class extends pd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var xd="\\[\\]\\.:\\/",pC=new RegExp("["+xd+"]","g"),Md="[^"+xd+"]",mC="[^"+xd.replace("\\.","")+"]",gC=/((?:WC+[\/:])*)/.source.replace("WC",Md),vC=/(WCOD+)?/.source.replace("WCOD",mC),yC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),_C=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),xC=new RegExp("^"+gC+vC+yC+_C+"$"),MC=["material","materials","bones","map"],md=class{constructor(e,t,i){let r=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pC,"")}static parseTrackName(t){let i=xC.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);MC.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=md,n})();pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lI=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);var Bg=(()=>{let e=class e{constructor(i){this.ngZone=i,this.particles=[],this.w=window.innerWidth,this.h=window.innerHeight}ngOnDestroy(){this.frameId&&cancelAnimationFrame(this.frameId)}createScene(i){this.canvas=i.nativeElement,this.scene=new ba,this.camera=new Ot(75,this.w/this.h,1,1e3),this.camera.position.z=10,this.scene.add(this.camera),this.renderer=new wa({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.w,this.h),this.renderer.render(this.scene,this.camera),this.light=new Da("#fff"),this.light.position.set(-1,3,1),this.light.rotateX(60),this.scene.add(this.light);let r=new Ca;r.crossOrigin="",r.load("./assets/humo.png",s=>{let o=new Xr(300,300),a=new Ta({map:s,transparent:!0,opacity:.025}),c=300;for(let l=0;l<c;l++){let u=new jt(o,a);u.position.set(Math.random()*500-500/2,Math.random()*500-500/2,Math.random()*1e3-100),u.rotation.z=Math.random()*360,this.scene?.add(u),this.particles.push(u)}})}animate(){this.ngZone.runOutsideAngular(()=>{document.readyState!=="loading"?this.render():window.addEventListener("DOMContentLoaded",()=>{this.render()})})}render(){this.frameId=requestAnimationFrame(()=>{this.render()}),this.particles.forEach(i=>{i.rotation.z+=.0015}),this.resize(),this.renderer.render(this.scene,this.camera)}resize(){this.h=window.innerHeight,this.w=window.innerWidth,this.camera.aspect=this.w/this.h,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.w,this.h)}};e.\u0275fac=function(r){return new(r||e)(Je(xt))},e.\u0275prov=ft({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var SC=["renderCanvas"],Vg=(()=>{let e=class e{constructor(){this.engineService=gt(Bg)}ngAfterViewInit(){this.engineService.createScene(this.renderCanvas),this.engineService.animate()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-three"]],viewQuery:function(r,s){if(r&1&&Tp(SC,7),r&2){let o;Cp(o=Dp())&&(s.renderCanvas=o.first)}},standalone:!0,features:[Xt],decls:3,vars:0,consts:[["renderCanvas",""],[1,"three-wrapper"],["id","renderCanvas",1,"fixed","top-0","h-full","w-full","-z-10"]],template:function(r,s){r&1&&(de(0,"div",1),nt(1,"canvas",2,0),he())},dependencies:[an],encapsulation:2});let n=e;return n})();var wC=n=>({"scale-95":n}),bC=(n,e)=>({"opacity-0 -z-50":n,"z-40":e}),Hg=(()=>{let e=class e{constructor(){this.showNavbar=!1}toggleNavbar(){this.showNavbar=!this.showNavbar}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-navbar"]],standalone:!0,features:[Xt],decls:15,vars:7,consts:[["src","assets/hamburger.svg","alt","menu",1,"md:hidden","fixed","z-50","right-1","m-2","text-primary","h-[40px]","transition-all","cursor-pointer",3,"click","ngClass"],[1,"nav-container","h-[100%]","md:h-[60px]","w-full","flex","flex-col","md:flex-row","md:justify-between","text-white","fixed","px-6","bg-dark","bg-opacity-75","md:bg-opacity-70","transition-all","md:opacity-100","md:z-10",3,"ngClass"],["src","assets/icon1.png","alt","",1,"h-[60px]","w-full","md:w-auto","object-contain","md:h-full"],[1,""],[1,"flex","flex-col","md:flex-row"],["href","#home",1,"h-full","p-5","flex","justify-center","items-center","hover:scale-105","hover:border-primary","hover:border-b-[1px]","hover:bg-primary","hover:bg-opacity-15","active:scale-100"],["href","#conocimientos",1,"h-full","p-5","flex","justify-center","items-center","hover:scale-105","hover:border-primary","hover:border-b-[1px]","hover:bg-primary","hover:bg-opacity-15","active:scale-100"],["href","#trabajos",1,"h-full","p-5","flex","justify-center","items-center","hover:scale-105","hover:border-primary","hover:border-b-[1px]","hover:bg-primary","hover:bg-opacity-15","active:scale-100"],["href","#experiencia",1,"h-full","p-5","flex","justify-center","items-center","hover:scale-105","hover:border-primary","hover:border-b-[1px]","hover:bg-primary","hover:bg-opacity-15","active:scale-100"],["href","#contactame",1,"h-full","p-5","flex","justify-center","items-center","hover:scale-105","hover:border-primary","hover:border-b-[1px]","hover:bg-primary","hover:bg-opacity-15","active:scale-100"]],template:function(r,s){r&1&&(de(0,"img",0),Ni("click",function(){return s.toggleNavbar()}),he(),de(1,"div",1),nt(2,"img",2),de(3,"ul",3)(4,"li",4)(5,"a",5),Ce(6,"Inicio"),he(),de(7,"a",6),Ce(8,"Conocimientos"),he(),de(9,"a",7),Ce(10,"Trabajos"),he(),de(11,"a",8),Ce(12,"Experiencia"),he(),de(13,"a",9),Ce(14,"Contactame"),he()()()()),r&2&&(kt("ngClass",_r(2,wC,!s.showNavbar)),ht(),kt("ngClass",Ro(4,bC,!s.showNavbar,s.showNavbar)))},dependencies:[an,Qn],encapsulation:2});let n=e;return n})();var TC=(n,e)=>({"hover:border-b-[2px] hover:border-primary hover:scale-95 hover:bg-primary hover:bg-opacity-15 hover:pl-[10px]":!0,"pl-15 border-b-[2px] border-primary scale-95 bg-primary bg-opacity-15":n,"col-span-2":e});function CC(n,e){if(n&1){let t=Io();de(0,"li",7),Ni("mouseenter",function(){let r=xo(t).$implicit,s=yr();return Mo(s.hoverOption(r))}),de(1,"span",8),Ce(2),he()()}if(n&2){let t=e.$implicit,i=e.$index,r=e.$count,s=yr();kt("ngClass",Ro(2,TC,s.lastHoverOption===t,i===r-1)),ht(2),Li(" ",t," ")}}function DC(n,e){if(n&1&&(de(0,"li",6),nt(1,"img",9),de(2,"p",10),Ce(3),he()()),n&2){let t=e.$implicit;ht(),kt("src",t.img,Ci)("alt",t.name),ht(2),Li(" ",t.name," ")}}var zg=(()=>{let e=class e{constructor(){this.skillOptions=["Front-end","Back-end","Herramientas"],this.lastHoverOption="Front-end",this.skillItemsToShow=[],this.skillItems=[{name:"HTML",img:"assets/html.png",categoria:"Front-end"},{name:"CSS",img:"assets/css.png",categoria:"Front-end"},{name:"JavaScript",img:"assets/js.png",categoria:"Front-end"},{name:"TypeScript",img:"assets/ts.png",categoria:"Front-end"},{name:"Angular",img:"assets/angular.webp",categoria:"Front-end"},{name:"Bootstrap",img:"assets/bootstrap.png",categoria:"Front-end"},{name:"Java",img:"assets/java.png",categoria:"Back-end"},{name:"Spring",img:"assets/spring.png",categoria:"Back-end"},{name:"Python",img:"assets/python.png",categoria:"Back-end"},{name:"SQL Server",img:"assets/SQLserver.webp",categoria:"Back-end"},{name:"MySQL",img:"assets/mysql.png",categoria:"Back-end"},{name:"Git",img:"assets/git.png",categoria:"Herramientas"},{name:"GitHub",img:"assets/github.svg",categoria:"Herramientas"},{name:"Postman",img:"assets/post.png",categoria:"Herramientas"},{name:"Figma",img:"assets/figma.webp",categoria:"Herramientas"},{name:"Photoshop",img:"assets/ps.png",categoria:"Herramientas"}]}ngOnInit(){this.skillItemsToShow=this.skillItems.filter(i=>i.categoria===this.lastHoverOption)}hoverOption(i){this.lastHoverOption=i,this.skillItemsToShow=this.skillItems.filter(r=>r.categoria===i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-skills"]],standalone:!0,features:[Xt],decls:9,vars:0,consts:[[1,"skills-container","h-full","w-full","flex","flex-col","md:flex-row","mt-20"],[1,"skills-list","w-[100%]","md:w-[40%]","h-[250px]"],[1,"grid","grid-cols-2","md:grid-cols-1","md:grid-rows-3","h-full"],[1,"text-2xl","flex","flex-grow","justify-center","md:justify-start","md:col-span-1","items-center","hover:border-b-[2px]","hover:border-primary","transition-transform","duration-200","active:scale-100","active:duration-0","hover:scale-95","hover:bg-primary","hover:bg-opacity-15","hover:pl-[10px]","animate-fadeIn","cursor-pointer","w-full","pl-0","md:pl-[5px]",3,"ngClass"],[1,"skills-item-list","flex-grow","mt-10","md:mt-0"],[1,"h-full","w-full","grid","grid-cols-3","md:grid-cols-5"],[1,"h-full","flex","flex-col","items-center","mt-5","cursor-pointer","text-grey","hover:text-primary","hover:scale-105","transition-transform","duration-150","hover:font-bold","active:duration-0","active:scale-100"],[1,"text-2xl","flex","flex-grow","justify-center","md:justify-start","md:col-span-1","items-center","hover:border-b-[2px]","hover:border-primary","transition-transform","duration-200","active:scale-100","active:duration-0","hover:scale-95","hover:bg-primary","hover:bg-opacity-15","hover:pl-[10px]","animate-fadeIn","cursor-pointer","w-full","pl-0","md:pl-[5px]",3,"mouseenter","ngClass"],[1,"pointer-events-none"],[1,"h-[90px]","pb-5","transition-transform","duration-150",3,"src","alt"],[1,"transition-transform","duration-150"]],template:function(r,s){r&1&&(de(0,"div",0)(1,"div",1)(2,"ul",2),Ii(3,CC,3,5,"li",3,Ai),he()(),de(5,"div",4)(6,"ul",5),Ii(7,DC,4,3,"li",6,Ai),he()()()),r&2&&(ht(3),Ri(s.skillOptions),ht(4),Ri(s.skillItemsToShow))},dependencies:[an,Qn],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var AC=n=>({"ml-auto":n});function IC(n,e){if(n&1&&(de(0,"div",2),nt(1,"img",3),de(2,"li",4)(3,"h2",5),Ce(4),he(),de(5,"p",6),Ce(6),he(),de(7,"p",7),Ce(8),he()()()),n&2){let t=e.$implicit,i=e.$index;ht(),kt("src",t.img,Ci),ht(),kt("ngClass",_r(5,AC,i%2!==0)),ht(2),Li(" ",t.title," "),ht(2),Pi(t.periodo),ht(2),Pi(t.description)}}var Gg=(()=>{let e=class e{constructor(){this.experienceList=[{title:"Tecnico an\xE1lisis y desarrollo de software",periodo:"SENA - 2021 ene  / 2022 dic",img:"assets/icon1.png"},{title:"Desarrollador",periodo:"SENA - 2022 ene - jun",img:"assets/icon2.png",description:"Dise\xF1o de mockups e interfaces para web de DigibootCamp, iniciativa como plataforma para cursos cortos y bootcamps de progrmaci\xF3n"},{title:"Analista TI",periodo:"Grupo Logis - 2022 ago / Actualidad",img:"assets/icon2.png",description:"Automatizaci\xF2n de procesos con Power Platform, dise\xF1o de interfaces, administraci\xF2n de bases de datos SQL SERVER "}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-experience"]],standalone:!0,features:[Xt],decls:4,vars:0,consts:[[1,"mt-1","h-full","overflow-hidden","flex","flex-col","relative","container","mx-auto","px-6","space-y-8","border-primary","border-b-2","pb-6"],[1,"absolute","w-1","h-[99%]","bg-primary","inset-0","shadow-md","mx-auto","left-0","right-0","-z-0"],[1,"relative","z-0","flex","flex-col","items-center","md:block"],["alt","",1,"relative","md:block","h-[60px]","w-[60px]","border-primary","border-2","rounded-full","p-2","my-5","bg-dark","shadow-md","md:mx-auto","mleft-0","right-0;",3,"src"],[1,"rounded","border-2","border-primary","p-4","my-5","bg-dark","md:w-1/2","relative","pt-2",3,"ngClass"],[1,"text-2xl"],[1,"text-primary","text-lg"],[1,""]],template:function(r,s){r&1&&(de(0,"ul",0),nt(1,"div",1),Ii(2,IC,9,7,"div",2,Ai),he()),r&2&&(ht(2),Ri(s.experienceList))},dependencies:[an,Qn],encapsulation:2});let n=e;return n})();var RC=n=>({"border-opacity-90 bg-primary bg-opacity-15 border-[2px]  p-3":n});function NC(n,e){if(n&1){let t=Io();de(0,"li",11),Ni("click",function(){let r=xo(t).$implicit,s=yr();return Mo(s.hoverItem(r))}),nt(1,"img",12),he()}if(n&2){let t=e.$implicit,i=yr();kt("ngClass",_r(3,RC,(i.selectecWork==null?null:i.selectecWork.title)===t.title)),ht(),kt("src",t.logo,Ci)("alt",t.title)}}var Wg=(()=>{let e=class e{constructor(){this.worksList=[{title:"Chromatic",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quos. Ipsa impedit et dignissimos aliquam nemo cum, quisquam, fuga doloribus deserunt blanditiis soluta provident possimus maxime exercitationem eaque. Nostrum architecto explicabo illo cum, accusamus atque, optio recusandae ab dolore magni aliquid, dignissimos nam repellat excepturi. Doloribus deserunt odit minima reiciendis animi nihil, qui consequatur totam, sequi repudiandae at deleniti tenetur",image:"assets/gal-img/madmax.png",logo:"assets/logos/madmax.svg",demoLink:"https://chromatic-9f8f9.web.app/",sourceLink:"https://github.com/alexandru-georgescu/chromatic"},{title:"Chromatic2",description:"A color palette generator",image:"assets/gal-img/madmax.png",logo:"assets/logos/madmax.svg",demoLink:"https://chromatic-9f8f9.web.app/",sourceLink:"https://github.com/alexandru-georgescu/chromatic"},{title:"Chromatic3",description:"A color palette generator",image:"assets/gal-img/madmax.png",logo:"assets/logos/madmax.svg",demoLink:"https://chromatic-9f8f9.web.app/",sourceLink:"https://github.com/alexandru-georgescu/chromatic"}]}ngOnInit(){this.selectecWork=this.worksList[0]}hoverItem(i){this.selectecWork=i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-works-gal"]],standalone:!0,features:[Xt],decls:16,vars:3,consts:[[1,"works-container","h-full","w-full","grid","grid-cols-1","md:grid-cols-4","grid-rows-2"],["alt","work",1,"col-span-3","w-full","h-[500px]","border-primary","border-2","object-cover","object-center","hover:border-[0.3rem]","transition-all","hover:cursor-pointer","order-1",3,"src"],[1,"col-span-1","w-full","h-full","flex","md:flex-col","gap-3","md:min-h-[400px]","px-2","row-span-2","mb-6","md:mb-0","overflow-x-clip"],[1,"border-primary","border-2","border-opacity-25","rounded","h-[150px]","flex","items-center","justify-center","p-4","transition-all","active:p-4","hover:border-[3px]","cursor-pointer","hover:border-opacity-75","w-[350px]",3,"ngClass"],[1,"work-info","flex","w-full","pl-6","mt-8","col-span-3","order-1"],[1,"work-desc","w-full","flex","flex-col","pr-6"],[1,"w-full"],[1,"text-2xl","bg-primary","py-1","px-8","mr-5","hover:py-2","transition-all"],[1,"text-2xl","text-primary","border-primary","border-2","py-1","px-8","mr-5","hover:py-2","transition-all"],[1,"text-5xl","my-6"],[1,"text-grey"],[1,"border-primary","border-2","border-opacity-25","rounded","h-[150px]","flex","items-center","justify-center","p-4","transition-all","active:p-4","hover:border-[3px]","cursor-pointer","hover:border-opacity-75","w-[350px]",3,"click","ngClass"],[1,"w-full","h-full","object-contain",3,"src","alt"]],template:function(r,s){r&1&&(de(0,"div",0),nt(1,"img",1),de(2,"ul",2),Ii(3,NC,2,5,"li",3,Ai),he(),de(5,"div",4)(6,"div",5)(7,"div",6)(8,"button",7),Ce(9," DEMO "),he(),de(10,"button",8),Ce(11," CODIGO "),he()(),de(12,"h2",9),Ce(13),he(),de(14,"p",10),Ce(15),he()()()()),r&2&&(ht(),kt("src",s.selectecWork==null?null:s.selectecWork.image,Ci),ht(2),Ri(s.worksList),ht(10),Pi(s.selectecWork==null?null:s.selectecWork.title),ht(2),Pi(s.selectecWork==null?null:s.selectecWork.description))},dependencies:[an,Qn],encapsulation:2});let n=e;return n})();var jg=(()=>{let e=class e{constructor(){this.title="AndersonDavi"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=qt({type:e,selectors:[["app-root"]],standalone:!0,features:[Xt],decls:70,vars:0,consts:[[1,"h-[60px]"],["id","home",1,"h-[100vh]","flex","flex-grow","md:flex-grow-0","flex-col","md:flex-row","md:w-full","px-5","md:px-0"],[1,"h-full","w-full","flex-grow","flex","flex-col","items-center","md:items-start","md:justify-center","justify-center","md:pl-8"],[1,"text-center","text-6xl","mb-3","font-semibold"],[1,"hover:text-primary","hover:text-7xl","cursor-default","hover:transition-transform","duration-75","hover:inline"],[1,"md:hidden"],[1,"text-3xl","md:text-2xl","mb-3","font-thin","text-grey","mt-12","md:mt-0"],[1,"w-[50%]","md:w-[450px]","border-b-2","border-solid","border-primary","mt-12","md:mt-0"],[1,"h-[500px]","md:h-full","w-full","md:w-[130px]","flex","md:flex-grow","md:flex-col","md:items-center","justify-center"],["href","https://github.com/AndersonDavi","target","_blank"],["src","assets/github.svg","alt","github",1,"h-[60px]","md:h-[40px]","my-3","hover:scale-110","mx-5","md:mx-0"],["href","https://www.linkedin.com/in/anderson-david-rueda-consuegra-16b32821b/","target","_blank"],["src","assets/linkedin.svg","alt","github",1,"h-[60px]","md:h-[40px]","my-3","hover:scale-110","mx-5","md:mx-0"],["id","conocimientos",1,"pt-4","px-8","h-[100vh]","mb-[200px]","md:mb-0"],[1,"h-auto"],[1,"text-6xl","mb-3","font-semibold","text-center","md:text-left"],[1,"text-2xl","mb-3","font-thin","text-grey","text-center","md:text-left"],["id","trabajos",1,"pt-4","px-8","flex","flex-col","justify-center","h-auto","w-full"],[1,"text-center","text-6xl","mb-8","font-semibold"],["id","experiencia",1,"pt-4","px-8","flex","flex-col","items-center","justify-center","h-auto","mt-8"],[1,"text-center","text-6xl","mb-3","font-semibold","my-1"],[1,"text-3xl","mb-3","font-thin","text-grey","my-1","text-center"],[1,"w-[50%]","md:w-[20%]","border-b-2","border-primary","my-2"],["id","contactame",1,"pt-4","px-8","flex","flex-col","items-center","justify-center","h-[100vh]"],[1,"text-center","text-6xl","mb-3","font-semibold","my-5"],[1,"text-3xl","mb-3","font-thin","text-grey","my-5"],[1,"w-[50%]","border-b-2","border-primary","my-5"],[1,"w-full","flex","justify-center","my-5"],["src","assets/github.svg","alt","github",1,"h-[60px]","md:h-[40px]","my-3","hover:scale-110","mx-5"],["src","assets/linkedin.svg","alt","github",1,"h-[60px]","md:h-[40px]","my-3","hover:scale-110","mx-5"]],template:function(r,s){r&1&&(nt(0,"app-navbar")(1,"div",0),de(2,"section",1)(3,"div",2)(4,"h2",3)(5,"span",4),Ce(6,"A"),he(),de(7,"span",4),Ce(8,"n"),he(),de(9,"span",4),Ce(10,"d"),he(),de(11,"span",4),Ce(12,"e"),he(),de(13,"span",4),Ce(14,"r"),he(),de(15,"span",4),Ce(16,"s"),he(),de(17,"span",4),Ce(18,"o"),he(),de(19,"span",4),Ce(20,"n "),he(),nt(21,"br",5),de(22,"span",4),Ce(23,"D"),he(),de(24,"span",4),Ce(25,"a"),he(),de(26,"span",4),Ce(27,"v"),he(),de(28,"span",4),Ce(29,"i"),he(),de(30,"span",4),Ce(31,"d"),he()(),de(32,"p",6),Ce(33," Desarrollador Front-end "),he(),nt(34,"p",7),he(),de(35,"div",8)(36,"a",9),nt(37,"img",10),he(),de(38,"a",11),nt(39,"img",12),he()()(),de(40,"section",13)(41,"div",14)(42,"h2",15),Ce(43," Conocimientos "),he(),de(44,"p",16),Ce(45," Lenguajes, frameworks y herramientas "),he()(),nt(46,"app-skills"),he(),de(47,"section",17)(48,"h2",18),Ce(49,"Portafolio"),he(),nt(50,"app-works-gal"),he(),de(51,"section",19)(52,"h2",20),Ce(53,"Experiencia"),he(),de(54,"p",21),Ce(55," Timeline educaci\xF3n y experiencia laboral "),he(),nt(56,"p",22)(57,"app-experience"),he(),de(58,"section",23)(59,"h2",24),Ce(60,"Contactame"),he(),de(61,"p",25),Ce(62," andesondavid17@gmail.com "),he(),nt(63,"p",26),de(64,"div",27)(65,"a",9),nt(66,"img",28),he(),de(67,"a",11),nt(68,"img",29),he()()(),nt(69,"app-three"))},dependencies:[Vg,Hg,zg,Gg,Wg],styles:["app-three[_ngcontent-%COMP%]{z-index:-999;position:fixed}"]});let n=e;return n})();qp(jg,Xp).catch(n=>console.error(n));
