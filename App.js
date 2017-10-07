import React, {Component} from 'react';
import Compute from './Compute.js';
import './index.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            salary: 0
        };
    }

    updateSalary() {
        this.setState(
            {salary: this.refs.salarytxt.value}
        );
    }

    render() {
        return (
            <div>
                <h1> Salary Calc App </h1>
                <input type="text" ref="salarytxt" onChange={this.updateSalary.bind(this)} placeholder="Enter Basic Salary"/>
                <p> Salary is {this.state.salary}</p>
                <hr/>
                <Compute sal={this.state.salary}/>
            </div>
        );
    }
}

  export default App;