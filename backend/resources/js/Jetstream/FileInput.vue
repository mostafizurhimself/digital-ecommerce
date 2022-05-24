<template>
    <input type="file" @change="handleChange" ref="input" />
    <div class="mt-2" v-if="this.url">
        <a target="_blank" class="text-primary-500 hover:underline" :href="this.url">{{this.getFileName()}}</a>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: null
        },
        filename: {
            type: String,
            default: null
        }
    },

    emits: ["change"],

    methods: {
        focus() {
            this.$refs.input.focus();
        },
        handleChange(e) {
            this.$emit("change", e.target.files[0]);
        },
        getFileName(){
            if(this.filename){
                return this.filename
            }

            return this.url.substring(this.url.lastIndexOf('/')+1)
        }
    },

};
</script>

