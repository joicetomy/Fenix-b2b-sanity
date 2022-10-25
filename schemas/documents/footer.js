const footer = {
   name: 'footer',
   type: 'document',
   title: '',
   fields: [
     {
       name: 'footerLeft',
       type: 'footerLeft',
       title: 'Social media handles',
     },
     {
       name: 'footeritemsBlock',
       type: 'array',
       title: 'Footer items',
       validation: Rule => Rule.custom(footeritemsBlock => {
         if (footeritemsBlock && footeritemsBlock.length > 5) { return 'You can add only 5 Footer Items'; }
         return true;
       }),
       of: [
         { type: 'footerItem' },
       ],
     },
   ],
   preview: {
    prepare() {
      return { title: 'Footer' };
    },
  },
 };
 
 const socialMediaFooterLink = {
   type: 'object',
   name: 'socialMediaFooterLink',
   title: 'Social media link',
   fields: [
     {
       name: 'name',
       type: 'string',
       title: 'Name',
     },
     {
       name: 'icon',
       type: 'image',
       title: 'Icon',
       options: {
        hotspot: true,
      },
     },
     {
       name: 'link',
       type: 'url',
       title: 'URL',
     },
   ],
 };
 
 const footerItem = {
   type: 'object',
   name: 'footerItem',
   title: 'Footer Item',
   fields: [
     {
       name: 'name',
       type: 'string',
       title: 'Name',
     },
     {
       name: 'callToAction',
       type: 'string',
       title: 'Call to action',
       validation: Rule => Rule.required(),
       options: {
         list: [
           { title: 'Internal', value: 'internal' },
           { title: 'External', value: 'external' },
         ],
       },
     },
     {
       name: 'link',
       type: 'url',
       title: 'URL',
       validation: Rule => Rule.uri({ allowRelative: true }),
     },
   ],
 };
 
 const footerLeft = {
   name: 'footerLeft',
   type: 'object',
   title: 'Social media handles',
   fields: [
     {
       name: 'title',
       type: 'string',
       title: 'Header',
     },
     {
       name: 'socialMediaBlock',
       type: 'array',
       title: 'Social media links',
       validation: Rule => Rule.custom(socialMediaLink => {
         if (socialMediaLink && socialMediaLink.length > 5) { return 'You can add only 5 Social Media Link'; }
         return true;
       }),
       of: [
         { type: 'socialMediaFooterLink' },
       ],
     },
   ],
 };
 
 
 
 export { footer, socialMediaFooterLink, footerItem, footerLeft };
 