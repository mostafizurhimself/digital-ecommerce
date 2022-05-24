<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-5 mx-auto text-center py-5 my-5">
          <img
            src="~/static/images/icons/thankyou-check.png"
            alt="Icon"
            style="height: 120px"
          />
          <h1 class="mt-5 mb-4">Thank you</h1>
          <p class="mb-4">
            We have received your request and will let you know as soon as
            possible whether we approve your registration and you have become
            our partner. After approval, you will be able to enjoy all the
            benefits for your business.
          </p>

          <p class="mb-4">
            Find or edit your company details in your
            <nuxt-link style="color:#30d5c8" to="/company-profile"
              >Profile</nuxt-link
            >
          </p>

          <p>
            For any questions, contact us at
            <nuxt-link target="_blank" to="info@wrapmotif.com"
              >info@wrapmotif.com</nuxt-link
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Thank you!"
    };
  }
};
</script>

<style lang="scss" scoped></style>
