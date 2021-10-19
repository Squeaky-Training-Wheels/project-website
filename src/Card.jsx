/* eslint-disable max-len */
import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Card(props) {
    const { name, roles, picture } = props;
    return (
        <Center py={6}>
            <Box
                maxW="270px"
                w="full"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="2xl"
                rounded="md"
                // overflow="hidden"
            >
                <Box px={6}>
                    <Flex justify="center" mt={3}>
                        <Avatar
                            size="xl"
                            src={`${process.env.PUBLIC_URL}/images/${picture}`}
                            alt="Author"
                            css={
                                {
                                    border: '2px solid white',
                                }
                            }
                        />
                    </Flex>
                    <Stack spacing={0} align="center" mb={5}>
                        <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                            {name}
                        </Heading>
                        {
                            roles.map((role) => (
                                <Text color="gray.500">{role}</Text>
                            ))
                        }
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    picture: PropTypes.string.isRequired,
};
