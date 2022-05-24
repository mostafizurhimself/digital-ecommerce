<template>
    <jet-form-section @submitted="save">
        <template #title>VAT Settings</template>
        <template #description>Change your vat settings from here.</template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="amount" value="Vat Amount" />
                <jet-input id="amount" type="number" class="mt-1 block w-full" v-model="form.amount" ref="amount" autocomplete="amount" />
                <jet-input-error :message="form.errors.amount" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="type" value="Vat Type" />
                <jet-select track="value" :options="$page.props.vatTypes" v-model="form.type" autocomplete="off" />
                <jet-input-error :message="form.errors.type" class="mt-2" />
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
                amount: this.$page.props.vat?.data?.amount,
                type: this.$page.props.vat?.data?.type,
            }),
        };
    },

    methods: {
        save() {
            this.form.post(route("settings.vat"));
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
