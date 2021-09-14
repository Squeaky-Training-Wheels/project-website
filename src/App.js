import './App.css';
import Artifact from './Artifact';
import Timesheet from './Timesheet';
import timesheets from './timesheets.json'
import artifacts from './artifacts.json'
import TimeTracker from './TimeTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RIT Senior Project - Palmyra Racing Association
      </header>
      <h1></h1>
      <h3>The Team</h3>
      <h4>Seniors</h4>
      <ul>
        <li>Brianna Fehring</li>
        <li>Jacob Jirinec</li>
        <li>Elijah Parish</li>
        <li>Matt Robison</li>
        <li>CJ Schaefer</li>
      </ul>
      <h4>Faculty Coach</h4>
      Bruce Herring
      <h4>Sponsor</h4>
      Alan Delimon
      <h3>Project Synopsis</h3>
      <p>
        The Palmyra Racing Association Club Manager is a web and mobile application sponsored by the Palmyra Racing Association in order to facilitate the management of many facets of the club, including membership, member participation, and event tracking and signups.
        This project replaces an existing application which is already fairly outdated by web standards and is in need of a visual touch up. One of the primary goals of the application is ease of use and accessibility in order to get non-tech-savvy club members to use the application.
        Club members can use the application for updating their personal information, renewing their membership, and signing up to volunteer at events. Club board members can use the application to view and edit membership data for all active members as well as signup information for every event. 
        Board members can also create new events and update existing ones, as well as assign club members to events manually. These features are currently provided via separate applications, and this application seeks to unify them into one easy to use, modernized user interface.
      </p>
      <h3>Time Tracking</h3>
      {
        timesheets.map((timesheet) => (
          <Timesheet name={timesheet.name} caption={timesheet.caption} />
        ))
      }
      <h3>Artifacts</h3>
      {
        artifacts.map((artifact) => (
          <Artifact artifactName={artifact.artifactName} caption={artifact.caption} />
        ))
      }
    </div>
  );
}

export default App;
