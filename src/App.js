import React from 'react';

import { footer, blog, possibility, features, whatGPT3, header } from './containers';
import { cta, brand, navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className='APP'>
      <div className='gradient_bg'>
        <navbar />
        <header />
      </div>
        <brand />
        <whatGPT3 />
        <features />
        <possibility />
        <cta />
        <blog />
        <footer />
    </div>
  )
}

export default App