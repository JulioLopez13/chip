(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{272:function(t,e,n){"use strict";n(37),n(28),n(36),n(17),n(59),n(29),n(60);var r=n(22),c=n(38);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={computed:l(l({},Object(c.b)(["chipName"])),{},{buttonClass:function(){return{"btn--black":"at&t"===this.chipName,"btn--movistar":"movistar"===this.chipName,"btn--unefon":"unefon"===this.chipName}},benefitClass:function(){return{"offer__benefit--movistar":"movistar"===this.chipName}}})}},273:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("45227dcb",content,!0,{sourceMap:!1})},274:function(t,e,n){t.exports=n.p+"img/loudspeaker.7c5a477.png"},275:function(t,e,n){"use strict";n(273)},276:function(t,e,n){var r=n(61)(!1);r.push([t.i,'.index{min-height:100vh;position:relative;text-align:center;padding:4rem 1rem;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.index,.index__heading{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.index__heading{font-size:1.6rem;padding-bottom:3rem;font-family:"Arial Black",sans-serif}.index__heading span:first-child,.index__heading span:nth-child(2){font-size:3.5rem}.index__heading span:nth-child(3){font-size:8rem}.index__thanks{font-size:2.8rem}.index__thanks .highlight span{font-size:3.5rem}.index__thanks img{width:5.5rem;height:auto;vertical-align:bottom}.index__content{margin-top:4rem;font-size:2.5rem}.index__content p:nth-child(2){font-family:"Segoe UI Black",sans-serif;margin:1.5rem 0;font-size:3rem}.index__buttons{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.index__buttons .btn{width:15rem;margin-top:3rem}.index__buttons .btn:last-child{margin-left:2rem}.index .highlight{font-size:2.5rem;font-family:"Segoe UI Black",sans-serif}',""]),t.exports=r},277:function(t,e,n){"use strict";n.r(e);n(37),n(28),n(36),n(17),n(59),n(29),n(60);var r=n(22),c=(n(46),n(38));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={mixins:[n(272).a],methods:l({},Object(c.c)(["changeChip"])),computed:l({},Object(c.b)(["chipName"])),mounted:function(){var t=this.$route.name;"index"===t?this.changeChip("at&t"):this.changeChip(t)}},f=(n(275),n(45)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"index"},[t._m(0),t._v(" "),e("p",{staticClass:"index__thanks"},[t._v("\n    ¡Gracias por comprar\n    "),e("span",{staticClass:"highlight"},[t._v("\n      tu chip "+t._s(t.chipName.toUpperCase())+" "),e("br"),t._v(" "),e("span",[t._v("con nosotros")])]),t._v(" "),e("img",{attrs:{src:n(274),alt:"Megaphone"}}),t._v("\n    !\n  ")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"index__buttons"},[e("button",{staticClass:"btn btn--border-white",class:t.buttonClass,on:{click:function(e){return t.$router.push({name:"offer"})}}},[t._v("\n      Beneficios\n    ")]),t._v(" "),e("button",{staticClass:"btn btn--border-white",class:t.buttonClass,on:{click:function(e){return t.$router.push({name:"mechanics"})}}},[t._v("\n      Mecánica\n    ")])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"index__heading"},[e("span",[t._v("Compra tu chip,")]),t._v(" "),e("span",[t._v("recárgalo y...")]),t._v(" "),e("span",[t._v("¡GANA!")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"index__content"},[e("p",[t._v("\n      Recarga o acumula "),e("span",{staticClass:"highlight"},[t._v("$200")]),t._v(" al mes durante\n      "),e("span",{staticClass:"highlight"},[t._v("4 meses")]),t._v(" consecutivos y...\n    ")]),t._v(" "),e("p",[t._v("¡El quinto mes va por nuestra cuenta!")]),t._v(" "),e("p",[t._v("\n      Además, al "),e("span",{staticClass:"highlight"},[t._v("recargar")]),t._v(" o\n      "),e("span",{staticClass:"highlight"},[t._v("acumular $200")]),t._v(" durante dos meses continuos participas\n      automáticamente en la "),e("span",{staticClass:"highlight"},[t._v("Rifa bimestral")]),t._v(" de un\n      "),e("span",{staticClass:"highlight"},[t._v("Smartphone")])]),t._v(" "),e("p",[t._v('"los últimos 5 dígitos de '),e("span",{staticClass:"highlight"},[t._v("tu número participan")]),t._v('"')])])}],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){return(0,this._self._c)("chip")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Chip:n(277).default})}}]);