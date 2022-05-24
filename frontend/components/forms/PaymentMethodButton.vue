<template>
  <div>
    <div
      class="custom-control custom-radio my-1"
      v-for="(button, i) in buttons"
      :key="i"
    >
      <input
        type="radio"
        :id="button.id"
        :value="button.value"
        @input="$emit('input', $event.target.value)"
        :name="button.name"
        class="custom-control-input"
      />
      <label :for="button.id" class="custom-control-label"
        ><img
          :src="button.src"
          :alt="button.value"
          style="height: 32px"
          class="img-fluid"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-control-label {
  display: inline;
}
</style>