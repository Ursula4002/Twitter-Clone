function TwiterOne() {

    return (
        <div className="tweet">

            <div className="tweet-avatar">
                <img src="src\images\twiter-logo.svg" alt="" />

            </div>

            <div className="tweet-content">

                <div className="tweet-title">
                    <h1 className="tweet-title-author">Twitter</h1>
                    <p className="tweet-title-details">@Twitter.Oct 29</p>
                </div>

                <div className="tweet-body">

                    <p className="tweet-text">BIG NEWS lol jk still Twitter</p>
                </div>
                <div className="tweet-actions">
                    <div className="tweet-action">
                        <img src="src\images\tweets\Reply.svg" alt="" /><p>6.8K</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\GrOup1.svg" alt="" /><p>36.6K</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\reactions.svg" alt="" /><p>267.1K</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\export.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TwiterOne;