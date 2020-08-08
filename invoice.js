const { createInvoice } = require("./createInvoice.js");

const invoice = {
    shipping: {
      name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: '',
    },
    items: [
      {
        item: "",
        description: "",
        quantity:'',
        amount: '',
      },
      {
        item: "T",
        description: "",
        quantity: '',
        amount: ''
      }
    ],
    subtotal: '',
    paid: 0,
    invoice_nr: ''
  };
  createInvoice(invoice, "invoice.pdf")