<template>
  <div class="row justify-content-sm-center my-4">
    <div class="col-sm-8 col-md-6 col-lg-3 px-4 px-lg-0">
      <p class="font-weight-bold text-center h4">User Registration</p>

      <form @submit.prevent="register" class="mt-4">
        <!-- Name -->
        <input-field label="Your Name" v-model="form.name" :error="validationErrors.name" :required="true"></input-field>
        <!-- Surname -->
        <input-field label="Your Surname" v-model="form.surname" :error="validationErrors.surname" :required="true"></input-field>
        <!-- Email -->
        <input-field label="Your Email" type="email" v-model="form.email" :error="validationErrors.email" :required="true"></input-field>
        <!-- Password -->
        <input-field label="Your Password" type="password" v-model="form.password" :error="validationErrors.password" :required="true"></input-field>
        <!-- Confirm Password -->
        <input-field label="Confirm Password" type="password" v-model="form.password_confirmation" :required="true"></input-field>
        <!-- Phone Number -->
        <input-field label="Phone Number" type="number" v-model="form.phone" :error="validationErrors.phone" :required="true"></input-field>
        <!-- billingAddress -->
        <input-field label="Street" v-model="form.billingAddress.street" :error="validationErrors['billingAddress.street']" :required="true"></input-field>
        <!-- billingAddress -->
        <input-field label="City" v-model="form.billingAddress.city" :error="validationErrors['billingAddress.city']" :required="true"></input-field>
        <!-- ZIP code -->
        <input-field label="ZIP code" v-model="form.billingAddress.zipcode" :error="validationErrors['billingAddress.zipcode']" :required="true"></input-field>
        <!-- Country -->
        <select-field label="Country/Region" v-model="form.billingAddress.country" :error="validationErrors['billingAddress.country']" :options="this.countries" :required="true"></select-field>

        <!-- Optional Company details -->
        <div>
          <div class="my-2 form-check">
            <input type="checkbox" class="form-check-input" id="companyDetails" @change="companyDetails = !companyDetails" />
            <label class="form-check-label" for="companyDetails">Company details (optional)</label>
          </div>

          <div v-if="companyDetails">
            <input-field label="Company name (optional)" v-model="form.company" :error="validationErrors.company"></input-field>
            <input-field label="EU VAT registration (optional)" v-model="form.euVatNo" :error="validationErrors.euVatNo"></input-field>
          </div>
        </div>

        <!-- Optional shipping bill-->
        <div>
          <div class="my-2 form-check">
            <input type="checkbox" class="form-check-input" id="shipping" @change="shippingEnabled = !shippingEnabled" />
            <label class="form-check-label" for="shipping">Shipping address is different than billing</label>
          </div>

          <div v-if="shippingEnabled">
            <select-field label="Country/Region" v-model="shippingAddress.country" :error="validationErrors['shippingAddress.country']" :options="this.countries" :required="true"></select-field>
            <input-field label="Street" v-model="shippingAddress.street" :error="validationErrors['shippingAddress.street']" :required="true"></input-field>
            <input-field label="City" v-model="shippingAddress.city" :error="validationErrors['shippingAddress.city']" :required="true"></input-field>
            <input-field label="ZIP code" v-model="shippingAddress.zipcode" :error="validationErrors['shippingAddress.zipcode']" :required="true"></input-field>
          </div>
        </div>

        <div class="mb-3 form-check">
          <input v-model="form.agree" type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            I have read the
            <nuxt-link to="/terms-conditions" :class="{ 'text-dark': form.agree }">terms and conditions</nuxt-link> of the Digital Ecommerce and agree with them
          </label>
        </div>
        <div class="d-flex justify-content-center">
          <button-field label="Register" :disabled="!form.agree"></button-field>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Register",
  head() {
    return {
      title: "Register"
    };
  },
  data() {
    return {
      form: {
        name: null,
        surname: null,
        email: null,
        confirmEmail: null,
        password: null,
        password_confirmation: null,
        company: null,
        euVatNo: null,
        billingAddress: {
          street: null,
          city: null,
          zipcode: null,
          country: null
        }
      },
      shippingAddress: {
        country: null,
        city: null,
        street: null,
        zipcode: null
      },
      countries: [],
      shippingEnabled: false,
      companyDetails: false,
      agree: false
    };
  },
  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },
  methods: {
    async register() {
      let data = this.shippingEnabled
        ? { ...this.form, shippingAddress: this.shippingAddress }
        : this.form;
      try {
        const res = await this.$axios.$post("/register", data);
        this.$toast.success("Register successfully");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  },
  async fetch() {
    const res = await this.$axios.$get("/countries");
    this.countries = res;
  }
};
</script>

<style lang="scss" scoped>
.form-check-input,
.form-check-label {
  cursor: pointer;
  user-select: none;
}
</style>
