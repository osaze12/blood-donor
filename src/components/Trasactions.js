import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Input, Select} from 'antd';
import './Transactions.css';
const { Option } = Select;

function Transaction() {
    return (
        <Box>
            <Heading className='trans_title' size='md'>Select currency:</Heading>
            <Box padding='5'>

            
                <Input.Group compact>
                    <Select defaultValue="Option1">
                        <Option value="Option1">AFVA</Option>
                        <Option value="Option2">ZAR</Option>
                    </Select>
                    <Input style={{ width: '50%' }} placeholder='0.000000001' />
                </Input.Group>

                <HStack spacing='10' margin='15px 0'>
                    <Button background='#05a8f5' color='#fff ' _hover={{bg: '#05a8f5'}}>Send</Button>
                    <Button background='#05a8f5' color='#fff' _hover={{bg: '#05a8f5'}}>Receive</Button>
                </HStack>
            </Box>
        </Box>
    )
}

export default Transaction
