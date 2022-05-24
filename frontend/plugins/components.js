import Vue from "vue";

// Components
import ProductCard from "~/components/shared/ProductCard.vue";
import AddtocartButton from "~/components/shared/AddtocartButton.vue";
import HeroSlider from "@/components/layouts/HeroSlider.vue";

Vue.component("product-card", ProductCard);
Vue.component("addtocart-button", AddtocartButton);
Vue.component("hero-slider", HeroSlider);

// Forms
import InputField from "@/components/forms/InputField";
import SelectField from "~/components/forms/SelectField.vue";
import ButtonField from "~/components/forms/ButtonField.vue";
import CheckboxField from "~/components/forms/CheckboxField.vue";
import TextField from "~/components/forms/TextField.vue";
import ImageControl from "~/components/forms/ImageControl.vue";
import ValidatedTextField from "~/components/forms/ValidatedTextField.vue";
import ValidatedSelectField from "~/components/forms/ValidatedSelectField.vue";
import SmallCheckbox from "~/components/forms/smallCheckbox.vue";
import DynamicField from "~/components/forms/DynamicField.vue";
import TheBadge from "~/components/forms/TheBadge.vue";
import Error from "~/components/forms/Error.vue";

Vue.component("small-checkbox", SmallCheckbox);
Vue.component("validated-select-field", ValidatedSelectField);
Vue.component("validated-text-field", ValidatedTextField);
Vue.component("image-control", ImageControl);
Vue.component("input-field", InputField);
Vue.component("select-field", SelectField);
Vue.component("button-field", ButtonField);
Vue.component("checkbox-field", CheckboxField);
Vue.component("text-field", TextField);
Vue.component("dynamic-field", DynamicField);
Vue.component("the-badge", TheBadge);
Vue.component("error", Error);

// Form Vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Custom design step form
import PersonalData from "@/components/multi-step-form/custom-design/PersonalData.vue";
import Design from "@/components/multi-step-form/custom-design/Design.vue";
import Vehicle from "@/components/multi-step-form/custom-design/Vehicle.vue";
import Price from "@/components/multi-step-form/custom-design/Price.vue";
import SendRequest from "@/components/multi-step-form/custom-design/SendRequest.vue";
import StepPagination from "@/components/multi-step-form/StepPagination.vue";

Vue.component("step-pagination", StepPagination);
Vue.component("personal-data", PersonalData);
Vue.component("design", Design);
Vue.component("vehicle", Vehicle);
Vue.component("price", Price);
Vue.component("send-request", SendRequest);

// Partner step
import CompanyStep from "~/components/multi-step-form/partner-stepper/CompanyStep.vue";
import UserStep from "~/components/multi-step-form/partner-stepper/UserStep.vue";
Vue.component("company-step", CompanyStep);
Vue.component("user-step", UserStep);
