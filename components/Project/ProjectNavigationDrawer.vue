<template>
  <v-navigation-drawer
    v-model="setDrawer"
    app
    clipped
    mobile-breakpoint="mobileBreakpoint"
  >
    <v-list>
      <v-list-item
        v-for="(nav, i) in navMenus"
        :key="`nav-${i}`"
        :to="$my.projectLinkTo($route.params.id, nav.name)"
      >
        <v-list-item-icon>
          <v-icon />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $my.pageTitle(nav.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      mobileBreakpoint: 960,
      navMenus: [
        { name: "project-id-dashboard", icon: "mdi-view-dashboard" },
        { name: "project-id-layouts", icon: "mdi-view-compact" },
        { name: "project-id-pages", icon: "mdi-image" },
        { name: "project-id-components", icon: "mdi-view-comfy" },
        { name: "project-id-settings", icon: "mdi-cog" },
        { name: "project-id-help", icon: "mdi-help-circle" },
      ],
    };
  },
  computed: {
    setDrawer: {
      get() {
        return this.drawer;
      },
      set(newVal) {
        return this.$emit("update:drawer", newVal);
      },
    },
  },
};
</script>
