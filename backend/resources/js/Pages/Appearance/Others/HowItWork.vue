<template>
	<div>
		<jet-form-section @submitted="save">
			<template #title>How It Work</template>
			<template #description>Change how it work content.</template>

			<!-- How It Work content -->
			<template #form>
				<!-- Title -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="title" value="Title" />
					<jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title" ref="title" autocomplete="title" />
					<jet-input-error :message="form.errors.title" class="mt-2" />
				</div>

				<!-- Subtitle -->
				<div class="col-span-6 sm:col-span-4">
					<jet-label for="subtitle" value="Subtitle" />
					<jet-input id="subtitle" type="text" class="mt-1 block w-full" v-model="form.subtitle" ref="subtitle" autocomplete="subtitle" />
					<jet-input-error :message="form.errors.subtitle" class="mt-2" />
				</div>

				<!--For Customer -->
				<div class="col-span-12 sm:col-span-6 editor-container">
					<jet-label class="mb-2" for="content" value="For Customer" />
					<QuillEditor v-model:content="form.customer" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.customer" class="mt-2" />
				</div>

				<!-- Universal Design -->
				<div class="col-span-12 sm:col-span-6 editor-container pb-4">
					<jet-label class="mb-2" for="content" value="Universal Design" />
					<QuillEditor v-model:content="form.universal" contentType="html" theme="snow" />
					<jet-input-error :message="form.errors.universal" class="mt-2" />
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
				title: this.$page.props.howItWorks?.data?.title,
				subtitle: this.$page.props.howItWorks?.data?.subtitle,
				customer: this.$page.props.howItWorks?.data?.customer,
				universal: this.$page.props.howItWorks?.data?.universal,
			}),
		};
	},

	methods: {
		save() {
			this.form.post(route("appearance.others.howItWorks"));
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
