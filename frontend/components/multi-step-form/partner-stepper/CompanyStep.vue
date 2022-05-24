<template>
  <div class="col-sm-8 col-lg-6 mx-auto">
    <div class="row">
      <div class="col-md-8 col-xl-6 mx-auto">
        <h3 class="font-semibold">New company register form</h3>
        <!-- Company Details -->
        <h5 class="font-bold mt-4">Company Details</h5>
        <!-- Company Name -->
        <validated-text-field label="Company name" v-model="form.companyName" :validation="$v.form.companyName" :error="validationErrors.companyName"></validated-text-field>

        <!-- Company email -->
        <validated-text-field type="email" label="Company Email" v-model="form.companyEmail" :validation="$v.form.companyEmail" :error="validationErrors.companyEmail"></validated-text-field>

        <!-- Website -->
        <input-field type="url" label="Website" v-model="form.companyWebsite" placeholder="http://www.example.com" :error="validationErrors.companyWebsite"></input-field>

        <!-- Services -->
        <validated-select-field v-model="form.service" label="Services" :options="allServices" :validation="$v.form.service" track="value">
        </validated-select-field>
        <!-- Billing Address -->
        <h5 class="font-bold mt-4">Address</h5>
        <!-- street  -->
        <validated-text-field label="Street" v-model="form.billingAddress.street" :validation="$v.form.billingAddress.street" :error="validationErrors.street"></validated-text-field>

        <!-- city  -->
        <validated-text-field label="City" v-model="form.billingAddress.city" :validation="$v.form.billingAddress.city" :error="validationErrors.city"></validated-text-field>
        <!-- zipcode  -->
        <validated-text-field label="Zip Code" v-model="form.billingAddress.zipcode" :validation="$v.form.billingAddress.zipcode" :error="validationErrors.zipcode"></validated-text-field>

        <!-- Country/Region -->
        <validated-select-field v-model="form.billingAddress.country" label="Country/Region" :options="countries" :validation="$v.form.billingAddress.country">
        </validated-select-field>

        <!-- EU VAT registration (optional) -->
        <input-field type="text" label="EU VAT registration (optional)" v-model="form.euVatNo" :error="validationErrors.euVatNo" placeholder=""></input-field>

        <!-- Checkbox -->
        <small-checkbox id="shipping-checkbox" label="Delivery address is identical with billing address" v-model="shippingIdentical"></small-checkbox>

        <!-- Delivery Address -->
        <div v-if="!shippingIdentical">
          <h5 class="font-bold mt-4">Delivery Address</h5>
          <!-- street  -->
          <validated-text-field label="Street" placeholder="Street" v-model="form.shippingAddress.street" :validation="$v.form.shippingAddress.street" :error="validationErrors.street"></validated-text-field>

          <!-- city  -->
          <validated-text-field label="City" placeholder="City" v-model="form.shippingAddress.city" :validation="$v.form.shippingAddress.city" :error="validationErrors.city"></validated-text-field>

          <!-- zipcode  -->
          <validated-text-field label="Zip Code" placeholder="760 06" v-model="form.shippingAddress.zipcode" :validation="$v.form.shippingAddress.zipcode" :error="validationErrors.zipcode"></validated-text-field>

          <!-- Country/Region -->
          <validated-select-field v-model="form.shippingAddress.country" label="Country/Region" :options="countries" :validation="$v.form.shippingAddress.country">
          </validated-select-field>
        </div>

        <step-pagination class="mt-5" :decrement="decrement" :isNext="false">
          <template>
            <button @click="saveData" :disabled="$v.$invalid" class="btn btn-primary px-5">
              Send
            </button>
          </template>
        </step-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, requiredIf } from "vuelidate/lib/validators";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "company-step",
  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors",
      allServices: "config/getServiceOptions"
    })
  },
  data() {
    return {
      form: {
        companyName: "",
        companyEmail: "",

        companyWebsite: "",
        service: "",
        euVatNo: null,
        billingAddress: {
          street: "",
          city: "",
          zipcode: "",
          country: ""
        },
        shippingAddress: {
          street: "",
          city: "",
          zipcode: "",
          country: ""
        }
      },
      countries: [],
      shippingIdentical: true
    };
  },
  validations: {
    form: {
      companyName: {
        required
      },
      companyEmail: {
        required,
        email
      },

      service: {
        required
      },
      billingAddress: {
        street: {
          required
        },
        city: {
          required
        },
        zipcode: {
          required
        },
        country: {
          required
        }
      },
      shippingAddress: {
        street: {
          required: requiredIf(function(val) {
            return !this.shippingIdentical;
          })
        },
        city: {
          required: requiredIf(function(val) {
            return !this.shippingIdentical;
          })
        },
        zipcode: {
          required: requiredIf(function(val) {
            return !this.shippingIdentical;
          })
        },
        country: {
          required: requiredIf(function(val) {
            return !this.shippingIdentical;
          })
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      setPartner: "partner/setPartner"
    }),
    ...mapActions({
      sendPartnerData: "partner/sendPartnerData"
    }),
    saveData() {
      const newForm = { ...this.form };
      if (this.shippingIdentical) {
        delete newForm.shippingAddress;
      }
      this.setPartner(newForm);
      this.sendPartnerData();
    }
  },
  watch: {
    emailExits() {
      this.adjustWindow();
    }
  },
  props: {
    decrement: {
      type: Function
    },
    adjustWindow: {
      type: Function
    }
  },

  async fetch() {
    const res = await this.$axios.$get("/countries");
    this.countries = res;
  }
};
</script>

<style lang="scss" scoped></style>
