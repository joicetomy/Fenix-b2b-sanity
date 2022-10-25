export default {
  type: 'object',
  name: 'product',
  title: 'Product',
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'productId',
      type: 'string',
      title: 'Product Id',
    },
    {
      name: 'productColor',
      type: 'string',
      title: 'Product Color',
    },
    {
      name: 'variantId',
      type: 'string',
      title: 'Variant id',
    },
    {
      name: 'listPrice',
      type: 'string',
      title: 'List Price',
    },
    {
      name: 'recommendedRetailPrice',
      type: 'string',
      title: 'Recommended Retail Price',
    },
    {
      title: 'Product link',
      name: 'link',
      type: 'string',
      description: 'Enter the relative URL (Eg : /product-list/<productId> )',
    },
    {
      title: 'Product Image',
      name: 'productImage',
      type: 'image',
    },
  ]
};