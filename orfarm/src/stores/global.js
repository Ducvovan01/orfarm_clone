import Vuex from 'vuex';
import axios from 'axios';
import apiURL from '../connect';

const store = new Vuex.Store({
    state: {
        cart: {},
    },
    getters: {
        cart(state) {
            return state.cart
        },
    },
    mutations: {
        setCart(state, cart) {
            state.cart = cart;
        },
    },
    actions: {
        async getCart({commit, state}) {
            const token = localStorage.getItem('token');
            const headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer '  + token
            }
            try {
                const API_BACK_END = apiURL.baseURL;
                if(token != "" && token != null){
                    const { data } = await axios.get(`${API_BACK_END}cart`, {headers : headers});
                    if (data.status == 'success') {
                        commit('setCart', data.data);
                    }
                }
            } catch ({ res }) {
                commit('setCart', {});
            }
        },
        async updateCart({commit, state}) {
            const token = localStorage.getItem('token');
            const headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer '  + token
            }
            try {
                const API_BACK_END = apiURL.baseURL;
                if(token != "" && token != null){
                    const { data } = await axios.post(`${API_BACK_END}cart/update/${state.cart.id}`, {headers : headers});
                    if (data.status == 'success') {
                        commit('setCart', data.data);
                    }
                }
            } catch ({ res }) {
                commit('setCart', {});
            }
        },
       
    }
});
export default store;
