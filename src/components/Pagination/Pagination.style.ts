import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;

    li {
      margin: 0 5px;

      a {
        padding: 0.8rem 1.2rem;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        text-decoration: none;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        transition: 0.4s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
      }

      &.selected a {
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      &.disabled a {
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;
