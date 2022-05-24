<template>
  <div>
    <!-- header texts -->
    <div class="container">
      <div class="row justify-content-center mt-3 mt-sm-5 mt-md-7 mt-lg-10">
        <div class="col-sm-10 col-md-7 col-lg-5">
          <h1 class="text-center text-uppercase text-6xl wrapping-title">
            <span>OUR</span> <b>partners</b>
          </h1>
          <p class="text-center pt-4 text-xl wrapping-subtitle">
            Let’s look around! Find out where you can print the design and where
            you can wrap your car, or as we recommend, both in one place.
          </p>
        </div>
      </div>
    </div>

    <!-- icons -->
    <div class="container-fuild">
      <div
        class="row justify-content-center mt-3 mt-sm-3 mt-md-5 mt-lg-6 px-lg-10 mx-0"
      >
        <div class="col-10 col-sm-9 col-md-8 col-lg-6 justify-content-center">
          <div class="row justify-content-center text-center">
            <div class="col-3">
              <img
                width="43"
                src="/images/icons/blue-pin.png"
                alt="Printing company"
                class="pb-3"
              />
              <h6>
                <i>Printing company</i>
              </h6>
            </div>
            <div class="col-3">
              <img
                width="43"
                src="/images/icons/yellow-pin.png"
                alt="Wrapping company"
                class="pb-3"
              />
              <h6>
                <i><span>Wrapping company</span></i>
              </h6>
            </div>
            <div class="col-3">
              <img
                width="43"
                src="/images/icons/black-pin.png"
                alt="Printing and wrapping company"
                class="pb-3"
              />
              <h6>
                <i><span>Printing and wrapping company</span></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid ">
      <client-only>
        <div class="row">
          <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4 mx-auto my-5">
            <div
              class="d-flex align-items-center border py-2 pl-3 pr-2 search-wrapper"
            >
              <gmap-autocomplete
                class="d-block w-100 border-0 text-2xl ml-2 text-dark text-center"
                placeholder="Search by place, city or country"
                @place_changed="setPlace"
              ></gmap-autocomplete>
              <div
                class="border-0 ml-2 text-2xl bg-primary search-btn"
                role="button"
              >
                <i class="fas fa-search text-white"></i>
              </div>
            </div>
          </div>
          <!-- list of the partners -->
          <div class="col-12 px-0">
            <GmapMap
              :center="center"
              :zoom="zoom"
              style="width: 100%; height: 500px"
            >
              <GmapMarker
                v-for="(com, index) in companies"
                :icon="markIcon(com)"
                :position="markPosition(com)"
                :clickable="true"
                :draggable="false"
                @click="markerClickd(com, index)"
                :key="index"
              />

              <gmap-info-window
                :options="infoOptions"
                :position="infoWindowPos"
                :opened="infoWinOpen"
                @closeclick="infoWinOpen = false"
              >
              </gmap-info-window>
            </GmapMap>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import blackPin from "@/static/images/icons/black-pin.png";
import bluePin from "@/static/images/icons/blue-pin.png";
import yellowPin from "@/static/images/icons/yellow-pin.png";

export default {
  name: "wrapping-companies",
  components: {},
  data() {
    return {
      companies: [],
      zoom: 9,
      center: { lat: 50.757224, lng: 4.285406 },

      infoOptions: {
        content: "",
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: -29,
          height: -97
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null
    };
  },

  methods: {
    setPlace(place) {
      this.zoom = 11;
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
    },
    markerClickd(com, idx) {
      this.infoWindowPos = this.getPosition(com);
      this.infoOptions.content = `
        <div class="text-center font-semibold py-3">
          <p class=" mb-1 text-lg">${com.companyName}</p>
          <p class="">${com.billingAddress.street}, ${com.billingAddress.city}, ${com.billingAddress.country} - ${com.billingAddress.zipcode}</p>
          <a class="text-primar d-block my-2" href="mailto:${com.companyEmail}"><span>Email:</span> ${com.companyEmail}</a>
          <a href="${com.companyWebsite}" target="_blank">Website: ${com.companyWebsite}</a>
        </div>
      `;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    markPosition(com) {
      return this.getPosition(com);
    },
    markIcon(com) {
      let icon = "";
      if (com.service == "printing_company") icon = bluePin;
      if (com.service == "wrapping_company") icon = yellowPin;
      if (com.service == "printing_and_wrapping_company") icon = blackPin;

      return {
        url: icon,
        size: { width: 100, height: 100, f: "px", b: "px" },
        scaledSize: { width: 40, height: 60, f: "px", b: "px" }
      };
    },
    getPosition(com) {
      return {
        lat: parseFloat(com.billingAddress.position.lat),
        lng: parseFloat(com.billingAddress.position.lng)
      };
    }
  },
  async fetch() {
    const resCompany = await this.$axios.get("/companies");
    this.companies = resCompany.data.data;
  }
};
</script>

<style lang="scss">
.search-btn {
  width: 80px;
  height: 67px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  border-radius: 100px;
  box-shadow: 0px 4px 10px #ddd;

  input {
    outline: 0;
  }
}

@media only screen and (max-width: 600px) {
  .wrapping-title {
    font-size: 2.5rem;
  }
  .wrapping-subtitle {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 414px) {
  .wrapping-title {
    font-size: 2.2rem;
  }
  .wrapping-subtitle {
    font-size: 0.9rem;
  }
}
</style>
