import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../store/actions/AuthActions.js';
// import SmsIcon from '@material-ui/icons/Email';
import Schedule from '@material-ui/icons/Schedule';
import HowToVote from '@material-ui/icons/HowToVote';
import PaymentIcon from '@material-ui/icons/Payment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
// import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import Create from '@material-ui/icons/Create';
import Comment from '@material-ui/icons/Comment';
import Chat from '@material-ui/icons/Chat';
import People from '@material-ui/icons/People';
// import Chat from '@material-ui/icons/Chat';
import SideItem from './SideItem';

// function onClick(e, item) {
// window.alert(JSON.stringify(item, null, 2));
// }

// const onDashboard = () => <Link to="/dashboard" />;

const items = [
  {
    name: 'statements',
    label: <NavLink className='Link' to="/compose">Elections</NavLink>,
    // onClick,
    Icon: HowToVote,
    items: [
      { name: 'message', label: 'View Election', Icon: AccountBalanceOutlinedIcon },
      { name: 'message', label: 'View Result', Icon: AccountBalanceOutlinedIcon },
      { name: 'message', label: 'Trending', Icon: PaymentIcon }
      // { name: 'message', label: 'Flutter wave', Icon: PaymentIcon }
    ],
  },
  // {
  //   name: 'reports', label: 'Coupon', Icon: Schedule,
  // },
  {
    name: 'statements', label: <NavLink className='Link' to="/compose">Post a comment</NavLink>, Icon: Comment
  },
  {
    name: 'reports', label: <NavLink className='Link' to="/compose">Election calender</NavLink>, Icon: Schedule,
  },
  // { name: 'message', label: 'Delivery Report', Icon: DoneAllIcon },
  {
    name: 'statements',
    label: <NavLink className='Link' to="/compose">Chat</NavLink>,
    Icon: Chat,
    items: [
      { name: 'message', label: <NavLink className='Link' to="/compose">Sent Messages</NavLink>, Icon: Chat },
      { name: 'message', label: <NavLink className='Link' to="/compose">Received Message</NavLink>, Icon: Chat}],
    // onClick,
  },
  {
    name: 'reports', label: <NavLink className='Link' to="/register_candidate">Apply to contest</NavLink>, Icon: PaymentIcon,
  },

  {
    name: 'statements',
    label: <NavLink className='Link' to="/profile">Candidates</NavLink>,
    Icon: People,
    items: [
      { name: 'message', label: <NavLink className='Link' to="/view_candidate">View a Candidate</NavLink>, Icon: People },
      { name: 'message', label: <NavLink className='Link' to="/view_all_candidate">View all candidate</NavLink>, Icon: People }],
    // onClick,
  },
  
  {
    name: 'statements', label: <NavLink className='Link' to="/register_party">Register a party</NavLink>, Icon: Create,
  },
  {
    name: 'reports', label: <NavLink className='Link' to="/register_voter">Voter Registeration</NavLink>, Icon: Create,
  },
  {
    name: 'reports', label: <NavLink className='Link' to="/join_party">Join a political party</NavLink>, Icon: Create,
  },
  {
    name: 'insurance', label: <NavLink className='Link' to="/dashboard">Dashboard</NavLink>, Icon: DashboardIcon,
  },
  {
    name: 'profile',
    label: <NavLink className='Link' to="/profile">My Profile</NavLink>,
    Icon: PersonOutlineOutlinedIcon,
    items: [
      { name: 'edit-profile', label: <NavLink className='Link' to="/edit-profile">Edit Profile</NavLink> },
      { name: 'notify', label: <NavLink className='Link' to="/notification">Notification</NavLink> },
      { name: 'notify', label: 'Api Setting' },
    ],
  },
  // { name: 'logout', label: <NavLink className='Link' to={() => signOut()}>Log Out</NavLink>, Icon: PowerSettingsNewIcon }
];

const SideBar = () => <SideItem items = {items} /> ;

const mapDispatchToProps = ({
  signOut: () => signOutAction()
});


export default connect(null, mapDispatchToProps)(SideBar);