((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[2],{1155:function(e,t){},1296:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){0;l=a(1306).default,n.default.render(r.default.createElement(l,{terria:e,allBaseMaps:t,viewState:o}),document.getElementById("ui"));var l};var n=o(a(122)),r=(o(a(1300)),o(a(13)));function o(e){return e&&e.__esModule?e:{default:e}}},1306:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=_;var n=a(673),r=f(a(1307)),o=f(a(1313)),l=f(a(15)),i=f(a(13)),s=f(a(1317)),u=f(a(1325)),d=f(a(1326)),c=f(a(1688));function f(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e){a.e(5).then(function(){var t=a(750);e(t)}.bind(null,a)).catch(a.oe)}function _(e){return i.default.createElement(d.default,m({},e,{version:c.default}),i.default.createElement(n.Menu,null,i.default.createElement(s.default,{viewState:e.viewState}),i.default.createElement(o.default,{caption:"About",href:"about.html",key:"about-link"})),i.default.createElement(n.Nav,null,i.default.createElement(r.default,{terria:e.viewState.terria,key:"measure-tool"})),i.default.createElement(n.ExperimentalMenu,null,/Android|iPhone|iPad/i.test(navigator.userAgent)?i.default.createElement(u.default,{loadComponent:p,viewState:e.viewState,terria:e.viewState.terria,experimentalWarning:!0}):null))}a(1689),_.propTypes={terria:l.default.object,viewState:l.default.object}},1317:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(13)),r=u(a(15)),o=u(a(345)),l=u(a(217)),i=u(a(1320)),s=u(a(35));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t={inner:i.default.dropdownInner,icon:"gallery"};return n.default.createElement(o.default,{theme:t,btnText:"Related Maps",smallScreen:e.smallScreen,viewState:e.viewState,btnTitle:"See related maps"},n.default.createElement("div",{className:(0,s.default)(l.default.header)},n.default.createElement("label",{className:l.default.heading},"Related Maps")),n.default.createElement("p",null,"Clicking on a map below will open it in a separate window or tab."),n.default.createElement("div",{className:(0,s.default)(l.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://nationalmap.gov.au/renewables/"},n.default.createElement("img",{className:i.default.image,src:a(1321),alt:"AREMI"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://nationalmap.gov.au/renewables/"},"AREMI"),n.default.createElement("p",null,"AREMI provides access to Australian spatial data relevant to the Renewable Energy industry, sourced from Government, Industry and Research.")),n.default.createElement("div",{className:(0,s.default)(l.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://nationalmap.gov.au/northernaustralia/"},n.default.createElement("img",{className:i.default.image,src:a(1322),alt:"Northern Australia"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://nationalmap.gov.au/northernaustralia/"},"Northern Australia"),n.default.createElement("p",null,"The Northern Australia NationalMap forms part of the Government's commitment to developing northern Australia by providing easy access to authoritative and other spatial data on northern Australia to governments, business and the public. More information on the Government's White Paper on Developing Northern Australia is available here:"," ",n.default.createElement("a",{target:"_blank",className:i.default.link,href:"https://northernaustralia.dpmc.gov.au"},"https://northernaustralia.dpmc.gov.au"),".")),n.default.createElement("div",{className:(0,s.default)(l.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://neiiviewer.nicta.com.au"},n.default.createElement("img",{className:i.default.image,src:a(1323),alt:"NEII Viewer"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://www.neii.gov.au/viewer/"},"NEII Viewer"),n.default.createElement("p",null,"The National Environmental Information Infrastructure (NEII) is an information platform designed to improve discovery, access and re-use of nationally significant environmental data. More information on the NEII is available here:"," ",n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://neii.gov.au/data-viewer"},"neii.gov.au/data-viewer"),".")),n.default.createElement("div",{className:(0,s.default)(l.default.section,i.default.section)},n.default.createElement("a",{target:"_blank",href:"http://map.aurin.org.au"},n.default.createElement("img",{className:i.default.image,src:a(1324),alt:"AURIN Map"})),n.default.createElement("a",{target:"_blank",className:i.default.link,href:"http://map.aurin.org.au"},"AURIN Map"),n.default.createElement("p",null,"AURIN Map provides access to datasets on urban infrastructure for urban researchers, policy and decision makers.")))}d.propTypes={viewState:r.default.object.isRequired,smallScreen:r.default.bool};var c=d;t.default=c},1320:function(e,t,a){e.exports={"dropdown-inner":"tm-related-maps__dropdown-inner",dropdownInner:"tm-related-maps__dropdown-inner",section:"tm-related-maps__section tm-_base__clearfix",image:"tm-related-maps__image",link:"tm-related-maps__link tm-_base__link"}},1321:function(e,t,a){e.exports=a.p+"8edfbe49f85e6994ebb732a110a3c502.jpg"},1322:function(e,t,a){e.exports=a.p+"f5ad078d6d4ff7fc08ef6a3105dc2ef9.jpg"},1323:function(e,t,a){e.exports=a.p+"8fc6de49c8bef0a89f25ca9ba37deb81.jpg"},1324:function(e,t,a){e.exports=a.p+"4bc9b143747260dad71fd9951b364e3a.jpg"},1365:function(e,t){},1688:function(e,t){e.exports="post-prettier-22-gcc89a14b (plus local modifications)"},1689:function(e,t,a){e.exports={rcSliderTooltipZoomDownIn:"tm-global__rcSliderTooltipZoomDownIn",rcSliderTooltipZoomDownOut:"tm-global__rcSliderTooltipZoomDownOut"}},1702:function(e,t){e.exports='<div style="border:1px solid red; background:hsla(0,50%,50%,0.2); padding: 0.5em;">\n<h1>Development site</h1>\n\n<p>You are viewing a site other than the official production site. It may not operate as you expect.</p>\n</div>'},1703:function(e,t){e.exports="<div>\n<p>This is the global disclaimer shown to all users of this site. It should be replaced with something specific, by modifying <samp>lib/Views/GlobalDisclaimer.html</samp>.\n</div>"},2:function(e,t,a){"use strict";var n=w(a(508)),r=w(a(780)),o=w(a(136)),l=w(a(789)),i=w(a(1066)),s=w(a(1174)),u=w(a(450)),d=w(a(1282)),c=w(a(1283)),f=w(a(670)),m=w(a(1291)),p=w(a(1293)),_=w(a(1294)),v=w(a(8)),h=w(a(1296));function w(e){return e&&e.__esModule?e:{default:e}}var g={baseUrl:"build/TerriaJS"};(0,i.default)(),(0,l.default)(),g.analytics=new n.default;var b=new u.default(g);(0,s.default)(b);var E=new f.default({terria:b});e.exports=b.start({applicationUrl:window.location,configUrl:"config.json",shareDataService:new r.default({terria:b})}).otherwise(function(e){(0,o.default)(b,e)}).always(function(){try{E.searchState.locationSearchProviders=[new m.default({terria:b,key:b.configParameters.bingMapsKey}),new p.default({terria:b}),new _.default({terria:b})],(0,d.default)(b,window),(0,c.default)(b,window);var e=a(1690),t=a(1692),n=a(1701),r=e(b),o=t(b,b.configParameters.bingMapsKey),l=r.concat(o);if(n(b,l,"Bing Maps Aerial with Labels",!0),(0,v.default)(b.configParameters.globalDisclaimer)){var i=b.configParameters.globalDisclaimer,s=window.location.hostname;if(i.enableOnLocalhost||-1===s.indexOf("localhost")){var u="";((0,v.default)(i.devHostRegex)&&s.match(i.devHostRegex)||(0,v.default)(i.prodHostRegex)&&!s.match(i.prodHostRegex))&&(u+=a(1702)),u+=a(1703);var f={title:void 0!==i.title?i.title:"Warning",confirmText:i.buttonTitle||"Ok",width:600,height:550,message:u,horizontalPadding:100};E.notifications.push(f)}}(0,h.default)(b,l,E)}catch(e){console.error(e),console.error(e.stack)}})},576:function(e,t,a){var n={"./deflate":577,"./deflate.js":577,"./draco_decoder":578,"./draco_decoder.js":578,"./draco_wasm_wrapper":579,"./draco_wasm_wrapper.js":579,"./inflate":580,"./inflate.js":580};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=576},798:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=798},799:function(e,t,a){var n={"./draco_wasm_wrapper.js":800};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=799},803:function(e,t,a){var n={"./draco_decoder.wasm":804};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=803},848:function(e,t,a){var n={"./IAU2006_XYS_0.json":849,"./IAU2006_XYS_1.json":850,"./IAU2006_XYS_10.json":851,"./IAU2006_XYS_11.json":852,"./IAU2006_XYS_12.json":853,"./IAU2006_XYS_13.json":854,"./IAU2006_XYS_14.json":855,"./IAU2006_XYS_15.json":856,"./IAU2006_XYS_16.json":857,"./IAU2006_XYS_17.json":858,"./IAU2006_XYS_18.json":859,"./IAU2006_XYS_19.json":860,"./IAU2006_XYS_2.json":861,"./IAU2006_XYS_20.json":862,"./IAU2006_XYS_21.json":863,"./IAU2006_XYS_22.json":864,"./IAU2006_XYS_23.json":865,"./IAU2006_XYS_24.json":866,"./IAU2006_XYS_25.json":867,"./IAU2006_XYS_26.json":868,"./IAU2006_XYS_27.json":869,"./IAU2006_XYS_3.json":870,"./IAU2006_XYS_4.json":871,"./IAU2006_XYS_5.json":872,"./IAU2006_XYS_6.json":873,"./IAU2006_XYS_7.json":874,"./IAU2006_XYS_8.json":875,"./IAU2006_XYS_9.json":876};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=848}}]);
//# sourceMappingURL=2.TerriaMap.js.map