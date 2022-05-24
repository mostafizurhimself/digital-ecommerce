export const state = () => ({
    cart: []
});

export const getters = {
    getTotalPrice: state => {
        let total = 0;
        state.cart.filter(item => {
            total += item.price;
        });
        return total;
    },

    getTotalItem: state => {
        if (state.cart.length > 9) {
            return "9+";
        }
        return state.cart.length;
    },

    getCartItems: state => state.cart
};

export const mutations = {
    ADD_TO_CART(state, item) {
        let found = state.cart.find(product => product.id == item.id);
        if (found) {
            // Show toast
        } else {
            state.cart.push(item);
        }
    },

    SAVE_DATA(state) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    REMOVE_FROM_CART(state, item) {
        let index = state.cart.indexOf(item);
        state.cart.splice(index, 1);
    },

    SET_CART(state) {
        state.cart = localStorage.getItem("cart") ?
            JSON.parse(localStorage.getItem("cart")) : [];
    },

    RESET_CART(state) {
        localStorage.setItem("cart", []);
        state.cart = [];
    }
};

// Actions
export const actions = {
    addToCart({ commit }, payload) {
        commit("ADD_TO_CART", payload);
        commit("SAVE_DATA", payload);
    },

    removeFromCart({ commit }, payload) {
        commit("REMOVE_FROM_CART", payload);
        commit("SAVE_DATA", payload);
    },

    setCart({ commit }) {
        commit("SET_CART");
    },

    resetCart({ commit }) {
        commit("RESET_CART");
    }
};