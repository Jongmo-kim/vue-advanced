<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>

        <div class="user-description">
          <router-link slot="username" :to="`/user/${fetchedAskItem.user}`">
            {{fetchedAskItem.user}}
          </router-link>
          <div class="time">
            {{ fetchedAskItem.time_ago}}
          </div>
        </div>
      </div>
      <h2> {{fetchedAskItem.title}}</h2>
    </section>
    <section>
      <div v-html="fetchedAskItem.content"></div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile';
export default {
  computed : {
    UserProfile,
    ...mapGetters(['fetchedAskItem']),
  },
  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKITEM',itemId);
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding:0.7rem;
}
.fa-user{
  font-size: 2.5rem;

}
.user-description{
  padding-left: 8px;
}
.time { 
  font-size : 0.7rem;
}
</style>