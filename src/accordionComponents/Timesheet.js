import React from 'react';
import { Image } from '@chakra-ui/image';

class Timesheet extends React.Component {
    render() {
        const { sheetName, caption } = this.props;
        return (
            <div>
                <h4>{sheetName}</h4>
                <Image src={process.env.PUBLIC_URL + `/timesheets/${sheetName}.png`} alt={sheetName} />
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Timesheet;