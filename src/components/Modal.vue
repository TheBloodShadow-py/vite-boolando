<script>
export default {
  data() {
    return {};
  },
  props: {
    modalProduct: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>

<template>
  <div class="prevent">
    <div class="box">
      <div class="close" @click="$emit('closeModal')">X</div>
      <span>Brand: {{ modalProduct.brand }}</span>
      <span>Nome prdotto: {{ modalProduct.name }}</span>
      <span>Prezzo: {{ modalProduct.price }}</span>
      <span>è nei preferiti? {{ modalProduct.isInFavorites ? "Si" : "No" }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prevent {
  background-color: rgba(0, 0, 0, 0.486);
  z-index: 998;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}

.close {
  position: absolute;
  top: 15px;
  cursor: pointer;
  right: 15px;
  font-weight: bold;
}

.box {
  padding: 30px;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  gap: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 999;
}
</style>
