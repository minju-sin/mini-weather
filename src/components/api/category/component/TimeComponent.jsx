import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import {FlexContainer, StyledDiv} from '../style/TmpStyle.js';


// 시간
function TimeComponent({responseData}) {
    const timeData = filterDataByCategory(responseData, 'TMP');

    const getTimeConditionText = (code) => {
        // 입력 코드에서 앞 두 자리만 추출합니다.
        if (typeof code === 'string' && code.length >= 2) {
          // 앞 두 자리를 추출합니다.
          const firstTwoChars = code.slice(0, 2); // 또는 code.substring(0, 2);
          return firstTwoChars;
        } else {
          // 잘못된 입력이거나 기본 값으로 처리합니다.
          return '잘못된 입력';
        }
      };

  return (
    <FlexContainer>
        {timeData.map((item, index) => (
            <StyledDiv key={index}>{`${getTimeConditionText(item.fcstTime)}시`}</StyledDiv>
        ))}
    </FlexContainer>
    
  )
}

export default TimeComponent;