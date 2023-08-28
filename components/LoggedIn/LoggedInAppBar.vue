<template>
  <v-app-bar app dense elevation="1" clipped-left color="white">
    <nuxt-link to="redirectPath" class="text-decoration-none">
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
      redirectPath: $store.state.loggedIn.redirectPath,
    };
  },
};
</script>
