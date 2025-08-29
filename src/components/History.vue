<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="font-display text-4xl md:text-5xl font-bold mb-4 text-neutro-escuro"
        >
          {{ historyData.title }}
        </h2>
        <p class="text-xl text-gray-600">{{ historyData.description }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div
            :class="[
              'w-100',
              'h-80',
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
          <h3
            class="font-display text-3xl font-semibold mb-6 text-neutro-escuro"
          >
            {{ historyData.mainSection.title }}
          </h3>
          <p
            v-for="(paragraph, index) in historyData.mainSection.paragraphs"
            :key="index"
            class="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="feature in historyData.features"
          :key="feature.id"
          class="text-center"
        >
          <div
            :class="[
              'rounded-full',
              'w-24',
              'h-24',
              'flex',
              'items-center',
              'justify-center',
              'mx-auto',
              'mb-4',
              feature.gradient,
            ]"
          >
            <div class="text-3xl">{{ feature.emoji }}</div>
          </div>
          <h4
            class="font-display text-xl font-semibold mb-2 text-neutro-escuro"
          >
            {{ feature.title }}
          </h4>
          <p class="text-gray-600">{{ feature.description }}</p>
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
