import React from 'react'
import { filterDataByCategory } from '../DataUtils.js';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';



// 습도(%)
function REHComponent({responseData}) {
    const rehData = filterDataByCategory(responseData, 'REH');

    
    return (
        <FlexContainer>
            {rehData.map((item, index) => (
                <StyledDiv key={index}>{`${item.fcstValue}`}</StyledDiv>
            ))}
        </FlexContainer>
        
    )
}

export default REHComponent