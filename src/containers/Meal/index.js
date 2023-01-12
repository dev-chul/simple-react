import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import request from '@/utils/request';
import { setLoading } from '../../modules/loading';

export default function Meal() {
    const dispatch = useDispatch();

    const [myAddr, setMyAddr] = useState('');

    useEffect(() => {
        dispatch(setLoading(true));
        if ('geolocation' in navigator) {
            /* 위치정보 사용 가능 */
            try {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            } catch (e) {
                console.error(e);
                dispatch(setLoading(false));
            }
        } else {
            /* 위치정보 사용 불가능 */
        }
    }, []);

    const onSuccess = geoData => {
        const params = {
            coords: `${geoData.coords.longitude},${geoData.coords.latitude}`,
        };

        request('/public/myGeoLocation', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }).then(res => {
            setMyAddr(res.results[0].region.area3.name);
            dispatch(setLoading(false));
        });
    };

    const onError = err => {
        console.error(err);
    };

    return (
        <div>
            {myAddr ? (
                <div style={{ textAlign: 'center' }}>
                    {myAddr} 근처 맛집 추천드려요.
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
