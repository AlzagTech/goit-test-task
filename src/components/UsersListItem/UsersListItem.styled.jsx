import styled from 'styled-components';

import logo from 'images/logo.svg';
import bg from 'images/bg.png';

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;

  position: relative;

  width: 380px;
  padding-top: 178px;
  padding-bottom: 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 76px;
    height: 22px;
    left: 20px;
    top: 20px;

    background-image: url(${logo});
  }

  &::after {
    content: '';
    position: absolute;
    width: 308px;
    height: 168px;
    left: 36px;
    top: 28px;

    background-image: url(${bg});
  }
`;

export const UserImgBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 40px;
    transform: translate(-50%, -50%);

    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 0px;
    transform: translate(0, -50%);

    width: 80px;
    height: 80px;
    border-radius: 50%;

    background-color: #ebd8ff;

    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  img {
    z-index: 3;

    width: 62px;
    height: 62px;
    object-fit: cover;

    border-radius: 50%;
  }
`;

export const UserTextBox = styled.div`
  text-align: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #ebd8ff;
  }

  p + p {
    margin-top: 16px;
  }
`;

export const UserBtn = styled.button`
  min-width: 196px;
  padding: 14px 0;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  color: #373737;
  background-color: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;

  &.isFollowed {
    background-color: #5cd3a8;
  }

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
