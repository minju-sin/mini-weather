import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import {FlexContainer, StyledDiv, StyledTitie} from '../style/TmpStyle.js';


// 1시간기온 
function TMPComponent({responseData}) {
    const tmpData = filterDataByCategory(responseData, 'TMP');

  return (
    <FlexContainer>
      <StyledTitie>
        기온(℃)
      </StyledTitie>
        {tmpData.map((item, index) => (
            <StyledDiv key={index}>{item.fcstValue}℃</StyledDiv>
        ))}
    </FlexContainer>
    
  )
}

export default TMPComponent;