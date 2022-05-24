<template>
  <div>
    <!-- Headers -->
    <client-only>
      <hero-slider class="hero-slider" v-if="getCustomPageSlider && getCustomPageSlider.slides.length" :slides="getCustomPageSlider.slides"></hero-slider>
    </client-only>

    <!-- filter bar -->
    <div class="filter-bar sticky-top shadow-sm">
      <div class="bg-white container-fluid py-1 h-100">
        <div class="d-flex justify-content-center align-items-center h-100">
          <h2 class="mb-0 text-sm">
            YOUR
            <span class="text-primary">CUSTOM DESIGN</span>
          </h2>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 mt-3 mb-5">
          <p class="text-center">
            Bright, unique, and trendy- We design this aesthetic car wraps to
            make you stand among the crowds. If you are looking for something
            different to go beyond the rhymes, let us help you with that. We
            love new challenges!
          </p>
        </div>
      </div>
    </div>

    <!-- Multi Step Form -->
    <multi-step-form :stepWidth="stepWidth" :activeLineWidth="activeLineWidth" :stepData="stepData"></multi-step-form>

    <!-- Big Banner Image -->
    <div class="">
      <img :src="getCustomOrderImage.primaryMediaUrl" class="img-fuild container-fluid mx-0 px-0" />
    </div>
  </div>
</template>

<script>
import HeroSlider from "@/components/layouts/HeroSlider.vue";
import MultiStepForm from "@/components/multi-step-form/MultiStepForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "CustomDesign",
  head() {
    return {
      title: "Custom Design"
    };
  },
  components: {
    HeroSlider,
    MultiStepForm
  },
  data() {
    return {
      form: {
        email: "",
        emailConfirm: "",
        name: "",
        surname: "",
        phone: null,
        address: {
          street: "",
          city: "",
          zipcode: "",
          country: ""
        },
        companyName: "",
        vat: "",
        referral: null
      },

      stepData: [
        { title: "PERSONAL DATA", component: "personal-data" },
        { title: "VEHICLE", component: "vehicle" },
        { title: "DESIGN", component: "design" },
        { title: "PRICE", component: "price" },
        { title: "SEND REQUEST", component: "send-request" }
      ],
      stepWidth: "600px",
      windowWidth: null
    };
  },
  computed: {
    ...mapGetters({
      validationErrors: "validation/validationErrors",
      getCustomPageSlider: "config/getCustomPageSlider",
      getCustomOrderImage: "config/getCustomOrderImage"
    })
  },
  methods: {
    activeLineWidth(index) {
      let w;

      // Active Line Control
      if (this.windowWidth <= 650) {
        if (index == 0) w = "44px";
        if (index == 1) w = "108px";
        if (index == 2) w = "171px";
        if (index == 3) w = "235px";
      } else {
        if (index == 0) w = "105px";
        if (index == 1) w = "235px";
        if (index == 2) w = "365px";
        if (index == 3) w = "495px";
      }

      return { width: w };
    },
    responsiveStepWidth() {
      if (this.windowWidth <= 650) {
        this.stepWidth = "300px";
      } else {
        this.stepWidth = "600px";
      }
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.responsiveStepWidth();

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.responsiveStepWidth();
    });
  }
};
</script>

<style lang="scss" scoped>
.filter-bar {
  margin-top: -3px;
  height: 40px;
}

.tabStatus {
  width: 75px;
  padding-top: 9px;
  padding-bottom: 9px;
  height: 37px;
  border-radius: 20px;
  color: #9a9a9a;
}

@media only screen and (max-width: 500px) {
  .hero-slider {
    display: none;
  }
}
</style>
