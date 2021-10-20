import React from 'react';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { Carousel } from 'react-responsive-carousel';
import { AiFillGithub } from 'react-icons/ai';
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
    Flex,
    Spacer,
    IconButton,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Timesheet from './accordionComponents/Timesheet';
import FourUp from './accordionComponents/FourUp';
import HeaderImage from './accordionComponents/HeaderImage';

import timesheets from './accordionData/timesheets.json';
import fourUps from './accordionData/fourups.json';
import headerImages from './accordionData/headerImages.json';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
    return (
        <Box className="App" bg="brand.900">
            <Heading align="left" pr="2" pl="2" pb="0" left="16px">
                <Flex>
                    <Text pt="2" fontSize="2xl" style={{ color: '#ed8936' }}>
                        RIT SENIOR PROJECT
                    </Text>
                    <Text pt="2" pl="2" fontSize="2xl" style={{ color: '#161616' }}>
                        - PALMYRA RACING ASSOCIATION CLUB MANAGER
                    </Text>
                    <Spacer />
                    <LinkBox p="0">
                        <LinkOverlay p="0" href="https://github.com/Squeaky-Training-Wheels" target="_blank">
                            <IconButton size="sm" variant="ghost" p="0" fontSize="24px" icon={<AiFillGithub />} />
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
                            <>
                                <h2>
                                    <AccordionButton
                                        bg="brand.900"
                                        _hover={{ background: 'brand.600' }}
                                    >
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            flex="1"
                                            textAlign="left"
                                            color="brand.800"
                                        >
                                            The Team
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
                                <AccordionPanel pb={4} bg="brand.700">
                                    <Text fontSize="3xl" fontWeight="bold">Seniors</Text>
                                    <ul>
                                        <li>Brianna Fehring - Web and Mobile Tech Lead</li>
                                        <li>Jacob Jirinec - Backend Tech Lead</li>
                                        <li>Elijah Parish - Communications Lead + Website Maintainer</li>
                                        <li>Matt Robison - Git Lord + Process Manager + CI/CD Manager</li>
                                        <li>CJ Schaefer - Project Manager + Scrum Master</li>
                                    </ul>
                                    <Text fontSize="2xl" fontWeight="bold">Faculty Coach</Text>
                                    Bruce Herring
                                    <Text fontSize="2xl" fontWeight="bold">Sponsor</Text>
                                    Alan Delimon
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
                                    <AccordionButton bg="brand.900" _hover={{ background: 'brand.600' }}>
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            flex="1"
                                            textAlign="left"
                                            color="brand.800"
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
                                <AccordionPanel pb={4} bg="brand.700">
                                    <Text fontSize="xl">
                                        The Palmyra Racing Association Club Manager is a web and mobile application
                                        sponsored by the Palmyra Racing Association in order to facilitate the
                                        management of many facets of the club, including membership, member
                                        participation, and event tracking and signups. This project replaces an
                                        existing application which is already fairly outdated by web standards and is in
                                        need of a visual touch up. One of the primary goals of the application is ease
                                        of use and accessibility in order to get non-tech-savvy club members to use
                                        the application.
                                    </Text>
                                    <br />
                                    <Text fontSize="xl">
                                        Club members can use the application for updating their personal information,
                                        renewing their membership, and signing up to volunteer at events. Club board
                                        members can use the application to view and edit membership data for all
                                        active members as well as signup information for every event. Board members
                                        can also create new events and update existing ones, as well as assign club
                                        members to events manually. These features are currently provided via separate
                                        applications, and this application seeks to unify them into one easy to use,
                                        modernized user interface.
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
                                    <AccordionButton bg="brand.900" _hover={{ background: 'brand.600' }}>
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            flex="1"
                                            textAlign="left"
                                            color="brand.800"
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
                                <AccordionPanel pb={4} bg="brand.700">
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
                                    <AccordionButton bg="brand.900" _hover={{ background: 'brand.600' }}>
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            flex="1"
                                            textAlign="left"
                                            color="brand.800"
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
                                <AccordionPanel pb={4} bg="brand.700">
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
                                    <AccordionButton bg="brand.900" _hover={{ background: 'brand.600' }}>
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            flex="1"
                                            textAlign="left"
                                            color="brand.800"
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
                                <AccordionPanel pb={4} bg="brand.700">
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
    );
}

export default App;
