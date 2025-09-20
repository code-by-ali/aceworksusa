"use client";
import Image from "next/image";




export default function CaseStudy() {


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 bg-white lg:px-8 case-study">
        <div className="container mx-auto">
         <div className="row">
            
            <div className="col-md-6">
                <div className="right-column">
                    <badge className="badge-blue mb-2" >
Case study                  </badge>
                     <h3 className="">
          Developed a Tailored
Digital Strategy for our
client Lorem Inc.
          </h3>
          <div className="case-study-box">
            <Image src="/assets/services/growth.svg"  width={52} height={52} alt="">
                </Image>
                <p>
                    Increased organic traffic by 150%, social media
engagement by 200%, and online sales by 35%
within six months.
                </p>
          </div>
           {/* Call to Action Buttons */}
            <div className="flex flex-wrap text-sm sm:text-base mt-10 gap-4">
              <a
                href="#"
                className="bg-primary  font-semibold px-6 py-3 rounded-full  hover:bg-gray-200 transition"
              >
                Get a Free Quote
              </a>
              <a
                href="#"
                className="bg-primary-outline border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
               See all Services   
              </a>
            </div>
                </div>
            </div>
            <div className="col-md-6 ">
               <div className="case-study-right"> 
<Image src="/assets/services/Container.svg"  width={570} height={440} 
                                  alt=""
                
                >

                </Image>
                <h6>
Elevating Gozaru Enterprises' Brand to Success                </h6>
                <p>
Gozaru, an old player in the media space, needed a powerful blog
launch strategy for their first category of health and nutrition.                </p>
               </div>
                
            </div>
         </div>

          
        </div>
      </section>
    </div>
  );
}
