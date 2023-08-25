<template>
  <v-text-field
    v-model="setPassword"
    label="パスワードを入力"
    :rules="form.rules"
    :counter="!setValidation"
    :hint="form.hint"
    placeholder="8文字以上"
    :hide-details="setValidation"
    outlined
    :append-icon="toggle.icon"
    :type="toggle.type"
    autocomplete="on"
    @click:append="show = !show"
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: "",
    },
    setValidation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    setPassword: {
      get() {
        return this.password;
      },
      set(newVal) {
        return this.$emit("update:password", newVal);
      },
    },
    form() {
      // ログインページ=入力必須
      // 会員登録ページ=入力必須、八文字以上七十二文字以内、書式チェック
      const min = "8文字以上";
      const msg = `${min}。半角英数字・ハイフン・アンダーバーが使えます`;
      const required = (v) => !!v || "";
      const format = (v) => /^[\w-]{8,72}$/.test(v) || msg;

      const rules = this.setValidation ? [required] : [format];
      const hint = this.setValidation ? undefined : msg;
      const placeholder = this.setValidation ? undefined : min;
      return { rules, hint, placeholder };
    },
    toggle() {
      const icon = this.show ? "mdi-eye" : "mdi-eye-off";
      const type = this.show ? "text" : "password";
      return { icon, type };
    },
  },
};
</script>
