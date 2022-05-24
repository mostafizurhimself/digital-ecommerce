<template>
  <div class="col-lg-8 mx-auto">
    <div class="row">
      <div class="col-12">
        <h3 class="mb-3">Specify your vehicle</h3>
      </div>
      <!-- Left Column -->
      <div class="col-sm-6">
        <div class="pr-sm-3">
          <!-- Your vehicle manufacturer -->
          <validated-select-field label="Your vehicle manufacturer" v-model="form.vehicleId" :validation="$v.form.vehicleId" :options="vehicles" track="id" @input="getVehicleModel"></validated-select-field>

          <!-- Your vehicle model -->
          <validated-select-field label="Your vehicle model" v-model="form.vehicleModelId" :validation="$v.form.vehicleModelId" :options="vehicleModels" track="id"></validated-select-field>

          <!-- bodywork options -->
          <validated-select-field label="Bodywork" v-model="form.bodywork" :validation="$v.form.bodywork" :options="bodyWorkOptions" track="value" title="value"></validated-select-field>

          <!-- manufacture Year -->
          <validated-text-field v-model="form.vehicleManufactureYear" :validation="$v.form.vehicleManufactureYear" type="number" label="Year of manufacture" placeholder="e.g. 2018"></validated-text-field>

          <!-- Vehicle paint color -->
          <validated-text-field v-model="form.vehicleColor" :validation="$v.form.vehicleColor" type="color" label="Vehicle paint color" imedieate></validated-text-field>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-sm-6">
        <!-- Note -->
        <text-field label="Note" placeholder="Does your vehicle have some packet or modification?" v-model="form.vehicleNote"></text-field>
        <!-- File Upload -->
        <image-control v-model="form.vehiclePhotos" label="Upload photo of your vehicle">
        </image-control>
        <!-- <MultipleImage label="Upload photo of your vehicle" v-model="form.vehiclePhotos" /> -->
      </div>

      <!-- Pagination -->
      <step-pagination :increment="increment" :decrement="decrement" :disableNext="$v.$invalid" @onNext="saveData"></step-pagination>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapMutations, mapGetters } from "vuex";
import MultipleImage from "@/components/forms/MultipleImage";
export default {
  name: "vehicle-form",
  components: {
    MultipleImage
  },
  data() {
    return {
      form: {
        vehicleId: "",
        vehicleModelId: "",
        bodywork: "",
        vehicleManufactureYear: "",
        vehicleColor: "#3346b0",
        vehicleNote: "",
        vehiclePhotos: null
      },
      vehicles: [],
      vehicleModels: []
    };
  },
  validations: {
    form: {
      vehicleId: { required },
      vehicleModelId: { required },
      bodywork: { required },
      vehicleManufactureYear: { required, minLength: minLength(4) },
      vehicleColor: { required }
    }
  },
  computed: {
    ...mapGetters({ bodyWorkOptions: "config/getBodyWorks" })
  },
  methods: {
    ...mapMutations({
      setFields: "customDesign/setFields"
    }),
    saveData(e, increment) {
      this.setFields(this.form);
      increment();
    },
    async getVehicleModel(id) {
      if (id) {
        const res = await this.$axios.get(`/vehicles/${id}/vehicle-models`);
        this.vehicleModels = res.data.data;
      }
    }
  },
  props: {
    increment: {
      type: Function
    },
    decrement: {
      type: Function
    }
  },
  async fetch() {
    const resVehicles = await this.$axios.get("/vehicles");

    this.vehicles = resVehicles.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
