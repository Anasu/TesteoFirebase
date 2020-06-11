<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a @click="logout" href="#">Logout</a>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    logout() {
      Firebase.auth().signOut()
        .then(accept => {
          this.$router.push('login');
          console.log(accept) //pa que el linter no hinche
        });
    }
  }
}
</script>
