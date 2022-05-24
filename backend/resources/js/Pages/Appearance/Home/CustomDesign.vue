<template>
    <jet-form-section @submitted="save">
        <template #title>Custom Design</template>
        <template #description>Change home page custom design section content.</template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="title" value="Title" />
                <jet-input
                    id="title"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.title"
                    ref="title"
                    autocomplete="title"
                />
                <jet-input-error :message="form.errors.title" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <jet-label for="subtitle" value="Subtitle" />
                <jet-input
                    id="subtitle"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.subtitle"
                    ref="subtitle"
                    autocomplete="subtitle"
                />
                <jet-input-error :message="form.errors.subtitle" class="mt-2" />
            </div>


            <div class="col-span-6 sm:col-span-4">
                <jet-label for="description" value="Description" />
                <jet-text-input
                    id="description"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.description"
                    ref="description"
                    autocomplete="description"
                />
                <jet-input-error :message="form.errors.description" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <jet-label for="banner" value="Banner" />
                <jet-image-input :url="$page.props.custom?.primaryMediaUrl" @change="handleBannerChange"></jet-image-input>
                 <small class="mt-1 font-thin text-gray-400 ">* Image should be minimum 800x450 px. Maximum file size: 5MB/5120KB.</small>
                <jet-input-error :message="form.errors.banner" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved Successfully.</jet-action-message>
            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
        </template>
    </jet-form-section>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                title: this.$page.props.custom?.data?.title,
                subtitle: this.$page.props.custom?.data?.subtitle,
                description: this.$page.props.custom?.data?.description,
                banner: null,
            }),
        };
    },

    methods: {
        save() {
            this.form.post(route("appearance.home.custom"));
        },
        handleBannerChange(file){
            this.form.banner = file;
        }
    },
    mounted () {
        // console.log();;
    },
};
</script>

<style lang="scss" scoped>
</style>
