import React from "react";
import "../comman.css";
import Input from "@mui/material/Input";
import { Card ,Paper,Grid} from "@material-ui/core";

const blogfeedback = () => {
  return (
    <>
      <Paper style={{ boxShadow: "none" }}>
        <span className="commentsspan"> Feedback</span>
        <Grid>
          <Card className="Feedback" style={{ boxShadow: "none" }}>
            <form>
              <Input placeholder="Name" required />
              <br />
              <Input placeholder="Mobile No" required />
              <br />
              <Input placeholder="Email Id" required />
              <br />
              <Input placeholder="Message" rows={2} rowsMax={4} />
              <br />
              <button>POST COMMENT</button>
            </form>
          </Card>
        </Grid>
      </Paper>
    </>
  );
};

export default blogfeedback;
