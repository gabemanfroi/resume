import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { useResume } from 'modules/Resume/contexts';

const Footer = () => {
  const iconsMapper = {
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter,
    facebook: faFacebook,
  };
  const { resume } = useResume();

  if (!resume) return <></>;

  const { websites, resumeFile } = resume;

  return (
    <Container>
      {
        resumeFile && <a href={resumeFile} download rel='noreferrer'>
          <FontAwesomeIcon icon={faFileAlt} />
        </a>
      }
      {
        websites.length > 0 && websites.map(website =>
          <a key={website.id} href={website.url} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={iconsMapper[website.type.toLowerCase() as 'linkedin' |
              'github' |
              'twitter' |
              'facebook']
            } />
          </a>,
        )
      }
    </Container>
  );
};

export default Footer;
