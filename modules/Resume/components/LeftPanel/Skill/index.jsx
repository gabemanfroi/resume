import CircularProgressBar from './CircularProgressBar';
import LinearProgressBar from './LinearProgressBar';

const Skill = ({ name, proficiency, type }) => {
  return (
    <>
      {
        type === 'circular' && <>
          <CircularProgressBar name={name} proficiency={proficiency} />
        </>
      }
      {
        type === 'linear' && <>
          <LinearProgressBar name={name} proficiency={proficiency} />
        </>
      }
    </>
  );
};

export default Skill;