import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { WebsiteContentContext } from '/modules/PersonalWebsite/contexts/WebsiteContentContext';

import { Container } from './style';

const Footer = () => {
  const iconsMapper = {
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter,
    facebook: faFacebook,
  };
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { websites } = currentPersonContent.createdBy;
  return (
    <Container>
      {
        websites.length && websites.map((website, index) =>
          <a key={index} href={website.url} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={iconsMapper[website.category.toLowerCase()]} />
          </a>,
        )
      }
    </Container>
  );
};

export default Footer;