import React from "react";

export default function CaseStudyDetail() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Volta Studio
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl">
            We designed a dynamic digital platform for this forward-thinking
            tech agency that focuses on AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-orange-500/30">
              Visit the link
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all flex items-center gap-2">
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
            alt="Yellow flower macro"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Industry Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Industry: LegalTech & Document Analysis
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Process contracts and lengthy legal documents in seconds, but its
            interface felt intimidating to non-technical users. The messaging
            also created an unintended fear that the AI might replace rather
            than assist human lawyers.
          </p>
        </div>

        {/* The Goal Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The goal
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Digital Dynamo approached us to build a website that would amplify
              their reputation as a tech innovator. They needed a platform that
              showcased their expertise, attracted top-tier clients, and
              reflected their vibrant, fast-paced culture. They wanted to break
              the mold of typical tech agency sites by embracing a bold.
            </p>
            <p>
              Our challenge was to craft an experience that would communicate
              their technical prowess while remaining approachable and human.
              Immersive visuals that would stand out in a crowded market.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. The new brand narrative positioned
              FrameForge as a collaborator — an assistant that gave creators
              more time to focus on storytelling. We incorporated a live
              side-by-side comparison.
            </p>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=600&fit=crop"
            alt="Orange and pink gradient"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* The Process Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The process
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We started by defining the key user personas, ensuring the website
              would resonate with tech decision-makers and forward-thinking
              brands. Through extensive workshops with their team, we refined
              the design direction to align with Digital Dynamo's vision for the
              future.
            </p>
            <p>
              Our design approach combined immersive visuals, interactive
              storytelling, and seamless animations. We infused their every
              interaction felt intentional and on-brand, while also highlighting
              Digital Dynamo's diverse capabilities in tech innovation.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. Every design detail carried an
              assistant that gave creators more time to focus on storytelling.
              We incorporated a live side-by-side comparison tool on the site,
              allowing visitors to see real footage alongside AI-edited
              sequences instantly.
            </p>
          </div>
        </div>

        {/* Results Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop"
            alt="Red architectural structure"
            className="w-full h-[300px] object-cover rounded-3xl"
          />
          <img
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=400&fit=crop"
            alt="Vintage light bulb"
            className="w-full h-[300px] object-cover rounded-3xl"
          />
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Results
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The new site positions Vista as a creative leader, giving them a
              digital platform that not only showcases their work but also
              builds trust with prospective clients. Feedback has been
              overwhelmingly positive, with an increase in project inquiries and
              a stronger online presence that aligns perfectly with their
              vision.
            </p>
            <p>
              A collection of transformations where AI and design met with
              purpose. Every project began with a problem that felt too big or
              too complex, yet ended with a solution that felt inevitable once
              it was in place. Our approach blends strategy, creativity, and
              technology.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. The new brand narrative positioned
              FrameForge as a collaborator — an assistant that gave creators
              more time to focus on storytelling. We incorporated a live
              side-by-side comparison tool on the site, allowing visitors to see
              raw footage alongside AI-edited sequences instantly.
            </p>
          </div>
        </div>

        {/* Final Large Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&h=600&fit=crop"
            alt="Abstract gradient waves"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
