import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container } from './style';
import { ISkill } from 'modules/Shared/interfaces/ISkill';
import React from 'react';

interface OtherSkillProps {
  skill: ISkill;
}

const OtherSkill = ({ skill }: OtherSkillProps) => {
  return (<Container
    key={skill.id}>
    <FontAwesomeIcon icon={faCheck} size={'xs'} color='#3E98C7' />
    <h6>{skill.name}</h6>
  </Container>);
};

export default OtherSkill;
