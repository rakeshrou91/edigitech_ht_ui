import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from "react-icons/cg";
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RiIcons.RiDashboardFill/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'MyProfile',
    path: '/myprofile',
    icon: <CgIcons.CgProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'My Appoitment',
    path: '/products',
    icon: <BsIcons.BsBookmarkCheck />
  },
  {
    title: 'My Trip',
    path: '/team',
    icon: <BiIcons.BiTrip />
  },
  {
    title: 'My Itinerary',
    path: '/myitinerary',
    icon: <GiIcons.GiWavyItinerary />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Trip Status',
    path: '/tripstatus',
    icon: <SiIcons.SiTripdotcom />
  }
  ,
  {
    title: 'Log Out',
    path: '/logout',
    icon: <FiIcons.FiLogOut />
  }
];
