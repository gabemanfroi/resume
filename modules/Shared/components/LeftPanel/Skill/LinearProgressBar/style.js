import styled from 'styled-components';

export const Container = styled.div`
  h6 {
    margin-bottom: 5px;
    font-family: Poppins, sans-serif;
    font-size: 13px;
    color: #CACACE;
    font-weight: 400;
  }

  .texts-container {
    display: flex;
    justify-content: space-between;
  }


  margin-bottom: 15px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  background: #191923;
  position: relative;

  &:after {

    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => `${props.proficiency}%`};
    background: #3E98C7;
  }
`;