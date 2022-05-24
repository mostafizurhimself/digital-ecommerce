<template>
	<div>
		<jet-form-section @submitted="save">
			<template #title>Terms & Conditions</template>
			<template #description>Change terms & conditions content.</template>

			<!-- Terms & conditions content -->
			<template #form>
				<!-- Title -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="title" value="Title" />
					<jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title" ref="title" autocomplete="title" />
					<jet-input-error :message="form.errors.title" class="mt-2" />
				</div>

				<!-- Subtitle -->
				<!-- <div class="col-span-6 sm:col-span-4">
					<jet-label for="subtitle" value="Subtitle" />
					<jet-input id="subtitle" type="text" class="mt-1 block w-full" v-model="form.subtitle" ref="subtitle" autocomplete="subtitle" />
					<jet-input-error :message="form.errors.subtitle" class="mt-2" />
				</div> -->

				<!-- General Terms -->
				<div class="col-span-12 sm:col-span-6 editor-container">
					<jet-label class="mb-2" for="content" value="General Terms" />
					<QuillEditor v-model:content="form.general" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.general" class="mt-2" />
				</div>

				<!-- Special Terms -->
				<div class="col-span-12 sm:col-span-6 editor-container">
					<jet-label class="mb-2" for="content" value="Special Terms" />
					<QuillEditor v-model:content="form.special" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.special" class="mt-2" />
				</div>

				<!-- Licence -->
				<div class="col-span-12 sm:col-span-6 editor-container">
					<jet-label class="mb-2" for="content" value="Licence" />
					<QuillEditor v-model:content="form.license" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.license" class="mt-2" />
				</div>

				<!-- Privacy Terms -->
				<div class="col-span-12 sm:col-span-6 editor-container pb-4">
					<jet-label class="mb-2" for="content" value="Privacy Terms" />
					<QuillEditor v-model:content="form.privacy" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.privacy" class="mt-2" />
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
	name: "terms",

	components: {
		QuillEditor,
	},

	data() {
		return {
			form: this.$inertia.form({
				title: this.$page.props.terms?.data?.title,
				// subtitle: this.$page.props.terms?.data?.subtitle,
				general: this.$page.props.terms?.data?.general,
				special: this.$page.props.terms?.data?.special,
				license: this.$page.props.terms?.data?.license,
				privacy: this.$page.props.terms?.data?.privacy,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("appearance.others.terms"));
		},
	},
};
</script>

<style lang="scss" scoped>
.editor-container {
	height: 200px;
	margin: 2rem 0;
}
</style>
