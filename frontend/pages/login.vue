<template>
  <div class="p-4 col-md-12 col-lg-4 m-auto">
    <div class="card">
      <div class="card-header">User Login</div>
      <form class="card-body" @submit.prevent="login">
        <input-field
          type="email"
          label="Your Email"
          v-model="form.email"
          :error="validationErrors.email"
        ></input-field>
        <input-field
          type="password"
          label="Your Password"
          v-model="form.password"
          :error="validationErrors.password"
        ></input-field>

        <div class="p-0 form-check">
          <label class="form-check-label" for="rememberPassword"
            >Remember Password
          </label>
          <input
            type="checkbox"
            class="form-check-input ml-1"
            id="rememberPassword"
          />
          <span class="mt-3 d-block forgot-pass">
            <nuxt-link to="/forgot-password">I forgot my password</nuxt-link>
          </span>
        </div>
        <!-- Buttons -->
        <div class="d-flex justify-content-center">
          <button-field label="Log in"></button-field>
        </div>

        <div class="d-flex justify-content-center">
          <nuxt-link to="/register">
            <button class="btn text-white px-4 rounded-pill bg-secondary">
              Register
            </button>
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Login"
    };
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },

  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },

  methods: {
    async login() {
      this.errMsg = null;
      try {
        await this.$auth.loginWith("local", { data: this.form });
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$toast.error("Email or Password doesn't match");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forgot-pass a:hover {
  color: var(--primary);
}
</style>
