const orderMenu = {
  type: 'object',
  name: 'orderMenu',
  title: 'Menu',
  fields: [
    {
      name: 'viewAllOrders',
      type: 'string',
      title: 'Orders listing label',
    },
    {
      name: 'csvUpload',
      type: 'string',
      title: 'Upload CSV label',
    },
    {
      name: 'csvUploadModal',
      type: 'modalItems',
      title: 'Csv upload modal',
      description : "Configure CSV upload modal contents"
    },
  ],
  options: {
    collapsible: true,
  },
};

const modalItems = {
  name: 'modalItems',
  type: 'object',
  title: 'Modal items',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'modalHeader',
      type: 'string',
      title: 'Modal header',
    },
    {
      name: 'uploadPlaceHolder',
      type: 'string',
      title: 'upload placeholder',
    },
    {
      name: 'uploadButtonLabel',
      type: 'string',
    },
    {
      name: 'needSampleLabel',
      type: 'string',
      title: 'Need sample label',
    },
    {
      name: 'downloadLabel',
      type: 'string',
      title: 'Download label',
    },
  ],
};

export {modalItems,orderMenu};
