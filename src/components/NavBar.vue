<script>
export default {
  data() {
    return {};
  },
  methods: {
    // getImgUrl: function (url) {
    //   return new URL(url, import.meta.url).href;
    // },
  },
};
</script>

<template>
  <header>
    <ul class="types">
      <li>Donna</li>
      <li>Uomo</li>
      <li>Bambini</li>
    </ul>
    <!-- <img class="logo" alt="logo" :src="getImgUrl('../assets/boolean-logo.png')" /> -->
    <img class="logo" alt="logo" src="/boolean-logo.png" />
    <ul>
      <li><font-awesome-icon :icon="['far', 'user']" /></li>
      <li><font-awesome-icon :icon="['far', 'heart']" /></li>
      <li><font-awesome-icon :icon="['fas', 'cart-arrow-down']" /></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import "../partials/_varibles.scss";

header {
  background-color: $header-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 18px;
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  color: $header-text-color;
  box-shadow: 0px 5px 5px rgba(17, 17, 17, 0.315);
  font-family: "Dhurjati", sans-serif;
  line-height: 1;
  font-size: 22px;
  z-index: 5;
  .logo {
    width: 120px;
  }
  ul {
    display: flex;
    gap: 15px;
    li:hover {
      cursor: pointer;
    }
  }
}
</style>
