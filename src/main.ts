import { createApp, Config } from 'lightning-vue';
import App from './App.vue';

Config.debug = false;
Config.rendererOptions = {
  enableInspector: true,
};
createApp(App);
