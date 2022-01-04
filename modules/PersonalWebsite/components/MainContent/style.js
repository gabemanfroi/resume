import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  width: 100%;
  padding: 16px;
  transition: all ease 0.55s;
  margin-top: 70px;

  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 992px) {
    padding: 24px;
    margin-left: ${props => props.isSidebarActive ? '12%' : '20%'};
    height: 100%;
    margin-top: 0;
    overflow-y: scroll;

  }

  @media screen and (min-width: 1200px) {
  }

  .container-background {

    width: 100%;
    position: absolute;
    background-image: url(${({ backgroundImage }) => backgroundImage || '/assets/images/hero_background.jpg'});
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-attachment: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    @media screen and (max-width: 600px) {
      height: 50%;
      padding: 16px;
      margin-left: unset;
    }

    @media screen and (min-width: 600px) {
      height: 40%;
    }

    @media screen and (min-width: 992px) {
      height: 45%;
    }

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
  height: 100%;

  h3, h1 {
    margin-bottom: 16px;
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }

`;