<template>
	<input type="file" @change="handleChange" ref="input" multiple />
	<div class="mt-2 flex items-center" v-for="(media, index) in medias" :key="index">
		<a target="_blank" class="text-primary-500 hover:underline" :href="media.url">
			<span>{{media.fileName}}</span>
		</a>
		<i class="ti-trash ml-auto cursor-pointer text-red-500" @click="remove(media.id)"></i>
	</div>
</template>

<script>
export default {
	props: {
		medias: {
			type: Array,
			default: null,
		},
	},

	emits: ["change"],

	methods: {
		focus() {
			this.$refs.input.focus();
		},
		handleChange(e) {
			this.$emit("change", e.target.files);
		},
		remove(id) {
			this.$inertia.delete(route("media.remove", id));
		},
	},
};
</script>

