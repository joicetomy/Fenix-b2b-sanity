import { fontSizeGenarator } from '../../src/utils/commonUtils';

const bannerButton = {
  title: 'Banner Button',
  name: 'bannerButton',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Select link font size',
      name: 'linkFontSize',
      type: 'string',
      options: {
        list: [
          ...fontSizeGenarator(),
        ],
      },
    },
    {
      title: 'URL',
      name: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      type: 'url',
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link'],
      },
    },
  ],
};

const bannerCarousalItem = {
  type: 'object',
  name: 'bannerCarousalItem',
  title: 'Banner Carousal Item',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      title: 'Select text font size',
      name: 'textFontSize',
      type: 'string',
      options: {
        list: [
          ...fontSizeGenarator(),
        ],
      },
    },
    {
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
      title: 'URL',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'bannerButton',
      type: 'bannerButton',
      title: 'Button',
    },
  ],
};

const bannerCarousal = {
  type: 'object',
  name: 'bannerCarousal',
  title: 'Banner Carousal',
  fields: [
    {
      name: 'contents',
      type: 'array',
      title: 'Banner images',
      of: [{ type: 'bannerCarousalItem' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Banner Images' };
    },
  },
};

export { bannerCarousal, bannerCarousalItem, bannerButton };
