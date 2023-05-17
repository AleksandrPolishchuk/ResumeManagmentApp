import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  //console.log(darkMode);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">Routes</div>
    </div>
  );
};

export default App;
