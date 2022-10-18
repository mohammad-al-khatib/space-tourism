import React, { Component } from 'react';
import data from '../data/technology.json';
import './technology.scss'
class Technology extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data[0],
            index: 0,
        }
    }

    handleSelection = (index) => {
        this.setState({
            data: data[index],
            index,
        })
    }
    render() {
        const { heading, paragraph, background } = this.state.data
        return (
            <div className='technology'>
                <h3 className='text heading-3'><span>03</span>SPACE LAUNCH 101</h3>
                <div className='main-container'>
                    <div className='left-container'>
                        <div className='buttons'>
                        {data.map((element, index) => <button key={index} onClick={() => this.handleSelection(index)} className={`button ${index === this.state.index? 'active' : ''}`} ><span className='text'>{index+1}</span></button>)}
                        </div>
                        <div className='info'>
                            <h4 className='text heading-4'>THE TERMINOLOGY...</h4>
                            <h1 className='text heading-1'>{heading}</h1>
                            <p className='text description'>{paragraph}</p>
                        </div>
                    </div>
                    <div className={`${background} image`}></div>
                </div>
            </div>
        );
    }
}

export default Technology;