// Переходя к фреймворку, надо уходить от наследования!

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
// const image = 'http://placekitten.com/200/200';
const cartImage = 'https://placehold.it/100x80';
// const CATALOG_URL = '/catalogData.json'
const CART_URL = '/getBasket.json'

let app = new Vue({
    el: '#app',
    data: {
        show: false,
    },

    methods: {
        getJson(url) {
            return fetch(`${API + url}`)
                .then(result => result.json())
                .catch(err => {
                    console.log(err)
                })
        },
        
    },

    mounted() {
        
    },

    components: {
        'catalog': catalog, // название кастомного тега: название переменной, в которой хранится компонент
        'filter-comp': filterComp,
        'cart': cart,
        'hello': hello
    }

})