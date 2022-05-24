import Vue from "vue";

import PrettyCheckbox from "pretty-checkbox-vue";
import PrettyInput from "pretty-checkbox-vue/input";
import PrettyCheck from "pretty-checkbox-vue/check";
import PrettyRadio from "pretty-checkbox-vue/radio";

Vue.component("p-input", PrettyInput);
Vue.component("p-check", PrettyCheck);
Vue.component("p-radio", PrettyRadio);
Vue.use(PrettyCheckbox);
