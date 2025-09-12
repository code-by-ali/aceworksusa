"use client";
import Image from "next/image";


export default function TansformBusiness() {


  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 transform-business">
        <div className="container mx-auto">
            <badge className="badge-orange m-auto">
                We are more than a team.
            </badge>
          <h3 className=" mb-10">
           Transform your business <br/>
potential with us
          </h3>
<p>
    Elevate your success with cutting-edge solutions—partner with us to <br/>
unlock growth, efficiency, and unbeatable results.
</p>
       
        </div>
        <div className="text-center " style={{marginTop:'44px'}}>
        <a href='' className='btn btn-orange  '> View Job Openings</a>

        </div>
      </section>
    </div>
  );
}
