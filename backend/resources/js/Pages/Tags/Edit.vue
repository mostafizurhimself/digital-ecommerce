<template>
    <form-view @submitted="save">
        <template #title>Edit Tag</template>
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

        </template>

        <template #actions>
            <!-- <jet-action-message :on="form.recentlySuccessful" class="mr-3">Saved.</jet-action-message> -->
            <inertia-link :href="route('tags.index')" class="btn btn-secondary mr-4">Cancel</inertia-link>
            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Update</jet-button>
        </template>
    </form-view>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
    export default {

        props:{
            tag: Object,
        },


         data() {
        return {
            form: this.$inertia.form({
                name: this.tag.name,

            }),
        };
    },


     methods: {
        save() {
            this.form.put(route("tags.update", this.tag.id),{
                onSuccess: () => toast.success("Updated successfully"),
            });
        },
    },




    }
</script>

<style lang="scss" scoped>

</style>
