(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(t,e,o){var content=o(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("33ccab38",content,!0,{sourceMap:!1})},216:function(t,e,o){"use strict";var n=o(4),r=o(91).indexOf,d=o(46),c=o(22),l=[].indexOf,v=!!l&&1/[1].indexOf(1,-0)<0,f=d("indexOf"),h=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:v||!f||!h},{indexOf:function(t){return v?l.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},217:function(t,e,o){"use strict";o(212)},218:function(t,e,o){var n=o(27)(!1);n.push([t.i,".show-card-enter-active[data-v-759e4929],.show-card-leave-active[data-v-759e4929]{transform:translateY(100%)}.show-card-enter[data-v-759e4929],.show-card-leave[data-v-759e4929]{opacity:0}#stationCard[data-v-759e4929]{position:absolute;bottom:0;z-index:50;width:100%;padding:1.5rem 1rem 1rem;transition:transform .1s cubic-bezier(.35,.69,.48,.99)}@media (min-width:1024px){#stationCard[data-v-759e4929]{width:400px;right:400px}}#stationCardContent[data-v-759e4929]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding:1rem;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.stationDetails[data-v-759e4929]{display:flex;flex-direction:row;width:100%;justify-content:space-between;line-height:1.25;font-weight:400;font-size:.75rem;color:var(--color-default);font-family:Lato}.stationGeneralDetails[data-v-759e4929]{display:flex;flex-grow:0;width:80%;flex-direction:column;padding-right:1rem;border-right-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.stationGeneralDetails h2[data-v-759e4929]{color:var(--color-secondary);margin-bottom:.25rem;font-size:1.25rem;font-weight:600}.stationGeneralDetails h4[data-v-759e4929]{color:var(--color-fade)}.stationRoute[data-v-759e4929]{margin-top:1rem}.stationLocationDetails[data-v-759e4929]{display:flex;flex-grow:0;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--color-fade)}.stationOtherDetails[data-v-759e4929]{padding-top:1rem;border-top-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}dl[data-v-759e4929]{display:flex;line-height:1.25;font-weight:400;font-size:.875rem;font-family:Lato}dl dt[data-v-759e4929]{width:50%;flex:none;color:var(--color-fade)}dl dd[data-v-759e4929],dl dt[data-v-759e4929]{margin-top:.5rem;margin-bottom:.5rem}dl dd[data-v-759e4929]{color:var(--color-dark);font-weight:400}.navigationActions[data-v-759e4929]{width:100%;padding-top:.5rem;padding-bottom:0}.overlay[data-v-759e4929]{z-index:40;position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,92.2%,.43)}@media (min-width:1024px){.overlay[data-v-759e4929]{width:calc(100% - 400px)}}",""]),t.exports=n},222:function(t,e,o){"use strict";o.r(e);o(90),o(216);var n=o(12),r=o(36);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={data:function(){return{station:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({isOpen:"PASS_STATION_CARD",userlocation:"PASS_USERLOCATION"})),created:function(){},mounted:function(){var t=this;this.$nuxt.$on("select-station",(function(e){t.station=e}))},methods:{closeCard:function(t){this.$store.dispatch("SET_STATION_CARD",!1)},openNavigator:function(t){-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")?window.open("maps://maps.google.com/maps?daddr=&origin"):window.open("https://www.google.com/maps/dir/?api=1&or=".concat(this.userlocation.latitude,",").concat(this.userlocation.longitude,"&destination=").concat(t.coords.lat,",").concat(t.coords.lng,"&travelmode=driving"))}}},l=(o(217),o(29)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isOpen?o("div",{staticClass:"overlay",on:{click:function(e){return t.closeCard(t.station)}}}):t._e(),t._v(" "),o("transition",{attrs:{name:"show-card"}},[t.isOpen?o("div",{attrs:{id:"stationCard"}},[o("div",{attrs:{id:"stationCardContent"}},[o("div",{staticClass:"stationDetails"},[o("div",{staticClass:"stationGeneralDetails"},[o("h2",[t._v(t._s(t.station.name))]),t._v(" "),o("h4",[o("i",{staticClass:"icon-location mr-1 text-fade"}),t._v("\n              "+t._s(t.station.address)+"\n            ")])]),t._v(" "),o("div",{staticClass:"stationLocationDetails"},[o("h5",{staticClass:"mb-1"},[t._v("Sijainnista")]),t._v(" "),o("div",{staticClass:"flex"},[o("span",[t._v(t._s((t.station.distance/1e3).toFixed(1))+" km")])])])]),t._v(" "),o("div",{staticClass:"stationRoute"}),t._v(" "),o("div",{staticClass:"stationOtherDetails"},[o("dl",[o("dt",[t._v("Tuotteet:")]),t._v(" "),o("dd",t._l(t.station.products,(function(e,i){return o("span",{key:e[i]},[t._v(t._s(""!=e&&0!=i?",":"")+" "+t._s(e))])})),0),t._v(" "),o("dt",[t._v("Maksuvaihtoehdot:")]),t._v(" "),o("dd",t._l(t.station.payments,(function(e,i){return o("span",{key:e[i]},[t._v(t._s(""!=e&&0!=i?",":"")+" "+t._s(e))])})),0),t._v(" "),o("dt",[t._v("Operaattori:")]),t._v(" "),o("dd",[t._v(t._s(t.station.operator))])]),t._v(" "),o("div",{staticClass:"navigationActions"},[o("button",{staticClass:"smallButton",on:{click:function(e){return t.openNavigator(t.station)}}},[t._v("\n              Paikanna\n            ")])])])])]):t._e()])],1)}),[],!1,null,"759e4929",null);e.default=component.exports}}]);