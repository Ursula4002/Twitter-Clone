import Avatar from "./avatar";
import TweetEditorForm from "./tweeteditorform";

function Addtweet() {
    return (
        <div className="tweet-editor">
           <Avatar/>
           <TweetEditorForm/>
        </div>
    )
}

export default Addtweet;