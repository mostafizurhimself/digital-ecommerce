<template>
	<form @submit.prevent="save">
		<div class="mb-4">
			<jet-label for="feedback" value="Feedback" />
			<jet-text-input id="feedback" type="text" class="mt-1 block w-full" v-model="form.feedback" ref="feedback" autocomplete="feedback" rows="3" />
			<jet-input-error :message="form.errors.feedback" class="mt-2" />
		</div>

		<!-- Name -->
		<div class="mb-4">
			<jet-label for="productName" value="Product Name" />
			<jet-input id="productName" type="text" class="mt-1 block w-full" v-model="form.productName" ref="productName" autocomplete="productName" />
			<jet-input-error :message="form.errors.productName" class="mt-2" />
		</div>

		<!-- Sku -->
		<div class="mb-4">
			<jet-label for="productSku" value="Product SKU" />
			<jet-input id="productSku" type="text" class="mt-1 block w-full" v-model="form.productSku" ref="productSku" autocomplete="productSku" />
			<jet-input-error :message="form.errors.productSku" class="mt-2" />
		</div>

		<!-- Price -->
		<div class="mb-4">
			<jet-label for="productPrice" value="Product Price" />
			<jet-input id="productPrice" type="text" class="mt-1 block w-full" v-model="form.productPrice" ref="productPrice" autocomplete="productPrice" />
			<jet-input-error :message="form.errors.productPrice" class="mt-2" />
		</div>

		<!-- Description -->
		<div class="mb-4">
			<jet-label for="productDescription" value="Description" />
			<jet-text-input id="productDescription" type="text" class="mt-1 block w-full" v-model="form.productDescription" ref="productDescription" autocomplete="productDescription" rows="3" />
			<jet-input-error :message="form.errors.productDescription" class="mt-2" />
		</div>

		<!-- Color-->
		<div class="mb-4">
			<jet-label for="name" value="Color" />
			<jet-select v-model="form.colorId" :options="$page.props.colors"></jet-select>
			<jet-input-error :message="form.errors.colorId" class="mt-2" />
		</div>

		<!-- Images -->
		<div class="mb-4">
			<jet-label value="Images" class="mb-2" />
			<jet-multiple-image-input :medias="$page.props.customOrder.product?.mediaCollection" @change="handleImagesChange"></jet-multiple-image-input>
			<small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximun file size: 10MB/10240KB.</small>
			<jet-input-error :message="form.errors.images" class="mt-2" />
			<jet-input-error v-for="(i, index) in form.images" :key="index" :message="form.errors[`images.${index}`]" class="mt-2" />
		</div>

		<!-- Thumbnail -->
		<div class="mb-4">
			<jet-label value="Thumbnail" class="mb-2" />
			<div class="w-2/3">
				<jet-image-input :url="$page.props.customOrder.product?.thumbnailMediaUrl" @change="handleThumbnailChange" height="200px"></jet-image-input>
			</div>
			<small class="mt-1 font-thin text-gray-400">*Thumbnail should be minimum 425x240 px. Maximun file size: 5MB/5120KB.</small>
			<jet-input-error :message="form.errors.thumbnail" class="mt-2" />
		</div>

		<!-- Downloadable -->
		<div class="mb-4">
			<jet-label value="Downloadable" class="mb-2" />
			<jet-file-input :url="$page.props.customOrder.product?.downloadableMediaUrl" @change="handleFileChange"></jet-file-input>
			<jet-input-error :message="form.errors.downloadable" class="mt-2" />
		</div>
		<!-- Buttons -->
		<div class="text-right mt-5">
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			form: this.$inertia.form({
				feedback: this.$page.props.customOrder.feedback,
				productName: this.$page.props.customOrder.product?.name,
				productSku: this.$page.props.customOrder.product?.sku,
				productPrice: this.$page.props.customOrder.product?.price,
				productDescription:
					this.$page.props.customOrder.product?.description,
				colorId: this.$page.props.customOrder.product?.colorId,
				thumbnail: null,
				images: null,
				downloadable: null,
				_method: "put",
			}),
		};
	},
	methods: {
		save() {
			this.form.post(
				route("custom-orders.update", this.$page.props.customOrder.id)
			);
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
};
</script>

<style lang="scss" scoped>
</style>
