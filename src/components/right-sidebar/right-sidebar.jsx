import Trend from "./trend";
import FollowSuggestion from "./follow-suggestions";

function RightSideBarItems() {

    return (
        <>
            <div className="trend-actions">
                <div className="show-more-trends-container">

                    <Trend trendingPlace=" Trending in Turkey " ashtag="#SQUID" tweetsNumber="2,066 Tweets" />
                    <Trend trendingPlace=" Trending in Turkey " ashtag="#SQUID" tweetsNumber="2,066 Tweets" />
                    <Trend trendingPlace=" Trending in Turkey " ashtag="#SQUID" tweetsNumber="2,066 Tweets" />
                    <Trend trendingPlace=" Trending in Turkey " ashtag="#SQUID" tweetsNumber="2,066 Tweets" />
                    <h1 className="show-more-trends">
                        Show more
                    </h1>
                </div>
                <br />
                <div className="Follow-suggestion">
                    <FollowSuggestion />
                </div>
            </div>


        </>
    )
}

export default RightSideBarItems;