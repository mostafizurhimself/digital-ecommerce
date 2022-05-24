<template>
    <div>
        <div class="max-w-5xl divide-y divide-gray-200">
            <div class="flex justify-between py-3 rounded-md">
                <div>
                    <h1
                        class="truncate text-90 font-normal text-2xl"
                    >Customer Details : {{customer.name }}</h1>
                </div>
                <!-- Route Link -->
                <div class="items-center">
                    <inertia-link class="btn btn-primary mr-2" :href="route('customers.index')">
                        <i class="ti-arrow-left"></i>
                    </inertia-link>
                </div>
            </div>
        </div>
    </div>


       <!-- Customer Show -->
    <div class="max-w-5xl divide-y divide-gray-200">
        <div class="bg-white mb-6 py-4 px-6 rounded-md">
            <!-- Tabs -->

                    <!-- ID -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">ID</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.id }}</p>
                        </div>
                    </div>

                    <!-- Name -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Name</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.name }}</p>
                        </div>
                    </div>

                    <!-- SurName -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Surname</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.surname }}</p>
                        </div>
                    </div>

                    <!-- Nickname -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Nickname</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.nickname}}</p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Email</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{customer.email}}</p>
                        </div>
                    </div>

                    <!-- Phone-->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Phone</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.phone}}</p>
                        </div>
                    </div>

                     <!-- status-->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Status</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90 inline-flex items-center justify-center px-2 py-1 text-xs uppercase font-bold leading-none text-white rounded-full" :class="[customer.status == 'active' ? 'bg-green-500' : 'bg-red-500']">{{ customer.status}}</p>
                        </div>
                    </div>

                       <!-- Last Login-->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80 ">Last Login</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90 ">{{ customer.lastLoginFormatted}}</p>
                        </div>
                    </div>



                    <!-- Company name -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Company name</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.companyName }}</p>
                        </div>
                    </div>

                    <!-- EU Vat No -->
                    <div class="flex border-b border-40 -mx-6 px-6">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">EU Vat No</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.euVatNo }}</p>
                        </div>
                    </div>


                     <!--Billing Address -->
                    <div class="flex border-b border-40 -mx-6 px-6" v-if="customer.billingAddress">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Billing Address</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.billingAddress.street }}, {{ customer.billingAddress.city }}, {{ customer.billingAddress.country }} - {{ customer.billingAddress.zipcode }}</p>
                        </div>
                    </div>

                     <!--Shipping Address -->
                    <div class="flex border-b border-40 -mx-6 px-6" v-if="customer.shippingAddress && customer.shippingAddress.street">
                        <div class="w-1/4 py-4">
                            <h4 class="font-normal text-80">Shipping Address</h4>
                        </div>
                        <div class="w-3/4 py-4 break-words">
                            <p class="text-90">{{ customer.shippingAddress.street }}, {{ customer.shippingAddress.city }}, {{ customer.shippingAddress.country }} - {{ customer.shippingAddress.zipcode }}</p>
                        </div>
                    </div>



        </div>
    </div>


</template>

<script>
export default {
    name:'customer-show',
    props: {
        customer: Object,
    },
};
</script>

