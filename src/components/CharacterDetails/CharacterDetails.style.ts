import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1rem;
`;
