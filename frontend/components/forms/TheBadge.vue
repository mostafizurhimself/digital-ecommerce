<template>
  <div :class="`badge bg-${map[value]} text-white text-xs text-capitalize`">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Avilable Value for Badge
     */
    value: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      map: {
        pending: "info",
        completed: "success",
        cancelled: "danger",

        draft: "warning",
        confirmed: "primary",
        partial: "info",
        paid: "success",
        private: "info",
        public: "primary",
        verified: "info"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
