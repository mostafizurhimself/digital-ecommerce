<template>
  <div class="container" v-if="getTermsPageContent && getTermsPageContent.data">
    <!-- header -->
    <div class="row justify-content-center mt-5">
      <div class="col-sm-10 col-md-7 col-lg-6">
        <h1 class="text-center text-uppercase text-6xl terms-title">
          <!-- <span>Digital Ecommerce's business</span> -->
          <b> {{ getTermsPageContent.data.title }}</b>
        </h1>
        <!-- <p class="text-center pt-4 text-xl">
          {{ getTermsPageContent.data.subtitle }}
        </p> -->
      </div>
    </div>

    <div class="row pb-8">
      <div class="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <!-- GENERAL TERMS AND CONDITIONS -->
        <div>
          <h2 class="text-uppercase text-primary pt-8 pb-3 font-bold text-4xl terms-header">
            GENERAL TERMS AND CONDITIONS
          </h2>
          <div v-html="getTermsPageContent.data.general"></div>
        </div>

        <!-- SPECIAL TRADING CONDITIONS -->
        <div>
          <h2 id="special-conditions" class="text-uppercase text-primary pt-8 pb-3 mt-0 font-bold text-4xl terms-header">
            SPECIAL TRADING CONDITIONS
          </h2>
          <div v-html="getTermsPageContent.data.special"></div>
        </div>

        <!-- licence -->
        <div>
          <h2 id="licence" class="text-uppercase text-primary pt-8 pb-3 mt-0 font-bold text-4xl terms-header">
            Licence
          </h2>
          <div v-html="getTermsPageContent.data.license"></div>
        </div>

        <!-- Privacy Policy -->
        <div>
          <h2 id="privacy-policy" class="uppercase text-primary pt-8 pb-3 mt-0 font-bold text-4xl terms-header">
            Privacy Policy
          </h2>
          <div v-html="getTermsPageContent.data.privacy"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "terms-and-conditions",
  head() {
    return {
      title: "Terms and Conditions"
    };
  },
  computed: {
    ...mapGetters({
      getTermsPageContent: "config/getTermsPageContent"
    })
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .terms-title {
    font-size: 2.5rem;
  }

  .terms-header {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 414px) {
  .terms-title {
    font-size: 2.2rem;
  }

  .terms-header {
    font-size: 1.75rem;
  }
}
</style>
