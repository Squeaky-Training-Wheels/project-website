import React from 'react';
import {
    Heading,
    Avatar,
    Flex,
    Text,
    // Stack,
    IconButton,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Card(props) {
    const { name, roles, picture } = props;

    function displayCardIcons() {
        if (roles[0] !== 'Faculty Coach' && roles[0] !== 'Sponsor') {
            return (
                <Flex marginTop="auto" marginBottom={2} justify="center">
                    <IconButton
                        size="sm"
                        variant="ghost"
                        p="0"
                        fontSize="24px"
                        color="brand.200"
                        icon={<AiFillGithub />}
                    />
                    <IconButton
                        size="sm"
                        variant="ghost"
                        p="0"
                        fontSize="24px"
                        color="brand.200"
                        icon={<AiFillLinkedin />}
                    />
                </Flex>
            );
        }
        return <div />; // else return nothing
    }

    return (
        <Flex
            minW="230px"
            maxW="230px"
            w="full"
            minH="255px"
            maxH="255px"
            h="full"
            bg="brand.600"
            rounded="md"
            overflow="hidden"
            direction="column"
            alignItems="center"
        >
            <Avatar
                m={3}
                size="xl"
                src={`${process.env.PUBLIC_URL}/images/${picture}`}
                alt="Author"
            />
            <Heading
                justify="center"
                fontSize="2xl"
                fontWeight="semibold"
                fontFamily="body"
                color="brand.200"
                textColor="brand.300"
                mb={1}
            >
                {name}
            </Heading>
            {
                roles.map((role) => (
                    <Text lineHeight={1.2} fontSize="15px" key={`role-${role}`} color="brand.200">{role}</Text>
                ))
            }
            { displayCardIcons() }
        </Flex>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    picture: PropTypes.string.isRequired,
};
