<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
  >
    <div class="absolute inset-0 z-0">
      <div class="slideshow-container w-full h-full">
        <div
          v-for="(slide, index) in heroData.slides"
          :key="index"
          :class="[
            'slide',
            slide.background,
            'bg-cover',
            'bg-center',
            { active: index === 0 },
          ]"
        >
          <div class="absolute inset-0 bg-white bg-opacity-20"></div>
          <div :class="[slide.opacity]">
            <img
              v-if="slide.content === 'image'"
              :src="slide.imageUrl"
              :alt="'Slide ' + (index + 1)"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 text-center relative z-20">
      <div class="fade-in mb-8">
        <div>
          <img
            :src="heroData.logo.imageUrl"
            :alt="heroData.logo.altText"
            class="size-60 mx-auto mb-8 bg-white rounded-full shadow-2xl flex items-center justify-center"
          />
        </div>

        <h3
          class="font-display text-3xl md:text-5xl font-bold mb-6 text-neutro-escuro drop-shadow-lg"
        >
          {{ heroData.title }}<br />
          <span class="text-azul-escuro drop-shadow">{{ heroData.highlightedTitle }}</span
          ><br />
          <span class="drop-shadow">{{ heroData.subtitle }}</span>
        </h3>
      </div>

      <div class="fade-in fade-in-delay">
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto drop-shadow">
          {{ heroData.description }}
        </p>
        <a
          :href="heroData.ctaLink"
          class="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium inline-block drop-shadow"
        >
          {{ heroData.ctaText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { siteData } from "../data/data.js";

export default {
  name: "Hero",
  data() {
    return {
      heroData: siteData.hero,
    };
  },
};
</script>
