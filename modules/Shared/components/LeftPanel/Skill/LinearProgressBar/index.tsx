import { ProgressBar, SkillContainer } from './style';

const LinearProgressBar = ({
  height = 3,
  proficiency,
  name,
}: {
  height?: number;
  proficiency: number;
  name: string;
}) => {
  if (!proficiency) {
    throw new Error('proficiency prop is required');
  }
  return (
    <SkillContainer>
      <div className="texts-container">
        <h6>{name}</h6>
        <h6>{proficiency} %</h6>
      </div>
      <ProgressBar height={height} proficiency={proficiency} />
    </SkillContainer>
  );
};

export default LinearProgressBar;
