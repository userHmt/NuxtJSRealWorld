import Vue from 'vue'
import dayjs from 'dayjs'


Vue.filter('fdate',(value,fmat='YYYY-MM-DD HH:mm:ss') =>{
    return dayjs(value).format(fmat) 
})