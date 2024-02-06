import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';

// 현재 기온 및 현재 시간을 표시하는 컴포넌트
function DegreeComponent({ responseData }) {
  // 'TMP' 카테고리에 대한 데이터 필터링
  const tmpData = filterDataByCategory(responseData, 'TMP');

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
  const closestTimeData = tmpData.reduce((prev, current) =>
    Math.abs(getTimeConditionText(current.fcstTime) - hours) < Math.abs(getTimeConditionText(prev.fcstTime) - hours) ? current : prev
  );

  return (
    <div>
      <p>{`${closestTimeData.fcstValue}℃`}</p>
    </div>
  );
}

export default DegreeComponent;
