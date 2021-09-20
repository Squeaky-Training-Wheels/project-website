import React from 'react';
import { Image } from '@chakra-ui/image';

class Artifact extends React.Component {
    render() {
        const { artifactName, caption } = this.props;
        return (
            <div>
                <h4>{artifactName}</h4>
                <Image src={process.env.PUBLIC_URL + `/artifacts/${artifactName}.png`} alt={artifactName} />
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Artifact;
