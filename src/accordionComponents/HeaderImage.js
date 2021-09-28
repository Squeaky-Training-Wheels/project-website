import React from 'react';
import { Image, VStack, Box, Center } from '@chakra-ui/react';

class HeaderImage extends React.Component {
    render() {
        const { imageName } = this.props;
        return (
            <Center p="5">
                <VStack> 
                    <Box width="100%">
                        <Image height="600" src={process.env.PUBLIC_URL + `/images/${imageName}.png`} alt={imageName} />
                    </Box>   
                </VStack> 
            </Center>
        );
    }
}

export default HeaderImage;