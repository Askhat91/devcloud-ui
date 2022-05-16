<template>
  <v-app>
    <template v-if="!$route.meta.allowAnonymous">
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
        <v-fab-transition>
          <v-btn
            v-scroll="onScroll"
            v-show="fab"
            @click="toTop"
            absolute
            fab
            fixed
            right
            bottom
            class="mb-10"
            color="success"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-main>
    </template>
    <template v-if="$route.meta.allowAnonymous">
      
      <Login />
    </template>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
<style scoped></style>
