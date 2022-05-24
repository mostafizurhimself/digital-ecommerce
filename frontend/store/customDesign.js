export const state = () => ({
  form: {
    customerId: null,
    vehicleId: '',
    vehicleModelId: '',
    bodywork: '',
    vehicleManufactureYear: null,
    vehicleColor: '',
    vehicleNote: '',
    notConditioned: 0,
    designNote: '',
    categoryId: null,
    rangeFrom: null,
    rangeTo: null,
    customerAmount: null,
    depositAmount: null,
    customerCurrency: "",
    colors: null,
    tags: null,
    products: null,
    vehiclePhotos: null,
    referenceDesigns: null
  }
});

export const getters = {
  getCustomDesign(state) {
    return state.form;
  },
  getCustomerAmount(state) {
    return state.form.customerAmount;
  },
  getDepositAmount(state) {
    return state.form.depositAmount;
  }
}

export const mutations = {
  setFields(state, fields) {
    state.form = { ...state.form, ...fields }
  }
}
