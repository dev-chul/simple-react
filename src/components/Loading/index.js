// Loading.js
import React from 'react';
import Spinner from '../../../public/images/spinner.gif';

import './Loading.css';

export default function Loading() {
    const stopEvent = e => {
        e.preventDefault();
    };

    return (
        <div
            className="loadingDiv"
            onClick={stopEvent}
            onKeyDown={stopEvent}
            role="none"
        >
            <div className="loadingText">잠시만 기다려 주세요.</div>
            <img src={Spinner} alt="로딩중" width="20%" />
        </div>
    );
}
