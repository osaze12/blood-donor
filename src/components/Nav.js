import { BellFilled, BellOutlined, UserOutlined } from '@ant-design/icons'
import { Flex } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import './Nav.css'
import logo from '../components/assets/logo.PNG'
function Nav() {
    return (
        <Box className='nav'>
            <Box className='nav_inner'>
            
                <Flex justifyContent='space-between'>
                    <img width= '150px'  src={logo} alt='ribbon' />

                    <HStack spacing='4'>
                        <Box padding='0.5' className='user_circle' borderRadius='full' bg='#fa5267'>
                            <UserOutlined style={{color: '#fff'}}/>
                        </Box>
                        
                        <BellFilled style={{color: '#fa5267'}}/>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default Nav
