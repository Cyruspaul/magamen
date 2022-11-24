import {createI18n} from "vue-i18n";
import messages from './messages.js'
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});
export default  i18n;