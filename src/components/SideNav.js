import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import NavIcon from './NavIcon'

import { Menu } from 'antd';
import { HomeOutlined, ProfileOutlined, WalletOutlined, ShopOutlined, GiftOutlined} from '@ant-design/icons';
// const { SubMenu } = Menu;

function SideNav() {
    return (
        <Box padding='7'>
       
            <VStack spacing='16'>

            
                <NavIcon icon={<HomeOutlined/>} tooltip='Home' link='/home' horizontal={true}/>
                <NavIcon icon={<ProfileOutlined/>} tooltip='Activity' link='/activity' horizontal={true}/>
        
                <NavIcon icon={<WalletOutlined/>} tooltip='Wallet' link='/wallet' horizontal={true}/>
                <NavIcon icon={<ShopOutlined/>} tooltip='Market' link='/market'  horizontal={true}/>
                <NavIcon icon={<GiftOutlined/>} tooltip='Earn' link='/earn'  horizontal={true}/>
            </VStack>
        </Box>
    )
}

export default SideNav
