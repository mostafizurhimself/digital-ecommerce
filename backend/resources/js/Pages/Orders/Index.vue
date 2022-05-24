<template>
    <div>
        <h1 class="mb-5 font-bold text-2xl">Orders</h1>
        <div class="mb-4 flex justify-between items-center">
            <jet-search v-model="filters.search" @reset="reset">
                <div class="mb-4">
                    <jet-label value="From" class="mb-2" />
                    <jet-input type="date" v-model="filters.from"></jet-input>
                </div>
                <div class="mb-4">
                    <jet-label value="To" class="mb-2" />
                    <jet-input type="date" v-model="filters.to"></jet-input>
                </div>
            </jet-search>

            <a :href="route('download-excel.orders', searchQuery)" target="_blank" class="btn btn-purple">
                <i class="ti-download mr-2"></i>
                Download
            </a>

        </div>

        <!-- Table -->
        <div class="bg-white rounded-md shadow overflow-x-auto">
            <table class="w-full divide-y divide-gray-200" v-if="orders.data.length">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">date</th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">customer name</th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grand Total</th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Grand Total</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(row, index) in orders.data" :key="index">
                        <td class="px-6 py-4 whitespace-nowrap">{{row.id}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{row.dateFormatted}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{row.customer.name}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{row.grandTotalFormatted}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{row.customerGrandTotalFormatted}}</td>

                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <inertia-link class="btn btn-primary mr-2" :href="route('orders.show', row.id)">
                                <i class="ti-eye"></i>
                            </inertia-link>
                            <inertia-link class="btn btn-success mr-2" :href="route('orders.invoice', row.id)">
                                <pdf-icon></pdf-icon>
                            </inertia-link>

                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-center items-center text-gray-600 h-32" v-else>
                <span>No Order Added</span>
            </div>
        </div>

        <jet-pagination class="mt-6" :links="orders.links" />

    </div>
</template>
<script>
import throttle from "lodash/throttle";
import Button from "../../Jetstream/Button.vue";
import PdfIcon from "@/Icons/PdfIcon.vue";
export default {
    components: { Button, PdfIcon },
    name: "orders",
    props: {
        orders: Object,
        query: Object,
    },
    data() {
        return {
            filters: {
                search: this.query.search,
                from: this.query.from,
                to: this.query.to,
            },
        };
    },

    watch: {
        filters: {
            handler: throttle(function () {
                this.getResults("orders.index");
            }, 150),
            deep: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
