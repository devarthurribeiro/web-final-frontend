import Vue from 'vue'

const Currency = amount => {
  const options = {
    style: 'currency',
    currency: 'BRL'
  };
  return new Intl.NumberFormat('pt-BR', options).format(amount);
};

Vue.filter('currency', function (amount = '') {
  return Currency(amount.toString());
});