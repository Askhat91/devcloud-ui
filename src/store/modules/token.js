import axios from "axios";
import store from './../index'
import router from '../../config/router'

export default {
  state: {
    access: localStorage.getItem('DevCloud_accessToken'),
  },
  getters: {
    ACCESS_TOKEN: state => {
      return state.access;
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.access = payload.access
      localStorage.setItem('DevCloud_accessToken', state.access);
    },
    CLEAR_TOKEN: (state) => {
      state.access = ''
      localStorage.removeItem('DevCloud_accessToken');
    },
  },
  actions: {
    CREATE_TOKEN: (commit, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`/api/Auth`, payload)
          .then(({
            data,
            status
          }) => {
            if (status === 200 && data.accessToken ) {

              let Tokens = {
                access: data.accessToken,
              }
              store.commit('SET_TOKEN', Tokens);

              resolve(true);

            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    CLEAR_TOKEN: () => {
      return new Promise((resolve) => {
        store.commit('CLEAR_TOKEN');
        localStorage.clear();
        router.push({
          name: 'login'
        })
        resolve(true);
      });
    },
  }
};