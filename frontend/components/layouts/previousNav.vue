<template>
  <b-navbar
    toggleable="lg"
    :type="type"
    :fixed="fixed"
    class="shadow-sm bottom-shadow zindex"
  >
    <b-navbar-brand>
      <nuxt-link to="/" class="logo">
        <slot name="logo">
          <Logo />
        </slot>
      </nuxt-link>
    </b-navbar-brand>

    <!-- Icons on mobile menu -->

    <!-- 2 problem in mobile menu -->
    <div class="ml-auto d-flex align-items-center d-lg-none">
      <currency-select
        :color="type == 'light' ? 'black' : 'white'"
        class="mr-4"
      ></currency-select>

      <nuxt-link class="nav-icon--mobile mr-4 position-relative" to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <p class="cartDetails bg-primary text-white" v-if="getTotalItem">
          {{ getTotalItem }}
        </p>
      </nuxt-link>

      <!-- Login -->
      <b-dropdown
        right
        variant="link"
        toggle-class="text-decoration-none"
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
          <span v-else class="nav-icon--mobile mr-4">
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

      <nuxt-link class="nav-icon--mobile mr-4" to="/login" v-else>
        <i class="fas fa-user"></i>
      </nuxt-link>
    </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Main Menus -->

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
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
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav
        class="ml-auto d-none d-lg-flex align-items-center justify-content-end"
        style="min-width: 200px"
      >
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

        <!-- Login icon-->
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
            <span v-else class="nav-icon text-decoration-none">
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
        <nuxt-link class="nav-icon text-decoration-none" to="/login" v-else>
          <i class="fas fa-user"></i>
        </nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
