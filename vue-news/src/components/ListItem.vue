<template>
    <div>
    <ul class="news-list">
      <li v-for="item in listItems " v-bind:key="item" class="post">
        <!-- 포인트 영억 -->
        <div class="points">
          {{item.points === null ? 0 : item.points}}
        </div>
        <!-- 기타정보 영억 -->
        <div>
          <p class='news-title'>
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{item.title}}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small class="link-text">
              {{item.time_ago}}
            by 
            <router-link 
              v-if="item.user"
              :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
created() {
    const actionName = setCurrActionNameByRouteName(this);
    this.$store.dispatch(actionName);
  },
  computed:{
    listItems() {
      const name = this.$route.name;
      if(name ==='news'){
        return this.$store.state.news;
      }else if (name ==='ask'){
        return this.$store.state.asks;
      } else if (name ==='jobs'){
        return this.$store.state.jobs;
      }
      return '';

    }
  }
}

function setCurrActionNameByRouteName(vm){
    const name = vm.$route.name;
    let actionName = 'FETCH_NEWS';
    if (name==='ask'){
        actionName = 'FETCH_ASKS';
    } else if (name=== 'jobs'){
        actionName = 'FETCH_JOBS';
    }
    return actionName;
}
</script>

<style>
.news-list{
  margin:0;
  padding: 0;
}
.post{
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#42b883;
}
.news-title{
  margin:0;
}
.link-text{
  color:#b2b2b2;
}
</style>