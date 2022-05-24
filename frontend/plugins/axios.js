export default function ({
  $axios,
  store,
  app,
  error
}) {
  $axios.onError(err => {
    if (err.response.status === 422) {
      store.dispatch("validation/setErrors", err.response.data.errors);
      // Send toast message
      app.$toast.error("There are some error on your form!", {
        timeout: 2000
      });
    }

    // Check unauthorized access
    if (err.response.status === 500) {
      error({ statusCode: err.response.status, message: "Server error." })
    }

    return Promise.reject(err);
  });


  $axios.onRequest(() => {
    store.dispatch("validation/clearErrors");
  });
}
