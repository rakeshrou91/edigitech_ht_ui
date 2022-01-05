import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BsMoon, BsMoonStars, BsSun, BsSunrise } from "react-icons/bs";
class Schedule extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };
  getFetchUsers() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("http://localhost:3000/MorningTime")
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              users: result,
            })
          )
          .catch(console.log);
      }
    );
  }
  componentDidMount() {
    this.getFetchUsers();
  }
  render() {
    const { users, error } = this.state;

    return (
      <>
        {error ? <p>{error.message} </p> : null}{" "}
        {users.map((user) => {
          const {
            Mtime1,
            Mtime2,
            Mtime3,
            Mtime4,
            Mtime5,
            Mtime6,
            Mtime7,
            Mtime8,
            Mtime9,
            Mtime10,
            Mtime11,
            Mtime12,
            Mtime13,
            Atime1,
            Atime2,
            Atime3,
            Atime4,
            Atime5,
            Atime6,
            Atime7,
            Atime8,
            Etime1,
            Etime2,
            Etime3,
            Etime4,
            Etime5,
            Etime6,
            Etime7,
            Etime8,
            Etime9,
            Etime10,
            Etime11,
            Etime12,
            Etime13,
            Etime14,
            Etime15,
            Etime16,
            Ntime1,
            Ntime2,
            Ntime3,
            Ntime4,
          } = user;
          return (
            <div key={Mtime1}>
            <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: "auto",
                  },
                }}
              >
                <Paper elevation={0} style={{ width: "auto",justifyContent: "center",alignContent:'center',display:'flex'}}>
                <Button
                style={{
                  border: "1px solid #5BD1D7",
                  color: "#5BD1D7",
                  borderRadius: "60px",
                  height: "70px",
                  width: "70px",
                }}
              >
                <i class="fas fa-chevron-left fa-2x"></i>
              </Button>
                </Paper>
                <Paper elevation={0} style={{ width: "auto",justifyContent: "center",alignContent:'center',display:'flex' }}>
                <Button
                style={{
                  border: "1px solid #5BD1D7",
                  color: "#5BD1D7",
                  borderRadius: "60px",
                  height: "70px",
                  width: "70px",
                }}
              >
                <i class="fas fa-chevron-right fa-2x"></i>
              </Button>
                </Paper>
            </Box>
             
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: "auto",
                  },
                }}
              >
                <Paper elevation={0} style={{ width: "200px" }}>
                  <Typography variant="h5" gutterBottom component="div" style={{color:"#808080"}}>
                    <BsSunrise></BsSunrise> Morning
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime1}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime8}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime2}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime9}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime3}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime10}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime4}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime11}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime5}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime12}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime6}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime13}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Mtime7}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
              </Box>
              <hr size="1" width="90%" color="#E2E5DE" />
              {<br />}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: "auto",
                  },
                }}
              >
                <Paper elevation={0} style={{ width: "200px" }}>
                  <Typography variant="h5" gutterBottom component="div" style={{color:"#808080"}}>
                    <BsSun></BsSun> Afternoon
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime1}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime8}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime2}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime3}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime4}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime5}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime6}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Atime7}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
              </Box>

              <hr size="1" width="90%" color="#E2E5DE" />
              {<br />}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: "auto",
                  },
                }}
              >
                <Paper elevation={0} style={{ width: "200px" }}>
                  <Typography variant="h5" gutterBottom component="div" style={{color:"#808080"}}>
                    <BsMoon></BsMoon> Evening
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime1}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime8}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime15}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime2}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime9}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime16}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime3}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime10}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime4}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime11}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime5}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime12}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime6}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime13}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime7}
                  </Button>
                  {<br />}
                  {<br />}
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Etime14}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
              </Box>
              <hr size="1" width="90%" color="#E2E5DE" />
              {<br />}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 128,
                    height: "auto",
                  },
                }}
              >
                <Paper elevation={0} style={{ width: "200px" }}>
                  <Typography variant="h5" gutterBottom component="div" style={{color:"#808080"}}>
                    <BsMoonStars></BsMoonStars> Night
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Ntime1}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Ntime2}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Ntime3}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
                <Paper elevation={0}>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid #5BD1D7",
                      height: "50px",
                      color: "#5BD1D7",
                      fontSize: "18px",
                    }}
                  >
                    {Ntime4}
                  </Button>
                  {<br />}
                  {<br />}
                </Paper>
              </Box>
              {<br />}
            </div>
          );
        })}{" "}
      </>
    );
  }
}
export default Schedule;

// import React from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";

// class Schedule extends React.Component{

//   render (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           "& > :not(style)": {
//             m: 1,
//             width: 128,
//             height: 128,
//           },
//         }}
//       >
//         <Paper >
//           <Button style={{width:'100px', border:'1px solid #5BD1D7' }}>
//             Large
//           </Button>{<br/>}{<br/>}
//         </Paper>
//         <Paper variant="outlined" square />
//       </Box>
//     </>
//   );
// };
// export default Schedule;
