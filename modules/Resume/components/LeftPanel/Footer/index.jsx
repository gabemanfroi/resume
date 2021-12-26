import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container>
      <a href='https://linkedin.com/in/gabriel-manfroi' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/gabemanfroi' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='https://twitter.com/gabemanfroi' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://facebook.com/gabemanfroi' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </Container>
  );
};

export default Footer;