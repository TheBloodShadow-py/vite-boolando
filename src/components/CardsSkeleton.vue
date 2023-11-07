<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4 padding-10 pointer" v-for="x in 6">
        <div class="relative box"></div>
        <div class="flex-column">
          <span class="product-brand-name"></span>
          <strong class="product-name"></strong>
          <div class="prices">
            <span class="disconted-price"></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../partials/_varibles.scss";

.box {
  background-color: $skeleton-color;
  height: 400px;
  border-radius: 15px;
  animation: pulse linear alternate-reverse infinite 1.4s;
}

.product-brand-name {
  background-color: $skeleton-color;
  width: 50px;
  height: 20px;
  border-radius: 8px;
  animation: pulse linear alternate-reverse infinite 1.4s;
}

.product-name {
  background-color: $skeleton-color;
  width: 100px;
  height: 20px;
  border-radius: 8px;
  margin-top: 5px;
  animation: pulse linear alternate-reverse infinite 1.4s;
}

.prices {
  background-color: $skeleton-color;
  width: 60px;
  height: 20px;
  border-radius: 8px;
  margin-top: 5px;
  animation: pulse linear alternate-reverse infinite 1.4s;
}

.disconted-price {
  background-color: $skeleton-color;
  width: 50px;
  height: 20px;
  border-radius: 8px;
  animation: pulse linear alternate-reverse infinite 1.4s;
}

main img {
  border-radius: 15px;
}

.hover-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}

.col-4:hover .hover-img {
  z-index: 2;
  opacity: 1;
  transition: 500ms all;
}

.discont-amount {
  background-color: red;
  color: white;
  padding: 4px 10px;
  position: absolute;
  left: 0;
  bottom: 40px;
  font-weight: bold;
  font-size: 13px;
  z-index: 3;
  line-height: 1;
}

.eco-friendly {
  background-color: green;
  color: white;
  padding: 4px 10px;
  position: absolute;
  bottom: 40px;
  font-weight: bold;
  font-size: 13px;
  z-index: 3;
  line-height: 1;
}

.add-favorite {
  background-color: white;
  padding: 4px 5px;
  border-radius: 3-px;
  position: absolute;
  right: 0px;
  top: 15px;
  font-size: 25px;
  z-index: 3;
  line-height: 1;
  transition: 0.15s linear all;
  &:hover {
    transform: scale(1.05);
  }
}

.left-55 {
  left: 55px;
}

.left-0 {
  left: 0;
}

.red {
  color: red;
}

@keyframes pulse {
  from {
    background-color: $product-brand-name-color;
  }
  to {
    background-color: rgba(122, 122, 122, 0.973);
  }
}
</style>
