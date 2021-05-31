import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import React, { useState } from 'react'
import {Redirect } from 'react-router-dom'
import './Login.css'

function Login() {
    const [login, setLogin] = useState(
        {
            username: null,
            password: null,
    });
    const [redirect, setRedirect] = useState(false)
    const toast = useToast();

    let {username, password} = login;

    const handleLogin = () => {
        if (username === null || password === null){
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

        const getDatabase = JSON.parse(localStorage.getItem('patient')) || null;
        if (getDatabase){
            const isCorrect = getDatabase.find(data => {
                return data.username === username && data.password === password
            });
            
            if(!isCorrect){
                toast({
                    // title: "Account created.",
                    description: "username/password is incorrect",
                    position: "top",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
            if (isCorrect){
                toast({
                    // title: "Account created.",
                    description: "Successfully Logged in",
                    position: "top",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                localStorage.setItem("singleUser", JSON.stringify(isCorrect));
                setRedirect(true)
            }
        }

        

          
    }
    return (
        <>
            {redirect ? 
                <Redirect to="/profile" />
            :
                <div className="login">
                    <Heading>Donor Login</Heading>
                    <br/>
                <VStack spacing='5'>
                        <Input value={username} 
                                onChange={(e) => setLogin({...login, username: e.target.value})}  
                                placeholder="User name" />

                        <Input type="password"
                            value={password} 
                            onChange={(e) => setLogin({...login, password: e.target.value})}  
                            placeholder="Password" />

                        <Button 
                            _hover={{bg: 'red.400'}} 
                            background="red.300" 
                            onClick={handleLogin}>Login</Button>
                    </VStack>

                </div>
            }
        </>
    )
}

export default Login
