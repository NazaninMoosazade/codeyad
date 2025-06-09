import { createContext, useCallback, useState } from "react";

const MobileMenuContext = createContext(null);

const MobileMenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export { MobileMenuContext, MobileMenuContextProvider };