<template>
  <section :id="aboutData.id" :class="['py-20', aboutData.background]">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div :class="['w-80', 'h-80', 'mx-auto', 'rounded-md', 'flex', 'items-center', 'justify-center', 'shadow-2xl', 'overflow-hidden', aboutData.person.gradient]">
            <img 
              :src="aboutData.person.image" 
              :alt="aboutData.person.altText"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-neutro-escuro">
            Conheça o {{ aboutData.person.name }}
          </h2>
          <p 
            v-for="(paragraph, index) in aboutData.person.description" 
            :key="index"
            class="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutData } from '../data/AboutData';

export default {
  name: 'About',
  data() {
    return {
      aboutData: aboutData
    };
  }
}
</script>