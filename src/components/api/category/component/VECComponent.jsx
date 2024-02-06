import React from 'react';
import { filterDataByCategory } from '../DataUtils.js';
import { FlexContainer, StyledSpan } from '../style/TmpStyle.js';

// 풍향
function VECComponent({ responseData }) {
    const vecData = filterDataByCategory(responseData, 'VEC');

    // 풍향 구간별 표현단위 
    const getVecChange = (code) => {
        if (0 <= code && code < 45) {
            return '⬆️';
        } else if (45 <= code && code < 90) {
            return '↗️';
        } else if (90 <= code && code < 135) {
            return '➡️';
        } else if (135 <= code && code < 180) {
            return '↘️';
        } else if (180 <= code && code < 225) {
            return '⬇️';
        } else if (225 <= code && code < 270) {
            return '↙️';
        } else if (270 <= code && code < 315) {
            return '⬅️';
        } else if (315 <= code && code <= 360) {
            return '↖️';
        } else {
            return code;
        }
    };    

    return (
        <div>
            <FlexContainer style={{color: "blue"}}>
                {vecData.map((item, index) => (
                    <StyledSpan key={index}>{`${getVecChange(item.fcstValue)}`}</StyledSpan>
                ))}
            </FlexContainer>
        </div>
    );
}

export default VECComponent;
