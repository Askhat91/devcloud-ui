import axios from "axios";
import store from './../index'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        CREATE_USER: (commit, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/api/User`, payload)
                    .then(({
                        data,
                        status
                    }) => {
                        if (status === 200) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })

            });

        },
    },
};

