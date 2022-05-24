export const state = () => ({
    exchangeRate: 1,
    selectedCurrency: null
});

export const getters = {
    getExchangeRate: state => state.exchangeRate,
    getSelectedCurrency: state => state.selectedCurrency
};

export const mutations = {
    // Update the exchange rate
    SET_EXCHANGE_RATE(state, rate) {
        state.exchangeRate = rate;
    },

    // Update selected currency
    SET_SELECTED_CURRENCY(state, currency) {
        state.selectedCurrency = currency;
    },

    // Save currency to local storage
    SAVE_CURRENCY(state) {
        localStorage.setItem("currency", JSON.stringify(state.selectedCurrency));
    },

    // Set state currency form local storage
    SET_CURRENCY(state) {
        state.selectedCurrency = localStorage.getItem("currency") ?
            JSON.parse(localStorage.getItem("currency")) :
            'EUR';
    }
};

// Actions
export const actions = {
    async setExchangeRate({ commit }) {
        try {
            const res = await this.$axios.get("/exchange-rates");
            commit("SET_EXCHANGE_RATE", res.data);
        } catch (error) {
            console.error(error);
        }
    },

    setSelectedCurrency({ commit }, payload) {
        commit("SET_SELECTED_CURRENCY", payload);
        commit("SAVE_CURRENCY");
    },

    setCurrency({ commit }, payload) {
        commit("SET_CURRENCY");
    }
};
