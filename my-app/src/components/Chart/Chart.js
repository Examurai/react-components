import React, { Component } from 'react';
import { LineChart, Line, Legend } from 'recharts';
import { dataDefault } from './data';
import './style.css';
import Button from '../Button/Button';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataDefault
        };
    }

    clearData = () => {
        this.setState({
            data: []
        });
    }

    resetData = () => {
        this.setState({
            data: dataDefault
        });
    }

    randomData = () => {
        const dataRandom = [];
        for (let i = 0; i < 10; i += 1) {
            const item = {
                name: `Page ${i}`,
                line1: Math.floor(Math.random() * (1000 + 1)),
                line2: Math.floor(Math.random() * (500 + 1))
            };
            dataRandom.push(item);
        }
        this.setState({
            data: dataRandom
        });
    }

    onChangeSelect = (event) => {
        const value = event.target.value;
        if (!value) {
            return;
        }
        switch(value) {
            case '1': {
                this.randomData();
                break;
            }
            case '2': {
                this.resetData();
                break;
            }
            case '3': {
                this.clearData();
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className="ChartContainer">
                <div className='ChartDraw'>
                    <LineChart width={300} height={300} data={data}>
                        <Line type="monotone" dataKey="line1" stroke="green" />
                        <Line type="monotone" dataKey="line2" stroke="blue" />
                        <Legend layout="vertical" verticalAlign="middle" />
                    </LineChart>
                </div>
                <div className='ChartButtons'>
                    <Button name='Random' click={this.randomData} />
                    <Button name='Reset' click={this.resetData} />
                    <Button name='Empty' click={this.clearData} />
                </div>
                <div>
                    <select onChange={this.onChangeSelect}>
                        <option key='0' value='1'>1</option>
                        <option key='1' value='2'>2</option>
                        <option key='2' value='3'>3</option>
                        <option key='3' value='4'>4</option>
                    </select>
                </div>
            </div>
        );
    }
}