<template>
  <div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>{{ article.title }}</h1>

      <article-name :article="article"></article-name>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12" v-html="article.body "></div>
    </div>
    <hr/>

    <div class="article-actions">
       <article-name :article="article"></article-name>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">
        <article-compoents :article="article"></article-compoents>
        
        
      </div>

    </div>

  </div>

</div>
</template>

<script>
import ArticleName from "./compoents/article-name"
import ArticleCompoents from "./compoents/article-compoents"
import { getArticle } from '@/api/artce'
import MarkDownIt from 'markdown-it'
export default {
  name:'ArticleIndex',
  components:{
    ArticleName,
    ArticleCompoents
  },
  async asyncData({ params }){
    const { data } = await getArticle(params.slug)
    const {article} = data
    const md = new MarkDownIt()
    article.body = md.render(article.body)
    return{
     article
    }
  },
  head(){
     return{
       title:`${this.article.title} - HMT`,
       meta:[
         {hid:'descripition',name:'descripition',content:this.article.description}
       ]
     }   
  }
}
</script>

<style>

</style>