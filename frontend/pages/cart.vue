<template>
  <div>
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
              MARKET
              <span class="text-primary">STOCK DESIGN</span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- cart -->
    <div class="my-5">
      <div class="container">
        <form>
          <h3 v-if="getTotalItem <= 0">Your cart is empty</h3>
          <h3 v-else>Your Order</h3>
          <div class="row">
            <!-- left side -->
            <div class="col-lg-8 mb-4">
              <!-- cart items -->
              <div v-for="cartItem in getCartItems" :key="cartItem.id" class="bg-cream p-3 mb-3 row mx-0">
                <div class="col-12 col-md-4 px-0">
                  <img class="img-fluid" :src="cartItem.thumbnailMediaUrl" alt="" />
                </div>

                <div class="col-8 col-md-6">
                  <h4 class="pt-3 pt-md-0">{{ cartItem.name }}</h4>
                  <div class="text-muted">SKU: {{ cartItem.sku }}</div>

                  <p class="mt-2">
                    <span class="text-muted">
                      <div class="pb-2">
                        {{ cartItem.description | truncate(50) }}
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
                        cartItem.price
                          | currency(
                            $store.state.currency.selectedCurrency,
                            $store.state.currency.exchangeRate
                          )
                      }}
                    </h4>
                  </div>
                  <div class="d-flex justify-content-end align-items-end h-100 pb-sm-4 pb-5">
                    <a @click="removeFromCart" class="btn p-0"><i aria-hidden="true" class="fa fa-trash text-dark-gray"></i></a>
                  </div>
                </div>
              </div>

              <!-- Coupon -->
              <div>
                <div v-if="$auth.loggedIn">
                  <h4>Digital Ecommerce Discount Coupon</h4>
                  <div class="d-flex mt-4">
                    <input-field v-model="couponCode" :error="validationErrors.couponCode" placeholder="Coupon Code"></input-field>
                    <div class="ml-4">
                      <button @click.prevent="verifyCoupon" class="btn btn-primary text-nowrap">Apply Coupon</button>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <h5>Notes</h5>
                  <text-field v-model="note"></text-field>
                </div>
              </div>

              <!-- Customer information -->
              <div v-if="!$auth.loggedIn">
                <!-- login modal -->
                <keep-alive>
                  <b-modal id="modal-scrollable" scrollable centered hide-footer no-stacking no-close-on-backdrop title="Login" ref="login-modal">
                    <cart-page-login redirectUrl="/cart"></cart-page-login>
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

                <!-- Summary -->
                <div class="card-body">

                  <!-- Total -->
                  <div class="row mt-3">
                    <div class="col-8">Total</div>
                    <div class="col-4 text-right subtotal-price">
                      {{getTotalPrice | currency($store.state.currency.selectedCurrency,$store.state.currency.exchangeRate)}}
                    </div>
                  </div>

                  <!-- Discount -->
                  <div class="row mt-3">
                    <div class="col-8">Discount (-)</div>
                    <div class="col-4 text-right subtotal-price">
                      {{discount | currency($store.state.currency.selectedCurrency,$store.state.currency.exchangeRate)}}
                    </div>
                  </div>

                  <!-- Subtotal -->
                  <div class="row mt-3">
                    <div class="col-8">Subtotal</div>
                    <div class="col-4 text-right subtotal-price">
                      {{discountedAmount | currency($store.state.currency.selectedCurrency,$store.state.currency.exchangeRate)}}
                    </div>
                  </div>

                  <!-- Vat -->
                  <div class="row mt-3">
                    <div class="col-8">VAT MOSS</div>
                    <div class="col-4 text-right mossvat-price">
                      <span v-if="vatType == '%'">
                        {{ vatAmount }}
                        {{ vatType }}
                      </span>
                      <span v-else>
                        {{vatAmount| currency($store.state.currency.selectedCurrency,$store.state.currency.exchangeRate)}}
                      </span>
                    </div>
                  </div>

                  <hr />
                  <div class="row mt-3">
                    <div class="col-8">
                      <h5 class="mb-0">Grand Total</h5>
                    </div>
                    <div class="col-4 text-right total-price">
                      <h5 class="mb-0">
                        {{getCustomerGrandTotal | currencySymbol($store.state.currency.selectedCurrency)}}
                      </h5>
                    </div>
                  </div>
                </div>

                <!-- Payment method -->
                <div v-if="getTotalItem > 0">
                  <div class="p-3 border-bottom bg-black text-white">
                    <h4 class="mb-0 text-2xl">Payment method</h4>
                  </div>
                  <div class="card-body">
                    <payment-method-button :buttons="paymentButtons" v-model="paymentMethod"></payment-method-button>
                  </div>
                </div>

                <!-- confirmation -->
                <div class="row mt-3 mb-2" v-if="$auth.loggedIn && getTotalItem > 0">
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

                <!-- Payment buttons -->
                <div v-if="getTotalItem > 0 && $auth.loggedIn">
                  <div class="card-body p-0 mb-5" :class="{disabledPayment: !termsAgreed || disablePayButton}">
                    <!-- Paypal -->
                    <paypal v-show="paymentMethod === 'paypal'" :checkoutItems="this.checkoutItemsForPaypal" @payment-complete="handlePaymentCompletePaypal"></paypal>

                    <!-- Stripe -->
                    <stripe v-show="paymentMethod === 'stripe'" @onError="stripeError" @token-generated="handlePaymentCompleteStripe" @onSubmit="onStripeSubmit">
                    </stripe>
                  </div>
                </div>

                <!-- login modal -->
                <div class="mt-3" v-if="getTotalItem > 0 && !$auth.loggedIn">
                  <b-button v-b-modal.modal-scrollable class="bg-primary text-xl form-control">Login to Checkout!</b-button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  name: "Cart",
  head() {
    return {
      title: "Cart"
    };
  },
  data() {
    return {
      termsAgreed: false,
      paymentMethod: "",
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
      ],
      vatType: "%",
      disablePayButton: false,
      coupon: null,
      couponCode: "",
      note: null
    };
  },

  computed: {
    ...mapGetters({
      getCartItems: "cart/getCartItems",
      getTotalItem: "cart/getTotalItem",
      getTotalPrice: "cart/getTotalPrice",
      validationErrors: "validation/validationErrors"
    }),
    // Get discount amount
    discount() {
      return this.coupon ? this.coupon.amount : 0;
    },
    // Get customer vat amount/percentage
    vatAmount() {
      return this.$auth.loggedIn ? this.$auth.user.vat.amount : 0;
    },
    // Get customer discounted price
    discountedAmount() {
      return this.getTotalPrice - this.discount;
    },
    // Calculate customer total vat
    getVatAmount() {
      console.log(this.discountedAmount);
      let vatAmount;
      if (this.vatType == "%") {
        vatAmount = (this.vatAmount / 100) * this.discountedAmount;
      } else {
        vatAmount = this.vatAmount;
      }

      return Math.ceil(vatAmount);
    },
    // Calculate grand total
    getGrandTotal() {
      return this.discountedAmount + this.getVatAmount;
    },
    // Calculate grand total
    getCustomerGrandTotal() {
      return (
        this.convertCurrency(this.getTotalPrice) -
        this.convertCurrency(this.discount) +
        this.convertCurrency(this.getVatAmount)
      );
    },

    // Prepare items for paypal checkout
    checkoutItemsForPaypal() {
      return [
        {
          description: `Products - ${this.getCartItems.join(",")}`,
          amount: {
            currency: this.$store.state.currency.selectedCurrency,
            value: this.getCustomerGrandTotal
          }
        }
      ];
    },

    // Prepare items for order create
    orderItems() {
      return this.$store.state.cart.cart.map(item => {
        return {
          productId: item.id,
          amount: item.price,
          customerAmount: this.convertCurrency(item.price),
          colorChangeId: item.colorChangeId || null
        };
      });
    }
  },

  methods: {
    // Verify coupon
    async verifyCoupon() {
      try {
        const res = await this.$axios.$post("/verify-coupon", {
          couponCode: this.couponCode,
          customerId: this.$auth.user.id,
          orderAmount: this.getGrandTotal
        });
        this.coupon = res.data;
        this.couponCode = null;
        this.$toast.success("Coupon applied successfully");
      } catch (error) {
        if (error.response.status === 404) {
          this.$toast.error(error.response.data.message);
        }
      }
    },

    // Handle order after payment complete
    async handlePaymentCompletePaypal() {
      try {
        const res = await this.$axios.post("/orders", {
          customerId: this.$auth.user.id,
          couponId: this.coupon ? this.coupon.id : null,
          customerCurrency: this.$store.state.currency.selectedCurrency,
          totalAmount: this.getTotalPrice,
          customerAmount: this.convertCurrency(this.getTotalPrice),
          vat: this.vatAmount,
          vatType: this.vatType,
          vatAmount: this.getVatAmount,
          customerVatAmount: this.convertCurrency(this.getVatAmount),
          totalDiscount: this.discount,
          customerTotalDiscount: this.convertCurrency(this.discount),
          note: this.note,
          orderItems: this.orderItems
        });
        this.$toast.success("Thank you for the order!");
        this.$store.dispatch("cart/resetCart");
        this.$router.push(`/download/${res.data.data.id}`);
      } catch (error) {
        console.log(error);
      } finally {
        this.disablePayButton = false;
      }
    },

    // Handle stripe payment
    async handlePaymentCompleteStripe(token) {
      try {
        const resStripe = await this.$axios.post("/payments/orders/stripe", {
          token: token.id,
          customerId: this.$auth.user.id,
          couponId: this.coupon ? this.coupon.id : null,
          customerCurrency: this.$store.state.currency.selectedCurrency,
          totalAmount: this.getTotalPrice,
          customerAmount: this.convertCurrency(this.getTotalPrice),
          vat: this.vatAmount,
          vatType: this.vatType,
          vatAmount: this.getVatAmount,
          customerVatAmount: this.convertCurrency(this.getVatAmount),
          totalDiscount: this.discount,
          customerTotalDiscount: this.convertCurrency(this.discount),
          note: this.note,
          orderItems: this.orderItems
        });
        this.$toast.success("Thank you for the order!");
        this.$store.dispatch("cart/resetCart");
        this.$router.push(`/download/${resStripe.data.data.id}`);
      } catch (error) {
        console.log(error);
      } finally {
        this.disablePayButton = false;
      }
    },

    removeFromCart() {
      this.$store.dispatch("cart/removeFromCart", { url: "/cart" });
    },

    hideRegisterModal() {
      this.$refs["register-modal"].hide();
      this.$refs["login-modal"].show();
    },
    onStripeSubmit() {
      this.disablePayButton = true;
    },
    stripeError(err) {
      this.disablePayButton = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
