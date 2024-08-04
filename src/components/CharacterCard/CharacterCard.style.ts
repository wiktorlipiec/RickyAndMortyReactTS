import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  transition: 0.4s;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
`;

export const Avatar = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 5px 0;
`;

export const Status = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 5px 0;
`;
