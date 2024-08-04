import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  color: #007bff;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
