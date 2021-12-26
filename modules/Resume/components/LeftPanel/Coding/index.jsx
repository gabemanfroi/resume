import SkillSection from '../SkillSection';
import { Container } from './style';

const Coding = () => {
  const codingList = [
    {
      name: 'JavaScript', proficiency: 90,
    },

    {
      name: 'Python', proficiency: 90,
    },
    {
      name: 'Typescript', proficiency: 85,
    },
    {
      name: 'Go', proficiency: 75,
    },
    {
      name: 'Django / Django REST', proficiency: 90,
    },
    {
      name: 'VueJS', proficiency: 90,
    },
    {
      name: 'React', proficiency: 90,
    },
  ];

  return (
    <Container>
      <SkillSection skills={codingList} title={'Coding'} />
    </Container>
  );
};

export default Coding;