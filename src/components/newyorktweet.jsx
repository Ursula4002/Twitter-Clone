function NewYorkTweet() {

    return (
        <div className="tweet">

            <div className="tweet-avatar">
                <img src="src\images\newyork.svg" alt="" />
            </div>
            <div className="tweet-content">

                <div className="tweet-title">
                    <h1 className="tweet-title-author">The New York Times</h1>
                    <img src="src\images\tweets\badge.png" alt="" />
                    <p className="tweet-title-details">@nytimes.2h</p>
                </div>

                <div className="tweet-body">

                    <p className="tweet-text">Gardening boomed during the pandemic. Six Black
                        writers share how it has helped them re-establish, and reimagine, a connection
                        to cultivation and the land
                    </p>
                    <div className="tweet-image">
                        <img src="src\images\tweet-image.png" alt="" className="tweet-image" />
                    </div>
                </div>


                <div className="tweet-actions">
                    <div className="tweet-action">
                        <img src="src\images\tweets\Reply.svg" alt="" /><p>19</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\GrOup1.svg" alt="" /><p>48</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\reactions.svg" alt="" /><p>482</p>
                    </div>
                    <div className="tweet-action">
                        <img src="src\images\tweets\export.svg" alt="" /><p>19</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default NewYorkTweet;