<template>
  <section :id="productsData.id" class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-neutro-escuro"
        >
          {{ productsData.title }}
        </h2>
        <p class="text-xl text-gray-600">{{ productsData.description }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in productsData.products"
          :key="product.id"
          class="hover-lift rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          :class="product.bgColor"
        >
          <div
            class="aspect-[4/3] w-full max-h-60 overflow-hidden rounded-t-2xl flex items-center justify-center"
            :class="product.gradient"
          >
            <img
              :src="product.img"
              :alt="product.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-6">
            <h3
              class="font-display text-2xl font-semibold mb-2"
              :class="product.textColor"
            >
              {{ product.title }}
            </h3>
            <p class="text-gray-600">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { productsData } from "../data/productsData";

export default {
  name: "Products",
  data() {
    return {
      productsData: productsData,
    };
  },
};
</script>
