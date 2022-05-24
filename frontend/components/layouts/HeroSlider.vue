<template>
  <div>
    <!-- Main slider -->
    <splide :options="primaryOptions" ref="primary">
      <splide-slide v-for="slide in slides" :key="slide.url">
        <img :style="{ imgHeight }" :src="slide.url" />
        <div class="d-flex align-items-center justify-content-center h-100">
          <div class="text-center text-white">
            <h2
              v-if="topText"
              class="text-5xl font-semibold text-center"
              style="margin-top: -200px; color: #fbb040"
            >
              {{ slide.title }}
            </h2>
            <h2
              v-else
              class="text-6xl font-bold tshadow"
              style="text-shadow: 2px 2px 4px #000"
            >
              {{ slide.title }}
            </h2>
            <p class="font-semibold">
              {{ slide.subtitle }}
            </p>
            <a :href="slide.btnLink">
              <button v-if="slide.btnText" class="btn btn-slider mt-3 text-lg">
                {{ slide.btnText }}
              </button>
            </a>
          </div>
        </div>
      </splide-slide>

      <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>
      </template>
    </splide>

    <!-- Thumbnail slider -->
    <splide v-if="showSecondary" :options="secondaryOptions" ref="secondary">
      <splide-slide
        class="secondarySplide"
        v-for="slide in slides"
        :key="slide.url"
      >
        <img :src="slide.url" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  name: "HeroSlider",
  props: {
    slides: {
      type: Array
    },
    topText: {
      type: Boolean,
      default: false
    },
    imgHeight: {
      type: Number,
      default: 500
    },
    showSecondary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      primaryOptions: {
        type: "loop",
        pagination: false,
        cover: true,
        focus: "center",
        rewind: true,
        pagination: true,
        height: this.imgHeight,
        breakpoints: {
          414: {
            height: 240
          },
          500: {
            height: 320
          },
          600: {
            height: 400
          },
          768: {
            height: 450
          },
          992: {
            height: 500
          },
          2500: {
            height: this.imgHeight
          }
        }
      },

      secondaryOptions: {
        type: "slide",
        rewind: true,
        width: 0,
        gap: "1rem",
        pagination: false,
        fixedWidth: 145,
        fixedHeight: 85,
        cover: true,
        focus: "center",
        isNavigation: true,
        arrows: false
      }
    };
  },
  mounted() {
    // Set the sync target.
    if (this.$refs.secondary?.splide) {
      this.$refs.primary.sync(this.$refs.secondary.splide);
    }
  }
};
</script>

<style lang="scss" scoped>
.tshadow {
  text-shadow: 2px 2px 4px #000;
}
.splide__progress__bar {
  height: 0px;
}

.secondarySplide {
  margin-right: 0 !important;
}

.splide--nav > .splide__track > .splide__list > .splide__slide {
  border: none;
}
</style>
