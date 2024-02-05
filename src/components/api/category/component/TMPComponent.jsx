import React from 'react';
import { filterDataByCategory } from '../DataUtils';

// 1시간기온 
function TMPComponent({responseData}) {
    const tmpData = filterDataByCategory(responseData, 'TMP');

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>기온(℃)</td>
            {tmpData.map((item, index) => (
              <td key={index}>{item.fcstValue}℃</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default TMPComponent;