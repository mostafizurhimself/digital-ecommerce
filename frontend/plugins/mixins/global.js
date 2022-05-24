import Vue from "vue";

Vue.mixin({
  methods: {
    // Convert the currency
    convertCurrency(value) {
      if (this.$store.state.currency.selectedCurrency == "EUR") {
        return Math.ceil(value);
      } else {
        return Math.ceil(
          parseFloat(value) *
          parseFloat(this.$store.state.currency.exchangeRate)
        );
      }
    },

    checkLength(obj) {
      return Object.keys(obj).length;
    }
  }
});
