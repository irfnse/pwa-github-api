<!--template vue-->
<template>
  <div class="hello">
    <!--memanggil variable msg-->
    <h1>{{ msg }}</h1>
    <div v-if="user !== null" class="profile">
      <!--memanggil user.avatar_url untuk image-->
      <img v-bind:src="user.avatar_url" width="200" height="200"> <br>
      <!--memanggil user.login untuk username-->
      <label>Username : {{ user.login }}</label> <br>
      <!--memanggil user.name untuk profile name-->
      <label>Profile name : {{ user.name }}</label> <br>
      <!--memanggil user.bio untuk profile bio-->
      <label>Profile bio : {{ user.bio }}</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'VueJs Consume Github API',
      id: '',
      user: null
    }
  },
  created () {
    // mengisi variable user dengan value param yang didapat dari Home
    this.user = this.$route.params.user
  }
}
</script>
<style scoped>
  /* style pada profile */
  .profile {
    padding: 16px;
  }
  label {
    font-size: 20px;
  }
</style>