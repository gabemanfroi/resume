import { EditModeContext } from 'modules/Shared/contexts/EditModeContext';
import { useContext } from 'react';

const useEditMode = () => useContext(EditModeContext);

export default useEditMode;
