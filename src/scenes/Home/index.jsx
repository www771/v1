import MainContent from "../../layout/MainContent.jsx";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection.jsx";
import PartnerSection from "./components/PartnerSection/PartnerSection.jsx";
import NewsSection from "./components/News/NewsSection.jsx";

const HomePage = () => {
  return (
    <MainContent>
      <WelcomeSection />
      <PartnerSection />
      <NewsSection />
    </MainContent>
  );
};

export default HomePage;
