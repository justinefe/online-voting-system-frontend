
import React, { Fragment } from 'react';
import TopBarItems from './TopBarItems';

const items = [{
    name: 'Emily Rass',
    lists: ['Profile', 'Settings']
}, 
{
    name: 'Strategy',
    lists: ['Strategic goals', 'settings']
},
{
    name: 'Reports',
    lists: ['Create reports', 'View reports']
},
{
    name: 'Admin',
    lists: ['Asign gaols', 'settings']
}]
const TopBar = () => (
    <Fragment>
         <TopBarItems items = {items} />
    </Fragment>
    )

export default TopBar;