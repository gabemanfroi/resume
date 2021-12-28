import styled from 'styled-components';

export const Container = styled.main`
  overflow-y: scroll;
  position: relative;
  width: 100%;

  padding: 24px;

  .container-background {

    width: 100%;
    position: absolute;
    background-image: url('/assets/images/hero_background.jpg');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-attachment: fixed;
    top: 0;
    left: 0;
    height: 45%;
    z-index: 0;

    &:before {
      background-image: linear-gradient(180deg, rgba(30, 30, 40, .93) 0%, rgba(30, 30, 40, .96) 70%, rgba(30, 30, 40, .99) 80%, #1e1e28 100%);
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;


export const HeroBanner = styled.section`
  width: 100%;
  height: 50%;
  position: relative;
  background-image: url('/assets/images/hero_background.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;


  .overlay {
    padding: 60px;
    background-image: linear-gradient(90deg, rgba(45, 45, 58, .9) 15%, rgba(45, 45, 58, .7) 50%, rgba(43, 43, 53, .7) 100%);
    width: 100%;
    height: 100%;
    color: white;

    h1 {
      font-weight: 800;
      font-size: 42px;
      line-height: 50px;
    }

    .transitioning-text {
      font-family: 'Courier Prime', monospace;
      font-weight: normal;

      span {
        color: #3E98C7;
      }
    }

  }
`;

export const Divider = styled.div`
  position: relative;
  height: 30px;
  background: rgba(30, 30, 40, .88);;
  opacity: 1;
  margin: 0 35px;
`;

export const HeroContent = styled.div`
  color: white;
  position: relative;
  margin-top: 30px;
  width: 100%;

  h3 {
    margin-bottom: 16px;
  }

  .projects-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-basis: 100%;


    .project-item-container {
      width: 33%;
      padding: 16px;


      &::after {
        display: block;
        content: '';
        padding-bottom: 40%;
      }

      .project-item {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        background: #2C2C38;
        padding: 30px;
        height: 100%;
        width: 100%;
      }
    }
  }
`;