import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Firebase from 'firebase'
import { firebaseConfig } from 'config/firebaseConfig.js'
// Inicializador de Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();
// esto me permite exportar la base de datos y jugar con ella en otros archivos
export const db = Firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
