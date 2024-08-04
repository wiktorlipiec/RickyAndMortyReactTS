import React from 'react';
import { StyledLinkButton } from './LinkButton.style';

interface ILinkButtonProps {
  to: string;
  children: React.ReactNode;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({ to, children }) => {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
};
