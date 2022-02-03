import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import {AiFillHome} from 'react-icons/ai';
// import { ImCog } from 'react-icons/im';
// import { BsPeopleFill } from 'react-icons/bs';
// import { AiFillStar } from 'react-icons/ai';
// import { RiQuestionnaireFill } from 'react-icons/ri';

export const iconStyle = {
  fontSize: '24px',
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(() => <AiFillHome />)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Team Page')
        .icon(() => <h1>Hi</h1>)
        .child(S.editor().schemaType('teamPage').documentId('teamPage')),
      // S.listItem()
      //   .title('Products')
      //   .icon(() => <span style={iconStyle}>🎁</span>)
      //   .child(S.editor().schemaType('products').documentId('products')),
      // S.listItem()
      //   .title('Navigation')
      //   .icon(() => <span style={iconStyle}>🧭</span>)
      //   .child(S.editor().schemaType('navigation').documentId('navigation')),
      ...S.documentTypeListItems().filter(
        listItem => !['homepage', 'teamPage'].includes(listItem.getId())
      ),
    ]);
