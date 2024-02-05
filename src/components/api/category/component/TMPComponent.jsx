import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// 1시간기온 
function TMPComponent({responseData}) {
    const tmpData = filterDataByCategory(responseData, 'TMP');

  return (
    <FlexContainer>
        {tmpData.map((item, index) => (
            <div key={index}>{item.fcstValue}℃</div>
        ))}
    </FlexContainer>
    
  )
}

export default TMPComponent;