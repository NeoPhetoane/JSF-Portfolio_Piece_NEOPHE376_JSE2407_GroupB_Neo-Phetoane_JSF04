import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCategory: "",
    sortOrder: "default",
    cart: [],
    cartTotal: 0,
    comparisonList: [],
  },
  mutations: {
    setCategory(state, category) {
      state.selectedCategory = category;
    },
    setSortOrder(state, order) {
      state.sortOrder = order;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    setCart(state, cart) {
      state.cart = cart;
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    addToComparison(state, product) {
      const existingProduct = state.comparisonList.find(
        (item) => item.id === product.id
      );
      if (!existingProduct && state.comparisonList.length < 4) {
        // Limit to 4 items
        state.comparisonList.push(product);
      }
    },

    removeFromComparison(state, productId) {
      state.comparisonList = state.comparisonList.filter(
        (item) => item.id !== productId
      );
    },

    clearComparisonList(state) {
      state.comparisonList = [];
    },
  },
  actions: {
    updateCategory({ commit }, category) {
      commit("setCategory", category);
    },
    updateSortOrder({ commit }, order) {
      commit("setSortOrder", order);
    },
    addToCart({ commit, state }, product) {
      commit("addToCart", product);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    initializeCart({ commit }) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      commit("setCart", cart);
    },
    addToComparison({ commit, state }, product) {
      commit("addToComparison", product);
      localStorage.setItem(
        "comparisonList",
        JSON.stringify(state.comparisonList)
      );
    },
    removeFromComparison({ commit, state }, productId) {
      commit("removeFromComparison", productId);
      localStorage.setItem(
        "comparisonList",
        JSON.stringify(state.comparisonList)
      );
    },

    clearComparisonList({ commit }) {
      commit("clearComparisonList");
      localStorage.removeItem("comparisonList");
    },
  },
  getters: {
    selectedCategory: (state) => state.selectedCategory,
    sortOrder: (state) => state.sortOrder,
    cart: (state) => state.cart,
    cartTotal: (state) => state.cartTotal,
    comparisonList: (state) => state.comparisonList,
  },
});
