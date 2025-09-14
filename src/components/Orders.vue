<template>
  <section :id="ordersData.id" :class="['py-20', ordersData.background]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4 text-neutro-escuro">
          {{ ordersData.title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ ordersData.description }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div
          v-for="product in ordersData.products"
          :key="product.id"
          :class="[
            'rounded-2xl p-6 text-center hover-lift transition-all duration-300',
            product.bgClass,
            product.borderClass,
          ]"
        >
          <div class="mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl flex items-center justify-center">
            <img :src="product.img" :alt="product.alt" class="w-full h-full object-cover" />
          </div>

          <h3 class="font-display text-xl font-semibold mb-2 text-neutro-escuro">
            {{ product.title }}
          </h3>
          <p class="text-gray-600">{{ product.description }}</p>
        </div>
      </div>

      <div class="max-w-2xl mx-auto">
        <form
          id="orderForm"
          class="bg-white rounded-2xl p-6 md:p-10 shadow-2xl"
          @submit.prevent="submitOrder"
        >
          <div class="text-center mb-10">
            <h3 class="text-2xl font-bold text-neutro-escuro mb-2">
              Faça sua encomenda
            </h3>
            <p class="text-gray-500">
              Preencha os dados abaixo e finalize seu pedido direto pelo WhatsApp.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="customerName" class="block text-gray-700 font-medium mb-2">Nome</label>
              <input
                id="customerName"
                type="text"
                placeholder="Seu nome completo"
                required
                v-model="formData.customerName"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />
            </div>

            <div>
              <label for="customerPhone" class="block text-gray-700 font-medium mb-2">Telefone</label>
              <input
                id="customerPhone"
                type="tel"
                placeholder="(41) 99999-9999"
                required
                v-model="phone"
                @input="onPhoneInput"
                maxlength="15"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />
            </div>
          </div>

          <div class="mb-6">
            <div
              v-for="(item, index) in formData.products"
              :key="index"
              class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 relative"
            >
              <div>
                <label class="block text-gray-700 font-medium mb-2">Produto</label>
                <input
                  type="text"
                  v-model="item.productType"
                  placeholder="Ex: Bolo de chocolate"
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
                />
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Quantidade</label>
                <input
                  type="number"
                  v-model="item.quantity"
                  min="1"
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
                />
              </div>

              <button
                v-if="formData.products.length > 1"
                type="button"
                @click="removeProduct(index)"
                class="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </div>

            <button
              type="button"
              @click="addProduct"
              class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-all"
            >
              + Adicionar outro produto
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="orderDate" class="block text-gray-700 font-medium mb-2">Data da Encomenda</label>
              <input
                id="orderDate"
                type="date"
                :min="minDate"
                required
                v-model="orderDate"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />
            </div>

            <div>
              <label for="pickupTime" class="block text-gray-700 font-medium mb-2">Horário de Retirada</label>
              <select
                id="pickupTime"
                required
                v-model="formData.pickupTime"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              >
                <option disabled value="">Selecione...</option>
                <option v-for="option in pickupOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
          </div>

          <div class="mb-8">
            <label for="observations" class="block text-gray-700 font-medium mb-2">Observações (opcional)</label>
            <textarea
              id="observations"
              placeholder="Alguma observação especial sobre sua encomenda..."
              rows="4"
              v-model="formData.observations"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full transition-all duration-300 hover:opacity-90 btn-primary text-white py-4 rounded-lg text-lg font-semibold shadow-md"
          >
            Enviar Encomenda
          </button>
        </form>
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
      ordersData,
      phone: "",
      orderDate: this.getToday(),
      minDate: this.getToday(),
      pickupOptions: [
        "11:30 - 12:00",
        "12:00 - 12:30",
        "14:00 - 14:30",
        "15:00 - 15:30",
        "16:00 - 16:30",
        "17:00 - 17:30",
        "18:00 - 18:30",
      ],
      formData: {
        customerName: "",
        pickupTime: "",
        observations: "",
        products: [
          { productType: "", quantity: 1 },
        ],
      },
    };
  },
  methods: {
    getToday() {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    },
    onPhoneInput(e) {
      const raw = (e?.target?.value || "").replace(/\D/g, "").substring(0, 11);
      if (raw.length <= 10) {
        this.phone = raw.replace(
          /^(\d{0,2})(\d{0,4})(\d{0,4}).*/,
          (m, p1, p2, p3) =>
            `${p1 ? `(${p1}` : ""}${p1.length === 2 ? ")" : ""}${
              p2 ? ` ${p2}` : ""
            }${p3 ? `-${p3}` : ""}`
        );
      } else {
        this.phone = raw.replace(
          /^(\d{0,2})(\d{0,5})(\d{0,4}).*/,
          (m, p1, p2, p3) =>
            `${p1 ? `(${p1}` : ""}${p1.length === 2 ? ")" : ""}${
              p2 ? ` ${p2}` : ""
            }${p3 ? `-${p3}` : ""}`
        );
      }
    },
    addProduct() {
      this.formData.products.push({ productType: "", quantity: 1 });
    },
    removeProduct(index) {
      if (this.formData.products.length > 1) {
        this.formData.products.splice(index, 1);
      }
    },
    submitOrder() {
      const [year, month, day] = (this.orderDate || "")
        .split("-")
        .map(Number);
      const formattedDate = new Date(year, month - 1, day).toLocaleDateString("pt-BR");

      const formData = {
        ...this.formData,
        customerPhone: this.phone,
        orderDate: this.orderDate,
      };

      let message = `Olá, gostaria de fazer uma encomenda com a *Senior Koster* \n\n`;
      message += `*Nome:* ${formData.customerName}\n`;
      message += `*Telefone:* ${formData.customerPhone}\n\n`;

      message += `*Itens do pedido:*\n`;
      formData.products.forEach((item, i) => {
        message += `${i + 1}. ${item.productType} — ${item.quantity}x\n`;
      });

      message += `\n *Data:* ${formattedDate}\n`;
      message += ` *Horário:* ${formData.pickupTime}\n`;

      if (formData.observations) {
        message += ` *Observações:* ${formData.observations}\n`;
      }

      message += `\nAguardo a confirmação, muito obrigado! `;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/554132773923?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      this.phone = "";
      this.orderDate = this.getToday();
      this.formData = {
        customerName: "",
        pickupTime: "",
        observations: "",
        products: [{ productType: "", quantity: 1 }],
      };
    },
  },
};
</script>
