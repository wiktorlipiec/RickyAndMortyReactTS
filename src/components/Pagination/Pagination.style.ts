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
        padding: 8px 12px;
        border-radius: 5px;
        border: 1px solid #ddd;
        color: #007bff;
        cursor: pointer;
        text-decoration: none;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        transition: 0.4s;

        &:hover {
          background-color: #007bff;
          color: white;
        }
      }

      &.selected a {
        background-color: #007bff;
        color: white;
      }

      &.disabled a {
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;
