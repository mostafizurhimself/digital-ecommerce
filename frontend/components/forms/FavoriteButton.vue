<template>
  <div>
    <button title="Favorite" class="border-0 bg-transparent px-0">
      <i
        v-show="favourite == false"
        class="fas fa-star fa-lg fa-outline-2x text-primary"
      ></i>
      <i v-show="favourite == true" class="fas fa-star fa-lg text-primary"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    favourite: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>