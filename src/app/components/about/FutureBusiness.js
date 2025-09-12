"use client";
import Image from "next/image";
import Slider from "react-slick";

const content = [
  {
    title: "Digital Marketing",
    number:"120 ",
    image:"/assets/strategy.svg",
     text: `Bridging markets and innovation—Aceworks Strategy delivers<br/>
           tailored solutions for global growth, sustainability, and cross-<br/>
           border success.`
  },
{
    title: "Aceworks Execution",
    
    image:"/assets/execution.svg",
     text: `Turning strategy into results—Aceworks Execution delivers<br/>
precision, speed, and reliability for seamless cross-border<br/>
operations and growth.`
  },
]
  const list = [
  {
    dec: "Global Expertise: Navigating cross-border challenges",
  },
{
    dec: "Tailored Solutions: Custom strategies for growth,sustainability, and scalability.",
  },
  {
    dec: "Innovation-Driven: Bridging industries and economies through forward-thinking approaches.",
  },
  {
    dec: "Risk Mitigation: Proactive planning to secure long-term success in volatile markets.",
  },
]
export default function FutureBusiness() {
   
  return (
   <div>
    {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 future-business">
        <div className="container">
             
        <bagde className="badge-blue m-auto"> 
          Future
        </bagde>
         <h3>
           Make your business <br/>
better with Aceworks
         </h3>
           <div className="future-cards">
            <div className="row">
                 {content.map((content, idx  ,i) => (
                <div className="col-md-6" key={idx}>
                    <div className="future-card-style">
                      <Image src={content.image} width={72} height={72} 
                                  alt=""
                      ></Image>
                        <h4>
                            {content.title}
                        </h4>
                       <p
          key={i}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
        <ul className="future-list ">
            {list.map((list, idx ) => (
                  <li key={idx}>
                    {list.dec}
                  </li>
            ))}
          </ul>
                    </div>
                </div>))}
            </div>
           </div>
           <div className="m-auto text-center">
             <a href='' className='btn btn-orange '>Learn More</a>
           </div>
        </div>
      </section>

   </div>
  );
}