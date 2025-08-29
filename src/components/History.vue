<template>
  <section class="py-16 sm:py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-neutro-escuro">
          {{ historyData.title }}
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          {{ historyData.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
        <div>
          <div
            :class="[
              'w-full',
              'h-64 sm:h-72 md:h-80',
              'mx-auto',
              'rounded-md',
              'flex',
              'items-center',
              'justify-center',
              'shadow-2xl',
              'overflow-hidden',
              historyData.mainSection.gradient,
            ]"
          >
            <img
              :src="historyData.mainSection.image"
              :alt="historyData.mainSection.altText"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 class="font-display text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 sm:mb-6 text-neutro-escuro">
            {{ historyData.mainSection.title }}
          </h3>
          <p
            v-for="(paragraph, index) in historyData.mainSection.paragraphs"
            :key="index"
            class="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="feature in historyData.features"
          :key="feature.id"
          class="text-center"
        >
          <div
            :class="[
              'rounded-full',
              'w-20 sm:w-24',
              'h-20 sm:h-24',
              'flex',
              'items-center',
              'justify-center',
              'mx-auto',
              'mb-3 sm:mb-4',
              feature.gradient,
            ]"
          >
            <div class="text-2xl sm:text-3xl">{{ feature.emoji }}</div>
          </div>
          <h4 class="font-display text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-neutro-escuro">
            {{ feature.title }}
          </h4>
          <p class="text-sm sm:text-base text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { historyData } from "../data/HistoryData";

export default {
  name: "History",
  data() {
    return {
      historyData: historyData,
    };
  },
};
</script>
