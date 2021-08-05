import CustomButton from "../Elements/customButton/customButton";

const header = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <h1 id="appLogo">NT.</h1>

        <div className="menu">
          <CustomButton text="MENU" onClick={() => console.log("Hello")} />
        </div>
      </nav>
    </header>
  );
};

export default header;
