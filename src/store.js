import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCategory: '',
    sortOrder: 'default',
  },
  mutations: {
    setCategory(state, category) {
      state.selectedCategory = category;
    },
    setSortOrder(state, order) {
      state.sortOrder = order;
    },
  },
  actions: {
    updateCategory({ commit }, category) {
      commit('setCategory', category);
    },
    updateSortOrder({ commit }, order) {
      commit('setSortOrder', order);
    },
  },
  getters: {
    selectedCategory: (state) => state.selectedCategory,
    sortOrder: (state) => state.sortOrder,
  },
});