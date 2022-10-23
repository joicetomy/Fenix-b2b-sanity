export default {
  type: 'object',
  name: 'category',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Category',
      name: 'link',
      type: 'string',
      description: 'Enter the relative URL (Eg : /product-list/<categoryId> )',
    }],
};
