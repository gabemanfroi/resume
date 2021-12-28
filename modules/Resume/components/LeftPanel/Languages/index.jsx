import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './style';

const Languages = ({ languages }) => {


  return (
    <Container>
      <h5>Languages</h5>
      <ul className='languages-list'>
        {languages.map((l, index) => (<li key={index} className='language'>
          <CircularProgressbar value={l.proficiency * 10} text={`${l.proficiency * 10}%`} styles={buildStyles({
            strokeLinecap: 'butt',
          })} />
          <span>{l.name}</span>
        </li>))}
      </ul>
    </Container>
  );
};

export default Languages;