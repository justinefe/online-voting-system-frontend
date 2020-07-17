import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import WarningIcon from '@material-ui/icons/Warning';
import AddIcon from '@material-ui/icons/Add';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DoneIcon from '@material-ui/icons/Done';
import Chart from '../../components/Graph';
import TopBar from '../../layout/TopBar';
import './index.scss';

// console.log(<Chart/>);

const Cascade = () => {
return ( 
    <div id='cascade'>
        <div id='head_bar'>
            <h1 className='heading'>CASCADE</h1>
            <button className='btn btn-primary'>BOOK A HELP</button>
        </div>
        <div className='nav-holder'>
          <TopBar/>
        </div>
        <div className='nav-header'>
            <h2 className='heading'>BOARD UPDATE DASHBOARD</h2>
        </div>
        <div className='chat-wrapper'>
        <div className='graph-holder'>
            <div className='graph-left'>
                <div className='graph-left-info-div-one-s'><h5>FOCUS AREA COMPLETION</h5></div>
                <div className='graph-left-info-div-two'> 
                     <Chart />
                </div>
            </div>
            <div className='graph-right'>
                <div className='graph-right-info'>
                    <div className='graph-right-info-div-one'><h5>ON TRACK</h5></div>
                    <div className='graph-right-info-div-two'><span>DELIVER EDUCATIONAL PROGRAM TO APPROVAL BY 19TH OCT 2017</span></div>
                    <div className='graph-right-info-div-three'><span id='percent'>50%</span><span>3% ahead</span></div>
                </div>                    
                <div className='graph-right-chart-middle'>
                    <div className='left'>
                        <span>Emilly Rose</span>
                        <span>Important</span>
                        <span>Project</span>
                        <span>{`${new Date().toDateString()}`}</span>
                    </div>
                    <div className='right'>
                        <span className='first'><DoneIcon/>0</span>
                        <span className='second'><WarningIcon/>0</span>
                    </div>
                </div>
                <div className='graph-right-chart'> <Chart /></div>
            </div>
            <div className='graph-left'>
                    <div className='graph-right-info'>
                            <div className='graph-right-info-div-one'><h5>ON TRACK</h5></div>
                            <div className='graph-right-info-div-two'><span>LAUNCH NEW MARKETING PLAN BY 26TH MAY 2020</span></div>
                            <div className='graph-right-info-div-three'>
                                <span>
                                    <AddIcon/>
                                    <FileCopyOutlinedIcon/>
                                    <SettingsOutlinedIcon/>
                                    <CloseOutlinedIcon/>
                                </span>
                                <span id='percent'>50% </span>
                                <span>3% ahead</span>
                            </div>
                </div>                    
                <div className='graph-right-chart-middle'>
                    <div className='left'>
                    <span>Org Goal</span>
                    <span>Top Priority</span>
                    <span>Harison 2</span>
                    <span>Financial</span>
                    <span>{`${new Date().toDateString()} - ${new Date(2018, 4, 26).toDateString()}`}</span>
                    </div>
                    <div className='right'>
                        <span className='first'><DoneIcon/>0</span>
                        <span className='second'><WarningIcon/>0</span>
                    </div>
                </div>
                <div className='graph-right-chart'> <Chart /></div>
            </div>
            <div className='graph-right'>
                    <div className='graph-right-info'>
                        <div className='graph-right-info-div-one'><h5>ON TRACK</h5></div>
                        <div className='graph-right-info-div-two'><span>ACHIEVE REVENUE OF: $1M BY 31 DEC</span></div>
                        <div className='graph-right-info-div-three'>
                            
                            <span id='percent'>$400K </span>
                            <span>$21.15K ahead</span>
                        </div>
                </div>                    
                <div className='graph-right-chart-middle'>
                <div className='left'>
                <span>Org Goal</span>
                <span>Top Priority</span>
                <span>Customer</span>
                <span>KPI</span>
                <span>Harison</span>
                <span>{`${new Date().toDateString()}`}</span>
                </div>
                <div className='right'>
                    <span className='first'><DoneIcon/>0</span>
                    <span className='second'><WarningIcon/>0</span>
                </div>
                </div>
                <div className='graph-right-chart'> <Chart /></div>
            </div>
           </div>
        </div>

    </div>
)
}
export default Cascade;