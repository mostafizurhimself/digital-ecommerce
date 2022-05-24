<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Messages</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-search v-model="filters.search" @reset="reset">
				<div class="mb-4">
					<jet-label value="Status" class="mb-2" />
					<jet-select v-model="filters.answered" track="value" :options="answerOptions"></jet-select>
				</div>
			</jet-search>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="contacts.data.length">
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
							Subject
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Answered
						</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
							Action
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in contacts.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.id }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.name }}
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							{{ row.email }}
						</td>

						<td style="max-width:300px" class="px-6 py-4 whitespace-nowrap truncate">
							{{ row.subject }}
						</td>

						<!-- Answered -->
						<td class="px-6 py-4 whitespace-nowrap">
							<p :class="[row.answered == true ? 'text-green-500': 'text-red-500',]">
								<spna v-if="row.answered">Yes</spna>
								<spna v-else>No</spna>
							</p>
						</td>

						<td class="px-6 py-4 whitespace-nowrap flex">

							<div>
								<inertia-link class="btn btn-primary mr-2" :href="route('contacts.show', row.id)">
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
				<span>No Contacts Added</span>
			</div>
		</div>

		<jet-pagination class="mt-6" :links="contacts.links" />
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
		contacts: Object,
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
				this.getResults("contacts.index");
			}, 150),
			deep: true,
		},
	},

	methods: {
		destroy(id) {
			this.deleteResource(route("contacts.destroy", id));
		},
	},
};
</script>

<style lang="scss" scoped></style>

