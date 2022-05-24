<template>
    <div>
        <div class="max-w-5xl divide-y divide-gray-200">
            <div class="flex justify-between py-3 rounded-md">
                <div>
                    <h1 class="truncate text-90 font-normal text-2xl">Partner Details For : {{company.companyName}} </h1>
                </div>
                <!-- Route Link -->
                <div class="items-center">
                    <inertia-link class="btn btn-primary mr-2" :href="route('companies.index')">
                        <i class="ti-arrow-left"></i>
                    </inertia-link>
                </div>
            </div>
        </div>
    </div>

    <!-- Partner Show -->
    <div class="max-w-5xl divide-y divide-gray-200">
        <div class="bg-white mb-6 py-4 px-6 rounded-md">

            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">ID</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{company.id}}</p>
                </div>
            </div>

            <!-- Name -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Name</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{company.customer.name}}</p>
                </div>
            </div>

            <!-- Company Name -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Company Name</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{company.companyName}}</p>
                </div>
            </div>

            <!--Company Email -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Company Email</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{company.companyEmail}}</p>
                </div>
            </div>

            <!-- Member Since -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80"> Member Since</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{company.memberSinceFormatted}}</p>
                </div>
            </div>

            <!-- service -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">service</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{beautify(company.service)}}</p>
                </div>
            </div>

            <!-- Status -->
            <div class="flex border-b -mx-6 px-6">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Status</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="badge" :class="{'bg-yellow-500' : company.status == 'pending', 'bg-green-500': company.status == 'approved', 'bg-red-500': company.status == 'rejected'}">
                        {{ company.status }}
                    </p>
                </div>
            </div>

            <!--Billing Address -->
            <div class="flex border-b border-40 -mx-6 px-6" v-if="company.billingAddress">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Billing Address</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{ company.billingAddress.street }}, {{ company.billingAddress.city }}, {{ company.billingAddress.country }} - {{ company.billingAddress.zipcode }}</p>
                </div>
            </div>

             <!--Global Position -->
            <div class="flex  border-40 -mx-6 px-6" v-if="company.billingAddress && company.billingAddress.position">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Global Position</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">
                        <span class="block">Latitude: {{company.billingAddress.position.lat}} </span>
                        <span>Longitude: {{company.billingAddress.position.lng}} </span>
                        </p>
                </div>
            </div>

            <!--Shipping Address -->
            <div class="flex border-b border-40 -mx-6 px-6" v-if="company.shippingAddress && company.shippingAddress.street">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80">Shipping Address</h4>
                </div>
                <div class="w-3/4 py-4 break-words">
                    <p class="text-90">{{ company.shippingAddress.street }}, {{ company.shippingAddress.city }}, {{ company.shippingAddress.country }} - {{ company.shippingAddress.zipcode }}</p>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "company-show",
    props: {
        company: Object,
    },

    	methods: {
		beautify(value) {
			return value.replaceAll("_", " ");
		},
	},
};
</script>

