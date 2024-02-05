import React from 'react'
import { filterDataByCategory } from '../DataUtils';

// 1시간 강수량 
/*
        범주                        표시
    0.1 ~ 1.0mm 미만	        1.0mm 미만
    1.0mm 이상 30.0mm 미만	    실수값+mm (1.0mm~29.9mm)
    30.0 mm 이상 50.0 mm 미만	30.0~50.0mm
    50.0 mm 이상	            50.0mm 이상

*/
function PCPComponent({responseData}) {
    const pcpData = filterDataByCategory(responseData, 'PCP');

    const getPcpConditionText = (code) => {
        switch(code){
            case (code < 1.0):
                return '1.0mm 미만';
            case (30.0 <= code && code < 50.0):
                return '30.0~50.0mm';
            case (50.0 <= code):
                return '50.0mm 이상';
            default:
                return code;
        }
    };

  return (
    <div>
        <ul>
        {pcpData.map((item, index) => (
          <li key={index}>{`강수량: ${getPcpConditionText(item.fcstValue)}, 시간: ${item.fcstTime}`}</li>
        ))}
        </ul>
    </div>
  )
}

export default PCPComponent