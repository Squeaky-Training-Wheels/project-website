import React from 'react';

class Timesheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, caption } = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <img src={`./timesheets/Time Tracking Week One.png`}></img>
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Timesheet;