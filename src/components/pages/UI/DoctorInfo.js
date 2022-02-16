import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Redirect} from 'react-router-dom';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
//import { Link } from "react-router-dom";
import Sorting from "./Sorting.js";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
// class DoctorInfo extends React.Component {
//   constuctor() {
//     this.routeChange = this.routeChange.bind(this);
//   }
//   state = {
//     isLoading: true,
//     users: [],
//     error: null,
//     active:true,
//     redirect: false,
//     filterdata:[]
//   };
  
//   redirectHandler = () => {
//     this.setState({ redirect: true })
//     this.renderRedirect();
// }
// renderRedirect = (props) => {
//     if (this.state.redirect) {
//         return(
//           <>
         
//           <Redirect to='/book'  />
//           </>
//         );
//     }
// }
//   getFetchUsers() {
//     this.setState(
//       {
//         loading: true,
//       },
//       () => {
//         fetch("http://localhost:3000/DrInfo")
//           .then((res) => res.json())
//           .then((result) =>
//             this.setState({
//               loading: false,
//               users: result,
//             })
//           )
//           .catch(console.log);
//       }
//     );
//   }
//   componentDidMount() {
//     this.getFetchUsers();
//   }
 
//   render() {
    
//     const { users, error } = this.state;
//     const filterdata=(e)=>{ 
//       if(e.target.value==="male"){
//         var filtereddata=users.filter((user)=>{
//           const {
//             drname,
//             type,
//             clinicname,
//             fees,
//             src,
//             experience,
//             address,
//             likes,
//             story,
//             availablestatus,
//             appointment,
//             appointmentfee,
//             gender,
//           } = user;
//           return users==="male"
//         })
//     }this.setState({ 
//       ...this.state,
//       filterdata:filtereddata
//     })
//   }
    // const blue = {
    //   500: "#007FFF",
    //   600: "#0072E5",
    //   700: "#0059B2",
    //   200: "#5BD1D7",
    // };
    
    // const CustomButtonRoot = styled("button")`
    //   font-family: IBM Plex Sans, sans-serif;
    //   font-weight: bold;
    //   font-size: 0.875rem;
    //   background-color: ${blue[200]};
    //   padding: 12px 24px;
    //   border-radius: 8px;
    //   color: white;
    //   transition: all 150ms ease;
    //   cursor: pointer;
    //   border: none;
    //   width: 260px;
    //   height: 65px;
    //   &:hover {
    //     background-color: ${blue[600]};
    //   }

    //   &.${buttonUnstyledClasses.active} {
    //     background-color: ${blue[700]};
    //   }

    //   &.${buttonUnstyledClasses.focusVisible} {
    //     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
    //       0 0 0 5px rgba(0, 127, 255, 0.5);
    //     outline: none;
    //   }

    //   &.${buttonUnstyledClasses.disabled} {
    //     opacity: 0.5;
    //     cursor: not-allowed;
    //   }
    // `;

    // function CustomButton(props) {
    //   return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
    // }
//     function mycheck(props){
//       return <h2>I am a { props.brand }!</h2>;
//     }
//     return (
//       <>
//         <Sorting  />
        // <FormGroup>
        //   <FormControlLabel
        //     control={<Checkbox   
        //     />}
        //     value="male"
        //     label="Male Doctor"
        //     onChange={filterdata}
        //   />
        //   <FormControlLabel
        //     control={<Checkbox  />}
        //     label="Female Doctor"
        //     value="female"
        //     onChange={this.filterdata}
        //   />
        // </FormGroup>

//         <h1>total :{users.length}</h1>
//         {error ? <p>{error.message} </p> : null}{" "}
//         {users.map((user) => {
//           const {
//             drname,
//             type,
//             clinicname,
//             fees,
//             src,
//             experience,
//             address,
//             likes,
//             story,
//             availablestatus,
//             appointment,
//             appointmentfee,
//           } = user;
         
          
//           return (

//             <div key={drname}>
            
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   "& > :not(style)": {
//                     m: 1,
//                     width: "auto",
//                     height: "auto",
//                   },
//                 }}
//               >
               
//                 <Paper elevation={0}>
//                   <Avatar
//                     alt="Remy Sharp"
//                     src={src}
//                     style={{ height: 130, width: 130 }}
//                   />
//                 </Paper>
//                 <Paper elevation={0}>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     component="div"
//                     style={{ fontWeight: "bold", color: "#5BD1D7" }}
//                     value={drname}
//                   > 
//                     {drname}
//                   </Typography>
                  // <Typography
                  //   variant="subtitle1"
                  //   gutterBottom
                  //   component="div"
                  //   style={{ color: "#878484" }}
                  // >
                  //   {type}
                  //   <Typography
                  //     variant="subtitle1"
                  //     gutterBottom
                  //     component="div"
                  //   >
                  //     {experience}
                  //   </Typography>
                  // </Typography>
            //       <Typography variant="subtitle1" gutterBottom component="div">
            //         <i class="fas fa-map-marker-alt fa-sm"></i> {address}
            //         &nbsp;&nbsp;<i class="fas fa-circle fa-xs"></i>&nbsp;
            //         {clinicname}
            //       </Typography>
            //       <Typography
            //         variant="subtitle1"
            //         gutterBottom
            //         component="div"
            //         style={{ color: "#878484" }}
            //       >
            //         {fees}
            //       </Typography>
            //       <div style={{border:'none',borderTop:'2px dashed #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
            //   {}
            //   </div>{<br/>}
            //       <Button
            //         variant="contained"
            //         color="success"
            //         style={{ fontWeight: "bold" }}
            //       >
            //         <i class="fas fa-thumbs-up"></i> &nbsp;{likes}
            //       </Button>
            //       &nbsp;&nbsp;&nbsp;&nbsp;
            //       <a href="" style={{ color: "#413E3E", fontWeight: "bold" }}>
            //         {story}
            //       </a>
            //     </Paper>
                
            //     <Paper
            //       elevation={0}
            //       style={{ alignItems: "end",height:'100px' ,marginLeft:'10%'}}
            //     >
                 
            //       <Typography variant="subtitle1" gutterBottom component="div"  style={{color:'#5cb85c',fontWeight:'bold'}}>
            //       <i class="fas fa-calendar-check"></i>&nbsp;{availablestatus}
            //       </Typography>
            //       <CustomButton onClick={this.redirectHandler}>
            //         <Typography variant="subtitle1" gutterBottom component="div" style={{ textDecoration:'none',color:'#fff'}}>
            //          {appointment}
            //           <Typography variant="body2" gutterBottom component="div">
            //            {appointmentfee}
            //           </Typography>
            //         </Typography>
            //       </CustomButton>
            //       {this.renderRedirect()}
            //     </Paper>
            //   </Box>
            //   <hr size="1" width="90%" color="#878484" />  
            //   <div style={{border:'none',borderTop:'0px  #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
            //   {}
            //   </div>
            //   {<br/>}
            // </div>
//           );
//         })}{" "}
//       </>
//     );
//   }
// }
// export default DoctorInfo;
import { useState,useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
function DoctorInfo (){
  const [userList,setUserList]= useState([]);
  const [searchterm,setSearchterm]= useState("");
  const [foundUsers, setFoundUsers] = useState(userList);
  const columns=[
    {dataField : 'id',text:'Id'},
    {dataField : 'drname',text:'Doctor Name'},
    {dataField : 'src',text:'Image'},
    {dataField : 'gender',text:'Gender'},
    {dataField : 'type',text:'Type'}
 

  ]
  const blue = {
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    200: "#5BD1D7",
  };
  
  const CustomButtonRoot = styled("button")`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[200]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 260px;
    height: 65px;
    &:hover {
      background-color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
        0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }
  useEffect(()=>{
    fetch('http://localhost:3000/DrInfo')
    .then(response=>response.json())
    .then(result=>setUserList(result))
    .catch(error=>console.log(error));
  },[])
  
  return(
    <div>
      {/* <BootstrapTable keyField="id" columns={columns} data={userList}>

      </BootstrapTable> */}
      <Sorting/>
    </div>
  )
}
export default DoctorInfo;