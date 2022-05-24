require('./bootstrap');

// Import modules...
import {
    createApp,
    h
} from 'vue';
import {
    App as InertiaApp,
    plugin as InertiaPlugin
} from '@inertiajs/inertia-vue3';
import {
    InertiaProgress
} from '@inertiajs/progress';

import mixins from './mixins';

const el = document.getElementById('app');
import Layout from '@/Layouts/AppLayout'

// Vue toast
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// vue  sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    // You can set your default options here
};

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`./Pages/${name}`)
                    .then(({
                        default: page
                    }) => {
                        if (page.layout === undefined) {
                            page.layout = Layout
                        }
                        return page
                    }),
        }),
})
    .mixin(mixins)
    .use(InertiaPlugin);

//Global components
import JetActionMessage from "@/Jetstream/ActionMessage";
import JetButton from "@/Jetstream/Button";
import JetDangerButton from "@/Jetstream/DangerButton";
import JetSecondaryButton from '@/Jetstream/SecondaryButton'
import JetFormSection from "@/Jetstream/FormSection";
import JetCardSection from "@/Jetstream/CardSection";
import JetInput from "@/Jetstream/Input";
import JetTextInput from "@/Jetstream/TextInput";
import JetCheckbox from "@/Jetstream/Checkbox";
import JetImageInput from "@/Jetstream/ImageInput";
import JetFileInput from "@/Jetstream/FileInput";
import JetMultipleFileInput from "@/Jetstream/MultipleFileInput";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import JetSectionBorder from "@/Jetstream/SectionBorder";
import JetDialogModal from "@/Jetstream/DialogModal";
import JetPagination from '@/Jetstream/Pagination';
import JetIcon from '@/Jetstream/Icon';
import JetCard from '@/Jetstream/Card';
import JetDatatable from '@/Jetstream/Datatable';
import JetSelect from "@/Jetstream/Select";
import JetDropdown from "@/Jetstream/Dropdown";
import JetSearch from "@/Jetstream/Search";
import JetMultipleImageInput from "@/Jetstream/MultipleImageInput";
import VueNextSelect from 'vue-next-select'




// Views
import FormView from "@/Views/FormView"

// External Components
app.component('jet-action-message', JetActionMessage);
app.component('jet-button', JetButton);
app.component('jet-danger-button', JetDangerButton);
app.component('jet-secondary-button', JetSecondaryButton);
app.component('jet-form-section', JetFormSection);
app.component('jet-card-section', JetCardSection);
app.component('jet-input', JetInput);
app.component('jet-text-input', JetTextInput);
app.component('jet-checkbox', JetCheckbox);
app.component('jet-image-input', JetImageInput);
app.component('jet-file-input', JetFileInput);
app.component('jet-multiple-file-input', JetMultipleFileInput);
app.component('jet-input-error', JetInputError);
app.component('jet-label', JetLabel);
app.component('jet-section-border', JetSectionBorder);
app.component('jet-dialog-modal', JetDialogModal);
app.component('jet-pagination', JetPagination);
app.component('jet-icon', JetIcon);
app.component('jet-card', JetCard);
app.component('jet-datatable', JetDatatable);
app.component('jet-select', JetSelect);
app.component('jet-dropdown', JetDropdown);
app.component('jet-search', JetSearch);
app.component('jet-multiple-image-input', JetMultipleImageInput);
app.component('vue-select', VueNextSelect)



// Views
app.component('form-view', FormView)

// External
import { Tabs, Tab } from 'vue3-tabs-component';

app.component('tabs', Tabs)
app.component('tab', Tab)


// Plugins
app.use(Toast, options);
app.use(VueSweetalert2);

app.mount(el);

InertiaProgress.init({
    color: '#1e62eb'
});
