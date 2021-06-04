<!--template vue-->
<template>
  <div class="hello">
    <!--memanggil variable msg-->
    <h1>{{ msg }}</h1>
    <!--membuat input text dengan nama username dan v-model username yang digunakan untuk memanggil API-->
    <input type="text" name="username" v-model="username"/> <br>
    <!--membuat tombol dengan action click yang menuju method getUserData-->
    <button @click="getUserData"> Search </button>
  </div>
</template>

<script>
// memanggil modul GithubService
import GithubService from '@/services/GithubService'

export default {
  name: 'Hello',
  // menambahkan variable data
  data () {
    return {
      msg: 'VueJs Consume Github API',
      username: '',
      user: null
    }
  },
  // membuat method
  methods: {
    // menggunakan async untuk method getUserData
    async getUserData () {
      this.user = null
      // memanggil API dengan menggunakan GithubService.searchUser dengan param username
      await GithubService.searchUser({
        username: this.username
      }).then(response => {
        // menuliskan response lalu mengarahkan ke enpoint dengan nama Hasil dan mengirimkan data sebagai params.user
        this.$router.push({name: 'Hasil', params: { user: response.data }})
      }).catch(error => {
        // menuliskan error
        console.log(console.log(error))
      })
      // mengecek jika user tersedia
      if (this.user !== null) {
        console.log(this.user)
      }
    }
  }
}
</script>

<!--menambahkan style-->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  /*syle pada input*/
  input {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  /* syle pada button */
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }  
</style>