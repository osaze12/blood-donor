import { Box } from '@chakra-ui/layout'
import React from 'react'
import Activities from './Activities'
import MainCard from './MainCard'
import Transaction from './Trasactions'
import './MainPage.css'

function MainPage() {
    return (
        <Box>
            <MainCard />
            <Transaction />
            <Activities />
        </Box>
    )
}

export default MainPage
