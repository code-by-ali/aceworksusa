import React from 'react'
import AboutBanner from '../components/about/AboutBanner';
import ClientReview from '../components/about/ClientReview';
import MakeBusiness from '../components/about/MakeBusiness';
import OurPriority from '../components/about/OurPriority';
import FutureBusiness from '../components/about/FutureBusiness';
import OurTeam from '../components/about/OurTeam';
import OurWork from '../components/about/OurWork';
import TansformBusiness from '../components/about/TansformBusiness';
import Faq from '../components/Faq.js';

const about = () => {
  return (
    <div>
<AboutBanner/>
<ClientReview/>
<MakeBusiness/>
<OurPriority/>
<FutureBusiness/>
<OurTeam/>
<OurWork/>
<TansformBusiness/>
      <Faq/>

    </div>
  )
}

export default about