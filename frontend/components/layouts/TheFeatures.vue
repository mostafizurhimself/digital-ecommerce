<template>
  <div>
    <div class="container-fluid features">
      <div class="container py-5">
        <!-- Welcome header -->
        <!-- <div class="text-center text-uppercase">
          <h3 class="mb-0">
            <span>Welcome to</span>
          </h3>
          <h2
            class="text-uppercase text-5xl font-bold mb-0 text-primary featured-sitename"
          >
            Digital Ecommerce
          </h2>
        </div> -->

        <!-- Welcome text -->
        <div class="col" v-if="getWelcomeSection">
          <h4 class="text-center font-semibold featured-title">
            {{ getWelcomeSection.data.title }}
          </h4>
          <p class="text-center text-lg px-md-8 featured-desc">
            {{ getWelcomeSection.data.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="py-4 bg-cream container-fluid">
      <!-- Icons -->
      <div class="row">
        <div
          v-for="(feature, i) in getFeatures"
          :key="i"
          class="
            col-6 col-md-3
            text-center
            d-flex
            flex-column
            justify-content-between
            my-3
          "
        >
          <div>
            <img class="featured-icon" :src="feature.primaryMediaUrl" alt="" />
          </div>
          <h3 class="text-dark flex-grow-1 mt-2 featured-texts">
            <span>{{ feature.title }}</span
            ><br />
            <span class="font-bold">{{ feature.subtitle }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getFeatures: "config/getFeatures",
      getWelcomeSection: "config/getWelcomeSection"
    })
  }
};
</script>

<style lang="scss" scoped>
.features span {
  font-size: 80%;
  font-weight: lighter;
}

.featured-icon {
  height: 50px;
}

@media only screen and (max-width: 650px) {
  .featured-texts {
    font-size: 25px;
  }
}
@media only screen and (max-width: 450px) {
  .featured-texts {
    font-size: 20px;
  }
  .featured-sitename {
    font-size: 2.3rem;
  }
  .featured-title {
    font-size: 1.2rem;
  }
  .featured-desc {
    font-size: 1rem;
  }
}
</style>
