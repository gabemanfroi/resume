import CircularProgressBar from './CircularProgressBar';
import LinearProgressBar from './LinearProgressBar';

interface SkillProps {
  name: string;
  proficiency: number;
  type: 'circular' | 'linear';
}

const Skill = ({ name, proficiency, type }: SkillProps) => {
  return (
    <>
      {type === 'circular' && (
        <>
          <CircularProgressBar name={name} proficiency={proficiency} />
        </>
      )}
      {type === 'linear' && (
        <>
          <LinearProgressBar name={name} proficiency={proficiency} />
        </>
      )}
    </>
  );
};

export default Skill;
