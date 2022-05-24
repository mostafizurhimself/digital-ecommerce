<template>
	<div v-if="previewDesigns">
		<div v-if="!checkLength(previewDesigns.data)" class="d-flex justify-content-center my-10 ">
			<h4 class="font-semibold text-center">No matching records found</h4>
		</div>

		<div v-else class="container">
			<div class="p-0 p-md-5 mx-0 mx-md-5">
				<h3 class="font-semibold profile-tab-header">
					Preview Design Requests
				</h3>

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
						<tr v-for="previewDesign in previewDesigns.data" :key="previewDesign.id">
							<td>
								Request Id#
								<span class="font-bold text-primary">
									{{ previewDesign.id }}
								</span>
							</td>
							<td>{{ previewDesign.dateFormatted }}</td>
							<td>{{ previewDesign.customerGrandTotalFormatted }}</td>
							<td>
								<the-badge :value="previewDesign.status"></the-badge>
							</td>
							<td>
								<profile-preview-design-modal :previewDesign="previewDesign"></profile-preview-design-modal>
							</td>
							<td>
								<button class="btn btn-warning px-4 py-2 text-nowrap" @click="placeOrder(previewDesign)" :disabled="previewDesign.status == 'pending'">
									Place Order
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<span class="my-4" v-if="previewDesigns == null">No matching records found</span>

				<!-- Pagination -->
				<pagination :data="previewDesigns" @pagination-change-page="this.getResults" :limit="2">
					<span slot="prev-nav"><i class="fas fa-backward"></i></span>
					<span slot="next-nav"><i class="fas fa-forward"></i></span>
				</pagination>
			</div>
		</div>
	</div>
</template>

<script>
import ProfilePreviewDesignModal from "~/components/layouts/ProfilePreviewDesignModal.vue";

export default {
	name: "ProfilePreviewDesign",
	head() {
		return {
			title: "Preview Designs",
		};
	},
	components: {
		ProfilePreviewDesignModal,
	},
	data() {
		return {
			previewDesigns: null,
		};
	},
	methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			this.$axios
				.get("/preview-designs?page=" + page)
				.then((response) => {
					this.previewDesigns = response.data;
				});
		},
		// Place order via color change
		placeOrder(previewDesign) {
			this.$store.dispatch("cart/addToCart", previewDesign.product);
			this.$router.push("/cart");
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
