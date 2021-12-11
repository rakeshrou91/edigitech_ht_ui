import React, { Suspense } from "react";
import "./comman.css";
import Input from "@mui/material/Input";
import { Grid, Paper, Avatar, TextField, Link } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Image from "react-bootstrap/Image";

const Blogfeedback = React.lazy(() => import("./UI/blogfeedback"));
const Blog02comment = React.lazy(() => import("./UI/blog02comment"));
const Blog02card = React.lazy(() => import("./UI/blog02card"));
const Footer = React.lazy(() => import("./UI/footer"));

export default function Blog02() {
  return (
    <>
      <div className="blog2">
        <div className="blog2heading">
          <h2> Single Blog</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home{" "}
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Single Blog
          </a>{" "}
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
