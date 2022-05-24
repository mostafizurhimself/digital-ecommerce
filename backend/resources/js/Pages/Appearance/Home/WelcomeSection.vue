<template>
    <jet-form-section @submitted="save">
        <template #title>Welcome Section</template>
        <template #description>Change home page welcome section content.</template>

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
                title: this.$page.props.welcome?.data?.title,
                description: this.$page.props.welcome?.data?.description,
                banner: null,
            }),
        };
    },

    methods: {
        save() {
            this.form.post(route("appearance.home.welcome"));
        },
    },

};
</script>

<style lang="scss" scoped>
</style>
