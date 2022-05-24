<template>
    <div>
        <slider-section></slider-section>
    </div>

    <div class="mt-6">
        <design-character></design-character>
    </div>


</template>

<script>
import SliderSection from "./SliderSection.vue";
import DesignCharacter from "./DesignCharacter.vue";
export default {
    components: {
        SliderSection,
        DesignCharacter,
    },
};
</script>
<style lang="scss" scoped>
</style>
