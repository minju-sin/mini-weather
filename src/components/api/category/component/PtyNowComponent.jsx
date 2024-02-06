// 현재 기상상태 이모지로 나타내기 

import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';

function PtyNowComponent({ responseData }) {
  // 'TMP' 카테고리에 대한 데이터 필터링
  const PtyNowData = filterDataByCategory(responseData, 'PTY');

  const getPhyConditionText = (code) => {
    switch(code){
        case '0':
            return '☀️';
        case '1':
            return '🌧️';
        case '2':
            return '🌧️/❄️';
        case '3':
            return '❄️';
        case '4':
            return '🌦️';
        default:
            return '알수없음';
    }
 };

  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');  // 현재 시간의 시 부분을 가져옴

  const getTimeConditionText = (code) => {
    // 입력 코드에서 앞 두 자리만 추출합니다.
    if (typeof code === 'string' && code.length >= 2) {
      // 앞 두 자리를 추출합니다.
      const firstTwoChars = code.slice(0, 2); // 또는 code.substring(0, 2);
      return firstTwoChars;
    } else {
      // 잘못된 입력이거나 기본 값으로 처리합니다.
      return '잘못된 입력';
    }
  };

  // 현재 시간과 가장 가까운 데이터 찾기
  const closestTimeData = PtyNowData.reduce((prev, current) =>
    Math.abs(getTimeConditionText(current.fcstTime) - hours) < Math.abs(getTimeConditionText(prev.fcstTime) - hours) ? current : prev
  );

  return (
    <div>
      <p>{`${getPhyConditionText(closestTimeData.fcstValue)}`}</p>
    </div>
  );
}

export default PtyNowComponent;
