import { createStore } from 'vuex'
import auth from './auth.js'
import global from './global.js'
const store = createStore({
    modules:{
        auth : auth,
        global : global,
    }
})

export default store