import type { Schema, Attribute } from '@strapi/strapi';

export interface CruiseLineCallout extends Schema.Component {
  collectionName: 'components_cruise_line_callouts';
  info: {
    displayName: 'callout';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    saving: Attribute.String;
    description: Attribute.String;
  };
}

export interface HomepageFeature extends Schema.Component {
  collectionName: 'components_homepage_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    title: Attribute.String;
    feature_image: Attribute.Media;
    permalink: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface HomepageSliders extends Schema.Component {
  collectionName: 'components_homepage_sliders';
  info: {
    displayName: 'Sliders';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    permalink: Attribute.String;
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface HomepageTestimonial extends Schema.Component {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    author: Attribute.String;
  };
}

export interface SharedCookieButton extends Schema.Component {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cruise-line.callout': CruiseLineCallout;
      'homepage.feature': HomepageFeature;
      'homepage.sliders': HomepageSliders;
      'homepage.testimonial': HomepageTestimonial;
      'shared.cookie-button': SharedCookieButton;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
