import React, { useState, useEffect, useRef } from 'react';

import logo from '../../logo.svg?url';
import '../../App.css';

import request from '@/utils/request';
import { AddComma } from '@/utils/StringUtils';

export default function Home() {
    /**
     * useState(변수, setter function);
     * 변수 상태를 변경할 때 사용할 setter function과 함께 설정되어 활용된다.
     */
    const [name, setName] = useState('Noname');
    const [currency, setCurrency] = useState(0);
    const [ticker, setTicker] = useState(0);

    const webSocketUrl = 'wss://stream.binance.com:443/ws/btcusdt@ticker';
    const ws = useRef(null);

    const sampleRequest = () => {
        request('/hello', {}).then(res => {
            if (res.code === '0000') {
                setName(res.name);
            }
        });
    };

    const getCurrency = () => {
        fetch(
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD',
            {},
        )
            .then(data => {
                return data.json();
            })
            .then(data => {
                setCurrency(data[0].basePrice);
            });
    };

    const getCurrencyBTC = () => {
        const value = String(currency * ticker);
        return AddComma(value);
    };

    /**
     * useEffect(function, array);
     * array는 optional한 값이고 array가 존재하면 라이프사이클 중 mount에 실행,
     * array 내 특정변수가 있으면 변수가 변경될 때 실행된다.
     * 만약 array를 설정하지 않으면 Component 상태가 변경될 때 마다 실행된다.
     */
    useEffect(() => {
        sampleRequest();
        getCurrency();

        ws.current = new WebSocket(webSocketUrl);
        ws.current.onopen = () => {
            console.log('onopen');
        };
        ws.current.onclose = error => {
            console.log('onclose');
            console.error(error);
        };
        ws.current.onerror = error => {
            console.log('onerror');
            console.error(error);
        };
        ws.current.onmessage = evt => {
            const data = JSON.parse(evt.data);
            setTicker(data.c);
        };
    }, []);

    //useEffect(() => {
    //console.log(ticker);
    //}, [ticker]);

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This app is made using React. <br /> By. {name}
                </p>
                <a className="App-link" href="#" rel="noopener noreferrer">
                    Learn React
                </a>
                <p>BTC/USDT : {getCurrencyBTC()}</p>
            </header>
        </div>
    );
}
