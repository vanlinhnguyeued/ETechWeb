(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{253:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALTSURBVHgB7ZbLaxNRGMXPnbmTyczkUZM+CDVQQbsoIiJYigt15dIqIrhz4cKV4KrgplTEhaAbdy78A1SUbv0HVHBhdVGtRbRS+7Btah6TeU/87g10385AusiPJNxMbu53cs79bgbo06fP/mAXLz2bY4zdxAE4hhaeq++RHPaU0+vY+PHBsd1/Dra226iOFtHpxFhda6J0xMDQkIWl79so5nVUKnl8o7FlaTg5MYKVj8uIJ8aRlI6unxJCYLcDqKqCqcmjqNddeF6Ic1NVbG62EPghXa/i1+9dhHGMM6crWFreRhhGiIcH4d6/hTSQQgyDo9HwoCoMrhuSI4DCGJotH+WyAZUz+F6EbJmjTvMsQ4OuczC7De3FGySGakkhoriiAGEUk4gOjZn83DI1tNshCvmYCqvwaJ4QtrHZhG0HXSGv3yINpBA9o8IPIumCQhEJSyIS5VBE5ZIpnQrCGFlybrfmSIG5nIZ1isZ58BhJYZx3hXh+RMUUUCLQNFXuCzE2KQLXDZDP6XIPiXmFgo61jSY5FXQXIVcSQ80hheSpI3ZqtCBVD8gZgYhLPEslQ8xERI4I58S+sawMRWRi/fNPZGdmkQZSSKPpyVhAj4yIiSIxyX4jy9G2feQsHVxT4Dhiv+j4s9ZAjSLqWCaCy1eQBt2uoYJSDG0PISImZxyKpGX78pdrJCKgrjGoa0SrC0cMik0KuT6NNNjrGmHIuw+rGB0tIEOFPy1sYIQOM5vELH7dQrGYlfOWf9TkFysjOShbO8jemUFSlCAEnzxbxSodVopYfNhETBfJDDkWe8OnN90x0Gq6e+O/1MInhjNgSAGVzpHZe+fJjYMv5yAduPZqPpGQtOCZl/PiPEev4e6jOXRUFb2E6RnweGAALI7QU8QRb96+ezii8a9NgynoLeI2ILhx9XB0TfbhEzrXffQS1XXB1S+LC/Q3fAE9ha2gT58+++Q/+TMeFcz4qHgAAAAASUVORK5CYII="},254:function(e,t,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(51).default)("df336e90",content,!0,{sourceMap:!1})},257:function(e,t,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(51).default)("234e9fa6",content,!0,{sourceMap:!1})},258:function(e,t,o){"use strict";o.r(t);o(100),o(38),o(39);var n={name:"Dropdown",props:{forMobile:{type:Boolean,required:!1}},directives:{"click-outside":{bind:function(e,t){var o=t.modifiers.bubble;document.addEventListener("click",(function(n){(o||!e.contains(n.target)&&e!==n.target)&&t.value(n)}))},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},data:function(){return{isShow:!1,langs:[{name:this.$t("header.vietnamese"),flag:o(263),code:"vi-VN"},{name:this.$t("header.english"),flag:o(253),code:"en-US"}],selected:{name:this.$t("header.english"),flag:o(253)}}},mounted:function(){this.selected=this.langs.find((function(e){return location.pathname.includes(e.code)}))},methods:{clickOutside:function(){this.isShow=!1},onClick:function(){this.isShow=!this.isShow}}},A=(o(264),o(58)),component=Object(A.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],class:e.forMobile?"dropdown-mobile":"dropdown",on:{click:function(t){return e.onClick()}}},[n("img",{staticClass:"flag",attrs:{src:e.selected.flag}}),e._v(" "),n("img",{staticClass:"icon",attrs:{src:o(259)("./arrow-down"+(e.forMobile?"-black":"")+".png")}}),e._v(" "),n("div",{class:e.isShow?"dropdown--show":"dropdown--hidden"},e._l(e.langs,(function(t,A){return n("NuxtLink",{key:t.name,class:["item",0==A&&"boder--bottom"],attrs:{to:e.switchLocalePath(""+t.code)}},[n("div",{staticClass:"checked"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.name===e.selected.name,expression:"item.name === selected.name"}],staticClass:"seleted",attrs:{src:o(262)}})]),e._v(" "),n("img",{staticClass:"flag",attrs:{src:t.flag}}),e._v(" "),n("div",{staticClass:"name"},[e._v(e._s(t.name))])])})),1)])}),[],!1,null,"1fff15b4",null);t.default=component.exports},259:function(e,t,o){var map={"./arrow-down-black.png":260,"./arrow-down.png":261};function n(e){var t=A(e);return o(t)}function A(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=A,e.exports=n,n.id=259},260:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA9SURBVHgBrcxJCgAgEAPBPL1/7nYSxGWcNOQWSpJoK6Z1a4QTc6ALlkG32A96xSIoCoYTO6EoGU5sRnk5ViBZY6c+QdivAAAAAElFTkSuQmCC"},261:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAYAAADzun+cAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgBvc3JDYBADATBCb0zN0LAA8SxeO2pBEoRQfihlTnf0oMpP6em/D5tzt/TpnwsLc5RxmSOZiRzVOFnjioN5qjDR446PeTI4ZIjpz1HSQvOu62MwPR02wAAAABJRU5ErkJggg=="},262:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABpSURBVHgB7dFRDcAgDATQkzAJSJqEOpiESZqESZgEJEwCHAkfhKR8wH1yyf01L00LaHKwLxshSgE/NqnQHgxYzAZ98GINQrDkr4O3CkTdMg3g6RuaAy8/xTpY9mVr4KgAPThAlJN9ZsEM0io2mJDXlMcAAAAASUVORK5CYII="},263:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgB7Zc9S8NAGMf/uUSbXNs0anHp4mcQVESc7CS6OCgq4gdw9EM4uKggDi6u+hXcRV10dHFofYG+WJPalqRNU22RqK1Dcoe2hfzgOO65O/jd8xwHBwQE9AnCDcY0GdDQRUxAl2QM7gkQNtFFKBonBD1CINIOtwihAkhUAC/cInRWhjIeAi/cItEkRWROAS/8GZkOQZ2nECS+8nCJKFMhSKMiiEo+yjMIHiSvC0lYgLYWgbYacWNi7OsciaM46objjkvnJrI7r/CKZxGn3EDh+A2O0UB8OwZx6GcySZS0mlN0kNs1oJ+W4AffpdHPSkgtZVB7tDvmrLsq0itZ3xJMIk1qTzYqF2ZHvHxpwbqvgQXmy0pn5FZvP9tudtQFClaYRJSJEAYSEipXJtLrOTxs5GDeViHFRdBJtsfN82X9jrpIkd838HJYdGOp5QxGtlSEkwoq1xb8wiSSPyiinq93xJti4jBbtZl2/SbhzhUc/JvIXxCItNMzIp/fCbnL3wlTR0BAv/AORABrR7GL/mwAAAAASUVORK5CYII="},264:function(e,t,o){"use strict";o(254)},265:function(e,t,o){var n=o(50)(!1);n.push([e.i,".dropdown[data-v-1fff15b4],.dropdown-mobile[data-v-1fff15b4]{display:flex;flex-direction:row;align-items:center;margin-left:3.33px;cursor:pointer;position:relative}.dropdown-mobile .flag[data-v-1fff15b4],.dropdown .flag[data-v-1fff15b4]{width:33.33px;height:33.33px}.dropdown-mobile .icon[data-v-1fff15b4],.dropdown .icon[data-v-1fff15b4]{width:10px;height:5px;margin-left:14.33px}.dropdown-mobile .dropdown--hidden[data-v-1fff15b4],.dropdown-mobile .dropdown--show[data-v-1fff15b4],.dropdown .dropdown--hidden[data-v-1fff15b4],.dropdown .dropdown--show[data-v-1fff15b4]{width:156px;height:81px;background-color:#fff;border-radius:8px;position:absolute;bottom:-87px;right:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:0 8px;transition:all .3s ease-in;overflow:hidden;visibility:visible;opacity:1;border:1px solid #eee}.dropdown-mobile .dropdown--hidden[data-v-1fff15b4],.dropdown .dropdown--hidden[data-v-1fff15b4]{visibility:hidden;opacity:0}.dropdown-mobile .item[data-v-1fff15b4],.dropdown .item[data-v-1fff15b4]{display:flex;flex-direction:row;align-items:center;width:100%;cursor:pointer;flex:1}.dropdown-mobile .item .checked[data-v-1fff15b4],.dropdown .item .checked[data-v-1fff15b4]{margin-left:2px;margin-right:13.27px;width:20.06px;height:14.73px}.dropdown-mobile .item .checked img[data-v-1fff15b4],.dropdown .item .checked img[data-v-1fff15b4]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.dropdown-mobile .item .name[data-v-1fff15b4],.dropdown .item .name[data-v-1fff15b4]{font-family:Montserrat;font-size:10px;font-weight:700;color:#000;line-height:17.5px;margin-left:7.33px;text-transform:capitalize}.dropdown-mobile .boder--bottom[data-v-1fff15b4],.dropdown .boder--bottom[data-v-1fff15b4]{border-bottom:1px solid #c4c4c4}.dropdown-mobile[data-v-1fff15b4]{width:80px;height:40px;background-color:#f6f6f6;border:1px solid #afafaf;padding:4px 12px;border-radius:8px}.dropdown-mobile .icon[data-v-1fff15b4]{width:10px;height:5px;margin-left:9.67px}.dropdown-mobile .dropdown--hidden[data-v-1fff15b4],.dropdown-mobile .dropdown--show[data-v-1fff15b4]{left:0;right:unset}",""]),e.exports=n},271:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgB1ZeJCYAwEAQXK0pH2nlKsASNohC/vLcsBg6CwoxPcncBgDHEHMKHcOANF3k25z5ZjpjBkZ/S2HO5wJC7F4f/umElz7IZ8mKmpbyaZSFvZvTIux+8BWD2q2pA5ouzBEjbjikwMwck5eys9ymnS3PyaumAHwzJp5YsLsl2kiQQScqUFAlJWZQ0ApLWR9LsMUtbku3Bkebkj6MFo7Td5dvLYjomLGksPz3TCiNwFMZAhxdGAAAAAElFTkSuQmCC"},272:function(e,t,o){"use strict";o(257)},273:function(e,t,o){var n=o(50)(!1);n.push([e.i,'.modal-backdrop[data-v-3a7ecf08]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh}.modal[data-v-3a7ecf08]{background-color:#fff;overflow-x:hidden;display:flex;flex-direction:column;flex:1;width:100%;height:100%}.modal .header[data-v-3a7ecf08]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:20px 16px}.modal .navbar-nav[data-v-3a7ecf08]{list-style-type:none;padding:40px 16px}.modal .navbar-nav[data-v-3a7ecf08],.modal .navbar-nav .nuxt-link[data-v-3a7ecf08]{display:flex;align-items:center;flex-direction:column}.modal .navbar-nav .nuxt-link[data-v-3a7ecf08]{justify-content:flex-start;width:100%;border-bottom:1px solid #eee;padding-bottom:24px;margin-bottom:24px;font-family:"Montserrat",serif;font-weight:700;font-size:14px;line-height:17.5px;color:#000;text-align:center;text-transform:uppercase}.modal .navbar-nav .nuxt-link-active[data-v-3a7ecf08]{color:#441dbb}.modal-fade-enter[data-v-3a7ecf08],.modal-fade-leave-to[data-v-3a7ecf08]{opacity:0}.modal-fade-enter-active[data-v-3a7ecf08],.modal-fade-leave-active[data-v-3a7ecf08]{transition:opacity .3s ease}',""]),e.exports=n},282:function(e,t,o){"use strict";o.r(t);var n={name:"MenuCollapse",data:function(){return{navs:[{name:this.$t("header.about"),key:"about-us"},{name:this.$t("header.games"),key:"our-games"},{name:this.$t("header.partners"),key:"our-partners"},{name:this.$t("header.contact"),key:"contact-us"}]}},methods:{close:function(){this.$emit("close")},clickNav:function(e){this.$router.push("#".concat(e.key)),this.$emit("close")}}},A=(o(272),o(58)),component=Object(A.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("div",{staticClass:"header"},[n("div",{staticClass:"dropdown-lang__container"},[n("Dropdown",{attrs:{forMobile:!0}})],1),e._v(" "),n("div",{staticClass:"btn-close",on:{click:e.close}},[n("img",{attrs:{src:o(271)}})])]),e._v(" "),n("ul",{staticClass:"navbar-nav"},e._l(e.navs,(function(t){return n("NuxtLink",{key:t.key,staticClass:"nuxt-link",attrs:{to:"#"+t.key}},[n("li",{on:{click:function(o){return e.clickNav(t.key)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),1)])])])}),[],!1,null,"3a7ecf08",null);t.default=component.exports;installComponents(component,{Dropdown:o(258).default})}}]);