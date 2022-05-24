<template>
  <div>
    <div v-if="product">
      <!-- filter bar -->
      <div class="filter-bar sticky-top shadow-sm">
        <div class="bg-white container-fluid py-1" style="height: 46px">
          <div class="align-items-center h-100 row">
            <div class="
                col-6 col-md-4
                text-left
                pl-2 pl-lg-4
                pb-sm-0
                pt-md-0
                d-flex
                align-items-center
              ">
              <nuxt-link to="/designs" class="
                  bg-transparent
                  border-0
                  d-flex
                  align-items-center
                  text-primary
                ">
                <i class="fas fa-angle-left"></i>
                <span class="ml-2 text-nowrap">BACK TO MARKET</span>
              </nuxt-link>
            </div>
            <div class="col-md-4 d-none d-md-flex justify-content-md-around">
              <h2 class="mb-0 text-sm">
                MARKET
                <span class="text-primary">STOCK DESIGN</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Image area -->
      <div class="contain-gallery container-fluid mb-4 w-100">
        <div class="row">
          <!-- thumbnail -->
          <div class="col-md-8 col-xl-9 w-100 p-0" style="background: #000">
            <div class="w-100">
              <div>
                <client-only>
                  <hero-slider :showSecondary="true" :imgHeight="620" :slides="product.mediaCollection"></hero-slider>
                </client-only>
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="col-md-4 col-xl-3 bg-cream pl-4 pr-4 pl-md-4 pr-md-7">
            <h1 class="mt-2 mt-lg-4 mb-0 pb-0 text-3xl">
              <span> {{ product.name }} </span>
            </h1>
            <div class="text-sm">
              Digital Product: <span>{{ product.sku }}</span>
            </div>
            <h4 class="font-semibold text-md mb-0 mt-2">
              <span class="font-normal text-uppercase">Price:</span>
              <span class="text-uppercase">
                {{
                  product.price
                    | currency(
                      $store.state.currency.selectedCurrency,
                      $store.state.currency.exchangeRate
                    )
                }}
              </span>
              <span class="font-normal text-xs">
                (excl. VAT)
              </span>
            </h4>
            <div class="d-flex flex-column mt-3">
              <addtocart-button :item="product"> </addtocart-button>

              <nuxt-link class="btn btn-secondary mt-2" :to="`/color-changes/${product.id}/detail`">
                COLOR CHANGE
              </nuxt-link>
              <nuxt-link class="btn btn-warning mt-2" :to="`/preview-designs/${product.id}/detail`">
                PREVIEW DESIGN
              </nuxt-link>
            </div>

            <div>
              <hr />
            </div>

            <div class="row mt-3">
              <div class="col-sm-12">
                <div>
                  <h6 class="text-uppercase font-bold text-md">Description</h6>
                  <div class="row">
                    <div class="col-12 pb-2">
                      <span class="font-bold">Category:</span>
                      <span> {{ product.category.name }} </span>
                    </div>
                    <div class="col-12 pb-2">
                      <span class="font-bold">Story of design:</span>
                      <span> {{ product.description }} </span>
                    </div>
                    <div class="col-12 pb-2">
                      <span class="font-bold">Please note:</span>
                      <span class="text-secondary">
                        {{ product.note }}
                      </span>
                    </div>
                    <div class="col-12">
                      <span class="font-bold">Print data format:</span>
                      <span> {{ product.printDataFormat }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <hr />
              </div>
              <div class="col-sm-12 mt-2">
                <div>
                  <h6 class="text-uppercase fs-12">
                    <strong>Recommended material</strong>
                  </h6>
                  <p>{{ product.recommendedMaterial }}</p>
                </div>

                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 fs-12 mb-3">
                <div class="row d-flex align-items-center">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <img src="~/static/images/black-favicon.png" alt="" style="height: 25px" />
                      <b class="text-primary ml-2">Digital Ecommerce </b>
                    </div>
                  </div>
                  <div class="col-6 d-flex align-items-center">
                    <!-- dropdown -->
                    <div>
                      <b-dropdown no-caret variant="link">
                        <template #button-content>
                          <i class="fas fa-share-alt fa-lg"></i>
                        </template>
                        <b-form-group class="bg-transparent m-0 p-0" style="padding-bottom: -8px">
                          <social-share :link="shareLink" :sharingProduct="product" :title="product.name"></social-share>
                        </b-form-group>
                      </b-dropdown>
                    </div>
                    <!-- dropdown ends -->
                    <div class="ml-2" @click="toggleFavorite">
                      <favorite-button :favourite="product.isFavourite"></favorite-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div class="container-fluid">
        <div class="row px-1 px-md-5">
          <div class="card-body">
            <div v-for="tag in product.tags" :key="tag.id" class="badge bg-gray mr-2 mb-2">
              {{ tag.name }}
            </div>
          </div>
        </div>

        <!-- tabs -->
        <div class="row px-1 px-md-5 py-0 border-bottom">
          <div class="card-body pb-0 d-flex">
            <h5 @click="activeComponent = 'similar-designs'" class="mb-0 pb-3" style="cursor: pointer" :class="{ activeTab: activeComponent == 'similar-designs' }">
              SIMILAR DESIGNS
            </h5>
            <h5 @click="activeComponent = 'product-comments'" class="mb-0 pb-3 ml-4" style="cursor: pointer" :class="{ activeTab: activeComponent == 'product-comments' }">
              COMMENTS
            </h5>
          </div>
        </div>
      </div>

      <!-- More designs -->
      <div class="container-fluid">
        <!-- Similar designer -->
        <div class="row px-1 px-md-5 mb-2">
          <div class="card-body">
            <div v-if="activeComponent == 'similar-designs'">
              <similar-designs :relatedProducts="relatedProducts"></similar-designs>
            </div>
            <div v-else>
              <product-comments></product-comments>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialShare from "~/components/forms/SocialShare.vue";
import FavoriteButton from "~/components/forms/FavoriteButton.vue";

import SimilarDesigns from "~/components/layouts/SimilarDesigns.vue";
import ProductComments from "~/components/layouts/ProductComments.vue";

export default {
  name: "ProductSinglePage",
  head() {
    return {
      title: "Design"
    };
  },

  components: {
    SocialShare,
    FavoriteButton,
    SimilarDesigns,
    ProductComments
  },
  data() {
    return {
      activeComponent: "similar-designs",
      product: null,
      relatedProducts: [],
      tags: [],
      windowWidth: ""
    };
  },

  computed: {
    shareLink() {
      return `${process.env.APP_URL}designs/${this.$route.params.id}`;
    },
    newView() {
      return (
        this.$cookies.get("accept-cookie") &&
        !this.$cookies.get(`product-${this.$route.params.id}`)
      );
    }
  },

  methods: {
    async toggleFavorite() {
      if (this.$auth.loggedIn) {
        this.product.isFavourite = !this.product.isFavourite;

        const resFavProd = await this.$axios.post(
          `favourites/${this.$route.params.id}/toggle`
        );

        this.product = resFavProd;
      } else {
        this.$router.push("/login");
      }
    },

    setCookie() {
      const accepted = this.$cookies.get("accept-cookie");
      if (accepted) {
        this.$cookies.set(`product-${this.$route.params.id}`, "visited", {
          path: "/",
          maxAge: 60 * 60 * 24 * 30
        });
      }
    }
  },

  async fetch() {
    //Get the product
    if (this.$auth.loggedIn) {
      const resAuthProd = await this.$axios.$get(
        `products/${this.$route.params.id}/auth`,
        {
          params: { newView: this.newView }
        }
      );
      this.product = resAuthProd.data.product;
      this.relatedProducts = resAuthProd.data.relatedProducts;
    } else {
      const resProd = await this.$axios.$get(
        `products/${this.$route.params.id}`,
        { params: { newView: this.newView } }
      );
      this.product = resProd.data.product;
      this.relatedProducts = resProd.data.relatedProducts;
    }

    this.setCookie();
  }
};
</script>

<style lang="scss" scoped>
.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: transparent;
}

.activeTab {
  border-bottom: 2px solid #c85007;
  color: #c85007;
}
</style>
