<template>
  <div class="home-page">
  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li 
            v-if="user"
            class="nav-item"
            :class="{
              active:tab === 'your_feed'
            }"
            >
              <nuxt-link 
              class="nav-link " 
              exact
              :to="{
                name:'home',
                query:{
                  tab:'your_feed'
                }
              }"
              >
              Your Feed
              </nuxt-link>
            </li>
            <li 
            class="nav-item"
            :class="{
              active:tab === 'global_feed'
            }"
            >
              <nuxt-link 
              class="nav-link "
              exact 
              :to="{
                name:'home'
              }"
              >
              Global Feed
              </nuxt-link>
            </li>
            <li 
            v-if="tag"
            class="nav-item"
            
            >
              <nuxt-link 
              class="nav-link "
              :class="{
                active:tab === 'global_feed'
              }" 
              exact
              :to="{
                name:'home',
                query:{
                  tab:'tag',
                  tag:tag
                }
              }"
              >
              #{{ tag }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview"
          v-for="article in articles"
          :key="article.slug"
        >
      
          <div class="article-meta">
            <nuxt-link
              :to="{
                name:'profile',
                params:{
                  username:article.author.username
                }
              }"
            >
            <img :src=" article.author.image" />
            </nuxt-link>
            
            <div class="info">
              <nuxt-link
                class="auther"
                :to="{
                  name:'profile',
                  params:{
                    username:article.author.username
                  }
                }"
              >
              {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{ article.createdAt | fdate('MMM DD, YYYY')}}</span>
            </div>
            <button 
            @click="onFavorite(article)"
            :disabled="article.favoriteDisable"
            :class="{active:article.favorited}"
            class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{
            name:'article',
            params:{
              slug:article.slug
            }
          }" class="preview-link">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>
        <nav>
          <ul class="pagination">
            <li class="page-item" :class="{
                  active:item === page
                  }" v-for="item in totlalPage" :key="item">
              <nuxt-link 
                class="page-link" 
                :to="{
                  name:'home',
                  query:{
                    page:item,
                    tag:$route.query.tag,
                    tab:tab
                  }
                }"
                >
                {{ item }}
              </nuxt-link>
              
                
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link
            :to="{
              name:'home',
              query:{
             
                tag:item
              }
            }" 
            class="tag-pill tag-default"
            v-for=" item in tags"
            :key="item"
            >
            {{item}}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {getArticles,getYourFeedArticles,addFavorite,deleteFavorite} from '@/api/artce'
import { getTags } from '@/api/tag'
import {mapState} from 'vuex'
export default {
  name:'homeIndex',
  watchQuery:['page','tag','tab'],
  async asyncData({query}){
    const page=Number.parseInt(query.page||1)
    const limit = 20
    const tab = query.tab || 'global_feed'
    const tag = query.tag
    const loadArticles = tab === 'global_feed'
      ?getArticles
      :getYourFeedArticles
    const [articleRes,tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset:(page-1) * limit,
        tag
      }),
      getTags()
    ])
    const {articles,articlesCount} = articleRes.data
    const {tags} = tagRes.data
    articles.forEach(article => article.favoriteDisable = false)
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag
    }
  },
  computed:{
    ...mapState(['user']),
    totlalPage(){
      return Math.ceil(this.articlesCount/this.limit)
    }
  },
  methods:{
   async onFavorite(article){
     article.favoriteDisable = true
      if(article.favorited){
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      }else{
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisable = false
    }
  }
}
</script>

<style>

</style>