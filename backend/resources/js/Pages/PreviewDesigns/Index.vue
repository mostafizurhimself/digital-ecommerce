<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Preview Designs</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-search v-model="filters.search" @reset="reset">
				<div class="mb-4">
					<jet-label value="Status" class="mb-2" />
					<jet-select v-model="filters.status" track="value" :options="statusOptions"></jet-select>
				</div>
				<div class="mb-4">
					<jet-label value="From" class="mb-2" />
					<jet-input type="date" v-model="filters.from"></jet-input>
				</div>
				<div class="mb-4">
					<jet-label value="To" class="mb-2" />
					<jet-input type="date" v-model="filters.to"></jet-input>
				</div>
			</jet-search>

			<a :href="route('download-excel.preview-designs', searchQuery)" target="_blank" class="btn btn-purple">
				<i class="ti-download mr-2"></i>
				Download
			</a>
		</div>

		<!-- Table -->
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="previewDesigns.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
						<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
						<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deposit Amount</th>
						<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Amount</th>
						<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
						<th scope="col" class=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in previewDesigns.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{ row.id }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.dateFormatted}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.customer.name}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.grandTotalFormatted}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.customerGrandTotalFormatted}}</td>
						<td class="px-6 py-4 whitespace-nowrap truncate" style="max-width: 200px">{{ row.description}}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<p class="badge" :class="{ 'bg-green-500' : row.status=='completed', 'bg-yellow-500' : row.status=='pending' }">
								{{ row.status }}
							</p>
						</td>

						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<inertia-link class="btn btn-primary mr-2" :href="route('preview-designs.show', row.id)">
								<i class="ti-eye"></i>
							</inertia-link>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Color Change Requested</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="previewDesigns.links" />
	</div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
	name: "preview-designs",

	props: {
		previewDesigns: Object,
		statusOptions: Array,
		query: Object,
	},

	data() {
		return {
			filters: {
				search: this.query.search,
				status: this.query.status,
				from: this.query.from,
				to: this.query.to,
			},
		};
	},
	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("preview-designs.index");
			}, 150),
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
