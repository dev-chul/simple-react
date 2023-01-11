import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLoading } from '../../modules/loading';

export default function Meal() {
    const dispatch = useDispatch();

    const [geoX, setGeoX] = useState(0);
    const [geoY, setGeoY] = useState(0);

    useEffect(() => {
        dispatch(setLoading(true));
        if ('geolocation' in navigator) {
            /* 위치정보 사용 가능 */
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
            /* 위치정보 사용 불가능 */
        }
    }, []);

    const onSuccess = geoData => {
        setGeoX(geoData.coords.longitude);
        setGeoY(geoData.coords.latitude);
        dispatch(setLoading(false));
    };

    const onError = err => {
        console.error(err);
    };

    return (
        <div>
            <br />
            x: {geoX} <br />
            y: {geoY}
        </div>
    );
}
