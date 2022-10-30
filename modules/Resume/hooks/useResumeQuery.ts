import { useQuery } from '@tanstack/react-query';
import { QUERIES } from 'modules/Shared/constants/queries';
import { ResumeService } from 'modules/Resume/services';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useResumeQuery = () => {
  const { personName } = useRouter().query;

  useEffect(() => {
    console.log('here');
  }, [personName]);

  const { data: findByUsernameData, isLoading: findByUsernameIsLoading } =
    useQuery(
      [QUERIES.RESUME.FIND_ONE, personName],
      () => ResumeService.getByUsername(personName as string),
      { refetchOnWindowFocus: false, enabled: !!personName },
    );

  return {
    findByUsernameData,
    findByUsernameIsLoading,
  };
};

export default useResumeQuery;
