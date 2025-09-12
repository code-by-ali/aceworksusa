"use client";
import Image from "next/image";

export default function aboutbanner() {
  return (
   <div>
    {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 about-banner">
        <div className="container">
          <div className="text-center">
             <badge className="badge-blue m-auto">About company</badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Building{" "}foundations <br/>
              for team success.
             
              
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We bring teams with strategy, tools, and culture—turning <br/>
              enhanced into measurable testing business outcomes.
            </p>

          

         
          </div>
          {/* images */}
         <div className="about-images">
           <div className="row ">
            <div className="col-md-4">
               <Image
                                    src="/assets/about-1.png"
                                  alt=""
                                 className=""
                                   unoptimized 
                                   width={500}
                                   height={336}
                                  />
                                  <Image
                                    src="/assets/about-2.png"
                                  alt=""
                                  
                                  className="mt-4"
                                   unoptimized 
                                   width={500}
                                   height={336}
                                  />
            </div>
             <div className="col-md-4">
               <Image
                                    src="/assets/about-3.png"
                                 
                                  alt=""
                                 
                                   unoptimized 
                                   width={500}
                                   height={336}
                                  />
                                 
            </div>
            <div className="col-md-4">
               <Image
                                    src="/assets/about-4.png"
                                  alt=""
                                  
                                 
                                   unoptimized 
                                   width={500}
                                   height={336}
                                  />
                                 
            </div>
          </div>
         </div>
        </div>
      </section>

   </div>
  );
}