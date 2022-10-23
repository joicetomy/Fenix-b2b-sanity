export default {
  type: 'object',
  name: 'headerTape',
  title: 'Top Header',
  description: 'Configure the text labels for top most header area which includes price display control, profile details etc',
  fields: [
    {
      name: 'helpLabel',
      type: 'string',
      title: 'Help label',
    },
    {
      name: 'pricatLabel',
      type: 'string',
      title: 'Pricat label',
    },
    {
      name: 'priceManagement',
      type: 'priceManagement',
      title: 'Price management',
    },
    {
      name: 'profileManagement',
      type: 'profileManagement',
      title: 'Profile management',
    },

  ],
  options: {
    collapsible: true,
  },
};