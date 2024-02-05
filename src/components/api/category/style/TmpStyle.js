// TmpStyle.js
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDiv = styled.div`
  flex: 1;
  min-width: 70px; 
  text-align: center;
  border-right: 1px solid #ddd; /* 세로선만 표시되도록 수정 */
  padding: 8px;
`;

export const StyledTitie = styled.div`
  flex: 1;
  min-width: 70px; 
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
`;