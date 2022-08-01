import { useContext } from 'react';

import { ResumeContext } from 'modules/Resume/contexts/ResumeContext';

import { Container } from './style';

const GeneralInfo = () => {
  const { currentPersonContent } = useContext(ResumeContext);
  const { additionalInformation } = currentPersonContent.createdBy;

  return (
    <Container>
      <ul>
        {additionalInformation.length > 0 && additionalInformation.map((info, index) => <li key={index}
                                                                                            className='item'>
          <h6>{info.title}:</h6>
          <span>{info.description}</span>
        </li>)}
      </ul>
    </Container>
  );
};

export default GeneralInfo;
