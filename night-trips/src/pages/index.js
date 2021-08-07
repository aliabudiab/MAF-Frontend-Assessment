import Layout from "../components/Layout";
import LandingPage from "../containers/Home";
import Trips from "../containers/Trips/Trips";

const Home = () => {
  return (
    <Layout>
      <LandingPage />
      <Trips />
    </Layout>
  );
};

export default Home;
