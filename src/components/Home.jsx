import React from 'react'
import Header from './Header'
import Intro from './Intro'
import LivingArt from './LivingArt'
import SilentGift from './SilentGift'
import TurningPoint from './TurningPoint'
import SlowDamage from './SlowDamage'
import Faded from './Faded'
import Realise from './Realise'
import OneHuman from './OneHuman'
import SubAct from './SubAct'
import Footer from './Footer'

function Home() {
  return (
    <div><div className='home'><Header/></div>
    <Intro/>
   <div className='earth'> <LivingArt/>
    <SilentGift/></div>
   <div className='causes'> <TurningPoint/>
    <SlowDamage/></div>
   <div className='reality'> <Faded/></div>
    <Realise/>
    <div className='mearures'><OneHuman/></div>
    <Footer/>
    </div>
  )
}

export default Home