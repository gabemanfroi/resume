import { Container, ProgressBar } from './style';

const LinearProgressBar = ({ height = 3, proficiency, name }) => {

  if (!proficiency) {
    throw new Error('proficiency prop is required');
  }
  return (
    <>
      <Container>
        <div className='texts-container'>
          <h6>{name}</h6>
          <h6>{proficiency} %</h6>
        </div>
        <ProgressBar height={height} proficiency={proficiency} />
      </Container>
    </>
  );
};

export default LinearProgressBar;