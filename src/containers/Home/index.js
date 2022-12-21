//import React, { useState, useEffect, useRef } from 'react';

import './home.css';

export default function Home() {
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
                <button className="signin" type="button">
                    Sign In
                </button>
                <h5>Forget your password?</h5>
            </div>
        </div>
    );
}
