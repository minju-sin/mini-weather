import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCurrentDate } from './dateUtils';
import { getCurrentTime } from './timeUtils';
import { getGeoLocation } from './geoLocation';
import TMPComponent from './category/component/TMPComponent';
import PHYComponent from './category/component/PTYComponent';
import PCPComponent from './category/component/PCPComponent';
import WSDComponent from './category/component/WSDComponent';
import { CurrentLocation, Degree, TMNX, Wrapper, StyledTitie } from './category/style/TmpStyle';
import TimeComponent from './category/component/TimeComponent';
import DegreeComponenet from './category/component/DegreeComponent';
import TMNComponent from './category/component/TMNComponent';
import TMXComponent from './category/component/TMXComponent';
import POPComponent from './category/component/POPComponent';
import REHComponent from './category/component/REHComponent';



function Weather() {
    const [responseData, setResponseData] = useState(null); // 요청 결과
    const [loading, setLoding] = useState(false); // 로딩 상태 
    const [error, setError] = useState(null); // 에러 상태 

    const URL = process.env.REACT_APP_URL; // 요청 url 
    const apiKey = process.env.REACT_APP_API_KEY; // service Key 

    // 현재 날짜를 'YYYYMMDD' 형식으로 얻기 
    const baseDate = getCurrentDate();
    // 현재 시간 얻기 
    const baseTime = getCurrentTime();

    const fetchData = async() => {
      setLoding(true);
      try{
        // GPS로 현재위치를 받아와 위경도 좌표를 기상청 격자로 바꾸는 함수
        const lccCoordinates = await getGeoLocation();

        const response = await axios.get(URL, {
          params:{
            serviceKey: apiKey,
            pageNo: 1,
            numOfRows: 1000,
            dataType: 'JSON',
            base_date: baseDate,
            base_time: baseTime,
            nx: lccCoordinates.x,
            ny: lccCoordinates.y
          }
        });
        setResponseData(response.data);
      }catch(error) {
        setError(error);
      }
      setLoding(false);
    }

    useEffect(() => {
      fetchData();
    }, []);
    
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    if(!responseData) return null;

    return (
      <div>
        <CurrentLocation>현재 위치</CurrentLocation>
        <Degree>
          <DegreeComponenet responseData={responseData} />
        </Degree>

        <TMNX>
          최저/최고
          <TMNComponent responseData={responseData} />
          <TMXComponent responseData={responseData} />
        </TMNX>


        <div>
          <StyledTitie>오늘</StyledTitie>
          <StyledTitie>강수상태</StyledTitie>
          <StyledTitie>기온</StyledTitie>
          <StyledTitie>강수확률(%)</StyledTitie>
          <StyledTitie>강수량(mm)</StyledTitie>
          <StyledTitie>바람(m/s)</StyledTitie>
          <StyledTitie>습도(%)</StyledTitie>
        </div>

        <Wrapper>
          <TimeComponent responseData={responseData} />
          <PHYComponent responseData={responseData} />
          <TMPComponent responseData={responseData} />
          <POPComponent responseData={responseData} />
          <PCPComponent responseData={responseData} />
          <WSDComponent responseData={responseData} />
          <REHComponent responseData={responseData} />
        </Wrapper>
      </div>
    );
}

export default Weather;