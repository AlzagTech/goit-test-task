import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleIsFollowed } from 'redux/usersSlice';

import {
  UserBtn,
  UserTextBox,
  UserBox,
  UserImgBox,
} from './UsersListItem.styled';

export const UsersListItem = ({ user }) => {
  const { avatar, tweets, followers, isFollowed } = user;

  const dispatch = useDispatch();

  const handleIsFollowed = () => dispatch(toggleIsFollowed(user.id));

  return (
    <UserBox>
      <UserImgBox>
        <img src={avatar} alt="User avatar" />
      </UserImgBox>
      <UserTextBox>
        <p>{tweets} Tweets</p>
        <p>{followers.toLocaleString()} Followers</p>
      </UserTextBox>
      <UserBtn
        type="button"
        className={isFollowed && 'isFollowed'}
        onClick={handleIsFollowed}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </UserBtn>
    </UserBox>
  );
};
