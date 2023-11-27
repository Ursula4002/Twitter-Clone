import React from 'react';
import Header from '../components/hearder';
import Tweet from '../components/tweet';
import Addtweet from '../components/addtweet';

function Home() {
  return (
    <main className="timeline">
      <Header/>
      <Addtweet/>
      <Tweet/>
    </main>
  );
}

export default Home;