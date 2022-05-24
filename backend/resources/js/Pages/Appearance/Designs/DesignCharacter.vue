<template>
	<div>

		<jet-card-section @submitted="save">
			<template #title>Character Of Design</template>
			<template #description>Change your character of design content.</template>
			<template #action>
				<jet-button type="button" @click="addDesign">Add Design Character</jet-button>
			</template>

			<!-- Slider list -->
			<template #card>
				<div class="overflow-x-auto" v-if="$page.props.designCharacter && $page.props.designCharacter?.length">
					<table class="w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="w-52 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>

								<th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>

								<th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deposit Amount</th>

								<!-- <th
                                    scope="col"
                                    class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                >Wrapper Price</th> -->

								<th scope="col" class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="(design, index) in $page.props.designCharacter" :key="index">
								<td class="px-4 py-4">
									<div class="flex justify-center bg-gray-100 py-4 items-center">
										<img class="h-16 w-32 object-contain" :src="design.primaryMediaUrl" alt />
									</div>
								</td>
								<td class="px-4 py-4">{{design.category.name}}</td>
								<td class="px-4 py-4">{{design.depositAmount}}</td>
								<!-- <td class="px-4 py-4">{{design.wrapperPrice}}</td> -->
								<td class="px-4 py-4 text-right text-sm font-medium whitespace-nowrap">
									<jet-button type="button" class="mr-2" @click="editDesign(index)">
										<i class="ti-pencil-alt"></i>
									</jet-button>

									<jet-danger-button @click="destroy(design.id)">
										<i class="ti-trash"></i>
									</jet-danger-button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="flex justify-center items-center text-gray-600 h-32" v-else>
					<span>No Character Of Design Content Added</span>
				</div>
			</template>
		</jet-card-section>

		<!-- Add slider modal -->
		<jet-dialog-modal :show="showDialog" @close="closeModal">
			<template #title>Add Design</template>

			<template #content>

				<!-- Deposit Amount -->
				<div class="mt-4">
					<jet-label for="depositAmount" value="Deposit Amount" />
					<jet-input type="number" class="mt-1 block w-full" ref="depositAmount" v-model="form.depositAmount" />

					<jet-input-error :message="form.errors.depositAmount" class="mt-2" />
				</div>

				<!-- Wrapper Price -->
				<!-- <div class="mt-4">
					<jet-label for="wrapperPrice" value="Wrapper Price" />
					<jet-input type="number" class="mt-1 block w-full" ref="wrapperPrice" v-model="form.wrapperPrice" />

					<jet-input-error :message="form.errors.wrapperPrice" class="mt-2" />
				</div> -->

				<!-- Category-->
				<div class="my-4">
					<jet-label for="name" value="Category" />
					<jet-select v-model="form.categoryId" :options="$page.props.categories"></jet-select>

					<jet-input-error :message="form.errors.categoryId" class="mt-2" />
				</div>

				<!-- Image -->
				<div class="mt-4">
					<jet-label for="image" value="Image" />
					<jet-image-input :url="form.primaryMediaUrl" @change="handleImageChange"></jet-image-input>
					<small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
					<jet-input-error :message="form.errors.image" class="mt-2" />
				</div>
			</template>

			<!-- Modal Footer -->
			<template #footer>
				<jet-secondary-button @click="closeModal">Cancel</jet-secondary-button>

				<jet-button class="ml-2" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" @click="save">Save</jet-button>
			</template>
		</jet-dialog-modal>

	</div>
</template>

<script>
export default {
	name: "design-character",
	data() {
		return {
			form: this.$inertia.form({
				id: null,
				depositAmount: null,
				categoryId: null,
				image: null,
				primaryMediaUrl: null,
			}),
			showDialog: false,
			edit: false,
		};
	},

	methods: {
		addDesign() {
			this.edit = false;
			this.form.reset();
			this.showDialog = true;
		},
		closeModal() {
			this.showDialog = false;
		},

		handleImageChange(image) {
			this.form.image = image;
		},

		save() {
			if (this.edit) {
				this.form.post(
					route(
						"appearance.designs.designs-character.update",
						this.form.id
					),
					{
						onSuccess: () => {
							this.edit = false;
							this.closeModal();
							this.form.reset();
						},
					}
				);
			} else {
				this.form.post(route("appearance.designs.design-character"), {
					onSuccess: () => {
						this.closeModal();
						this.form.reset();
					},
				});
			}
		},

		editDesign(index) {
			this.showDialog = true;
			this.edit = true;
			this.form.id = this.$page.props.designCharacter[index].id;
			this.form.depositAmount =
				this.$page.props.designCharacter[index].depositAmount;
			this.form.categoryId =
				this.$page.props.designCharacter[index].categoryId;
			this.form.primaryMediaUrl =
				this.$page.props.designCharacter[index].primaryMediaUrl;
		},

		destroy(id) {
			this.deleteResource(
				route("appearance.designs.designs-character.delete", id)
			);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
