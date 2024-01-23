/*! For license information please see main.d1190c577283217855de.js.LICENSE.txt */
(()=>{"use strict";var n={655:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap);"]),i.push([n.id,":root {\n  --clr-black: #1c1c1c;\n  --clr-gray: #ececec;\n  --clr-white: #f7f7f7;\n\n  --type-normal: #a8a878;\n  --type-fire: #f08030;\n  --type-water: #6890f0;\n  --type-grass: #78c850;\n  --type-electric: #f8d030;\n  --type-ice: #98d8d8;\n  --type-fighting: #c03028;\n  --type-poison: #a040a0;\n  --type-ground: #e0c068;\n  --type-flying: #a890f0;\n  --type-psychic: #f85888;\n  --type-bug: #a8b820;\n  --type-rock: #b8a038;\n  --type-ghost: #705898;\n  --type-dark: #705848;\n  --type-dragon: #7038f8;\n  --type-steel: #b8b8d0;\n  --type-fairy: #f0b6bc;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: var(--clr-black);\n  font-family: 'Rubik', sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: var(--clr-gray);\n}\n\nheader {\n  padding-block: 1rem;\n  box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 0.5);\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n  padding-inline: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.btn-header {\n  background-color: var(--clr-gray);\n  padding: 0.5rem;\n  border-radius: 100vmax;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 600;\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);\n  transition: 0.2s;\n}\n\n.btn-header:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);\n}\n\nmain {\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\nimg {\n  max-width: 100%;\n  display: inline-block;\n}\n.pokemon-todos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n@media screen and (min-width: 470px) {\n  .pokemon-todos {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .pokemon-todos {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n.pokemon {\n  border-radius: 1rem;\n  background-color: var(--clr-white);\n  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.25);\n  padding-block: 1rem;\n  text-transform: uppercase;\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n}\n\n.pokemon-id-back {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 6rem;\n  font-weight: 800;\n  z-index: -1;\n  color: var(--clr-gray);\n}\n\n.pokemon-imagen {\n  padding-inline: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.pokemon-imagen img {\n  width: 100%;\n  max-width: 6rem;\n}\n\n.pokemon-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-inline: 1rem;\n  align-items: center;\n  text-align: center;\n}\n\n.nombre-contenedor {\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.pokemon-id {\n  background-color: var(--clr-gray);\n  padding: 0.25rem 0.5rem;\n  border-radius: 100vmax;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n\n.pokemon-nombre {\n  font-size: 1.4rem;\n}\n\n.pokemon-tipos {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.tipo {\n  padding: 0.25rem 0.5rem;\n  border-radius: 100vmax;\n}\n\n.pokemon-stats {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.85rem;\n}\n\n.stat {\n  background-color: var(--clr-gray);\n  padding: 0.25rem 0.5rem;\n  border-radius: 100vmax;\n}\n\n.normal {\n  background-color: var(--type-normal);\n  color: var(--clr-black);\n}\n\n.fire {\n  background-color: var(--type-fire);\n  color: var(--clr-black);\n}\n\n.water {\n  background-color: var(--type-water);\n  color: var(--clr-white);\n}\n\n.grass {\n  background-color: var(--type-grass);\n  color: var(--clr-black);\n}\n\n.electric {\n  background-color: var(--type-electric);\n  color: var(--clr-black);\n}\n\n.ice {\n  background-color: var(--type-ice);\n  color: var(--clr-black);\n}\n\n.fighting {\n  background-color: var(--type-fighting);\n  color: var(--clr-white);\n}\n\n.poison {\n  background-color: var(--type-poison);\n  color: var(--clr-white);\n}\n\n.ground {\n  background-color: var(--type-ground);\n  color: var(--clr-black);\n}\n\n.flying {\n  background-color: var(--type-flying);\n  color: var(--clr-black);\n}\n\n.psychic {\n  background-color: var(--type-psychic);\n  color: var(--clr-black);\n}\n\n.bug {\n  background-color: var(--type-bug);\n  color: var(--clr-black);\n}\n\n.rock {\n  background-color: var(--type-rock);\n  color: var(--clr-black);\n}\n\n.ghost {\n  background-color: var(--type-ghost);\n  color: var(--clr-white);\n}\n\n.dark {\n  background-color: var(--type-dark);\n  color: var(--clr-white);\n}\n\n.dragon {\n  background-color: var(--type-dragon);\n  color: var(--clr-white);\n}\n\n.steel {\n  background-color: var(--type-steel);\n  color: var(--clr-black);\n}\n\n.fairy {\n  background-color: var(--type-fairy);\n  color: var(--clr-black);\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=e(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);e.update(n);return function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var l=r(n,o),s=0;s<a.length;s++){var u=e(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),i=e.n(a),c=e(565),l=e.n(c),s=e(216),u=e.n(s),d=e(589),p=e.n(d),f=e(655),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u();t()(f.Z,h);f.Z&&f.Z.locals&&f.Z.locals;const v={firstGeneration:151};function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function b(){function n(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}function t(n,t,e,o){var a=t&&t.prototype instanceof r?t:r,i=Object.create(a.prototype),c=new p(o||[]);return w(i,"_invoke",{value:l(n,e,c)}),i}function e(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}function r(){}function o(){}function a(){}function i(t){["next","throw","return"].forEach((function(e){n(t,e,(function(n){return this._invoke(e,n)}))}))}function c(n,t){function r(o,a,i,c){var l=e(n[o],n,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==m(u)&&g.call(u,"__await")?t.resolve(u.__await).then((function(n){r("next",n,i,c)}),(function(n){r("throw",n,i,c)})):t.resolve(u).then((function(n){s.value=n,i(s)}),(function(n){return r("throw",n,i,c)}))}c(l.arg)}var o;w(this,"_invoke",{value:function(n,e){function a(){return new t((function(t,o){r(n,e,t,o)}))}return o=o?o.then(a,a):a()}})}function l(n,t,r){var o="suspendedStart";return function(a,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw i;return{value:h,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var l=s(c,r);if(l){if(l===S)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var u=e(n,t,r);if("normal"===u.type){if(o=r.done?"completed":"suspendedYield",u.arg===S)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o="completed",r.method="throw",r.arg=u.arg)}}}function s(n,t){var r=t.method,o=n.iterator[r];if(o===h)return t.delegate=null,"throw"===r&&n.iterator.return&&(t.method="return",t.arg=h,s(n,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),S;var a=e(o,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,S;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h),t.delegate=null,S):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,S)}function u(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function d(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function p(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(u,this),this.reset(!0)}function f(n){if(n||""===n){var t=n[x];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,r=function t(){for(;++e<n.length;)if(g.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=h,t.done=!0,t};return r.next=r}}throw new TypeError(m(n)+" is not iterable")}b=function(){return v};var h,v={},y=Object.prototype,g=y.hasOwnProperty,w=Object.defineProperty||function(n,t,e){n[t]=e.value},k="function"==typeof Symbol?Symbol:{},x=k.iterator||"@@iterator",L=k.asyncIterator||"@@asyncIterator",E=k.toStringTag||"@@toStringTag";try{n({},"")}catch(L){n=function(n,t,e){return n[t]=e}}v.wrap=t;var S={},j={};n(j,x,(function(){return this}));var _=Object.getPrototypeOf,T=_&&_(_(f([])));T&&T!==y&&g.call(T,x)&&(j=T);var O=a.prototype=r.prototype=Object.create(j);return o.prototype=a,w(O,"constructor",{value:a,configurable:!0}),w(a,"constructor",{value:o,configurable:!0}),o.displayName=n(a,E,"GeneratorFunction"),v.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},v.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,n(t,E,"GeneratorFunction")),t.prototype=Object.create(O),t},v.awrap=function(n){return{__await:n}},i(c.prototype),n(c.prototype,L,(function(){return this})),v.AsyncIterator=c,v.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new c(t(n,e,r,o),a);return v.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},i(O),n(O,E,"Generator"),n(O,x,(function(){return this})),n(O,"toString",(function(){return"[object Generator]"})),v.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},v.values=f,p.prototype={constructor:p,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(d),!n)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){function t(t,r){return a.type="throw",a.arg=n,e.next=t,r&&(e.method="next",e.arg=h),!!r}if(this.done)throw n;for(var e=this,r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(n,t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).tryLoc<=this.prev&&g.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),S},finish:function(n){for(var t,e=this.tryEntries.length-1;0<=e;--e)if((t=this.tryEntries[e]).finallyLoc===n)return this.complete(t.completion,t.afterLoc),d(t),S},catch:function(n){for(var t,e=this.tryEntries.length-1;0<=e;--e)if((t=this.tryEntries[e]).tryLoc===n){var r=t.completion;if("throw"===r.type){var o=r.arg;d(t)}return o}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:f(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=h),S}},v}function y(n,t,e,r,o,a,i){try{var c=n[a](i),l=c.value}catch(n){return void e(n)}c.done?t(l):Promise.resolve(l).then(r,o)}var g,w,k=function(){var n=function(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){function a(n){y(c,r,o,a,i,"next",n)}function i(n){y(c,r,o,a,i,"throw",n)}var c=n.apply(t,e);a(void 0)}))}}(b().mark((function n(t){var e,r,o,a,i,c,l,s,u;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("https://pokeapi.co/api/v2/pokemon","/").concat(t));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,o=r.name,a=r.sprites,i=r.stats,c=r.height,l=r.weight,s=r.types,u=Array.isArray(i)?i.map((function(n){var t=n.stat,e=n.base_stat;return{stat:t.name||"Unknown",base_stat:e}})):[],n.abrupt("return",{id:t,name:o,img:a.other["official-artwork"].front_default,stats:u,height:c,weight:l,types:s.map((function(n){return n.type.name}))});case 17:throw n.prev=17,n.t0=n.catch(0),n.t0;case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(t){return n.apply(this,arguments)}}(),x=document.body,L=function(){var n=document.querySelector("div");n.innerHTML="",n.classList.remove("card-body","mb-3","mt-3"),x.appendChild(n),g=document.querySelector("div")},E=function(n){var t=n.id,e=n.name,r=n.img,o=n.stats,a=n.height,i=n.weight,c=n.types,l='\n  <div class="card mb-3">\n    <div class="container text-center">\n      <div class="row">\n        <div class="col-md-8">\n          <h4>#'.concat(t," ").concat(e.toUpperCase(),'</h4>\n          <div class="col-6 col-md-8">\n            <div>\n              <img src="').concat(r,'" alt="').concat(e,'" />\n            </div>\n            <div>\n              <p class="').concat(c.join(" "),' tipos"><b>Tipo: </b>').concat(c.join(" "),'</p>\n            </div>\n          </div>\n        </div>\n        <div class="col-6 col-md-4">\n          <div class="card mb-3 mt-3">\n          <h5>Ficha técnica</h5>\n          <div class="container text-center">\n            <div class="row row-cols-2">\n              <div class="col">\n                <p><b>Altura: </b>').concat(a,"m</p>\n                <p><b>Peso: </b>").concat(i,'kg</p>\n              </div>\n              <div class="col">\n                <ul>\n                  ').concat(o.map((function(n){return"<li><b>".concat(n.stat.toUpperCase(),":</b> ").concat(n.base_stat,"</li>")})).join(""),"\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "),s=document.createElement("div");s.innerHTML=l,s.classList.add("cardbody","mb-3","mt-3"),x.appendChild(s),g=document.querySelector("div")};(w=document.createElement("header")).innerHTML='\n  <nav class="nav">\n    <img src="assets/logo.png" alt="Logo Pokédex">\n    <ul class="nav-list">\n      <li class="nav-item"><button class="btn btn-header" id="ver-todos">Ver todos</button></li> \n      <li class="nav-item"><button class="btn btn-header normal" id="normal">Normal</button></li>\n      <li class="nav-item"><button class="btn btn-header fire" id="fire">Fire</button></li>\n      <li class="nav-item"><button class="btn btn-header water" id="water">Water</button></li>\n      <li class="nav-item"><button class="btn btn-header grass" id="grass">Grass</button></li>\n      <li class="nav-item"><button class="btn btn-header electric" id="electric">Electric</button></li>\n      <li class="nav-item"><button class="btn btn-header ice" id="ice">Ice</button></li>\n      <li class="nav-item"><button class="btn btn-header fighting" id="fighting">Fighting</button></li>\n      <li class="nav-item"><button class="btn btn-header poison" id="poison">Poison</button></li>\n      <li class="nav-item"><button class="btn btn-header ground" id="ground">Ground</button></li>\n      <li class="nav-item"><button class="btn btn-header flying" id="flying">Flying</button></li>\n      <li class="nav-item"><button class="btn btn-header psychic" id="psychic">Psychic</button></li>\n      <li class="nav-item"><button class="btn btn-header bug" id="bug">Bug</button></li>\n      <li class="nav-item"><button class="btn btn-header rock" id="rock">Rock</button></li>\n      <li class="nav-item"><button class="btn btn-header ghost" id="ghost">Ghost</button></li>\n      <li class="nav-item"><button class="btn btn-header dark" id="dark">Dark</button></li>\n      <li class="nav-item"><button class="btn btn-header dragon" id="dragon">Dragon</button></li>\n      <li class="nav-item"><button class="btn btn-header steel" id="steel">Steel</button></li>\n      <li class="nav-item"><button class="btn btn-header fairy" id="fairy">Fairy</button></li>\n    </ul>\n  </nav>\n  ',x.appendChild(w),document.querySelector("header"),document.querySelectorAll(".btn-header").forEach((function(n){n.addEventListener("click",(function(n){var t=n.target.id;L(),console.log(t);for(var e=1;e<=v.firstGeneration;e++)k(e).then((function(n){n.types.includes(t)?(g.classList.add("hide"),E(n)):"ver-todos"===t&&g.classList.remove("hide")}))}))})),function(){for(var n=1;n<=v.firstGeneration;n++)k(n).then(E)}()})()})();