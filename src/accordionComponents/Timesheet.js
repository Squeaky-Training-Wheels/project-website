import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';

class Timesheet extends React.Component {
    render() {
        const { sheetName, caption } = this.props;
        return (
            <Center p="5">
                <VStack> 
                    <Box width="100%">
                        <Image height="600" src={process.env.PUBLIC_URL + `/images/${sheetName}.png`} alt={sheetName} />
                    </Box>   
                    <Box p="5"> 
                        <span style={{ textAlign: 'center' }}>{caption}</span>
                    </Box>  
                </VStack> 
            </Center>
        );
    }
}

export default Timesheet;