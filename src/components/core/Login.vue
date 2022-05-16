<template>
  <div
    data-app="true"
    class="v-application v-application--is-ltr theme--light full-sidebar"
    id="materialpro"
  >
    <div class="v-application--wrap">
      <div
        data-app="true"
        class="v-application v-application--is-ltr theme--light"
        id="app"
      >
        <div class="v-application--wrap">
          <section class="container fill-height justify-center" id="login">
            <div class="row justify-center">
              <div class="col-sm-8 col-lg-11 col-xl-7 col">
                <div class="elevation-4 v-card v-sheet theme--light">
                  <v-row>
                    <div
                      class="
                        teal
                        lighten-1
                        d-none d-md-flex
                        align-center
                        justify-center
                        col-lg-7 col
                      "
                    >
                      <div class="d-none d-sm-block">
                        <div class="d-flex align-center pa-10">
                          <div>
                            <h2
                              class="display-1 white--text font-weight-medium"
                            >
                              DevCloud.kz
                            </h2>
                            <h6 class="subtitle-1 mt-4 white--text">
                              КОМПАНИЯ ПО РАЗРАБОТКЕ ПРОГРАМНОГО ОБЕСПЕЧЕНИЯ.
                            </h6>
                            <!-- <button
                              type="button"
                              class="mt-4 text-capitalize v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--x-large white--text"
                            >
                              <span class="v-btn__content">Узнать больше</span>
                            </button> -->
                            <v-btn
                              class="ma-2"
                              outlined
                              dark
                              large
                              @click="OpenSite()"
                            >
                              Узнать больше
                            </v-btn>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Вход в систему -->

                    <div class="col-lg-5 col" v-if="show">
                      <div class="pa-7 pa-sm-12">
                        <v-img
                          max-height="100"
                          contain
                          src="https://devcloud.kz/wp-content/uploads/2021/07/Component-2.svg"
                        ></v-img>
                        <!-- <h2
                          class="font-weight-bold mt-4 blue-grey--text text--darken-2"
                        >
                          Вход в систему
                        </h2> -->

                        <br />
                        <br />
                        <form class="v-form">
                          <v-text-field
                            label="Логин"
                            name="login"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="account.login"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['Login']"
                            @keyup.enter="Authenticate"
                          />
                          <v-text-field
                            id="password"
                            label="Пароль"
                            name="password"
                            prepend-icon="mdi-lock"
                            v-model="account.password"
                            :rules="[rules.required]"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            :type="showPassword ? 'text' : 'password'"
                            :error-messages="modelState['Password']"
                            @keyup.enter="Authenticate"
                          />

                          <v-btn
                            x-small
                            text
                            color="primary"
                            style="float: right"
                            @click="show = false"
                            >Регистрация</v-btn
                          >
                          <br />
                          <br />
                          <v-btn
                            outlined
                            dark
                            block
                            color="primary"
                            @click="Authenticate"
                            :loading="loading"
                            depressed
                            large
                            >Вход в систему</v-btn
                          >
                        </form>
                      </div>
                    </div>

                    <!-- Регистрация -->
                    <div class="col-lg-5 col" v-else>
                      <div class="pa-7 pa-sm-12">
                        <v-img
                          max-height="100"
                          contain
                          src="https://devcloud.kz/wp-content/uploads/2021/07/Component-2.svg"
                        ></v-img>

                        <br />
                        <br />
                        <form class="v-form">
                          <v-text-field
                            label="Логин"
                            name="login"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="newUser.login"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['Login']"
                            @keyup.enter="Registration"
                          />
                          <v-text-field
                            label="Имя"
                            name="firstName"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="newUser.firstName"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['FirstName']"
                            @keyup.enter="Registration"
                          />
                          <v-text-field
                            label="Фамилия"
                            name="lastName"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="newUser.lastName"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['LastName']"
                            @keyup.enter="Registration"
                          />

                          <v-text-field
                            label="Пароль"
                            name="password"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="newUser.password"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['Password']"
                            @keyup.enter="Registration"
                          />

                          <v-text-field
                            label="Повторите пароль"
                            name="confirmPassword"
                            prepend-icon="mdi-account"
                            type="text"
                            v-model="newUser.confirmPassword"
                            :rules="[rules.required]"
                            :autofocus="true"
                            :error-messages="modelState['ConfirmPassword']"
                            @keyup.enter="Registration"
                          />

                          <v-btn
                            x-small
                            text
                            color="primary"
                            style="float: right"
                            @click="show = true"
                            :disabled="loading"
                            >Вход в систему</v-btn
                          >
                          <br />
                          <br />
                          <v-btn
                            outlined
                            dark
                            block
                            color="primary"
                            @click="Registration"
                            :loading="loading"
                            depressed
                            large
                            >Зарегистрироваться</v-btn
                          >
                        </form>
                      </div>
                    </div>
                  </v-row>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    account: {
      login: "",
      password: "",
    },
    newUser: {
      login: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },

    showPassword: false,
    rules: {
      required: (value) => !!value || "Поле обязательно для заполнения.",
    },
    modelState: {},
    loading: false,
    show: true,
  }),
  methods: {
    Authenticate() {
      this.loading = true;
      this.modelState = {};

      this.$store
        .dispatch("CREATE_TOKEN", this.account)
        .then(() => {
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.errors) {
            this.modelState = error.response.data.errors;
          }
          this.error = true;
        });
    },
    OpenSite() {
      window.open("https://devcloud.kz/");
    },
    Registration() {
      this.loading = true;
      this.modelState = {};

      this.$store
        .dispatch("CREATE_USER", this.newUser)
        .then(() => {
          this.loading = false;
          let Success = {
            text: "Пользователь успешно создан",
            timeout: 5000,
            color: "success",
            show: true
          };
          this.$store.commit("SET_SNACKBAR", Success);
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.errors) {
            this.modelState = error.response.data.errors;
          }
          this.error = true;
        });
    },
  },
  computed: {},
};
</script>

<style>
</style>