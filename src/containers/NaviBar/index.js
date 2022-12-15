import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import ReactDOM from 'react-dom/client';

import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'

import { Menu, SubMenu, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import './NaviBar.css'

import { HomeOutlined, SearchOutlined, BellOutlined, MenuOutlined, CalendarOutlined, CalculatorOutlined, GithubOutlined, CodeSandboxOutlined } from '@ant-design/icons';

export default function NaviBar() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);

  const bottomNavItems = [
    {
      title: 'Home',
      icon: <HomeOutlined style={{ fontSize: '18px' }} />,
      activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />,
      onClick: () => {
        handleOnClick();
      }
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
      onClick: () => {
        setIsOpen(!isOpen); 
      }
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      />

      <Menu className="burger-menu" isOpen={isOpen} selectedKey={'calendar'} onClose={() => setIsOpen(false)}>
        <>
          <Link to={"/calendar"}><Item itemKey={'calendar'} text={'Calendar'} icon={<CalendarOutlined />}></Item></Link>
          <Item itemKey={'calc'} text={'Calculator'} icon={<CalculatorOutlined />}></Item>
          <SubMenu title="Sites">
            <Item itemKey={'github'} text={'Github'} icon={<GithubOutlined />}></Item>
            <Item itemKey={'code'} text={'CodeSandbox'} icon={<CodeSandboxOutlined />}></Item>
          </SubMenu>
        </>
      </Menu>
    </div>
  );
}