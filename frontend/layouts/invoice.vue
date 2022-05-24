<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "invoice-layout",

  async fetch() {
    await this.$store.dispatch("config/setConfig", { url: "/config" });
  }
};
</script>
