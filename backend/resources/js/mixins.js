import pickBy from "lodash/pickBy";
import mapValues from "lodash/mapValues";

export default {
    computed: {
        searchQuery() {
            return pickBy(this.filters);
        },
    },

    methods: {
        // Zigggy route method
        route,

        // Delete resource from storage
        deleteResource(route) {
            this.$swal
                .fire({
                    title: "Are you sure?",
                    text: "You will not be able to recover this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#EF4444",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "Cancel",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$inertia.delete(route);
                    }
                });
        },

        // Get filtered data
        getResults(route) {
            this.$inertia.get(
                this.route(route),
                pickBy(this.filters),
                { preserveState: true }
            );
        },

        //Reset Search filter
        reset() {
            this.filters = mapValues(this.filters, () => null);
        },
    }
}