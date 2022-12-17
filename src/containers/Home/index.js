import React, { useState, useEffect } from 'react';

import logo from '../../logo.svg?url';
import '../../App.css';

import request from '@/utils/request';

export default function Home() {
    /**
     * useState(변수, setter function);
     * 변수 상태를 변경할 때 사용할 setter function과 함께 설정되어 활용된다.
     */
    const [name, setName] = useState('Noname');

    const sampleRequest = () => {
        request('/hello', {}).then(res => {
            if (res.code === '0000') {
                setName(res.name);
            }
        });
    };

    /**
     * useEffect(function, array);
     * array는 optional한 값이고 array가 존재하면 라이프사이클 중 mount에 실행,
     * array 내 특정변수가 있으면 변수가 변경될 때 실행된다.
     * 만약 array를 설정하지 않으면 Component 상태가 변경될 때 마다 실행된다.
     */
    useEffect(() => {
        sampleRequest();
    }, []);

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This app is developed using React. By. {name}</p>
                <a className="App-link" href="#" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}
