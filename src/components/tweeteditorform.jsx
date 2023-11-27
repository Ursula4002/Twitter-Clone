import Button from "./button";

function TweetEditorForm() {
    return (
        <>
            <div className="tweet-editor">
            </div>


                <div className="tweet-editor-form">

                    <div className="tweet-editor-input">
                        <input type="text" placeholder="What's happening ?" />
                    </div>
                    <div className="tweet-editor-buttons">
                        <div className="tweet-editor-actions">
                            <img src="src\images\tweets-editor-icons\img-first.png" />
                            <img src="src\images\tweets-editor-icons\gif-second.png" />
                            <img src="src\images\tweets-editor-icons\Top-Tweets-third.png" />
                            <img src="src\images\tweets-editor-icons\smile-fourth.png" />
                            <img src="src\images\tweets-editor-icons\Top-Tweets-fifth.png" />
                        </div>
                        <Button />
                    </div>
                </div>
        </>
    )
}

export default TweetEditorForm;