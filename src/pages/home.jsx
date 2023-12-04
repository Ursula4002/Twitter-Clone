import React from 'react';
import Header from "../components/header";

function Home() {
  return (
    <main className="timeline">
      <Header/>
      <div className="avatar">
        <img ClassName="top-tweets"
          src="src/images/profile-photo.png"
          alt="top tweets"
        />
        <div className="tweet-editor-form">

          <div className="tweet-editor-input">
          </div>

          <div className="tweet-editor-actions">
            <div className="tweet-editor-buttons">

              <img src="src/images/tweet-editor-icons/img-first.png" />
              <img src="src/images/tweet-editor-icons/gif-second.png" />
              <img src="src/images/tweet-editor-icons/Top-Tweets-third.png" />
              <img src="src/images/tweet-editor-icons/smile-fourth.png" />
              <img src="src/images/tweet-editor-icons/Top-Tweets-fifth.png" />
              <div className="button">
                <button>Tweet</button>
              </div>
            </div>
            
          </div>

        </div>
      </div>
      <div className="tweets">
        <div className="tweet">
          <img ClassName="top-tweets" src="src/images/tweetsDiv/Tweet-Profile-Photo.png" />

        </div>
      </div>


    </main>
  );
}

export default Home;