import React, { Suspense } from "react";
import "./comman.css";

const Blogfeedback = React.lazy(() => import("./UI/blogfeedback"));
const Blog02comment = React.lazy(() => import("./UI/blog02comment"));
const Blog02card = React.lazy(() => import("./UI/blog02card"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));
export default function Blog02() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="blog2">
        <div className="blog2heading">
          <h2> Single Blog</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Single Blog
          </a>
          &nbsp;&nbsp;
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Blog02card />
        <Blog02comment />
        <Blogfeedback />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
