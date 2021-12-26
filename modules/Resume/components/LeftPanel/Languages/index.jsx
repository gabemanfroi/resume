import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from './style';

const Languages = () => {
  return (
    <Container>
      <h5>Languages</h5>
      <ul className='languages-list'>
        <li className='language'>
          <CircularProgressbar value={100} text='100%' styles={buildStyles({
            strokeLinecap: 'butt',
          })} />
          <span>Portuguese</span>
        </li>
        <li className='language'>
          <div className='proficiency'>
            <CircularProgressbar value={85} text='85%' styles={buildStyles({
              strokeLinecap: 'butt',
            })} />
          </div>
          <span>English</span>
        </li>
        <li className='language'>
          <div className='proficiency'>
            <CircularProgressbar value={15} text='15%' styles={buildStyles({
              strokeLinecap: 'butt',
            })} />
          </div>
          <span>French</span>
        </li>
      </ul>
    </Container>
  );
};

export default Languages;