<template>
  <header class="fixed top-0 w-full z-50 glass-effect">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="font-display flex items-center">
          <img src="/icon (1).png" class="w-40 h-auto" alt="Logo" />
        </div>

        <div class="hidden md:flex space-x-8">
          <a
            href="#home"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Home</a
          >
          <a
            href="#produtos"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Produtos</a
          >
          <a
            href="#sobre"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Sobre</a
          >
          <a
            href="#reservas"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Reservas</a
          >
          <a
            href="#encomendas"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Encomendas</a
          >
          <a
            href="#contato"
            class="text-gray-700 hover:text-pink-400 transition-colors"
            >Contato</a
          >
        </div>

        <div class="hidden md:flex space-x-3">
          <a
            href="https://wa.me/5541932773923"
            target="_blank"
            class="btn-primary text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            WhatsApp
          </a>
          <a
            href="https://www.ifood.com.br/delivery/curitiba-pr/confeitaria-senior-koster-ltda-xaxim/53ebf9c4-aae2-4834-9e35-ba358542ff16"
            target="_blank"
            class="btn-secondary text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            iFood
          </a>
        </div>

        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg
            class="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div
        v-if="isOpen"
        class="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg"
      >
        <a
          href="#home"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Home</a
        >
        <a
          href="#produtos"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Produtos</a
        >
        <a
          href="#sobre"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Sobre</a
        >
        <a
          href="#reservas"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Reservas</a
        >
        <a
          href="#encomendas"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Encomendas</a
        >
        <a
          href="#contato"
          class="text-gray-700 hover:text-pink-400 transition-colors"
          >Contato</a
        >

        <div class="flex flex-col space-y-3 pt-2 border-t border-gray-200">
          <a
            href="https://wa.me/5541932773923"
            target="_blank"
            class="btn-primary text-white px-4 py-2 rounded-full text-sm font-medium text-center"
          >
            WhatsApp
          </a>
          <a
            href="https://www.ifood.com.br/delivery/curitiba-pr/confeitaria-senior-koster-ltda-xaxim/53ebf9c4-aae2-4834-9e35-ba358542ff16"
            target="_blank"
            class="btn-secondary text-white px-4 py-2 rounded-full text-sm font-medium text-center"
          >
            iFood
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.initSmoothScrolling();
  },
  methods: {
    initSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            this.isOpen = false;
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
}
</style>
