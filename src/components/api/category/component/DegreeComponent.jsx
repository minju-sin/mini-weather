import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';

// 현재 기온 및 현재 시간을 표시하는 컴포넌트
function DegreeComponent({ responseData }) {
  // 'TMP' 카테고리에 대한 데이터 필터링
  const tmpData = filterDataByCategory(responseData, 'TMP');

  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');  // 현재 시간의 시 부분을 가져옴
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');  // 현재 시간의 분 부분을 가져옴

  // 현재 시간과 가장 가까운 데이터 찾기
  const closestTimeData = tmpData.reduce((prev, current) =>
    Math.abs(current.fcstTime - hours) < Math.abs(prev.fcstTime - hours) ? current : prev
  );

  return (
    <div>
      <div>{`${closestTimeData.fcstValue}℃`}</div>
    </div>
  );
}

export default DegreeComponent;
