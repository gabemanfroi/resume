import { useContext } from 'react';

import { WebsiteContentContext } from 'modules/PersonalWebsite/contexts/WebsiteContentContext';

import { Container } from './style';

const GeneralInfo = () => {
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { additionalInformation } = currentPersonContent.createdBy;

  return (
    <Container>
      <ul>
        {additionalInformation.length && additionalInformation.map((info, index) => <li key={index} className='item'>
          <h6>{info.title}:</h6>
          <span>{info.description}</span>
        </li>)}
      </ul>
    </Container>
  );
};

export default GeneralInfo;