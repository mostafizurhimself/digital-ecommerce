<template>
	<div v-if="order">
		<!-- modal button -->
		<b-button class="bg-primary border-0" @click="showModal">View</b-button>

		<!-- Modal body -->
		<b-modal :ref="order.id" id="CustomOrdersModal" class="profileOrdersModal" scrollable centered hide-footer no-stacking no-close-on-backdrop size="lg" :title="'Details of id: ' + order.id">
			<!-- details in modal -->

			<!-- vehicle info -->
			<div class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Vehicle Info</label>
				<table class="table border-cream table-responsive-sm table-borderless mb-0">
					<tbody>
						<tr>
							<th scope="col">Order ID</th>
							<td class="font-bold text-primary">
								{{ order.id }}
							</td>
						</tr>
						<tr>
							<th scope="col">Purchase Order Date</th>
							<td>{{ order.dateFormatted }}</td>
						</tr>
						<tr>
							<th scope="col">Vehicle Name</th>
							<td>{{ order.vehicle.name }}</td>
						</tr>
						<tr>
							<th scope="col">Vehicle Model Name</th>
							<td>{{ order.vehicleModel.name }}</td>
						</tr>
						<tr>
							<th scope="col">Vehicle Manufacture Year</th>
							<td>{{ order.vehicleManufactureYear }}</td>
						</tr>
						<tr>
							<th scope="col">Vehicle Color</th>
							<td>
								<div style="height: 24px; width: 24px" :style="{
                    backgroundColor: order.vehicleColor
                  }"></div>
							</td>
						</tr>
						<tr>
							<th scope="col">Price Range</th>
							<td>
								{{ order.rangeFromFormatted }} - {{ order.rangeToFormatted }}
							</td>
						</tr>
						<tr>
							<th scope="col">Note</th>
							<td>
								{{ order.vehicleNote }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<br />

			<!-- Design info -->
			<div class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Design Info</label>
				<table class="table border-cream table-responsive-sm table-borderless mb-0">
					<tbody>
						<!-- Colors -->
						<tr v-if="order.colors.length > 0">
							<th scope="col">Colors</th>
							<td class="d-flex ">
								<div v-for="(color, i) in order.colors" :key="i" class="mr-2">
									<div style="height: 24px; width: 24px" :style="{
                      backgroundColor: color.code
                    }"></div>
								</div>
							</td>
						</tr>
						<!-- products -->
						<tr v-if="order.products.length > 0">
							<th scope="col">Products</th>
							<td class="d-flex ">
								<div class="mr-2">
									<p>
										{{ order.products.map(product => product.name).join(", ") }}
									</p>
								</div>
							</td>
						</tr>
						<!-- tags -->
						<tr v-if="order.tags.length > 0">
							<th scope="col">Tags</th>
							<td class="d-flex ">
								<div class="mr-2">
									<p>{{ order.tags.map(item => item.name).join(", ") }}</p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- feedback -->
			<div v-if="order.status == 'completed'" class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Feedback</label>
				<table class="table table-borderless border-cream table-responsive-sm mb-0 mt-5">
					<tbody>
						<tr>
							<th scope="col">Description</th>
							<td>
								{{ order.feedback }}
							</td>
						</tr>

						<tr>
							<th scope="col">Thumbnail</th>
							<td>
								<div style="height: 200px; max-width: 350px; object-fit: contain ">
									<img :src="order.product.thumbnailMediaUrl" style="height: 100%" alt="" />
								</div>
							</td>
						</tr>

						<tr>
							<th scope="col">Images</th>
							<td class="">
								<p class="text-dark-gray font-italic font-normal">
									Click the names to see the image
								</p>
								<div v-for="(image, i) in order.product.mediaCollection" :key="i">
									<a :href="image.url" target="_blank" class="font-bold  text-primary">{{ image.name }}</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- details in modal ends -->
		</b-modal>
	</div>
</template>

<script>
export default {
	name: "CustomOrderPageModal",
	props: {
		orderId: {
			type: Number,
		},
	},
	data() {
		return {
			order: null,
		};
	},
	methods: {
		showModal() {
			this.$refs[this.order.id].show();
		},
	},

	async fetch() {
		const resOrder = await this.$axios.$get(
			`/custom-orders/${this.orderId}`
		);

		this.order = resOrder.data;
	},
};
</script>

<style lang="scss">
#CustomOrdersModal___BV_modal_outer_ {
	position: absolute;
	z-index: 10400 !important;
}

#CustomOrdersModal___BV_modal_body_ {
	padding: 25px 20px 20px 20px !important;
}
</style>
