<template>
  <div v-if="$auth.user">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 my-5">
          <h5 class="text-center mb-4">Update your shipping address</h5>
          <form @submit.prevent="update">
            <input-field
              label="Street"
              v-model="shippingAddress.street"
              :required="true"
            ></input-field>
            <input-field
              label="City"
              v-model="shippingAddress.city"
              :required="true"
            ></input-field>
            <input-field
              label=" zipcode code"
              v-model="shippingAddress.zipcode"
              :required="true"
            ></input-field>
            <select-field
              class="mb-1"
              label="Country/Region"
              v-model="shippingAddress.country"
              :options="countries"
              :required="true"
            ></select-field>
            <div class="d-flex align-items-center justify-content-between">
              <button-field class="d-flex" label="Save"></button-field>
              <nuxt-link to="/profile" class="d-flex align-items-baseline">
                <i class="fas fa-angle-left mr-2"></i>
                <span>Back to Profile</span>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingPage",
  head() {
    return {
      title: "Shipping"
    };
  },
  data() {
    return {
      shippingAddress: {
        street: this.$auth.user?.shippingAddress?.street,
        city: this.$auth.user?.shippingAddress?.city,
        zipcode: this.$auth.user?.shippingAddress?.zipcode,
        country: this.$auth.user?.shippingAddress?.country
      },
      countries: []
    };
  },
  methods: {
    async update() {
      try {
        const res = await this.$axios.$post("/profile", {
          ...this.$auth.user,
          shippingAddress: this.shippingAddress
        });
        this.$toast.success("Shipping address updated successfully");
        this.$auth.setUser(res.data);
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
