<template>
	<div>
		<div v-if="product">
			<!-- filter bar -->
			<div class="filter-bar sticky-top shadow-sm">
				<div class="bg-white container-fluid py-1" style="height: 46px">
					<div class="align-items-center h-100 row">
						<div class="
                col-6 col-md-4
                text-left
                pl-2 pl-lg-4
                pb-sm-0
                pt-md-0
                d-flex
                align-items-center
              ">
							<nuxt-link to="/designs" class="
                  bg-transparent
                  border-0
                  d-flex
                  align-items-center
                  text-primary
                ">
								<i class="fas fa-angle-left"></i>
								<span class="ml-2 text-nowrap">BACK TO MARKET</span>
							</nuxt-link>
						</div>
						<div class="col-md-4 d-none d-md-flex justify-content-md-around">
							<h2 class="mb-0 text-sm">
								MARKET
								<span class="text-primary">STOCK DESIGN</span>
							</h2>
						</div>
					</div>
				</div>
			</div>

			<!-- Image area -->
			<div class="contain-gallery container-fluid mb-4 w-100">
				<div class="row">
					<!-- thumbnail -->
					<div class="col-md-8 col-xl-9 w-100 p-0" style="background: #000">
						<div class="w-100">
							<div>
								<client-only>
									<hero-slider :showSecondary="true" :imgHeight="620" :slides="product.mediaCollection"></hero-slider>
								</client-only>
							</div>
						</div>
					</div>

					<!-- Details -->
					<div class="col-md-4 col-xl-3 bg-cream pl-4 pr-4 pl-md-4 pr-md-7">
						<h1 class="mt-2 mt-lg-4 mb-0 pb-0 text-3xl">
							<span>Color Change</span>
							<span> ({{ product.name }}) </span>
						</h1>
						<div class="text-sm">
							SKU: <span>{{ product.sku }}</span>
						</div>
						<h4 class="font-semibold text-md mb-0 mt-2">
							<span class="font-normal">Price:</span>
							{{
                30
                  | currency(
                    $store.state.currency.selectedCurrency,
                    $store.state.currency.exchangeRate
                  )
              }}
							<span class="font-normal text-xs">
								(excl. VAT)
							</span>
						</h4>
						<div class="d-flex align-items-center mt-3">
							<nuxt-link class="btn btn-primary px-4" :to="`/color-changes/${product.id}/cart`">
								Submit A Request
							</nuxt-link>
						</div>

						<div>
							<hr />
						</div>

						<div class="row mt-3">
							<div class="col-sm-12">
								<div>
									<h6 class="text-uppercase font-bold text-md">Description</h6>
									<div class="row">
										<div class="col-12 pb-2">
											<span class="font-bold">Category:</span>
											<span> {{ product.category.name }} </span>
										</div>
										<div class="col-12 pb-2">
											<span class="font-bold">Change the color! Change the vibe!</span>
											<!-- <span> {{ product.description }} </span> -->
											<br />
											<span>
												Maybe you might have stopped on a car wrap design but
												just left it because you didn’t like the color? We got
												you figured out. Let us change the colors for you.
											</span>
										</div>
										<div class="col-12 pb-2">
											<span class="font-bold">ALERT:</span>
											<span class="text-secondary">
												Color change is an additional feature that you can avail
												of for changing the color of your favorite design on our
												website. Satisfied with the new color? You can purchase
												its print data on your profile.
											</span>
										</div>
										<div class="col-12">
											<span class="font-bold">Print data format:</span>
											<span> {{ product.printDataFormat }} </span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mb-5">
							<div class="col">
								<hr />
							</div>
							<div class="col-sm-12 mt-2">
								<div>
									<h6 class="text-uppercase fs-12">
										<strong>Recommended material</strong>
									</h6>
									<p>{{ product.recommendedMaterial }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Tags -->
			<div class="container-fluid">
				<div class="row px-1 px-md-5">
					<div class="card-body">
						<div v-for="tag in product.tags" :key="tag.id" class="badge bg-gray mr-2 mb-2">
							{{ tag.name }}
						</div>
					</div>
				</div>

				<!-- tabs -->
				<div class="row px-1 px-md-5 py-0 border-bottom">
					<div class="card-body pb-0 d-flex">
						<h5 @click="activeComponent = 'similar-designs'" class="mb-0 pb-3" style="cursor: pointer" :class="{ activeTab: activeComponent == 'similar-designs' }">
							SIMILAR DESIGNS
						</h5>
						<h5 @click="activeComponent = 'product-comments'" class="mb-0 pb-3 ml-4" style="cursor: pointer" :class="{ activeTab: activeComponent == 'product-comments' }">
							COMMENTS
						</h5>
					</div>
				</div>
			</div>

			<!-- More designs -->
			<div class="container-fluid">
				<!-- Similar designer -->
				<div class="row px-1 px-md-5 mb-2">
					<div class="card-body">
						<div>
							<component :is="activeComponent"></component>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialShare from "~/components/forms/SocialShare.vue";
import FavoriteButton from "~/components/forms/FavoriteButton.vue";

import SimilarDesigns from "~/components/layouts/SimilarDesigns.vue";
import ProductComments from "~/components/layouts/ProductComments.vue";

export default {
	name: "ColorChangeDetail",
	head() {
		return {
			title: "Color Change",
		};
	},
	components: {
		SocialShare,
		FavoriteButton,
		SimilarDesigns,
		ProductComments,
	},
	data() {
		return {
			activeComponent: "similar-designs",
			product: null,
			tags: [],
		};
	},

	computed: {
		shareLink() {
			return `${process.env.APP_URL}designs/${this.$route.params.id}`;
		},
	},

	async fetch() {
		//get the product
		if (this.$auth.loggedIn) {
			const resAuthProd = await this.$axios.$get(
				`/products/${this.$route.params.id}/auth`
			);
			this.product = resAuthProd.data.product;
		} else {
			const resProd = await this.$axios.$get(
				`/products/${this.$route.params.id}`
			);
			this.product = resProd.data.product;
		}
	},

	methods: {
		async toggleFavorite() {
			if (this.$auth.loggedIn) {
				this.product.isFavourite = !this.product.isFavourite;

				const resFavProd = await this.$axios.$post(
					`favourites/${this.$route.params.id}/toggle`
				);

				this.product = resFavProd;
			} else {
				this.$router.push("/login");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.dropdown-item:hover,
.dropdown-item:focus {
	color: #16181b;
	text-decoration: none;
	background-color: transparent;
}

.activeTab {
	border-bottom: 2px solid #c85007;
	color: #c85007;
}
</style>
