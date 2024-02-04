// GPS 현위치 위도, 경도 얻기
// geoLocation API 이용

import { dfs_xy_conv } from './dfs_xy';

export function getGeoLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // 위도 
                const latitude = position.coords.latitude;

                // 경도 
                const longitude = position.coords.longitude;

                // 위경도를 LCC 좌표로 변환
                const lccCoordinates = dfs_xy_conv("toXY", latitude, longitude);

                console.log("LCC 좌표 x:", lccCoordinates.x, "y:", lccCoordinates.y);

                // Promise 성공
                resolve(lccCoordinates);
            },
            (error) => {
                console.error(`위치 정보를 가져오는 데 실패했습니다. 오류 코드: ${error.code}, 오류 메시지: ${error.message}`);

                // Promise 실패
                reject(error);
            }
        );
    });
}
