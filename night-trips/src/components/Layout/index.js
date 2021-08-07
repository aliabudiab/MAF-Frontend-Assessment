import HeadComponent from "../Head/head";
import Header from "./header";

const Index = ({ children }) => {
  return (
    <>
      <HeadComponent />
      <Header />
      <main className="app-main">{children}</main>
    </>
  );
};

export default Index;
