<template>
	<button @click="addToCart" class="btn btn-primary px-3">ADD TO CART</button>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		addToCart() {
			this.$store.dispatch("cart/addToCart", this.item);
			this.$router.push("/cart");
		},
	},
};
</script>

<style lang="scss" scoped>
</style>