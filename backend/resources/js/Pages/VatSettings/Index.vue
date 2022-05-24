<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Vat Settings</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-input id="name" type="text" class="mt-1 block w-64" v-model="filters.search" ref="name" autocomplete="name" />
			<inertia-link class="btn btn-primary" :href="route('vats.create')">
				<span class="mr-2">Add</span>
				<span class="hidden md:inline">Vat</span>
			</inertia-link>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="vats.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in vats.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{row.id}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.country.name}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.amount}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{row.type}}</td>
						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<inertia-link class="btn btn-primary mr-2" :href="route('vats.edit', row.id)">
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
				<span>No Vats Added</span>
			</div>
		</div>
		<jet-pagination class="mt-6" :links="vats.links" />
	</div>
</template>

<script>
import throttle from "lodash/throttle";

export default {
	metaInfo: { title: "Vats" },
	props: {
		vats: Object,
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
				this.getResults("vats.index");
			}, 150),
			deep: true,
		},
	},

	methods: {
		destroy(id) {
			this.deleteResource(route("vats.destroy", id));
		},
	},
};
</script>
