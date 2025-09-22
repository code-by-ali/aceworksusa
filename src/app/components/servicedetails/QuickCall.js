"use client";
import Image from "next/image";
import StarRating from './StarRatig';




export default function QuickCall() {


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 quick-call">
        <div className="container mx-auto">
         <div className="row">
            <div className="col-md-7">
               
            </div>
             <div className="col-md-5">
                 <div className="right-column">
                    
                     <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl">
           Highly rated 4.9 out
of 5 by 1200+
entrepreneurs just
like Aceworks
          </h3>
          <p>
           Join the ranks of over 1200 entrepreneurs who
have entrusted us with their marketing needs and
our exceptional service firsthand.
          </p>
                </div>
                <div className="review">
                    <div className="row">
                                    <div className="col-4" >
                                        <div className="review-content">

                                        <Image src="assets/services/clientlogo2.svg" className="my-2"  width={51} height={51} 
                                                                          alt=""
                                                        >
                                                            </Image>
                                           <StarRating rating={5} totalReviews={26} />
                                            
                                        </div>
                                    </div>
                                    <div className="col-4" >
                                        <div className="review-content">

                                        <Image src="assets/services/clientlogo1.svg" className="my-2"  width={51} height={51} 
                                                                          alt=""
                                                        >
                                                            </Image>
                                           <StarRating rating={4.8} totalReviews={26} />
                                            
                                        </div>
                                    </div>
                    </div>
                    
                </div>
            </div>
         </div>

          
        </div>
      </section>
    </div>
  );
}
