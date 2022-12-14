import React from 'react';
//import ReactDOM from 'react-dom/client';

import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'

import { HomeOutlined, SearchOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';

export default function NaviBar() {
  const bottomNavItems = [
    {
      title: 'Home',
      icon: <HomeOutlined style={{ fontSize: '18px' }} />,
      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />
    },
    {
      title: 'Search',
      icon: <SearchOutlined style={{ fontSize: '18px' }} />,
      activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#fff' }} />
    },
    {
      title: 'Notifications',
      icon: <BellOutlined style={{ fontSize: '18px' }} />,
      activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#fff' }} />
    },
    {
      title: 'Menu',
      icon: <MenuOutlined style={{ fontSize: '18px' }} />,
      activeIcon: <MenuOutlined style={{ fontSize: '18px', color: '#fff' }} />,
      onClick: () => { alert('menu clicked!!!') }
    }
  ]
  
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  );
}