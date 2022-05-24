<template>
  <div class="hero" v-if="getHeroSection">
    <client-only>
      <video-background
        :src="
          getHeroSection.primaryMediaUrl ? getHeroSection.primaryMediaUrl : null
        "
        :poster="
          getHeroSection.secondaryMediaUrl
            ? getHeroSection.secondaryMediaUrl
            : null
        "
        class="hero__video"
        style=""
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
      >
        <div
          class="
            hero__overlay
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="text-uppercase text-truncate  ">
            {{ getHeroSection.data.title }}
          </h4>
          <h3 class="text-uppercase text-truncate  mt-1 ">
            {{ getHeroSection.data.subtitle }}
          </h3>
          <nuxt-link
            to="/designs"
            title="Market"
            class="
              hero__button
              btn btn-primary
              text-whie text-uppercase
              rounded-pill
              mt-3
              text-3xl
              
            "
            >choose design</nuxt-link
          >
        </div>
      </video-background>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getHeroSection: "config/getHeroSection"
    })
  }
};
</script>

<style lang="scss">
.hero {
  &__video {
    @media only screen and (min-width: 992px) {
      max-height: 550px;
      height: 100vh;
    }
    @media only screen and (max-width: 991px) {
      min-height: 400px;
    }
    @media only screen and (max-width: 500px) {
      min-height: 280px;
    }
  }
  @media only screen and (min-width: 992px) {
    margin-top: -70px;
  }
  &__button {
    font-size: 16px;
    font-weight: 400;
    padding: 8px 1.8rem;

    @media only screen and (max-width: 992px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 10px;
    }
  }
  &__overlay {
    width: 100%;
    height: 100%;

    h4 {
      font-size: 4rem;
      color: #fff;
      margin-bottom: 0;
      padding-bottom: 0;
      line-height: 0.9;
      font-weight: bolder;

      @media only screen and (max-width: 992px) {
        font-size: 3.5rem;
      }
      @media only screen and (max-width: 680px) {
        font-size: 2.8rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 2rem;
      }
    }

    h3 {
      font-size: 4.5rem;
      color: #fff;
      margin-bottom: 0;
      padding-bottom: 0;
      line-height: 0.9;
      font-weight: bolder;

      @media only screen and (max-width: 992px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 680px) {
        font-size: 2.8rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
}
</style>
