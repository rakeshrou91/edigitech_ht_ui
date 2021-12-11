import React from "react";
import "../comman.css";
import Image from "react-bootstrap/Image";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import { Card } from "@material-ui/core";

const Blogprevnext = () => {
  return (
    <>
      <Paper style={{ boxShadow: "none" }} className="nextprevrow">
        <Grid>
          <Card className="nextprev">
            <a href="#">
              <i class="fas fa-angle-double-left"></i>
            </a>
          </Card>
          <Card className="nextprev1" style={{ backgroundColor: "#004D61" }}>
            <a href="#">01</a>
          </Card>
          <Card className="nextprev">
            <a href="#">02</a>
          </Card>
          <Card className="nextprev">
            <a href="#">03</a>
          </Card>
          <Card className="nextprev">
            <a href="#">
              <i class="fas fa-angle-double-right"></i>
            </a>
          </Card>
        </Grid>
      </Paper>
    </>
  );
};

export default Blogprevnext;
