import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface IEditProvider {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const editModeContextDefaultValue = {
  isEditMode: false,
  setIsEditMode: () => {},
};

export const EditModeContext = createContext<IEditProvider>(
  editModeContextDefaultValue,
);

interface EditProviderProps {
  children: React.ReactNode;
}

const EditModeProvider = ({ children }: EditProviderProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isEditMode,
      setIsEditMode,
    }),
    [isEditMode],
  );

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};

export default EditModeProvider;
