<template>
  <div class="p-4 col-md-12 col-lg-4 m-auto">
    <div class="card">
      <div class="card-header">Forgot Password</div>
      <form class="card-body" @submit.prevent="requestResetPassword">
        <input-field
          type="email"
          label="Your Email"
          v-model="email"
          :error="validationErrors.email"
        ></input-field>
        <!-- Buttons -->
        <div class="d-flex justify-content-center">
          <button-field
            :disabled="loading"
            label="Send Reset Link"
          ></button-field>
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
      title: "Forgot Password"
    };
  },
  data() {
    return {
      email: null,
      loading: false
    };
  },

  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },

  methods: {
    requestResetPassword() {
      this.loading = true;
      this.$axios.$post("/forgot-password", { email: this.email }).then(
        result => {
          this.response = result.data;
          this.$toast.success("Password reset email sent");
          this.email = null;
          this.loading = false;
        },
        error => {
          this.$toast.error("Something went wrong");
          this.loading = false;
        }
      );
    }
  }
};
</script>
