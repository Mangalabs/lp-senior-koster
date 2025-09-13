<template>
  <section id="sobre" :id="aboutData.id" :class="['py-16 sm:py-20', aboutData.background]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <div
            :class="[
              'w-64 sm:w-72 md:w-80',
              'aspect-[4/5]',
              'mx-auto',
              'rounded-md',
              'flex',
              'items-center',
              'justify-center',
              'shadow-2xl',
              'overflow-hidden',
              aboutData.person.gradient
            ]"
          >
            <img 
              :src="aboutData.person.image" 
              :alt="aboutData.person.altText"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-neutro-escuro">
            Conheça o {{ aboutData.person.name }}
          </h2>
          <p 
            v-for="(paragraph, index) in aboutData.person.description" 
            :key="index"
            class="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutData } from '../data/aboutData';

export default {
  name: 'About',
  data() {
    return {
      aboutData: aboutData
    };
  }
}
</script>
