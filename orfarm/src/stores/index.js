import { createStore } from 'vuex'
import auth from './auth.js'
import global from './global.js'
import 
const store = createStore({
    plugins:[
    ],
    modules:{
        auth : auth,
        global : global,
    }
})

export default store