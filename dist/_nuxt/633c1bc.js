(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{272:function(e,t,n){"use strict";n(37),n(28),n(36),n(17),n(59),n(29),n(60);var r=n(22),o=n(38);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={computed:f(f({},Object(o.b)(["chipName"])),{},{buttonClass:function(){return{"btn--black":"at&t"===this.chipName,"btn--movistar":"movistar"===this.chipName,"btn--unefon":"unefon"===this.chipName}},benefitClass:function(){return{"offer__benefit--movistar":"movistar"===this.chipName}}})}},273:function(e,t,n){e.exports=n.p+"img/attNew3.0aba175.png"},274:function(e,t,n){e.exports=n.p+"img/attNew4.df7450b.png"},275:function(e,t,n){e.exports=n.p+"img/attNew2.13df949.png"},276:function(e,t,n){e.exports=n.p+"img/attNew5.97512b1.png"},277:function(e,t,n){e.exports=n.p+"img/unefonNew.d7c5acf.png"},278:function(e,t,n){e.exports=n.p+"img/unefonNew2.e6f8e96.png"},279:function(e,t,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("164bf23e",content,!0,{sourceMap:!1})},280:function(e,t,n){e.exports=n.p+"img/loudspeaker.7c5a477.png"},281:function(e,t,n){"use strict";n(37),n(28),n(36),n(17),n(59),n(29),n(60);var r=n(22),o=n(38);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={computed:f(f({},Object(o.b)(["chipName"])),{},{highlightColor:function(){var e="";return"at&t"===this.chipName&&(e="att"),"movistar"===this.chipName&&(e="movistar"),"unefon"===this.chipName&&(e="unefon"),{color:"var(--".concat(e,"-color)"),fontFamily:"'Segoe UI Black', sans-serif"}}})}},282:function(e,t,n){e.exports=n.p+"img/giftboxPhone.690e4de.png"},284:function(e,t,n){var map={"./XiaomiPocoM3.png":285,"./at&t.png":286,"./attNew.png":287,"./attNew2.png":275,"./attNew3.png":273,"./attNew4.png":274,"./attNew5.png":276,"./giftboxPhone.png":282,"./loudspeaker.png":280,"./movistar.png":288,"./unefon.png":289,"./unefonNew.png":277,"./unefonNew2.png":278};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=284},285:function(e,t,n){e.exports=n.p+"img/XiaomiPocoM3.129bfb9.png"},286:function(e,t,n){e.exports=n.p+"img/at&t.c4e99a6.png"},287:function(e,t,n){e.exports=n.p+"img/attNew.43b06e6.png"},288:function(e,t,n){e.exports=n.p+"img/movistar.91a8e48.png"},289:function(e,t,n){e.exports=n.p+"img/unefon.80b7b92.png"},290:function(e,t,n){"use strict";n(279)},291:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.offer{padding:4rem;min-height:100vh;max-width:1300px;margin:0 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width:48em){.offer{padding:4rem 2rem}}.offer__heading{font-family:"Arial Black",sans-serif;font-size:3rem;margin-bottom:2rem;text-align:center}.offer__img{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}.offer__img img{width:100%}.offer__imgHeader{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}.offer__imgHeader img{width:100%}.offer__info{margin-top:2rem;display:grid;grid-gap:2rem;grid-template-columns:50% 1fr;grid-template-areas:"benefit1 benefit2"}@media only screen and (max-width:36em){.offer__info{grid-template-columns:none;grid-template-areas:"benefit1" "benefit2"}}.offer__benefit{background-image:var(--black-gradient);border-radius:var(--border-radius);padding:1.5rem 2rem;text-align:center}.offer__benefit:first-child{grid-area:benefit1}.offer__benefit:last-child{grid-area:benefit2}.offer__benefit h2{font-size:2.5rem;font-family:"Segoe UI Black",sans-serif;margin-bottom:1rem}.offer__benefit ul{list-style:none;font-size:2rem}.offer__benefit ul li .fas{font-size:1.6rem;margin-right:.8rem}.offer__benefit ul li:not(:last-child){margin-bottom:.8rem}.offer__benefit--movistar{background-color:#fff;background-image:none;color:#222}.offer__button{margin:3rem 0 1rem;text-align:center}.offer__button .btn{width:15rem}',""]),e.exports=r},292:function(e,t,n){"use strict";n.r(t);var r=n(281),o=n(272),c={mixins:[r.a,o.a]},f=(n(290),n(45)),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"offer"},[e._e(),e._v(" "),"at&t"==e.chipName?t("div",{staticClass:"offer__imgHeader"},["at&t"==e.chipName?t("img",{attrs:{src:n(273),alt:"".concat(e.chipName," image")}}):e._e()]):t("div",{staticClass:"offer__heading"},[e._v("\n      Te recomendamos realizar tu recarga de $200.00 MXN para obtener los siguientes beneficios:\n    ")]),e._v(" "),t("div",{staticClass:"offer__img"},["at&t"==e.chipName?t("img",{attrs:{src:n(274),alt:"".concat(e.chipName," image")}}):"movistar"==e.chipName?t("img",{attrs:{src:n(284)("./".concat(e.chipName,".png")),alt:"".concat(e.chipName," image")}}):"unefon"==e.chipName?t("img",{attrs:{src:n(277),alt:"".concat(e.chipName," image")}}):e._e()]),e._v(" "),"at&t"==e.chipName?t("br"):e._e(),e._v(" "),"at&t"==e.chipName?t("div",{staticClass:"offer__imgHeader"},[t("img",{attrs:{src:n(276),alt:"".concat(e.chipName," image")}})]):t("div",{staticClass:"offer__heading"},[e._v("\n      Esta oferta la tendras si conservas tu mismo número al hacer tu portabilidad con nosotros:\n    ")]),e._v(" "),t("div",{staticClass:"offer__img"},["at&t"==e.chipName?t("img",{attrs:{src:n(275),alt:"".concat(e.chipName," image")}}):"unefon"==e.chipName?t("img",{attrs:{src:n(278),alt:"".concat(e.chipName," image")}}):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);