import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, HStack, VStack } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { useToast } from '@chakra-ui/toast'
import React, { useState } from 'react'
import { Redirect } from 'react-router'

function RequestBlood() {
    const toast = useToast();
    const [redirect, setRedirect] = useState(false);
    const [request, setRequest] = useState({
        patientName: null, diseaseType: null,
        doctorName: null,
        dateRequired: null, bloodGroup: null, 
        quantityRequired: null, tel: null, 
        currentTown: null,
        hospitalAddress: null,
    });


    let {patientName, diseaseType, doctorName,
         dateRequired, bloodGroup, 
         quantityRequired, tel, 
         currentTown,
         hospitalAddress} = request;


    const handleSubmit = () => {
        if (patientName === null || diseaseType === null 
            || doctorName === null || dateRequired === null
            || bloodGroup === null || quantityRequired === null ||
            tel === null || currentTown === null
            || hospitalAddress === null){

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
            description: "Request Successful.",
            position: "top",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        let store = [];
        const oldData = JSON.parse(localStorage.getItem("emergency")) || null;
        if (oldData){
            store.push(...oldData);
            store.push(request);
            localStorage.setItem("emergency", JSON.stringify(store));
        }

        setRedirect(true) 
    }

    return (
        <>
        {redirect ? 
            <Redirect to="/" />
        :
            <div className="request-blood" style={{padding: '15px',background: '#fff', margin:' 20px', borderRadius:'10px'}}>
                <Heading>Request Blood</Heading>
                <HStack spacing="5" alignItems="flex-start" flexWrap='wrap' justifyContent="center" padding="10px 0">
                    <div class="description">
                        <br/>
                        <h3>Description</h3>
                        <br/>
                        <VStack>
                            <Input value={patientName} 
                                    onChange={(e) => setRequest({...request, patientName: e.target.value})}
                                    placeholder="Patient's name" />

                            <Input value={diseaseType} 
                                    onChange={(e) => setRequest({...request, diseaseType: e.target.value})}
                                    placeholder="Type of Disease" />

                            <Input value={doctorName} 
                                    onChange={(e) => setRequest({...request, doctorName: e.target.value})}
                                    placeholder="Doctors name" />

                            <Input value={dateRequired} 
                                    onChange={(e) => setRequest({...request, dateRequired: e.target.value})}
                                    placeholder=" DD-MM-YY When Required" />

                            <Select placeholder="Blood Group" value={bloodGroup} 
                                    onChange={(e) => setRequest({...request, bloodGroup: e.target.value})}>

                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                            </Select>

                            <Input value={quantityRequired} 
                                    onChange={(e) => setRequest({...request, quantityRequired: e.target.value})}
                                    placeholder="Quantity required (pints)" />
                        </VStack>
                    
                    </div>

                    <div class="contact-info">
                        <br/>
                        <h3>Contact information</h3>
                        <br/>
                        <VStack>
                        <Input type="tel" 
                            value={tel} 
                            onChange={(e) => setRequest({...request, tel: e.target.value})}
                            placeholder="Enter Mobile number" />

                        <Input value={currentTown} 
                                onChange={(e) => setRequest({...request, currentTown: e.target.value})}
                                placeholder="Enter current Town" />

                        <Input value={hospitalAddress} 
                                onChange={(e) => setRequest({...request, hospitalAddress: e.target.value})}
                                placeholder="Enter Hospital Address" />

                        <Button background="red.300" onClick={handleSubmit}>Submit Request</Button>
                        </VStack>
                    </div>
                </HStack>
            </div>
        }
        </>
    )
}

export default RequestBlood
