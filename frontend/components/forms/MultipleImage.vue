<template>
	<div class="mb-3">
		<p class="form-label">
			{{ label }}
			<span v-if="required" class="text-danger">*</span>
		</p>
		<div class="">
			<label v-if="!previewImages.length" class="custom-file-upload">
				<input multiple class="d-none" type="file" accept="images/*" @input="onFile" />
				<i class="fas fa-upload fa-4x mb-3"></i>
				<span>Move your photo here</span>
			</label>

			<div v-else class="text-center">
				<span class="preview-image mt-2 mr-2" v-for="(img, i) in previewImages" :key="i" :style="{ width: imageWidth }">
					<img class="img-fluid" :src="img.url" />
					<div class="image-overlay">
						<i class=" fas fa-times float-right p-2 text-danger bg-white rounded m-1" role="button" @click="removeImage(i)"></i>
					</div>
				</span>
			</div>
		</div>
		<span class="text-danger">{{ error[0] }}</span>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},

		type: {
			type: String,
			default: "text",
			validator: (val) =>
				val == "text" || val == "number" || val == "password" || "email",
		},

		value: {},

		placeholder: {
			type: String,
			default: "",
		},

		required: {
			type: Boolean,
			default: false,
		},

		// Validation error
		error: {
			type: Array,
			default: () => [],
		},
		imageWidth: {
			type: String,
			default: "auto",
		},
	},
	data() {
		return {
			previewImages: [],
		};
	},
	methods: {
		onFile(e) {
			const files = Array.from(e.target.files);

			if (files.length) {
				for (let file of files) {
					const reader = new FileReader();
					reader.onload = (e) => {
						this.previewImages.push({
							url: e.target.result,
							file,
						});
					};
					reader.readAsDataURL(file);
				}
			}
		},
		removeImage(index) {
			this.previewImages = this.previewImages.filter((x, i) => i != index);
		},
	},

	computed: {
		isValidated() {
			return this.value?.length ? true : false;
		},
	},
	watch: {
		previewImages(newValue) {
			const files = newValue.map((img) => img.file);

			this.$emit("input", files);
		},
	},
};
</script>

<style lang="scss" scoped>
.custom-file-upload {
	width: 100%;
	height: 220px;
	border: 1px dotted #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: all 0.3s ease;
	color: #777;
	&:hover {
		background: #eee;
	}
}
.preview-image {
	position: relative;
	min-height: 80px;
	display: inline-block;
	&:hover {
		.image-overlay {
			visibility: visible;
			opacity: 1;
			// display: block;
		}
	}
	.image-overlay {
		// display: none;
		transition: opacity 0.4s ease;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba($color: #000000, $alpha: 0.5);
	}
}
</style>
