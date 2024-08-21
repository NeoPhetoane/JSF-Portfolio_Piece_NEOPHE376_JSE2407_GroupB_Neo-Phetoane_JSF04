<template>
  <div class="theme-toggle-container">
    <button @click="toggleTheme" class="theme-toggle-btn">
      {{ theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode' }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["theme"]),
  },
  methods: {
    ...mapActions(["toggleTheme"]),
  },
};
</script>

<style scoped>
.theme-toggle-container {
  position: fixed;
  top: 10rem;
  right: 1rem;
  z-index: 1000;
}

.theme-toggle-btn {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.theme-toggle-btn:hover {
  background-color: var(--btn-bg-hover-color);
}
</style>