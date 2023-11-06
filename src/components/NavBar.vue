<script>
import logo from "/boolean-logo.png";
export default {
  data() {
    return {
      logo,
    };
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
    <img class="logo" alt="logo" :src="logo" />
    <ul>
      <li><img src="../assets/profile.svg" alt="profile icon" /></li>
      <li><img src="../assets/heart.svg" alt="heart icon" /></li>
      <li><img src="../assets/shopping-cart.svg" alt="shopping cart icon" /></li>
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
