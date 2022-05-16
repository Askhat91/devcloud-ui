export default {
  state: {
    snackbar: {
      text: 'Undefined',
      timeout: 3000,
      color: "warning",
      link: "",
      linkText: "",
      show: false
    }
  },
  getters: {
    SNACKBAR: state => {
      return state.snackbar;
    },
  },
  mutations: {
    SET_SNACKBAR: (state, payload) => {
      state.snackbar.show = false;
      setTimeout((
      ) => {
        state.snackbar.show = payload.show;
        state.snackbar.text = payload.text;
        state.snackbar.timeout = payload.timeout;
        state.snackbar.color = payload.color;
        state.snackbar.link = payload.link;
        state.snackbar.linkText = payload.linkText
      }, 250)
    },
    CLOSE_SNACKBAR: (state) => {
      state.snackbar.show = false
    }
  },
  actions: {

  }
};