import { Btn } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn className={selected && 'isSelected'} type={type} {...otherProps}>
      {children}
    </Btn>
  );
};
