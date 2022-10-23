// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import { footer, footerItem, footerLeft, socialMediaFooterLink } from './documents/footer'
import header from './documents/header'
import home from './documents/home'
import localeBlockContent from './locale/BlockContent'
import localeString from './locale/String'
import localeText from './locale/Text'
import { bannerButton, bannerCarousal, bannerCarousalItem } from './objects/bannerCarousal'
import blockContent from './objects/blockContent'
import catalog from './objects/catalog'
import catalogueBanner from './objects/catalogueBanner'
import category from './objects/category'
import headerLabel from './objects/headerLabel'
import headerTape from './objects/headerTape'
import linkWithText from './objects/linkWithText'
import { modalItems, orderMenu } from './objects/orderMenu'
import priceManagement from './objects/priceManagement'
import product from './objects/product'
import profileManagement from './objects/profileManagement'
import topPicks from './objects/topPicks'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    header,
    home,
    footer,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    catalog,
    profileManagement,
    priceManagement,
    bannerButton,bannerCarousal,bannerCarousalItem,
    socialMediaFooterLink, footerItem, footerLeft,
    orderMenu,headerTape,
    modalItems,
    category,
    product,
    topPicks,
    catalogueBanner,
    linkWithText,
    headerLabel,
  ]),
})
