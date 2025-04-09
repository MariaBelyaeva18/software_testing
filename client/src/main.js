import { createApp } from 'vue'
import {createPinia} from "pinia";

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { VDateInput, VTimePicker } from 'vuetify/labs/components';

import App from './App.vue'

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const vuetify = createVuetify({
  components: {
    ...components,
    VDateInput,
    VTimePicker,
  },
  directives,
});
app.use(vuetify);

app.mount('#app');
