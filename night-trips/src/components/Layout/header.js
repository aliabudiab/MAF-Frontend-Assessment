import CustomButton from "../Elements/customButton/customButton";
import { FiSearch } from "react-icons/fi";

const header = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <h1 id="appLogo">NT.</h1>

        {/*TODO: add sidenavbar */}
        <div className="right-navbar">
          <FiSearch size="22" />
          <div className="menu">
            <CustomButton text="Menu" onClick={() => console.log("Menu")} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
