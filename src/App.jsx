import React from 'react';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { Carousel } from 'react-responsive-carousel';
import { AiFillGithub } from 'react-icons/ai';
import { MdNightsStay } from 'react-icons/md';
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Text,
    Wrap,
    Center,
    Stack,
    Flex,
    Spacer,
    IconButton,
    LinkBox,
    LinkOverlay,
    ChakraProvider,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import theme from './theme';

import Timesheet from './accordionComponents/Timesheet';
import FourUp from './accordionComponents/FourUp';
import HeaderImage from './accordionComponents/HeaderImage';
import Card from './Card';

import timesheets from './accordionData/timesheets.json';
import fourUps from './accordionData/fourups.json';
import headerImages from './accordionData/headerImages.json';
import team from './team.json';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.switchTheme = this.switchTheme.bind(this);

        this.state = {
            colorMode: 'light',
        };
    }

    switchTheme() {
        const { colorMode } = this.state;
        if (colorMode === 'light') {
            this.setState({ colorMode: 'dark' });
        } else {
            this.setState({ colorMode: 'light' });
        }
    }

    render() {
        const { colorMode } = this.state;
        return (
            <ChakraProvider theme={theme}>
                <Box className="App" bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}>
                    <Heading align="left" pr="2" pl="2" pb="0" left="16px">
                        <Flex>
                            <Text
                                pt="2"
                                fontSize="2xl"
                                style={{ color: '#ed8936' }}
                            >
                                RIT SENIOR PROJECT
                            </Text>
                            <Text
                                pt="2"
                                fontSize="2xl"
                                style={
                                    colorMode === 'light'
                                        ? { color: '#161616' } : { color: '#A9A9A9' }
                                }
                            >
                                - PALMYRA RACING ASSOCIATION CLUB MANAGER
                            </Text>
                            <Spacer />
                            <IconButton
                                onClick={this.switchTheme}
                                mt={2}
                                p={0}
                                size="sm"
                                variant="ghost"
                                fontSize="24px"
                                color={colorMode === 'light' ? 'brand.300' : 'brand.100'}
                                icon={<MdNightsStay />}
                            />
                            <LinkBox p="0">
                                <LinkOverlay p="0" href="https://github.com/Squeaky-Training-Wheels" target="_blank">
                                    <IconButton
                                        size="sm"
                                        variant="ghost"
                                        p="0"
                                        fontSize="24px"
                                        color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
                                        icon={<AiFillGithub />}
                                    />
                                </LinkOverlay>
                            </LinkBox>
                        </Flex>
                    </Heading>
                    <Carousel
                        stopOnHover={false}
                        autoPlay
                        interval={10000}
                        transitionTime={2500}
                        showStatus={false}
                        infiniteLoop
                        showThumbs={false}
                        showArrows={false}
                        renderIndicator={false}
                        display="flex"
                    >
                        {
                            headerImages.map((headerImage) => (
                                <HeaderImage key={headerImage.imageName} imageName={headerImage.imageName} />
                            ))
                        }
                    </Carousel>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            {
                                ({ isExpanded }) => (
                                    <div>
                                        <h2>
                                            <AccordionButton
                                                bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}
                                                _hover={
                                                    colorMode === 'light'
                                                        ? { background: 'brand.600' } : { background: 'brand.200' }
                                                }
                                            >
                                                <Box
                                                    fontSize="2xl"
                                                    fontWeight="semibold"
                                                    flex="1"
                                                    textAlign="left"
                                                    color={colorMode === 'light' ? 'brand.800' : 'brand.100'}
                                                >
                                                    The Team
                                                </Box>
                                                {
                                                    isExpanded ? (
                                                        <ChevronDownIcon
                                                            fontSize="35px"
                                                            color="brand.500"
                                                        />
                                                    ) : (
                                                        <ChevronUpIcon
                                                            fontSize="35px"
                                                            color="brand.500"
                                                        />
                                                    )
                                                }
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bg={colorMode === 'light' ? 'brand.700' : 'brand.200'}
                                        >
                                            <Text
                                                fontSize="3xl"
                                                fontWeight="bold"
                                                textColor={colorMode === 'light' ? 'brand.300' : 'brand.100'}
                                            >
                                                Seniors
                                            </Text>
                                            <Stack direction="row" justify="center">
                                                {
                                                    team.map((member) => (
                                                        <Card
                                                            key={`card-${member.name}`}
                                                            name={member.name}
                                                            roles={member.roles}
                                                            picture={member.picture}
                                                        />
                                                    ))
                                                }
                                            </Stack>
                                            <Text
                                                fontSize="3xl"
                                                fontWeight="bold"
                                                textColor={colorMode === 'light' ? 'brand.300' : 'brand.100'}
                                            >
                                                Coach and Sponsor
                                            </Text>
                                            <Stack direction="row" justify="center">
                                                <Card
                                                    name="Bruce Herring"
                                                    roles={['Faculty Coach']}
                                                    picture="bruce.jpeg"
                                                />
                                                <Card
                                                    name="Alan Delimon"
                                                    roles={['Sponsor']}
                                                    picture="alan.jpeg"
                                                />
                                            </Stack>
                                        </AccordionPanel>
                                    </div>
                                )
                            }
                        </AccordionItem>
                        <AccordionItem>
                            {
                                ({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}
                                                _hover={
                                                    colorMode === 'light'
                                                        ? { background: 'brand.600' } : { background: 'brand.200' }
                                                }
                                            >
                                                <Box
                                                    fontSize="2xl"
                                                    fontWeight="semibold"
                                                    flex="1"
                                                    textAlign="left"
                                                    color={colorMode === 'light' ? 'brand.800' : 'brand.100'}
                                                >
                                                    Project Synopsis
                                                </Box>
                                                {
                                                    isExpanded ? (
                                                        <ChevronDownIcon fontSize="35px" color="brand.400" />
                                                    ) : (
                                                        <ChevronUpIcon fontSize="35px" color="brand.400" />
                                                    )
                                                }
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bg={colorMode === 'light' ? 'brand.700' : 'brand.200'}
                                        >
                                            <Text
                                                fontSize="xl"
                                                textColor={colorMode === 'light' ? 'brand.300' : 'brand.100'}
                                            >
                                                The Palmyra Racing Association Club Manager is a web and mobile
                                                application
                                                sponsored by the Palmyra Racing Association in order to facilitate the
                                                management of many facets of the club, including membership, member
                                                participation, and event tracking and signups. This project replaces an
                                                existing application which is already fairly outdated by web standards
                                                and is in need of a visual touch up. One of the primary goals of the
                                                application is ease of use and accessibility in order to get
                                                non-tech-savvy club members to use the application.
                                            </Text>
                                            <br />
                                            <Text
                                                fontSize="xl"
                                                textColor={colorMode === 'light' ? 'brand.300' : 'brand.100'}
                                            >
                                                Club members can use the application for updating their personal
                                                information, renewing their membership, and signing up to
                                                volunteer at events. Club board members can use the application
                                                to view and edit membership data for all active members as well
                                                as signup information for every event. Board members can also
                                                create new events and update existing ones, as well as assign club
                                                members to events manually. These features are currently provided via
                                                separate applications, and this application seeks to unify them into
                                                one easy to use, modernized user interface.
                                            </Text>

                                        </AccordionPanel>
                                    </>
                                )
                            }
                        </AccordionItem>
                        <AccordionItem>
                            {
                                ({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}
                                                _hover={
                                                    colorMode === 'light'
                                                        ? { background: 'brand.600' } : { background: 'brand.200' }
                                                }
                                            >
                                                <Box
                                                    fontSize="2xl"
                                                    fontWeight="semibold"
                                                    flex="1"
                                                    textAlign="left"
                                                    color={colorMode === 'light' ? 'brand.800' : 'brand.100'}
                                                >
                                                    Time Tracking
                                                </Box>
                                                {
                                                    isExpanded ? (
                                                        <ChevronDownIcon fontSize="35px" color="brand.400" />
                                                    ) : (
                                                        <ChevronUpIcon fontSize="35px" color="brand.400" />
                                                    )
                                                }
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bg={colorMode === 'light' ? 'brand.700' : 'brand.200'}
                                        >
                                            <Carousel showStatus={false} showThumbs={false} useKeyboardArrows>
                                                {
                                                    timesheets.map((timesheet) => (
                                                        <Timesheet
                                                            key={timesheet.sheetName}
                                                            sheetName={timesheet.sheetName}
                                                            caption={timesheet.caption}
                                                        />
                                                    ))
                                                }
                                            </Carousel>
                                        </AccordionPanel>
                                    </>
                                )
                            }
                        </AccordionItem>
                        <AccordionItem>
                            {
                                ({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}
                                                _hover={
                                                    colorMode === 'light'
                                                        ? { background: 'brand.600' } : { background: 'brand.200' }
                                                }
                                            >
                                                <Box
                                                    fontSize="2xl"
                                                    fontWeight="semibold"
                                                    flex="1"
                                                    textAlign="left"
                                                    color={colorMode === 'light' ? 'brand.800' : 'brand.100'}
                                                >
                                                    Weekly Four Ups
                                                </Box>
                                                {
                                                    isExpanded ? (
                                                        <ChevronDownIcon fontSize="35px" color="brand.400" />
                                                    ) : (
                                                        <ChevronUpIcon fontSize="35px" color="brand.400" />
                                                    )
                                                }
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bg={colorMode === 'light' ? 'brand.700' : 'brand.200'}
                                        >
                                            <Carousel showStatus={false} showThumbs={false} useKeyboardArrows>
                                                {
                                                    fourUps.map((fourup) => (
                                                        <FourUp
                                                            key={fourup.fourUpName}
                                                            fourUpName={fourup.fourUpName}
                                                            caption={fourup.caption}
                                                        />
                                                    ))
                                                }
                                            </Carousel>
                                        </AccordionPanel>
                                    </>
                                )
                            }
                        </AccordionItem>
                        <AccordionItem>
                            {
                                ({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                bg={colorMode === 'light' ? 'brand.900' : 'brand.300'}
                                                _hover={
                                                    colorMode === 'light'
                                                        ? { background: 'brand.600' } : { background: 'brand.200' }
                                                }
                                            >
                                                <Box
                                                    fontSize="2xl"
                                                    fontWeight="semibold"
                                                    flex="1"
                                                    textAlign="left"
                                                    color={colorMode === 'light' ? 'brand.800' : 'brand.100'}
                                                >
                                                    Project Plan
                                                </Box>
                                                {
                                                    isExpanded ? (
                                                        <ChevronDownIcon fontSize="35px" color="brand.400" />
                                                    ) : (
                                                        <ChevronUpIcon fontSize="35px" color="brand.400" />
                                                    )
                                                }
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                            pb={4}
                                            bg={colorMode === 'light' ? 'brand.700' : 'brand.200'}
                                        >
                                            <Center>
                                                <Document
                                                    file={`${process.env.PUBLIC_URL}/ProjectPlan.pdf`}
                                                >
                                                    <Wrap justify="center">
                                                        <Page pageNumber={1} />
                                                        <Page pageNumber={2} />
                                                        <Page pageNumber={3} />
                                                        <Page pageNumber={4} />
                                                        <Page pageNumber={5} />
                                                        <Page pageNumber={6} />
                                                    </Wrap>
                                                </Document>
                                            </Center>
                                        </AccordionPanel>
                                    </>
                                )
                            }
                        </AccordionItem>
                    </Accordion>
                </Box>
            </ChakraProvider>
        );
    }
}
