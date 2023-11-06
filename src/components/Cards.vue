<script>
export default {
  data() {
    return {
      products: [
        {
          name: "RELAXED FIT TEE UNISEX",
          brand: "Levi's",
          price: "14,99",
          fullPrice: "29,99",
          eco: true,
          discount: "50%",
          img: "../assets/1.webp",
          hoverImg: "/assets/1b.webp",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div v-for="(product, index) in products" class="col-4 padding-10 pointer">
          <figure class="relative">
            <img class="primary-img" :src="product.img" :alt="product.name" />
            <img class="hover-img" :src="product.hoverImg" :alt="product.name" />
            <span class="discont-amount">{{ product.discount }}</span>
            <span class="eco-friendly" v-if="product.eco">Sostenibilità</span>
            <span class="add-favorite">&hearts;</span>
          </figure>
          <div class="flex-column">
            <span class="product-brand-name">{{ product.brand }}</span>
            <strong class="product-name">{{ product.name }}</strong>
            <div class="prices">
              <span class="disconted-price">{{ product.price }}&euro;</span>
              <span class="original-price">{{ product.fullPrice }} &euro;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../partials/_varibles.scss";

.product-brand-name {
  font-size: 14px;
  color: $product-brand-name-color;
}

.product-name {
  font-weight: bold;
  font-size: 18px;
}

.original-price {
  text-decoration: line-through rgb(94, 94, 94) 2px;
  font-size: 16px;
}

.disconted-price {
  color: $price-color;
  font-size: 15px;
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

.primary-img {
  z-index: 1;
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
  left: 55px;
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
}

.add-favorite:hover {
  color: red;
}
</style>
