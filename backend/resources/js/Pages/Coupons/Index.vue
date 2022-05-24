<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Coupons</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-input id="name" type="text" class="mt-1 block w-64" v-model="filters.search" ref="name" autocomplete="name" />
			<inertia-link class="btn btn-primary" :href="route('coupons.create')">
				<span class="mr-2">Create</span>
				<span class="hidden md:inline">Coupon</span>
			</inertia-link>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="coupons.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							ID
						</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Name
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Code
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Amount
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Available From
						</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Available To
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Status
						</th>

						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in coupons.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{ row.id }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.name }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.code }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.amount }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.availableFrom }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.availableTo }}</td>
						<!-- Status -->
						<td class="px-6 py-4 whitespace-nowrap">
							<p class="badge" :class="[row.status == 'published'? 'bg-green-500': 'bg-yellow-500',]">
								{{ row.status }}
							</p>
						</td>
						<td class="px-6 py-4 whitespace-nowrap flex">
							<div v-if="row.status == 'unpublished'">
								<button class="btn btn-success mr-2" @click="updateStatus(row.id)" title="Publish">
									<i class="ti-check-box"></i>
								</button>
							</div>

							<inertia-link class="btn btn-primary mr-2" :href="route('coupons.show', row.id)">
								<i class="ti-eye"></i>
							</inertia-link>

							<inertia-link class="btn btn-primary mr-2" :href="route('coupons.edit', row.id)" v-if="row.status == 'unpublished'">
								<i class="ti-pencil-alt"></i>
							</inertia-link>

							<jet-danger-button @click="destroy(row.id)" v-if="row.status == 'unpublished'">
								<i class="ti-trash"></i>
							</jet-danger-button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Product Added</span>
			</div>
		</div>
		<jet-pagination class="mt-6" :links="coupons.links" />
	</div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
	props: {
		coupons: Object,
		query: Object,
	},

	data() {
		return {
			filters: {
				search: this.query.search,
			},
		};
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("coupons.index");
			}, 150),
			deep: true,
		},
	},

	methods: {
		destroy(id) {
			this.deleteResource(route("coupons.destroy", id));
		},
		updateStatus(id) {
			this.$swal
				.fire({
					title: "Are you sure?",
					text: "",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#EF4444",
					confirmButtonText: "Yes, do it!",
					cancelButtonText: "Cancel",
				})
				.then((result) => {
					if (result.isConfirmed) {
						this.$inertia.post(
							this.route("coupons.update-status", id)
						);
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
