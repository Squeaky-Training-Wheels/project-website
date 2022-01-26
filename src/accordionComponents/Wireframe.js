import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';

class Wireframe extends React.Component {
    render() {
        const { frameName, caption } = this.props;
        return (
            <Center p="5">
                <VStack>
                    <Box width="100%">
                        <Image height="600" src={`${process.env.PUBLIC_URL}/images/${frameName}.png`} alt={frameName} />
                    </Box>
                    <Box p="5">
                        <span
                            style={{ textAlign: 'center', color: '#ed8936' }}
                        >
                            {caption}
                        </span>
                    </Box>
                </VStack>
            </Center>
        );
    }
}

Wireframe.propTypes = {
    frameName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Wireframe;
