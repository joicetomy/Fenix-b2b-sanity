export default {
  title: 'Catalog',
  name: 'catalog',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: 'Re-order Button Label',
      name: 'reorderBtn',
      type: 'string',
    },
    {
      title: 'Pre-order Button Label',
      name: 'preorderBtn',
      type: 'string',
    },
    {
      name: 'preOrderLink',
      title: 'Pre-order page link',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }),
    },
    {
      name: 'preOrderModalHeader',
      title: 'Pre-order unavailable pop-up Header',
      type: 'string',
    },
    {
      name: 'preOrderModalMessage',
      title: 'Pre-order unavailable pop-up message',
      type: 'text',
      rows: 3,
    },
    {
      name: 'preOrderModalButtonLabel',
      title: 'Pre-order unavailable pop-up button label',
      type: 'string',
    },
  ],
};
