import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { ISkill } from 'modules/Shared/interfaces/ISkill';

interface LanguageProps {
  skill: ISkill;
}

const Language = ({ skill }: LanguageProps) => {
  return (
    <li className="language">
      <CircularProgressbar
        value={skill.proficiency}
        text={`${skill.proficiency}%`}
        styles={buildStyles({
          strokeLinecap: 'butt',
        })}
      />
      <span>{skill.name}</span>
    </li>
  );
};

export default Language;
