import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    control_vineta5: boolean;
  }
}
