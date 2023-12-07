import CnnProfile from "./items/Profile-Photo-cnn.svg"
import TheNyTimes from "./items/Profile-Photo-theNyTimes.svg"
import TwitterProfil from "./items/Profile-Photo-twitter.svg"
import RightSideAvatar from "./rightside-avatar"

function FollowSuggestion() {

    return (
        <>
            <div className="show-more-suggestions-container">
             <p>Who to follow</p>
                <RightSideAvatar urlIcon={CnnProfile}/>
                <RightSideAvatar urlIcon={TheNyTimes}/>
                <RightSideAvatar urlIcon={TwitterProfil}/>
                <h1 className="show-more-trends">
                    <p>Show more</p>
                </h1>

            </div>
        </>
    )
}

export default FollowSuggestion;

