<template>
	<nuxt-link :to="`/designs/${item.id}`">
		<div class="image" v-if="item">
			<div>
				<img class="image__img" :src="item.thumbnailMediaUrl ? item.thumbnailMediaUrl : null" alt="" />
			</div>
			<div class="image__overlay">
				<div class="image__overlay--header">
					{{ item.name }}
					<div>
						{{
              item.price
                | currency(
                  $store.state.currency.selectedCurrency,
                  $store.state.currency.exchangeRate
                )
            }}
					</div>
				</div>

				<div class="image__overlay--footer">
					<div>
						{{ item.category.name }}
					</div>

					<div class="d-flex align-items-center">
						<div>
							<i class="fas fa-comments"></i>
							{{ item.totalCommentCount }}
						</div>
						<div class="ml-2">
							<i class="fas fa-eye"></i>
							{{ item.totalView }}
						</div>
						<div class="ml-2">
							<i class="fas fa-star"></i>
							{{ item.totalFavouritesCount }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: "ProductCard",
	props: {
		item: {
			type: Object,
		},
	},
	// mounted () {
	//   console.log(this.$store.state.currency.selectedCurrency);
	// }
};
</script>

<style lang="scss" scoped>
.image {
	position: relative;

	&__img {
		display: block;
		width: 100%;
		object-fit: cover;
	}

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&--header {
			display: flex;
			justify-content: space-between;
			padding: 10px;

			opacity: 0;
			transition: all 300ms;
		}

		&--body {
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;
		}

		&--footer {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			opacity: 0;
			transition: opacity 300ms;
		}
	}

	&__overlay:hover {
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.4),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.4)
		);
		.image__overlay--header {
			opacity: 1;
			opacity: 1;
		}

		.image__overlay--body {
			opacity: 1;
		}

		.image__overlay--footer {
			opacity: 1;
		}
	}
}
</style>
