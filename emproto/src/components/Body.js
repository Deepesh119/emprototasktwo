import React from 'react';
import "../App.css";
import { FaTimes,FaAngleRight,FaUserFriends,FaTools,FaStream,FaAirbnb,FaBell,FaBuffer,FaDelicious,FaCalendarAlt, FaClinicMedical } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const Body = () => {
  const steps = [
    'Clinic',
    'CLinic Details',
    'Services',
    'Working Hour',
  ];



  return (
  
      <> 
      <div className='Body'>
       <div className='BodyLeft'>
         <div className='BodyLeftOne'>
         <div className='BodyLeftOneMargin'><FaAirbnb/><b>EXR</b><FaBell className="BellIcon"/></div>
         <div className='BodyLeftOneMarginone'> Medical Imaging</div>
         </div>
         <div className='BodyLeftTwo'>
         <ul>
         <li><FaDelicious/>DashBoard</li>
         <li><FaCalendarAlt/>BookingCalendar</li>
         <li><FaClinicMedical/>Clinic</li>
         <li><FaStream/>Service</li>
         <li><FaTools/>Technologist</li>
         <li><FaBuffer/>MoreOptions</li>
         </ul>
         </div>
       </div>
       <div className='BodyMiddle'>
         <div className ="BodyMiddleText"><h5 className='BodyMiddleDashBoard'>Your DashBoard</h5></div>
         <div className="BodyMiddleTextTwo"><h5 className='BodyMiddleDashBoard'>Your Activity</h5></div>
         <div>
             <div className='BodyArticle'>
                 <div><FaUserFriends className='Icon'/></div>
                 <div><p  className='MarginPara'>Help to Add new User Performing Different Role such as Admin,Recptionist and Technologist</p></div>
                 <div><FaAngleRight className='Icon'/></div>
              </div>
         </div>
         <div>
             <div className='BodyArticle'>
                 <div><FaClinicMedical className='Icon'/></div>
                 <div ><p className='MarginPara'>This Help You to add Clinic by Virtue Of their Location, Services they Provide and Contact Details</p></div>
                 <div><FaAngleRight className='Icon'/></div>
              </div>
         </div>
       </div>
       <div className='BodyRight'>
         <div className='BodyRightOne'>
            <div className='Clinic'>
              <div><h4><b>Add Clinic</b></h4></div>
              <div><FaTimes className='IconName'/></div>
            </div>
            <div>
            
            
          
                <Box sx={{ width: '100%' }}>
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              
            
            
            </div>

            <div className='FormData'>
              <div><b>Contact Details</b></div>
              <div className='DropDownClick'>
                <div className="dropdown">
                   <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                    +1
                   </button>
               
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="Navbaronetwothree">
                       <a className="dropdown-item" href="#">+91</a>
                       <a className="dropdown-item" href="#">+203</a>
                       <a className="dropdown-item" href="#">+14</a> 
                       <a className="dropdown-item" href="#">+09</a>
                       <a className="dropdown-item" href="#">+56</a>
                        
                    </div>
                </div>  
                <div>
                 <input type="text" placeholder='Enter Your Number Here' />
                </div> 
              </div>
              <div><input type="text" placeholder='Enter Your FaxDetail Here' className='WidthInput'/></div>
              <div> <input type="text" placeholder='Enter Your Email Address Here' className='WidthInput'/></div>
              <div className='LocationGrid'>
                 <div><input type="text" placeholder='Lattitude Here'/></div>
                 <div><input type="text" placeholder='Longitude Here'/></div>
              </div>
              <div>  <input type="text" placeholder='Location Url ' className='WidthInput'/></div>
            </div>
            <div className='ButtonOnClick'> 
                <Stack spacing={2} direction="row" className='ButtonGroups'>
                  <Button variant="text">Cancel</Button>
                  <Button variant="contained">Add Clinic</Button>
              
                </Stack>
            </div>
         </div>
       </div>
    
    </div>
    </>  
      );
};

export default Body;
