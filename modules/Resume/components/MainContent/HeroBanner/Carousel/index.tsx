import useCarousel from 'modules/Resume/hooks/useCarousel';
import { Container } from './style';

const Carousel = () => {
  const { textBeingRotated } = useCarousel();
  return (
    <Container flexDirection={'row'}>
      {'<'}
      <span>code</span>
      {'> '}I build {textBeingRotated}
      {'| </'}
      <span>code</span>
      {'>'}
    </Container>
  );
};

export default Carousel;
