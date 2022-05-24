<template>
    <div>Appearance</div>
    <form @submit.prevent="submit">
        <div>
            <jet-label for="name" value="Name" />
            <jet-input
                id="name"
                type="text"
                class="mt-1 block w-full"
                v-model="form.name"
                autofocus
                autocomplete="off"
            />
        </div>

        <div class="flex items-center justify-end mt-4">

            <jet-button
                class="ml-4"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >Save</jet-button>
        </div>
    </form>
</template>

<script>
import JetInput from "@/Jetstream/Input";
import JetLabel from "@/Jetstream/Label";
import JetButton from "@/Jetstream/Button";
export default {
    components: {
        JetInput,
        JetLabel,
        JetButton
    },

    data() {
        return {
            form: this.$inertia.form({
                name: "",
            }),
        };
    },

    methods: {
        submit() {
            this.form.post(this.route("appearance.home"));
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
