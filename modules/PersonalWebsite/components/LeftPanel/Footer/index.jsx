import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { WebsiteContentContext } from '/modules/PersonalWebsite/contexts/WebsiteContentContext';

const Footer = () => {
  const iconsMapper = {
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter,
    facebook: faFacebook,
  };
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { websites } = currentPersonContent.user;
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