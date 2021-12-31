import { CircularProgressbar } from 'react-circular-progressbar';

const CircularProgressBar = ({ name, proficiency }) => {
  if (!proficiency) {
    throw new Error('proficiency prop is required');
  }
  return (
    <>
      <CircularProgressbar value={proficiency} text={`${proficiency}%`} />
      <span>{name}</span>
    </>
  );
};

export default CircularProgressBar;