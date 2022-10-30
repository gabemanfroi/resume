import { useResume } from 'modules/Resume/contexts';
import { useEffect, useState } from 'react';

const useCarousel = () => {
  const { resume } = useResume();

  const [carouselTexts] = useState(resume?.carouselItems);
  const [textBeingRotated, setTextBeingRotated] = useState('');
  const [iteration, setIteration] = useState(0);

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const startCarousel = async () => {
      if (carouselTexts?.length) {
        let strIterated = '';
        for (const char of carouselTexts[iteration].content) {
          strIterated = strIterated + char;
          setTextBeingRotated(strIterated);
          await timeout(100);
        }
        await timeout(2000);
        while (strIterated.length !== 0) {
          setTextBeingRotated(strIterated);
          strIterated = strIterated.slice(0, -1);
          await timeout(50);
        }
        if (!carouselTexts[iteration + 1]) {
          setIteration(0);
        } else {
          setIteration(iteration + 1);
        }
      }
    };
    startCarousel();
  }, [iteration, carouselTexts]);

  return { textBeingRotated };
};

export default useCarousel;
