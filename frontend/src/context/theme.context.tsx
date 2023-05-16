import { createContext, useState } from "react";

interface IThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContextInterface>({
  darkMode: false,
  toggleDarkMode: () => {},
});
const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode: () => void = () => {
    setDarkMode((prevState) => !prevState);
  };
};

export default ThemeContextProvider;
