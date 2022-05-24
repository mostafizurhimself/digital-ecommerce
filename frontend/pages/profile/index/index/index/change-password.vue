<template>
  <div class="p-4 col-md-12 col-lg-4 mx-auto my-5">
    <div class="card">
      <div class="card-header">Change Password</div>
      <form class="card-body" @submit.prevent="reset">
        <input-field
          type="password"
          label="Old Password"
          v-model="form.oldPassword"
          :error="validationErrors.oldPassword"
        ></input-field>
        <input-field
          type="password"
          label="New Password"
          v-model="form.password"
          :error="validationErrors.password"
        ></input-field>
        <input-field
          type="password"
          label="Password Confirmation"
          v-model="form.password_confirmation"
          :error="validationErrors.password_confirmation"
        ></input-field>
        <!-- Buttons -->
        <div class="d-flex justify-content-center">
          <button-field label="Update Password"></button-field>
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
      title: "Change Password"
    };
  },
  data() {
    return {
      form: {
        oldPassword: null,
        password: null,
        password_confirmation: null
      }
    };
  },

  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },

  methods: {
    async reset() {
      this.errMsg = null;
      try {
        await this.$axios.$post("/change-password", this.form);
        this.$router.push("/profile");
        this.$toast.success("Password updated successfully.");
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.error(error.response.data.message);
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
