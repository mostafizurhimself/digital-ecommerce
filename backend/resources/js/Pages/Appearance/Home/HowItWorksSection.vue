<template>
    <jet-form-section @submitted="save">
        <template #title>How It Works</template>
        <template #description>Change home page how it works section settings.</template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="images" value="Images" />
                <jet-image-input :url="$page.props.howItWorks?.primaryMediaUrl" @change="handleFileChange"></jet-image-input>
                 <small class="mt-1 font-thin text-gray-400">* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.</small>
                <jet-input-error :message="form.errors.image" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved.</jet-action-message>
            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Save</jet-button>
        </template>
    </jet-form-section>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                image: null
            }),
        };
    },

    methods: {
        save() {
            this.form.post(route("appearance.home.howItWorks"), {
                onSuccess: () => this.form.reset()
            });
        },
        handleFileChange(image){
            this.form.image = image;
        },
    },
    mounted () {
        // console.log();;
    },
};
</script>

<style lang="scss" scoped>
</style>
