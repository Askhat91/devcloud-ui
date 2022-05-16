import Vue from 'vue'
import Vuex from 'vuex'

import Token from "./modules/token";
import Snackbar from "./modules/snackbar";
import User from "./modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navDrawer: true,
    },
    modules: {
        token: Token,
        snackbar: Snackbar,
        user: User
    }
})