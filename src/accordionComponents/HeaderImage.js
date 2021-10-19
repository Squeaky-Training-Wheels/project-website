import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';

class HeaderImage extends React.Component {
    render() {
        const { imageName } = this.props;
        return (
            <Center>
                <VStack>
                    <Box width="100%" height="100%">
                        <Image
                            width="100%"
                            backgroundColor="#aaa"
                            src={`${process.env.PUBLIC_URL}/images/${imageName}.png`}
                            alt={imageName}
                        />
                    </Box>
                </VStack>
            </Center>
        );
    }
}

HeaderImage.propTypes = {
    imageName: PropTypes.string.isRequired,
};

export default HeaderImage;
