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
      <table>
        <tbody>
          <tr>
            {skyData.map((item, index) => (
              <td key={index}>{`${getSkyConditionText(item.fcstValue)}`}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SKYComponent;