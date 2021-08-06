import Header from "./header";

const Index = ({ children }) => {
  return (
    <>
      {/*TODO: Add head with SEO's */}
      <Header />
      <main className="app-main">{children}</main>
    </>
  );
};

export default Index;
