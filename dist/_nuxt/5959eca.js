(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,o,e){var content=e(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("3c17f03b",content,!0,{sourceMap:!1})},216:function(t,o,e){"use strict";var r=e(4),n=e(91).indexOf,d=e(46),c=e(22),l=[].indexOf,f=!!l&&1/[1].indexOf(1,-0)<0,v=d("indexOf"),m=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:f||!v||!m},{indexOf:function(t){return f?l.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},217:function(t,o,e){"use strict";e(212)},218:function(t,o,e){var r=e(27)(!1);r.push([t.i,".show-card-enter-active[data-v-63922b9f],.show-card-leave-active[data-v-63922b9f]{transform:translateY(100%)}@media (min-width:1024px){.show-card-enter-active[data-v-63922b9f],.show-card-leave-active[data-v-63922b9f]{transform:translate(100%)}}.show-card-enter[data-v-63922b9f],.show-card-leave[data-v-63922b9f]{opacity:0}#stationCard[data-v-63922b9f]{position:absolute;bottom:0;z-index:50;width:100%;padding:1.5rem 1rem 1rem;transition:transform .1s cubic-bezier(.35,.69,.48,.99)}@media (min-width:1024px){#stationCard[data-v-63922b9f]{width:400px;right:0;top:65px}}#stationCardContent[data-v-63922b9f]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding:1rem;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);position:relative}@media (min-width:1024px){#stationCardContent[data-v-63922b9f]{height:calc(100vh - 113px)}}.closeCard[data-v-63922b9f]{color:var(--color-primary);font-weight:600;font-family:Lato;letter-spacing:.05em;cursor:pointer;position:absolute;top:-20px;right:16px;background:#fff;height:48px;width:72px;border-top-left-radius:.375rem;border-top-right-radius:.375rem;text-align:center;line-height:48px;text-transform:uppercase;font-size:12px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),-5px 4px 6px -2px rgba(0,0,0,.05);z-index:-1}@media (min-width:1024px){.closeCard[data-v-63922b9f]{top:40px;left:-56px;border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}}.stationDetails[data-v-63922b9f]{display:flex;flex-direction:row;width:100%;justify-content:space-between;line-height:1.25;font-weight:400;font-size:.75rem;color:var(--color-default);font-family:Lato}.stationGeneralDetails[data-v-63922b9f]{display:flex;flex-grow:0;flex-direction:column;padding-right:1rem;border-right-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity));flex:1}.stationGeneralDetails h2[data-v-63922b9f]{color:var(--color-secondary);margin-bottom:.25rem;font-size:1.25rem;font-weight:600}.stationGeneralDetails h4[data-v-63922b9f]{color:var(--color-fade)}.stationRoute[data-v-63922b9f]{margin-top:1rem}.stationLocationDetails[data-v-63922b9f]{display:flex;flex-grow:0;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--color-fade);padding-left:1rem;padding-right:1rem}.stationOtherDetails[data-v-63922b9f]{padding-top:1rem;border-top-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}dl[data-v-63922b9f]{display:flex;flex-direction:row;line-height:1.25;font-weight:400;font-size:.875rem;font-family:Lato}dl dt[data-v-63922b9f]{width:50%;flex:none;margin-top:.5rem;margin-bottom:.5rem;color:var(--color-fade)}@media (min-width:1024px){dl dt[data-v-63922b9f]{margin-top:1rem;margin-bottom:1rem}}dl dd[data-v-63922b9f]{color:var(--color-dark);margin-top:.5rem;margin-bottom:.5rem;font-weight:400}@media (min-width:1024px){dl dd[data-v-63922b9f]{margin-top:1rem;margin-bottom:1rem}}.navigationActions[data-v-63922b9f]{width:100%;padding-top:.5rem;padding-bottom:0}.overlay[data-v-63922b9f]{z-index:40;position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,92.2%,0)}@media (min-width:1024px){.overlay[data-v-63922b9f]{width:calc(100% - 400px)}}",""]),t.exports=r},222:function(t,o,e){"use strict";e.r(o);e(90),e(216);var r=e(12),n=e(36);function d(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var c={data:function(){return{station:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(r.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},Object(n.b)({isOpen:"PASS_STATION_CARD",userlocation:"PASS_USERLOCATION"})),created:function(){},mounted:function(){var t=this;this.$nuxt.$on("select-station",(function(o){t.station=o}))},methods:{closeCard:function(t){this.$store.dispatch("RESET_STATION_CARD",!1),this.$nuxt.$emit("remove-marker",t)},openNavigator:function(t){-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")?window.open("maps://maps.google.com/maps?daddr=&origin"):window.open("https://www.google.com/maps/dir/?api=1&or=".concat(this.userlocation.latitude,",").concat(this.userlocation.longitude,"&destination=").concat(t.coords.lat,",").concat(t.coords.lng,"&travelmode=driving"))}}},l=(e(217),e(29)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.isOpen?e("div",{staticClass:"overlay",on:{click:function(o){return t.closeCard(t.station)}}}):t._e(),t._v(" "),e("transition",{attrs:{name:"show-card"}},[t.isOpen?e("div",{attrs:{id:"stationCard"}},[e("div",{staticClass:"closeCard",on:{click:function(o){return t.closeCard(t.station)}}},[t._v("sulje")]),t._v(" "),e("div",{attrs:{id:"stationCardContent"}},[e("div",{staticClass:"stationDetails"},[e("div",{staticClass:"stationGeneralDetails"},[e("h2",[t._v(t._s(t.station.name))]),t._v(" "),e("h4",[e("i",{staticClass:"icon-location mr-1 text-fade"}),t._v("\n              "+t._s(t.station.address)+"\n            ")])]),t._v(" "),e("div",{staticClass:"stationLocationDetails"},[e("h5",{staticClass:"mb-1"},[t._v("Sijainnista")]),t._v(" "),e("div",{staticClass:"flex"},[e("span",[t._v(t._s((t.station.distance/1e3).toFixed(1))+" km")])])])]),t._v(" "),e("div",{staticClass:"stationRoute"}),t._v(" "),e("div",{staticClass:"stationOtherDetails"},[e("dl",[e("dt",[t._v("Tuotteet:")]),t._v(" "),e("dd",t._l(t.station.products,(function(o,i){return e("span",{key:o[i]},[t._v(t._s(""!=o&&0!=i?",":"")+" "+t._s(o))])})),0),t._v(" "),e("dt",[t._v("Maksuvaihtoehdot:")]),t._v(" "),e("dd",t._l(t.station.payments,(function(o,i){return e("span",{key:o[i]},[t._v(t._s(""!=o&&0!=i?",":"")+" "+t._s(o))])})),0),t._v(" "),e("dt",[t._v("Operaattori:")]),t._v(" "),e("dd",[t._v(t._s(t.station.operator))])]),t._v(" "),e("div",{staticClass:"navigationActions"},[e("button",{staticClass:"smallButton",on:{click:function(o){return t.openNavigator(t.station)}}},[t._v("\n              Paikanna\n            ")])])])])]):t._e()])],1)}),[],!1,null,"63922b9f",null);o.default=component.exports}}]);