<template>
	<form-view @submitted="save">
		<template #title>Edit Product</template>
		<template #form>
			<tabs :options="{ useUrlFragment: false }" nav-item-class="tab-item">
				<!-- First Tab -->
				<tab name="General Info">
					<!-- name -->
					<div class="mb-4">
						<jet-label for="name" value="Name" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.name" class="mt-2" />
					</div>

					<!-- Price -->
					<div class="mb-4">
						<jet-label for="name" value="Price" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.price" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.price" class="mt-2" />
					</div>

					<!-- SKU -->
					<div class="mb-4">
						<jet-label for="name" value="SKU" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.sku" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.sku" class="mt-2" />
					</div>

					<!--Description -->
					<div class="mb-4">
						<jet-label for="description" value="Description" />
						<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.description" ref="description" autocomplete="description" rows="8" />
						<jet-input-error :message="form.errors.description" class="mt-2" />
					</div>

					<!-- Note -->
					<div class="mb-4">
						<jet-label for="name" value="Please note" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.note" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.note" class="mt-2" />
					</div>

					<!--Print Data Format-->
					<div class="mb-4">
						<jet-label for="name" value="Print data format" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.printDataFormat" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.printDataFormat" class="mt-2" />
					</div>

					<!--Recommended Material-->
					<div class="mb-4">
						<jet-label for="name" value="Recommended Material" />
						<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.recommendedMaterial" ref="name" autocomplete="name" />
						<jet-input-error :message="form.errors.recommendedMaterial" class="mt-2" />
					</div>
				</tab>

				<!-- Second Tab -->
				<tab name="Others" class="mt-5">
					<!-- Category-->
					<div class="mb-4">
						<jet-label for="name" value="Category" />
						<jet-select v-model="form.categoryId" :options="categories"></jet-select>

						<jet-input-error :message="form.errors.categoryId" class="mt-2" />
					</div>

					<!-- Color-->
					<div class="mb-4">
						<jet-label for="name" value="Color" />
						<jet-select v-model="form.colorId" :options="colors"></jet-select>

						<jet-input-error :message="form.errors.colorId" class="mt-2" />
					</div>

					<!-- tags-->
					<div class="mb-4">
						<jet-label for="name" value="Tags" class="mb-2" />
						<vue-select v-model="form.tags" label-by="name" value-by="id" :options="tags" multiple taggable>
							<template #tag="{ option }">
								<div class="bg-primary-500 text-white rounded-md px-2 py-1">{{ option.name }}</div>
							</template>
						</vue-select>
						<jet-input-error :message="form.errors.tags" class="mt-2" />
					</div>

					<!-- Images -->
					<div class="mb-4">
						<jet-label value="Images" class="mb-2" />
						<jet-multiple-image-input :medias="product.mediaCollection" @change="handleImagesChange"></jet-multiple-image-input>
						<small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
						<jet-input-error :message="form.errors.images" class="mt-2" />
						<jet-input-error v-for="(i, index) in form.images" :key="index" :message="form.errors[`images.${index}`]" class="mt-2" />
					</div>

					<!-- Thumbnail -->
					<div class="mb-4">
						<jet-label value="Thumbnail" class="mb-2" />
						<jet-image-input :url="product.thumbnailMediaUrl" @change="handleThumbnailChange"></jet-image-input>
						<small class="mt-1 font-thin text-gray-400">* Thumbnail should be minimum 425x240 px. Maximum file size: 5MB/5120KB.</small>
						<jet-input-error :message="form.errors.thumbnail" class="mt-2" />
					</div>

					<!-- Downloadable -->
					<div class="mb-4">
						<jet-label value="Downloadable" class="mb-2" />
						<jet-file-input :url="product.downloadableMediaUrl" @change="handleFileChange"></jet-file-input>
						<jet-input-error :message="form.errors.downloadable" class="mt-2" />
					</div>
				</tab>
			</tabs>
		</template>

		<template #actions>
			<inertia-link :href="route('products.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</template>
	</form-view>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
	name: "product-edit",
	props: {
		product: Object,
		categories: Object,
		colors: Object,
		tags: Object,
	},

	data() {
		return {
			form: this.$inertia.form({
				name: this.product.name,
				categoryId: this.product.categoryId,
				colorId: this.product.colorId,
				tags: [],
				sku: this.product.sku,
				price: this.product.price,
				description: this.product.description,
				note: this.product.note,
				printDataFormat: this.product.printDataFormat,
				recommendedMaterial: this.product.recommendedMaterial,
				images: null,
				downloadable: null,
				thumbnail: null,
				_method: "put",
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("products.update", this.product.id), {
				onSuccess: () => toast.success("Updated successfully"),
			});
		},
		handleImagesChange(images) {
			this.form.images = images;
		},

		handleThumbnailChange(thumbnail) {
			this.form.thumbnail = thumbnail;
		},

		handleFileChange(file) {
			this.form.downloadable = file;
		},
	},
	created() {
		this.form.tags = this.product.tags.map((tag) => tag.id);
	},
};
</script>

<style lang="scss" scoped>
</style>
