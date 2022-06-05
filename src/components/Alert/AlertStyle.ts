import styled from 'styled-components';

export const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 60px;
  padding: 20px;
  font-size: 14px;
  background-color: var(--danger-muted-2);
  border: 1px solid var(--danger);
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextIcon = styled.span`
  width: 20px;
  height: 20px;
  min-width: 20px;
  color: var(--danger);
  text-align: center;
  line-height: 20px;
  background-color: var(--danger-muted-1);
  border-radius: 50%;
`;
