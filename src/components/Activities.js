import { VStack } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import './Activities.css'
import hiv from './assets/hiv.PNG'
import bloodP from './assets/bloodP.PNG'
import xray from './assets/xray.PNG'

function Activities() {
    return (
        <Box>
            <Heading className='acti_title' marginBottom='5' size='md'>Recent Activity</Heading>
            <VStack spacing='5' alignItems='flex-start' padding='5'>
                <HStack spacing='5'>
                    <img src={hiv} alt='hiv'width='50px' border='1px solid #c5c5c5' borderRadius= '99px' />
                    <p>Hiv Blood Dra Test</p>
                    <p>A100</p>
                </HStack>
                <Divider />

                <HStack spacing='5'>
                    <img src={xray} alt='xray' width='50px'/>
                    <p>TB Raidology XRay</p>
                    <p>A30</p>
                </HStack>
                <Divider />

                <HStack spacing='5'>
                    <img src={bloodP} alt='blood pressure' width='50px'/>
                    <p>Blood Pressure check</p>
                    <p>A10</p>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Activities
