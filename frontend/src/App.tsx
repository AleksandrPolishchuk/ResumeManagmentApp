import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  //console.log(darkMode);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <h1>Navbar</h1>
      <div className="wrapper">Routes</div>
    </div>
  );
};

export default App;
