import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

function App() {
  useState(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
<div>
    <Home/>
</div>
  )
}

export default App
