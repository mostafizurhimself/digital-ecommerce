<template>
	<div v-if="colorChange" class="colorChangeDetailsModalPage">
		<!-- modal button -->
		<b-button @click="showModal" class="bg-primary border-0 px-4 py-2">View</b-button>

		<!-- Modal body -->
		<b-modal id="colorChangeDetailsModal" scrollable centered hide-footer body-class no-stacking no-close-on-backdrop size="lg" :title="'Details of id: ' + colorChange.id" :ref="colorChange.id" class="p-5">
			<!-- details in modal -->
			<div class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Color Change Info</label>
				<table class="table table-borderless border-cream table-responsive-sm mb-0" style="overflow-x: visible;">
					<tbody>
						<tr>
							<th scope="col">Request ID</th>
							<td class="font-bold text-primary">
								{{ colorChange.id }}
							</td>
						</tr>
						<tr>
							<th scope="col">Request Date</th>
							<td>{{ colorChange.dateFormatted }}</td>
						</tr>
						<tr>
							<th scope="col">Product Name</th>
							<td>{{ colorChange.product.name }}</td>
						</tr>
						<!-- color -->
						<tr>
							<th scope="col">Color</th>

							<td colspan="2">
								<table class="table table-bordered table-responsive-sm mb-0">
									<thead class="bg-cream">
										<tr>
											<th class="text-dark-gray font-normal">
												COLOR
											</th>
											<th class="text-dark-gray font-normal">
												DESCRIPTION
											</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(color, i) in colorChange.colors" :key="i">
											<td>
												<div style="height: 24px; width: 24px" :style="{
                            backgroundColor: color.colorCode
                          }"></div>
											</td>
											<td>{{ color.description }}</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr v-if="
                colorChange.description && colorChange.description.length > 0
              ">
							<th scope="col">Description</th>
							<td>{{ colorChange.description }}</td>
						</tr>
						<tr>
							<th scope="col">Status</th>
							<td>
								<the-badge :value="colorChange.status"></the-badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- feedback -->
			<div v-if="colorChange.status == 'completed'" class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Feedback</label>
				<table class="table table-borderless border-cream table-responsive-sm mb-0 mt-5">
					<tbody>
						<tr>
							<th scope="col">Description</th>
							<td>
								{{ colorChange.feedback }}
							</td>
						</tr>

						<tr>
							<th scope="col">Thumbnail</th>
							<td>
								<div style="height: 200px; max-width: 350px. object-fit: contain ">
									<img :src="colorChange.thumbnailMediaUrl" style="height: 100%;" alt="" />
								</div>
							</td>
						</tr>

						<tr>
							<th scope="col">Images</th>
							<td class="">
								<p class="text-dark-gray font-italic font-normal">
									Click the names to see the image
								</p>
								<div v-for="(image, i) in colorChange.mediaCollection" :key="i">
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
	props: {
		colorChange: {
			type: Object,
			required: true,
		},
	},
	methods: {
		showModal() {
			this.$refs[this.colorChange.id].show();
			document.body.classList.add("modal-open");
		},
	},
};
</script>

<style lang="scss">
#colorChangeDetailsModal___BV_modal_outer_ {
	position: absolute;
	z-index: 10400 !important;
}

#colorChangeDetailsModal___BV_modal_body_ {
	padding: 25px 20px 20px 20px !important;
}

.tbody {
	position: relative;
}

.legend {
	position: absolute;
	top: -20px;
	left: 3px;
	background: white;
	padding: 2px 8px;
}
</style>
