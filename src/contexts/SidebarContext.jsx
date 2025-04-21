import { createContext, useState, useContext } from "react";

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
  isSignIn: false,
  toggleSignIn: () => {},
  toggleSignUp: () => {},
});

export default function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const toggleSignIn = () => {
        setIsSignIn(true)
    }

    const toggleSignUp = () => {
        setIsSignIn(false)
    }

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar, isSignIn, toggleSignIn, toggleSignUp }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext);