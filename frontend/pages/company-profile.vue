<template>
  <div>
    <div class="d-flex w-100">
      <nuxt-link
        to="/profile"
        class="text-xl text-uppercase text-center py-3 flex-grow-1"
      >
        Customer
      </nuxt-link>
      <nuxt-link
        to="/company-profile"
        class="text-xl text-uppercase text-center py-3 flex-grow-1"
      >
        Company
      </nuxt-link>
    </div>
    <div class="container">
      <div class="card border-0 my-5">
        <div class="card-body">
          <form @submit.prevent="update">
            <!-- Company details -->
            <div class="row pb-3">
              <div class="col-12 col-sm-6">
                <h3 class="mb-4">Company details</h3>

                <!-- name -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="name" class="col-form-label">Name</label>
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      disabled="disabled"
                      type="text"
                      id="name"
                      name="name"
                      maxlength="100"
                      required="required"
                      class="form-control"
                      v-model="form.companyName"
                    />
                  </div>
                </div>

                <!-- website -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="website" class="col-form-label">Websites</label>
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      maxlength="100"
                      class="form-control"
                      v-model="form.companyWebsite"
                    />
                  </div>
                </div>

                <!-- email -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="email" class="col-form-label">E-mail</label>
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      v-model="form.companyEmail"
                    />
                  </div>
                </div>

                <!-- vatNumber -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label
                      for="vat-validation-component"
                      class="col-form-label"
                    >
                      EU VAT number
                    </label>
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="vat-validation-component"
                      name="vatNumber"
                      maxlength="30"
                      class="form-control"
                      v-model="form.vatNumber"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <!-- Company all addresses -->
            <div class="row mt-5">
              <!-- Billing address -->
              <div class="col-12 col-sm-6">
                <h3 class="mb-4">Billing address</h3>
                <!-- Street -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="billingStreet" class="col-form-label"
                      >Street</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="billingStreet"
                      name="billingStreet"
                      class="form-control"
                      v-model="form.billingAddress.street"
                    />
                  </div>
                </div>

                <!-- city -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="billingCity" class="col-form-label">City</label>
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="billingCity"
                      name="billingCity"
                      class="form-control"
                      v-model="form.billingAddress.city"
                    />
                  </div>
                </div>

                <!-- Zipcode -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="billingZipCode" class="col-form-label"
                      >ZIP code</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="billingZipCode"
                      name="billingZipCode"
                      class="form-control"
                      v-model="form.billingAddress.zipcode"
                    />
                  </div>
                </div>

                <!-- Country -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="billingCountry" class="col-form-label"
                      >Country</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <div class="my-0">
                      <select
                        id="billingCountry"
                        name="billingCountry"
                        class="form-control"
                        aria-hidden="true"
                        v-model="form.billingAddress.country"
                      >
                        <option selected>Select Country</option>
                        <option v-for="(country, i) in countries" :key="i">
                          {{ country }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Shipping address -->
              <div class="col-12 col-sm-6">
                <h3 class="mb-4">Shipping address</h3>

                <!-- shippingStreet -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="shippingStreet" class="col-form-label"
                      >Street</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="shippingStreet"
                      name="shippingStreet"
                      class="form-control"
                      v-model="form.shippingAddress.street"
                    />
                  </div>
                </div>

                <!-- shippingCity -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="shippingCity" class="col-form-label"
                      >City</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="shippingCity"
                      name="shippingCity"
                      class="form-control"
                      v-model="form.shippingAddress.city"
                    />
                  </div>
                </div>

                <!-- shippingZipCode -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="shippingZipCode" class="col-form-label"
                      >ZIP code</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <input
                      type="text"
                      id="shippingZipCode"
                      name="shippingZipCode"
                      class="form-control"
                      v-model="form.shippingAddress.zipcode"
                    />
                  </div>
                </div>

                <!-- shippingCountry -->
                <div class="form-group row px-0">
                  <div class="col-sm-5">
                    <label for="shippingCountry" class="col-form-label"
                      >Country</label
                    >
                  </div>
                  <div class="col-sm-7 pl-0">
                    <select
                      id="shippingCountry"
                      name="shippingCountry"
                      class="form-control"
                      aria-hidden="true"
                      v-model="form.shippingAddress.country"
                    >
                      <option selected>Select Country</option>
                      <option v-for="(country, i) in countries" :key="i">
                        {{ country }}
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Submit button -->
                <div class="form-group d-flex flex-row-reverse mt-4">
                  <button type="submit" class="btn btn-primary px-4">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyProfile",
  head() {
    return {
      title: "Company Profile"
    };
  },
  middleware({ store, redirect }) {
    if (!store.$auth.loggedIn || !store.$auth.user.company) {
      return redirect("/");
    }
  },

  data() {
    return {
      form: {
        companyName: this.$auth.user.company?.companyName,
        companyWebsite: this.$auth.user.company?.companyWebsite,
        companyEmail: this.$auth.user.company?.companyEmail,
        vatNumber: this.$auth.user.euVatNo,
        service: this.$auth.user.company?.service,
        billingAddress: {
          street: this.$auth.user.company?.billingAddress?.street,
          city: this.$auth.user.company?.billingAddress?.city,
          zipcode: this.$auth.user.company?.billingAddress?.zipcode,
          country: this.$auth.user.company?.billingAddress?.country
        },
        shippingAddress: {
          street: this.$auth.user.company?.shippingAddress?.street,
          city: this.$auth.user.company?.shippingAddress?.city,
          zipcode: this.$auth.user.company?.shippingAddress?.zipcode,
          country: this.$auth.user.company?.shippingAddress?.country
        }
      },

      countries: null
    };
  },

  methods: {
    async update() {
      try {
        const res = await this.$axios.$put(
          `/companies/${this.$auth.user.company.id}`,
          this.form
        );
        this.$toast.success("Company updated successfully");
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
.nuxt-link-active {
  color: white !important;
  background: var(--primary);
}

a {
  background: #f5f5f5;
}
</style>
