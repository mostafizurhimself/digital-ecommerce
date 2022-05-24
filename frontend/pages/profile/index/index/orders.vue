<template>
  <div v-if="orders">
    <div class="container">
      <div v-if="!checkLength(orders.data)" class="d-flex justify-content-center my-10 ">
        <h4 class="font-semibold text-center">No matching records found</h4>
      </div>

      <div v-else class="p-0 p-md-5 mx-0 mx-md-5">
        <h3 class="font-semibold profile-tab-header">Purchase orders</h3>

        <table class="table table-borderless table-responsive-sm">
          <thead class="border-bottom">
            <tr>
              <th scope="col">Purchase order number</th>
              <th scope="col">Purchase order date</th>
              <th scope="col">Price</th>
              <th scope="col">File</th>
              <th scope="col">PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders.data" :key="order.id">
              <td>
                Order Id#
                <span class="font-bold text-primary"> {{ order.id }} </span>
              </td>
              <td>{{ order.dateFormatted }}</td>
              <td>{{ order.customerGrandTotalFormatted }}</td>
              <td>
                <button @click.prevent="download(order.id)" class="btn btn-download">
                  <i class="fas fa-download"></i>
                </button>
              </td>
              <td>
                <div>
                  <i @click="downloadPdf(order.id)" class="fas fa-file-download btn border-0 text-primary"></i>
                </div>

                <!-- template -->
                <client-only>
                  <vue-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="false" :filename="order.invoiceNo" pdf-format="a4" pdf-orientation="portrait" :manual-pagination="true" :ref="order.id">
                    <section slot="pdf-content">
                      <the-invoice :order="order"></the-invoice>
                    </section>
                  </vue-html2pdf>
                </client-only>
              </td>
            </tr>
          </tbody>
        </table>

        <span class="my-4" v-if="orders == null">No matching records found</span>

        <!-- Pagination -->
        <pagination :data="orders" @pagination-change-page="this.getResults" :limit="2">
          <span slot="prev-nav"><i class="fas fa-backward"></i></span>
          <span slot="next-nav"><i class="fas fa-forward"></i></span>
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import TheInvoice from "~/components/layouts/TheInvoice.vue";

export default {
  name: "ProfileOrders",
  head() {
    return {
      title: "Orders"
    };
  },
  components: {
    TheInvoice
  },
  data() {
    return {
      orders: null
    };
  },
  methods: {
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.$axios.get("/orders?page=" + page).then(response => {
        this.orders = response.data;
      });
    },

    downloadLink(id) {
      return `${process.env.API_URL}orders/${id}/download`;
    },

    download(id) {
      this.$axios({
        url: `/orders/${id}/download`,
        method: "POST",
        responseType: "blob"
      })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", `order-${id}.zip`);
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch(err => {
          this.$toast.error("Sorry, you can not download now.");
        });
    },

    downloadPdf(id) {
      this.$refs[id][0].generatePdf();
    }
  },
  fetch() {
    // Fetch initial results
    this.getResults();
  }
};
</script>

<style lang="scss" scoped>
.btn-download {
  color: #c85007;
}
</style>
