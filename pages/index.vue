<template>
  <v-app>
    <home-app-bar />
    <v-sheet>
      <v-container fluid :style="{ maxWidth: '1280px' }">
        <v-row v-for="(menu, i) in menus" :key="`menu-${i}`">
          <v-col cols="12">
            <div :is="`home-${menu.title}`" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <app-footer />
  </v-app>
</template>

<script>
import homeAbout from "~/components/Home/homeAbout";
import homeProducts from "~/components/Home/homeProducts";
import homePrice from "~/components/Home/homePrice";
import homeContact from "~/components/Home/homeContact";
import homeCompany from "~/components/Home/homeCompany";

export default {
  components: {
    homeAbout,
    homeProducts,
    homePrice,
    homeContact,
    homeCompany,
  },
  data() {
    return {
      menus: [
        {
          title: "about",
          subtitle:
            'このサイトはブログ"独学プログラマ"で公開されているチュートリアルのデモアプリケーションです',
        },
        { title: "products", subtitle: "他にはない優れた機能の数々" },
        { title: "price", subtitle: "会社の成長に合わせた3つのプラン" },
        { title: "contact", subtitle: "お気軽にご連絡を" },
        { title: "company", subtitle: "私たちの会社" },
      ],
    };
  },
};
</script>
