(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{232:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("384b9d81",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";n(232)},240:function(t,e,n){var o=n(27),r=n(91),c=n(241),l=o(!1),m=r(c);l.push([t.i,'#welcomeScreen[data-v-969bf092]{background-attachment:local;background-position:50%;background-size:auto;position:relative;display:flex;flex-direction:column;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));justify-content:flex-end;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}#welcomeScreen[data-v-969bf092],#welcomeScreen[data-v-969bf092]:before{background-repeat:no-repeat;height:100%}#welcomeScreen[data-v-969bf092]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:100%;background-size:contain;background-position:top;//filter:grayscale(60%);//background-image:url('+m+")}#welcomeScreenContainer[data-v-969bf092]{font-family:Lato;padding:1rem 1rem 2rem;margin:auto;position:relative;width:100%;max-width:32rem;color:var(--color-secondary)}#welcomeScreenContainer h1[data-v-969bf092]{font-size:1.5rem;font-weight:700;margin-bottom:1rem;line-height:1.375}#welcomeScreenContainer h2[data-v-969bf092]{font-size:.875rem;font-weight:400;margin-bottom:.5rem;line-height:1.25}#welcomeScreenContainer button[data-v-969bf092]{display:block;width:100%;max-width:20rem;margin-left:auto;margin-right:auto;border-radius:.5rem;padding:.75rem;background-color:var(--color-primary);--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}#welcomeScreenContainer p[data-v-969bf092]{font-size:1rem;line-height:1rem;padding-top:1rem;text-align:center;width:83.333333%;margin:auto}#appFeaturesList[data-v-969bf092]{margin-top:2rem;margin-bottom:2rem}.appFeaturesListItem[data-v-969bf092]{display:flex;margin-top:1rem;margin-bottom:1rem;align-content:center;align-items:center}.featuresIcon[data-v-969bf092]{width:3rem;margin-right:1rem;display:flex;justify-content:center;align-items:flex-start}.featuresHeading h3[data-v-969bf092]{font-size:1.125rem;font-weight:600;color:var(--color-secondary)}.featuresHeading h4[data-v-969bf092]{font-size:.75rem;color:var(--color-secondary)}",""]),t.exports=l},241:function(t,e,n){t.exports=n.p+"img/illustrator-bg.a12a313.svg"},247:function(t,e,n){"use strict";n.r(e);n(16);var o=n(3),r={data:function(){return{}},components:{},computed:{userLocation:function(){return this.$store.state.loadingStatus}},methods:{getUserLocation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("GET_LOCATION_AND_DISTANCE");case 1:case"end":return e.stop()}}),e)})))()}}},c=(n(239),n(29)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("div",{attrs:{id:"welcomeScreen"}},[n("div",{attrs:{id:"welcomeScreenContainer"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",[n("button",{staticClass:"largeButton",on:{click:t.getUserLocation}},[t.userLocation?n("span",[t._v("Haetaan paikkatietoja")]):n("span",[t._v("Paikanna minut")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Löydä kaasutankkausasemat ympäri Suomessa")]),t._v(" "),n("h2",[t._v("\n          Kaasulla.app on karttapohjainen sovellus josta löydät\n          kaasutankkausasemat joissa voi tankkaa biokaasua tai maakaasua.\n          Sinun tarvitsee vain myötään sovellukselle paikannus oikeus.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{attrs:{id:"appFeaturesList"}},[n("li",{staticClass:"appFeaturesListItem"},[n("div",{staticClass:"featuresHeading"},[n("h3",[t._v("Paikannus")]),t._v(" "),n("h4",[t._v("Alueesi lähimmät kaasutankkausasemat")])])]),t._v(" "),n("li",{staticClass:"appFeaturesListItem"},[n("div",{staticClass:"featuresHeading"},[n("h3",[t._v("Suodattaminen")]),t._v(" "),n("h4",[t._v("Rajaa kaasutankkausasemia kaasutyypin mukaan")])])]),t._v(" "),n("li",{staticClass:"appFeaturesListItem"},[n("div",{staticClass:"featuresHeading"},[n("h3",[t._v("Navigointi")]),t._v(" "),n("h4",[t._v("Reittiohje navigointi applikaatioon")])])])])])}],!1,null,"969bf092",null);e.default=component.exports}}]);