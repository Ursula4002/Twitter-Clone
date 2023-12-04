function TwitterThree(){
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

                  <p className="tweet-text">hello literally everyone</p>
                  <div className="tweet-image">
                      <img src="src\images\tweet-image.png" alt="" className="tweet-image" />
                  </div>
              </div>
              <div className="tweet-actions">
                  <div className="tweet-action">
                      <img src="src\images\tweets\Reply.svg" alt="" /><p>118.7K</p>
                  </div>
                  <div className="tweet-action">
                      <img src="src\images\tweets\GrOup1.svg" alt="" /><p>785.4K</p>
                  </div>
                  <div className="tweet-action">
                      <img src="src\images\tweets\reactions.svg" alt="" /><p>3.3K</p>
                  </div>
                  <div className="tweet-action">
                      <img src="src\images\tweets\export.svg" alt="" />
                  </div>
              </div>

          </div>
      </div>

  )
}
export default TwitterThree;
