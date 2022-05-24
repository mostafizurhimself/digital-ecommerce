<template>
  <div v-if="product">
    <!-- filter bar -->
    <div class="filter-bar sticky-top shadow-sm">
      <div class="bg-white container-fluid py-1" style="height: 46px">
        <div class="align-items-center h-100 row">
          <div class="col-6 col-md-4 text-left pl-2 pl-lg-4 pb-sm-0 pt-md-0 d-flex align-items-center">
            <nuxt-link to="/designs" class="bg-transparent border-0 d-flex align-items-center text-primary">
              <i class="fas fa-angle-left"></i>
              <span class="ml-2 text-nowrap">BACK TO DESIGNS</span>
            </nuxt-link>
          </div>
          <div class="col-md-4 d-none d-md-flex justify-content-md-around">
            <h2 class="mb-0 text-sm">
              CART
              <span class="text-primary">COLOR CHANGE</span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- cart -->
    <div class="my-5">
      <div class="container">
        <h3>Your Request</h3>
        <div class="row">
          <!-- left side -->
          <div class="col-lg-8 mb-4">
            <!-- cart items -->
            <div class="bg-cream p-3 mb-5 row mx-0">
              <div class="col-12 col-md-4 px-0">
                <img class="img-fluid" :src="product.thumbnailMediaUrl" alt="" />
              </div>

              <div class="col-8 col-md-6">
                <h4 class="pt-3 pt-md-0">Color Change ({{ product.name }})</h4>
                <div class="text-muted">SKU: {{ product.sku }}</div>

                <p class="mt-2">
                  <span class="text-muted">
                    <div class="pb-2">
                      {{ product.description | truncate(50) }}
                    </div>
                    <div class="text-sm">
                      This design is universal, that means you can apply it to
                      any car type, it just depends how much material you will
                      print. For most of the cars 20m of wrapping material is
                      enough.
                    </div>
                  </span>
                </p>
              </div>

              <div class="col-4 col-md-2">
                <div class="d-flex justify-content-end pt-3 pt-md-0">
                  <h4 class="mb-0">
                    {{
                      colorChangeAmount
                        | currency(
                          $store.state.currency.selectedCurrency,
                          $store.state.currency.exchangeRate
                        )
                    }}
                  </h4>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <dynamic-field :fields="fields" v-model="colors"></dynamic-field>
              </div>
              <div class="col-12">
                <text-field v-model="description" label="Description" />
              </div>
            </div>

            <!-- Customer information -->
            <div v-if="!$auth.loggedIn">
              <!-- login modal -->
              <keep-alive>
                <b-modal id="modal-scrollable" scrollable centered hide-footer no-stacking no-close-on-backdrop title="Login" ref="login-modal">
                  <cart-page-login :redirectUrl="`/color-changes/${product.id}/cart`"></cart-page-login>
                  <template>
                    <div class="d-flex justify-content-center">
                      <b-button v-b-modal.register-modal class="bg-secondary mb-2 px-4">Register</b-button>
                    </div>
                  </template>
                </b-modal>
              </keep-alive>

              <!-- register modal -->
              <keep-alive>
                <b-modal id="register-modal" scrollable size="lg" centered hide-footer no-close-on-backdrop title="Register" ref="register-modal">
                  <cart-page-register @registered="hideRegisterModal"></cart-page-register>
                </b-modal>
              </keep-alive>
            </div>
          </div>

          <!-- right side -->
          <div class="col-lg-4">
            <div class="card border-0 sticky-summary">
              <div class="p-3 border-bottom bg-black text-white">
                <h4 class="mb-0 text-2xl">Summary</h4>
              </div>

              <!-- summary -->
              <div class="card-body">
                <div class="row mt-3">
                  <div class="col-8">Subtotal</div>
                  <div class="col-4 text-right subtotal-price">
                    {{
                      colorChangeAmount
                        | currency(
                          $store.state.currency.selectedCurrency,
                          $store.state.currency.exchangeRate
                        )
                    }}
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-8">VAT MOSS</div>
                  <div class="col-4 text-right mossvat-price">
                    <span v-if="vatType == '%'">
                      {{ vatAmount }}
                      {{ vatType }}
                    </span>
                    <span v-else>
                      {{
                        vatAmount
                          | currency(
                            $store.state.currency.selectedCurrency,
                            $store.state.currency.exchangeRate
                          )
                      }}
                    </span>
                  </div>
                </div>
                <hr />
                <div class="row mt-3">
                  <div class="col-8">
                    <h5 class="mb-0">Total</h5>
                  </div>
                  <div class="col-4 text-right total-price">
                    <h5 class="mb-0">
                      {{
                        getCustomerGrandTotal
                          | currencySymbol(
                            $store.state.currency.selectedCurrency
                          )
                      }}
                    </h5>
                  </div>
                </div>
              </div>

              <!-- Payment method -->
              <div>
                <div class="p-3 border-bottom bg-black text-white">
                  <h4 class="mb-0 text-2xl">Payment method</h4>
                </div>
                <div class="card-body">
                  <payment-method-button :buttons="paymentButtons" v-model="paymentMethod"></payment-method-button>
                </div>
              </div>

              <!-- confirmation -->
              <div class="row mt-3 mb-2" v-if="$auth.loggedIn">
                <div class="col-12">
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input v-model="termsAgreed" id="agree1" type="checkbox" class="custom-control-input" />
                      <label for="agree1" class="custom-control-label user-select-none">I have read the
                        <a href="/terms-conditions#general-terms" target="_blank" title="Digital Ecommerce Terms and Conditions">terms and conditions</a>
                        of the Digital Ecommerce and agree with them</label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- payment buttons -->
              <div v-if="$auth.loggedIn">
                <div class="card-body p-0 mb-5" :class="{ disabledPayment: !termsAgreed }">
                  <!-- Paypal -->
                  <paypal v-show="paymentMethod === 'paypal'" :checkoutItems="this.checkoutItemsForPaypal" @payment-complete="handlePaymentCompletePaypal"></paypal>

                  <!-- Stripe -->
                  <stripe v-show="paymentMethod === 'stripe'" @token-generated="handlePaymentCompleteStripe">
                  </stripe>
                </div>
              </div>

              <!-- login modal -->
              <div class="mt-3" v-if="!$auth.loggedIn">
                <b-button v-b-modal.modal-scrollable class="bg-primary text-xl form-control">Login to Checkout!</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paypal from "~/components/Paypal.vue";
import Stripe from "~/components/Stripe.vue";
import CartPageRegister from "~/components/layouts/CartPageRegister.vue";
import CartPageLogin from "~/components/layouts/CartPageLogin.vue";
import PaymentMethodButton from "~/components/forms/PaymentMethodButton.vue";

export default {
  components: {
    Paypal,
    CartPageRegister,
    CartPageLogin,
    Stripe,
    PaymentMethodButton
  },
  name: "color-change-cart",
  data() {
    return {
      vatType: "%",
      colorChangeAmount: 30,
      termsAgreed: false,
      paymentMethod: "",
      product: null,
      description: "",
      colors: [{ colorCode: "#000", description: "" }],
      fields: [
        {
          name: "colorCode", //For v-model
          title: "Color",
          component: "input-field", // Render component type
          value: "", // Initial value
          props: {
            type: "color"
          }
        },
        {
          name: "description", //For v-model
          title: "Description",
          component: "input-field", // Render component type
          value: "", // Initial value
          props: {
            type: "text"
          }
        }
      ],
      paymentButtons: [
        {
          src: "/images/cart/paypal.png",
          id: "payment_paypal",
          value: "paypal",
          name: "payment"
        },
        {
          src: "/images/cart/gplogo.png",
          id: "payment_stripe",
          value: "stripe",
          name: "payment"
        }
      ]
    };
  },

  computed: {
    // Get user vat amount
    vatAmount() {
      return this.$auth.loggedIn ? this.$auth.user.vat.amount : 0;
    },
    // Calculate vat amount
    getVatAmount() {
      let vatAmount;
      if (this.vatType == "%") {
        vatAmount = (this.vatAmount / 100) * this.colorChangeAmount;
      } else {
        vatAmount = this.vatAmount;
      }

      return Math.ceil(vatAmount);
    },
    // Calculate grand total
    getGrandTotal() {
      return this.colorChangeAmount + this.getVatAmount;
    },

    // Calculate grand total
    getCustomerGrandTotal() {
      return (
        this.convertCurrency(this.colorChangeAmount) +
        this.convertCurrency(this.getVatAmount)
      );
    },

    // Prepare items for paypal checkout
    checkoutItemsForPaypal() {
      return [
        {
          description: this.product.name,
          amount: {
            currency: this.$store.state.currency.selectedCurrency,
            value: this.getCustomerGrandTotal
          }
        }
      ];
    },

    // Prepare items for color change request create
    colorChange() {
      return {
        productId: this.product.id,
        colors: this.colors,
        description: this.description,
        depositAmount: this.colorChangeAmount,
        customerAmount: this.convertCurrency(this.colorChangeAmount),
        customerCurrency: this.$store.state.currency.selectedCurrency,
        vat: this.vatAmount,
        vatType: this.vatType,
        vatAmount: this.getVatAmount,
        customerVatAmount: this.convertCurrency(this.getVatAmount)
      };
    }
  },

  methods: {
    // Handle color chage request after payment complete
    async handlePaymentCompletePaypal() {
      const res = await this.$axios.post("/color-changes", this.colorChange);
      this.$router.push("/color-changes/greeting");
    },

    // Handle stripe payment
    async handlePaymentCompleteStripe(token) {
      const resStripe = await this.$axios.post(
        "/payments/color-changes/stripe",
        {
          token: token.id,
          ...this.colorChange
        }
      );
      this.$toast.success("Order completed successfully");
      this.$router.push("/color-changes/greeting");
    },

    hideRegisterModal() {
      this.$refs["register-modal"].hide();
      this.$refs["login-modal"].show();
    }
  },

  async fetch() {
    const res = await this.$axios.get("/products/" + this.$route.params.id);
    this.product = res.data.data.product;
  }
};
</script>
