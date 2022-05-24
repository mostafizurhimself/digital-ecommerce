<template>
  <div class="invoice bg-white mx-auto d-flex flex-column justify-content-between px-4 pt-4 pb-2">
    <div>
      <!-- Logo -->
      <div class="row justify-content-center mt-2">
        <img class="logo" src="@/static/images/logo-black.png" alt="logo" />
      </div>

      <div class="row justify-content-between mt-5">
        <div class="col">
          <p class="text-sm">
            Date of issue:
            <br />
            <span>{{ order.dateFormatted }} </span>
          </p>
        </div>

        <div class="col">
          <p class="text-right">Order receipt</p>
          <p class="text-right text-sm">
            <span class="font-bold">{{ order.invoiceNo }} </span>
          </p>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-6">
          <h5>Sold By</h5>
          <div class="card">
            <div class="card-body py-2 px-3 text-sm">
              <p><span class="font-bold">Company: </span>{{ getWebsiteSettings.data.name }}</p>
              <p><span class="font-bold">VAT No: </span>{{ getWebsiteSettings.data.vatNo }}</p>
              <p>
                <span class="font-bold">Address: </span>
                {{ getWebsiteSettings.data.street }}
                {{ getWebsiteSettings.data.city }} -
                {{ getWebsiteSettings.data.zip }} ,
                {{ getWebsiteSettings.data.country }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h5>Customer</h5>
          <div class="card">
            <div class="card-body py-2 px-3 text-sm">
              <p><span class="font-bold">Name: </span><span>{{ order.customer.name }}</span> <span>{{ order.customer.surname }}</span></p>
              <p v-if="order.customer && order.customer.companyName"><span class="font-bold">Company Name: </span>{{ order.customer.companyName }}</p>
              <p><span class="font-bold">VAT No: </span>{{ order.customer.euVatNo }}</p>
              <p>
                <span class="font-bold">Address: </span>
                {{ order.customer.billingAddress.street }} ,
                {{ order.customer.billingAddress.city }} -
                {{ order.customer.billingAddress.zipcode }} ,
                {{ order.customer.billingAddress.country }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <!-- Payment details -->
        <!-- <table class="table text-sm">
          <thead>
            <tr>
              <th scope="col">Payment</th>
              <th scope="col">Date of issue</th>
              <th scope="col">Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Card Payment</td>
              <td>{{ order.dateFormatted }}</td>
              <td>18.08.202</td>
            </tr>
          </tbody>
        </table>
        -->

        <!-- Items -->
        <h5>Items:</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Item name</th>
              <th scope="col" class="text-right">Quantity</th>
              <th scope="col" class="text-right">Price</th>
              <th scope="col" class="text-right">Total price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(orderItem, i) in order.orderItems" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ orderItem.productId }}</td>
              <td>{{ orderItem.product.name }}</td>
              <td class="text-right">1</td>
              <td class="text-right">
                {{ orderItem.customerAmountFormatted }}
              </td>
              <td class="text-right">
                {{ orderItem.customerAmountFormatted }}
              </td>
            </tr>

            <tr>
              <th scope="row" colspan="5" class="text-right">
                Total
              </th>
              <td class="text-right">{{ order.customerAmountFormatted }}</td>
            </tr>

            <tr>
              <th scope="row" colspan="5" class="text-right">
                Discount (-)
              </th>
              <td class="text-right">{{ order.customerTotalDiscountFormatted }}</td>
            </tr>

            <tr>
              <th scope="row" colspan="5" class="text-right">
                Subtotal
              </th>
              <td class="text-right">{{ (order.totalAmount - order.totalDiscount) | currencySymbol($store.state.currency.selectedCurrency)  }}</td>
            </tr>

            <tr>
              <th scope="row" colspan="5" class="text-right">VAT</th>
              <td class="text-right">{{ order.vat }} {{ order.vatType }}</td>
            </tr>

            <tr>
              <th scope="row" colspan="5" class="text-right">
                Grand Total
              </th>
              <th class="text-right">{{ order.customerGrandTotalFormatted }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- footer -->
    <div class="d-flex flex-column align-items-center">
      <p class="text-xs">
        Please contact us at info@wrapmotif.com with any questions.
      </p>

      <img class="logoBottom mt-3" src="@/static/images/black-favicon.png" alt="" />
      <p class="text-xs mt-1">
        www.wrapmotif.com
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrderInvoice",
  layout: "invoice",

  props: {
    order: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      orders: null
    };
  },

  computed: {
    ...mapGetters({
      getWebsiteSettings: "config/getWebsiteSettings"
    })
  }
};
</script>

<style lang="scss" scoped>
.invoice {
  min-height: 11.5in;
  max-width: 8.3in;
}

.logo {
  height: 45px;
}
.logoBottom {
  height: 30px;
}
</style>
