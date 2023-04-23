import styled from 'styled-components';

export const Btn = styled.button`
  padding: 14px 28px;

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

  &.isSelected {
    background-color: #5cd3a8;
  }
`;
