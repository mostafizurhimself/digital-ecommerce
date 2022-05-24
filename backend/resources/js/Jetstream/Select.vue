<template>
	<select class="
      border-gray-300
      w-full
      focus:border-primary-300
      focus:ring focus:ring-primary-200 focus:ring-opacity-50
      rounded-md
      shadow-sm mt-2
    " :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="select" :disabled="disabled">
		<option value="" v-if="showPlaceholder">{{ placeholder }}</option>
		<option :selected="option['track']" :value="option[track]" v-for="(option, i) in options" :key="i">
			{{option[title]}}
		</option>
	</select>
</template>

<script>
export default {
	props: {
		modelValue: {
			type: [String, Number],
			default: "",
		},
		options: {
			type: [Array, Object],
			required: true,
		},
		// Return value for v-model
		track: {
			type: String,
			default: "id",
		},
		placeholder: {
			type: String,
			default: "Select One",
		},
		// Stack label
		stack: {
			type: Boolean,
			default: false,
		},
		// Disabled
		disabled: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: "name",
		},
		// Control select placeholder
		showPlaceholder: {
			type: Boolean,
			default: true,
		},
	},

	emits: ["update:modelValue"],

	data() {
		return {
			//   data: [
			//       {id: 1, name: "Shakil"}
			//   ]
		};
	},

	methods: {
		focus() {
			this.$refs.select.focus();
		},
	},
};
</script>

