import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2b6396] text-white relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-8">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-6 md:col-span-4 pr-0 lg:pr-12 max-w-3xl">
            <h2 className="font-bold text-[30px] text-white mb-[35px] leading-normal">
              Aceworkusa
            </h2>
            <p className="text-white font-medium text-[17.58px] leading-[29.52px] mb-10">
              We simplify marketing with tools to help you budget and grow
              wealth. Take control of your marketing effortlessly and
              confidently.
            </p>
            {/* Newsletter Subscribe */}
            <form className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center w-full bg-white rounded-[50px] min-h-0 sm:h-[60px] p-1.5 sm:p-0 gap-0 sm:gap-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 sm:p-2 sm:pl-5 rounded-full sm:rounded-l-full sm:rounded-r-none outline-none text-primary w-full sm:flex-1 min-w-0 border-0 font-medium text-base"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="hidden sm:block bg-secondary text-white px-2 py-3 rounded-full font-bold text-base transition-all whitespace-nowrap w-[131px] sm:m-[5px] sm:mr-[6px]"
                >
                  Subscribe
                </button>
              </div>
              {/* Mobile Subscribe Button - Outside the form on small screens */}
              <button
                type="submit"
                className="sm:hidden bg-secondary text-white px-6 py-3 rounded-full font-bold text-base transition-all w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-bold text-[18.44px] leading-[28px] mb-6 text-white tracking-[-0.3px]">
              HOME
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-[19px]">
                <Link
                  href="/about"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  About us
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/pricing"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/location"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Our Location
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/contact"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SEO */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-bold text-[18.44px] leading-[28px] mb-6 text-white tracking-[-0.3px]">
              SEO
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-[19px]">
                <Link
                  href="/blog"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/blog-details"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Blog Details
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/testimonial"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Testimonial
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/help-center"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Info */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-bold text-[18.44px] leading-[28px] mb-6 text-white tracking-[-0.3px]">
              Info
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-[19px]">
                <Link
                  href="/privacy-policy"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-[19px]">
                <Link
                  href="/terms"
                  className="text-white no-underline font-medium text-[17.16px] leading-[29.52px] opacity-50 hover:opacity-100 transition-opacity"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-[60px] mb-[40px] border-[#e5e7e6]" />

        {/* Bottom row: copyright & socials */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <span className="font-medium text-[15.75px] leading-[25.6px] text-white text-center md:text-left">
            © Copyright 2025, All Rights Reserved by aceworkusa
          </span>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 transition-transform hover:scale-110"
            >
              <Image
                src="/assets/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                unoptimized
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 transition-transform hover:scale-110"
            >
              <Image
                src="/assets/x.svg"
                width={24}
                height={24}
                unoptimized
                alt="X (Twitter)"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 transition-transform hover:scale-110"
            >
              <Image
                src="/assets/instagram.svg"
                width={24}
                height={24}
                unoptimized
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}