<template>
  <div class="mb-2">
    <!-- Input -->
    <label
      ><span class="mr-2">{{ label }}</span>

      <!-- <span v-if="!validation.$dirty" class="text-danger">*</span> -->
    </label>
    <div class="d-flex align-items-center">
      <input
        :type="type"
        :placeholder="placeholder"
        :required="required"
        class="form-control mr-2"
        :class="{ 'border-danger': validation.$dirty && validation.$anyError }"
        :value="value"
        @input="onDarty"
        @blur="onBlue"
      />
      <i
        v-if="validation.$dirty && !validation.$anyError"
        class="fas fa-check text-success"
        :style="{ 'font-size': '15px' }"
      ></i>
      <i
        v-else
        class="fas fa-circle text-danger"
        :style="{ 'font-size': '8px' }"
      ></i>
    </div>
    <!-- Errors -->
    <span class="text-danger">{{ error[0] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    value: { type: String },
    required: { type: Boolean },
    label: { type: String },
    placeholder: { type: String },
    validation: { type: Object },
    imedieate: { type: Boolean },
    // Validation error
    error: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    if (this.imedieate) {
      this.validation.$touch();
    }
  },
  methods: {
    onDarty(e) {
      this.validation.$touch();
      this.$emit("input", e.target.value);
    },
    onBlue(e) {
      this.validation.$touch();
      this.$emit("blur", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
