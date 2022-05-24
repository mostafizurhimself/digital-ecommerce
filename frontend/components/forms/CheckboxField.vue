<template>
  <div>
    <label
      class="wrapper flex align-items-center text-capitalize"
      :for="id"
      :class="{ bold: isBold }"
    >
      <input
        :id="id"
        class="checkbox"
        type="checkbox"
        :checked="isChecked"
        :value="value"
        @change="updateInput"
      />
      {{ label }}
      <span
        :class="{ bold: isBold, bigBox: isBigBox, tiny: tiny }"
        class="checkmark"
        v-b-tooltip.hover
        :title="title"
        :style="{
          background: background,
          '--checkmarkColor': checkmarkColor,
          'background-size': 'cover',
        }"
      ></span>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: { type: [String, Number] },
    value: { type: [String, Number] },
    modelValue: { default: "" },
    label: { type: String, required: false },
    trueValue: { default: true },
    falseValue: { default: false },
    isBold: { type: Boolean, default: false },
    bgColor: { type: String, default: "#fff" },
    checkmarkColor: { type: String, default: "#000" },
    isBigBox: { type: Boolean, default: false },
    tiny: { type: Boolean, default: false },
    title: { type: String, required: false },
    gradient: { type: String, required: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
    background() {
      if (this.gradient) {
        return `url(${this.gradient})`;
      }
      return this.bgColor;
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
};
</script>

<style lang="scss" scoped>
label.bold {
  font-size: 23px;
  font-weight: 600;
}

.checkmark.bold {
  top: 7px;
}

.wrapper {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  padding-top: 0;
}
/* Hide the browser's default checkbox */
.wrapper input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  border: 1px solid #d3d3d3;
}

.checkmark.bigBox {
  height: 30px;
  width: 30px;
}

// Checkbox Design
.wrapper {
  // Checkmark tiny
  .checkmark {
    border-radius: 4px;
  }
  .checkmark.tiny {
    height: 17px;
    width: 17px;
    margin-top: 5px;
    // after - mark
    &::after {
      width: 4px;
      height: 8px;
      left: 5px;
      top: 3px;
      border-width: 0 2px 2px 0;
    }
  }
  .checkbox:checked ~ .checkmark.tiny {
    background-color: var(--primary) !important;
  }
}

/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: #fff;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid var(--checkmarkColor);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.wrapper .checkmark.bigBox:after {
  left: 11px;
  top: 5px;
}
</style>
