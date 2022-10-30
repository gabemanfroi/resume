import styled from 'styled-components';

export const Container = styled.div`
  .projects-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-basis: 100%;

    .project-item-container {
      flex: 1 0 100%;
      padding: 16px;
      margin-bottom: 30px;

      @media screen and (max-width: 600px) {
        padding: unset;
      }

      @media screen and (min-width: 600px) {
        flex: 1 0 50%;
      }

      @media screen and (min-width: 992px) {
        flex: 0.5 0 33%;
      }

      &::after {
        display: block;
        content: '';
        padding-bottom: 40%;
      }

      .project-item {
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;

        padding: 30px;
        height: 100%;
        width: 100%;
        transition: opacity 0.55s;
        position: relative;

        &:hover {
          opacity: 0.5;
        }

        &:after {
          background: {
            content: '';
            position: absolute;
            background: red;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          },
        }
      }

    }
  }
`;
