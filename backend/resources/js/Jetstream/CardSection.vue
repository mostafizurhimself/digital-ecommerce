<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <jet-section-title>
            <template #title>
                <slot name="title"></slot>
            </template>
            <template #description>
                <slot name="description"></slot>
                <div class="mt-4">
                    <slot name="action"></slot>
                </div>
            </template>
        </jet-section-title>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="bg-white shadow rounded-md overflow-hidden">
                <slot name="card"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import JetSectionTitle from "./SectionTitle";

export default {
    components: {
        JetSectionTitle,
    },
};
</script>
