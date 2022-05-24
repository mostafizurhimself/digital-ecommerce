<template>
    <div>
        <div class="flex mb-4">
            <h3 class="text-lg font-medium text-gray-900">
                <slot name="title"></slot>
            </h3>
        </div>
        <form @submit.prevent="$emit('submitted')">
            <div
                class="px-4 py-5 bg-white sm:p-6 shadow max-w-5xl"
                :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'"
            >
                <slot name="form"></slot>
            </div>

            <div
                class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md max-w-5xl"
                v-if="hasActions"
            >
                <slot name="actions"></slot>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    emits: ["submitted"],
    props: ['no-padding'],

    computed: {
        hasActions() {
            return !!this.$slots.actions;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
