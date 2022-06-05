import styled from 'styled-components';

export interface ButtonProps {
  readonly color?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  height: 60px;
  padding: 19px 20px;
  color: ${(props) => (props.color === 'secondary' ? '#000' : '#fff')};
  font-weight: 700;
  font-size: 18px;
  border: none;
  background: ${(props) =>
    props.color === 'secondary' ? 'var(--primary-muted-2)' : 'var(--primary)'};
  border-radius: var(--border-radius);
  filter: none;
  transition: filter 0.2s;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }
  &:disabled {
    filter: brightness(100%) opacity(0.5);
    cursor: default;
  }
`;
