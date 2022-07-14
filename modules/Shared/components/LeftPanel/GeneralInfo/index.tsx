import { useContext } from 'react';

import { PersonalWebsiteContext } from 'modules/PersonalWebsite/contexts/PersonalWebsiteContext';

import { Container } from './style';

const GeneralInfo = () => {
  const { currentPersonContent } = useContext(PersonalWebsiteContext);
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
