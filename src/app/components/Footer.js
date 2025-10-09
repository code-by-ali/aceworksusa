import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="!bg-[#2b6396] !text-white !relative !py-12 !px-4">
      <div className="!max-w-7xl !mx-auto">
        <div className="!grid !grid-cols-1 md:!grid-cols-4 lg:!grid-cols-12 !gap-8 !mb-8">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:!col-span-6 md:!col-span-4 !pr-0 lg:!pr-12 !max-w-3xl">
            <h2 className="!font-bold !text-2xl lg:!text-3xl !text-white !mb-4">
              Aceworkusa
            </h2>
            <p className="!text-white !opacity-90 !mb-6 !text-sm lg:!text-base">
              We simplify marketing with tools to help you budget and grow
              wealth. Take control of your marketing effortlessly and
              confidently.
            </p>
            {/* Newsletter Subscribe */}
            <form className="!w-full !max-w-md">
              <div className="!flex !flex-col sm:!flex-row !items-center !w-full !bg-white !rounded-full !p-2 sm:!pl-4 !gap-2 sm:!gap-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="!p-3 sm:!p-2 !rounded-full sm:!rounded-l-full sm:!rounded-r-none !outline-none !text-gray-800 !w-full sm:!flex-1 !min-w-0 !border-0 !text-center sm:!text-left"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="!bg-orange-500 hover:!bg-orange-600 !text-white !px-8 sm:!px-6 !py-3 sm:!py-2.5 !rounded-full !font-medium !transition-colors !whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:!col-span-2 md:!col-span-1">
            <h3 className="!font-bold !text-lg !mb-4 !text-white">HOME</h3>
            <ul className="!space-y-2 !text-sm !opacity-90">
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/about" className="!text-white !no-underline">
                  About us
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/pricing" className="!text-white !no-underline">
                  Pricing
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/location" className="!text-white !no-underline">
                  Our Location
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/contact" className="!text-white !no-underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SEO */}
          <div className="lg:!col-span-2 md:!col-span-1">
            <h3 className="!font-bold !text-lg !mb-4 !text-white">SEO</h3>
            <ul className="!space-y-2 !text-sm !opacity-90">
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/blog" className="!text-white !no-underline">
                  Blog
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link
                  href="/blog-details"
                  className="!text-white !no-underline"
                >
                  Blog Details
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/testimonial" className="!text-white !no-underline">
                  Testimonial
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/help-center" className="!text-white !no-underline">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Info */}
          <div className="lg:!col-span-2 md:!col-span-1">
            <h3 className="!font-bold !text-lg !mb-4 !text-white">Info</h3>
            <ul className="!space-y-2 !text-sm !opacity-90">
              <li className="hover:!opacity-100 !transition-opacity">
                <Link
                  href="/privacy-policy"
                  className="!text-white !no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:!opacity-100 !transition-opacity">
                <Link href="/terms" className="!text-white !no-underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="!border-1 !border-[#E5E7E6] !my-8" />

        {/* Bottom row: copyright & socials */}
        <div className="!flex !flex-col md:!flex-row !gap-4 md:!gap-0 !justify-between !items-center">
          <span className="!text-sm !text-white !opacity-90 !text-center md:!text-left">
            © Copyright 2025, All Rights Reserved by aceworkusa
          </span>

          {/* Social Icons */}
          <div className="!flex !gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!transition-transform hover:!scale-110"
            >
              <Image
                src="/assets/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
                unoptimized
                className="!w-10 !h-10"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!transition-transform hover:!scale-110"
            >
              <Image
                src="/assets/x.svg"
                width={40}
                height={40}
                unoptimized
                alt="X (Twitter)"
                className="!w-10 !h-10"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!transition-transform hover:!scale-110"
            >
              <Image
                src="/assets/instagram.svg"
                width={40}
                height={40}
                unoptimized
                alt="Instagram"
                className="!w-10 !h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
