import React, { Component } from 'react';
import {data} from '../data/destination'
import './destination.scss'
class Destination extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data.moon
        }
    }

    handleSelection = (selection) => {
        this.setState({
            data: data[selection],
        })
    }

    render() {
        const {name, description, distance, travelTime, image} = this.state.data
        return (
            <div className='destination'>
                <div className='destination-image'>
                    <h3 className='text destination-image-header'><span>01</span>PICK YOUR DESTINATION</h3>
                    <img src={image} alt='moon'/>
                </div>
                <div className='destination-info'>
                    <div className='dist-buttons'>
                        {['moon', 'mars', 'europa', 'titan'].map((item) =><button onClick={() => this.handleSelection(item)} className='destination-button'>{item.toUpperCase()}</button>)}
                    </div>
                    <div>
                        <h1 className='text heading-1'>{name}</h1>
                        <p className='text description'>{description}</p>
                        <div className='stats'>
                            <section>
                                <h6 className='text heading-6'>AVG. DISTANCE</h6>
                                <h5 className='text heading-5'>{distance}</h5>
                            </section>
                            <section>
                                <h6 className='text heading-6'>EST. TRAVEL TIME</h6>
                                <h5 className='text heading-5'>{travelTime}</h5>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Destination;