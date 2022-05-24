<template>
	<div>
		<jet-form-section @submitted="save">
			<template #title>Partner Page</template>
			<template #description>Change partner page content here.</template>

			<!-- How It Work content -->
			<template #form>
				<!-- Title -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="title" value="Title" />
					<jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title" ref="title" autocomplete="title" />
					<jet-input-error :message="form.errors.title" class="mt-2" />
				</div>

				<!-- Image -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="image" value="Image" />
					<jet-image-input :url="$page.props.partner?.primaryMediaUrl" @change="handleImageChange"></jet-image-input>
					<small class="mt-2 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
					<jet-input-error :message="form.errors.image" class="mt-2" />
				</div>

				<!--Page Content -->
				<div class="col-span-12 sm:col-span-6 editor-container">
					<jet-label class="mb-2" for="content" value="Page Content" />
					<QuillEditor v-model:content="form.content" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.content" class="mt-2" />
				</div>

			</template>

			<template #actions>
				<jet-action-message class="mr-3 mt-10">Saved Successfully.</jet-action-message>
				<jet-button>Save</jet-button>
			</template>
		</jet-form-section>
	</div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
	name: "PartnerPage",

	components: {
		QuillEditor,
	},

	data() {
		return {
			form: this.$inertia.form({
				title: this.$page.props.partner?.data?.title,
				image: null,
				content: this.$page.props.partner?.data?.content,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("appearance.partner.store"));
		},
		handleImageChange(image) {
			this.form.image = image;
		},
	},
};
</script>

<style lang="scss" scoped>
.editor-container {
	height: 250px;
	margin: 2rem 0;
	padding-bottom: 50px;
}
</style>
