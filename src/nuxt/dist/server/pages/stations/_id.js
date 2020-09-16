exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/stations/_id.vue?vue&type=template&id=4f2d4498&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.station.name)+"\n        "+_vm._s(_vm.station.address)+"\n    ")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stations/_id.vue?vue&type=template&id=4f2d4498&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stations/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      url_name: this.$route.params.id
    };
  },

  computed: {
    station() {
      return this.$store.state.stations.all.find(station => station.url_name === this.url_name);
    },

    nearByStations() {
      return this.$store.state.stations.all.filter(stations => station.url_name !== this.url_name);
    }

  }
});
// CONCATENATED MODULE: ./pages/stations/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var stations_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stations/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  stations_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22077c50"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map