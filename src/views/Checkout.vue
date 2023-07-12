<template>
    <main class="container main">
        <div v-if="Object.keys(app.cartItems).length !== 0" class="checkout-grid">
            <div v-for="(item,id) in app.cartItems" :key="id" class="checkout-item">
                <img class="checkout-item__img" :src="item.product.image" :alt="item.product.name">
                <div class="checkout-item__title">{{ item.product.name }}</div>

                <div class="checkout-item__cost">
                    {{ item.amount }} x {{ item.product.price }} = {{ item.product.price * item.amount }}
                </div>

                <div class="checkout-item__controls">
                    <button @click="app.dropFromCart(item.product.id)">➖</button>
                    <button @click="app.addToCart(item.product)">➕</button>
                    <button @click="app.removeFromCart(item.product.id)">🗑️</button>
                </div>
            </div>
            <div>
                Итого: <b>{{ app.total }}</b>
            </div>

        </div>
        <div v-else>
            Корзина пуста ;[
        </div>
    </main>
</template>
<script setup>
import {useAppStore} from "@/store/app.js";

const app = useAppStore();
</script>