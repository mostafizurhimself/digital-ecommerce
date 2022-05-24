<template>
	<div class="mb-3">
		<label v-if="label" class="form-label">{{ label }}
			<span v-if="required" class="text-danger">*</span>
		</label>
		<div class="d-flex align-items-center">
			<textarea @input="$emit('input', $event.target.value)" class="form-control" :value="value" :rows="rows" :placeholder="placeholder">
      </textarea>
		</div>
		<span class="text-danger">{{ error[0] }}</span>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: false,
		},

		type: {
			type: String,
			default: "text",
			validator: (val) =>
				val == "text" ||
				val == "number" ||
				val == "password" ||
				"email",
		},

		value: {
			type: String,
			default: "",
		},

		placeholder: {
			type: String,
			default: "",
		},

		rows: {
			type: String,
			default: "3",
		},

		required: {
			type: Boolean,
			default: false,
		},

		// Validation error
		error: {
			type: Array,
			default: () => [],
		},
	},

	computed: {
		isValidated() {
			return this.value?.length ? true : false;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
