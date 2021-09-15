import React from 'react';

class Timesheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { nameTest, caption } = this.props;
        return (
            <div>
                <h4>{nameTest}</h4>
                <img src={`./timesheets/${nameTest}`}></img>
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Timesheet;