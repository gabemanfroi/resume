import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface IDialogContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedModal: string;
  setSelectedModal: Dispatch<SetStateAction<string>>;
}

const dialogContextDefaultValues = {
  isOpen: false,
  setIsOpen: () => {},
  selectedModal: '',
  setSelectedModal: () => {},
};

export const DialogContext = createContext<IDialogContext>(
  dialogContextDefaultValues,
);

interface IDialogProvider {
  children: React.ReactNode;
}

const DialogProvider = ({ children }: IDialogProvider) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState('');

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      selectedModal,
      setSelectedModal,
    }),
    [isOpen],
  );

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

export default DialogProvider;
