<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Comments</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-input id="name" type="text" class="mt-1 block w-64" v-model="filters.search" ref="name" autocomplete="name" />
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="comments.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							ID
						</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Customer
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Product
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Comment
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Commented At
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Action
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in comments.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.id }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.customer.name }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<!-- {{ row.commentable.name }} -->
						</td>

						<td style="max-width:300px" class="px-6 py-4 whitespace-nowrap truncate">
							{{ row.comment }}
						</td>

						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.commentedAt }}
						</td>

						<td class="px-6 py-4 whitespace-nowrap flex">

							<div>
								<inertia-link class="btn btn-primary mr-2" :href="route('comments.show', row.id)">
									<i class="ti-eye"></i>
								</inertia-link>
								<jet-danger-button @click="destroy(row.id)">
									<i class="ti-trash"></i>
								</jet-danger-button>
							</div>

						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Comments Added</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="comments.links" />
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
		comments: Object,
		query: Object,
	},

	data() {
		return {
			filters: {
				search: this.query.search,
				answered: this.query.answered,
			},
			answerOptions: [
				{ value: 1, name: "Answered" },
				{ value: 0, name: "Unaswered" },
			],
		};
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.getResults("comments.index");
			}, 150),
			deep: true,
		},
	},

	methods: {
		destroy(id) {
			this.deleteResource(route("comments.destroy", id));
		},
	},
};
</script>

<style lang="scss" scoped></style>

