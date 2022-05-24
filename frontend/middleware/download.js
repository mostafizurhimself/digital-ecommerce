export default function ({
    route,
    $axios,
    store,
    redirect,
    error
}) {
    return $axios.get(
        `/orders/${route.params.id}`
    ).then((res) => {
        if (res.data.data.customerId !== store.$auth.user.id) {
            error({ statusCode: 404, message: "Sorry, the page you are looking for is not found." })
        }
    })
        .catch(err => {
            error({ statusCode: 404, message: "Sorry, the page you are looking for is not found." })
        });
}
