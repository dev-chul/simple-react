import React, { useState, useEffect } from 'react';

import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from './events';

import request from '@/utils/request';

export default function MyCalendar() {
    const [data, setData] = useState([]);

    const getEventsData = () => {
        request('/events', {}).then(res => {
            setData(res);
            console.log(data);
        });
    };

    useEffect(() => {
        getEventsData();
    }, []);

    return (
        <div>
            <Scheduler events={EVENTS} />
        </div>
    );
}
