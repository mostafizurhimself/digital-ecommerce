<template>
  <div v-if="dark">
    <img
      id="logo"
      class="d-none d-lg-block"
      :src="getWebsiteSettings ? getWebsiteSettings.secondaryMediaUrl : null"
      alt=""
    />
    <img
      id="logo"
      class="d-block d-lg-none"
      :src="getWebsiteSettings ? getWebsiteSettings.primaryMediaUrl : null"
      alt=""
    />
  </div>
  <div v-else>
    <img
      id="logo"
      :src="getWebsiteSettings ? getWebsiteSettings.primaryMediaUrl : null"
      alt=""
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      getWebsiteSettings: "config/getWebsiteSettings"
    })
  }
};
</script>

<style lang="scss">
#logo {
  height: 40px;

  @media only screen and (max-width: 991px) {
    height: 35px;
  }
}
</style>
