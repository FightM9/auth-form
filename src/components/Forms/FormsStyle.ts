import styled from 'styled-components';
import { InputProps } from './FormType';

// Form

export const Form = styled.form`
  display: grid;
  gap: 40px;
`;

export const FromBody = styled.div`
  display: grid;
  gap: 20px;
`;

export const FromFooter = styled(FromBody)``;

// Input & InputMessage

export const InputLabel = styled.label`
  display: grid;
  gap: 10px;
`;
export const Input = styled.input<InputProps>`
  padding: 19px 20px;
  font-size: 16px;
  color: var(--input-text-color);
  background-color: var(--primary-muted-2);
  border: none;
  border-radius: var(--border-radius);
  overflow: hidden;
  outline: ${(props) => (props.error ? '1px solid var(--danger)' : '')};

  &:focus-visible {
    outline-color: ${(props) =>
      props.error ? 'var(--danger)' : 'var(--primary-muted-1)'};
  }
`;

export const InputMessage = styled.span`
  margin-top: -2px;
  font-size: 14px;
  color: var(--danger);
`;

// Checkbox

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 1px solid currentColor;
  border-radius: 4px;
  transform: translateY(-0.075em);

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    background-color: var(--primary);
    border-radius: 2px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:checked::before {
    transform: scale(1);
  }
`;
