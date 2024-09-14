<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="background relative">
      <div class="triangle triangle-top-left"></div>
      <div class="triangle triangle-bottom-left"></div>
      <div class="triangle triangle-top-right"></div>
      <div class="line line-diagonal"></div>
      <div class="text-center mb-8">
        <img
          alt="img"
          class="mx-auto mb-4"
          height="50"
          src="../assets/images/3.png"
          width="150"
        />
        <h1 class="text-white text-2xl font-bold">CONNEXION</h1>
      </div>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <input
            v-model="email"
            id="email"
            class="w-full px-4 py-2 rounded-full"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            id="password"
            class="w-full px-4 py-2 rounded-full"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div class="text-center mt-6">
          <button class="px-6 py-2 bg-gray-300 rounded-full" type="submit">
            Sign-in
          </button>
          <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
        </div>
      </form>
      <p class="mt-4 text-center">Don't have an account?</p>
      <Routerlink to="/login" class="text-blue-500">Register</Routerlink>
      <div class="text-center mt-4">
        <a class="text-white mx-2" href="#">
          <i class="fab fa-facebook-f"> </i>
        </a>
        <a class="text-white mx-2" href="#">
          <i class="fab fa-twitter"> </i>
        </a>
        <a class="text-white mx-2" href="#">
          <i class="fab fa-instagram"> </i>
        </a>
        <a class="text-white mx-2" href="#">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      const success = await authStore.login(this.email, this.password);

      if (success) {
        this.$router.push("/");
      } else {
        this.error = authStore.error;
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
.background {
  background-color: #2b4c9a;
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  margin: 50px auto;
  position: relative;
}
.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}
.triangle-top-left {
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #d4a73e transparent;
  top: 0;
  left: 0;
}
.triangle-bottom-left {
  border-width: 100px 100px 0 0;
  border-color: #d4a73e transparent transparent transparent;
  bottom: 0;
  left: 0;
}
.triangle-top-right {
  border-width: 0 100px 100px 0;
  border-color: transparent #d4a73e transparent transparent;
  top: 0;
  right: 0;
}
.line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #d4a73e;
}
.line-diagonal {
  transform: rotate(45deg);
  top: 50%;
  left: 0;
}
</style>
