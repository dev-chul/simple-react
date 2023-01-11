import { useEffect } from 'react';

export default function Meal() {
    useEffect(() => {
        if ('geolocation' in navigator) {
            /* 위치정보 사용 가능 */
            console.log(1);
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
            /* 위치정보 사용 불가능 */
            console.log(2);
        }
    });

    const onSuccess = geoData => {
        console.log(geoData.coords.longitude);
        console.log(geoData.coords.latitude);
    };

    const onError = err => {
        console.log(err);
    };

    return <div>안녕하세요.</div>;
}
