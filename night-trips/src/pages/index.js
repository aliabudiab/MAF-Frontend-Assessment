import Layout from "../components/Layout";
import LandingPageSection from "../containers/Home";
import Trips from "../containers/Trips/Trips";

const Home = () => {
  return (
    <Layout>
      <LandingPageSection />
      <Trips />
    </Layout>
  );
};

export default Home;
