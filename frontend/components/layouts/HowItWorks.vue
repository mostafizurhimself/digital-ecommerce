<template>
  <div class="containter py-5 bg-cream" v-if="getHowItWorks">
    <h2
      class="text-uppercase text-5xl font-bold mb-0 howitworks-title text-center"
    >
      How It Works
    </h2>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <img
            :src="getHowItWorks.primaryMediaUrl"
            class="img-fluid howitworks-image "
            alt=""
            style=""
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <nuxt-link
          to="/how-it-works"
          class=" btn btn btn-primary section-btn text-xl px-4 howitworks-btn text-center"
        >
          Read More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HowItWorksComp",
  computed: {
    ...mapGetters({
      getHowItWorks: "config/getHowItWorks"
    })
  }
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.howitworks-image {
  padding-top: 10px;
  padding-bottom: 10px;
}

@media only screen and (max-width: 992px) {
  .howitworks-title {
    font-size: 2.7rem;
  }
  .howitworks-btn {
    font-size: 1.1rem;
  }
}

@media only screen and (max-width: 600px) {
  .howitworks-title {
    font-size: 2.3rem;
  }
  .howitworks-btn {
    font-size: 0.9rem;
  }
  .howitworks-image {
    padding-top: 35px;
    padding-bottom: 35px;
  }
}
</style>
