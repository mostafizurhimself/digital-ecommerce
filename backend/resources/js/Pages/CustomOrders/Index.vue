<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Custom Orders</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-search v-model="filters.search" @reset="reset">
				<div class="mb-4">
					<jet-label value="From" class="mb-2" />
					<jet-input type="date" v-model="filters.from"></jet-input>
				</div>
				<div class="mb-4">
					<jet-label value="To" class="mb-2" />
					<jet-input type="date" v-model="filters.to"></jet-input>
				</div>
			</jet-search>
			<a :href="route('download-excel.custom-orders', searchQuery)" target="_blank" class="btn btn-purple">
				<i class="ti-download mr-2"></i>
				Download
			</a>
		</div>

		<!-- Table -->
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="customOrders.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"> Customer Name</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grand Total</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Grand Total</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Design Note</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in customOrders.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{ row.id }}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm">{{ row.dateFormatted }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.customer.name }}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.grandTotalFormatted}}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.customerGrandTotalFormatted}}
						</td>
						<td class="px-6 py-4 whitespace-nowrap truncate" style="max-width: 200px">
							{{ row.designNote }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<p class="badge" :class="{ 'bg-green-500' : row.status=='completed', 'bg-yellow-500' : row.status=='pending' }">
								{{ row.status }}
							</p>
						</td>

						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<inertia-link class="btn btn-primary mr-2" :href="route('custom-orders.show', row.id)">
								<i class="ti-eye"></i>
							</inertia-link>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Custom Order Added</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="customOrders.links" />
	</div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
	name: "custom-orders",

	data() {
		return {
			filters: {
				search: this.query.search,
				from: this.query.from,
				to: this.query.to,
			},
		};
	},

	props: {
		customOrders: Object,
		query: Object,
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("custom-orders.index");
			}, 150),
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
