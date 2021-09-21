import React from 'react';
import { Image } from '@chakra-ui/image';

class FourUp extends React.Component {
    render() {
        const { fourUpName, caption } = this.props;
        return (
            <div>
                <h4>{fourUpName}</h4>
                <Image src={process.env.PUBLIC_URL + `/fourups/${fourUpName}.png`} alt={fourUpName} />
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default FourUp;