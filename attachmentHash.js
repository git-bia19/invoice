var crypto = require('crypto');

var nonce = crypto.randomBytes(16);
var attachment = {
  "nonce": nonce.toString('hex'),
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

var hash = crypto.createHash('keccak256');
hash.update(JSON.stringify(attachment));
var memoHashHex = hash.digest('hex');
console.log(memoHashHex);