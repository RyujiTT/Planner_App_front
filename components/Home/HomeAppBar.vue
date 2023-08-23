<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo @click.native="goTo('scroll-top')" />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
  },
  data({ $config: { appName }, $store }) {
    return {
      appName,
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight,
    };
  },

  computed: {
    // 500 - 56 = 444px超の場合trueを返す
    isScrollPoint() {
      return this.scrollY > this.imgHeight - this.homeAppBarHeight;
    },
    toolbarStyle() {
      const color = this.isScrollPoint ? "white" : "transparent";
      const elevation = this.isScrollPoint ? 4 : 0;
      return { color, elevation };
    },
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY;
    },
    goTo(id) {
      this.$vuetify.goTo(`#${id}`);
    },
  },
};
</script>
