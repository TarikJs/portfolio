import React from 'react';

import { footer, blog, possibility, features, whatGPT3, header } from './containers';
import { cta, brand, navbar} from './components';


const App = () => {
  return (
    <div className='APP'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App