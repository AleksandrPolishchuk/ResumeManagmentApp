import { createContext } from "react";

interface IThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<IThemeContextInterface>({
  darkMode: false,
  toggleDarkMode: () => {},
});
const ThemeContextProvider = () => {};

export default ThemeContextProvider;
