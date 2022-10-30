import styled from 'styled-components';
import { colors } from 'modules/Shared/theme/colors';

export const SkillContainer = styled.div`
  h6 {
    margin-bottom: 5px;
    font-family: Poppins, sans-serif;
    font-size: 13px;
    color: #cacace;
    font-weight: 400;
  }

  .texts-container {
    display: flex;
    justify-content: space-between;
  }

  margin-bottom: 15px;
`;

interface ProgressBarProps {
  height: number;
  proficiency: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background: #191923;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ proficiency }) => `${proficiency}%`};
    background: ${colors.primaryBlue};
  }
`;
