<template>
  <div class="custom-control custom-checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      class="custom-control-input"
    />
    <label :for="id" class="custom-control-label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
  props: {
    id: { type: [String, Number] },
    value: { type: [String, Number] },
    modelValue: { default: "" },
    label: { type: String, required: false },
    trueValue: { default: true },
    falseValue: { default: false },
    title: { type: String, required: false },
  },
};
</script>

<style lang="scss" scoped>
</style>
