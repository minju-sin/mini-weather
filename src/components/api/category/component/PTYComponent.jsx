import React from 'react'
import { filterDataByCategory } from '../DataUtils';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';



// 강수형태
/*
    없음 : 0    비 : 1     비/눈 : 2
    눈 : 3      소나기 : 4
*/
function PTYComponent({responseData}) {
    const ptyData = filterDataByCategory(responseData, 'PTY');

    const getPhyConditionText = (code) => {
        switch(code){
            case '0':
                return '없음';
            case '1':
                return '🌧️';
            case '2':
                return '🌧️/❄️';
            case '3':
                return '❄️';
            case '4':
                return '🌦️';
            default:
                return '알수없음';
        }
    };

    return (
        <FlexContainer>
            {ptyData.map((item, index) => (
                <StyledDiv key={index}>{`${getPhyConditionText(item.fcstValue)}`}</StyledDiv>
            ))}
        </FlexContainer>
        
    )
}

export default PTYComponent