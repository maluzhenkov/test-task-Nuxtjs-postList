(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,e,o){var content=o(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("63cf53e8",content,!0,{sourceMap:!1})},181:function(t,e,o){var content=o(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("6759f5ab",content,!0,{sourceMap:!1})},182:function(t,e,o){"use strict";var n=o(180);o.n(n).a},183:function(t,e,o){(e=o(54)(!1)).push([t.i,".post{padding:10px}.post__header{display:-webkit-box;display:flex;flex-wrap:nowrap}.post__list{list-style-type:none;padding:0}.post__item{padding:1rem;margin-bottom:1rem;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;box-shadow:0 2px 5px 2px rgba(34,60,80,.1)}.post__title{overflow:hidden;text-transform:uppercase;white-space:nowrap;text-overflow:ellipsis}.alert{padding:1rem;background-color:#ff5722;color:#fff;border-radius:5px}.spacer{-webkit-box-flex:1;flex:1;min-width:50px}.btn{border:none;background:transparent;color:#000;cursor:pointer}.btn:focus{outline:none;background-color:silver}.btn_close{line-height:1;font-size:1.2em;font-weight:700}.fade-enter,.fade-leave-to{opacity:0!important;-webkit-transform:translateX(-15px)!important;transform:translateX(-15px)!important}@media (min-width:1024px){.btn_close{-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;opacity:0}.btn:hover{background-color:#e0e0e0}.post__item:hover{box-shadow:0 5px 10px 2px rgba(34,60,80,.2);-webkit-transform:translateY(-1px);transform:translateY(-1px)}.post__item:hover .btn_close{opacity:1}}",""]),t.exports=e},184:function(t,e,o){"use strict";var n=o(181);o.n(n).a},185:function(t,e,o){(e=o(54)(!1)).push([t.i,".container{margin:0 auto;max-width:1160px}.title{font-size:1.9rem;text-transform:uppercase;margin-top:.5rem;margin-bottom:.5rem}.subtitle,.title{text-align:center}.subtitle{margin-bottom:.3rem}",""]),t.exports=e},186:function(t,e,o){"use strict";o.r(e);var n={props:{posts:{type:Array,required:!0}},methods:{delPost:function(t){this.$store.commit("delPost",t)}}},r=(o(182),o(26)),l={components:{PostsList:Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post"},[t.posts.length?o("transition-group",{staticClass:"post__list",attrs:{tag:"ul",name:"fade",appear:""}},t._l(t.posts,(function(e){return o("li",{key:e.id,staticClass:"post__item"},[o("div",{staticClass:"post__header"},[o("h3",{staticClass:"post__title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"spacer"}),t._v(" "),o("button",{staticClass:"btn btn_close",attrs:{type:"button"},on:{click:function(o){return o.stopPropagation(),t.delPost(e.id)}}},[t._v("×")])]),t._v(" "),o("div",{staticClass:"post__body"},[o("div",{staticClass:"post__descr"},[t._v(t._s(e.body))])])])})),0):o("div",{staticClass:"alert"},[t._v("Ошибка: Посты не найдены.")])],1)}),[],!1,null,null,null).exports},computed:{posts:function(){return this.$store.getters.getPosts}}},c=(o(184),Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"page-wrapper"},[e("h1",{staticClass:"title"},[this._v("simple-list-posts")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("Nuxt.js project")]),this._v(" "),e("posts-list",{attrs:{posts:this.posts}})],1)])}),[],!1,null,null,null));e.default=c.exports}}]);