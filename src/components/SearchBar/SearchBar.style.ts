import styled from 'styled-components';

export const Input = styled.input`
  padding: 1.2rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
