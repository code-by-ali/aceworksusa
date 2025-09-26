import React from 'react'
import Banner from '../components/servicedetails/Banner';
import OurServices from '../components/servicedetails/OurServices';
import CaseStudy from '../components/servicedetails/CaseStudy';
import QuickCall from '../components/servicedetails/QuickCall';
import ContactUs from '../components/servicedetails/ContactUs';

import Faq from '../components/Faq.js';

const serviceDetails = () => {
  return (
    <div>
<Banner/>
<OurServices/>
<CaseStudy/>
<QuickCall/>
<ContactUs/>

    </div>
  )
}

export default serviceDetails