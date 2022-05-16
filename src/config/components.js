import Login from '../components/core/Login.vue';
import Snackbar from '../components/Snackbar.vue';

function setupComponents(Vue) {
    Vue.component('Snackbar', Snackbar);
    Vue.component('Login', Login);
  }
  
  export {
    setupComponents
  }