<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <div class="d-flex align-items-center">
      <select class="form-control mr-2" :value="value" @input="onDarty" @blur="onDarty" :disabled="disabled" :class="{
          'bg-light': disabled,
          'border-danger': validation.$dirty && validation.$anyError
        }">
        <option value="" v-if="showPlaceholder">{{ placeholder }}</option>
        <option v-for="(option, index) in options" :key="index" :selected="value == getSelected(option)" :value="getValue(option)">
          <slot :option="option">{{ getTitle(option) }}</slot>
        </option>
      </select>

      <i v-if="validation.$dirty && !validation.$anyError" class="fas fa-check text-success" :style="{ 'font-size': '15px' }"></i>
      <i v-else class="fas fa-circle text-danger" :style="{ 'font-size': '8px' }"></i>
    </div>
    <span class="text-danger">{{ error[0] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },

    required: {
      type: Boolean,
      default: false
    },

    options: {
      type: Array,
      default: () => []
    },

    // Option title to show
    title: {
      type: String,
      default: "name"
    },

    // Return value for v-model
    track: {
      type: String,
      default: "id"
    },

    // Select placeholder
    placeholder: {
      type: String,
      default: "Select One"
    },

    // Default selected value
    value: {
      default: ""
    },

    // Control select placeholder
    showPlaceholder: {
      type: Boolean,
      default: true
    },

    // Validation error
    error: {
      type: Array,
      default: () => []
    },

    // Disabled
    disabled: {
      type: Boolean,
      default: false
    },

    validation: { type: Object },
    imedieate: { type: Boolean }
  },
  created() {
    if (this.imedieate) {
      this.validation.$touch();
    }
  },
  methods: {
    onDarty(e) {
      this.validation?.$touch();
      this.$emit("input", e.target.value);
    },
    getSelected(option) {
      if (typeof option == "object") {
        return option[this.track];
      }
      return option;
    },
    getValue(option) {
      if (typeof option == "object") {
        return option[this.track];
      }
      return option;
    },

    getTitle(option) {
      if (typeof option == "object") {
        return option[this.title];
      }
      return option;
    }
  },

  computed: {
    isValidated() {
      return this.value?.length ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
