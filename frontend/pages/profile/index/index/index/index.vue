<template>
  <div v-if="$auth.user">
    <div class="container">
      <div class="row p-0 p-md-5 mx-0 mx-md-5">
        <div class="col-12 col-md-6">
          <h3 class="profile-tab-header">Profile settings</h3>
          <div class="h5">{{ $auth.user.email }}</div>
          <nuxt-link class="btn btn-secondary px-5" to="/profile/change-password">Change Password</nuxt-link>

          <div class="mt-4">
            <image-control style="width: 250px;" v-model="photo" label="Change your avatar:" :url="$auth.user.profilePhotoUrl" :error="validationErrors.photo">
            </image-control>
            <button @click="submitImage" v-if="photo" class="btn btn-primary mt-1">
              Update Profile Photo
            </button>
          </div>

          <div class="mt-4">
            <!-- <p>
              <nuxt-link class="text-uppercase" to="/profile/shipping"
                >Shipping address</nuxt-link
              >
            </p> -->
            <!-- <p>
							<a class="text-uppercase" href="javascript:void(0)">Settings</a>
						</p> -->
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-md-0">
          <form @submit.prevent="update">
            <input-field label="Name" v-model="form.name" :required="true"></input-field>
            <input-field label="SurName" v-model="form.surname" :required="true"></input-field>
            <input-field label="Street" v-model="form.billingAddress.street" :required="true"></input-field>
            <input-field label="City" v-model="form.billingAddress.city" :required="true"></input-field>
            <input-field label=" zipcode code" v-model="form.billingAddress.zipcode" :required="true"></input-field>
            <select-field class="mb-1" label="Country/Region" v-model="form.billingAddress.country" :options="countries" :required="true"></select-field>
            <input-field label=" Company name" v-model="form.companyName" :required="true"></input-field>
            <input-field label="EU VAT number " v-model="form.euVatNo"></input-field>
            <input-field label="Phone Number" v-model="form.phone" :required="true"></input-field>

            <button-field class="d-flex ml-auto" label="Save"></button-field>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfilePage",

  data() {
    return {
      form: {
        name: this.$auth.user?.name,
        surname: this.$auth.user?.surname,
        companyName: this.$auth.user?.companyName,
        euVatNo: this.$auth.user?.euVatNo,
        phone: this.$auth.user?.phone,
        profilePhotoUrl: this.$auth.user?.profilePhotoUrl,
        billingAddress: {
          street: this.$auth.user?.billingAddress?.street,
          city: this.$auth.user?.billingAddress?.city,
          zipcode: this.$auth.user?.billingAddress?.zipcode,
          country: this.$auth.user?.billingAddress?.country
        }
      },
      photo: null,
      countries: []
    };
  },
  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors"
    })
  },
  methods: {
    async update() {
      try {
        const res = await this.$axios.$post("/profile", this.form);
        this.$auth.setUser(res.data);
        this.$toast.success("Profile updated successfully");
      } catch (error) {
        console.log(error);
      }
    },

    onFileSelected(event) {
      this.photo = event.target.files[0];
    },

    async submitImage() {
      const formData = new FormData();
      formData.append("photo", this.photo);
      const resPhoto = await this.$axios.$post("/profile-photo", formData);
      this.$auth.setUser(resPhoto.data);
      this.photo = null;
      this.$toast.success("Profile photo updated successfully");
    }
  },
  async fetch() {
    const res = await this.$axios.$get("/countries");
    this.countries = res;
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 500px) {
  .profile-tab-header {
    font-size: 1.7rem;
    font-weight: normal;
  }
}
</style>
