import React from 'react'
import Feeds from '../components/Feeds/Feeds';
import StatusBar from '../components/StatusBar/StatusBar';

// components
import TopMenuBar from '../components/TopMenuBar/TopMenuBar';

function Home() {
  return (
    <div className='container-fluid'>
      <TopMenuBar /> 
      <StatusBar />
      <Feeds />


    </div>
  )
}

export default Home