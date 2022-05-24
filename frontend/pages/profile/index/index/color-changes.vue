<template>
	<div v-if="colorChanges">
		<div class="container">
			<div v-if="!checkLength(colorChanges.data)" class="d-flex justify-content-center my-10">
				<h4 class="font-semibold text-center">No matching records found</h4>
			</div>

			<div v-else class="p-0 p-md-5 mx-0 mx-md-5">
				<h3 class="font-semibold profile-tab-header">Color Change Requests</h3>

				<!-- Color changes -->
				<table class="table table-borderless table-responsive-sm">
					<thead class="border-bottom">
						<tr>
							<th scope="col">Request ID</th>
							<th scope="col">Request Date</th>
							<th scope="col">Deposit Amount</th>
							<th scope="col">Status</th>
							<th scope="col">Details</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="colorChange in colorChanges.data" :key="colorChange.id">
							<td>
								Request Id#
								<span class="font-bold text-primary">
									{{ colorChange.id }}
								</span>
							</td>
							<td>{{ colorChange.dateFormatted }}</td>
							<td>{{ colorChange.customerGrandTotalFormatted }}</td>
							<td>
								<the-badge :value="colorChange.status"></the-badge>
							</td>
							<td>
								<!-- Modal -->
								<profile-color-change-modal :colorChange="colorChange"></profile-color-change-modal>
							</td>
							<td>
								<button class="btn btn-warning px-4 py-2  text-nowrap" @click="placeOrder(colorChange)" :disabled="colorChange.status == 'pending'">
									Place Order
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- Pagination -->
				<pagination :data="colorChanges" @pagination-change-page="this.getResults" :limit="2">
					<span slot="prev-nav"><i class="fas fa-backward"></i></span>
					<span slot="next-nav"><i class="fas fa-forward"></i></span>
				</pagination>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileColorChangeModal from "~/components/layouts/ProfileColorChangeModal.vue";

export default {
	name: "ProfileColorChange",
	head() {
		return {
			title: "Color Changes",
		};
	},
	components: {
		ProfileColorChangeModal,
	},
	data() {
		return {
			colorChanges: null,
		};
	},
	watch: {},
	methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			this.$axios.get("/color-changes?page=" + page).then((response) => {
				this.colorChanges = response.data;
			});
		},

		// Place order via color change
		placeOrder(colorChange) {
			this.addToCart(colorChange);
			this.$router.push("/cart");
		},

		// Add the color change product to cart
		addToCart(colorChange) {
			colorChange.product.colorChangeId = colorChange.id;
			colorChange.product.name = colorChange.productName;
			colorChange.product.sku = colorChange.productSku;
			colorChange.product.description = colorChange.productDescription;
			colorChange.product.thumbnailMediaUrl =
				colorChange.thumbnailMediaUrl;
			this.$store.dispatch("cart/addToCart", colorChange.product);
		},
	},
	fetch() {
		// Fetch initial results
		this.getResults();
	},
};
</script>

<style lang="scss" scoped>
.table td {
	vertical-align: middle;
}
</style>
