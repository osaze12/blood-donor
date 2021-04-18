import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import NavIcon from './NavIcon'
import { HomeOutlined, ProfileOutlined, WalletOutlined, ShopOutlined, GiftOutlined} from '@ant-design/icons';
function MobileBottomNav() {
    return (
        <Box padding='1'>
             <HStack spacing='7'>

           
                <NavIcon icon={<HomeOutlined/>} name='Home' link='/home'/>
                <NavIcon icon={<ProfileOutlined/>} link='/activity' name='Activity'/>
                <NavIcon icon={<WalletOutlined/>} link='/wallet' name='Wallet'/>
                <NavIcon icon={<ShopOutlined/>} link='/market' name='Market'/>
                <NavIcon icon={<GiftOutlined/>} link='/earn' name='Earn'/>
             </HStack> 
             
        </Box>
    )
}

export default MobileBottomNav
