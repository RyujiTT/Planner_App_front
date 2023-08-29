<template>
  <v-app>
    <!-- tool bar -->
    <logged-in-app-bar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-app-bar>

    <!-- navigation drawer -->
    <project-navigation-drawer :drawer.sync="drawer" />

    <!-- main content -->
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
