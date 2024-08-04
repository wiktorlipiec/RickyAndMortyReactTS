import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: none;
  }
`;
