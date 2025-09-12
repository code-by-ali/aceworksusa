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
            <h3>
              Smart Marketing <br />
              Solutions for Every Business
            </h3>
            <a href="#" className="btn-orange">
              View All Blogs
            </a>
          </div>
          <div className="blogs">
            <div className="row">
              {blog.map((blog, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card  blog-card">
                    <Image
                      unoptimized
                      src={blog.image}
                      alt={blog.title}
                      width={100}
                      height={100}
                      style={{ width: "100%" }}
                    />
                    <div className="card-body">
                      <h6>{blog.date}</h6>
                      <h4>{blog.title}</h4>
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
