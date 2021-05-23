import axios from '@/axios'

//const Product = require('../../../../API/models/products/productSchema');

export default {
    state: {
        // lista med produkter i en array
        products:[],
        product: null
    },
 
    getters: {
        // state som skickar state.products
        products: state => state.products,
        product: state => state.product
    },
    mutations: {
        // tillgång till state och vår med produkter, funktion som kan hämta produkterna
        SET_PRODUCTS: (state, products) => {
            state.products = products
        },
        SET_PRODUCT: (state, product) =>{
            state.product = product

        },
        CLEANUP: state => {
            state.product = null
        }

    },
    actions: {
        // en action som kan hämta alla produkter mha axios men skapar en ny instans av axios i sourcemappen döpt till axios med en js fil
    getProducts: async ({commit}) => {
        // gör en commit set products och skickar med vår responsdata
        const res = await axios.get('products')     
        commit('SET_PRODUCTS', res.data)
        return res.data;

    },
    // denna verkar inte skicka vidare så att jag kan visa i min produktdetails. varför ????
    getOneProduct: async ({commit}, id) => {
        
        const res = await axios.get('products/' + id)
        console.log("RÄTT DATA", res.data);
        commit('SET_PRODUCT', res.data)

    },
    cleanup: ({commit}) => {
        commit('CLEANUP')
    }
    }
}