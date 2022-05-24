<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Partners</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-input id="name" type="text" class="mt-1 block w-64" v-model="filters.search" ref="name" autocomplete="name" />
			<inertia-link class="btn btn-primary" :href="route('companies.create')">
				<span class="mr-2">Add</span>
				<span class="hidden md:inline">Partner</span>
			</inertia-link>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="companies.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company Name</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Status
						</th>
						<th>Actions</th>
					</tr>

				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in companies.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{row.id}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.customer.name}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.companyName}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.companyEmail}}</td>
						<td class="px-6 py-4 whitespace-nowrap truncate capitalize" style="max-width:200px">{{beautify(row.service)}}</td>
						<!-- Status -->
						<td class="px-6 py-4 whitespace-nowrap">
							<p class="badge" :class="{'bg-yellow-500' : row.status == 'pending', 'bg-green-500': row.status == 'approved', 'bg-red-500': row.status == 'rejected'}">
								{{ row.status }}
							</p>
						</td>

						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<inertia-link class="btn btn-primary mr-2" :href="route('companies.show', row.id)">
								<i class="ti-eye"></i>
							</inertia-link>

							<inertia-link class="btn btn-primary mr-2" :href="route('companies.edit', row.id)">
								<i class="ti-pencil-alt"></i>
							</inertia-link>

							<jet-danger-button @click="destroy(row.id)">
								<i class="ti-trash"></i>
							</jet-danger-button>
						</td>

					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Partner Added</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="companies.links" />

	</div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
	name: "company",
	props: {
		companies: Object,
		query: Object,
	},

	data() {
		return {
			filters: {
				search: this.query.search,
			},
		};
	},

	methods: {
		beautify(value) {
			return value.replaceAll("_", " ");
		},
		destroy(id) {
			this.deleteResource(route("companies.destroy", id));
		},
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("companies.index");
			}, 150),
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
