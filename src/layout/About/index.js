import React from 'react';
import Test from '../../assets/svg/Test';
import Everywhere from '../../assets/svg/RemoteVote';
import './index.scss';

const About = () => {
    return (
        <div id='about'>
            <div id='About-us'> 
             <strong>About Us</strong>
            </div>  
           <div id='inner'>
                <div className='card'>
                <span> You can vote anywhere and anytime, giving you comfort while instilling improved confidence and trust in the elctoral process 
                 <br/> <br/> Making online voting convenience and reliable <br/><br/> Delivering free, fair and credible election with one click
                </span>
                <Test/>
            </div>            
                <div id='round-card'>
                    <Everywhere/>
                </div>
           </div>
        </div>
    );
};

export default About;