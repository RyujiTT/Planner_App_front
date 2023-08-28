class MyInject {
  constructor(ctx) {
    this.app = ctx.app;
  }
  // i18nページタイトル変換
  pageTitle(routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, ".")}`;
    const title = this.app.i18n.t(jsonPath);
    return title;
  }
}

// inject => オリジナルクラスを追加できる
// export default (context, inject)
export default ({ app }, inject) => {
  inject("my", new MyInject({ app }));
};
