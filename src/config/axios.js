import axios from 'axios';
import store from '../store'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
  'https://localhost:44381' :
  'https://localhost:44381'

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${store.getters.ACCESS_TOKEN}`;
  return config;
});

let subscribers = []

function addSubscriber(callback) {
  subscribers.push(callback)
}

axios.interceptors.response.use(function (response) {
  return response
}, (error) => {
  window.console.log(error)

  let Snackbar = {
    text: 'Пожалуйста проверьте соединение с интернетом',
    timeout: 3000,
    color: "error",
    show: true
  }

  if (typeof error.response === 'undefined') {
    store.commit('SET_SNACKBAR', Snackbar);
    return Promise.reject(error);
  }

  switch (error.response.status) {

    case 401: {
      Snackbar.text = 'Истёк срок действия токена. <br> Выполните вход еще раз.';
      store.commit('SET_SNACKBAR', Snackbar);

      store.dispatch('CLEAR_TOKEN');

      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber(() => {
          resolve(axios(error.response.config));
        });
      });
      return retryOriginalRequest;
    }

    case 400: {
 
      if (error.response.data.errors)
        return Promise.reject(error);
      Snackbar.text = error.response.data.error;
      store.commit('SET_SNACKBAR', Snackbar);
      return Promise.reject(error);
    }

    case 403: {
      Snackbar.text = 'У вас нет доступа к этому ресурсу.';
      store.commit('SET_SNACKBAR', Snackbar);
      return Promise.reject(error);
    }

    default: {
      Snackbar.text = error.response.status;
      store.commit('SET_SNACKBAR', Snackbar);
      return Promise.reject(error);
    }
  }
})

export default 'axios';