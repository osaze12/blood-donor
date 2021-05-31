import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, HStack, VStack } from '@chakra-ui/layout'
import { Select, Textarea, useToast } from "@chakra-ui/react"
import React, { useState } from 'react'
import {Redirect } from 'react-router-dom'


function Register() {
    const [registration, setRegistration] = useState(
            {
                username: null,
                fullname: null,
                password: null,
                gender: null,
                weight: null,
                bloodGroup: null,
                lastDonateDate: null,
                city: null,
                tel: null,
                email: null,
                msg: null,
            });
    const [redirect, setRedirect] = useState(false)
    const toast = useToast();


    let {username, fullname,
        password, gender,
        weight, bloodGroup,
        lastDonateDate, city,
        tel, email, msg} = registration;


    const handleSignup = () => {
        if (username === null || fullname === null || password === null
            || gender === null || weight === null || bloodGroup === null
            || lastDonateDate === null || city === null || tel === null
            || email === null || msg === null){

                toast({
                    // title: "Account created.",
                    description: "Some field(s) are not filled correctly",
                    position: "top",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
                return
        }

        toast({
            // title: "Account created.",
            description: "Registration Successful.",
            position: "top",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        
        let store = [];
        const oldData = JSON.parse(localStorage.getItem("patient"));
        store.push(...oldData);
        store.push(registration);
        localStorage.setItem("patient", JSON.stringify(store) );
        
        setRedirect(true) 
    }
    
    return (
        <>
        {redirect ? 
            <Redirect to="/login" />
        :
            <div className="register" style={{padding: '15px',background: '#fff', margin:' 20px', borderRadius:'10px'}}>
                <br/>
                <Heading>Donor Registartion</Heading>
                <HStack spacing="5" alignItems="flex-start" flexWrap='wrap' justifyContent="center" padding="10px 0">

                
                    <div className="first">
                        <br/>
                        <h3>Login Information</h3>
                        <br/>
                        <VStack>
                            <Input value={username} 
                                onChange={(e) => setRegistration({...registration, username: e.target.value})} 
                                placeholder="User name" />

                            <Input value={password} 
                                type="password" onChange={(e) => setRegistration({...registration, password: e.target.value})} 
                                placeholder="Password" />

                            <Input type="password" placeholder="Confirm password" />
                        </VStack>
                    </div>

                    <div className="second">
                        <br/>
                        <h3>Basic information</h3>
                        <br/>
                        <VStack>
                            <Input value={fullname}
                                onChange={(e) => setRegistration({...registration, fullname: e.target.value})}
                                placeholder=" Full Name" />

                            <Select placeholder="Gender" 
                                value={gender}
                                onChange={(e) => setRegistration({...registration, gender: e.target.value})}>
                            
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>

                            <Input value={weight}
                                onChange={(e) => setRegistration({...registration, weight: e.target.value})}
                                placeholder="Weight" />

                            <Select placeholder="Blood Group"
                                value={bloodGroup}
                                onChange={(e) => setRegistration({...registration, bloodGroup: e.target.value})}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                            </Select>

                            <Input value={lastDonateDate}
                                onChange={(e) => setRegistration({...registration, lastDonateDate: e.target.value})}
                                placeholder="DD-MM-YY Last Donate" />
                        </VStack>
                    </div>

                    <div className="third">
                    <br/>
                    <h3>Contact information</h3>
                    <br/>
                    <VStack>
                        <Input value={city}
                            onChange={(e) => setRegistration({...registration, city: e.target.value})}
                            placeholder="Enter City" />

                        <Input value={tel}
                            onChange={(e) => setRegistration({...registration, tel: e.target.value})}
                            type="tel" 
                            placeholder="Enter Mobile Number" />

                        <Input value={email}
                            onChange={(e) => setRegistration({...registration, email: e.target.value})}
                            placeholder="Email Id" />

                        <Textarea value={msg}
                            onChange={(e) => setRegistration({...registration, msg: e.target.value})}
                            placeholder='Enter your message'/>

                        <Button  
                            _hover={{bg: 'red.400'}} 
                            background="red.300"
                            onClick={handleSignup}  >Sign up</Button>
                    </VStack>
                </div>
                </HStack>
            </div>
        }
    </>
    )
}

export default Register
