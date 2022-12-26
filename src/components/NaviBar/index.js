import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import BottomNavigation from 'reactjs-bottom-navigation';

import { Menu, SubMenu, Item } from 'burger-menu';

import 'burger-menu/lib/index.css';
import './NaviBar.css';

import {
    HomeOutlined,
    UserOutlined,
    MenuOutlined,
    CalendarOutlined,
    CalculatorOutlined,
    GithubOutlined,
    CodeSandboxOutlined,
} from '@ant-design/icons';

export default function NaviBar() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        appId => {
            navigate(`/${appId}`, { replace: true });
        },
        [navigate],
    );

    const [isOpen, setIsOpen] = useState(false);

    const bottomNavItems = [
        {
            title: 'Home',
            icon: <HomeOutlined style={{ fontSize: '18px' }} />,
            activeIcon: (
                <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />
            ),
            onClick: () => {
                handleOnClick('');
            },
        },
        {
            title: 'Portfolio',
            icon: <UserOutlined style={{ fontSize: '18px' }} />,
            activeIcon: (
                <UserOutlined style={{ fontSize: '18px', color: '#fff' }} />
            ),
            onClick: () => {
                handleOnClick('portfolio');
            },
        },
        {
            title: 'Bitcoin',
            icon: (
                <img
                    src="./images/btc.png"
                    style={{ width: '1em', height: '1em' }}
                    alt="btc"
                />
            ),
            activeIcon: (
                <img
                    src="./images/btc_active.png"
                    style={{ width: '1em', height: '1em' }}
                    alt="btc"
                />
            ),
            onClick: () => {
                handleOnClick('bitcoin');
            },
        },
        {
            title: 'Menu',
            icon: <MenuOutlined style={{ fontSize: '18px' }} />,
            activeIcon: (
                <MenuOutlined style={{ fontSize: '18px', color: '#fff' }} />
            ),
            onClick: () => {
                setIsOpen(!isOpen);
            },
        },
    ];

    return (
        <div>
            <BottomNavigation
                items={bottomNavItems}
                defaultSelected={0}
                onItemClick={item => console.log(item)}
            />

            <Menu
                className="burger-menu"
                isOpen={isOpen}
                selectedKey={'calendar'}
                onClose={() => setIsOpen(false)}
            >
                <>
                    <Link to={'/calendar'}>
                        <Item
                            itemKey={'calendar'}
                            text={'Calendar'}
                            icon={<CalendarOutlined />}
                        ></Item>
                    </Link>
                    <Link to={'/calculator'}>
                        <Item
                            itemKey={'calc'}
                            text={'Calculator'}
                            icon={<CalculatorOutlined />}
                        ></Item>
                    </Link>
                    <SubMenu title="Sites">
                        <Item
                            itemKey={'github'}
                            text={'Github'}
                            icon={<GithubOutlined />}
                        ></Item>
                        <Item
                            itemKey={'code'}
                            text={'CodeSandbox'}
                            icon={<CodeSandboxOutlined />}
                        ></Item>
                    </SubMenu>
                </>
            </Menu>
        </div>
    );
}
