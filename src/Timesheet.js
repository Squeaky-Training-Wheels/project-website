import React from 'react';

class Timesheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sheetName, caption } = this.props;
        console.log(sheetName);
        return (
            <div>
                <h4>{sheetName}</h4>
                <img src={`./timesheets/${sheetName}.png`}></img>
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Timesheet;