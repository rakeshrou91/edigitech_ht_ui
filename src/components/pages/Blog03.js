import React, { Suspense } from "react";
import "./comman.css";

import { Grid, Paper, Avatar, TextField } from "@material-ui/core";

const Blog03author = React.lazy(() => import("./UI/blog03author"));
const Blog01sidecard = React.lazy(() => import("./UI/blog01sidecard"));
const Blogfeedback = React.lazy(() => import("./UI/blogfeedback"));
const Blog02comment = React.lazy(() => import("./UI/blog02comment"));
const Blog02card = React.lazy(() => import("./UI/blog02card"));
const Footer = React.lazy(() => import("./UI/footer"));

export default function Blog03() {
  return (
    <>
      <div className="blog3">
        <div className="blog2heading">
          <h2> Single Blog</h2>
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home{" "}
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Single Blog
          </a>{" "}
          &nbsp;&nbsp;
        </div>
      </div>
      <Paper className="blog03paper " style={{ boxShadow: "none" }}>
        <Grid container spacing={5}>
          <Grid item xs={10}>
            <Suspense fallback={<div>Loading...</div>}>
              <Blog02card />
              <Blog03author />
              <Blog02comment />
              <Blogfeedback />
            </Suspense>
          </Grid>
          <Grid item xs={2}>
            <Suspense fallback={<div>Loading...</div>}>
              <Blog01sidecard />
            </Suspense>
          </Grid>
        </Grid>

        <Suspense fallback={<div>Loading...</div>}></Suspense>
      </Paper>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}
