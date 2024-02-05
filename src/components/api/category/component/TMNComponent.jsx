import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';

// 최저기온 컴포넌트
function TMNComponent({ responseData }) {
  // 'TMN' 카테고리에 대한 데이터 필터링
  const tmnData = filterDataByCategory(responseData, 'TMN');

  // 가장 작은 값을 찾기
  const minTmnData = tmnData.reduce((min, current) => (current.fcstValue < min.fcstValue ? current : min), tmnData[0]);

  return (
    <div>
      {/* 가장 작은 최저 기온만을 표시 */}
      <div>{minTmnData.fcstValue}℃</div>
    </div>
  );
}

export default TMNComponent;
