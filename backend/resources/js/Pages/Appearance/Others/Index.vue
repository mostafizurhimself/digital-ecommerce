<template>
    <div>

    <faq-section></faq-section>
    <jet-section-border></jet-section-border>
    <terms-conditions-section></terms-conditions-section>
    <jet-section-border></jet-section-border>
    <how-it-work-section></how-it-work-section>


    </div>
</template>

<script>
import  FaqSection from "./Faq.vue";
import  TermsConditionsSection from "./TermsConditions.vue";
import  HowItWorkSection from "./HowItWork.vue";


export default {
    components: {
        FaqSection,
        TermsConditionsSection,
        HowItWorkSection,
    },
};
</script>

<style lang="scss" scoped>
</style>
