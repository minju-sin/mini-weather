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
        <table>
            <tbody>
            <tr>
                {ptyData.map((item, index) => (
                <td key={index}>{`${getPhyConditionText(item.fcstValue)}`}</td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PHYComponent