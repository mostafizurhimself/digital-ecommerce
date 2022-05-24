<template>
  <div class="container mt-7 mb-5">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1 class="text-6xl contact-title"><b>Contact</b></h1>
        <p>
          We’d love to hear from you!
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-8 offset-lg-2">
        <div class="row">
          <!-- left side -->
          <div class="col-md-8">
            <p class="text-2xl font-semibold mb-4">Just Ask</p>
            <form @submit.prevent="save">
              <input-field
                name="Name"
                placeholder="Name"
                v-model="form.name"
                :error="validationErrors.name"
              ></input-field>
              <input-field
                name="email"
                type="email"
                placeholder="E-mail"
                v-model="form.email"
                :error="validationErrors.email"
              ></input-field>
              <input-field
                name="Topic"
                placeholder="Topic"
                v-model="form.subject"
                :error="validationErrors.subject"
              ></input-field>
              <text-field
                rows="10"
                placeholder="Your Text"
                v-model="form.message"
                :error="validationErrors.message"
              ></text-field>
              <button class="btn btn-primary mt-3 px-5" type="submit">
                Submit
              </button>
            </form>
          </div>

          <!-- right side -->
          <div class="col-md-4 mt-5 mt-md-0">
            <p class="text-xl font-semibold mb-4">Email</p>

            <address v-if="getWebsiteSettings && getWebsiteSettings.data">
              <div>
                {{ getWebsiteSettings.data.email }}
              </div>
              <!-- <div>
								{{ getWebsiteSettings.data.city }} -
								{{ getWebsiteSettings.data.zip }}
							</div>
							<div>
								{{ getWebsiteSettings.data.country }}
							</div> -->
            </address>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Contact"
    };
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null
      }
    };
  },
  computed: {
    ...mapGetters({
      getWebsiteSettings: "config/getWebsiteSettings",
      validationErrors: "validation/validationErrors"
    })
  },

  methods: {
    async save() {
      try {
        const res = await this.$axios.post("/contacts", this.form);
        this.$toast.success("Message sent successfully");
        this.reset();
      } catch (error) {
        console.error(error);
      }
    },

    reset() {
      this.form = {
        name: null,
        email: null,
        subject: null,
        message: null
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .contact-title {
    font-size: 2.5rem;
  }
}
</style>
