<template>
  <div class="mb-3">
    <label class="form-label"
      >{{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <div class="rounded">
      <label v-if="!previewImage" class="custom-file-upload">
        <input class="d-none" type="file" @input="onFile" />
        <i class="fas fa-upload fa-4x mb-3"></i>
        <span>Click to upload</span>
      </label>

      <span
        :style="{ width: imageWidth, height: imageHeight }"
        v-else
        class=" preview-image d-flex justify-content-center align-items-center border"
      >
        <img
          class="img-fluid h-100"
          style="object-fit: contain"
          :src="previewImage"
        />
        <span class="image-overlay">
          <i
            class=" fas fa-times float-right p-2 text-danger bg-white rounded m-1"
            role="button"
            @click="removeImage"
          ></i>
        </span>
      </span>
    </div>
    <span class="text-danger">{{ error[0] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },

    url: {
      type: String,
      default: () => ""
    },






    type: {
      type: String,
      default: "text",
      validator: val =>
        val == "text" || val == "number" || val == "password" || "email"
    },

    value: {},

    placeholder: {
      type: String,
      default: ""
    },

    required: {
      type: Boolean,
      default: false
    },
    imageWidth: {
      type: String,
      default: "auto"
    },
    imageHeight: {
      type: String,
      default: "220px"
    },
    // Validation error
    error: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      previewImage: null
    };
  },
  methods: {
    onFile(e) {
      const files = e.target.files;

      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => (this.previewImage = e.target.result);
        reader.readAsDataURL(files[0]);

        this.$emit("input", files[0]);
      }
    },
    removeImage() {
      this.previewImage = null;
      this.$emit("input", null);
    }
  },

  computed: {
    isValidated() {
      return this.value?.length ? true : false;
    }
  },
  created() {
    this.previewImage = this.url;
  }
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
  display: inline-block;
  min-height: 80px;
  &:hover {
    .image-overlay {
      display: block;
    }
  }
  .image-overlay {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
