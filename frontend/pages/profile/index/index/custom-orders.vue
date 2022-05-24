<template>
	<div v-if="customOrders">
		<div class="container">
			<div v-if="!checkLength(customOrders.data)" class="d-flex justify-content-center my-10 ">
				<h4 class="font-semibold text-center">No matching records found</h4>
			</div>

			<div v-else class="p-0 p-md-5 mx-0 mx-md-5">
				<h3 class="font-semibold profile-tab-header">Custom Orders</h3>

				<table class="table table-borderless table-responsive-sm">
					<thead class="border-bottom">
						<tr>
							<th scope="col">Order ID</th>
							<th scope="col">Order Date</th>
							<th scope="col">Deposit Amount</th>
							<th scope="col">Status</th>
							<th scope="col">Details</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in customOrders.data" :key="order.id">
							<td>
								CO#
								<span class="font-bold text-primary"> {{ order.id }} </span>
							</td>
							<td>{{ order.dateFormatted }}</td>
							<td>{{ order.customerGrandTotalFormatted }}</td>
							<td>
								<the-badge :value="order.status"></the-badge>
							</td>
							<td>
								<profile-custom-orders-modal :orderId="order.id"></profile-custom-orders-modal>
							</td>
							<td>
								<button class="btn btn-warning px-4 py-2  text-nowrap" @click="placeOrder(order)" :disabled="order.status == 'pending'">
									Place Order
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<span class="my-4" v-if="customOrders == null">No matching records found</span>

				<!-- Pagination -->
				<pagination :data="customOrders" @pagination-change-page="this.getResults" :limit="2">
					<span slot="prev-nav"><i class="fas fa-backward"></i></span>
					<span slot="next-nav"><i class="fas fa-forward"></i></span>
				</pagination>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileCustomOrdersModal from "~/components/layouts/ProfileCustomOrdersModal.vue";

export default {
	name: "ProfileCustomOrders",
	head() {
		return {
			title: "Custom Orders",
		};
	},
	components: {
		ProfileCustomOrdersModal,
	},
	data() {
		return {
			customOrders: null,
		};
	},
	methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			this.$axios.get("/custom-orders?page=" + page).then((response) => {
				this.customOrders = response.data;
			});
		},

		// Place order via custom order
		placeOrder(order) {
			this.addToCart(order);
			this.$router.push("/cart");
		},

		// Add the custom order product to cart
		addToCart(order) {
			this.$store.dispatch("cart/addToCart", order.product);
		},
	},
	fetch() {
		// Fetch initial results
		this.getResults();
	},
};
</script>

<style lang="scss" scoped></style>
