<template>
	<div>
		<div class="thumbnails" v-if="relatedProducts">
			<div class="container-fluid ml-0 px-0 row">
				<div class="grid-container">
					<product-card class="grid-item" v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" :item="relatedProduct"></product-card>
				</div>
			</div>

			<div class="d-flex justify-content-center mt-3">
				<nuxt-link to="/designs">
					<button class="btn btn-gray">Browse More</button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		relatedProducts: {
			type: [Array, Object],
			default: [],
		},
	},
};
</script>

<style lang="scss" scoped>
.grid-container {
	display: grid;
	grid-gap: 14px;
	grid-template-columns: auto auto auto auto;
	margin: 14px 0;
}

@media only screen and (max-width: 991px) {
	.grid-container {
		grid-template-columns: auto auto auto;
	}
}

@media only screen and (max-width: 767px) {
	.grid-container {
		grid-template-columns: auto auto;
	}
}

@media only screen and (max-width: 575px) {
	.grid-container {
		grid-template-columns: auto;
	}
}
</style>
