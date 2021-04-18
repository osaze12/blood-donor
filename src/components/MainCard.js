import { SimpleGrid } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import './MainCard.css';
function MainCard() {
    return (
        <Box>
            <SimpleGrid  minChildWidth="120px" spacing="1px">
                <Box borderRadius='xl' background='#e2267b' height='120px' className='card'>
                    <VStack flexWrap='wrap'>
                        <Box className='currency_box' color='#d96f75'>AFYA</Box>
                    
                    
                        <VStack spacing='1'>
                            <p className='amount'>130.00</p>
                            <p className='title'>Balance</p>
                        </VStack>
                    </VStack>
                </Box>

                <Box borderRadius='xl' background='#e2267b' height='120px' className='card'>
                    <VStack flexWrap='wrap'>
                        <Box className='currency_box' color='#5ec0e9'>ZAR</Box>
                        <VStack spacing='1'>
                            <p className='amount'>R21.00</p>
                            <p className='title'>Equivalent</p>
                        </VStack>
                    </VStack>
                </Box>

            </SimpleGrid>
        </Box>
    )
}

export default MainCard
