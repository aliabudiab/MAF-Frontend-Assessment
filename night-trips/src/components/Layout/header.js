import CustomButton from "../Elements/customButton/customButton";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import SideNavbar from "./sideNavbar";
import { AiOutlineMenu } from "react-icons/ai";

const header = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const onMenuToggle = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <header className="app-header">
      <nav className="app-navbar">
        <h1 id="appLogo">NT.</h1>

        <div className="right-navbar">
          <FiSearch size="22" className="search-icon" />
          <CustomButton text="Menu" onClick={onMenuToggle} />
          <AiOutlineMenu
            size="30"
            className="burger-menu-icon"
            onClick={onMenuToggle}
          />
        </div>
      </nav>

      <SideNavbar isOpen={openSideMenu} onMenuToggle={onMenuToggle} />
    </header>
  );
};

export default header;
