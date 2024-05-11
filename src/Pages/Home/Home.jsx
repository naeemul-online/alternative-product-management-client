import Banner from "./Banner";
import LatestDeals from "./Sections/LatestDeals";
import TopPicks from "./Sections/TopPicks";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <LatestDeals></LatestDeals>
            <TopPicks></TopPicks>
        </div>
    );
};

export default Home;