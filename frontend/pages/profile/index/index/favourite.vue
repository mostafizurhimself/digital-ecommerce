<template>
  <div>
    <div class="container" v-if="favoriteProducts">
      <div
        v-if="!checkLength(favoriteProducts)"
        class="d-flex justify-content-center my-10 "
      >
        <h4 class="font-semibold text-center">No matching records found</h4>
      </div>

      <div v-else class="p-0 p-md-5 mx-0 mx-md-5">
        <h3 class="font-semibold profile-tab-header">My favorite designs</h3>

        <div class="row p-4">
          <!-- right section -->
          <div class="col-12">
            <table class="table table-borderless table-responsive-sm">
              <thead class="border-bottom">
                <tr>
                  <th scope="col" class="px-0">Design</th>
                  <th scope="col" class="px-0">Name</th>
                  <th scope="col" class="px-0">Price</th>
                  <th scope="col" class="px-0">Type</th>
                  <th scope="col" class="px-0">View</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="favoriteProduct in favoriteProducts"
                  :key="favoriteProduct.id"
                  style="vertical-align: middle"
                >
                  <td>
                    <!-- image -->
                    <img
                      :src="favoriteProduct.thumbnailMediaUrl"
                      alt=""
                      style="height: 70px"
                    />
                  </td>
                  <td>
                    <p>{{ favoriteProduct.name }}</p>
                  </td>

                  <td>
                    <p>
                      {{
                        favoriteProduct.price
                          | currency(
                            $store.state.currency.selectedCurrency,
                            $store.state.currency.exchangeRate
                          )
                      }}
                    </p>
                  </td>

                  <td>
                    <p>{{ favoriteProduct.category.name }}</p>
                  </td>

                  <td>
                    <!-- view -->
                    <nuxt-link
                      :to="`/designs/${favoriteProduct.id}`"
                      class="btn btn-primary py-1 px-3"
                      >View</nuxt-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileFavourite",
  head() {
    return {
      title: "Favourites"
    };
  },
  data() {
    return {
      favoriteProducts: null
    };
  },

  async fetch() {
    const resFavProds = await this.$axios.$get("/favourites");

    this.favoriteProducts = resFavProds;
  }
};
</script>

<style lang="scss" scoped>
td {
  vertical-align: middle;
}
</style>
