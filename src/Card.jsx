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

export default function Card() {
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
                <Box p={6} style={{ paddingTop: '20%' }}>
                    <Flex justify="center" mt={-12}>
                        <Avatar
                            size="xl"
                            src={`${process.env.PUBLIC_URL}/images/cj.jfif`}
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
                            CJ Schaefer
                        </Heading>
                        <Text color="gray.500">Project Manager</Text>
                        <Text color="gray.500">Scrum Master</Text>
                    </Stack>
                </Box>
            </Box>
        </Center>
    );
}
