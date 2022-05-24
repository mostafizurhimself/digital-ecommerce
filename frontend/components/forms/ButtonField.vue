<template>
	<button type="submit" :disabled="disabled" class="btn px-4 rounded-pill my-2" :class="[btnClasses]">{{label}}</button>

</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: "Submit",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		btnClasses: {
			type: String,
			default: "btn-primary",
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
