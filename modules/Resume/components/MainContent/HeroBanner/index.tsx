import { Container } from './style';
import { useResume } from 'modules/Resume/contexts';
import Carousel from 'modules/Resume/components/MainContent/HeroBanner/Carousel';

const HeroBanner = () => {
  const { resume } = useResume();

  if (!resume) return <></>;
  return (
    <Container backgroundImage={''}>
      <div className="overlay">
        <h1>
          <span>Hi,</span>
          <br />
          <span>I am {resume.user.firstName}!</span>
          <br />
          <span>Welcome to my personal space.</span>
        </h1>
        <Carousel />
      </div>
    </Container>
  );
};

export default HeroBanner;
