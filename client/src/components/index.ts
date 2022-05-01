import { App } from "vue";

import Button from "./button/Button.vue";
import Popover from "./popover/Popover.vue";
import Session from "./session/Session.vue";

export const registerComponent = (instance: App) => {
  instance.component("e-button", Button);
  instance.component("e-popover", Popover);
  instance.component("e-session", Session);
};
