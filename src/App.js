import './App.css';
import Timesheet from './accordionComponents/Timesheet';
import FourUp from './accordionComponents/FourUp';

import timesheets from './accordionData/timesheets.json'
import fourUps from './accordionData/fourups.json'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ProjectPlanPdf from './assets/ProjectPlan.pdf'

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading, Image,
    Text
} from "@chakra-ui/react";

function App() {
  return (
    <Box className="App" bg="brand.700" color="brand.800">
            <Heading bg="brand.100" color="brand.700">
                <Text fontSize="6xl">RIT Senior Project - Palmyra Racing Association Club Manager</Text>
            </Heading>
            <Image display="flex" h="700px" w={"100%"} src="http://wallpaperstock.net/motocross-racing_wallpapers_46236_852x480.jpg"/>

            <Accordion defaultIndex={[0]} allowMultiple={true}>
                <AccordionItem >
                    <h2>
                        <AccordionButton bg="brand.400">
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
                        <AccordionButton bg="brand.400">
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
                        <AccordionButton bg="brand.400">
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Time Tracking
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        {
                            timesheets.map((timesheet) => (
                                <Timesheet h="700px" w={"100%"} key={timesheet.sheetName} sheetName={timesheet.sheetName} caption={timesheet.caption}/>
                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton bg="brand.400">
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Weekly Four Ups
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                        {
                            fourUps.map((fourup) => (
                                <FourUp h="700px" w={"100%"} key={fourup.fourUpName} fourUpName={fourup.fourUpName} caption={fourup.caption}/>
                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <h2>
                        <AccordionButton bg="brand.400">
                            <Box fontSize="2xl" fontWeight="semibold" flex="1" textAlign="left">
                                Project Plan
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="brand.600">
                    <Document
                        file={ProjectPlanPdf}
                    >
                        <Page pageNumber={1}/>
                        <br/>
                        <Page pageNumber={2}/>
                        <br/>
                        <Page pageNumber={3}/>
                        <br/>
                        <Page pageNumber={4}/>
                        <br/>
                        <Page pageNumber={5}/>
                        <br/>
                        <Page pageNumber={6}/>
                    </Document>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
  );
}

export default App;
