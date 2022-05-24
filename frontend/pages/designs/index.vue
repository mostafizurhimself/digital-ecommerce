<template>
  <div>
    <!-- Headers -->
    <client-only>
      <hero-slider class="hero-slider" v-if="getDesignPageSlider && getDesignPageSlider.slides.length" :slides="getDesignPageSlider.slides"></hero-slider>
    </client-only>

    <!-- filter bar -->
    <div class="filter-bar sticky-top shadow-sm">
      <div class="bg-white container-fluid py-1">
        <div class="align-items-center h-100 row">
          <div class="col-8 col-md-4 pl-2 d-flex align-items-center">
            <button @click="toggleSidebar" class="btn d-flex align-items-center">
              <i class="fas fa-sliders-h text-sm"></i>
              <p class="ml-1">FILTERS</p>
            </button>

            <div class="ml-2">
              <select v-model="filters.sort" class="custom-select custom-select-sm w-75">
                <option value="created_at,desc">Recent</option>
                <option value="popular,desc">Popular</option>
                <option value="comment,desc">Most commented</option>
                <option value="view,desc">Most viewed</option>
              </select>
            </div>
          </div>

          <div class="col-md-4 d-none d-md-flex justify-content-md-around">
            <h2 class="mb-0 text-sm">
              <span class="text-primary">WRAPMOTIF</span>
              DESIGNS
            </h2>
          </div>

          <div class="col-4">
            <div class="align-items-center d-flex justify-content-end w-100">
              <input type="text" class="form-control search-input" ref="searchInput" v-model="filters.search" />

              <button @click="focusInput" class="btn search ml-1">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Designs -->
    <div class="container-fluid content-area mt-0">
      <div class="row">
        <!-- Left side -->
        <div :class="{ collapsed: collapsed }" class="sidebar pr-3 pr-sm-0" ref="sidebar">
          <div class="container-fluid pr-0 my-4 sticky-top">
            <button @click="resetFilters" class="btn btn-gray form-control">
              Reset all filters
            </button>

            <!-- All Filters -->

            <!-- Colors -->
            <div class="mt-4">
              <h6 class="font-semibold text-lg">COLORS</h6>

              <div>
                <h6 class="text-md">All colors</h6>
                <div class="
                    d-flex
                    flex-row flex-wrap
                    justify-content-start
                    align-content-around
                  ">
                  <checkbox-field v-for="color in colors" :key="color.id" class="colors-padding" :id="`color-id-${color.id}`" :value="color.id" :isBigBox="true" :bgColor="color.code" :title="color.name" :gradient="color.primaryMediaUrl" checkmarkColor="#FFFFFF" v-model="filters.colors"></checkbox-field>
                </div>
              </div>
            </div>

            <!-- Type of wrap -->
            <div class="mt-4">
              <h6 class="font-semibold text-lg">TYPE OF WRAP</h6>

              <div class="mt-3">
                <checkbox-field v-for="category in categories" :key="category.id" :label="category.name" :value="category.id" :id="`category-id-${category.id}`" v-model="filters.categories" class="mb-2"></checkbox-field>
              </div>
            </div>

            <!-- Type of design -->
            <div class="mt-4">
              <h6 class="font-semibold text-lg">TYPE OF DESIGN</h6>

              <div>
                <checkbox-field v-for="tag in tags" :key="tag.id" :id="tag.id" :label="tag.name" :value="tag.id" v-model="filters.tags" class="mb-2"></checkbox-field>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div :class="{ collapsed: !collapsed }" class="content col" ref="content">
          <h3 class="
              pt-4
              pb-1
              text-center text-uppercase
              mb-0
              text-dark-gray
              font-bold
            ">
            universal car wrap designs
          </h3>
          <div class="grid-container">
            <product-card class="grid-item" v-for="(prod, i) in products" :key="i" :item="prod"></product-card>
          </div>
          <client-only>
            <infinite-loading @distance="10" @infinite="handleLoadMore" :identifier="infiniteId">
              <span slot="no-more"></span>
            </infinite-loading>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ChooseDesigns",
  head() {
    return {
      title: "Choose Design"
    };
  },
  data() {
    return {
      products: [],
      categories: [],
      colors: [],
      tags: [],
      page: 1,
      infiniteId: +new Date(),
      filters: {
        categories: [],
        tags: [],
        search: "",
        colors: [],
        sort: "created_at,desc"
      },
      collapsed: true,
      windowWidth: 0
    };
  },

  computed: {
    ...mapGetters({
      getDesignPageSlider: "config/getDesignPageSlider"
    })
  },

  watch: {
    filters: {
      handler: function(newValue, oldValue) {
        this.infiniteId++;
        this.products = [];
        this.page = 1;
      },
      deep: true
    }
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 576) {
      this.$refs.sidebar.classList.remove("collapsed");
      this.$refs.content.classList.add("collapsed");
    }
  },

  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    /**
     * Get the base 64 filter string
     */
    getQueries() {
      let queryString = "";
      for (const key in this.filters) {
        if (this.filters[key] && this.filters[key].length) {
          queryString += `&${key}=${this.filters[key]}`;
        }
      }

      return queryString;
    },
    handleLoadMore($state) {
      this.$axios
        .get(`/products?page=${this.page}${this.getQueries()}`)
        .then(res => {
          const result = res.data.data;
          if (result.length) {
            result.forEach(value => {
              this.products.push(value);
            });
            $state.loaded();
          } else {
            $state.complete();
          }
        });

      this.page = this.page + 1;
    },
    focusInput() {
      this.$refs.searchInput.focus();
    },
    resetFilters() {
      this.filters.categories = [];
      this.filters.tags = [];
      this.filters.search = "";
      this.filters.colors = [];
      this.filters.sort = "created_at,desc";
    }
  },

  async fetch() {
    const resCategory = await this.$axios.get("/categories");
    this.categories = resCategory.data.data;
    const resColor = await this.$axios.get("/colors");
    this.colors = resColor.data.data;
    const resTag = await this.$axios.get("/tags");
    this.tags = resTag.data.data;
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-gap: 14px;
  grid-template-columns: auto auto auto;
  margin: 14px 0;
}

@media only screen and (max-width: 991px) {
  .grid-container {
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 767px) {
  .grid-container {
    grid-template-columns: auto;
  }
}

.sidebar {
  width: 250px;
  transition: all 0.3s ease;
  display: block;
  z-index: 1;
}

@media only screen and (max-width: 576px) {
  .sidebar {
    display: block;
    width: 100%;
  }
}

.sidebar.collapsed {
  margin-left: -250px;
}

@media only screen and (max-width: 576px) {
  .sidebar.collapsed {
    margin-left: -100%;
  }
}

@media only screen and (max-width: 576px) {
  .content.collapsed {
    display: none;
  }
}

.content-area {
  margin-top: -3px;
}

.search {
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  background: #ece9f0;
}

.search:hover {
  background: #d8d2e0;
}

.search-input {
  max-width: 250px;
  border: none;
}

.search-input:focus {
  outline: none;
  border: 1px solid #d8d2e0;
}

.colors-padding {
  margin-bottom: 0.8rem;
  margin-right: 0.8rem;
}

@media only screen and (max-width: 500px) {
  .hero-slider {
    display: none;
  }
}
</style>
