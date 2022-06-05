import { FC } from 'react';
import { AlertWrapper, TextIcon } from './AlertStyle';
import { AlertProps } from './AlertType';

const Alert: FC<AlertProps> = ({ message }) => {
  return (
    <AlertWrapper>
      <TextIcon>!</TextIcon>
      <span>{message}</span>
    </AlertWrapper>
  );
};

export default Alert;
