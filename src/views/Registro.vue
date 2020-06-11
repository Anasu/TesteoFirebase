<template>
    <div class="singin">
    <h1>Aquí testearé el registro</h1>
    <div class="formulario">
      <input 
        type="email" 
        placeholder="Ingrese el correo electrónico"
        v-model="mail">
      <input 
        type="password" 
        placeholder="Ingrese la contraseña"
        v-model="pass">
      <button @click="singIn">Entrar</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SingIn',
    data() {
        return {
            mail: '',
            pass: ''
        }
    },
    methods: {
        singIn() {
            if (this.mail && this.pass) {
                firebase.auth().createUserWithEmailAndPassword(
                    this.mail, this.pass
                ).then(
                    res => {
                        console.log(res);
                        this.$router.push('/');
                    }
                ).catch(
                    err => {
                        console.log(err);
                    }
                )
            } else {
                console.log('Faltan user y pass')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.singin {
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