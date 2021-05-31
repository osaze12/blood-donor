import { Heading, Text } from '@chakra-ui/layout';
import React from 'react'
import { Redirect } from 'react-router';
import './DonorProfile.css'

function DonorProfile() {
    const getUser = JSON.parse(localStorage.getItem("singleUser")) || null;
    
    return (
        <>
            {getUser ?
                <div className="box" style={{background: "#fff"}}>
                    <div className="box-inner profile">
                        <Heading>Hello, {getUser.fullname}</Heading>
                        <Text>Blood Group: <b>{getUser.bloodGroup}</b></Text>
                        <Text>Current city: <b>{getUser.city}</b></Text>
                        <Text>Email: <b>{getUser.email}</b></Text>
                        <Text>Gender: <b>{getUser.gender}</b></Text>
                        <Text>Phone: <b>{getUser.tel}</b></Text>
                        <Text>Message: <b>{getUser.msg}</b></Text>
                        <Text>Last Donate Date: <b>{getUser.lastDonateDate}</b></Text>
                    </div>
                </div>
            :
                <Redirect to="/" />
            }
        </>
    )
}

export default DonorProfile
