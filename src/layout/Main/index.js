import React from 'react';
import './index.scss';

const Main = () => {
    return (
          <div className='container'>
                <div id="bg">
                  
                </div>
            <header>
              <a href='#'>One Man One Vote</a>
            </header>
            <main>
              <section id='card'>
                <ul>
                    <li>
                        <span></span>
                        <strong>We deliver reliable service</strong>
                    </li>
                    <li>
                        <span></span>
                        <strong>Very simple to use</strong>
                    </li>
                    <li>
                        <span></span>
                        <strong>Anywhere and anytime we make it happen</strong>
                    </li>
                </ul>
              </section>
              <section id ='primary'>
                <h1>Your Voting Personal Assistant</h1>    
                <p>Get help while you do the things that matter</p> 
                
                <a href='#'> Get help already</a>
              </section>
            </main>
        </div>
    );
};

export default Main;