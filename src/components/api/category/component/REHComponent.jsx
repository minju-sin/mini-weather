import React from 'react'
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledSpan} from '../style/TmpStyle.js';



// 습도(%)
function REHComponent({responseData}) {
    const rehData = filterDataByCategory(responseData, 'REH');

    
    return (
        <FlexContainer>
            {rehData.map((item, index) => (
                <StyledSpan key={index}>{`${item.fcstValue}`}</StyledSpan>
            ))}
        </FlexContainer>
        
    )
}

export default REHComponent