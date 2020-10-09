import Vue from 'vue';
import {
  LMap,
  LTileLayer,
  LMarker,
  LCircle,
  LCircleMarker,
  findRealParent,
  propsBinder,
} from 'vue2-leaflet';
import * as L from 'leaflet';
import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol';
import { Icon } from 'leaflet';


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-circle', LCircle);
Vue.component('l-circle-marker', LCircleMarker)
Vue.component('v-locatecontrol', Vue2LeafletLocatecontrol);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LeafletPlugin = {
  install(Vue) {
    // Expose Leaflet
    Vue.prototype.$L = L;
  },
};

Vue.use(LeafletPlugin);
