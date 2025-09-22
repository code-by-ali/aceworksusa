"use client";
import Image from "next/image";
import Slider from "react-slick";

const content = [
  {
    title: "Comprehensive Market Insight",
    img:"assets/services/one.svg",
    text:
      "We provide you with actionable insights that inform strategic decisions and help you stay ahead of the competition."
  },]
export default function OurServices() {
   
  return (
   <div>
    {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 our-services">
        <div className="container">
             <badge className="badge-blue m-auto">Services</badge>

         <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl">
          Services in Digital Strategy <br/> Development
         </h3>
         <p>
            Our Digital Strategy Development service is designed to transform your <br/>
business goals into a robust and actionable plan.
         </p>
           <div className="business-cards">
            <div className="row">
                 {content.map((content, idx) => (
                <div className="col-md-4" key={idx}>
                    <div className="card-style">
                    <Image src={content.img}  width={52} height={52} 
                                                      alt=""
                                    >
                                        </Image>
                        <h4>
                            {content.title}
                        </h4>
                        <p>
                            {content.text}
                        </p>
                    </div>
                </div>))}
            </div>
           </div>
           <div className="text-center mt-5">
 <a
                href="#"
                className="bg-primary  text-center font-semibold px-6 py-3 rounded-full  hover:bg-gray-200 transition"
              >
                Get a  Quote
              </a>
           </div>
          
        </div>
      </section>

   </div>
  );
}