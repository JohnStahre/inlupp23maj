<template>
  <div>
      <!-- shoppingcarten läggs i navbar -->
      <ShoppingCartProduct v-for="item in shoppingCart" :key="item.products._id" :item="item" />
    <div>
        <!-- <div v-if="ShoppingCart.length < 1"> -->
        <div>
            <div class="p-2 d-flex justify-content-center align-items-center">
                EMPTY
                </div>    
        </div>
        <div class="dropdown-divider"></div>
    </div>

    
    <div class="p-2 d-flex justify-content-between align-items-center">
        <div>  
        <div class="total-price">
            Total: <span>{{shoppingCartTotal}} USD</span> 
        </div>
        <small class="text-muted">inc. tax</small>  
    </div>
     <button class="btn btn-primary">Checkout</button>
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
        ...mapGetters(['ShoppingCart', 'shoppingCartTotal'])
    }

}
</script>

<style>

</style>