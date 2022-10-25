import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Site Management')
  .child(
    S.list()
      .title('Sections')
      .items([
        S.documentListItem()
          .schemaType('header')
          .id(`header`)
          .child(
            S.document()
              .title('Header')
              .schemaType('header')
          ),
        S.documentListItem()
          .schemaType('homePage')
          .id(`homePage`)
          .child(
            S.document()
              .title('Home Page')
              .schemaType('homePage')
          ),
        S.documentListItem()
          .schemaType('footer')
          .id(`footer`)
          .child(
            S.document()
              .title('Footer')
              .schemaType('footer')
          ),
        S.listItem()
          .title('Static Pages')
          .child(
            S.documentTypeList('staticPage')
              .schemaType('staticPage')
              .title('Static Page'))
      ]),
  );
