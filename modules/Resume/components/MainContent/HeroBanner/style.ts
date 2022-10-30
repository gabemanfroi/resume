import styled from 'styled-components';

export const Container = styled.section<{ backgroundImage: string }>`
  width: 100%;
  position: relative;
  background-image: url(${({ backgroundImage }) =>
    backgroundImage || '/assets/images/hero_background.jpg'});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  text-align: center;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) {
    height: 40%;
  }

  @media screen and (min-width: 992px) {
    height: 50%;
    margin-top: unset;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
  }

  .overlay {
    padding: 4vw;
    background-image: linear-gradient(
      90deg,
      rgba(45, 45, 58, 0.9) 15%,
      rgba(45, 45, 58, 0.7) 50%,
      rgba(43, 43, 53, 0.7) 100%
    );
    width: 100%;
    color: white;
    height: 100%;

    @media screen and (max-width: 600px) {
      padding: 60px 30px;
    }

    h1 {
      font-weight: 800;
      font-size: 10vw;

      @media screen and (max-width: 600px) {
      }

      @media screen and (min-width: 600px) {
        font-size: 4vw;
      }

      @media screen and (min-width: 992px) {
        font-size: 3vw;
      }

      @media screen and (min-width: 1200px) {
      }
    }
  }
`;
