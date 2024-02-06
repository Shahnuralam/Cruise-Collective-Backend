import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
import ckeditor5MrkdownDll from "@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js";

const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "CMS Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Cruise Line",
    },
  },
};

const bootstrap = (app) => {};

export default {
  config,
  bootstrap,
};
