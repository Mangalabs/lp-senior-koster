export const reservationData = {
  id: "reservas",
  title: "Faça sua Reserva",
  description: "Reserve seus produtos favoritos com antecedência",
  form: {
    fields: [
      {
        id: "customerName",
        label: "Nome",
        type: "text",
        placeholder: "Seu nome completo",
        required: true,
        gridClass: "md:col-span-1"
      },
      {
        id: "customerPhone",
        label: "Telefone",
        type: "tel",
        placeholder: "(41) 99999-9999",
        required: true,
        gridClass: "md:col-span-1"
      },
      {
        id: "productType",
        label: "Produto",
        type: "text",
        placeholder: "Ex: Bolo de chocolate, Pão integral, Torta de morango...",
        required: true,
        gridClass: "md:col-span-1"
      },
      {
        id: "quantity",
        label: "Quantidade",
        type: "number",
        min: 1,
        value: 1,
        required: true,
        gridClass: "md:col-span-1"
      },
      {
        id: "reservationDate",
        label: "Data",
        type: "date",
        required: true,
        gridClass: "md:col-span-1"
      },
      {
        id: "reservationTime",
        label: "Horário",
        type: "select",
        required: true,
        options: [
          { value: "", text: "Selecione um horário" },
          { value: "11:30 - 12:00", text: "11:30 - 12:00" },
          { value: "12:00 - 12:30", text: "12:00 - 12:30" },
          { value: "14:00 - 14:30", text: "14:00 - 14:30" },
          { value: "15:00 - 15:30", text: "15:00 - 15:30" },
          { value: "16:00 - 16:30", text: "16:00 - 16:30" },
          { value: "17:00 - 17:30", text: "17:00 - 17:30" },
          { value: "18:00 - 18:30", text: "18:00 - 18:30" }
        ],
        gridClass: "md:col-span-1"
      }
    ],
    textarea: {
      id: "observations",
      label: "Observações (opcional)",
      placeholder: "Alguma observação especial sobre sua reserva...",
      rows: 4
    },
    submitButton: {
      text: "Enviar Reserva",
      class: "btn-primary"
    }
  },
  whatsapp: {
    number: "5585991133102",
    messageTemplate: {
      header: "🍰 *NOVA RESERVA - Senior Koster*",
      fields: {
        name: "👤 *Nome:*",
        phone: "📱 *Telefone:*",
        product: "🎂 *Produto:*",
        quantity: "📦 *Quantidade:*",
        date: "📅 *Data:*",
        time: "⏰ *Horário:*",
        observations: "📝 *Observações:*"
      },
      footer: "✨ Aguardo confirmação da reserva!"
    }
  }
}