<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 v-if="!isLoggedIn" class="text-2xl font-bold text-center mb-6">
        Login
      </h2>
      <h2 v-else class="text-2xl font-bold text-center mb-6">
        Are you sure you want to Logout?
      </h2>

      <!-- Displaying error message -->
      <div v-if="error" class="text-red-500 text-sm text-center mb-4">
        {{ error }}
      </div>

      <!-- Login form -->
      <form v-if="!isLoggedIn" @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div class="mb-6 relative">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            type="password"
            id="password"
            class="w-full p-2 border border-gray-300 rounded-md"
            required
          />

          <!-- Toggle Button -->
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            {{ showPassword ? "Hide" : "Show" }}
          </button>
        </div>

        <!-- Loading -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          :disabled="loading"
        >
          {{ loading ? "Logging In..." : "Log In" }}
        </button>
      </form>

      <!-- Logout Button -->
      <button
        v-if="isLoggedIn"
        @click="handleLogout"
        class="w-full bg-red-500 text-white py-2 px-4 rounded-md mt-4"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
      loading: false,
      showPassword: false,
      isLoggedIn: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      this.loading = true; // Start loading

      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Invalid credentials");
        }

        const data = await response.json();

        // Handle successful login
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          this.isLoggedIn = true;
          // Check if there's a redirect query parameter
          const redirectPath = this.$route.query.redirect || "/";
          // Redirect to the intended route or home page if no redirect is specified
          this.$router.push(redirectPath);
        } else {
          this.error = "Login failed: Invalid credentials";
        }
      } catch (err) {
        this.error = "Login failed: " + err.message;
      } finally {
        this.loading = false; // End loading
      }
    },
    handleLogout() {
      localStorage.removeItem("authToken");
      this.isLoggedIn = false;
      this.username = "";
      this.password = "";
    },
  },
  mounted() {
    // Check if user is already logged in
    const token = localStorage.getItem("authToken");
    this.isLoggedIn = !!token;
  },
};
</script>
