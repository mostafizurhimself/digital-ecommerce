<template>
  <div>
    <div class="container">
      <div class="row mt-3 mt-sm-5 mt-md-7 mt-lg-8">
        <div class="col-12 col-lg-6 offset-lg-3 text-center">
          <img src="/images/icons/thankyou-check.png" alt="Thank you" style="height: 120px" />
        </div>
      </div>
      <div class="row mt-2 mt-sm-4 mt-md-5 mt-lg-6 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
        <div class="col-12 col-lg-6 offset-lg-3 text-center">
          <h2>
            <span>Thank you for your purchase</span>
          </h2>
        </div>
        <div class="col-12 col-lg-6 offset-lg-3 px-4 px-sm-7  text-center pt-3">
          <p>
            We are so grateful for the pleasure of serving you and hope we met your expectations. You can download the printing data at the bottom below.
          </p>
        </div>
      </div>
      <div class="row my-3 mx-md-10">
        <div class="col-12 col-lg-6 offset-lg-3 text-center py-3 bg-cream">
          <div class="row align-items-center px-4 py-1">
            <div class="col-md-5 text-center text-sm-left">
              <p class="mb-3 mb-md-0">Download your designs</p>
            </div>
            <div class="col-md-7 text-center text-sm-right">
              <button @click.prevent="download" class="btn btn-primary btn-block text-uppercase text-truncate py-3" style="font-size: 1rem !important; border-radius: 100px;">Get your files</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-6 mx-md-10">
        <div class="col-12 col-lg-6 offset-lg-3 text-center">
          <p>
            Find all your purchases in
            <nuxt-link to="/profile/orders" title="Purchase Orders" style="color: #30d5c8">purchase orders</nuxt-link>
          </p>
        </div>
        <div></div>
      </div>
      <div class="row my-6 mx-md-10">
        <div class="col-12 col-lg-6 offset-lg-3 text-center text-center">
          <img src="/images/icons/ico-wrapping.png" alt="wrapping" style="width: 150px" />
        </div>
      </div>
      <div class="row mt-2 mt-sm-4 mt-md-5 mt-lg-6 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
        <div class="col-12 col-lg-6 offset-lg-3 text-center">
          <h2>
            <span>Need help finding a professional car wrapper?</span>
          </h2>
        </div>
        <div class="col-12 col-lg-6 offset-lg-3 px-4 px-sm-7 text-center pt-3">
          <p>
            Click on the bottom below, and let’s find a professional wrapping company in your area. We have listed both printing and wrapping companies for you.
          </p>
        </div>
      </div>
      <div class="row mt-3 mb-5 mb-md-10 mx-md-10">
        <div class="col-12 col-lg-6 offset-lg-3 text-center py-3 bg-cream">
          <div class="row align-items-center px-4 py-1">
            <div class="col-md-5 text-left">
              <p class="mb-3 mb-md-0">
                Find a car wrapper nearby you
              </p>
            </div>
            <div class="col-md-7 text-right">
              <nuxt-link to="/wrapping-companies" class="btn btn-primary btn-block text-uppercase text-truncate py-3" style="font-size: 1rem !important; border-radius: 100px;">List of our partners</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "download-order",
  middleware: ["auth", "download"],
  head() {
    return {
      title: "Thank You"
    };
  },

  methods: {
    download() {
      this.$axios({
        url: `/orders/${this.$route.params.id}/download`,
        method: "POST",
        responseType: "blob"
      })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute(
            "download",
            `order-${this.$route.params.id}.zip`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch(err => {
          this.$toast.error("Sorry, you can not download now.");
        });
    }
  }
};
</script

<style lang="scss" scoped></style>
