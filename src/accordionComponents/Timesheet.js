import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';
// import test from '../../public/images'

class Timesheet extends React.Component {
    render() {
        const { sheetName, caption } = this.props;
        return (
            <Center p="5">
                <VStack> 
                    <Box width="100%">
                        <Image height="600" src={require(`../../public/images/${sheetName}.png`)} alt={sheetName} />
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