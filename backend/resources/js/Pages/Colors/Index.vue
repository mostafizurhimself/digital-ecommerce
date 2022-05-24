<template>
	<div>
		<h1 class="mb-5 font-bold text-2xl">Colors</h1>
		<div class="mb-4 flex justify-between items-center">
			<jet-input id="name" type="text" class="mt-1 block w-64" v-model="filters.search" ref="name" autocomplete="name" />
			<inertia-link class="btn btn-primary" :href="route('colors.create')">
				<span class="mr-2">Create</span>
				<span class="hidden md:inline">Color</span>
			</inertia-link>
		</div>

		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="colors.data.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>

						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
						<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Color</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(color, index) in colors.data" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{color.name}}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{color.code}}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<img v-if="color.isGradient" class="h-8 w-8 object-cover" :src="color.primaryMediaUrl">
							<span v-else class="inline-block w-8 h-8" :style="{'background-color': color.code}"></span>
						</td>
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
import throttle from "lodash/throttle";

export default {
	metaInfo: { title: "Colors" },
	props: {
		colors: Object,
		filters: Object,
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
				this.getResults("colors.index");
			}, 150),
			deep: true,
		},
	},

	methods: {
		destroy(id) {
			this.deleteResource(route("colors.destroy", id));
		},
	},
};
</script>
