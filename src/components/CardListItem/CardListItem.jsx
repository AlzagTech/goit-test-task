import React from 'react';

import avatar from 'images/avatar.jpg';

import {
  CardBtn,
  CardTextBox,
  CardBox,
  CardImgBox,
} from './CardListItem.styled';

export const CardListItem = () => {
  return (
    <CardBox>
      <CardImgBox>
        <img src={avatar} alt="User avatar" />
      </CardImgBox>
      <CardTextBox>
        <p>777 Tweets</p>
        <p>100500 Followers</p>
      </CardTextBox>
      <CardBtn type="button">Follow</CardBtn>
    </CardBox>
  );
};
