import { useResume } from 'modules/Resume/contexts/ResumeContext';

import { Container } from './style';
import { useEditMode } from 'modules/Shared/hooks';
import { TextField } from '@mui/material';

const GeneralInfo = () => {
  const { resume, setResume } = useResume();
  const { isEditMode } = useEditMode();
  if (!resume) return <></>;

  const { country, email, city, pronouns, age } = resume.user;

  const userInfo = { country, email, city, pronouns, age };

  return (
    <Container>
      <ul>
        {(Object.keys(userInfo) as (keyof typeof userInfo)[]).map((info) => (
          <>
            {userInfo[info] && (
              <li className="item" key={info}>
                <h6>{info.charAt(0).toUpperCase() + info.slice(1)}</h6>
                {!isEditMode && <span>{userInfo[info]}</span>}
                {isEditMode && (
                  <TextField
                    sx={{
                      flex: 0.7,
                    }}
                    variant="standard"
                    size="small"
                    value={resume.user[info]}
                    onChange={(e) => {
                      setResume({
                        ...resume,
                        user: {
                          ...resume.user,
                          [info]: e.target.value,
                        },
                      });
                    }}
                  />
                )}
              </li>
            )}
          </>
        ))}
      </ul>
    </Container>
  );
};

export default GeneralInfo;
