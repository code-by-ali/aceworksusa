"use client";
import Image from "next/image";


const content = [
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
];

export default function Banner() {


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 service-banner">
        <div className="container mx-auto">
         <div className="row">
            
            <div className="col-md-7">
                <div className="right-column">
                    <badge className="badge-orange mb-2" >
Digital Strategy Development                    </badge>
                     <h3 className="">
           Transformative Digital
Strategy Development
          </h3>
          <p>
            Acewrok's Digital Strategy Development service is designed to create a comprehensive roadmap that aligns with your business goals.
          </p>
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
                className="bg-primary border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
               See all Services   
              </a>
            </div>
                </div>
            </div>
            <div className="col-md-5 text-right service-right">
                <div className="info-det-box">
                    <ul>
                        <li>
                           <Image src="/assets/awardWinningTeam.svg"  width={24} height={24} 
                                  alt=""
                
                >
                    </Image> Award-Winning Team
                        </li>
                        <li>
                           <Image src="/assets/solutions.svg"  width={24} height={24} 
                                  alt=""
                
                >
                    </Image> Tailored Solutions
                        </li>
                        <li>
                           <Image src="/assets/results.svg"  width={24} height={24} 
                                  alt=""
                
                >
                    </Image> Proven Results
                        </li>
                        </ul>
                </div>
                <Image src="/assets/team.svg"  width={500} height={560} 
                                  alt=""
                
                >

                </Image>
            </div>
         </div>

          
        </div>
      </section>
    </div>
  );
}
