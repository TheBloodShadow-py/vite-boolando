<script>
export default {
  props: {
    product: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data() {
    return {
      discount: 0,
      fullPrice: 0,
    };
  },
  mounted() {
    const discounts = this.product.badges.filter((badge) => badge.type === "discount");
    if (discounts.length) {
      this.discount = parseInt(discounts[0].value);
    }

    this.fullPrice = Math.round(
      (this.product.price * 100) /
        (100 - parseInt(this.product.badges.filter((elem) => elem.type === "discount").map((elem) => elem.value.replace(/[^0-9%]/g, ""))))
    );
  },
  methods: {
    changeFavorite: function () {
      if (this.product.isInFavorites) {
        this.product.isInFavorites = false;
      } else {
        this.product.isInFavorites = true;
      }
    },
    haveBadge: function (currentType) {
      if (this.product.badges.filter((elem) => elem.type === currentType).length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <div class="col-4 padding-10 pointer">
    <figure class="relative">
      <img draggable="false" class="primary-img" :src="'products/' + product.frontImage" :alt="product.name" />
      <img draggable="false" class="hover-img" :src="'products/' + product.backImage" :alt="product.name" />
      <span v-if="haveBadge('discount')" class="discont-amount">{{ discount + "%" }}</span>
      <span class="eco-friendly" :class="haveBadge('discount') ? 'left-55' : 'left-0'" v-if="haveBadge('tag')">Sostenibilità</span>
      <span @click="changeFavorite(index)" class="add-favorite" :class="product.isInFavorites ? 'red' : ''"
        ><font-awesome-icon class="icon" :icon="['fas', 'heart']"
      /></span>
    </figure>
    <div class="flex-column">
      <span class="product-brand-name">{{ product.brand }}</span>
      <strong class="product-name" @click="$emit('modalShow', product)">{{ product.name }}</strong>
      <div class="prices">
        <span class="disconted-price">{{ product.price }}&euro;</span>
        <span v-if="haveBadge('discount')" class="original-price">{{ fullPrice }} &euro;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../partials/_varibles.scss";

.product-brand-name {
  font-size: 14px;
  color: $product-brand-name-color;
}

.icon {
  font-size: 16px;
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
  padding: 8px 8px;
  border-radius: 3px;
  position: absolute;
  right: -1px;
  top: 15px;
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
