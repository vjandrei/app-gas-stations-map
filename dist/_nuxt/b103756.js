(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,5],{211:function(t,o,e){var content=e(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("26d3e176",content,!0,{sourceMap:!1})},212:function(t,o,e){var content=e(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("14f71133",content,!0,{sourceMap:!1})},213:function(t,o,e){var content=e(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(28).default)("5b3f73cb",content,!0,{sourceMap:!1})},214:function(t,o,e){"use strict";e(211)},215:function(t,o,e){var n=e(27)(!1);n.push([t.i,"#locator[data-v-0d7fa894]{align-self:center}#newLocation[data-v-0d7fa894]{position:absolute;z-index:50;right:0;width:3rem;height:3rem;border-radius:9999px;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));margin:.75rem;display:flex;justify-content:center;align-items:center;box-shadow:0 0 0 7px rgba(180,194,213,.05)}@media (min-width:1024px){#newLocation[data-v-0d7fa894]{right:400px}}#newLocation i[data-v-0d7fa894]{font-size:24px;color:var(--color-primary)}",""]),t.exports=n},216:function(t,o,e){"use strict";e(212)},217:function(t,o,e){var n=e(27)(!1);n.push([t.i,".show-card-enter-active[data-v-43287382],.show-card-leave-active[data-v-43287382]{transform:translateY(100%)}.show-card-enter[data-v-43287382],.show-card-leave[data-v-43287382]{opacity:0}#stationCard[data-v-43287382]{position:absolute;bottom:0;z-index:50;width:100%;padding:1.5rem 1rem 1rem;transition:transform .1s cubic-bezier(.35,.69,.48,.99)}@media (min-width:1024px){#stationCard[data-v-43287382]{width:400px;right:400px}}#stationCardContent[data-v-43287382]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding:1rem;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.stationDetails[data-v-43287382]{display:flex;flex-direction:row;width:100%;justify-content:space-between;line-height:1.25;font-weight:400;font-size:.75rem;color:var(--color-default);font-family:Lato}.stationGeneralDetails[data-v-43287382]{display:flex;flex-grow:0;width:80%;flex-direction:column;padding-right:1rem;border-right-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.stationGeneralDetails h2[data-v-43287382]{color:var(--color-secondary);margin-bottom:.25rem;font-size:1.25rem;font-weight:600}.stationGeneralDetails h4[data-v-43287382]{color:var(--color-fade)}.stationRoute[data-v-43287382]{margin-top:1rem}.stationLocationDetails[data-v-43287382]{display:flex;flex-grow:0;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--color-fade)}.stationOtherDetails[data-v-43287382]{padding-top:1rem;border-top-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}dl[data-v-43287382]{display:flex;line-height:1.25;font-weight:400;font-size:.875rem;font-family:Lato}dl dt[data-v-43287382]{width:50%;flex:none;color:var(--color-fade)}dl dd[data-v-43287382],dl dt[data-v-43287382]{margin-top:.5rem;margin-bottom:.5rem}dl dd[data-v-43287382]{color:var(--color-dark);font-weight:400}.navigationActions[data-v-43287382]{width:100%;padding-top:.5rem;padding-bottom:0}.overlay[data-v-43287382]{z-index:40;position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,92.2%,.43)}@media (min-width:1024px){.overlay[data-v-43287382]{width:calc(100% - 400px)}}",""]),t.exports=n},220:function(t,o,e){"use strict";e.r(o);e(16);var n=e(3),r={data:function(){return{}},components:{},methods:{getNewLocation:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.$emit("new-location");case 1:case"end":return o.stop()}}),o)})))()}}},c=(e(214),e(29)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"locator"}},[e("button",{attrs:{id:"newLocation"},on:{click:t.getNewLocation}},[e("i",{staticClass:"icon-gps"})])])}),[],!1,null,"0d7fa894",null);o.default=component.exports},221:function(t,o,e){"use strict";e.r(o);e(90);var n=e(12),r=e(36);function c(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var d={data:function(){return{station:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},Object(r.b)({isOpen:"PASS_STATION_CARD"})),created:function(){},mounted:function(){var t=this;this.$nuxt.$on("select-station",(function(o){t.station=o}))},methods:{closeCard:function(t){this.$store.dispatch("SET_STATION_CARD",!1)},openNavigator:function(t){window.open("maps://maps.google.com/maps?daddr=".concat(t.coords.lat,",").concat(t.coords.lng))}}},l=(e(216),e(29)),component=Object(l.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.isOpen?e("div",{staticClass:"overlay",on:{click:function(o){return t.closeCard(t.station)}}}):t._e(),t._v(" "),e("transition",{attrs:{name:"show-card"}},[t.isOpen?e("div",{attrs:{id:"stationCard"}},[e("div",{attrs:{id:"stationCardContent"}},[e("div",{staticClass:"stationDetails"},[e("div",{staticClass:"stationGeneralDetails"},[e("h2",[t._v(t._s(t.station.name))]),t._v(" "),e("h4",[e("i",{staticClass:"icon-location mr-1 text-fade"}),t._v("\n              "+t._s(t.station.address)+"\n            ")])]),t._v(" "),e("div",{staticClass:"stationLocationDetails"},[e("h5",{staticClass:"mb-1"},[t._v("Sijainnista")]),t._v(" "),e("div",{staticClass:"flex"},[e("span",[t._v(t._s((t.station.distance/1e3).toFixed(1))+" km")])])])]),t._v(" "),e("div",{staticClass:"stationRoute"}),t._v(" "),e("div",{staticClass:"stationOtherDetails"},[e("dl",[e("dt",[t._v("Tuotteet:")]),t._v(" "),e("dd",t._l(t.station.products,(function(o,i){return e("span",{key:o[i]},[t._v(t._s(""!=o&&0!=i?",":"")+" "+t._s(o))])})),0),t._v(" "),e("dt",[t._v("Maksuvaihtoehdot:")]),t._v(" "),e("dd",t._l(t.station.payments,(function(o,i){return e("span",{key:o[i]},[t._v(t._s(""!=o&&0!=i?",":"")+" "+t._s(o))])})),0),t._v(" "),e("dt",[t._v("Operaattori:")]),t._v(" "),e("dd",[t._v(t._s(t.station.operator))])]),t._v(" "),e("div",{staticClass:"navigationActions"},[e("button",{staticClass:"smallButton",on:{click:function(o){return t.openNavigator(t.station)}}},[t._v("\n              Paikanna\n            ")])])])])]):t._e()])],1)}),[],!1,null,"43287382",null);o.default=component.exports},222:function(t,o,e){var n=e(4),r=e(139).values;n({target:"Object",stat:!0},{values:function(t){return r(t)}})},223:function(t,o,e){t.exports=e.p+"img/mapPin.4733194.svg"},224:function(t,o,e){"use strict";e(213)},225:function(t,o,e){var n=e(27)(!1);n.push([t.i,"#map[data-v-e97dcbfa]{height:100%;display:flex;flex-direction:column}#mapcanvas[data-v-e97dcbfa]{z-index:0}",""]),t.exports=n},233:function(t,o,e){"use strict";e.r(o);e(30),e(222),e(16);var n=e(3),r=e(12),c=e(36);function d(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(o){Object(r.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}var f="undefined"!=typeof window,v={data:function(){return{url:"https://api.mapbox.com/styles/v1/vjandrei/cjz4h2qqo069r1drtkgqxxh13/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmphbmRyZWkiLCJhIjoiY2tlODdqNTlxMXRxdzJ2bjdwbWU2Z3ZtayJ9.fFRq9nmI2X8Xu14Z0_Zp2w",userLocation:[],userCoords:[],defaultZoom:6,userZoom:12,icon:L.icon({iconUrl:e(223),iconSize:[32,32],iconAnchor:[16,16]}),circle:{name:"userLocationPin",color:"rgba(35,136,204,0.30)",fillColor:"#2388CC",fillOpacity:1,weight:20,class:"mapPin"}}},components:{},created:function(){f&&(this.userCoords=JSON.parse(sessionStorage.getItem("userCoords")),this.userLocation=L.latLng(this.userCoords))},mounted:function(){var t=this;this.$nuxt.$on("show-station",(function(o){t.$nextTick((function(){t.$refs.map.mapObject.fitBounds([[o.coords.lat,o.coords.lng]],{paddingBottomRight:[0,200],maxZoom:16})}))})),this.$store.dispatch("GET_USER_SESSION_LOCATION_DATA",this.userCoords).then((function(){t.$store.dispatch("GET_LOCATION_AND_DISTANCE")}))},computed:l(l({},Object(c.b)({stations:"PASS_STATIONS",userlocation:"PASS_USERLOCATION",defaultLocation:"PASS_DEFAULT_LOCATION",showStation:"PASS_STATION"})),{},{updatedLocation:function(){if(f)return L.latLng(Object.values(this.userlocation))}}),methods:{getMarker:function(t){this.$nuxt.$emit("select-station",t),this.$store.dispatch("GET_SELECTED_MARKER",t),this.$store.dispatch("SET_STATION_CARD",!0)},resetMap:function(){this.$store.dispatch("SET_STATION_DETAILS")},getNewLocation:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.$store.dispatch("GET_LOCATION_AND_DISTANCE").then((function(){})),t.$store.dispatch("SET_STATION_DETAILS"),t.$nextTick((function(){t.$refs.map.mapObject.fitBounds([[t.userlocation.latitude,t.userlocation.longitude]])}));case 3:case"end":return o.stop()}}),o)})))()}}},m=(e(224),e(29)),component=Object(m.a)(v,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"map"}},[e("ComponentLocator",{on:{"new-location":t.getNewLocation}}),t._v(" "),e("ComponentCard"),t._v(" "),e("client-only",[e("l-map",{ref:"map",attrs:{id:"mapcanvas",zoom:t.userZoom||t.defaultZoom,center:t.updatedLocation||t.defaultLocation,options:{zoomControl:!1}},on:{click:t.resetMap}},[e("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),t._l(t.stations,(function(o){return e("l-marker",{key:o.id,attrs:{"lat-lng":o.coords,icon:t.icon},on:{click:function(e){return t.getMarker(o)}}})})),t._v(" "),t._l(2,(function(o){return e("l-circle-marker",{key:o.key,attrs:{name:t.circle.name,"lat-lng":t.updatedLocation,radius:3*o,color:t.circle.color,fillColor:t.circle.fillColor,fillOpacity:t.circle.fillOpacity,weight:t.circle.weight,className:t.circle.class},on:{"update:latLng":function(o){t.updatedLocation=o},"update:lat-lng":function(o){t.updatedLocation=o}}})}))],2)],1)],1)}),[],!1,null,"e97dcbfa",null);o.default=component.exports;installComponents(component,{ComponentLocator:e(220).default,ComponentCard:e(221).default})}}]);