import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import { MinMaxTmp } from '../style/TmpStyle.js';

// 최고기온
function TMXComponent({responseData}) {
    const tmxData = filterDataByCategory(responseData, 'TMX');

    // 가장 큰 값을 찾기
    const maxTmnData = tmxData.reduce((max, current) => (current.fcstValue < max.fcstValue ? current : max), tmxData[0]);

    return (
      <div>
        {/* 가장 큰 최고 기온만을 표시 */}
          <MinMaxTmp>최고:{maxTmnData.fcstValue}°</MinMaxTmp>
      </div>
      
    )
}

export default TMXComponent;