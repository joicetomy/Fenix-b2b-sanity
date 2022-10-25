export default {
  type: 'document',
  name: 'header',
  title: 'Header',
  fields: [
   {
     title:"Brand Name",
     name:"brandName",
     type:"string"
   },
    {
     title: 'Brand Logo',
     name: 'brandLogo',
     type: 'image'
   },
   {
     title:"Catalog Tabs",
     name:"catalogTabs",
     type:"catalog"
   },
   {
     title:"Header Labels",
     name:"headerLabel",
     type:"headerLabel",
   },
   {
    name: 'preOrderCategories',
    title: 'Pre-Order Categories',
    description:"Add categories to be displayed under Pre-order pages",
    type: 'array',
    validation: Rule => Rule.custom(categories => {
      if (categories && categories.length > 6) { return 'You can add only 6 categories'; }
      return true;
    }),
    of: [
      {
        type: 'category',
      },
    ],
  },
   {
    name: 'categories',
    title: 'Re-Order Categories',
    description:"Add categories to be displayed under Re-order pages",
    type: 'array',
    validation: Rule => Rule.custom(categories => {
      if (categories && categories.length > 6) { return 'You can add only 6 categories'; }
      return true;
    }),
    of: [
      {
        type: 'category',
      },
    ],
  },
],
preview: {
  prepare() {
    return { title: 'Header' };
  },
},
};





