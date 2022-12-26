import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import { plusCounter } from '../../modules/counter';
import { getToken } from '../../modules/auth';

import request, { urlencoded } from '@/utils/request';

import './home.css';

export default function Home() {
    const dispatch = useDispatch();

    const { count } = useSelector(state => state.counter);
    const { accessToken } = useSelector(state => state.auth);

    const [open, setOpen] = useState(false);

    const increse = () => {
        // store에 있는 state 바꾸는 함수 실행
        dispatch(plusCounter());
        doLogin();
    };

    const doLogin = () => {
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
            dispatch(getToken(res.access_token));
        });
    };

    /*
    if (accessToken !== '') {
        return (
            <div className="homeBody welcome">
                <div className="typing animate"></div>
            </div>
        );
    }
    */

    //if (accessToken === '') {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        variant="filled"
                        severity="error"
                        sx={{ mb: 2 }}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        현재 제공되지 않는 기능입니다!
                    </Alert>
                </Collapse>
            </Box>
            <div className="homeBody">
                <div id="wrap">
                    <div id="icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="login">
                        <h3 className="active">Sign In</h3>
                        <h3
                            onClick={() => {
                                setOpen(true);
                            }}
                            role="presentation"
                        >
                            Sign Up
                        </h3>
                    </div>
                    <form action="">
                        <input
                            type="text"
                            className="text"
                            name="username"
                            placeholder="Username"
                            defaultValue={'user'}
                        />
                        <input
                            type="password"
                            className="text"
                            name="password"
                            placeholder="Password"
                            defaultValue={'pass'}
                        />
                    </form>
                    <button className="signin" type="button" onClick={increse}>
                        Sign In {count}
                    </button>
                    <h5>Forget your password?</h5>
                    <h5>AccessToken : {accessToken}</h5>
                </div>
            </div>
        </>
    );
    //}
}
