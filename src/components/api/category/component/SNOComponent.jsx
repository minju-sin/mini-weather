import React from 'react';
import { filterDataByCategory } from '../DataUtils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// 적설량
function SNOComponent({ responseData }) {
  const snoData = filterDataByCategory(responseData, 'SNO');

  const getSnoConditionText = (code) => {
    switch (true) {
      case code < 1.0:
        return '1.0cm 미만';
      case code >= 5.0:
        return '5.0cm 이상';
      default:
        return code;
    }
  };

  return (
    <FlexContainer>
        {snoData.map((item, index) => (
            <div key={index}>{`${getSnoConditionText(item.fcstValue)}`}</div>
        ))}
    </FlexContainer>
    
)
}

export default SNOComponent;
