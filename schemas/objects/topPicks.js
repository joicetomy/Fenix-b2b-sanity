export default {
  type: 'object',
  name: 'topPicks',
  title: 'Top Picks',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'linkWithText',
      type: 'linkWithText',
      title: 'Redirection link with text',
    },
    {
      title: 'Add products',
      name: 'products',
      type: 'array',
      validation: Rule => Rule.unique(),
      of: [{ type: 'product' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Top Picks',
      };
    },
  },
};

