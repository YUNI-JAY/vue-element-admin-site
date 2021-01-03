(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{325:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("在样式开发过程中，有两个问题比较突出：")]),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("好在 vue 为我们提供了 "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[s._v("scoped"),e("OutboundLink")],1),s._v(" 可以很方便的解决上述问题。\n它顾名思义给 css 加了一个域的概念。")]),s._v(" "),s._m(3),e("p",[s._v("只要加上 "),e("code",[s._v("<style scoped>")]),s._v(" 这样 css 就只会作用在当前组件内了。详细文档见 "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-loader"),e("OutboundLink")],1)]),s._v(" "),s._m(4),s._v(" "),e("br"),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),e("br"),s._v(" "),s._m(10),s._v(" "),e("p",[s._v("现在我们来说说怎么覆盖 element-ui 样式。由于 element-ui 的样式我们是在全局引入的，所以你想在某个页面里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的 element 样式，你就可在它的父级加一个 class，用命名空间来解决问题。")]),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),e("p",[s._v("将会编译成")]),s._v(" "),s._m(16),s._m(17),s._v(" "),s._m(18),s._v(" "),s._m(19),e("p",[e("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1)]),s._v(" "),e("br"),s._v(" "),s._m(20),s._v(" "),e("p",[s._v("vue-cli 有一个小坑，它默认 autoprefixer 只会对通过 vue-loader 引入的样式才会有有作用，换而言之也就是 .vue 文件里面的 css autoprefixer 才会效果。相关问题 "),e("a",{attrs:{href:"https://github.com/vuejs-templates/webpack/issues/544",target:"_blank",rel:"noopener noreferrer"}},[s._v("issues/544"),e("OutboundLink")],1),s._v(" , "),e("a",{attrs:{href:"https://github.com/vuejs-templates/webpack/issues/600",target:"_blank",rel:"noopener noreferrer"}},[s._v("issues/600"),e("OutboundLink")],1),s._v(" 。解决方案也很简单粗暴")]),s._v(" "),s._m(21),e("p",[s._v("你在 .vue 文件中引入你要的样式就可以了，或者你可以改变 vue-cli 的文件在 css-loader 前面在加一个 postcss-loader，在前面的 issue 地址中已经给出了解决方案。不过新版本已经默认解决处理了这个问题。")]),s._v(" "),e("br"),s._v(" "),s._m(22),s._v(" "),e("p",[s._v("这里再来说一下 postcss 的配置问题，新版的 "),e("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli webpack 模板"),e("OutboundLink")],1),s._v(" init 之后根目录下默认有一个"),e("code",[s._v("postcss.config.js")]),s._v(" 。vue-loader 的 postcss 会默认读取这个文件的里的配置项，所以在这里直接改配置文件就可以了。配置和 "),e("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss"),e("OutboundLink")],1),s._v("是一样的。")]),s._v(" "),s._m(23),e("p",[s._v("如上面代码所述的，autoprefixer 会去读取 package.json 下 browserslist 的配置参数")]),s._v(" "),s._m(24),s._v(" "),e("p",[s._v("具体可见 "),e("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("code",[s._v("postcss")]),s._v("也还有很多很多其它的功能大家可以"),e("a",{attrs:{href:"https://www.postcss.parts/",target:"_blank",rel:"noopener noreferrer"}},[s._v("自行去探究"),e("OutboundLink")],1)]),s._v(" "),e("br"),s._v(" "),s._m(25),s._v(" "),e("p",[s._v("本项目没有设置自动注入 sass 的 mixin 到全局，所以需要在使用的地方手动引入 mixin")]),s._v(" "),s._m(26),e("p",[s._v("如需要自动将 mixin 注入到全局 ，可以使用"),e("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass-resources-loader"),e("OutboundLink")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[this._v("#")]),this._v(" 样式")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[this._v("#")]),this._v(" CSS Modules")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("p",[this._v("全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；")])]),this._v(" "),t("li",[t("p",[this._v("选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译前 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".example")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译后 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".example[_v-f3f3eg9]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[this._v("#")]),this._v(" 目录结构")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("vue-element-admin 所有全局样式都在 "),t("code",[this._v("@/styles")]),this._v(" 下设置")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("├── styles\n│   ├── btn.scss                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按钮样式")]),s._v("\n│   ├── element-ui.scss          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局自定义 element-ui 样式")]),s._v("\n│   ├── index.scss               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局通用样式")]),s._v("\n│   ├── mixin.scss               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局mixin")]),s._v("\n│   ├── sidebar.scss             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sidebar css")]),s._v("\n│   ├── transition.scss          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue transition 动画")]),s._v("\n│   └── variables.scss           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局变量")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("常见的工作流程是，全局样式都写在 "),t("code",[this._v("src/styles")]),this._v(" 目录下，每个页面自己对应的样式都写在自己的 "),t("code",[this._v(".vue")]),this._v(" 文件之中")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[this._v("<style>\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("/* global styles */")]),this._v("\n</style>\n\n<style scoped>\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("/* local styles */")]),this._v("\n</style>\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"自定义-element-ui-样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义-element-ui-样式"}},[this._v("#")]),this._v(" 自定义 element-ui 样式")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".article-page")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 你的命名空间 */")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".el-tag")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* element-ui 元素*/")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("当然也可以使用深度作用选择器 下文会介绍")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"父组件改变子组件样式-深度选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父组件改变子组件样式-深度选择器"}},[this._v("#")]),this._v(" 父组件改变子组件样式 深度选择器")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当你子组件使用了 "),t("code",[this._v("scoped")]),this._v(" 但在父组件又想修改子组件的样式可以 通过 "),t("code",[this._v(">>>")]),this._v(" 来实现：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<style scoped>\n.a >>> .b")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n</style>\n")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a[data-v-f3f3eg9] .b")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("如果你使用了一些预处理的东西，如 "),t("code",[this._v("sass")]),this._v(" 你可以通过 "),t("code",[this._v("/deep/")]),this._v(" 来代替 "),t("code",[this._v(">>>")]),this._v(" 实现想要的效果。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("所以你想覆盖某个特定页面 "),t("code",[this._v("element")]),this._v(" 的 button 的样式，你可以这样做：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[this._v(".xxx-container >>> .el-button")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n  xxxx\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"autoprefixer-新版本已无该问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoprefixer-新版本已无该问题"}},[this._v("#")]),this._v(" Autoprefixer [新版本已无该问题]")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[s._v("//app.vue\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("scss"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./styles/index.scss'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v(" // 全局自定义的css样式\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[this._v("#")]),this._v(" Postcss")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// postcss.config.js")]),s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    autoprefixer"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserslist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie <= 8"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",[s._v("> 1%")]),s._v(" 兼容全球使用率大于 1%的浏览器")]),s._v(" "),e("li",[e("code",[s._v("last 2 versions")]),s._v(" 兼容每个浏览器的最近两个版本")]),s._v(" "),e("li",[e("code",[s._v("not ie <= 8")]),s._v(" 不兼容 ie8 及以下")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"mixin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[this._v("#")]),this._v(" Mixin")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[s._v("<style rel="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet/scss"')]),s._v(" lang="),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(">\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/styles/mixin.scss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n</style>\n")])])])}],!1,null,null,null);t.default=n.exports}}]);