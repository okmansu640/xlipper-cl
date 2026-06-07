import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
