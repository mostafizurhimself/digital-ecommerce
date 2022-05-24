<template>
    <div>
        <div class="max-w-5xl divide-y divide-gray-200">
            <div class="flex justify-between py-3 rounded-md">
                <div>
                    <h1
                        class="truncate text-90 font-normal text-2xl"
                    >Vehicle Details: {{ vehicle.name }}</h1>
                </div>
                <!-- Route Link for vehicle -->
                <div class="items-center">
                    <inertia-link
                        class="btn btn-primary mr-2"
                        :href="route('vehicles.edit', vehicle.id)"
                    >
                        <i class="ti-pencil-alt"></i>
                    </inertia-link>

                    <inertia-link class="btn btn-primary mr-2" :href="route('vehicles.index')">
                        <i class="ti-arrow-left"></i>
                    </inertia-link>
                </div>
            </div>
        </div>
    </div>

    <!-- vehicle Show -->
    <div class="max-w-5xl divide-y divide-gray-200">
        <div class="bg-white mb-6 py-4 px-6 rounded-md">
                    <!-- ID -->
                    <div class="flex border-b -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">ID</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ vehicle.id }}</p>
                        </div>
                    </div>

                    <!-- Name -->
                    <div class="flex border-b -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Name</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ vehicle.name }}</p>
                        </div>
                    </div>


                    <!-- Description -->
                    <div class="flex  -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Description</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ vehicle.description }}</p>
                        </div>
                    </div>


        </div>
    </div>


<!-- Vehicle model component section -->
    <div class="py-6">
        <vehicle-model></vehicle-model>
    </div>



</template>

<script>

import VehicleModel from "./VehicleModel.vue";

export default {

    components: {
        VehicleModel,
    },

    props: {
        vehicle: Object,
    },


};
</script>

<style lang="scss" scoped>

</style>
