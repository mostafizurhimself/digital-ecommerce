<template>
  <label role="button" class="img-check-wrapper">
    <input
      class="check-input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <img :src="src" class="img-fluid" alt="Image" />
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    value: { type: [String, Number] },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
    src: { type: String, required: true },
    max: { type: Number },
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
          if (this.max && this.modelValue.length >= this.max) {
            event.target.checked = false;
            return;
          }
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
};
</script>

<style lang="scss" scoped>
.img-check-wrapper {
  .check-input {
    display: none;
  }
  .img-fluid {
    border: 2px solid transparent;
    padding: 2px;
    border-radius: 2px;
  }
  .check-input:checked ~ .img-fluid {
    border-color: var(--primary);
    opacity: 0.9;
  }
}
</style>
