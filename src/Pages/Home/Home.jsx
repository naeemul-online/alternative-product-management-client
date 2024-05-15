import Banner from "./Banner";
import LatestDeals from "./Sections/LatestDeals";
import RecentQueries from "./Sections/RecentQueries";
import TopPicks from "./Sections/TopPicks";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <LatestDeals></LatestDeals>
            <TopPicks></TopPicks>
        </div>
    );
};

export default Home;