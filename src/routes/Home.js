import React, { Component } from 'react';
import './home.scss'
class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='container'>
                    <h3 className='text heading-3'>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className='text heading-1'>SPACE</h1>
                    <p className='text description'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <a href="" className='explore'>Explore</a>
            </div>
        );
    }
}

export default Home;