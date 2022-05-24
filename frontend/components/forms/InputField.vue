<template>
	<div class="mb-3">
		<label v-if="label" class="form-label">{{ label }}
			<span v-if="required" class="text-danger">*</span>
		</label>
		<div class="d-flex align-items-center">
			<input class="form-control" :type="type" :value="value" @input="$emit('input', $event.target.value)" ref="input" :placeholder="placeholder" />
		</div>
		<span class="text-danger">{{ error[0] }}</span>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
		},

		type: {
			type: String,
			default: "text",
			validator: (val) =>
				val == "text" ||
				val == "number" ||
				val == "password" ||
				"email" ||
				"color",
		},

		value: {
			type: String,
			default: "",
		},

		placeholder: {
			type: String,
			default: "",
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
