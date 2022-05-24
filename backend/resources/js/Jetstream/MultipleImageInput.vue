<template>
	<input type="file" @change="handleChange" ref="input" multiple />
	<div class="image-container">
		<div v-for="(media, index) in medias" :key="index" class="preview-image">
			<img :src="media.url" />
			<button @click.prevent="remove(media.id)" class="remove">Remove</button>
		</div>
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

<style lang="scss" scoped>
.image-container {
	display: flex;
	flex-wrap: wrap;
}

.preview-image {
	height: 150px;
	width: 200px;
	// min-width: 200px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;

	img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
	border: 1px solid rgba(0, 0, 0, 0.3);
	margin-right: 1rem;
	margin-top: 1rem;

	.remove {
		position: absolute;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		transform: translateY(-100%);
		opacity: 0;
		transition: all 0.3s;
	}

	&:hover .remove {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>

