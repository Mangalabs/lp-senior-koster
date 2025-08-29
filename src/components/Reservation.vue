<template>
  <section :id="reservationData.id" class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl md:text-5xl font-bold mb-4 text-neutro-escuro">
          {{ reservationData.title }}
        </h2>
        <p class="text-xl text-gray-600">{{ reservationData.description }}</p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form
          id="reservationForm"
          class="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          @submit.prevent="submitReservation"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div
              v-for="field in reservationData.form.fields"
              :key="field.id"
              :class="field.gridClass"
            >
              <label :for="field.id" class="block text-gray-700 font-medium mb-2">
                {{ field.label }}
              </label>

              <!-- Select -->
              <select
                v-if="field.type === 'select'"
                :id="field.id"
                :required="field.required"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              >
                <option
                  v-for="option in field.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.text }}
                </option>
              </select>

              <!-- Telefone -->
              <input
                v-else-if="field.id === 'customerPhone'"
                :id="field.id"
                type="tel"
                :placeholder="field.placeholder"
                :required="field.required"
                v-model="phone"
                @input="formatPhone"
                maxlength="15"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />

              <!-- Data e hora -->
              <input
                v-else-if="field.id === 'reservationDate'"
                :id="field.id"
                type="date"
                :min="minDate"
                :required="field.required"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
                v-model="reservationDate"
              />
              <input
                v-else-if="field.id === 'reservationTime'"
                :id="field.id"
                type="time"
                :required="field.required"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
                v-model="reservationTime"
              />

              <!-- Outros inputs -->
              <input
                v-else
                :id="field.id"
                :type="field.type"
                :placeholder="field.placeholder"
                :min="field.min"
                :value="field.value"
                :required="field.required"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />
            </div>
          </div>

          <div class="mb-6">
            <label
              :for="reservationData.form.textarea.id"
              class="block text-gray-700 font-medium mb-2"
            >
              {{ reservationData.form.textarea.label }}
            </label>
            <textarea
              :id="reservationData.form.textarea.id"
              :placeholder="reservationData.form.textarea.placeholder"
              :rows="reservationData.form.textarea.rows"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            :class="[
              'w-full',
              reservationData.form.submitButton.class,
              'text-white py-4 rounded-lg text-lg font-medium',
            ]"
          >
            {{ reservationData.form.submitButton.text }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { reservationData } from "../data/ReservationData";

export default {
  name: "Reservation",
  data() {
    const now = new Date();
    const minDate = now.toISOString().split("T")[0]; // data mínima = hoje
    return {
      reservationData: reservationData,
      phone: "",
      reservationDate: minDate,
      reservationTime: "",
      minDate,
    };
  },
  methods: {
    formatPhone() {
      let digits = this.phone.replace(/\D/g, "");
      if (digits.length > 11) digits = digits.substring(0, 11);

      if (digits.length <= 10) {
        this.phone = digits.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else {
        this.phone = digits.replace(
          /^(\d{2})(\d{5})(\d{0,4})$/,
          "($1) $2-$3"
        );
      }
    },

    submitReservation() {
      const now = new Date();
      const selectedDateTime = new Date(`${this.reservationDate}T${this.reservationTime}`);

      // Garantir 2h de antecedência
      const minReservationTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      if (selectedDateTime < minReservationTime) {
        alert("Por favor, escolha uma data e horário a partir de 2 horas do momento atual.");
        return;
      }

      const formData = {};

      this.reservationData.form.fields.forEach((field) => {
        if (field.id === "customerPhone") {
          formData[field.id] = this.phone;
        } else {
          formData[field.id] = document.getElementById(field.id).value;
        }
      });

      formData[this.reservationData.form.textarea.id] = document.getElementById(
        this.reservationData.form.textarea.id
      ).value;

      const formattedDate = new Date(
        formData.reservationDate
      ).toLocaleDateString("pt-BR");

      let message = `${this.reservationData.whatsapp.messageTemplate.header}\n\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.name} ${formData.customerName}\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.phone} ${formData.customerPhone}\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.product} ${formData.productType}\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.quantity} ${formData.quantity}\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.date} ${formattedDate}\n`;
      message += `${this.reservationData.whatsapp.messageTemplate.fields.time} ${formData.reservationTime}\n`;

      if (formData.observations) {
        message += `${this.reservationData.whatsapp.messageTemplate.fields.observations} ${formData.observations}\n`;
      }

      message += `\n${this.reservationData.whatsapp.messageTemplate.footer}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${this.reservationData.whatsapp.number}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");

      document.getElementById("reservationForm").reset();
      this.phone = "";
      this.reservationDate = this.minDate;
      this.reservationTime = "";
    },
  },
};
</script>
