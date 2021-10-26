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
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Card(props) {
    const { name, roles, picture } = props;
    return (
        <Center py={6}>
            <Box
                minW="200px"
                maxW="200px"
                w="full"
                minH="250px"
                maxH="250px"
                h="full"
                bg="brand.600"
                boxShadow="2xl"
                rounded="md"
                overflow="hidden"
            >
                <Box px={6}>
                    <Flex justify="center" mt={3} pb={3}>
                        <Avatar
                            size="xl"
                            src={`${process.env.PUBLIC_URL}/images/${picture}`}
                            alt="Author"
                        />
                    </Flex>
                    <Stack spacing={0} align="center" mb={5}>
                        <Heading fontSize="2xl" fontWeight="semibold" fontFamily="body" color="brand.200">
                            {name}
                        </Heading>
                        {
                            roles.map((role) => (
                                <Text key={`role-${role}`} color="brand.200">{role}</Text>
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
