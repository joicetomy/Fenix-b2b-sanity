export default {
  type: 'object',
  name: 'richTextEditor',
  title: 'Text Block Component',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'richTextBox',
      title: 'Text Block',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Align Left', value: 'normal'},
            { title: 'Align Center', value: 'center'  },
            { title: 'Align Right', value: 'right'},
            { title: 'Justify Contents', value: 'justify'},
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike through', value: 'strike-through' },
            ],
          },
        },
      ],
    },
  ],
};
