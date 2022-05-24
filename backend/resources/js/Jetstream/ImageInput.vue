<template>
	<div>
		<input type="file" @change="handleChange" ref="input" />
		<div class="preview bg-gray-100 mt-4 p-4" :style="{'height': height}">
			<img :src="previewUrl" v-if="previewUrl" />
			<p v-else>No image found</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: null,
		},
		height: {
			type: String,
			default: "250px",
		},
	},

	emits: ["change"],
	data() {
		return {
			previewUrl: "",
		};
	},

	methods: {
		focus() {
			this.$refs.input.focus();
		},
		handleChange(e) {
			this.onFileChange(e);
			this.$emit("change", e.target.files[0]);
		},

		onFileChange: function (event) {
			const file = event.target.files[0];
			if (!file) {
				return false;
			}
			if (!file.type.match("image.*")) {
				return false;
			}
			const reader = new FileReader();
			const that = this;
			reader.onload = function (e) {
				that.previewUrl = e.target.result;
			};
			reader.readAsDataURL(file);
		},
	},

	mounted() {
		this.previewUrl = this.url;
	},
};
</script>

<style lang="scss" scoped>
.preview {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		object-fit: cover;
	}
}
</style>

