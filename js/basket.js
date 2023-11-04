let = basketProduct = {
    props: ['prod'],
    template: 
    `
    <div class="card-item">
            <div class="product-bio">
                <div class="product-desc">
                    <p class="product-title"> {{prod.product_name}} </p>
                    <p class="product-quantity">Quantity: {{prod.quantity}}</p>
                    <p class="product-single price">{{prod.price}}</p>
                </div>
                <div class="right-block">
                    <p class="product-price">{{prod.quantity * prod.price}}</p>
                    <button class="del-btn" @click="$root.$refs.cart.removeProduct(prod)">&times;</button>
                </div>
            </div>
        </div>
    `
}

let cart = {
    data() {
        return {
            addToBasket: '/addToBasket.json',
            basket: [],
            basketTemplate: '',
        }
    },

    props: [
        'show'
    ],

    template:
        `
    <div class="cart-block" v-show="show">
        <basket-product v-for="addedProduct of basket" :prod="addedProduct" :key="addedProduct.id_product"></basket-product>
    </div>
    `,

    methods: {
        addProduct(product) {
            let prodId = product.id_product
            let find = this.basket.find(function (item) {
                return item.id_product === prodId
            })
            if (find) {
                find.quantity++
            } else {
                newProduct = {
                    id_product: prodId,
                    price: +product.price,
                    product_name: product.product_name,
                    quantity: 1
                }
                this.basket.push(newProduct)
            }
        },

        removeProduct(addedProduct) {
            let addedProdId = addedProduct.id_product
            let elprod = this.basket.find(function (item) {
                return item.id_product === addedProdId
            })
            if (elprod.quantity == 1) {
                let IdRemove = this.basket.findIndex(function (item) {
                    return item.id_product === addedProdId
                })
                this.basket.splice(IdRemove, 1)
            } else {
                elprod.quantity--
            }
        }
    }, 
    components: {
        'basket-product': basketProduct
    }
}