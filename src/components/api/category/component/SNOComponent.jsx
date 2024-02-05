import React from 'react';
import { filterDataByCategory } from '../DataUtils';

function SNOComponent({ responseData }) {
  const snoData = filterDataByCategory(responseData, 'SNO');

  const getSnoConditionText = (code) => {
    switch (true) {
      case code < 1.0:
        return '1.0cm 미만';
      case code >= 5.0:
        return '5.0cm 이상';
      default:
        return code;
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>산적설</td>
            {snoData.map((item, index) => (
              <td key={index}>{getSnoConditionText(item.fcstValue)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SNOComponent;
