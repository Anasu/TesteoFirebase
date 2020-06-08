<template>
  <div class="login">
    <h1>Aquí testearé el login</h1>
    <div class="formulario">
      <input 
        type="email" 
        placeholder="Ingrese el correo electrónico"
        v-model="mail">
      <input 
        type="password" 
        placeholder="Ingrese la contraseña"
        v-model="pass">
      <button @click="loginUser">Entrar</button>
      <button @click="resetPass">Recuperar Contraseña</button>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      mail: null,
      pass: null,
    }
  },
  methods: {
    loginUser() {
      Firebase.auth().signInWithEmailAndPassword(
        this.mail, this.pass
        ).then(
          (datos) => {
            console.log(datos);
            console.log(datos.user);
            this.$router.push('./')
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
    },
    resetPass() {
      Firebase.auth().sendPasswordResetEmail(
        this.mail
        ).then(
          function() {
            console.log("enviado")
          }
        ).catch(
          function(error) {
            console.error(error);
          }
        );
    } 
  }

}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .formulario {
    display: flex;
    align-items: space-around;
    flex-direction: column;
    max-width: 800px;
  }

}
</style>