"use client";
import Image from "next/image";


const content = [
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
];

export default function OurPriority() {


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 our-priority">
        <div className="container mx-auto">
         <div className="row">
            <div className="col-md-6">
                <Image src="/assets/our-priority.png"  width={500} height={560} 
                                  alt=""
                
                >

                </Image>
            </div>
            <div className="col-md-6">
                <div className="right-column">
                    <badge className="badge-orange">
How we manage the things
                    </badge>
                     <h3 className="">
            Your peace of mind is <br/>
our top priority
          </h3>
          <p>
            Your safety and comfort come first. Trust us to handle everything <br/>
with care and dedication. Relax—we’ve got you covered.
          </p>
                </div>
            </div>
         </div>

          
        </div>
      </section>
    </div>
  );
}
