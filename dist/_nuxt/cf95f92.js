(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{230:function(t,o,e){var content=e(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("402f933f",content,!0,{sourceMap:!1})},239:function(t,o,e){"use strict";e(230)},240:function(t,o,e){var n=e(43)(!1);n.push([t.i,".stationListItemCard[data-v-ab898370]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding:1rem;border-bottom-width:1px;-webkit-animation-name:animateIn;animation-name:animateIn;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-delay:.25s;animation-delay:.25s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.stationListItemCardContent[data-v-ab898370]{display:flex;flex-direction:column;line-height:1.25;font-weight:400;font-size:.75rem;color:var(--color-default);font-family:Lato;cursor:pointer}.stationListItemCardContent .stationMinDetails[data-v-ab898370]{display:flex;flex-direction:column;width:100%}.stationListItemCardContent .stationGeneralDetails[data-v-ab898370]{display:flex;flex-direction:column;padding-right:1rem}.stationListItemCardContent .stationGeneralDetails h2[data-v-ab898370]{color:var(--color-primary);margin-bottom:.5rem;font-size:1rem}.stationListItemCardContent .stationGeneralDetails h4[data-v-ab898370]{margin-bottom:.5rem;color:var(--color-fade)}.stationListItemCardContent .stationLocationDetails[data-v-ab898370]{display:flex;flex-grow:0;color:var(--color-fade);flex-direction:row;align-items:center}.stationListItemCardContent .stationLocationDetails .icon-location[data-v-ab898370]{color:var(--color-fade);margin-right:.25rem}.stationOtherDetails[data-v-ab898370]{padding-top:1rem;border-top-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}dl[data-v-ab898370]{display:flex;line-height:1.25;font-weight:400;font-size:.875rem;font-family:Lato}dl dt[data-v-ab898370]{width:50%;flex:none;color:var(--color-fade)}dl dd[data-v-ab898370],dl dt[data-v-ab898370]{margin-top:.5rem;margin-bottom:.5rem}dl dd[data-v-ab898370]{color:var(--color-dark);font-weight:400}",""]),t.exports=n},247:function(t,o,e){"use strict";e.r(o);e(37),e(21),e(36),e(52),e(31),e(53);var n=e(13),r=e(54);function c(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var l={props:{station:{type:Object}},data:function(){return{isOpen:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},Object(r.b)({selectedStation:"PASS_STATION"})),created:function(){},mounted:function(){},methods:{getStation:function(t){this.$nuxt.$emit("select-station",t),this.$nuxt.$emit("show-marker",t),this.$store.dispatch("GET_SELECTED_MARKER",t),this.$store.dispatch("SET_STATION_CARD",!0)}}},d=(e(239),e(45)),component=Object(d.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"stationListItemCard"},[e("div",{staticClass:"stationListItemCardContent"},[e("div",{staticClass:"stationMinDetails",on:{click:function(o){return t.getStation(t.station)}}},[e("div",{staticClass:"stationGeneralDetails"},[e("h2",[t._v(t._s(t.station.name))]),t._v(" "),e("h4",[e("i",{staticClass:"icon-location mr-1"}),t._v(" "+t._s(t.station.address))])]),t._v(" "),e("div",{staticClass:"stationLocationDetails space-x-1"},[e("h5",[t._v("Sijainnista")]),t._v(" "),e("span",[t._v(t._s((t.station.distance/1e3).toFixed(1))+" km")])])])])])])}),[],!1,null,"ab898370",null);o.default=component.exports}}]);