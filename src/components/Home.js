import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const emergencyData = JSON.parse(localStorage.getItem("emergency")) || null;
      const getAllEmergency = emergencyData ? emergencyData.map(data => {
          return <div >
                    <p style={{color: 'red', fontWeight: "bold"}}>-----Emergency---</p>
                    <Heading as='h5'>Blood Request</Heading>
                    <p>Blood Group: <b>{data.bloodGroup}</b></p>
                    <p>Needed by: <b>{data.patientName}</b></p>
                    <p>Hospital: <b>{data.hospitalAddress}</b></p>
                    <p>When Required: <b>{data.dateRequired}</b></p>
                    <p>Required City: <b>{data.currentTown}</b></p>
                    <p>Contact: <b>{data.tel}</b></p>
                </div>
      }) : null;
    return (
        <div className="home" style={{alignItems: 'center',display: 'flex',
            flexDirection: 'column',
            padding: '15px',background: '#fff', 
            margin:' 20px', borderRadius:'10px'}}>

            <div className="slider" >
            <Carousel 
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true} 
            responsive={responsive}
             
            autoPlaySpeed={3000}>
            
                {getAllEmergency}
            </Carousel>
            
                
            </div>


            <div class="about-us" style={{maxWidth: '280px', background: '#f0f0f0', borderRadius: '9px', padding: '10px', margin: "20px 0"}}>
                <h1><b>About</b></h1>
                <p>
                    These is born out of a desire to use the power of the internet to 
                help common people easily find compactible blood donors, 
                and hence save lives
                </p>
            </div>


            <div className="buttons" style={{height: '50px', position: "relative"}}>
                <div className="buttons-inner" style={{position: 'absolute', bottom: '20px', top: '5px', left: '0', right: '0', display: 'flex', justifyContent: 'center', padding: '5px 0'}}>
                    <NavLink style={{margin:'0 5px'}} activeClassName="active" className="nav-link" to="/search">
                        <Button color='white' padding='5px' background="red.300" fontSize='sm' _hover={{bg: 'red.400'}}>Search Blood</Button>
                    </NavLink>

                    <NavLink style={{margin:'0 5px'}} activeClassName="active" className="nav-link" to="/request_blood">
                        <Button color='white' margin="0px 4px" padding='5px' background="red.300" fontSize='sm' _hover={{bg: 'red.400'}}>Request Blood</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home
