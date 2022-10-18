import React, { Component } from 'react';
import {data} from '../data/crew';
import './crew.scss';

class Crew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data.commander,
            buttonIndex:0,
        }
    }

    handleSelection = (selection, buttonIndex) => {
        this.setState({
            data: selection,
            buttonIndex,
        })
    }

    render() {
        const {role, name, description} = this.state.data
        return (
            <div className='crew'>
                <div className='info'>
                    <div className='info-text'>
                        <h3 className='text heading-3'><span>02</span>MEET YOUR CREW</h3>
                        <h3 className='text role'>{role}</h3>
                        <h1 className='text name'>{name}</h1>
                        <p className='text description'>{description}</p>
                    </div>
                    <div className='buttons'>
                    {Object.values(data).map((element, index) => <button onClick={() => this.handleSelection(element, index)} className={`button ${index === this.state.buttonIndex? 'active' : ''}`}></button>)}
                    </div>
                </div>
                <div className='crew-image-container'>
                    <img src={this.state.data.image} alt="crew member" className='crew-image'/>
                </div>
            </div>
        );
    }
}

export default Crew;