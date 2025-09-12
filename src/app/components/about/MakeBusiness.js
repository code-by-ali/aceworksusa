"use client";
import Image from "next/image";
import Slider from "react-slick";

const content = [
  {
    title: "Digital Marketing",
    number:"120 ",
    text:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably"
  },]
export default function ClientReview() {
   
  return (
   <div>
    {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 make-business">
        <div className="container">
             <badge className="badge-blue m-auto">We’ve got your back</badge>

         <h3>
           Make your business <br/>
better with Aceworks
         </h3>
           <div className="business-cards">
            <div className="row">
                 {content.map((content, idx) => (
                <div className="col-md-4" key={idx}>
                    <div className="card-style">
                    <div className="number">
                        {content.number}
                    </div>
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
        </div>
      </section>

   </div>
  );
}