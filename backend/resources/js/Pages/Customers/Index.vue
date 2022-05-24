<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Customers</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-search v-model="filters.search" @reset="reset">
				<div class="mb-4">
					<jet-label value="Status" class="mb-2" />
					<jet-select v-model="filters.status" track="value" :options="statusOptions"></jet-select>
				</div>
			</jet-search>
			<a :href="route('download-excel.customers', searchQuery)" target="_blank" class="btn btn-purple">
				<i class="ti-download mr-2"></i>
				Download
			</a>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="customers.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							ID
						</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Name
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Email
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Phone
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Last Login
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Status
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Action
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in customers.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.id }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.name }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.email }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.phone }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.lastLoginFormatted }}
						</td>

						<!-- Status -->
						<td class="px-6 py-4 whitespace-nowrap">
							<p class="badge" :class="[row.status == 'active'? 'bg-green-500': 'bg-red-500',]">
								{{ row.status }}
							</p>
						</td>

						<td class="px-6 py-4 whitespace-nowrap flex">
							<div>
								<button class="btn mr-2" :class="{'btn-danger' : row.status =='active', 'btn-success': row.status == 'inactive'}" @click="toggleCustomer(row.id)">
									<active-icon v-if="row.status == 'inactive'"></active-icon>
									<inactive-icon v-else></inactive-icon>
								</button>
							</div>

							<div>
								<inertia-link class="btn btn-primary mr-2" :href="route('customers.show', row.id)">
									<i class="ti-eye"></i>
								</inertia-link>
							</div>

						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Customer Added</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="customers.links" />
	</div>
</template>

<script>
import throttle from "lodash/throttle";
import ActiveIcon from "@/Icons/ActiveIcon.vue";
import InactiveIcon from "@/Icons/InactiveIcon.vue";

export default {
	components: {
		ActiveIcon,
		InactiveIcon,
	},
	props: {
		customers: Object,
		statusOptions: Array,
		query: Object,
	},

	data() {
		return {
			filters: {
				search: this.query.search,
				status: this.query.status,
			},
		};
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("customers.index");
			}, 150),
			deep: true,
		},
	},
	methods: {
		toggleCustomer(id) {
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
							this.route("customers.update-status", id)
						);
					}
				});
		},
	},
};
</script>


<style lang="scss" scoped></style>
