<template>
  <section :id="ordersData.id" :class="['py-20', ordersData.background]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-neutro-escuro"
        >
          {{ ordersData.title }}
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          {{ ordersData.description }}
        </p>
        <a
          :href="ordersData.cta.url"
          target="_blank"
          :class="[
            ordersData.cta.class,
            'text-white px-8 py-4 rounded-full text-lg font-medium inline-block',
          ]"
        >
          {{ ordersData.cta.text }}
        </a>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="product in ordersData.products"
          :key="product.id"
          :class="[
            'rounded-2xl',
            'p-6',
            'text-center',
            'hover-lift',
            product.bgClass,
            product.borderClass,
          ]"
        >
          <div
            class="mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl flex items-center justify-center"
          >
            <img
              :src="product.img"
              :alt="product.alt"
              class="w-full h-full object-cover"
            />
          </div>

          <h3
            class="font-display text-xl font-semibold mb-2 text-neutro-escuro"
          >
            {{ product.title }}
          </h3>
          <p class="text-gray-600">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ordersData } from "../data/ordersData";

export default {
  name: "Orders",
  data() {
    return {
      ordersData: ordersData,
    };
  },
};
</script>
