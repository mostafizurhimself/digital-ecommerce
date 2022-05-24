<template>
  <div class="col-sm-8 col-lg-6 mx-auto">
    <h3 class="text-center mb-3">
      Screw it, let’s do it!
      <br />
      Get your own unique custom design!
    </h3>
    <button
      @click="orderHere"
      :disabled="!collpsedForm"
      class="btn btn-primary text-center d-block mx-auto mb-4"
    >
      ORDER HERE
    </button>

    <div class="row" v-if="!collpsedForm">
      <div class="col-md-8 col-xl-6 mx-auto">
        <form @submit.prevent="handleSubmit">
          <!-- Name  -->
          <validated-text-field
            v-if="!emailExits"
            label="Your name"
            placeholder="John Doe"
            v-model="formData.name"
            :validation="$v.formData.name"
            :error="validationErrors.name"
          ></validated-text-field>

          <!-- surname  -->
          <input-field
            v-if="!emailExits"
            label="Your surname"
            placeholder="Newman"
            v-model="formData.surname"
            :error="validationErrors.surname"
          >
          </input-field>

          <!-- Email  -->
          <validated-text-field
            type="email"
            label="Your Email"
            placeholder="user@example.com"
            v-model="formData.email"
            :validation="$v.formData.email"
            @blur="checkEmailExits"
            :error="validationErrors.email"
          ></validated-text-field>

          <!-- Password -->
          <validated-text-field
            v-if="!$auth.user"
            type="password"
            label="Your Password"
            placeholder="Password"
            v-model="formData.password"
            :validation="$v.formData.password"
            :error="validationErrors.password"
          ></validated-text-field>
          <!-- Confirm -->
          <validated-text-field
            v-if="!$auth.user && !emailExits"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            v-model="formData.password_confirmation"
            :validation="$v.formData.password_confirmation"
          ></validated-text-field>

          <!-- phone  -->
          <validated-text-field
            v-if="!emailExits"
            type="tel"
            label="Phone Number"
            placeholder="+420 777 123 123"
            v-model="formData.phone"
            :validation="$v.formData.phone"
            :error="validationErrors.phone"
          ></validated-text-field>

          <!-- street  -->
          <validated-text-field
            v-if="!emailExits"
            label="Street"
            placeholder="Street"
            v-model="formData.billingAddress.street"
            :validation="$v.formData.billingAddress.street"
            :error="validationErrors.street"
          ></validated-text-field>

          <!-- city  -->
          <validated-text-field
            v-if="!emailExits"
            label="City"
            placeholder="City"
            v-model="formData.billingAddress.city"
            :validation="$v.formData.billingAddress.city"
            :error="validationErrors.city"
          ></validated-text-field>
          <!-- zipcode  -->
          <validated-text-field
            v-if="!emailExits"
            label="Zip Code"
            placeholder="760 06"
            v-model="formData.billingAddress.zipcode"
            :validation="$v.formData.billingAddress.zipcode"
            :error="validationErrors.zipcode"
          ></validated-text-field>

          <!-- Country/Region -->
          <validated-select-field
            v-if="!emailExits"
            v-model="formData.billingAddress.country"
            label="Country/Region"
            :options="countries"
            :validation="$v.formData.billingAddress.country"
          >
          </validated-select-field>
          <!-- Company name (optional) -->
          <input-field
            v-if="!emailExits"
            type="text"
            label="Company name (optional)"
            v-model="formData.companyName"
            placeholder=""
          ></input-field>
          <!-- EU VAT registration (optional) -->
          <input-field
            v-if="!emailExits"
            type="text"
            label="EU VAT registration (optional)"
            v-model="formData.euVatNo"
            placeholder=""
          ></input-field>

          <!-- Register -->
          <button
            v-if="!emailExits && !$auth.user"
            class="btn btn-primary px-5 mt-4 d-block mx-auto"
            type="submit"
            :disabled="$v.$invalid"
          >
            Register
          </button>
          <!-- Login -->
          <button
            v-if="emailExits && !$auth.user"
            class="btn btn-primary px-5 mt-4 d-block mx-auto"
            type="submit"
            :disabled="$v.formData.password.$anyError"
          >
            Login
          </button>
          <!-- Next Button -->
          <button
            v-if="$auth.user"
            class="
              px-4
              py-1
              btn
              m-2
              d-flex
              align-items-center
              bg-primary
              rounded-pill
              text-white
              d-block
              mx-auto
            "
            @click="goNext"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "personal-data",
  data() {
    return {
      collpsedForm: true,
      countries: [],
      formData: {
        email: "",
        password: "",
        password_confirmation: null,
        name: "",
        surname: "",
        phone: "",

        companyName: "",
        euVatNo: "",
        billingAddress: {
          street: "",
          city: "",
          zipcode: "",
          country: ""
        }
      },
      emailExits: false
    };
  },
  validations: {
    formData: {
      email: { required, email },
      password: {
        minLength: minLength(6),
        required
      },
      password_confirmation: {
        sameAsPassword: sameAs("password"),
        minLength: minLength(6)
      },
      name: { required, minLength: minLength(3) },

      phone: { required, minLength: minLength(8) },
      billingAddress: {
        street: { required, minLength: minLength(2) },
        city: { required, minLength: minLength(2) },
        zipcode: { required, minLength: minLength(3) },
        country: { required }
      }
    }
  },
  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },
  created() {
    this.setAuthData();
  },
  methods: {
    ...mapMutations({
      setFields: "customDesign/setFields"
    }),
    handleSubmit() {
      if (this.emailExits) {
        this.login();
      } else {
        this.register();
      }
    },
    async register() {
      this.$v.formData.$touch();
      try {
        const resRegister = await this.$axios.$post("/register", this.formData);
        const resLogin = await this.$auth.loginWith("local", {
          data: {
            email: this.formData.email,
            password: this.formData.password
          }
        });

        this.setAuthData();
        this.$router.push("/custom-design");
        this.goNext();

        this.$toast.success("Register successfully");
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$toast.error("Email or Password doesn't match");
        }
      }
    },
    async login() {
      try {
        const resLogin = await this.$auth.loginWith("local", {
          data: {
            email: this.formData.email,
            password: this.formData.password
          }
        });

        this.emailExits = false;
        this.setAuthData();
        this.$router.push("/custom-design");
        this.goNext();

        this.$toast.success("Login successfully");
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$toast.error("Email or Password doesn't match");
        }
      }
    },
    async checkEmailExits(email) {
      if (
        this.$v.formData.email.$dirty &&
        !this.$v.formData.email.$anyError &&
        !this.$auth.user
      ) {
        const res = await this.$axios.post("/search-customer", {
          email
        });

        if (res.data) this.emailExits = true;
        else this.emailExits = false;
      }
    },
    goNext() {
      this.setFields({
        customerId: this.$auth.user.id
      });
      this.increment();
    },
    setAuthData() {
      const user = this.$auth.user;
      if (user) {
        this.formData = { ...user };
        this.$v.formData.$touch();
      }
    },
    orderHere() {
      const user = this.$auth.user;
      if (user) this.goNext();
      else this.collpsedForm = false;
    }
  },
  async fetch() {
    const res = await this.$axios.$get("/countries");
    this.countries = res;
  },
  watch: {
    emailExits() {
      this.adjustWindow();
    }
  },
  props: {
    increment: {
      type: Function
    },
    adjustWindow: {
      type: Function
    }
  }
};
</script>

<style scoped>
.collapsed-form {
  height: 150px;
  overflow: hidden;
  filter: blur(0.9px);
}
</style>
