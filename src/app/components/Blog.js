import React from "react";
import Image from "next/image";
const blog = [
  {
    image: "/assets/blog1.png",
    date: "Aug 20, 2025",
    title: "When to Call an Expert for Designing servcies.",
  },
  {
    image: "/assets/blog2.png",
    date: "Aug 18, 2025",
    title: "How to Maintain Your ROI System Year-Round",
  },
  {
    image: "/assets/blog3.png",
    date: "Aug 15, 2025",
    title: "Understanding the Importance of Regular Organic Leads",
  },
];
const Blog = () => {
  return (
    <div>
      <section className="blog-sec">
        <div className="container">
          <badge className="badge-blue">Will Keep You Updated</badge>

          <div className="d-flex justify-content-between align-items-end">
            <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl">
              Smart Marketing <br />
              Solutions for Every Business
            </h3>
            <a href="#" className="btn-orange">
              View All Blogs
            </a>
          </div>

          <div className="blogs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {blog.map((blog, idx) => (
                <div key={idx} className="card blog-card">
                  <Image
                    unoptimized
                    src={blog.image}
                    alt={blog.title}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <div className="card-body">
                    <div className="font-medium text-[#25252580] text-base sm:text-sm">
                      {blog.date}
                    </div>
                    <div className="font-bold text-xl sm:text-2xl">
                      {blog.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
