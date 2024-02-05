import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  flex: 1;
  min-width: 100px; /* Set your desired width here */
  text-align: center;
  border: 1px solid #ddd;
  padding: 8px;
`;

// 1시간기온 
function TMPComponent({responseData}) {
    const tmpData = filterDataByCategory(responseData, 'TMP');

  return (
    <FlexContainer>
        {tmpData.map((item, index) => (
            <StyledDiv key={index}>{item.fcstValue}℃</StyledDiv>
        ))}
    </FlexContainer>
    
  )
}

export default TMPComponent;