(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,9,10],{253:function(e,t,n){e.exports=n.p+"img/united-states.be707e2.png"},254:function(e,t,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("db123d3a",content,!0,{sourceMap:!1})},256:function(e,t,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("1d48e50e",content,!0,{sourceMap:!1})},257:function(e,t,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("604c4a08",content,!0,{sourceMap:!1})},258:function(e,t,n){"use strict";n.r(t);n(100),n(38),n(39);var o={name:"Dropdown",directives:{"click-outside":{bind:function(e,t){var n=t.modifiers.bubble;document.addEventListener("click",(function(o){(n||!e.contains(o.target)&&e!==o.target)&&t.value(o)}))},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},props:{forMobile:{type:Boolean,required:!1}},data:function(){return{isShow:!1,langs:[{name:this.$t("header.vietnamese"),flag:n(260),code:"vi-vn"},{name:this.$t("header.english"),flag:n(253),code:"en-us"}],selected:{name:this.$t("header.english"),flag:n(253)}}},computed:{iconUrl:function(){return this.forMobile?n(261):n(262)}},mounted:function(){this.selected=this.langs.find((function(e){return location.pathname.includes(e.code)}))},methods:{clickOutside:function(){this.isShow=!1},onClick:function(){this.isShow=!this.isShow}}},d=(n(263),n(58)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],class:e.forMobile?"dropdown-mobile":"dropdown",on:{click:function(t){return e.onClick()}}},[o("img",{staticClass:"dropdown__flag",attrs:{src:e.selected.flag}}),e._v(" "),o("img",{staticClass:"dropdown__icon",attrs:{src:e.iconUrl}}),e._v(" "),o("div",{class:e.isShow?"dropdown--show":"dropdown--hidden"},e._l(e.langs,(function(t,d){return o("NuxtLink",{key:t.name,class:["langs__item",0==d&&"boder--bottom"],attrs:{to:e.switchLocalePath(""+t.code)}},[o("div",{staticClass:"selected"},[o("img",{directives:[{name:"show",rawName:"v-show",value:t.name===e.selected.name,expression:"item.name === selected.name"}],staticClass:"selected-icon",attrs:{src:n(259)}})]),e._v(" "),o("img",{staticClass:"dropdown__flag",attrs:{src:t.flag}}),e._v(" "),o("div",{staticClass:"dropdown__name"},[e._v(e._s(t.name))])])})),1)])}),[],!1,null,"1584f83a",null);t.default=component.exports},259:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjc2OTggNS4yOTM4NEMyMS4zNzgxIDQuOTAyMDUgMjAuNzQyOSA0LjkwMjA1IDIwLjM1MTEgNS4yOTM4NEw4LjMzMjM3IDE3LjMxMjdMMy43MTI1NiAxMi42OTI5QzMuMzIwODEgMTIuMzAxMSAyLjY4NTY3IDEyLjMwMTEgMi4yOTM4NCAxMi42OTI5QzEuOTAyMDUgMTMuMDg0NiAxLjkwMjA1IDEzLjcxOTggMi4yOTM4NCAxNC4xMTE2TDcuNjIzMDEgMTkuNDQwN0M4LjAxNDY0IDE5LjgzMjQgOC42NTAyNSAxOS44MzIxIDkuMDQxNzMgMTkuNDQwN0wyMS43Njk4IDYuNzEyNTZDMjIuMTYxNiA2LjMyMDgxIDIyLjE2MTYgNS42ODU2MyAyMS43Njk4IDUuMjkzODRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},260:function(e,t,n){e.exports=n.p+"img/vietnam.945ad46.png"},261:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTBIN1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},262:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTBIN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},263:function(e,t,n){"use strict";n(254)},264:function(e,t,n){var o=n(50)(!1);o.push([e.i,".dropdown[data-v-1584f83a],.dropdown-mobile[data-v-1584f83a]{display:flex;flex-direction:row;align-items:center;cursor:pointer;position:relative}.dropdown__flag[data-v-1584f83a]{width:40px;height:40px}.dropdown__icon[data-v-1584f83a]{width:24px;height:24px;margin-left:4px}.dropdown--hidden[data-v-1584f83a],.dropdown--show[data-v-1584f83a]{width:156px;height:81px;background-color:#fff;border-radius:8px;position:absolute;bottom:-87px;right:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:0 8px;transition:all .3s ease-in;overflow:hidden;visibility:visible;opacity:1;border:1px solid #eee}.dropdown--hidden[data-v-1584f83a]{visibility:hidden;opacity:0}.langs__item[data-v-1584f83a]{display:flex;flex-direction:row;align-items:center;width:100%;cursor:pointer;flex:1}.selected[data-v-1584f83a]{width:24px;height:24px;margin-right:8px}.selected-icon[data-v-1584f83a]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.dropdown__name[data-v-1584f83a]{font-family:Montserrat;font-size:10px;font-weight:700;color:#000;line-height:17.5px;margin-left:4px;text-transform:capitalize}.boder--bottom[data-v-1584f83a]{border-bottom:1px solid #c4c4c4}.dropdown-mobile[data-v-1584f83a]{width:80px;height:40px;background-color:#f6f6f6;border:1px solid #afafaf;padding:4px 12px;border-radius:8px}.dropdown-mobile .dropdown__flag[data-v-1584f83a]{width:32px;height:32px}.dropdown-mobile .dropdown__icon[data-v-1584f83a]{margin-left:0}.dropdown-mobile .dropdown--hidden[data-v-1584f83a],.dropdown-mobile .dropdown--show[data-v-1584f83a]{left:0;right:unset}",""]),e.exports=o},265:function(e,t,n){e.exports=n.p+"img/logo.1bd109c.svg"},267:function(e,t,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("4b5822d3",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";n(256)},269:function(e,t,n){var o=n(50)(!1);o.push([e.i,".menu[data-v-5152ddfe]{display:flex;flex-direction:row;align-items:center;height:40px}.menu__item[data-v-5152ddfe]{margin-right:84px;font-family:Montserrat;font-weight:700;font-size:14px;line-height:17.5px;text-transform:uppercase;color:#fff;position:relative;transition:.3s}.menu__item[data-v-5152ddfe]:hover{opacity:.7}.menu .nuxt-link-active[data-v-5152ddfe]{opacity:.5}@media(max-width:1200px){.menu__item[data-v-5152ddfe]{margin-right:40px}}@media(max-width:900px){.menu__item[data-v-5152ddfe]{margin-right:15px}}",""]),e.exports=o},270:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjc0ODQgMjAuMDAwMkwzNC40Mjk4IDguMzE4MjNDMzUuMTkwMSA3LjU1ODM2IDM1LjE5MDEgNi4zMjk3NiAzNC40Mjk4IDUuNTY5OUMzMy42NyA0LjgxMDAzIDMyLjQ0MTQgNC44MTAwMyAzMS42ODE2IDUuNTY5OUwxOS45OTk4IDE3LjI1MTlMOC4zMTg0MiA1LjU2OTlDNy41NTgyMiA0LjgxMDAzIDYuMzMgNC44MTAwMyA1LjU3MDE1IDUuNTY5OUM0LjgwOTk1IDYuMzI5NzYgNC44MDk5NSA3LjU1ODM2IDUuNTcwMTUgOC4zMTgyM0wxNy4yNTE2IDIwLjAwMDJMNS41NzAxNSAzMS42ODIyQzQuODA5OTUgMzIuNDQyMSA0LjgwOTk1IDMzLjY3MDcgNS41NzAxNSAzNC40MzA1QzUuOTQ4ODMgMzQuODA5NiA2LjQ0Njc0IDM1IDYuOTQ0MjkgMzVDNy40NDE4NCAzNSA3LjkzOTM5IDM0LjgwOTYgOC4zMTg0MiAzNC40MzA1TDE5Ljk5OTggMjIuNzQ4NkwzMS42ODE2IDM0LjQzMDVDMzIuMDYwNiAzNC44MDk2IDMyLjU1ODIgMzUgMzMuMDU1NyAzNUMzMy41NTMzIDM1IDM0LjA1MDggMzQuODA5NiAzNC40Mjk4IDM0LjQzMDVDMzUuMTkwMSAzMy42NzA3IDM1LjE5MDEgMzIuNDQyMSAzNC40Mjk4IDMxLjY4MjJMMjIuNzQ4NCAyMC4wMDAyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},271:function(e,t,n){"use strict";n(257)},272:function(e,t,n){var o=n(50)(!1);o.push([e.i,'.modal-backdrop[data-v-167972fa]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;z-index:999;overflow:hidden}.modal-backdrop .modal[data-v-167972fa]{background-color:#fff;overflow-x:hidden;display:flex;flex-direction:column;flex:1;width:100%;height:100%}.header[data-v-167972fa]{flex-direction:row;justify-content:space-between;padding:20px 16px}.header[data-v-167972fa],.navbar-nav[data-v-167972fa]{display:flex;align-items:center}.navbar-nav[data-v-167972fa]{flex-direction:column;list-style-type:none;padding:40px 16px}.navbar-nav .nuxt-link[data-v-167972fa]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;border-bottom:1px solid #eee;padding-bottom:24px;margin-bottom:24px;font-family:"Montserrat",serif;font-weight:700;font-size:14px;line-height:17.5px;color:#000;text-align:center;text-transform:uppercase}.navbar-nav .nuxt-link-active[data-v-167972fa]{color:#441dbb;opacity:.5}.modal-fade-enter[data-v-167972fa],.modal-fade-leave-to[data-v-167972fa]{opacity:0}.modal-fade-enter-active[data-v-167972fa],.modal-fade-leave-active[data-v-167972fa]{transition:opacity .3s ease}',""]),e.exports=o},280:function(e,t,n){"use strict";n.r(t);var o={name:"Menu",data:function(){return{navs:[{name:this.$t("header.about"),key:"about-us"},{name:this.$t("header.games"),key:"our-games"},{name:this.$t("header.partners"),key:"our-partners"},{name:this.$t("header.contact"),key:"contact-us"}]}},methods:{onClick:function(e){this.$router.push("#".concat(e.key))}}},d=(n(268),n(58)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},e._l(e.navs,(function(t){return n("NuxtLink",{key:t.key,staticClass:"menu__item",attrs:{to:"#"+t.key}},[n("div",{on:{click:function(n){return e.onClick(t.key)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])])})),1)}),[],!1,null,"5152ddfe",null);t.default=component.exports},281:function(e,t,n){"use strict";n.r(t);var o={name:"MenuCollapse",data:function(){return{navs:[{name:this.$t("header.about"),key:"about-us"},{name:this.$t("header.games"),key:"our-games"},{name:this.$t("header.partners"),key:"our-partners"},{name:this.$t("header.contact"),key:"contact-us"}]}},methods:{close:function(){this.$emit("close")},clickNav:function(e){this.$router.push("#".concat(e.key)),this.$emit("close")}}},d=(n(271),n(58)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal-fade"}},[o("div",{staticClass:"modal-backdrop"},[o("div",{staticClass:"modal"},[o("div",{staticClass:"header"},[o("div",{staticClass:"dropdown-lang__container"},[o("Dropdown",{attrs:{"for-mobile":!0}})],1),e._v(" "),o("div",{staticClass:"btn-close",on:{click:e.close}},[o("img",{attrs:{src:n(270)}})])]),e._v(" "),o("ul",{staticClass:"navbar-nav"},e._l(e.navs,(function(t){return o("NuxtLink",{key:t.key,staticClass:"nuxt-link",attrs:{to:"#"+t.key}},[o("li",{on:{click:function(n){return e.clickNav(t.key)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),1)])])])}),[],!1,null,"167972fa",null);t.default=component.exports;installComponents(component,{Dropdown:n(258).default})},285:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1IDEyLjkxNjVINUM0LjMxNjY3IDEyLjkxNjUgMy43NSAxMi4zNDk4IDMuNzUgMTEuNjY2NUMzLjc1IDEwLjk4MzIgNC4zMTY2NyAxMC40MTY1IDUgMTAuNDE2NUgzNUMzNS42ODMzIDEwLjQxNjUgMzYuMjUgMTAuOTgzMiAzNi4yNSAxMS42NjY1QzM2LjI1IDEyLjM0OTggMzUuNjgzMyAxMi45MTY1IDM1IDEyLjkxNjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzUgMjEuMjVINUM0LjMxNjY3IDIxLjI1IDMuNzUgMjAuNjgzMyAzLjc1IDIwQzMuNzUgMTkuMzE2NyA0LjMxNjY3IDE4Ljc1IDUgMTguNzVIMzVDMzUuNjgzMyAxOC43NSAzNi4yNSAxOS4zMTY3IDM2LjI1IDIwQzM2LjI1IDIwLjY4MzMgMzUuNjgzMyAyMS4yNSAzNSAyMS4yNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNSAyOS41ODM1SDVDNC4zMTY2NyAyOS41ODM1IDMuNzUgMjkuMDE2OCAzLjc1IDI4LjMzMzVDMy43NSAyNy42NTAyIDQuMzE2NjcgMjcuMDgzNSA1IDI3LjA4MzVIMzVDMzUuNjgzMyAyNy4wODM1IDM2LjI1IDI3LjY1MDIgMzYuMjUgMjguMzMzNUMzNi4yNSAyOS4wMTY4IDM1LjY4MzMgMjkuNTgzNSAzNSAyOS41ODM1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},286:function(e,t,n){"use strict";n(267)},287:function(e,t,n){var o=n(50)(!1);o.push([e.i,".header[data-v-7d048c1a]{position:fixed;z-index:200;width:100%;top:0;transition:.5s;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:20px 80px}.header.fixed[data-v-7d048c1a]{background:#5851e3;padding:10px 80px}.header.fixed .logo[data-v-7d048c1a]{width:auto;height:44px}.header.fixed .header__menu[data-v-7d048c1a]{padding-top:0}.header__logo[data-v-7d048c1a]{display:flex;justify-content:flex-start;align-items:flex-start}.header .logo[data-v-7d048c1a]{width:109px;height:64px;transition:.4s}.header__menu[data-v-7d048c1a]{flex:1;display:flex;justify-content:flex-end;align-items:flex-start;flex-direction:row;padding-top:20px;transition:.4s}.header__menu--mobile[data-v-7d048c1a]{display:none;width:40px;height:40px;align-self:center;cursor:pointer}.header__menu--mobile img[data-v-7d048c1a]{width:100%;height:100%}@media(max-width:900px){.header[data-v-7d048c1a]{padding:24px 16px}.header.fixed[data-v-7d048c1a]{background:#441dbb;padding:10px 16px}}@media(max-width:600px){.header__menu[data-v-7d048c1a]{display:none}.header__menu--mobile[data-v-7d048c1a]{display:flex}}",""]),e.exports=o},339:function(e,t,n){"use strict";n.r(t);var o={name:"Header",data:function(){return{isVisibleBacground:!1,isShowMenu:!1}},beforeMount:function(){window.addEventListener("scroll",this.onWindowScroll)},mounted:function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;this.isVisibleBacground=!e},beforeDestroy:function(){window.removeEventListener("scroll",this.onWindowScroll)},methods:{onWindowScroll:function(){this.isVisibleBacground=window.pageYOffset>0},closeMenu:function(){this.isShowMenu=!1,document.body.classList.remove("modal-open")},openMenu:function(){this.isShowMenu=!0,document.body.classList.add("modal-open")},onClick:function(){this.$router.push("/")}}},d=(n(286),n(58)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:[e.isVisibleBacground?"header fixed":"header","noselect"]},[o("NuxtLink",{staticClass:"header__logo",attrs:{to:e.localePath("/")}},[o("img",{staticClass:"logo",attrs:{src:n(265)},on:{click:e.onClick}})]),e._v(" "),o("div",{staticClass:"header__menu"},[o("Menu"),e._v(" "),o("Dropdown")],1),e._v(" "),o("div",{staticClass:"header__menu--mobile",on:{click:e.openMenu}},[o("img",{attrs:{src:n(285)}})]),e._v(" "),o("MenuCollapse",{directives:[{name:"show",rawName:"v-show",value:e.isShowMenu,expression:"isShowMenu"}],on:{close:e.closeMenu}})],1)}),[],!1,null,"7d048c1a",null);t.default=component.exports;installComponents(component,{Menu:n(280).default,Dropdown:n(258).default,MenuCollapse:n(281).default})}}]);