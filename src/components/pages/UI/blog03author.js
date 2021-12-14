import React from "react";
import "../comman.css";
import { SiIndeed } from "react-icons/si";
import { Card } from "@material-ui/core";
const Blog03author = () => {
  return (
    <>
      <Card className="blog03card" style={{ boxShadow: "none" }}>
        <span>About The Author</span>
        <div>
          <img src={process.env.PUBLIC_URL + "/main-author.jpg"} alt="Avatar" />

          <h3>Angel Smith</h3>
          <p>
            Aenean et mauris eu leo fermentum ullamcorper sit amet vel leo. Ut
            posuere, sapien at rhoncus faucibus, ex mi placerat risus, eu
            tincidunt velit velit ac eros. Pellentesque elementum vulputate
            tortor, et fringilla dolor elementum vitae. Fusce cursus, justo a
            fringilla pulvinar, lacus urna tristique leo.
          </p>
          <td>
            <i class="fab fa-facebook "></i>{" "}
          </td>
          <td>
            <i class="fab fa-twitter"></i>
          </td>

          <td>
            <i>
              <SiIndeed />
            </i>
          </td>
        </div>
      </Card>
    </>
  );
};

export default Blog03author;
