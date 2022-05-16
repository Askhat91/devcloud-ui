<template>
  <v-snackbar
    v-model="show"
    :timeout="snackbar.timeout"
    right
    top
    :color="snackbar.color"
    transition="slide-y-transition"
    shaped
    multi-line
    min-width="70"
  >
    <div v-html="snackbar.text"></div>
    <!-- {{ snackbar.text }} -->
    <template v-slot:action="{ attrs }">
      <v-btn
        v-if="snackbar.link"
        :href="snackbar.link"
        :color="snackbar.color"
        v-bind="attrs"
        small
        >{{ snackbar.linkText }}</v-btn
      >
      <v-btn v-else @click="Close" small v-bind="attrs" :color="snackbar.color"
        >Закрыть</v-btn
      >
    </template>
  </v-snackbar>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    Close() {
      this.$store.commit("CLOSE_SNACKBAR");
    },
  },
  computed: {
    show: {
      get() {
        return this.$store.getters.SNACKBAR.show;
        // return true;
      },
      set() {
        this.Close();
      },
    },
    snackbar: {
      get() {
        return this.$store.getters.SNACKBAR;
      },
    },
  },
};
</script>
