import styled from 'styled-components';

export const Container = styled.div`
  .projects-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-basis: 100%;


    .project-item-container {
      width: 100%;
      padding: 16px;

      @media screen and (max-width: 600px) {
        padding: unset;
      }

      @media screen and (min-width: 600px) {
        width: 50%;
      }

      @media screen and (min-width: 992px) {
        width: 33%;

      }

      @media screen and (min-width: 1200px) {

      }


      &::after {
        display: block;
        content: '';
        padding-bottom: 40%;
      }

      .project-item {
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
        background: #2C2C38;
        padding: 30px;
        height: 100%;
        width: 100%;
        transition: opacity .55s;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

`;