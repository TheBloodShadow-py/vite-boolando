<script>
export default {
  props: {
    products: {
      type: Object,
      default: {},
      required: true,
    },
  },
  methods: {
    changeFavorite: function (index) {
      if (this.products[index].isInFavorites) {
        this.products[index].isInFavorites = false;
      } else {
        this.products[index].isInFavorites = true;
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-4 padding-10 pointer" v-for="(product, index) in products">
          <figure class="relative">
            <img draggable="false" class="primary-img" :src="'products/' + product.frontImage" :alt="product.name" />
            <img draggable="false" class="hover-img" :src="'products/' + product.backImage" :alt="product.name" />
            <span v-if="product.badges.filter((elem) => elem.type === 'discount').length > 0" class="discont-amount">{{
              product.badges
                .filter((elem) => elem.type === "discount")
                .map((elem) => elem.value)
                .join("")
            }}</span>
            <span
              class="eco-friendly"
              :class="product.badges.filter((elem) => elem.type === 'discount').length > 0 ? 'left-55' : 'left-0'"
              v-if="product.badges.filter((elem) => elem.type === 'tag').length > 0"
              >Sostenibilità</span
            >
            <span @click="changeFavorite(index)" class="add-favorite" :class="product.isInFavorites ? 'red' : ''">&hearts;</span>
          </figure>
          <div class="flex-column">
            <span class="product-brand-name">{{ product.brand }}</span>
            <strong class="product-name">{{ product.name }}</strong>
            <div class="prices">
              <span class="disconted-price">{{ product.price }}&euro;</span>
              <span v-if="product.badges.filter((elem) => elem.type === 'discount').length > 0" class="original-price"
                >{{
                  Math.round(
                    (product.price * 100) /
                      (100 - parseInt(product.badges.filter((elem) => elem.type === "discount").map((elem) => elem.value.replace(/[^0-9%]/g, ""))))
                  )
                }}
                &euro;</span
              >
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
  margin-right: 10px;
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
</style>
