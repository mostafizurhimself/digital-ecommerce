<template>
	<div class="mr-0 lg:mr-8">
		<h1 class="mb-2 font-bold text-2xl">Vehicles Model</h1>
		<!-- Filter -->
		<div class="mb-4 flex justify-end items-center">
			<!-- search -->
			<!-- <jet-input
        id="name"
        type="text"
        class="mt-1 block w-64"
        v-model="filters.search"
        ref="name"
        autocomplete="name"
      /> -->

			<jet-button class="mt-2" type="button" @click="addModel">Add Vehicle Model</jet-button>
		</div>

		<!--Table  -->
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full divide-y divide-gray-200" v-if="$page.props.vehicle.vehicleModels && $page.props.vehicle.vehicleModels?.length">
				<thead class="bg-gray-50">
					<tr>
						<th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium uppercase
                text-gray-500
                ml-6uppercase
              ">
							ID
						</th>
						<th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium uppercase
                text-gray-500
                ml-6uppercase
              ">
							Name
						</th>
						<th scope="col" class="
                px-6
                py-3
                text-left text-xs
                font-medium uppercase
                text-gray-500
                ml-6uppercase
              ">
							Description
						</th>

						<th></th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr v-for="(row, index) in $page.props.vehicle.vehicleModels" :key="index">
						<td class="px-6 py-4 whitespace-nowrap">{{ row.id }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.name }}</td>
						<td class="px-6 py-4 whitespace-nowrap">{{ row.description }}</td>

						<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium uppercase">
							<jet-button type="button" class="mr-2" @click="editResource(index)">
								<i class="ti-pencil-alt"></i>
							</jet-button>

							<jet-danger-button @click="destroyModel(row.id)">
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

		<!-- Add vehicle modal -->
		<jet-dialog-modal :show="showDialog" @close="closeModal">
			<template #title>Add Vehicle Model</template>
			<!-- Create & edit form -->
			<template #content>
				<!-- Model Name -->
				<div class="my-4">
					<jet-label for="name" value="Model Name" />
					<jet-input type="text" class="mt-1 block w-full" ref="name" v-model="form.name" />

					<jet-input-error :message="form.errors.name" class="mt-2" />
				</div>

				<!-- Description -->
				<div class="mb-4">
					<jet-label for="description" value="Description" />
					<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.description" ref="description" autocomplete="description" rows="6" />
					<jet-input-error :message="form.errors.description" class="mt-2" />
				</div>
			</template>

			<template #footer>
				<jet-secondary-button @click="closeModal">Cancel</jet-secondary-button>

				<jet-button class="ml-2" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="save">Save</jet-button>
			</template>
		</jet-dialog-modal>
	</div>
</template>

<script>
export default {
	name: "model-add",

	data() {
		return {
			form: this.$inertia.form({
				vehicleId: this.$page.props.vehicle.id,
				name: null,
				description: null,
			}),

			showDialog: false,
		};
	},

	methods: {
		addModel() {
			this.edit = false;
			this.form.reset();
			this.showDialog = true;
		},

		closeModal() {
			this.showDialog = false;
		},

		save() {
			if (this.edit) {
				this.form.put(route("vehicle-model.update", this.form.id), {
					onSuccess: () => {
						this.edit = false;
						this.closeModal();
						this.form.reset();
					},
				});
			} else {
				this.form.post(route("vehicle-model.store"), {
					onSuccess: () => {
						this.closeModal();
						this.form.reset();
					},
				});
			}
		},

		editResource(index) {
			this.showDialog = true;
			this.edit = true;
			this.form.id = this.$page.props.vehicle.vehicleModels[index].id;
			this.form.name = this.$page.props.vehicle.vehicleModels[index].name;
			this.form.description =
				this.$page.props.vehicle.vehicleModels[index].description;
		},

		destroyModel(id) {
			this.deleteResource(route("vehicle-model.destroy", id));
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
