import AchievementSection from "./AchievementSection/AchievementSection";
import BannerSection from "./BannerSection/BannerSection";
import LearnmoreSection from "./LearnmoreSection/LearnmoreSection";
import MakeupArtistSection from "./MakeupArtistSection/MakeupArtistSection";
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
        </div>
    );
};

export default Home;