import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> time-tracking-10/4

class Timesheet extends React.Component {
    render() {
        const { sheetName, caption } = this.props;
        return (
            <Center p="5">
                <VStack>
                    <Box width="100%">
                        <Image height="600" src={process.env.PUBLIC_URL + `/images/${sheetName}.png`} alt={sheetName} />
<<<<<<< HEAD
                    </Box>
                    <Box p="5">
=======
                    </Box>   
                    <Box p="5"> 
>>>>>>> time-tracking-10/4
                        <span style={{ textAlign: 'center' }}>{caption}</span>
                    </Box>
                </VStack>
            </Center>
        );
    }
}

Timesheet.propTypes = {
    sheetName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Timesheet;
