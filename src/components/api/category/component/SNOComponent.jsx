import React from 'react'
import { filterDataByCategory } from '../DataUtils';

// 산적설 
/*
        범주                        표시
    0.1 ~ 1.0cm 미만	        1.0cm 미만
    1.0cm 이상 5.0cm 미만	    실수값+cm
    5.0 cm 이상	                5.0cm 이상
	


*/
function SNOComponent({responseData}) {
    const snoData = filterDataByCategory(responseData, 'SNO');

    const getSnoConditionText = (code) => {
        switch(code){
            case (code < 1.0):
                return '1.0cm 미만';
            case (5.0 <= code):
                return '5.0cm 이상';
            default:
                return code;
        }
    };

  return (
    <div>
        <ul>
        {snoData.map((item, index) => (
          <li key={index}>{`적설량: ${getSnoConditionText(item.fcstValue)}, 시간: ${item.fcstTime}`}</li>
        ))}
        </ul>
    </div>
  )
}

export default SNOComponent