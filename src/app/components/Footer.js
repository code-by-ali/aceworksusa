import Link from "next/link";
import styles from "./header-footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-[#2b6396] text-white  relative`}>
    <div className="container">
  <div className="row">
        {/* Column 1: Brand & Newsletter */}
        <div className="col-md-6 ">
            <div className="pr-50">
<h2 className={`font-bold text-xl text-white ${styles.logotext}`}>Aceworkusa</h2>
          <p className="">
            We simplify marketing with tools to help you budget and grow wealth. Take control of your marketing effortlessly and confidently.
          </p>
          {/* Newsletter Subscribe */}
          <form className={styles.subscribeForm + " flex"}>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-l-full outline-none text-gray-800 flex-1"
              aria-label="Email Address"
            />
            <button type="submit" className={styles.subscribeBtn + "  "}>
              Subscribe
            </button>
          </form>
            </div>
          
        </div>
        {/* Column 2: Navigation */}
        <div className="col-md-2">
          <h3 className="">HOME</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/location">Our Location</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        {/* Column 3: SEO */}
        <div className="col-md-2">
          <h3 className="">SEO</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog-details">Blog Details</Link></li>
            <li><Link href="/testimonial">Testimonial</Link></li>
            <li><Link href="/help-center">Help Center</Link></li>
          </ul>
        </div>
        {/* Column 4: Info */}
        <div className="col-md-2">
          <h3 className="">Info</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className=" container " />

      {/* Bottom row: copyright & socials */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <span className={`${styles.copyright}`}>© Copyright 2025, All Rights Reserved by aceworkusa</span>
        {/* Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener">
           <Image src="assets/facebook.svg" 
                                  alt=""
           
           width={40} height={40}  unoptimized></Image>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" >
             <Image src="assets/x.svg" width={40} height={40} unoptimized
                                  alt=""
             
             ></Image>
          </a>
          <a href="#" aria-label="More" >
             <Image src="assets/instagram.svg" width={40} height={40} unoptimized
                                  alt=""
             
             ></Image>
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
}
