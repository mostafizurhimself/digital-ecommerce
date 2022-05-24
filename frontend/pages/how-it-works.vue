<template>
  <div>
    <div
      class="container"
      v-if="getHowItWorksPageContent && getHowItWorksPageContent.data"
    >
      <!-- header section -->
      <div class="row justify-content-center mt-5">
        <div class="col-sm-10 col-md-9 offset-sm-1 col-lg-8">
          <h1 class="text-center text-uppercase text-6xl font-bold how-title">
            {{ getHowItWorksPageContent.data.title }}
          </h1>
          <p class="text-center text-xl how-subtitle">
            {{ getHowItWorksPageContent.data.subtitle }}
          </p>
        </div>
      </div>

      <!-- customers section -->
      <div class="row pt-3 pt-sm-5 pt-md-7 pt-lg-10">
        <div class="col-sm-10 col-md-9 offset-sm-1 col-lg-8">
          <h2 class="text-uppercase text-5xl how-header">
            <span>For</span> <b>customers</b>
          </h2>
          <div
            v-html="getHowItWorksPageContent.data.customer"
            class="text-xl how-subtitle"
          ></div>
        </div>
      </div>
      <div class="row px-1 justify-content-lg-start mt-sm-5">
        <div class="col-sm-10 offset-sm-1 col-md-9 offset-lg-1">
          <img :src="getHowItWorks.primaryMediaUrl" class="img-fluid" />
        </div>
      </div>
      <!-- universal section -->
      <div class="row pt-4">
        <div class="col-sm-10 col-md-9 offset-sm-1 col-lg-8">
          <h2 class="text-uppercase text-5xl how-header">
            <b>Universal</b> <span>design</span>
          </h2>
          <div
            v-html="getHowItWorksPageContent.data.universal"
            class="text-xl how-subtitle"
          ></div>
        </div>

        <div class="mt-5 col-sm-10 col-md-9 offset-sm-1 col-lg-8 how-subtitle">
          <p class="text-xl">Wanna read some tutorials?
          <br/>
Here you go:</p>
          <div v-for="(category, index) in categories" :key="index">
            <p class="font-bold text-xl mt-4">TUTORIALS - {{ category.name }}</p>
            <ul>  
              <li
                class="font-semibold text-xl mt-4"
                v-for="(media, index) in category.mediaCollection"
                :key="index"
              >
                <a
                  target="_blank"
                  :href="media.url"
                  title="READ ME - FULL WRAP - 1 STRIPE"
                  >{{ media.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HowItWorksPage",
  head() {
    return {
      title: "How It Works"
    };
  },
  data() {
    return {
      categories: []
    };
  },
  computed: {
    ...mapGetters({
      getHowItWorksPageContent: "config/getHowItWorksPageContent",
      getHowItWorks: "config/getHowItWorks"
    })
  },
  async fetch() {
    const resCategory = await this.$axios.get("/categories");
    this.categories = resCategory.data.data;
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .how-title {
    font-size: 2.5rem;
  }

  .how-header {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 414px) {
  .how-title {
    font-size: 2.2rem;
  }
  .how-subtitle {
    font-size: 1.1rem;
  }
  .how-header {
    font-size: 1.7rem;
  }
}
</style>
