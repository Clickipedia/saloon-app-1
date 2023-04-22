import AchievementSection from "./AchievementSection/AchievementSection";
import BannerSection from "./BannerSection/BannerSection";
import FeedbackSection from "./FeedbackSection/FeedbackSection";
import LearnmoreSection from "./LearnmoreSection/LearnmoreSection";
import MakeupArtistSection from "./MakeupArtistSection/MakeupArtistSection";
import NewsSection from "./NewsSection/NewsSection";
import PackageSection from "./PackageSection/PackageSection";
import WorkSection from "./WorkSection/WorkSection";
import SubscribeSection from "./SubscribeSection/SubscribeSection";

import './Home.css'
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {

    window.scrollTo(0, 0)

    return (
        <div>
            <BannerSection/>
            <ServicesSection/>
            <WorkSection/>
            <PackageSection/>
            <LearnmoreSection/>
            <MakeupArtistSection/>
            <AchievementSection/>
            <FeedbackSection/>
            <NewsSection/>
            <SubscribeSection/>
        </div>
    );
};

export default Home;