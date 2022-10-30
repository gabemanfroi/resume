import styled from 'styled-components';

export const Container = styled.section`
  border-bottom: 1px solid rgba(140, 140, 142, 0.3);

  ul {
    .item {
      display: flex;
      justify-content: space-between;
      font-size: 13px !important;

      h6 {
        margin: 0 0 5px 0;
        color: white;
        font-weight: 400;
        flex: 0.3;
      }

      * {
        font-size: 13px;
      }

      span {
        color: #8c8c8e;
      }
    }
  }
`;
