<template>
  <div
    class="homepage container-fluid text-center"
    v-if="getDesignSection && getCustomSection && getPartnerSection"
  >
    <!-- Design Section -->
    <div class="row features-row">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div class="text-section">
          <h2 class="text-uppercase text-5xl font-bold features-title">
            {{ getDesignSection.data.title }}
          </h2>
          <h3 class="text-uppercase features-subtitle">
            <span>{{ getDesignSection.data.subtitle }}</span>
          </h3>
          <div class="col-sm-12 col-lg-8">
            <p class="text-lg features-text">
              {{ getDesignSection.data.description }}
            </p>
          </div>
          <nuxt-link
            to="/designs"
            class="btn btn-primary section-btn mt-1 px-4 text-xl mt-4 features-btn"
            >Buy designs</nuxt-link
          >
        </div>
      </div>
      <div class="col-md-6 px-0">
        <div class="h-100">
          <img
            :src="getDesignSection.primaryMediaUrl"
            alt="Custom Design"
            class="grid-image"
          />
        </div>
      </div>
    </div>

    <!-- CUSTOM DESIGN -->
    <div class="row features-row">
      <div
        class="
          col-md-6
          order-md-1
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <div class="text-section">
          <h2 class="text-uppercase text-5xl font-bold features-title">
            {{ getCustomSection.data.title }}
          </h2>
          <h3 class="text-uppercase features-subtitle">
            <span>{{ getCustomSection.data.subtitle }}</span>
          </h3>
          <div class="col-sm-12 col-lg-8">
            <p class="text-lg features-text">
              {{ getCustomSection.data.description }}
            </p>
          </div>
          <nuxt-link
            to="/custom-design"
            class="btn btn-primary section-btn mt-1 text-xl px-4 mt-4 features-btn"
            >Order here</nuxt-link
          >
        </div>
      </div>
      <div class="col-md-6 order-md-0 px-0">
        <div class="h-100">
          <img
            :src="getCustomSection.primaryMediaUrl"
            alt="Custom Design"
            class="grid-image"
          />
        </div>
      </div>
    </div>

    <!-- Wrapping company -->
    <div class="row features-row" v-if="getPartnerSection.data.show == '1'">
      <div class="d-flex align-items-center justify-content-center col-md-6">
        <div class="text-section">
          <h2 class="text-uppercase text-5xl font-bold features-title">
            {{ getPartnerSection.data.title }}
          </h2>
          <h4 class="text-uppercase features-subtitle">
            <span>{{ getPartnerSection.data.subtitle }}</span>
          </h4>
          <div class="col-sm-12 col-lg-7 pb-2 ">
            <p class="text-lg features-text">
              {{ getPartnerSection.data.description }}
            </p>
          </div>
          <nuxt-link
            to="/wrapping-companies"
            class="btn btn-primary section-btn text-xl px-4 mt-4 features-btn"
            >List of our partners</nuxt-link
          >
        </div>
      </div>
      <div class="col-md-6 px-0">
        <div class="h-100">
          <img
            :src="getPartnerSection.primaryMediaUrl"
            alt="Custom Design"
            class="grid-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailedFeaturesComp",
  computed: {
    ...mapGetters({
      getDesignSection: "config/getDesignSection",
      getCustomSection: "config/getCustomSection",
      getPartnerSection: "config/getPartnerSection"
    })
  }
};
</script>

<style lang="scss" scoped>
.features-row {
  min-height: 500px;
}

.text-section {
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 414px) {
  .features-title {
    font-size: 2.3rem;
  }
  .features-subtitle {
    font-size: 1.5rem;
  }
  .features-text {
    font-size: 1rem;
  }
  .features-btn {
    font-size: 0.9rem;
  }
}
</style>
