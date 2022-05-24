<template>
  <div>
    <nav
      class="navbar shadow-sm bottom-shadow zindex d-flex align-items-center justify-content-between"
      :class="{ 'navbar-dark': type == 'dark', 'navbar-light': type != 'dark' }"
    >
      <!-- brand -->
      <div class="brand">
        <nuxt-link to="/" class="logo">
          <slot name="logo">
            <Logo />
          </slot>
        </nuxt-link>
      </div>

      <!-- items -->
      <ul class="navbar-menu d-none d-lg-flex flex-row ml-auto p-0 m-0">
        <li class="nav-item mx-lg-4">
          <nuxt-link class="nav-link" to="/designs">CHOOSE DESIGN</nuxt-link>
        </li>

        <li class="nav-item mx-lg-4">
          <nuxt-link class="nav-link" to="/custom-design"
            >CUSTOM DESIGN</nuxt-link
          >
        </li>
        <li class="nav-item mx-lg-4">
          <nuxt-link class="nav-link" to="/partner">BECOME A PARTNER</nuxt-link>
        </li>
      </ul>

      <!-- icons -->
      <div class="ml-auto d-flex align-items-center justify-content-end">
        <!-- Currency icon -->
        <div class="nav-icon mr-2 " style="cursor: pointer;">
          <currency-select></currency-select>
        </div>

        <!-- cart icon -->
        <nuxt-link class="nav-item mr-2" to="/cart">
          <div class="nav-icon position-relative">
            <i class="fas fa-shopping-cart"></i>
            <p class="cartDetails bg-primary text-white" v-if="getTotalItem">
              {{ getTotalItem }}
            </p>
          </div>
        </nuxt-link>

        <!-- Login -->
        <b-dropdown
          right
          variant="link"
          toggle-class="text-decoration-none p-0"
          no-caret
          v-if="$auth.loggedIn"
        >
          <template #button-content>
            <div
              class="nav-icon text-decoration-none"
              v-if="$auth.user.profilePhotoUrl"
              id="profile-photo"
            >
              <img :src="$auth.user.profilePhotoUrl" alt="" />
            </div>
            <span v-else class="nav-icon">
              <i class="fas fa-user"></i>
            </span>
          </template>
          <li>
            <nuxt-link to="/profile" class="text-dark dropdown-item"
              >Profile</nuxt-link
            >
          </li>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-dropdown>

        <nuxt-link class="nav-icon" to="/login" v-else>
          <i class="fas fa-user"></i>
        </nuxt-link>
      </div>
    </nav>

    <!-- Mobile Nav Items -->
    <div class="navbar bg-white d-lg-none shadow-sm" style="height: 60px">
      <ul
        class="nav-menu d-flex p-0 mb-0 justify-content-around h-100 align-items-center w-100"
      >
        <li class=" mx-lg-4 ">
          <nuxt-link class="nav-link text-nowrap font-semibold" to="/designs"
            >CHOOSE DESIGN</nuxt-link
          >
        </li>

        <li class=" mx-lg-4 ">
          <nuxt-link
            class="nav-link text-nowrap font-semibold"
            to="/custom-design"
            >CUSTOM DESIGN</nuxt-link
          >
        </li>
        <li class=" mx-lg-4 ">
          <nuxt-link class="nav-link text-nowrap font-semibold" to="/partner">
            <span class="d-none d-sm-inline">BECOME A PARTNER</span>
            <span class="d-sm-none">PARTNERS </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import { mapGetters } from "vuex";
import CurrencySelect from "../CurrencySelect.vue";
export default {
  name: "TheHeaderComponent",
  props: {
    type: {
      type: String,
      default: "dark"
    },
    fixed: {
      type: String,
      default: ""
    }
  },
  components: {
    Logo,
    CurrencySelect
  },
  computed: {
    headerClasses() {
      return `header ${this.theme} container-fluid text-white shadow-sm`;
    },

    ...mapGetters({
      getWebsiteSettings: "config/getWebsiteSettings",
      getTotalItem: "cart/getTotalItem"
    })
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.navbar-menu {
  list-style: none;
}

.nav-menu {
  list-style: none;
  font-size: 14px;
}

.nav-link {
  padding: 0 0.23rem;
  color: black;
}

.zindex {
  z-index: 9998 !important;
}

#profile-photo {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 991px) {
    height: 30px;
    width: 30px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.cartDetails {
  border-radius: 50%;
  height: 16px;
  width: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>
