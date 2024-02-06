import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import { FlexContainer, StyledSpan } from '../style/TmpStyle.js';

// 1시간기온 
function TMPComponent({ responseData }) {
    const tmpData = filterDataByCategory(responseData, 'TMP');

    return (
        <div>
            <FlexContainer>
                {tmpData.map((item, index) => (
                    <StyledSpan key={index}>{item.fcstValue}°</StyledSpan>
                ))}
            </FlexContainer>
        </div>
    );
}

export default TMPComponent;
