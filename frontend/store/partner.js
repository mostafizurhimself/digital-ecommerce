export const state = () => ({
  form: {}
});

export const getters = {

}

export const mutations = {
  setPartner(state, fields) {
    state.form = { ...state.form, ...fields }
  }
}

export const actions = {
  async sendPartnerData({ state }) {

    if (this.$auth.user) {
      const resCompany = await this.$axios.post('/companies', state.form)
      this.$toast.success("Company Created successfully");
      $nuxt.$router.push('/partner/greeting')
    } else {
      try {
        const resRegister = await this.$axios.$post("/register", state.form);
        const resLogin = await this.$auth.loginWith("local", {
          data: {
            email: state.form.email,
            password: state.form.password,
          },
        });
        const resCompany = await this.$axios.post('/companies', state.form)
        this.$toast.success("Company Created successfully");
        $nuxt.$router.push('/partner/greeting')
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          this.$toast.error("Email or Password doesn't match");
        }
      }
    }
  }
}
