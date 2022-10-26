export default {
  title: 'Static Pages',
  name: 'staticPage',
  type: 'document',
  fields: [
    {
      title: 'Page Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Page Data',
      name: 'pageData',
      type: 'richTextEditor',
    },
  ],
};
