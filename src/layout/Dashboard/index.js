import React from 'react';
import { connect } from 'react-redux';
import Graph from '../../components/Graph';
// import Card from '../../layout/Card';
import { Redirect } from 'react-router-dom';
import './index.scss';


const Dashboard = ({ isAuthenticated }) => {
    if (!isAuthenticated) return <Redirect to='/signin'/>;
    return (
                  <div id='down-view'>
                    <div id='overview'>
                        <div className='nav'>
                             <span>OVERVIEW</span>
                             <ul>
                                <li>This week</li>
                                <li>This month</li>
                                <li>This year</li>
                             </ul>
                        </div>
                    </div>
                    <div className='graph'>
                    <div className='row container remove-margin'>
                    <div className=' col-md-12 graph-space' >
                        <div>
                            <h1 className='heading text-center'>General Election</h1> 
                            <ul className='list-unstyled ul-graph'>
                                <li className='li-graph-one' >VOTES CASTED</li>
                                <li className='li-graph-two'>TOTAL VOTES</li>
                            </ul>
                        </div>
                        <Graph text = 'ELECTION STATISTICS' color = 'red'/>  
                    </div>
                    </div>
                    <div className='row container remove-margin'>
                    <div className=' col-md-6 graph-space' >                    
                    <div>
                    <h1 className='heading text-center'>Presidency</h1> 
                    <ul className='list-unstyled ul-graph'>
                        <li className='li-graph-one' >VOTES CASTED</li>
                        <li className='li-graph-two'>TOTAL VOTES</li>
                    </ul>
                </div>
                <Graph text='Senate'/>  
                </div>
                    <div className=' col-md-6 graph-space' >
                    <div>
                    <h1 className='heading text-center'>Senate</h1> 
                    <ul className='list-unstyled ul-graph'>
                        <li className='li-graph-one' >VOTES CASTED</li>
                        <li className='li-graph-two'>TOTAL VOTES</li>
                    </ul>
                </div>                    
                        <Graph text='Presidency' />  
                    </div>
                    </div>
                 </div>  
                 </div>                
    );
};

const mapStateToProps = state => ({
    // authError: state.auth.authError,
    // isLoading: state.auth.isLoading,
    // user: state.auth.user,
    // isCompleted: state.auth.isCompleted,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Dashboard);
