export default {
    type: 'document',
    name: 'homePage',
    title: 'Home Page',
    fields: [
      {
        name: 'contents',
        type: 'array',
        title: 'Page sections',
        options: {
          editModal: 'dialog',
        },
        validation: Rule => Rule.required(),
        description: 'Add, edit, and reorder sections',
        of: [
          { type: 'topPicks' },
          { type: 'bannerCarousal' },
          { type: 'catalogueBanner' },
        ],
      },
    ],
    preview: {
      prepare() {
        return { title: 'Home Page' };
      },
    },
};