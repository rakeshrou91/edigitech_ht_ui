import Container from "@material-ui/core/Container";
import moment from 'moment';
import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Bookappointment from "./Bookappointment";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import "./Sorting.css";

function Sorting() {
  const [active, setActive] = useState(false);
  
  const [userList, setUserList] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [sort, setSort] = useState("select");
  const [searchtermfee, setSearchtermfee] = useState("");
  const [searchtermexp, setSearchtermexp] = useState("");
  const [searchtermvideo, setSearchtermvideo] = useState(false);
  const [gender, setGender] = useState("");
  const [consultationfee, setConsultationfee] = useState("");
  const [videoconsult, setVideoconsult] = useState(false);
  const [drnameshow, setDrnameshow] = useState("");
  const [showbutton, setShowbutton] = useState(false);
  const [show, setShow] = useState("select");
  const [showcancel, setShowcancel] = useState("select");
  const [clinicnameshow, setClinicnameshow] = useState("select");
  const [appointmentfeeshow, setAppointmentfeeshow] = useState("select");
  const [doctorimageshow, setDoctorimageshow] = useState("select");
  const [typeshow, setTypeshow] = useState("select");

  const [dravailablestatus, setDravailablestatus] = useState("select");
 
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  var doctorname = "";
  var doctorname1 = "";
  var clinicname = "";
  
  var appointmentfee = "";
  var doctorimage = "";
  var type = "";

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
 
  const handleChange = (event) => {
    setGender(event.target.value);
    setSearchterm(event.target.value);
  };
  const handleChangevideo = (event) => {
   
    setVideoconsult(!videoconsult);
  
    setSearchtermvideo(!videoconsult);

  };
  const change = (event) => {
    setSort(event.target.value);

    if (event.target.value === "yearsofExperience") {
      return setSearchtermexp(event.target.value);
    } else if (event.target.value === "priceLowToHigh") {
      return setSearchtermexp(event.target.value);
    } else if (event.target.value === "priceHighToLow") {
      return setSearchtermexp(event.target.value);
    } else if (event.target.value === "recommendation") {
      return setSearchtermexp(event.target.value);
    }
   
  };
  const handleChangefees = (event) => {
    setConsultationfee(event.target.value);
    if (event.target.value === "free") {
      return setSearchtermfee("free");
    } else if (event.target.value === "1-200") {
      return setSearchtermfee("1-200");
    } else if (event.target.value === "201-500") {
      return setSearchtermfee("201-500");
    } else if (event.target.value === "501+") {
      return setSearchtermfee("501+");
    }

    console.log(event.target.value);
  };
  const resetRadioState = () => {
    setGender("");
    setConsultationfee("");
    setSearchterm("");
    setSearchtermfee("");
    setSearchtermexp("");
    setSort("Select");
    setSearchtermvideo(false);
    setVideoconsult(false);
  };
  const handleshowbook = () => {
    setShow(true);
  };
  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }
  useEffect(() => {
    const url = "http://localhost:3000/slotdate";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
     
    
        let arr2 = [];
        json.forEach((x)=>{
          let key = "fulldate";
          // Checking if there is any object in arr2
          // which contains the key value
           if(arr2.some((val)=>{ return val[key] == x[key] })){
               
             // If yes! then increase the occurrence by 1
             arr2.forEach((k)=>{
               if(k[key] === x[key]){ 
                 k["occurrence"]++
               }
            })
               
           }else{
             // If not! Then create a new object initialize 
             // it with the present iteration key's value and 
             // set the occurrence to 1
             let a = {}
             a[key] = x[key]
             a["occurrence"] = 1
             arr2.push(a);
           }
           
          
        })
          
        console.log(arr2);
        for( let i=0 ;i<arr2.length;i++)
        {
           if(arr2[i].occurrence === 31){
            const fulldate=moment(new Date()).format('DD-MM-YYYY');
            if(arr2[i].fulldate ===fulldate ){
              setDravailablestatus("Not Available");
              console.log(arr2[i].fulldate);
              
            }else{
              console.log(" Available");
            }
             
          }
        }
        const arr2len =arr2.length;
        console.log(arr2len);
       // console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
   
    fetchData();
    fetch("http://localhost:3000/DrInfo")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);
  const buttonhandler = (key, val) => {
    doctorname = val.id;
    clinicname = val.clinicname;
    appointmentfee = val.appointmentfee;
    doctorimage = val.src;
    type = val.type;
    doctorname1=val.drname;
    setShow(doctorname);
    setDrnameshow(doctorname1);
    setShowcancel(doctorname);
    setClinicnameshow(clinicname);
    setAppointmentfeeshow(appointmentfee);
    setTypeshow(type);
    setDoctorimageshow(doctorimage);

  
  };

  const showfilter = (
    <>
      <Paper style={{ backgroundColor: "#4863A0", boxShadow: "none" }}>
        <FormLabel
          component="legend"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
        >
          Gender
        </FormLabel>
        <RadioGroup aria-label="gender" name="radio-buttons-group">
          <FormControlLabel
            control={
              <Radio
                style={{ color: "#fff" }}
                value="male"
                checked={gender === "male"}
                onChange={handleChange}
              />
            }
            label="Male"
          />
          <FormControlLabel
            control={
              <Radio
                style={{ color: "#fff" }}
                value="female"
                checked={gender === "female"}
                onChange={handleChange}
              />
            }
            label="Female"
          />
        </RadioGroup>
        {/* <Select styles={{ backgroundColor: "#023950" }} value={searchterm} options={genderoptions} onChange={(e) => {setSearchterm(e.target.value);}} /> */}
      </Paper>

      <Paper square style={{ backgroundColor: "#4863A0", boxShadow: "none" }}>
        <FormLabel
          component="legend"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
        >
          Consultation Fee
        </FormLabel>
        <RadioGroup aria-label="fees" name="radio-buttons-group">
          <FormControlLabel
            control={
              <Radio
                style={{ color: "#fff" }}
                value="free"
                checked={consultationfee === "free"}
                onChange={handleChangefees}
              />
            }
            label="Free"
          />
          <FormControlLabel
            value="onetotwohundred"
            control={
              <Radio
                style={{ color: "#fff" }}
                value="1-200"
                checked={consultationfee === "1-200"}
                onChange={handleChangefees}
              />
            }
            label="1-200"
          />
          <FormControlLabel
            value="201-500"
            control={
              <Radio
                style={{ color: "#fff" }}
                checked={consultationfee === "201-500"}
                onChange={handleChangefees}
              />
            }
            label="201-500"
          />
          <FormControlLabel
            value="501+"
            control={
              <Radio
                style={{ color: "#fff" }}
                checked={consultationfee === "501+"}
                onChange={handleChangefees}
              />
            }
            label="501+"
          />
        </RadioGroup>
      </Paper>
    </>
  );
 const handleClose =()=>{
   setShow("select");
   setShowcancel("select");
 }
 const handlepagenoclick =(event)=>{
   setcurrentPage(Number(event.target.id));
 }
 const pages = [];
  for (let i = 1; i <= Math.ceil(userList.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItems = userList.slice(indexofFirstItem,indexofLastItem);
   const renderPageNumbers = pages.map((number) => { 
     if(number < maxPageNumberLimit+1 && number > minPageNumberLimit ){
      return (
        <li
          key={number}
          id={number}
          onClick={handlepagenoclick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    }else{
      return null;
    }
  });
     const handleNextbtn = () => {
      if(currentPage ===maxPageNumberLimit){
        setcurrentPage(maxPageNumberLimit);
      }
     setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  
  };

  const handlePrevbtn = () => {
    if(currentPage ===1){
       setcurrentPage(1);
    }else{  setcurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }}
  
  };
  
 let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
  const renderData = userList =>{
    return(
        <>
        {userList
          .filter((val) => {
            if (searchterm === "") {
              if (searchtermfee === "") {
                if (searchtermvideo === true) {
                  if (val.videoconsult === "true") {
                    return val;
                  }
                } else if (searchtermvideo === false) {
                  return val;
                }
              } else if (searchtermvideo === true && searchtermfee === "free") {
                if (val.videoconsult === "true" && val.fees === "0") {
                  return val;
                }
              } else if (
                searchtermvideo === true &&
                searchtermfee === "1-200"
              ) {
                for (let i = 1; i <= 200; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (
                searchtermvideo === true &&
                searchtermfee === "201-500"
              ) {
                for (let i = 201; i <= 500; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (searchtermvideo === true && searchtermfee === "501+") {
                for (let i = 501; i <= 10000; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (searchtermfee === "free") {
                if (val.fees === "0") {
                  return val;
                }
              } else if (searchtermfee === "1-200") {
                for (let i = 1; i <= 200; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              } else if (searchtermfee === "201-500") {
                for (let i = 201; i <= 500; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              } else if (searchtermfee === "501+") {
                for (let i = 501; i <= 10000; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              }
              // if (searchtermfee === "1-200") {
              //   for (let i = 1; i <= 200; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
              // if (searchtermfee === "201-500") {
              //   for (let i = 201; i <= 500; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
              // if (searchtermfee === "501+") {
              //   for (let i = 501; i <= 10000; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
            } else if (searchterm === "male" && searchtermvideo === true) {
              if (val.gender === "male" && val.videoconsult === "true") {
                return val;
              }
            } else if (
              searchterm === "male" &&
              searchtermvideo === true &&
              searchtermfee === "free"
            ) {
              console.log("hell");
            } else if (searchterm === "female" && searchtermvideo === true) {
              if (val.gender === "female" && val.videoconsult === "true") {
                return val;
              }
            } else if (searchterm === "male" && searchtermfee === "free") {
              if (val.gender === "male" && val.fees === "0") {
                return val;
              }
            } else if (searchterm === "male" && searchtermfee === "1-200") {
              for (let i = 1; i <= 200; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "male" && searchtermfee === "201-500") {
              for (let i = 201; i <= 500; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "male" && searchtermfee === "501+") {
              for (let i = 501; i <= 10000; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "free") {
              if (val.gender === "female" && val.fees === "0") {
                return val;
              }
            } else if (searchterm === "female" && searchtermfee === "1-200") {
              for (let i = 1; i <= 200; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "201-500") {
              for (let i = 201; i <= 500; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "501+") {
              for (let i = 501; i <= 10000; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (val.gender === searchterm) {
              return val;
            } else if (
              val.drname.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return val;
            } else if (
              val.type.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return val;
            }
          })
          .sort((a, b) => {
            if (searchtermexp === "yearsofExperience") {
              return a.experience - b.experience;
            } else if (searchtermexp === "priceLowToHigh") {
              return a.fees - b.fees;
            } else if (searchtermexp === "priceHighToLow") {
              return b.fees - a.fees;
            } else if (searchtermexp === "recommendation") {
              return b.likes - a.likes;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <Container maxWidth="lg">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: "auto",
                        height: "auto",
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      <Avatar
                        alt="DoctorImage"
                        src={val.src}
                        style={{ height: 130, width: 130 }}
                      />
                    </Paper>
                    <Paper elevation={0}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold", color: "#5BD1D7" }}
                      >
                        {val.drname}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#878484" }}
                      >
                        {val.type}
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                        >
                          {val.experience} year experience overall
                        </Typography>
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        <i className="fas fa-map-marker-alt fa-sm"></i>{" "}
                        {val.address}
                        &nbsp;&nbsp;<i className="fas fa-circle fa-xs"></i>
                        &nbsp;
                        {val.clinicname}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#878484" }}
                      >
                        {val.fees} Consultation Fee at Clinic
                      </Typography>
                      <div
                        style={{
                          border: "none",
                          borderTop: "2px dashed #878484",
                          color: "#fff",
                          backgroundColor: "#fff",
                          height: "1px",
                          width: "100%",
                        }}
                      >
                        {}
                      </div>
                      {<br />}
                      <Button
                        variant="contained"
                        color="success"
                        style={{ fontWeight: "bold" }}
                      >
                        <i className="fas fa-thumbs-up"></i> &nbsp;{val.likes} %
                      </Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href=""
                        style={{ color: "#413E3E", fontWeight: "bold" }}
                      >
                        {val.story}
                      </a>
                    </Paper>
                    <Paper
                      elevation={0}
                      style={{
                        alignItems: "end",
                        height: "100px",
                        marginLeft: "10%",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#5cb85c", fontWeight: "bold" }}
                      >
                        <i className="fas fa-calendar-check"></i>&nbsp;
                        {val.availablestatus}
                      </Typography>

                      <CustomButton
                        onClick={() => {
                          buttonhandler(key, val);
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          {val.appointment}
                          <Typography
                            variant="body2"
                            gutterBottom
                            component="div"
                          >
                            {val.appointmentfee} Booking fees
                          </Typography>
                        </Typography>
                      </CustomButton><br/>
                      {showcancel === val.id && (
              <Container maxWidth="sm" style={{ justifyContent: "center" }}><Button
                variant="contained"
                onClick={handleClose}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Cancel
              </Button></Container>
              
            )}
                   
                    </Paper>
                  </Box>
                
                  {show === val.id && (
                    <Bookappointment
                      showdrid={show}
                      showclinicname={clinicnameshow}
                      showdrimage={doctorimageshow}
                      showtype={typeshow}
                      showdrname={drnameshow}
                      showappfee={appointmentfeeshow}
                    />
                  )}
              {/* <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={userList}
        columns={columns}
      
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div> */}
   
                 
                </Container>
                <hr size="1" width="90%" color="#878484" />
                <div
                  style={{
                    border: "none",
                    borderTop: "0px  #878484",
                    color: "#fff",
                    backgroundColor: "#fff",
                    height: "1px",
                    width: "100%",
                  }}
                >
                  {}
                </div>
                {<br />}

             
                {showbutton === true && (
                  <Button
                    variant="contained"
                    onClick={handleproceed}
                    style={{ color: "#fff", marginBottom: "20px" }}
                  >
                    Proceed
                  </Button>
                )}
 
                {/* <Paper
                  elevation={0}
                  style={{ alignItems: "end",height:'100px' ,marginLeft:'10%'}}
                >
                 
                  <Typography variant="subtitle1" gutterBottom component="div"  style={{color:'#5cb85c',fontWeight:'bold'}}>
                  <i class="fas fa-calendar-check"></i>&nbsp;{val.availablestatus}
                  </Typography>
                  <CustomButton onClick={this.redirectHandler}>
                    <Typography variant="subtitle1" gutterBottom component="div" style={{ textDecoration:'none',color:'#fff'}}>
                     {val.appointment}
                      <Typography variant="body2" gutterBottom component="div">
                       {val.appointmentfee}
                      </Typography>
                    </Typography>
                  </CustomButton>
                  {this.renderRedirect()}
                </Paper>
              </Box>
              <hr size="1" width="90%" color="#878484" />  
              <div style={{border:'none',borderTop:'0px  #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
              {}
              </div>
              {<br/>}
          
            
            
             <Paper elevation={0}>
             <Avatar alt="Remy Sharp" src={src} style={{ height: 130, width: 130 }}/>
             </Paper>
             <Paper elevation={0}>
             <Avatar alt="Remy Sharp" src={src} style={{ height: 130, width: 130 }}/>
             </Paper> */}
              </div>
            );
          })}
        </>
    )
  }
  return (
    <>
      <div style={{ backgroundColor: "#4863A0" }}>
        <Container maxWidth="lg" style={{ backgroundColor: "#4863A0" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 150,
                height: 52,
                backgroundColor: "#728FCE",
              },
            }}
          >
            <Paper
              elevation={0}
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: "#fff" }}
                    value="video consult"
                    checked={videoconsult}
                    onChange={handleChangevideo}
                  />
                }
                label="Video Consult"
              />
            </Paper>
            <Paper elevation={0}>
              <Link
                variant="text"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8%",
                }}
                to="/schedule"
              >
                {" "}
                Availability &nbsp; <i className="fas fa-chevron-down"></i>
              </Link>
            </Paper>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4863A0",
              }}
            >
              <Button
                variant="text"
                style={{ color: "#fff" }}
                onClick={() => {
                  setActive(!active);
                }}
              >
                All Filters &nbsp;
                <i
                  className={
                    active === true
                      ? "fas fa-chevron-up"
                      : "fas fa-chevron-down"
                  }
                ></i>
              </Button>
            </Paper>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4863A0",
              }}
            >
              <Button
                variant="text"
                style={{ color: "#5BD1D7" }}
                onClick={resetRadioState}
              >
                Reset Filters
              </Button>
            </Paper>
            <Paper
              elevation={0}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4863A0",
                width: 70,
              }}
            >
              <FormLabel
                component="legend"
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Sort By
              </FormLabel>
            </Paper>
            <Paper>
              <select
                id="lang"
                style={{
                  boxShadow: "none",
                  border: "none",
                  height: "52px",
                  width: "150",
                }}
                onChange={change}
                value={sort}
              >
                <option style={{ paddingBottom: "2px" }} value="select">
                  Select
                </option>
                <option style={{ paddingBottom: "2px" }} value="priceHighToLow">
                  Fees - High To Low
                </option>
                <option style={{ paddingBottom: "2px" }} value="priceLowToHigh">
                  Fees - Low To High
                </option>
                <option
                  style={{ paddingBottom: "2px" }}
                  value="yearsofExperience"
                >
                  Years of Experience
                </option>
                <option style={{ paddingBottom: "2px" }} value="recommendation">
                  Recommendation
                </option>
              </select>
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 500,
                height: "auto",
                color: "#fff",
                backgroundColor: "#728FCE",
              },
            }}
          >
            {active && showfilter}
          </Box>
        </Container>
        {<br />}
      </div>

      <div>
        {/* <input type ="text" value={searchterm} style={{marginTop:'50px',marginBottom:'30px'}} placeholder="select" onChange={(e)=>{setSearchterm(e.target.value);}}></input>
    <input type="text " placeholder="select" value={searchtermfee} onChange={(event)=>{setSearchtermfee(event.target.value);}} />
    <input type="text " placeholder="select" value={searchtermexp} onChange={(event)=>{setSearchtermexp(event.target.value);}} />*/}
        <input
          type="text "
          placeholder="select"
          value={searchtermvideo}
          onChange={(event) => {
            setSearchtermvideo(event.target.value);
          }}
        />
         {/*  {userList
          .filter((val) => {
            if (searchterm === "") {
              if (searchtermfee === "") {
                if (searchtermvideo === true) {
                  if (val.videoconsult === "true") {
                    return val;
                  }
                } else if (searchtermvideo === false) {
                  return val;
                }
              } else if (searchtermvideo === true && searchtermfee === "free") {
                if (val.videoconsult === "true" && val.fees === "0") {
                  return val;
                }
              } else if (
                searchtermvideo === true &&
                searchtermfee === "1-200"
              ) {
                for (let i = 1; i <= 200; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (
                searchtermvideo === true &&
                searchtermfee === "201-500"
              ) {
                for (let i = 201; i <= 500; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (searchtermvideo === true && searchtermfee === "501+") {
                for (let i = 501; i <= 10000; i++) {
                  if (
                    val.videoconsult === "true" &&
                    val.fees === i.toString()
                  ) {
                    return val;
                  }
                }
              } else if (searchtermfee === "free") {
                if (val.fees === "0") {
                  return val;
                }
              } else if (searchtermfee === "1-200") {
                for (let i = 1; i <= 200; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              } else if (searchtermfee === "201-500") {
                for (let i = 201; i <= 500; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              } else if (searchtermfee === "501+") {
                for (let i = 501; i <= 10000; i++) {
                  if (val.fees === i.toString()) {
                    return val;
                  }
                }
              }
              // if (searchtermfee === "1-200") {
              //   for (let i = 1; i <= 200; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
              // if (searchtermfee === "201-500") {
              //   for (let i = 201; i <= 500; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
              // if (searchtermfee === "501+") {
              //   for (let i = 501; i <= 10000; i++) {
              //     if (val.fees === i.toString()) {
              //       return val;
              //     }
              //   }
              // }
            } else if (searchterm === "male" && searchtermvideo === true) {
              if (val.gender === "male" && val.videoconsult === "true") {
                return val;
              }
            } else if (
              searchterm === "male" &&
              searchtermvideo === true &&
              searchtermfee === "free"
            ) {
              console.log("hell");
            } else if (searchterm === "female" && searchtermvideo === true) {
              if (val.gender === "female" && val.videoconsult === "true") {
                return val;
              }
            } else if (searchterm === "male" && searchtermfee === "free") {
              if (val.gender === "male" && val.fees === "0") {
                return val;
              }
            } else if (searchterm === "male" && searchtermfee === "1-200") {
              for (let i = 1; i <= 200; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "male" && searchtermfee === "201-500") {
              for (let i = 201; i <= 500; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "male" && searchtermfee === "501+") {
              for (let i = 501; i <= 10000; i++) {
                if (val.gender === "male" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "free") {
              if (val.gender === "female" && val.fees === "0") {
                return val;
              }
            } else if (searchterm === "female" && searchtermfee === "1-200") {
              for (let i = 1; i <= 200; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "201-500") {
              for (let i = 201; i <= 500; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (searchterm === "female" && searchtermfee === "501+") {
              for (let i = 501; i <= 10000; i++) {
                if (val.gender === "female" && val.fees === i.toString()) {
                  return val;
                }
              }
            } else if (val.gender === searchterm) {
              return val;
            } else if (
              val.drname.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return val;
            } else if (
              val.type.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return val;
            }
          })
          .sort((a, b) => {
            if (searchtermexp === "yearsofExperience") {
              return a.experience - b.experience;
            } else if (searchtermexp === "priceLowToHigh") {
              return a.fees - b.fees;
            } else if (searchtermexp === "priceHighToLow") {
              return b.fees - a.fees;
            } else if (searchtermexp === "recommendation") {
              return b.likes - a.likes;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <Container maxWidth="lg">
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: "auto",
                        height: "auto",
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      <Avatar
                        alt="DoctorImage"
                        src={val.src}
                        style={{ height: 130, width: 130 }}
                      />
                    </Paper>
                    <Paper elevation={0}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold", color: "#5BD1D7" }}
                      >
                        {val.drname}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#878484" }}
                      >
                        {val.type}
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                        >
                          {val.experience} year experience overall
                        </Typography>
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        <i className="fas fa-map-marker-alt fa-sm"></i>{" "}
                        {val.address}
                        &nbsp;&nbsp;<i className="fas fa-circle fa-xs"></i>
                        &nbsp;
                        {val.clinicname}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#878484" }}
                      >
                        {val.fees} Consultation Fee at Clinic
                      </Typography>
                      <div
                        style={{
                          border: "none",
                          borderTop: "2px dashed #878484",
                          color: "#fff",
                          backgroundColor: "#fff",
                          height: "1px",
                          width: "100%",
                        }}
                      >
                        {}
                      </div>
                      {<br />}
                      <Button
                        variant="contained"
                        color="success"
                        style={{ fontWeight: "bold" }}
                      >
                        <i className="fas fa-thumbs-up"></i> &nbsp;{val.likes} %
                      </Button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href=""
                        style={{ color: "#413E3E", fontWeight: "bold" }}
                      >
                        {val.story}
                      </a>
                    </Paper>
                    <Paper
                      elevation={0}
                      style={{
                        alignItems: "end",
                        height: "100px",
                        marginLeft: "10%",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{ color: "#5cb85c", fontWeight: "bold" }}
                      >
                        <i className="fas fa-calendar-check"></i>&nbsp;
                        {val.availablestatus}
                      </Typography>

                      <CustomButton
                        onClick={() => {
                          buttonhandler(key, val);
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          {val.appointment}
                          <Typography
                            variant="body2"
                            gutterBottom
                            component="div"
                          >
                            {val.appointmentfee} Booking fees
                          </Typography>
                        </Typography>
                      </CustomButton><br/>
                      {showcancel === val.id && (
              <Container maxWidth="sm" style={{ justifyContent: "center" }}><Button
                variant="contained"
                onClick={handleClose}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Cancel
              </Button></Container>
              
            )}
                   
                    </Paper>
                  </Box>
                
                  {show === val.id && (
                    <Bookappointment
                      showdrid={show}
                      showclinicname={clinicnameshow}
                      showdrimage={doctorimageshow}
                      showtype={typeshow}
                      showappfee={appointmentfeeshow}
                    />
                  )}
         
                 
                </Container>
                <hr size="1" width="90%" color="#878484" />
                <div
                  style={{
                    border: "none",
                    borderTop: "0px  #878484",
                    color: "#fff",
                    backgroundColor: "#fff",
                    height: "1px",
                    width: "100%",
                  }}
                >
                  {}
                </div>
                {<br />}

             
                {showbutton === true && (
                  <Button
                    variant="contained"
                    onClick={handleproceed}
                    style={{ color: "#fff", marginBottom: "20px" }}
                  >
                    Proceed
                  </Button>
                )}
 
              
              </div>
            );
          })}
         <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul> */}
     {renderData(currentItems)}
     <button
            onClick={handlePrevbtn}
            // disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
      <ul className="pageNumbers">
        
         {pageDecrementBtn}
         {renderPageNumbers}
         {pageIncrementBtn}
        
      </ul>
      <button
              onClick={handleNextbtn}
            // disabled={currentPage == pages[0] ? true : false}
          >
            Next
          </button>
      </div>
    </>
  );
}

export default Sorting;
