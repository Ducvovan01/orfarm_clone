<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { computed, ref } from 'vue'
import store from '../stores/global.js';
import { mapState } from 'vuex';
import apiURL  from "../connect.js";
const API_BACK_END = apiURL.URL;
const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Giỏ Hàng' }]

const globalStore = ref(store.state);
const total = computed(() => {
  let totalValue = 0;
  globalStore.value.cart.forEach(item => {
    totalValue += item.product.price * item.amount;
  });
  return totalValue;
});
console.log(total);

const minusQuantity = (item) => {
  const foundItem = store.state.cart.find(p => p.id === item.id);
  if (foundItem && foundItem.amount > 1) {
    foundItem.amount--;
   
  }
};

// Function to increase quantity
const plusQuantity = (item) => {
  const foundItem = store.state.cart.find(p => p.id === item.id);
  if (foundItem) {
    foundItem.amount++;
  
  }
};
const getImageUrl = (imagePath) => {
      return `${API_BACK_END}/${imagePath}`;
    };

const formatCurrency = (value) => {
  const formattedNumber = new Intl.NumberFormat('en-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
      return `${formattedNumber} VND`;
    };
const updateAllCarts = async (event) => {
    event.preventDefault();
    const carts = globalStore.value.cart;
    for (const cart of carts) {
        await store.dispatch('updateCart', { id: cart.id, amount: cart.amount });
    }
    store.dispatch('getCart');
}

const deleteCart = (cartId) => {
  store.dispatch('deleteCart', cartId);
}
</script>

<template>
  <BreadCrumb :breadCrumbPath="breadCrumbPath" />
  <section class="cart-area pb-80">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="#">
            <div class="table-content table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Hình ảnh</th>
                    <th class="cart-product-name">Sản Phẩm</th>
                    <th class="product-price">Đơn giá</th>
                    <th class="product-quantity">Số lượng</th>
                    <th class="product-subtotal">Tổng cộng</th>
                    <th class="product-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in store.state.cart" :key="index">
                    <td class="product-thumbnail">
                      <a :href="'product-details?id=' + item.product.id">
                        <img :src="getImageUrl(item.product.images[0].image_path)" :alt="item.product.name" />
                      </a>
                    </td>
                    <td class="product-name">
                      <a :href="'prodcut-details?id=' + item.product.id">{{ item.product.name }}</a>
                    </td>
                    <td class="product-price">
                      <span class="amount">{{ formatCurrency(item.product.price) }}</span>
                    </td>
                    <td class="product-quantity">
                      <span class="cart-minus" @click="minusQuantity(item)"
                        >-</span
                      >
                      <input class="cart-input" type="text" :value="item.amount" />
                      <span class="cart-plus" @click="plusQuantity(item)">+</span>
                    </td>
                    <td class="product-subtotal">
                      <span class="amount">{{ formatCurrency(item.amount * item.product.price) }}</span>
                    </td>
                    <td class="product-remove" @click="deleteCart(item.id)">
                      <a href="#"><i class="fa fa-times"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="coupon-all">
                  <div class="coupon">
                    <input
                      id="coupon_code"
                      class="input-text"
                      name="coupon_code"
                      value=""
                      placeholder="Mã giảm giá"
                      type="text"
                    />
                    <button
                      class="tp-btn tp-color-btn banner-animation"
                      name="apply_coupon"
                    >
                      Áp dụng mã giảm giá
                    </button>
                  </div>
                  <div class="coupon2">
                    <button
                      class="tp-btn tp-color-btn banner-animation"
                      name="update_cart" 
                     @click="updateAllCarts($event)"
                    >
                      Cập nhật giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-md-5">
                <div class="cart-page-total">
                  <h2>Tổng cộng giỏ hàng</h2>
                  <ul class="mb-20">
                    <li>
                      Tổng cộng <span>{{formatCurrency( total) }}</span>
                    </li>
                  </ul>
                  <a href="/checkout" class="tp-btn tp-color-btn banner-animation"
                    >Tiến hành thanh toán</a  
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.table-content table {
  background: var(--tp-common-white);
  border-color: var(--tp-border-1);
  border-radius: 0;
  border-style: solid;
  border-width: 1px 0 0 1px;
  text-align: center;
  width: 100%;
  margin-bottom: 0;
}
.table-content table a {
  color: inherit;
}
.table-content .table > :not(:last-child) > :last-child > * {
  border-bottom-color: var(--tp-border-1);
}
.table-content table th {
  font-size: 16px;
  font-weight: 700;
}
.table-content table th,
.table-content table td {
  border-bottom: 1px solid var(--tp-border-1);
  border-right: 1px solid var(--tp-border-1);
}
.table td,
.table th {
  border-top: 1px solid var(--tp-border-1);
}
.table-content table.table > :not(:first-child) {
  border-top: 0;
}
td.product-thumbnail img {
  width: 125px;
  height: 125px;
  object-fit:cover;
  border-radius: 5px; 
}
.table-content table td.product-name {
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}
.table-content table td:not(:first-child) {
  vertical-align: middle;
}
.table-content .product-quantity {
  user-select: none;
  float: none;
}

.product-quantity .cart-plus,
.product-quantity .cart-minus {
  user-select: none;
  width: 25px;
  height: 30px;
  border: 1px solid var(--tp-border-1);
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
}

.product-quantity > input {
  width: 80px;
  border-radius: 3px;
}

.product-quantity input {
  color: #000;
  font-size: 14px;
  font-weight: normal;
  border: 1px solid var(--tp-border-1);
}
.cart-input {
  height: 30px;
  width: 32px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-top: 2px solid var(--tp-border-1);
  border-bottom: 2px solid var(--tp-border-1);
  display: inline-block;
  vertical-align: middle;
  margin: 0 -3px;
  padding-bottom: 0px;
}
.table-content table td.product-subtotal {
  font-size: 16px;
}
.fa-times:before {
  content: '\f00d';
  font: normal normal normal 14px/1 FontAwesome;
}
.coupon-all {
  margin-top: 50px;
}
.coupon {
  float: left;
}
#coupon_code {
  height: 52px;
  border: 1px solid var(--tp-border-1);
  padding: 0 15px;
  margin-right: 10px;
  border-radius: 8px;
}
.coupon2 {
  float: right;
}
.cart-page-total {
  padding-top: 50px;
}
.cart-page-total > h2 {
  font-size: 25px;
  margin-bottom: 20px;
  text-transform: capitalize;
}
.cart-page-total > ul {
  border: 1px solid var(--tp-border-1);
  padding-left: 0;
}
.cart-page-total > ul > li {
  list-style: none;
  font-size: 15px;
  color: #6f7172;
  padding: 10px 30px;
  border-bottom: 1px solid var(--tp-border-1);
  font-weight: 400;
}
.cart-page-total li:last-child {
  border-bottom: 0;
}

.cart-page-total ul > li > span {
  float: right;
}
.product-quantity .cart-plus:hover,
.product-quantity .cart-minus:hover {
  cursor: pointer;
  color: var(--tp-common-white);
  background: var(--tp-heading-secondary);
}
@media (max-width: 767px) {
  .table-content table {
      width: 300%;
  }
  .coupon {
    float: none;
}
.coupon2 {
  float: none;
  margin-top: 15px;
}
#coupon_code {
  margin-bottom: 15px;
}

}

</style>
