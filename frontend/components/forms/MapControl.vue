<template>
  <div class="">
    <div class="mb-5 mx-4 search-wrapper border d-flex align-items-center p-2 justify-content-between">
      <input placeholder="Search by name, city or ZIP code" type="text" name="search" class="text-center text-xl mx-auto border-0 m-0 d-block">
      <button style="width: 55px; height: 50px;" class="rounded-circle bg-primary border-0 text-white"><i class="fas fa-search p-2"></i></button>
    </div>
    <google-map>
      <google-map-marker v-for="(infoWindow, index) in citys" :key="index" :position="infoWindow.position" />
    </google-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citys: [
        {
          title: "Faenza",
          description:
            "Faenza is an Italian city and comune, in the province of Ravenna, Emilia-Romagna, situated 50 kilometres southeast of Bologna.",
          position: {
            lat: 34.731943,
            lng: 135.731617,
          },
        },
        {
          title: "Shenzhen",
          description:
            "Shenzhen, in southeastern China, is a modern metropolis that links Hong Kong to China’s mainland.",
          position: {
            lat: 34.733713,
            lng: 135.735292,
          },
        },
        {
          title: "Bogotá",
          description:
            "Bogotá is Colombia’s sprawling, high-altitude capital. La Candelaria, its cobblestoned center, features colonial-era landmarks like the neoclassical performance hall Teatro Colón and the 17th-century Iglesia de San Francisco.",
          position: {
            lat: 34.734004,
            lng: 135.7366,
          },
        },
        {
          title: "Rome",
          description:
            "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.",
          position: {
            lat: 41.9028,
            lng: 12.4964,
          },
        },
        {
          title: "Moscow",
          description:
            "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury.",
          position: {
            lat: 55.7558,
            lng: 37.6173,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.vue-google-map {
  height: 400px;
}
.search-wrapper {
  border-radius: 100px;
  input {
    margin: 0 !important;
    display: block;
    width: 100%;
  }
  input:focus {
    outline: 0;
  }

  @media (min-width: 576px) {
    width: 80% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  @media (min-width: 992px) {
    width: 40% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  @media (min-width: 1200px) {
    width: 30% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
