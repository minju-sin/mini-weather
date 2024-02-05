import React from 'react';
import { filterDataByCategory } from '../DataUtils';

// 1시간기온 
function TMPComponent({responseData}) {
    const tmpData = filterDataByCategory(responseData, 'TMP');
  return (
    <div>
       <ul>
        {tmpData.map((item, index) => (
          <li key={index}>{`기온: ${item.fcstValue}℃, 시간: ${item.fcstTime}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default TMPComponent;