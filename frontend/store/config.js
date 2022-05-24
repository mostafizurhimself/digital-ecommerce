export const state = () => ({
  appearances: null,
  settings: null,
  features: null,
  enums: null,
  options: null
});

// Getters
export const getters = {
  getHeroSection(state) {
    return state.appearances?.find(item => item.name == "hero");
  },
  getDesignSection(state) {
    return state.appearances?.find(item => item.name == "design");
  },
  getCustomSection(state) {
    return state.appearances?.find(item => item.name == "custom");
  },
  getPartnerSection(state) {
    return state.appearances?.find(item => item.name == "partner");
  },
  getWelcomeSection(state) {
    return state.appearances?.find(item => item.name == "welcome_text");
  },
  getHowItWorks(state) {
    return state.appearances?.find(item => item.name == "how_it_works");
  },
  getHowItWorksPageContent(state) {
    return state.appearances?.find(item => item.name == "how_it_works_page");
  },
  getPartnerPageContent(state) {
    return state.appearances?.find(item => item.name == "partner_page");
  },
  getTermsPageContent(state) {
    return state.appearances?.find(item => item.name == "terms_conditions");
  },
  getCustomOrderImage(state) {
    return state.appearances?.find(item => item.name == "custom_order");
  },
  getWebsiteSettings(state) {
    return state.settings?.find(item => item.name == "website");
  },
  getVatSettings(state) {
    return state.settings?.find(item => item.name == "vat");
  },
  getFeatures(state) {
    return state.features;
  },
  getDesignPageSlider(state) {
    return state.sliders?.find(item => item.name == "designs_page_slider");
  },
  getCustomPageSlider(state) {
    return state.sliders?.find(item => item.name == "custom_page_slider");
  },
  getBodyWorks(state) {
    return state.options?.bodywork;
  },
  getServiceOptions(state) {
    return state.options?.service;
  }
};

// Mutations
export const mutations = {
  SET_STATE(state, config) {
    state.appearances = config.appearances;
    state.settings = config.settings;
    state.features = config.features;
    state.sliders = config.sliders;
    state.enums = config.enums;
    state.options = config.options;
  }
};

// Actions
export const actions = {
  async setConfig({ commit }, { url }) {
    try {
      const resConfig = await this.$axios.$get(url);
      commit("SET_STATE", resConfig.data);
    } catch (error) {
      console.log(error);
    }
  }
};
