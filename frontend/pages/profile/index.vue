<template>
  <div>
    <div class="d-flex w-100">
      <nuxt-link
        to="/profile"
        class="text-xl text-uppercase text-center py-3 flex-grow-1"
      >
        Customer
      </nuxt-link>
      <nuxt-link
        to="/company-profile"
        class="text-xl text-uppercase text-center py-3 flex-grow-1"
        v-if="$auth.user.company"
      >
        Company
      </nuxt-link>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  head() {
    return {
      title: "Profile Settings"
    };
  }
};
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  color: white !important;
  background: var(--primary);
}
.nuxt-link-exact-active {
  color: white !important;
  background: var(--primary);
}

a {
  background: #f5f5f5;
}
</style>
