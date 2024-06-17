<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import {reactive,  ref } from 'vue'

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Thanh toán' }]

const isShowLogin = ref(false);
const isShowCoupon = ref(false);

const form = reactive({
  login: {
    username: '',
    password: '',
    rememberMe: false,
  },
  coupon: '',
  billingDetails: {
    country: 'United States',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    createAccount: false,
    accountPassword: '',
  },
  shippingDetails: {
    shipToDifferentAddress: false,
    country: 'bangladesh',
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  },
  orderNotes: '',
  shippingMethod: '',
  paymentMethod: '',
});

const toggleFormLogin = ()=>{
    isShowLogin.value = !isShowLogin.value;
}
const toggleFormCoupon = ()=>{
    isShowCoupon.value = !isShowCoupon.value;
}
</script>

<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath" />
    <section class="coupon-area pt-10 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="coupon-accordion">
              <!-- ACCORDION START -->
              <h3>Returning customer? <span id="showlogin" @click='toggleFormLogin()'>Click here to login</span></h3>
              <div id="checkout-login" class="coupon-content" :class="{ open: isShowLogin }">
                <div class="coupon-info">
                  <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                  <form @submit.prevent="handleLogin">
                    <p class="form-row-first">
                      <label>Username or email <span class="required">*</span></label>
                      <input type="text" v-model="form.login.username">
                    </p>
                    <p class="form-row-last">
                      <label>Password <span class="required">*</span></label>
                      <input type="password" v-model="form.login.password">
                    </p>
                    <p class="form-row">
                      <button class="tp-btn tp-color-btn" type="submit">Login</button>
                      <label>
                        <input type="checkbox" v-model="form.login.rememberMe">
                        Remember me
                      </label>
                    </p>
                    <p class="lost-password">
                      <a href="#">Lost your password?</a>
                    </p>
                  </form>
                </div>
              </div>
              <!-- ACCORDION END -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="coupon-accordion">
              <!-- ACCORDION START -->
              <h3>Have a coupon? <span id="showcoupon"  @click='toggleFormCoupon()'>Click here to enter your code</span></h3>
              <div id="checkout_coupon" class="coupon-checkout-content" :class="{ open: isShowCoupon}">
                <div class="coupon-info">
                  <form @submit.prevent="applyCoupon">
                    <p class="checkout-coupon">
                      <input type="text" placeholder="Coupon Code" v-model="form.coupon">
                      <button class="tp-btn tp-color-btn" type="submit">Apply Coupon</button>
                    </p>
                  </form>
                </div>
              </div>
              <!-- ACCORDION END -->
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="checkout-area pb-50">
      <div class="container">
        <form @submit.prevent="handleCheckout">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="checkbox-form">
                <h3>Billing Details</h3>
                <div class="row">
                  <div class="col-md-12">
                    <div class="country-select">
                      <label>Country <span class="required">*</span></label>
                      <select v-model="form.billingDetails.country">
                        <option value="United States">United States</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="England">England</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>First Name <span class="required">*</span></label>
                      <input type="text" v-model="form.billingDetails.firstName">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Last Name <span class="required">*</span></label>
                      <input type="text" v-model="form.billingDetails.lastName">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>Company Name</label>
                      <input type="text" v-model="form.billingDetails.companyName">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>Address <span class="required">*</span></label>
                      <input type="text" placeholder="Street address" v-model="form.billingDetails.address">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <input type="text" placeholder="Apartment, suite, unit etc. (optional)" v-model="form.billingDetails.apartment">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>Town / City <span class="required">*</span></label>
                      <input type="text" placeholder="Town / City" v-model="form.billingDetails.city">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>State / County <span class="required">*</span></label>
                      <input type="text" v-model="form.billingDetails.state">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Postcode / Zip <span class="required">*</span></label>
                      <input type="text" placeholder="Postcode / Zip" v-model="form.billingDetails.zip">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Email Address <span class="required">*</span></label>
                      <input type="email" v-model="form.billingDetails.email">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>Phone <span class="required">*</span></label>
                      <input type="text" v-model="form.billingDetails.phone">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list create-acc">
                      <input id="cbox" type="checkbox" v-model="form.billingDetails.createAccount">
                      <label>Create an account?</label>
                    </div>
                    <div id="cbox_info" class="checkout-form-list create-account" :class="{ open: form.billingDetails.createAccount }">
                      <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                      <label>Account password <span class="required">*</span></label>
                      <input type="password" placeholder="password" v-model="form.billingDetails.accountPassword">
                    </div>
                  </div>
                </div>
                <div class="different-address">
                  <div class="ship-different-title">
                    <h3>
                      <label>Ship to a different address?</label>
                      <input id="ship-box" type="checkbox" v-model="form.shippingDetails.shipToDifferentAddress">
                    </h3>
                  </div>
                  <div id="ship-box-info" class='ship-box-info' :class='{open:form.shippingDetails.shipToDifferentAddress}'>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="country-select">
                          <label>Country <span class="required">*</span></label>
                          <select v-model="form.shippingDetails.country">
                            <option value="bangladesh">bangladesh</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Albania">Albania</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>First Name <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.firstName">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Last Name <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.lastName">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" v-model="form.shippingDetails.companyName">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Address <span class="required">*</span></label>
                          <input type="text" placeholder="Street address" v-model="form.shippingDetails.address">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <input type="text" placeholder="Apartment, suite, unit etc. (optional)" v-model="form.shippingDetails.apartment">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Town / City <span class="required">*</span></label>
                          <input type="text" placeholder="Town / City" v-model="form.shippingDetails.city">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>State / County <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.state">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Postcode / Zip <span class="required">*</span></label>
                          <input type="text" placeholder="Postcode / Zip" v-model="form.shippingDetails.zip">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Email Address <span class="required">*</span></label>
                          <input type="email" v-model="form.shippingDetails.email">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>Phone <span class="required">*</span></label>
                          <input type="text" v-model="form.shippingDetails.phone">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="order-notes">
                    <div class="checkout-form-list checkout-form-list-2">
                      <label>Order Notes</label>
                      <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery." v-model="form.orderNotes"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="your-order mb-30 ">
                              <h3>Your order</h3>
                              <div class="your-order-table table-responsive">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th class="product-name">Product</th>
                                             <th class="product-total">Total</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr class="cart_item">
                                                <td class="product-name">
                                                   Vestibulum suscipit <strong class="product-quantity"> × 1</strong>
                                                </td>
                                                <td class="product-total">
                                                   <span class="amount">$165.00</span>
                                                </td>
                                          </tr>
                                          <tr class="cart_item">
                                                <td class="product-name">
                                                   Vestibulum dictum magna <strong class="product-quantity"> × 1</strong>
                                                </td>
                                                <td class="product-total">
                                                   <span class="amount">$50.00</span>
                                                </td>
                                          </tr>
                                       </tbody>
                                       <tfoot>
                                          <tr class="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span class="amount">$215.00</span></td>
                                          </tr>
                                          <tr class="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                   <ul>
                                                      <li>
                                                            <input type="radio" name="shipping" :v-model='form.shippingMethod'>
                                                            <label>
                                                               Flat Rate: <span class="amount">$7.00</span>
                                                            </label>
                                                      </li>
                                                      <li>
                                                            <input type="radio" name="shipping" :v-model='form.shippingMethod'>
                                                            <label>Free Shipping:</label>
                                                      </li>
                                                   </ul>
                                                </td>
                                          </tr>
                                          <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount">$215.00</span></strong>
                                                </td>
                                          </tr>
                                       </tfoot>
                                    </table>
                              </div>
                              <div class="payment-method">
                                 <div class="accordion" id="checkoutAccordion">
                                    <div class="accordion-item">
                                       <h2 class="accordion-header" id="checkoutOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                          Direct Bank Transfer
                                          </button>
                                       </h2>
                                       <div id="bankOne" class="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion" style="">
                                          <div class="accordion-body">
                                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="accordion-item">
                                       <h2 class="accordion-header" id="paymentTwo">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
                                          Cheque Payment
                                          </button>
                                       </h2>
                                       <div id="payment" class="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                                          <div class="accordion-body">
                                          Please send your cheque to Store Name, Store Street, Store Town, Store
                                          State / County, Store
                                          Postcode.
                                          </div>
                                       </div>
                                    </div>
                                    <div class="accordion-item">
                                       <h2 class="accordion-header" id="paypalThree">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                                          PayPal
                                          </button>
                                       </h2>
                                       <div id="paypal" class="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
                                          <div class="accordion-body">
                                          Pay via PayPal; you can pay with your credit card if you don’t have a
                                          PayPal account.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="order-button-payment mt-20">
                                    <button type="submit" class="tp-btn tp-color-btn w-100 banner-animation">Place order</button>
                                 </div>
                              </div>
                           </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </template>
<style scoped>
.coupon-accordion h3 {
    background-color: #f6f6f6;
    border-top: 3px solid rgba(150, 174, 0, 0.3);
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 25px;
    padding: 1em 2em 1em 3.5em;
    position: relative;
    width: auto;
}

.coupon-accordion h3::before {
    content: "\f07b";
    left: 15px;
    top: 13px;
    position: absolute;
    color: #6f7172;
    font: normal normal normal 14px/1 FontAwesome;
    font-weight: 700;
}
.coupon-accordion span {
    color: #6f7172;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
}
.coupon-content {
    margin-bottom: 20px;
    padding: 30px;
    border: 1px solid #eaedff;
}
.coupon-info p.coupon-text {
    margin-bottom: 15px;
}

.coupon-info p {
    margin-bottom: 0;
}
.checkbox-form h3 {
    border-bottom: 1px solid #eaedff;
    font-size: 24px;
    font-family: var(--tp-ff-jost);
    margin: 0 0 20px;
    padding-bottom: 10px;
    width: 100%;
}
.country-select {
    margin-bottom: 30px;
    position: relative;
}
.country-select label, .checkout-form-list label {
    color: #6f7172;
    display: block;
    margin: 0 0 5px;
}
.country-select label span.required, .checkout-form-list label span.required {
    color: red;
}
.country-select select {
    width: 100%;
    background-color: transparent;
    border: 1px solid #eaedff;
    padding: 0 10px;
    height: 50px;
}
.country-select .nice-select {
    border: 1px solid #eaedff;
    height: 45px;
    padding-left: 10px;
    width: 100%;
    color: #6f7172;
    margin-bottom: 20px;
}
.checkout-form-list input[type=text], .checkout-form-list input[type=password], .checkout-form-list input[type=email] {
    background: #ffffff;
    border: 1px solid #eaedff;
    border-radius: 0;
    height: 45px;
    padding: 0 0 0 10px;
    width: 100%;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
.checkout-form-list {
    margin-bottom: 30px;
}

.checkout-form-list input[type=checkbox] {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    top: 4px;
    transform: translateY(-3px);
}
.create-account,
.ship-box-info{
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-in-out; 
  }
  .create-account.open,
  .ship-box-info.open {
    max-height:1000px;
  }
  .coupon-checkout-content,
.coupon-content {
    display:none;
  max-height: 0; 
  overflow: hidden; 
  transition:  max-height 1s  linear;
}

.coupon-checkout-content.open,
.coupon-content.open {
    display:block;
  max-height: 1000px;
}

.create-acc label {
    color: #6f7172;
    display: inline-block;
}

.ship-different-title h3 label {
    display: inline-block;
    margin-right: 20px;
    color: #6f7172;
    font-family: var(--tp-ff-jost);
}
.order-notes textarea {
    border: 1px solid #eaedff;
    height: 120px;
    padding: 15px;
    width: 100%;
    outline: 0;
    resize: none;
}
.coupon-info p.form-row-first input, .coupon-info p.form-row-last input {
    border: 1px solid #eaedff;
    height: 45px;
    margin: 0 0 14px;
    max-width: 100%;
    padding: 0 0 0 10px;
    width: 100%;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
.form-row > label {
    margin-top: 15px;
    margin-left: 15px;
    color: #6f7172;
}
.coupon-info p.form-row-last label span.required {
    color: red;
    font-weight: 700;
}

p.lost-password a {
    color: #6f6f6f;
}
p.lost-password {
    margin-top: 15px;
}
p.checkout-coupon input[type=text] {
    height: 45px;
    padding: 0 15px;
    width: 100%;
    border: 1px solid #eaedff;
    margin-bottom: 15px;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}

.your-order {
    padding: 30px 40px 45px;
    border: 3px solid rgba(150, 174, 0, 0.3);
}
.your-order h3 {
    border-bottom: 1px solid #eaedff;
    font-size: 30px;
    margin: 0 0 20px;
    padding-bottom: 10px;
    font-family: var(--tp-ff-jost);
    width: 100%;
}
.your-order-table table th {
    border-top: medium none;
    color: #6f7172;
    font-weight: normal;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
    width: 250px;
}
.your-order-table table th, .your-order-table table td {
    border-bottom: 1px solid #eaedff;
    border-right: medium none;
    color: #6f7172;
    font-size: 14px;
    padding: 15px 0;
    text-align: left;
}
.your-order-table table .shipping ul li input {
    margin-right:5px;
    position: relative;
    top: 2px;
}
.your-order-table table tr.order-total td span {
    color: var(--tp-theme-primary);
    font-size: 18px;
    font-weight: 500;
}
.payment-method .accordion-button:not(.collapsed) {
    color: var(--tp-theme-primary);
    background-color: var(--tp-common-white);
    box-shadow: none;
}
.payment-method .accordion-body {
    padding: 8px 0;
    padding-bottom: 40px;
}
.payment-method .accordion-button::after {
    position: absolute;
    content: "\f067";
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: FontAwesome;
    font-size: 16px;
    font-weight: 400;
    margin-left: 0;
    background-image: none;
}
.payment-method .accordion-button:not(.collapsed)::after {
    content: "\f068";
}
.payment-method .accordion-collapse {
    border: none;
}
.payment-method .accordion-item {
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid var(--tp-border-primary);
}
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: var(--bs-accordion-inner-border-radius);
    border-top-right-radius: var(--bs-accordion-inner-border-radius);
}

.payment-method .accordion-button {
    font-size: 16px;
    font-weight: 500;
    color: var(--tp-theme-primary);
    padding: 23px 0;
    border: none;
}
.your-order-table table .shipping ul li {
    list-style: none;
}
.your-order-table table .shipping ul{
    padding-left:0;
}
.your-order-table table .order-total td {
    border-bottom: medium none;
}
.your-order-table table .order-total th {
    border-bottom: 0;
    font-size: 14px;
}
</style>
