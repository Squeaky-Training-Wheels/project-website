import React from 'react';
import Papa from 'papaparse'

class TimeTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.getData = this.getData.bind(this);
    }

    getData(result) {
        this.setState({ data: result.data })
    }

    async componentDidMount() {
        const csvData = await fetch('./times.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
        console.log(csvData)
        Papa.parse(csvData, {
            complete: this.getData
        });
    }

    render() {
        const { data } = this.state;
        console.log(data);
        if (data.length === 0) {
            return (<div />)
        }
        return (
            <div>
                <table>
                    <tr>
                        {
                            data[0].map((header) => (
                                <th>{header}</th>
                            ))
                        }
                    </tr>
                    {
                        data.slice(1).map((entry) => (
                            <tr>
                                {
                                    entry.map((element) => (
                                        <td>{element}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default TimeTracker;
