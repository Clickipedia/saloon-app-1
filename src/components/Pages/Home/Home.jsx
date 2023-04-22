import AchievementSection from "./AchievementSection/AchievementSection";
import BannerSection from "./BannerSection/BannerSection";
import FeedbackSection from "./FeedbackSection/FeedbackSection";
import LearnmoreSection from "./LearnmoreSection/LearnmoreSection";
import MakeupArtistSection from "./MakeupArtistSection/MakeupArtistSection";
import NewsSection from "./NewsSection/NewsSection";
import PackageSection from "./PackageSection/PackageSection";
import ServiceSection from "./ServiceSection/ServiceSection";


const Home = () => {
    return (
        <div>
            <BannerSection/>
            <ServiceSection/>
            <PackageSection/>
            <LearnmoreSection/>
            <MakeupArtistSection/>
            <AchievementSection/>
            <FeedbackSection/>
            <NewsSection/>
        </div>
    );
};

export default Home;