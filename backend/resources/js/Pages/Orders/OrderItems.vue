<template>
 <div class="mr-0 lg:mr-4" >
    <h1 class="mb-2 font-bold text-2xl">Order Items</h1>


    <!--Table  -->
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table
        class="w-full divide-y divide-gray-200"
        v-if="$page.props.order.orderItems"
      >
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs uppercase font-medium text-gray-500 ml-6uppercase">ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs uppercase font-medium text-gray-500 ml-6uppercase">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs uppercase font-medium text-gray-500 ml-6uppercase">Description</th>
            <th scope="col" class="px-6 py-3 text-left text-xs uppercase font-medium text-gray-500 ml-6uppercase">Amount</th>
            <th scope="col" class="px-6 py-3 text-left text-xs uppercase font-medium text-gray-500 ml-6uppercase">Customer amount</th>

          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(row, index) in $page.props.order.orderItems"
            :key="index"
          >
            <td class="px-6 py-4 whitespace-nowrap">{{ row.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ row.product.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap truncate"  style="max-width: 200px">{{ row.product.description}}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ row.amountFormatted}}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ row.customerAmountFormatted}}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center items-center text-gray-600 h-32" v-else>
        <span>No Feature Added</span>
      </div>
    </div>

  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>
