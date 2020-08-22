exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=24771444&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-name',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body ))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-name',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-compoents',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=24771444&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compoents/article-name.vue?vue&type=template&id=6e298e1e&
var article_namevue_type_template_id_6e298e1e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
          name:'profile',
          params:{
              username:_vm.article.author.username
          }
      }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
          name:'profile',
          params:{
              username:_vm.article.author.username
                  }
              }}},[_vm._v("\n              "+_vm._s(_vm.article.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("fdate")(_vm.article.author.createdAt,'MMM DD ,YYYY'))+" ")+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
          active:_vm.article.author.following
      }))+"><i class=\"ion-plus-round\"></i>\n         \n        Follow Eric Simons <span class=\"counter\">(10)</span></button>\n        \n      <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
          active:_vm.article.author.following
      }))+"><i class=\"ion-heart\"></i>\n         \n        Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var article_namevue_type_template_id_6e298e1e_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/compoents/article-name.vue?vue&type=template&id=6e298e1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compoents/article-name.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_namevue_type_script_lang_js_ = ({
  name: 'ArticleName',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./pages/article/compoents/article-name.vue?vue&type=script&lang=js&
 /* harmony default export */ var compoents_article_namevue_type_script_lang_js_ = (article_namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/compoents/article-name.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  compoents_article_namevue_type_script_lang_js_,
  article_namevue_type_template_id_6e298e1e_render,
  article_namevue_type_template_id_6e298e1e_staticRenderFns,
  false,
  injectStyles,
  null,
  "0157a714"
  
)

/* harmony default export */ var article_name = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compoents/article-compoents.vue?vue&type=template&id=5dbab16c&
var article_compoentsvue_type_template_id_5dbab16c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n           Post Comment\n          </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(comment.body)+"\n          ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                  name:'profile',
                  params:{
                      username:comment.author.username
                  }
              }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n           \n          "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                  name:'profile',
                  params:{
                      username:comment.author.username
                  }
              }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("fdate")(comment.createdAt,'MMM DD , YYYY')))+"</span>")],2)],2)})],2)}
var article_compoentsvue_type_template_id_5dbab16c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/compoents/article-compoents.vue?vue&type=template&id=5dbab16c&

// EXTERNAL MODULE: ./api/artce.js
var artce = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/compoents/article-compoents.vue?vue&type=script&lang=js&
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

/* harmony default export */ var article_compoentsvue_type_script_lang_js_ = ({
  name: 'articleComoents',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: []
    };
  },

  async mounted() {
    const {
      data
    } = await Object(artce["e" /* getComments */])(this.article.slug);
  }

});
// CONCATENATED MODULE: ./pages/article/compoents/article-compoents.vue?vue&type=script&lang=js&
 /* harmony default export */ var compoents_article_compoentsvue_type_script_lang_js_ = (article_compoentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/compoents/article-compoents.vue



function article_compoents_injectStyles (context) {
  
  
}

/* normalize component */

var article_compoents_component = Object(componentNormalizer["a" /* default */])(
  compoents_article_compoentsvue_type_script_lang_js_,
  article_compoentsvue_type_template_id_5dbab16c_render,
  article_compoentsvue_type_template_id_5dbab16c_staticRenderFns,
  false,
  article_compoents_injectStyles,
  null,
  "6c2555cd"
  
)

/* harmony default export */ var article_compoents = (article_compoents_component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',
  components: {
    ArticleName: article_name,
    ArticleCompoents: article_compoents
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(artce["c" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - HMT`,
      meta: [{
        hid: 'descripition',
        name: 'descripition',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "3fca40c2"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map