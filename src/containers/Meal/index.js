import { useEffect, useState } from 'react';

export default function Meal() {
    const [geoX, setGeoX] = useState(0);
    const [geoY, setGeoY] = useState(0);

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
        setGeoX(geoData.coords.longitude);
        console.log(geoData.coords.latitude);
        setGeoY(geoData.coords.latitude);
    };

    const onError = err => {
        console.log(err);
    };

    return (
        <div>
            안녕하세요. <br />
            x: {geoX} <br />
            y: {geoY}
        </div>
    );
}
