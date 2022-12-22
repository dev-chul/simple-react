//import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plusCounter } from '../../modules/counter';

import request, { urlencoded } from '@/utils/request';

import './home.css';

export default function Home() {
    const dispatch = useDispatch();

    const { count } = useSelector(state => state.counter);

    const increse = () => {
        // store에 있는 state 바꾸는 함수 실행
        dispatch(plusCounter());
    };

    const doLogin = () => {
        console.log('doLogin!!');
        const formData = {
            grant_type: 'password',
            username: 'user',
            password: 'pass',
            scope: 'read_profile',
        };

        request(
            '/oauth/token',
            {
                method: 'post',
                headers: {
                    Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded(formData),
            },
            'oauth',
        ).then(res => {
            console.log(res);
        });
    };

    return (
        <div className="homeBody App-header">
            <div id="wrap">
                <div id="icon">
                    <i className="fas fa-user"></i>
                </div>
                <div className="login">
                    <h3 className="active">Sign In</h3>
                    <h3>Sign Up</h3>
                </div>
                <form action="">
                    <input
                        type="text"
                        className="text"
                        name="username"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        className="text"
                        name="password"
                        placeholder="Password"
                    />
                </form>
                <button className="signin" type="button" onClick={increse}>
                    Sign In {count}
                </button>
                <h5>Forget your password?</h5>
            </div>
        </div>
    );
}
