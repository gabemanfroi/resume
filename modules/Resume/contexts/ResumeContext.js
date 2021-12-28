import { createContext, useEffect, useState } from 'react';
import ResumeAPI from '../api/ResumeAPI';

export const ResumeContext = createContext({});

export const ResumeProvider = ({ children }) => {
  const [chosenResumeId, setChosenResumeId] = useState();
  const [chosenResume, setChosenResume] = useState();


  useEffect(() => {
    if (!chosenResumeId) return;
    ResumeAPI.getById(chosenResumeId).then(response => {
      setChosenResume(response);
    });

  }, [chosenResumeId]);

  return (
    <ResumeContext.Provider value={{
      chosenResumeId,
      setChosenResumeId,
      chosenResume,
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
