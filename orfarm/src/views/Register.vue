<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import Auth from '@/api/auth/index.js';
import { useRouter } from "vue-router";
import {reactive,ref, onMounted} from 'vue';
import axios from 'axios';
const router = useRouter();
import { config } from '@/config/config';
const{loginForm, submitLogin, errors, resultOtp,submitResgiter } = Auth();

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Đăng Ký Tài Khoản' }];

const formSignup = reactive({
	phone: "",
	password: "",
	confirmPassword: "",
	referral_code: "",
	name: "",
	email: "",
	otp:"",
});

const otpValue = ref('');
const submitOtp = (event) => {
  event.preventDefault();
  formSignup.otp = otpValue.value;
  submitResgiter(formSignup,'sendotp');
};

const submitOtp1 = (event) => {
  event.preventDefault();
  formSignup.otp = otpValue.value;
  submitResgiter(formSignup,'register');
};


</script>

<template>
  <BreadCrumb :breadCrumbPath="breadCrumbPath" />

  <section class="track-area pb-40">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-12">
          <div class="tptrack__product mb-40">
            <div class="tptrack__content grey-bg">
              <div class="tptrack__item d-flex mb-20">
                <div class="tptrack__item-icon">
                  <i class="fal fa-user-unlock"></i>
                </div>
                <div class="tptrack__item-content">
                  <h4 class="tptrack__item-title">Đăng nhập tại đây</h4>
                  <p>
                    Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên trang
                    web này, để quản lý quyền truy cập vào tài khoản của bạn.
                  </p>
                </div>
              </div>
              <div class="tptrack__login mb-10">
                <form action="#" method="POST" >
                  <div class="tptrack_input">
                  <label for="name">Email/ Số điện thoại:</label>
                  <div class="tptrack__email mb-1">
                    <span><i class="fal fa-user"></i> </span>
                    <input type="email" placeholder="Tên đăng nhập / địa chỉ email" name="phone"  v-model='loginForm.phone' />
                  </div>
                  <span class="text-danger error_message" v-if="errors.phone">{{ errors.phone }}</span>
                </div>
                <div class="tptrack_input">
                    <label for="name">Mật khẩu:</label>
                  <div class="tptrack__email mb-1">
                    <span><i class="fal fa-key"></i></span>
                    <input type="password" placeholder="Mật khẩu" name="password" v-model='loginForm.password'/>
                  </div>
                  <span class="text-danger error_message" v-if="errors.password">{{ errors.password }}</span>
                </div>
                </form>
              </div>
              
              <div class="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">Ghi nhớ đăng nhập</label>
                </div>
                <div class="tpsign__pass">
                  <a href="#">Quên mật khẩu ?</a>
                </div>
              </div>
              <div class="tpsign__account mb-15">
                <a href="#">Đăng kí tài khoản?</a>
              </div>
              <div class="tptrack__btn">
                <button class="tptrack__submition active" @click="submitLogin">
                  Đăng nhập ngay<i class="fal fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="tptrack__product mb-40">
            <div class="tptrack__content grey-bg">
              <div class="tptrack__item d-flex mb-20">
                <div class="tptrack__item-icon">
                  <i class="fal fa-lock"></i>
                </div>
                <div class="tptrack__item-content">
                  <h4 class="tptrack__item-title">Đăng ký</h4>
                  <p>
                    Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên trang
                    web này, để quản lý quyền truy cập vào tài khoản của bạn.
                  </p>
                </div>
              </div>
              <form >
                 <div class="form-group tptrack__register mb-10">
                  <label for="name"><i class="fal fa-user"></i> Họ và tên:</label>
                  <input v-model="formSignup.name" type="text" id="name" name="name" class="form-control" placeholder="Nhập họ và tên của bạn" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="email"><i class="fal fa-envelope"></i> Địa chỉ email:</label>
                  <input v-model="formSignup.email" type="email" id="email" name="email" class="form-control" placeholder="Nhập địa chỉ email của bạn" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="phone"> Số điện thoại:</label>
                  <input v-model="formSignup.phone" type="text" id="phone" name="phone" class="form-control" placeholder="Nhập số điện thoại của bạn" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="password"><i class="fal fa-key"></i> Mật khẩu:</label>
                  <input v-model="formSignup.password" type="password" id="password" name="password" class="form-control tptrack__email" placeholder="Nhập mật khẩu của bạn" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="confirm_password"> Xác nhận mật khẩu:</label>
                  <input v-model="formSignup.confirmPassword" type="password" id="confirm_password" name="confirm_password" class="form-control" placeholder="Nhập lại mật khẩu" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="otp">Mã OTP:</label>
                  <input v-model="formSignup.otp" type="text" id="otp" name="otp" class="form-control" placeholder="Nhập mã OTP" required />
                </div>
                <div class="form-group tptrack__register mb-10">
                  <label for="referral_code"> Mã giới thiệu:</label>
                  <input v-model="formSignup.referral_code" type="text" id="referral_code" name="referral_code" class="form-control" placeholder="Nhập mã giới thiệu (nếu có)" />
                </div>
              </form>
              <div class="tpsign__account mb-15">
                <a href="#">Đã có tài khoản?</a>
              </div>
              <div class="tptrack__btn">
                <button class="tptrack__submition tpsign__reg" @click="handleRegister">
                  Đăng ký ngay<i class="fal fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tptrack__content {
  padding: 50px;
  border-radius: 10px;
}
.tptrack__item-icon {
  flex: 0 0 auto;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  background-color: var(--tp-common-white);
  border-radius: 6px;
  margin-right: 20px;
}

.tptrack__item-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--tp-heading-primary);
}
.tptrack__item-content p {
  font-size: 14px;
  color: var(--tp-text-body);
  line-height: 24px;
  margin-bottom: 0;
}

.tptrack__id ,
.tptrack__email {
  position: relative;
}
.tptrack__id span,
.tptrack__email span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  font-size: 16px;
}

.tptrack__id input,
.tptrack__email input {
  width: 100%;
  height: 60px;
  border: none;
  background-color: var(--tp-common-white);
  padding: 10px 60px;
  border-radius: 6px;
}
.tptrack__register input {
  width: 100%;
  height: 60px;
  border: none;
  background-color: var(--tp-common-white);
  padding: 10px 60px 10px 20px;
  border-radius: 6px;
}
.fa-user-unlock:before {
  content: '\f2f6';
  font: normal normal normal 18px/1 FontAwesome;
}
.fa-user:before {
  content: '\f007';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-key:before {
  content: '\f084';
  font: normal normal normal 14px/1 FontAwesome;
}

.fa-lock:before {
  content: '\f023';
  font: normal normal normal 18px/1 FontAwesome;
}

.fa-envelope:before {
  content: '\f0e0';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-key:before {
  content: '\f084';
  font: normal normal normal 14px/1 FontAwesome;
}
.fa-long-arrow-right:before {
  content: '\f178';
  font: normal normal normal 14px/1 FontAwesome;
}

.tptrack__submition {
  background: var(--tp-heading-primary);
  border-radius: 6px;
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0;
  padding: 22px 50px;
  text-align: center;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}
.tptrack__submition:hover,
.tptrack__submition.active {
  background-color: var(--tp-heading-secondary);
}
.tptrack__submition i {
  margin-left: 20px;
}
.tptrack__submition.active:hover {
  background-color: #859a00;
}
.tpsign__pass > a,
.tpsign__account > a {
  color: inherit;
}
.error_message{
  font-size:14px;
}
@media (max-width: 767px) {
  .tptrack__content {
      padding: 20px 15px;
  }
}
</style>
