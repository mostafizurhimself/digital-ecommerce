<template>
    <form-view @submitted="save">
        <template #title>Create Color</template>
        <template #form>
            <div class="mb-4">
                <jet-label for="name" value="Name" />
                <jet-input
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    ref="name"
                    autocomplete="name"
                />
                <jet-input-error :message="form.errors.name" class="mt-2" />
            </div>
            <div class="mb-4">
                <label class="flex items-center">
                    <jet-checkbox v-model="form.isGradient" />
                    <span class="ml-2 text-sm text-gray-600">Is Gradient</span>
                </label>
            </div>
            <div class="mb-4" v-if="!form.isGradient">
                <jet-label for="code" value="Code" />
                <jet-input
                    id="code"
                    type="color"
                    class="mt-1 block w-16 h-16"
                    v-model="form.code"
                    ref="code"
                    autocomplete="code"
                />
                <jet-input-error :message="form.errors.code" class="mt-2" />
            </div>

            <div class="mb-4" v-if="form.isGradient">
                <jet-label for="image" value="Image" />
                <jet-image-input @change="handleImageChange" class="w-64"></jet-image-input>
                <jet-input-error :message="form.errors.image" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <inertia-link :href="route('colors.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
        </template>
    </form-view>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                name: null,
                code: null,
                isGradient: false,
                image: null
            }),
        };
    },
    methods: {
        handleImageChange(file) {
            this.form.image = file;
        },
        save() {
            this.form.post(route("colors.store"));
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
