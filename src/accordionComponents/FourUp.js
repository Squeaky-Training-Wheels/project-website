import React from 'react';
import { Box, Center, Image, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

class FourUp extends React.Component {
    render() {
        const { fourUpName, caption } = this.props;
        return (
            <Center p="5">
                <VStack>
                    <Box width="100%">
                        <Image
                            height="400"
                            src={`${process.env.PUBLIC_URL}/images/${fourUpName}.png`}
                            alt={fourUpName}
                        />
                    </Box>
                    <Box p="5">
                        <span style={{ textAlign: 'center', color: '#ed8936' }}>{caption}</span>
                    </Box>
                </VStack>
            </Center>
        );
    }
}

FourUp.propTypes = {
    fourUpName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};

export default FourUp;
