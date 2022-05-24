<template>
  <div>
    <div class="page-wrapper">
      <!-- details section -->
      <div class="container-fluid py-3 py-sm-5 py-md-7 py-lg-10">
        <div class="row justify-content-center">
          <div class="col-sm-7">
            <h2
              class="text-uppercase text-5xl text-center font-bold partner-title"
            >
              {{ getPartnerPageContent.data.title }}
            </h2>

            <div
              v-html="getPartnerPageContent.data.content"
              class="text-xl text-center mt-4 partner-data px-4 px-sm-2"
            ></div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <img
              :src="getPartnerPageContent.primaryMediaUrl"
              class="img-fluid w-100 mx-auto py-2"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <nuxt-link
            to="/partner/become-partner"
            class="px-4 btn btn-primary text-xl partner-btn"
            >Sign up as a Partner</nuxt-link
          >
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
      title: "Partner"
    };
  },

  computed: {
    ...mapGetters({
      getPartnerPageContent: "config/getPartnerPageContent"
    })
  },

  mounted() {
    this.isLoading = false;
  }
};
</script>

<style lang="scss" scoped>
.header-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/images/features/wrapping-company.jpg);
  background-color: #000;
  background-repeat: no-repeat;
  height: 507px;
  background-position: 50%;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .partner-title {
    font-size: 2.5rem;
  }
  .partner-data {
    font-size: 1.2rem;
  }
  .partner-btn {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
@media only screen and (max-width: 414px) {
  .partner-title {
    font-size: 2.2rem;
  }
  .partner-data {
    font-size: 1rem;
  }
  .partner-btn {
    font-size: 0.9rem;
  }
}
</style>
