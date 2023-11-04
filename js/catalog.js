// продукт объявляем раньше, чем каталог, потому что продукт вложен в каталог

let product = {
    props: ['image', 'prod'],
    template:   `
    <div class="product-item">
    <img class="product-image" :src="image">
    <h3 class="card-item"> {{ prod.product_name }} </h3>
    <p> {{ prod.price }} $</p>
    <button class="buy-btn" @click="$root.$refs.cart.addProduct(prod)"> TO THE CARD</button>
    </div>`

}

let catalog = {
    data () {
        return {
            catalogURL: '/catalogData.json',
            products: [],
            imgCatalog: 'http://placekitten.com/200/200',
            filtered: [],
        }
  
    },

    mounted () {
        this.$parent.getJson(this.catalogURL)
        .then(data => {
            this.products = data
            this.filtered = data
        })
    },

    methods: {
        filter(value) {
            let reg = new RegExp (value, 'i')
            this.filtered = this.products.filter (el => reg.test(el.product_name))
        }
    },

    template: `
    <div class="products">
    <product  v-for="product of filtered" :image="imgCatalog" :prod="product" :key="product.id_product"></product>
    </div >
    `,

    components: {
        product
    }

}

// export default catalog
