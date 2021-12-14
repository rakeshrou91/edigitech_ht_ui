import React from "react";
import "../comman.css";
import { Grid, Paper, Avatar} from "@material-ui/core";
import { Card } from "@material-ui/core";
const Blog02comment = () => {
  return (
    <>
      <Paper style={{ boxShadow: "none" }}>
        <span className="commentsspan"> Comments (3)</span>
        <Grid>
          <Card className="commentscard">
            <tr>
              <Avatar
                src={process.env.PUBLIC_URL + "/cmnt-1.jpg"}
                style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
              />
              <span>Angel Smith</span>
              <h6 >November 20,2018 at 8:31 pm</h6>
              <p>
                Maecenas at turpis ut lacus posuere dapibus. Fusce et
                sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget
                neque commodo facilisis. Nunc malesuada dolor vitae feugiat
                fermentum.
              </p>
            </tr>
            <a href="#">
              REPLY <i class="fas fa-reply-all"></i>
            </a>
          </Card>
          <Card className="commentscard">
            <tr>
              <Avatar
                src={process.env.PUBLIC_URL + "/cmnt-2.jpg"}
                style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
              />
              <span>Mahedi Amin</span>
              <h6 >September 3,2012 at 10:30 am</h6>
              <p>
                Maecenas at turpis ut lacus posuere dapibus. Fusce et
                sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget
                neque commodo facilisis. Nunc malesuada dolor vitae feugiat
                fermentum.
              </p>
            </tr>

            <a href="#">
              REPLY <i class="fas fa-reply-all"></i>
            </a>
          </Card>
          <Card className="commentscard">
            <tr>
              <Avatar
                src={process.env.PUBLIC_URL + "/cmnt-3.jpg"}
                style={{ width: 80, height: 80, border: "2px solid #496cfe" }}
              />
              <span>Cheris Ames</span>
              <h6  >January 4,2013 at 10:15 am</h6>
              <p>
                Maecenas at turpis ut lacus posuere dapibus. Fusce et
                sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget
                neque commodo facilisis. Nunc malesuada dolor vitae feugiat
                fermentum.
              </p>
            </tr>

            <a href="#">
              REPLY <i class="fas fa-reply-all"></i>
            </a>
          </Card>
        </Grid>
      </Paper>
    </>
  );
};

export default Blog02comment;
