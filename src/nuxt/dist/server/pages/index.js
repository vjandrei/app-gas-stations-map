exports.ids = [2];
exports.modules = {

/***/ 23:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=23c34187&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container mx-auto p-4 s:max-w-screen-sm\">","</div>",[_vm._ssrNode(((_vm.noUserLocation)?("<div class=\"text-center\"><h1 class=\"mx-auto text-center text-xl font-bold mb-4\">\n        Kaasun tankkaaminen\n      </h1> <p class=\"mb-4\">\n        Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu\n        asemat ympäri maailmaa. Jotta asemat tulisi sovellukseen sinun on\n        annettava oikeus sovellukselle käyttääkseen paikannustietoja.\n      </p> <button class=\"mx-auto text-center bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded\">"+((_vm.showLocationLoading)?("<span>Haetaan paikkatietoja</span>"):("<span>Paikanna minut</span>"))+"</button></div>"):"<!---->")+" "),(_vm.hasUserlocation)?_vm._ssrNode("<div>","</div>",[_c('StationMap'),_vm._ssrNode(" <pre id=\"coordinates\" class=\"ui-coordinates\"></pre> "),_c('StationList')],2):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=23c34187&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=template&id=b8f3db3a&
var Mapvue_type_template_id_b8f3db3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"map\">","</div>",[_c('client-only',[_c('l-map',{ref:"myMap",attrs:{"zoom":_vm.zoom,"center":_vm.center},on:{"update:bounds":_vm.boundsUpdated,"update:center":_vm.centerUpdated,"ready":_vm.markers}},[_c('l-tile-layer',{attrs:{"url":_vm.url,"attribution":_vm.attribution}}),_vm._v(" "),_vm._l((_vm.stations),function(station){return _c('l-marker',{key:station.id,attrs:{"lat-lng":station.coords}})}),_vm._v(" "),_c('v-locatecontrol')],2)],1)],1),_vm._ssrNode(" <div id=\"sidebar\"></div>")],2)}
var Mapvue_type_template_id_b8f3db3a_staticRenderFns = []


// CONCATENATED MODULE: ./components/Map.vue?vue&type=template&id=b8f3db3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const isBrowser = typeof window !== 'undefined';
let leaflet;

if (isBrowser) {
  leaflet = __webpack_require__(22);
}

/* harmony default export */ var Mapvue_type_script_lang_js_ = ({
  data() {
    /* Data properties will go here */
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: null,
      bounds: null
    };
  },

  created() {
    if (isBrowser) {
      this.$store.state.locations.forEach((value, key) => {
        this.center = leaflet.latLng(Object.values(value.geolocations));
      });
    }
  },

  computed: {
    stations() {
      return this.$store.state.stations.all;
    },

    geolocations() {
      return this.$store.state.geolocations;
    }

  },
  methods: {
    /* Any app-specific functions go here */
    markers() {},

    centerUpdated(center) {
      this.center = center;
    },

    boundsUpdated(bounds) {
      const inBounds = [];
      this.bounds = bounds;
      const markers = this.$store.state.stations.all;
      /*
      for (var i = 0, len = markers.length; i < len; i++) {
        var marker = markers[i];
        if (bounds.contains(marker.coords)) {
          inBounds.push(marker.name);
          console.log(marker.name);
        }
      }
      */
    }

  }
});
// CONCATENATED MODULE: ./components/Map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapvue_type_script_lang_js_ = (Mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mapvue_type_script_lang_js_,
  Mapvue_type_template_id_b8f3db3a_render,
  Mapvue_type_template_id_b8f3db3a_staticRenderFns,
  false,
  injectStyles,
  null,
  "1d894574"
  
)

/* harmony default export */ var Map = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/StationList.vue?vue&type=template&id=c610238e&
var StationListvue_type_template_id_c610238e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("\n  Nearest stations\n  "),_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.stations),function(station){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{staticClass:"font-semibold",attrs:{"to":{ name: 'stations-id', params: { id: station.url_name } }}},[_vm._v(_vm._s(station.name)+"\n      ")]),_vm._ssrNode(_vm._ssrEscape("\n      ("+_vm._s((station.distance / 1000).toFixed(1))+"\n      km)\n      "+_vm._s(station.address)+"\n    "))],2)}),0)],2)}
var StationListvue_type_template_id_c610238e_staticRenderFns = []


// CONCATENATED MODULE: ./components/StationList.vue?vue&type=template&id=c610238e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StationList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StationListvue_type_script_lang_js_ = ({
  data() {
    return {
      markers: []
    };
  },

  computed: {
    stations() {
      return this.$store.state.stations.all.map(m => Object.assign({}, m, {
        distance: L.latLng(this.$store.state.locations[0].geolocations.latitude, this.$store.state.locations[0].geolocations.longitude).distanceTo(L.latLng([m.coords.lat, m.coords.lng]))
      })).sort((a, b) => a.distance - b.distance);
    }

  },
  methods: {
    orderList() {
      console.log('Filter!!');
    }

  }
});
// CONCATENATED MODULE: ./components/StationList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StationListvue_type_script_lang_js_ = (StationListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/StationList.vue



function StationList_injectStyles (context) {
  
  
}

/* normalize component */

var StationList_component = Object(componentNormalizer["a" /* default */])(
  components_StationListvue_type_script_lang_js_,
  StationListvue_type_template_id_c610238e_render,
  StationListvue_type_template_id_c610238e_staticRenderFns,
  false,
  StationList_injectStyles,
  null,
  "2dd576dc"
  
)

/* harmony default export */ var StationList = (StationList_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      userCoords: []
    };
  },

  components: {
    StationList: StationList,
    StationMap: Map
  },

  created() {},

  computed: {
    hasUserlocation() {
      return this.$store.state.hasUserlocation;
    },

    noUserLocation() {
      return this.$store.state.gettingLocation;
    },

    showLocationLoading() {
      return this.$store.state.loadLocation;
    }

  },
  methods: {
    async getLocation() {
      this.$store.dispatch('fetchFromNavigator');
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89b59f58"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map