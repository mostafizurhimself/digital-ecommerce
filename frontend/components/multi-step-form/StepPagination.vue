<template>
  <div class="col-12 d-flex justify-content-center mt-3">
    <button
      class="px-4 py-1 m-1 d-flex align-items-center btn"
      role="button"
      @click="decrement"
      v-if="isBack"
    >
      <i class="fas fa-angle-double-left mr-2"></i> Back
    </button>
    <button
      v-if="isNext"
      role="button"
      class="
        px-4
        py-1
        btn
        m-1
        d-flex
        align-items-center
        bg-primary
        rounded-pill
        text-white
      "
      :disabled="disableNext"
      @click="$emit('onNext', $event, increment)"
    >
      Next <i class="fas fa-angle-double-right ml-2"></i>
    </button>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    increment: {
      type: Function,
    },
    decrement: {
      type: Function,
    },
    isNext: {
      type: Boolean,
      default: true,
    },
    isBack: {
      type: Boolean,
      default: true,
    },
    disableNext: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
