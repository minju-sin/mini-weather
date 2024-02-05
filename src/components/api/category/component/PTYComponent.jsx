import React from 'react'
import { filterDataByCategory } from '../DataUtils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

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
        <FlexContainer>
            {ptyData.map((item, index) => (
                <div key={index}>{`${getPhyConditionText(item.fcstValue)}`}</div>
            ))}
        </FlexContainer>
        
    )
}

export default PTYComponent