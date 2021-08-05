import Header from "./header";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <main className="app-main">{children}</main>
    </>
  );
};

export default Index;
