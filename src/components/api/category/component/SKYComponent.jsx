import React from 'react';
import { filterDataByCategory } from '../DataUtils';

// 하늘상태 
/*
  맑음 : 1 
  구름많음 : 3
  흐림 : 4
*/ 

function SKYComponent({responseData}) {
    const skyData = filterDataByCategory(responseData, 'SKY');

    const getSkyConditionText = (code) => {
      switch (code) {
        case '1':
          return '맑음';
        case '3':
          return '구름많음';
        case '4':
          return '흐림';
        default:
          return '알 수 없음';
      }
    };

  return (
    <div>
       <ul>
        {skyData.map((item, index) => (
          <li key={index}>{`하늘상태: ${getSkyConditionText(item.fcstValue)}, 시간: ${item.fcstTime}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default SKYComponent;