import S from '@sanity/desk-tool/structure-builder';
import siteManagement from './src/structure/siteManagement';

const hiddenDocTypes = listItem => !['header',
  'footer',
  'homePage',
  'staticPage',
].includes(listItem.getId());

export default () => S.list()
  .title('Content')
  .items([siteManagement, ...S.documentTypeListItems().filter(hiddenDocTypes)]);
