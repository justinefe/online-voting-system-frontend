import React from 'react';
import Test from '../../assets/Test';
import Everywhere from '../../assets/RemoteVote';
import './index.scss';

const AsideMain = () => {
    return (
        <div id='aside'>
            <div className='card'>
                <span> You can vote anywhere and anytime from the comfort of your home 
                Making online voting convenience and accomodating
                </span>
                <Test/>
            </div>            
            <div id='round-card'>
                <Everywhere/>
            </div>
        </div>
    );
};

export default AsideMain;