<template>
  <footer id="contato" class="py-16" style="background: var(--neutro-escuro)">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 text-white">
        <div>
          <img
            src="/icon (1).png"
            alt=""
            class="bg-white w-80 h-28 p-4 rounded-lg mb-4"
          />
          <p class="text-gray-300 mb-4">
            Confeitaria artesanal com sabores únicos e atendimento acolhedor.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://wa.me/554132773923"
              target="_blank"
              class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.ifood.com.br/delivery/curitiba-pr/confeitaria-senior-koster-ltda-xaxim/53ebf9c4-aae2-4834-9e35-ba358542ff16"
              target="_blank"
              class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors"
            >
              iFood
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Horário de Funcionamento</h4>
          <div class="space-y-2 text-gray-300">
            <p>Terça a Sábado: 11:30h às 19:30h</p>
            <p>Domingo: 14h às 18h</p>
            <p>Segunda: Fechado</p>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Contato</h4>
          <div class="space-y-2 text-gray-300">
            <p>📞 (41) 3277-3923</p>
            <p>📍 Rua Constantino José de Almeida, 233</p>
          </div>

          <div class="mt-6 flex space-x-4">
            <a
              href="https://www.instagram.com/seniorkoster"
              target="_blank"
              class="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/seniorkosterbolosartisticos"
              target="_blank"
              class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p>
          © 2025 MangaLab. Todos os direitos reservados. |
          <span class="ml-2">
            Desenvolvido com
            <img
              src="/icon-copyright.png"
              alt="amor"
              class="size-5 inline m-1"
              aria-hidden="true"
            />
            pela equipe
            <a
              class="text-yellow-400 hover:text-yellow-500 transition-colors"
              href="https://www.mangalab.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o site da MangaLab"
            >
              <b>MangaLab</b>
            </a>
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
