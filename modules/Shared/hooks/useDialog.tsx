import { DialogContext } from 'modules/Shared/contexts/DialogContext';
import { useContext } from 'react';

const useDialog = () => useContext(DialogContext);

export default useDialog;
