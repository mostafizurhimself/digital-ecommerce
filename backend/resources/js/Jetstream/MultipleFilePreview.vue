<template>
	<div class="flex">
		<div v-for="(image, index) in images" :key="index" class="preview-image">
			<img :src="image" />
			<button @click.stop="removeImage(index)" class="remove">Remove</button>
		</div>
		<label class="upload-zone">
			<input type="file" @change="onFileChange" ref="input" multiple />
			<div class="label">Click to upload</div>
		</label>
	</div>

	<!-- <div class="mt-2 flex items-center" v-for="(media, index) in medias" :key="index">
        <a target="_blank" class="text-primary-500 hover:underline" :href="media.url">
            <span>{{media.name}}</span>
        </a>
        <i class="ti-trash ml-auto cursor-pointer text-red-500" @click="remove(media.id)"></i>
    </div>-->
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

	data() {
		return {
			images: [],
		};
	},

	methods: {
		focus() {
			this.$refs.input.focus();
		},
		// handleChange(e) {
		//     this.$emit("change", e.target.files);
		// },
		onFileChange(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createImage(files);
		},
		createImage(files) {
			var vm = this;
			for (var index = 0; index < files.length; index++) {
				var reader = new FileReader();
				reader.onload = function (event) {
					const imageUrl = event.target.result;
					vm.images.push(imageUrl);
				};
				reader.readAsDataURL(files[index]);
			}
		},
		removeImage(index) {
			this.images.splice(index, 1);
		},
		remove(id) {
			this.$inertia.delete(route("media.remove", id));
		},
	},
};
</script>

<style lang="scss" scoped>
.upload-zone {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	height: 150px;
	width: 150px;
	background: #f5f5f5;
	margin: 1rem;

	.label {
		width: 100%;
		text-align: center;
	}

	input {
		height: 0;
		width: 0;
	}
}

.preview-image {
	height: 150px;
	width: 150px;
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
	margin: 1rem;

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

