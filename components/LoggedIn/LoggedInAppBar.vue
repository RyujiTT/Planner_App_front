<template>
  <v-app-bar app dense elevation="1" clipped-left color="white">
    <nuxt-link to="homePath" class="text-decoration-none">
      <app-logo />
    </nuxt-link>

    <app-title />

    <v-spacer />

    <logged-in-app-account-menu />
  </v-app-bar>
</template>

<script>
export default {
  data({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath,
    };
  },
};
</script>
