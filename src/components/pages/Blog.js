import React, { Suspense } from "react";
import "./comman.css";
const Blogprevnext = React.lazy(() => import("./UI/blogprevnext"));
const Blogcode = React.lazy(() => import("./UI/blogcode"));
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));
export default function Blog() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar1/>
      </Suspense>
      <div className="blog">
        <div className="blogheading">
          <h2> Blog 02</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Blog 02
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Blogcode />
        <Blogprevnext />
        <Footer />
      </Suspense>
    </>
  );
}
