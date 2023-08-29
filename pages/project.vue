<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: "project",
  // falseを返すページのアクセスを制限する
  validate({ route }) {
    return route.name !== "project";
  },
};
</script>
