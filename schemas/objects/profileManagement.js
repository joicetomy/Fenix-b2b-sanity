export default {
  type: 'object',
  name: 'profileManagement',
  title: 'Profile Management',
  description: 'Configure text labels for menu items under profile settings',
  fields: [
    {
      name: 'switchSubAccount',
      type: 'string',
      title: 'Switch sub account label',
    },
    {
      name: 'switchSalesCompany',
      type: 'string',
      title: 'Switch sales company label',
    },
    {
      name: 'profile',
      type: 'string',
      title: 'Profile label',
    },
    {
      name: 'signout',
      type: 'string',
      title: 'Sign out label',
    },
  ],
};
