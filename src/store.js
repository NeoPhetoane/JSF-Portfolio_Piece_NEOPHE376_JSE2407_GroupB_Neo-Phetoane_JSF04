import { createStore } from "vuex";


export default createStore({
  state: {
    selectedCategory: "",
    sortOrder: "default",
    cart: [],
    cartTotal: 0,
    Wishlist: [],
    wishlistTotal: 0,
    comparisonList: [],
    theme: localStorage.getItem("theme") || "light", 
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

//Wishlist mutations
    addToWishlist(state, product) {
      const existingProduct = state.Wishlist.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.Wishlist.push({ ...product, quantity: 1 });
      }
      state.WishlistTotal = state.Wishlist.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },Wishlist(state, wishlist) {
      state.wishlist = wishlist;
      state.wishlistTotal = state.wishlist.reduce(
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

    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
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

    addToWishlist({ commit, state }, product) {
      commit("addToWishlist", product);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    initializeWishlist({ commit }) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      commit("setWishlist", wishlist);
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
    toggleTheme({ commit }) {
      commit("toggleTheme");
    },
  },
  getters: {
    selectedCategory: (state) => state.selectedCategory,
    sortOrder: (state) => state.sortOrder,
    cart: (state) => state.cart,
    cartTotal: (state) => state.cartTotal,


    wishlist: (state) => state.wishlist,
    wishlistTotal: (state) => state.wishlistTotal,

    comparisonList: (state) => state.comparisonList,
    theme: (state) => state.theme,
  },
});
