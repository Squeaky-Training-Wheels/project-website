import React from 'react';

class Artifact extends React.Component {
    render() {
        const { artifactName, caption } = this.props;
        return (
            <div>
                <h4>{artifactName}</h4>
                <img src={`./artifacts/${artifactName}.png`} alt={artifactName} />
                <br />
                <span style={{ textAlign: 'center' }}>{caption}</span>
            </div>
        );
    }
}

export default Artifact;
