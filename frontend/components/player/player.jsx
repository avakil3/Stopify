import React from 'react';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';

function Player() {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />
            <Body />
        </div>
        <Footer />
    </div>
  )
}

export default Player;