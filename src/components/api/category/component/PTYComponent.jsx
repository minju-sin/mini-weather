import React from 'react'
import { filterDataByCategory } from '../DataUtils';

// 강수형태
/*
    없음 : 0    비 : 1     비/눈 : 2
    눈 : 3      소나기 : 4
*/
function PHYComponent({responseData}) {
    const ptyData = filterDataByCategory(responseData, 'PTY');

    const getPhyConditionText = (code) => {
        switch(code){
            case '0':
                return '없음';
            case '1':
                return '비';
            case '2':
                return '비/눈';
            case '3':
                return '눈';
            case '4':
                return '소나기';
            default:
                return '알수없음';
        }
    };

  return (
    <div>
        <ul>
        {ptyData.map((item, index) => (
          <li key={index}>{`강수형태: ${getPhyConditionText(item.fcstValue)}, 시간: ${item.fcstTime}`}</li>
        ))}
        </ul>
    </div>
  )
}

export default PHYComponent