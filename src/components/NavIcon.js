import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'
import './NavIcon.css'

 import{ NavLink} from "react-router-dom";

function NavIcon({icon, name, horizontal, vertical, tooltip, link}) {
    return (
        <Box className='nav_icon'>
            {horizontal ?
                <HStack spacing='2'>
                    {tooltip ? 
                        <Tooltip label={tooltip} fontSize="xs">
                            <NavLink to={`${link}`} activeClassName="active">{icon}</NavLink>
                        </Tooltip>
                    :
                        <>
                            <NavLink to={`${link}`} activeClassName="active">
                                <HStack spacing='2'>
                                    <span>{icon}</span>
                                    <span>{name}</span>
                                </HStack>
                                
                            </NavLink>
                        </>
                    }
                    

                </HStack>
            :
                <Box>
                    {tooltip ? 
                        <Tooltip label={tooltip} fontSize="xs">
                            <NavLink to={`${link}`} activeClassName="active">{icon}</NavLink>
                        </Tooltip>
                    :
                        <>
                            <NavLink to={`${link}`} activeClassName="active">
                                <VStack spacing='2'>
                                    <span>{icon}</span>
                                    <span>{name}</span>
                                </VStack>
                                
                            </NavLink>
                            
                        </>
                    }
                </Box>
            }

        </Box>
    )
}

export default NavIcon
