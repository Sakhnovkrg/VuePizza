import {defineStore} from "pinia"
import categoriesData from '../data/categories.json';
import productsData from '../data/products.json';
export const useAppStore = defineStore('app', {
    state: () => ({
        cartItems: JSON.parse(localStorage.getItem('cart')) ?? {},
        categories: null,
        products: null,
    }),
    getters: {
        cartAmount() {
            return Object.values(this.cartItems).reduce((sum, item) => sum + item.amount, 0);
        },
        total() {
            return Object.values(this.cartItems).reduce((sum, item) => {
                const subtotal = item.amount * item.product.price;
                return sum + subtotal;
            }, 0)
        }
    },
    actions: {
        storeCart() {
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
        },
        loadCart() {
            this.cartItems = JSON.parse(localStorage.getItem('cart')) ?? {};
        },
        getCategories() {
            if(this.categories) return this.categories;
            return this.categories = categoriesData;
        },
        getProducts() {
            if(this.products) return this.products;
            return this.products = productsData;
        },
        addToCart(product) {
            this.loadCart();
            if(this.cartItems[product.id]) {
                this.cartItems[product.id].amount++;
            } else {
                this.cartItems[product.id] = {amount: 1, product: product};
            }
            this.storeCart();
        },
        dropFromCart(id) {
            this.loadCart();
            if(!this.cartItems[id]) return;
            this.cartItems[id].amount--;
            if(this.cartItems[id].amount < 1) {
                delete this.cartItems[id];
            }
            this.storeCart();
        },
        removeFromCart(id) {
            this.loadCart();
            delete this.cartItems[id];
            this.storeCart();
        }
    }
})
