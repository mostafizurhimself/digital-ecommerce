<template>
	<div>
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(color, index) in data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{color.name}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{color.code}}</td>
						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<inertia-link class="btn btn-primary mr-2" :href="route('colors.edit', color.id)">
								<i class="ti-pencil-alt"></i>
							</inertia-link>

							<jet-danger-button @click="destroy(color.id)">
								<i class="ti-trash"></i>
							</jet-danger-button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-center items-center text-gray-600 h-32" v-else>
				<span>No Feature Added</span>
			</div>
		</div>
		<jet-pagination class="mt-6" :links="colors.links" />
	</div>
</template>

<script>
import pickBy from "lodash/pickBy";
import throttle from "lodash/throttle";
import mapValues from "lodash/mapValues";

export default {
	props: {
		filters: {
			type: Object,
			default: () => {},
		},

		url: {
			type: String,
			required: true,
		},

		data: {
			type: Array,
			Object,
			required: true,
		},
	},

	watch: {
		filters: {
			handler: throttle(function () {
				this.$inertia.get(this.url, pickBy(this.filters), {
					preserveState: true,
				});
			}, 150),
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
