import './App.css';
import Timesheet from './accordionComponents/Timesheet';
import FourUp from './accordionComponents/FourUp';
import HeaderImage from './accordionComponents/HeaderImage';

import timesheets from './accordionData/timesheets.json'
import fourUps from './accordionData/fourups.json'
import headerImages from './accordionData/headerImages.json';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Document, Page, pdfjs } from "react-pdf";

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Text,
    Wrap,
    Center
} from "@chakra-ui/react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// display="flex" h="700px" w={"100%"} src="https://wallpaperstock.net/motocross-racing_wallpapers_46236_852x480.jpg"/>
function App() {
  return (
    <Box className="App" bg="brand.100" color="brand.800">
            <Heading bg="brand.100" color="brand.700" p="3">
                <Text fontSize="2xl">RIT SENIOR PROJECT - PALMYRA RACING ASSOCIATION CLUB MANAGER</Text>
            </Heading>
            <Carousel 
                stopOnHover={false}
                autoPlay={true}
                interval={10000}
                transitionTime={1500}
                showStatus={false}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                renderIndicator={false}
                display="flex"
                h="700px"
                w={"100%"}>
                {
                    headerImages.map((headerImage) => (
                        <HeaderImage key={headerImage.imageName} imageName={headerImage.imageName}/>
                    ))
                }
            </Carousel> 
            <Accordion defaultIndex={[0]} allowMultiple={true}>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg="brand.400"  _hover={{ background: "brand.500" }}>
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                The Team
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
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
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg="brand.400" _hover={{ background: "brand.500" }}>
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Project Synopsis
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        <Text fontSize="xl">
                            The Palmyra Racing Association Club Manager is a web and mobile application sponsored by the
                            Palmyra Racing Association in order to facilitate the management of many facets of the club,
                            including membership, member participation, and event tracking and signups. This project
                            replaces an existing application which is already fairly outdated by web standards and is in
                            need of a visual touch up. One of the primary goals of the application is ease of use and
                            accessibility in order to get non-tech-savvy club members to use the application.
                        </Text>
                        <br/>
                        <Text fontSize="xl">
                            Club members can use the application for updating their personal information, renewing their
                            membership, and signing up to volunteer at events. Club board members can use the application
                            to view and edit membership data for all active members as well as signup information for every
                            event. Board members can also create new events and update existing ones, as well as assign
                            club members to events manually. These features are currently provided via separate
                            applications, and this application seeks to unify them into one easy to use, modernized user
                            interface.
                        </Text>

                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg="brand.400" _hover={{ background: "brand.500" }}>
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Time Tracking
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        <Carousel showStatus="false">
                            {
                                timesheets.map((timesheet) => (
                                    <Timesheet key={timesheet.sheetName} sheetName={timesheet.sheetName} caption={timesheet.caption}/>
                                ))
                            }
                        </Carousel>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg="brand.400" _hover={{ background: "brand.500" }}>
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Weekly Four Ups
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        <Carousel>
                            {
                                fourUps.map((fourup) => (
                                    <FourUp key={fourup.fourUpName} fourUpName={fourup.fourUpName} caption={fourup.caption}/>
                                ))
                            }
                        </Carousel>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <h2>
                        <AccordionButton bg="brand.400" _hover={{ background: "brand.500" }}>
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Project Plan
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        <Center>
                            <Document
                                file={process.env.PUBLIC_URL + '/ProjectPlan.pdf'}
                            >
                                <Wrap justify="center">
                                    <Page pageNumber={1}/>
                                    <Page pageNumber={2}/>
                                    <Page pageNumber={3}/>
                                    <Page pageNumber={4}/>
                                    <Page pageNumber={5}/>
                                    <Page pageNumber={6}/>
                                </Wrap>
                            </Document>
                        </Center>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
  );
}

export default App;
