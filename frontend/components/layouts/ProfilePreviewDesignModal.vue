<template>
	<div v-if="previewDesign">
		<!-- modal button -->
		<b-button @click="showModal" class="bg-primary border-0  px-4 py-2">View</b-button>

		<!-- Modal body -->
		<b-modal id="previewDesignModal" scrollable centered hide-footer no-stacking no-close-on-backdrop size="lg" :title="'Details of id: ' + previewDesign.id" :ref="previewDesign.id" class="p-5">
			<!-- details in modal -->
			<div class="position-relative">
				<label class="text-primary text-xl mb-0 legend">Preview Design Info</label>
				<table class="table table-borderless border-cream mb-0">
					<tbody>
						<tr>
							<th scope="col">Request ID</th>
							<td class="font-bold text-primary">
								{{ previewDesign.id }}
							</td>
						</tr>
						<tr>
							<th scope="col">Request Date</th>
							<td>{{ previewDesign.dateFormatted }}</td>
						</tr>

						<tr>
							<th scope="col">Vehicle Name</th>
							<td>{{ previewDesign.vehicle.name }}</td>
						</tr>
						<tr>
							<th scope="col">Vehicle Model</th>
							<td>{{ previewDesign.vehicleModel.name }}</td>
						</tr>

						<tr v-if="
                previewDesign.description &&
                  previewDesign.description.length > 0
              ">
							<th scope="col">Description</th>
							<td>{{ previewDesign.description }}</td>
						</tr>

						<tr>
							<th scope="col">Status</th>
							<td>
								<the-badge :value="previewDesign.status"></the-badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- feedback -->

			<div class="position-relative" v-if="previewDesign.status == 'completed'">
				<label class="text-primary text-xl mb-0 legend">Feedback</label>

				<table class="table table-responsive-sm border-cream table-borderless mt-5 mb-0">
					<tbody>
						<tr>
							<th scope="col">Description</th>
							<td>
								{{ previewDesign.feedback }}
							</td>
						</tr>

						<tr>
							<th scope="col">Thumbnail</th>
							<td>
								<div class="thumbnail" style="height: 200px; max-width: 350px; object-fit: contain ">
									<img :src="previewDesign.thumbnailMediaUrl" style="height: 100%;" alt="image" />
								</div>
							</td>
						</tr>

						<tr>
							<th scope="col">Images</th>
							<td class="">
								<p class="text-dark-gray font-italic font-normal">
									Click the names to see the image
								</p>
								<div v-for="(image, i) in previewDesign.mediaCollection" :key="i">
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
		previewDesign: {
			type: Object,
			required: true,
		},
	},
	methods: {
		showModal() {
			this.$refs[this.previewDesign.id].show();
		},
	},
};
</script>

<style lang="scss">
#previewDesignModal___BV_modal_outer_ {
	position: absolute;
	z-index: 10400 !important;
}

#previewDesignModal___BV_modal_body_ {
	padding: 25px 20px 20px 20px !important;
}

.thumbnail {
	max-height: 200px;
	max-width: 350px;

	@media only screen and (max-width: 500px) {
		height: 100px;
		width: 150px;
	}
}
</style>
