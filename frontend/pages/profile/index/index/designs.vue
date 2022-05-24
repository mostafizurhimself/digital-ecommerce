<template>
	<div v-if="designs">
		<div class="container">
			<div v-if="!checkLength(designs.data)" class="d-flex justify-content-center my-10 ">
				<h4 class="font-semibold text-center">No matching records found</h4>
			</div>

			<div v-else class="p-0 p-md-5 mx-0 mx-md-5">
				<h3 class="font-semibold profile-tab-header">My designs</h3>

				<div class="row d-flex justify-content-center my-3">
					<div class="text-primary col-lg-6 text-center">
						<span>
							Downloading a design is for your use only, the download link is
							removed after 3 downloads or after 2 years expire
						</span>
					</div>
				</div>
				<table class="table table-borderless table-responsive-sm">
					<thead class="border-bottom">
						<tr>
							<th scope="col">Purchase order date</th>
							<th scope="col">Product Name</th>
							<th scope="col">Image</th>
							<th scope="col">Download</th>
							<th scope="col">Total Download</th>
							<th scope="col">Share</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="design in designs.data" :key="design.id">
							<td>{{ design.order.dateFormatted }}</td>
							<td class="font-semibold">{{ design.product.name }}</td>
							<td>
								<img :src="
                    design.colorChangeId
                      ? design.colorChange.thumbnailMediaUrl
                      : design.product.thumbnailMediaUrl
                  " class="img-fluid" :alt="design.product.name" style="height: 50px" />
							</td>

							<td>
								<a href="javascript:void(0)" @click.prevent="download(design.id)">
									<i class="fas fa-download"></i>
								</a>
							</td>
							<td>{{design.totalDownload}}</td>

							<td>
								<div>
									<b-dropdown no-caret variant="link">
										<template #button-content>
											<i class="fas fa-share-alt fa-lg"></i>
										</template>
										<b-form-group class="bg-transparent m-0 p-0" style="padding-bottom: -8px">
											<social-share :link="shareLink" :sharingProduct="design" :title="design.product.name"></social-share>
										</b-form-group>
									</b-dropdown>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<span v-if="designs === null" class="my-4">No matching records found</span>

				<!-- Pagination -->
				<pagination :data="designs" @pagination-change-page="this.getResults" :limit="2">
					<span slot="prev-nav"><i class="fas fa-backward"></i></span>
					<span slot="next-nav"><i class="fas fa-forward"></i></span>
				</pagination>
			</div>
		</div>
	</div>
</template>

<script>
import SocialShare from "~/components/forms/SocialShare.vue";

export default {
	name: "ProfileDesigns",
	head() {
		return {
			title: "Designs",
		};
	},
	components: {
		SocialShare,
	},
	data() {
		return {
			designs: null,
		};
	},

	computed: {
		shareLink() {
			return `${process.env.APP_URL}designs/${this.$route.params.id}`;
		},
	},
	methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			this.$axios.get("/order-items?page=" + page).then((response) => {
				this.designs = response.data;
			});
		},

		// Download the design file
		download(id) {
			this.$axios({
				url: `/orderItems/${id}/download`,
				method: "POST",
				responseType: "blob",
			})
				.then((response) => {
					var fileURL = window.URL.createObjectURL(
						new Blob([response.data])
					);
					var fileLink = document.createElement("a");

					fileLink.href = fileURL;
					fileLink.setAttribute("download", `design-${id}.zip`);
					document.body.appendChild(fileLink);
					fileLink.click();
				})
				.catch((err) => {
					this.$toast.error("Sorry, you can not download now.");
				});
		},
	},
	fetch() {
		// Fetch initial results
		this.getResults();
	},
};
</script>

<style lang="scss">
.table td {
	vertical-align: middle;
}
</style>
