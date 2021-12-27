import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../Navbar.css";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:160,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <a  className= "upnavitemsupport1 " onClick={handleOpen}>
            <i class="fas fa-headset"></i> Support
          </a>
          &nbsp;&nbsp;
          <a href="/Support" className="upnavitememail1" >
            <i class="fas fa-envelope"></i> info@ehealthflex.com
          </a>
          <a href="/Support" className="upnavitemsignin">
            <i class="fas fa-user-circle"></i> Sign in
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/Support" className="upnavitemregister">
            <i class="fas fa-user-plus"></i> Register
          </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           WE ARE HAPPY TO SERVE YOU!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Our customer care number is +91 9175040052
          </Typography>
          {<br/>}
          <a  style={{ textDecoration:'none',fontSize:"20px",cursor:"pointer",marginLeft:"46%",color:"#004d61"}} onClick={handleClose}>
              Close
         </a>
        </Box>
      </Modal>
    </div>
  );
}