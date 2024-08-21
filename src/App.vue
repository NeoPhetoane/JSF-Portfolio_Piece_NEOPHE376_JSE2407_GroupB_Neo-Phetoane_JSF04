<script setup>
import Header from './components/Header.vue';

</script>

<template>
   <div>
   <Header />
   <div id="app" :class="themeClass">
   <ThemeToggleButton />
  </div>
<router-view/>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import ThemeToggleButton from "./components/ThemeToggle.vue";

export default {
  components: {
    ThemeToggleButton,
  },
  computed: {
    ...mapGetters(["theme"]),
    themeClass() {
      return this.theme === "light" ? "light-mode" : "dark-mode";
    },
  },
};
</script>