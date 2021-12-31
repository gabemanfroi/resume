import { Container } from './style';

const LoadingPage = () => {
  return <Container>
    <div className='lds-facebook'>
      <div />
      <div />
      <div />
    </div>
  </Container>;
};

export default LoadingPage;