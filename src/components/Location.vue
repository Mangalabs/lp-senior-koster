<template>
  <section class="py-20" style="background: var(--neutro-claro);">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4" style="color: var(--neutro-escuro);">
          Onde Estamos
        </h2>
        <p class="text-xl text-gray-600">Rua Constantino José de Almeida, 233</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-xl max-w-5xl mx-auto">
        <div class="relative w-full h-96 rounded-xl overflow-hidden group">
          <iframe
            class="absolute inset-0 w-full h-full rounded-xl filter contrast-110 saturate-120 brightness-95 group-hover:brightness-105 transition-all"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.32089204613!2d-34.8789029!3d-8.0624719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f7f9f6a4b1%3A0x4b0ecf6a70b0482d!2sRua%20Constantino%20Jos%C3%A9%20de%20Almeida%2C%20233!5e0!3m2!1spt-BR!2sbr!4v1693312973176!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div class="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div class="text-center mt-6">
          <a href="https://maps.app.goo.gl/f1mvS27i9Dt4hrru5" target="_blank"
             class="inline-block bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-colors font-medium">
            📍 Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Location'
}
</script>
