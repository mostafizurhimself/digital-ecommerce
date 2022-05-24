<template>
	<form-view @submitted="save">
		<template #title>Edit Category</template>
		<template #form>
			<div class="mb-4">
				<jet-label for="name" value="Name" />
				<jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" ref="name" autocomplete="name" />
				<jet-input-error :message="form.errors.name" class="mt-2" />
			</div>
			<div class="mb-4">
				<jet-label for="description" value="Description" />
				<jet-text-input id="description" type="text" class="mt-1 block w-full" v-model="form.description" ref="description" autocomplete="description" rows="8" />
				<jet-input-error :message="form.errors.description" class="mt-2" />
			</div>
			<div class="mb-4">
				<jet-label for="image" value="Image" />
				<jet-image-input :url="category.primaryMediaUrl" @change="handleImageChange"></jet-image-input>
				<small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB</small>
				<jet-input-error :message="form.errors.image" class="mt-2" />
			</div>

			<!-- Tutorials -->
			<div class="mb-4">
				<jet-label value="Tutorials" class="mb-2" />
				<jet-multiple-file-input :medias="category.mediaCollection" @change="handleFileChange"></jet-multiple-file-input>
				<br>
				<small class="mt-1 font-thin text-gray-400">This tutorials are about how a user will use this type of wraps on there car</small>
				<jet-input-error :message="form.errors.tutorials" class="mt-2" />
				<jet-input-error v-for="(i, index) in form.tutorials" :key="index" :message="form.errors[`images.${index}`]" class="mt-2" />
			</div>
		</template>

		<template #actions>
			<!-- <jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved.</jet-action-message> -->
			<inertia-link :href="route('categories.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
			<jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Update</jet-button>
		</template>
	</form-view>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
	props: {
		category: Object,
	},
	data() {
		return {
			form: this.$inertia.form({
				name: this.category.name,
				description: this.category.description,
				image: null,
				tutorials: null,
				_method: "put",
			}),
		};
	},
	methods: {
		save() {
			this.form.post(route("categories.update", this.category.id), {
				onSuccess: () => toast.success("Updated successfully"),
			});
		},
		handleImageChange(image) {
			this.form.image = image;
		},
		handleFileChange(files) {
			this.form.tutorials = files;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
