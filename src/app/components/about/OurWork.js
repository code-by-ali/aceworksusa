"use client";
import Image from "next/image";
const work =[
    {
        image:"/assets/work1.png",
        title:"Cloncy",
        subtitle :"Web Design | 2025"
    },
     {
        image:"/assets/work2.png",
        title:"Taniza",
        subtitle :"Web Design | 2025"
    },
    {
        image:"/assets/work3.png",
        title:"Flopdy",
        subtitle :"Web Design | 2025"
    }
];
export default function OurWork() {
   
  return (
   <div>
    {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 future-business">
        <div className="container">
             
        <bagde className="badge-blue m-auto"> 
          Works
        </bagde>
         <h3>
           The Amazing Work <br/> From Aceworks 
         </h3>
           <div className="ourworks-card">
            <div className="row">
                 {work.map((work, idx) => (
                <div className="col-md-4"  key={idx}>
                    <Image src={work.image} width={72} height={72} 
                                  alt=""
                    
                    className="img img-fluid" style={{width:'100%'}}></Image>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>{work.title}</h6>
                        <p className="mb-0 pb-0">
                            {work.subtitle}
                        </p>
                    </div>
                </div>
                 ))}
            </div>
           </div>
         
        </div>
      </section>

   </div>
  );
}