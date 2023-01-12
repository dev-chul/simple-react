import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';

import request from '@/utils/request';
import { setLoading } from '../../modules/loading';
import { setLocation } from '../../modules/location';

export default function Meal() {
    const dispatch = useDispatch();
    const [restaurantList, setRestaurantList] = useState([]);

    const [myAddr, setMyAddr] = useState('');
    const { x, y } = useSelector(state => state.location);

    const { Meta } = Card;

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

    useEffect(() => {
        if (myAddr !== '') {
            console.log(`myAddr: ${myAddr}, ${x}, ${y}`);
            const params = {
                query: '묵동',
                x: x,
                y: y,
            };

            request('/public/getRestaurantList', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            }).then(res => {
                console.log(res.documents);
                setRestaurantList(res.documents);
            });
        }
    }, [myAddr]);

    const onSuccess = geoData => {
        const params = {
            coords: `${geoData.coords.longitude},${geoData.coords.latitude}`,
            x: geoData.coords.longitude,
            y: geoData.coords.latitude,
        };

        dispatch(setLocation(params));

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

    function ulRestaurantList(list) {
        const items = list.map(item => (
            <Card
                style={{ width: 300, marginTop: 16 }}
                loading={false}
                size="small"
                key={item.id}
            >
                <Meta
                    avatar={
                        <Avatar
                            src="./images/icons8-chinese-food-64.png"
                            size={48}
                        />
                    }
                    title={item.place_name}
                    description={item.road_address_name}
                />
                <p style={{ marginBottom: '5px' }}>거리: {item.distance}m</p>
                <p style={{ padding: '0px', margin: '0px' }}>
                    지도:{' '}
                    <a href={item.place_url} target="_blank" rel="noreferrer">
                        보기
                    </a>
                </p>
            </Card>
        ));
        return items;
    }

    return (
        <div>
            {myAddr ? (
                <>
                    <div style={{ textAlign: 'center' }}>
                        {myAddr} 근처 맛집 추천드려요.
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {restaurantList.length > 0 &&
                            ulRestaurantList(restaurantList)}
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
}
