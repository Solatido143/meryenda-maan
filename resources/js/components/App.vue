<template>
    <div>
        <Navbar />

        <main class="p-4">
            <h2 class="text-xl font-semibold mb-2">Our Snacks</h2>
            <ul>
                <li v-for="snack in snacks" :key="snack.id" class="mb-1">
                    🍡 {{ snack.name }}
                </li>
            </ul>
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";

const snacks = [
    { id: 1, name: "Turon" },
    { id: 2, name: "Banana Cue" },
    { id: 3, name: "Kwek-kwek" },
    { id: 4, name: "Fishball" },
];
</script>
