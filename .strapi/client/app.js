/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor5 from "@_sh/strapi-plugin-ckeditor/strapi-admin";
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import videoField from "@sklinet/strapi-plugin-video-field/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import documentation from "@strapi/plugin-documentation/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import configSync from "strapi-plugin-config-sync/strapi-admin";
import cookieManager from "strapi-plugin-cookie-manager/strapi-admin";
import countrySelect from "strapi-plugin-country-select/strapi-admin";
import multiSelect from "strapi-plugin-multi-select/strapi-admin";
import navigation from "strapi-plugin-navigation/strapi-admin";
import previewButton from "strapi-plugin-preview-button/strapi-admin";
import restCache from "strapi-plugin-rest-cache/strapi-admin";
import sitemap from "strapi-plugin-sitemap/strapi-admin";
import vercelDeploy from "strapi-plugin-vercel-deploy/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.js";

renderAdmin(document.getElementById("strapi"), {
  customisations,
  plugins: {
    ckeditor5: ckeditor5,
    ckeditor: ckeditor,
    "video-field": videoField,
    "color-picker": colorPicker,
    documentation: documentation,
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
    "config-sync": configSync,
    "cookie-manager": cookieManager,
    "country-select": countrySelect,
    "multi-select": multiSelect,
    navigation: navigation,
    "preview-button": previewButton,
    "rest-cache": restCache,
    sitemap: sitemap,
    "vercel-deploy": vercelDeploy,
  },
});