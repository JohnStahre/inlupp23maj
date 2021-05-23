<template>
  <div>
      <!-- shoppingcarten läggs i navbar -->
      <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item"/>
    <div>
        <div v-if="ShoppingCart.length < 1">
            <div class="p-2 d-flex justify-content-center align-items-center">
                EMPTY
                </div>    
        </div>
        <div class="dropdown-divider"></div>
    </div>
    <div>  
    <div class="p-2 d-flex justify-content-between align-items-center">
        <div class="total-price">
            Totalt: <span>100</span>
            
        </div>
       
        <button class="btn btn-primary">Checkout</button>
    </div>
     <small class="text-muted">inc. tax</small>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
    name: 'ShoppingCart',
    components: {
        ShoppingCartProduct
    },
    computed: {
        ...mapGetters(['ShoppingCart'])
    }

}
</script>

<style>

</style>