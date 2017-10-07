import React from 'react';

class Compute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hra: 0,
            da: 0,
            ta: 0,
            ns: 0,
            pf: 1000
        };
    }

    computeHRA() {
        this.setState=({
            hra: parseInt(this.props.sal) * 0.30
        });
    }

    computeDA() {
        this.setState=({
            da: parseInt(this.props.sal) * 0.20
        });
    }

    computeTA() {
        this.setState=({
            ta: (parseInt(this.props.sal) * 0.10)
        });
    }

    computeNS() {
        this.computeHRA();
        this.computeDA();
        this.computeTA();
        let totalSalary = parseInt(this.state.sal)+ this.state.hra+ this.state.da+ this.state.ta- this.state.pf;
        this.setState=({
            ns: totalSalary
        });
        return this.state.ns;
    }

    render() {
        return (
            <div>
                <button onClick={this.computeNS.bind(this)}>Compute Salary</button>
                <p>Basic Salary is {this.props.sal}</p>
                <br/>
                <p>HRA is {this.state.hra}</p>
                <p>DA is {this.state.da}</p>
                <p>TA is {this.state.ta}</p>
                <p>PF is {this.state.pf}</p>
                <p>Net Salary is {this.state.ns}</p>
            </div>
        )
    }
}

export default Compute;