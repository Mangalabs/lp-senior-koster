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

              <select
                v-if="field.type === 'select'"
                :id="field.id"
                :required="field.required"
                v-model="formData[field.id]"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              >
                <option disabled value="">Selecione...</option>
                <option
                  v-for="option in field.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.text }}
                </option>
              </select>

              <input
                v-else-if="field.id === 'customerPhone'"
                :id="field.id"
                type="tel"
                :placeholder="field.placeholder"
                :required="field.required"
                v-model="phone"
                @input="onPhoneInput"
                maxlength="15"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />

              <input
                v-else-if="field.id === 'reservationDate'"
                :id="field.id"
                type="date"
                :min="minDate"
                :required="field.required"
                v-model="reservationDate"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />

              <input
                v-else-if="field.id === 'reservationTime'"
                :id="field.id"
                type="time"
                :required="field.required"
                v-model="reservationTime"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
              />

              <input
                v-else
                :id="field.id"
                :type="field.type"
                :placeholder="field.placeholder"
                :min="field.min"
                :required="field.required"
                v-model="formData[field.id]"
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
              v-model="formData[reservationData.form.textarea.id]"
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
import { reservationData } from '../data/reservationData';

export default {
  name: 'Reservation',
  data() {
    return {
      reservationData,
      phone: '',
      reservationDate: this.getToday(),
      reservationTime: '',
      minDate: this.getToday(),
      formData: {},
    };
  },
  created() {
    this.reservationData.form.fields.forEach((field) => {
      if (field.type === 'number' && field.value) {
        this.formData[field.id] = field.value;
      } else {
        this.formData[field.id] = '';
      }
    });
    this.formData[this.reservationData.form.textarea.id] = '';
  },
  methods: {
    getToday() {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    },

    onPhoneInput(e) {
      const raw = (e?.target?.value || '').replace(/\D/g, '').substring(0, 11);

      if (raw.length <= 10) {
        this.phone = raw.replace(
          /^(\d{0,2})(\d{0,4})(\d{0,4}).*/,
          (m, p1, p2, p3) =>
            `${p1 ? `(${p1}` : ''}${p1.length === 2 ? ')' : ''}${
              p2 ? ` ${p2}` : ''
            }${p3 ? `-${p3}` : ''}`
        );
      } else {
        this.phone = raw.replace(
          /^(\d{0,2})(\d{0,5})(\d{0,4}).*/,
          (m, p1, p2, p3) =>
            `${p1 ? `(${p1}` : ''}${p1.length === 2 ? ')' : ''}${
              p2 ? ` ${p2}` : ''
            }${p3 ? `-${p3}` : ''}`
        );
      }
    },

    submitReservation() {
      const now = new Date();

      const [year, month, day] = (this.reservationDate || '')
        .split('-')
        .map(Number);
      const [hour, minute] = (this.reservationTime || '00:00')
        .split(':')
        .map(Number);
      const selectedDateTime = new Date(year, month - 1, day, hour, minute);

      const minReservationTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      if (selectedDateTime < minReservationTime) {
        alert(
          'Por favor, escolha uma data e horário a partir de 2 horas do momento atual.'
        );
        return;
      }

      const formData = {
        ...this.formData,
        customerPhone: this.phone,
        reservationDate: this.reservationDate,
        reservationTime: this.reservationTime,
      };

      const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
        'pt-BR'
      );

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
      window.open(whatsappURL, '_blank');

      this.phone = '';
      this.reservationDate = this.getToday();
      this.reservationTime = '';
      Object.keys(this.formData).forEach((k) => (this.formData[k] = ''));
    },
  },
};
</script>
