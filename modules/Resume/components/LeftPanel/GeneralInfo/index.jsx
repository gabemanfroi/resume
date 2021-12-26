import { Container } from './style';

const GeneralInfo = () => {
  return (
    <Container>
      <ul>
        <li className='item'>
          <h6>Residence:</h6>
          <span>Brazil</span>
        </li>
        <li className='item'>
          <h6>City:</h6>
          <span>Pato Branco</span>
        </li>
        <li className='item'>
          <h6>Age:</h6>
          <span>25</span>
        </li>
      </ul>
    </Container>
  );
};

export default GeneralInfo;