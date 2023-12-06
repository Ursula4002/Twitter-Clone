import React from 'react';
<<<<<<< HEAD
import Header from '../components/hearder';
import Tweet from '../components/tweet';
import Addtweet from '../components/addtweet';
=======
import Header from "../components/header";
>>>>>>> 5fa9aec99bf6d96e4b2182b2ade03009da46dd52

function Home() {
  return (
    <main className="timeline">
      <Header/>
<<<<<<< HEAD
      <Addtweet/>
      <Tweet/>
=======
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


>>>>>>> 5fa9aec99bf6d96e4b2182b2ade03009da46dd52
    </main>
  );
}

export default Home;