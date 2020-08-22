<template>
  <div class="article-meta">
      <nuxt-link :to="{
            name:'profile',
            params:{
                username:article.author.username
            }
        }">
        <img :src="article.author.image">
      </nuxt-link>
       
        <div class="info">
            <nuxt-link :to="{
            name:'profile',
            params:{
                username:article.author.username
                    }
                }">
                {{article.author.username}}
            </nuxt-link>
          
          <span class="date">{{article.author.createdAt | fdate('MMM DD ,YYYY')}} </span>
        </div>
        <button 
        :class="{
            active:article.author.following
        }"
        class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button 
         :class="{
            active:article.author.following
        }"
        class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>
</template>

<script>
export default {
    name:'ArticleName',
    props:{
        article:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>