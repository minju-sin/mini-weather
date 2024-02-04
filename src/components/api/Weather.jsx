import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCurrentDate } from './dateUtils';
import { getCurrentTime } from './timeUtils';

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
        const response = await axios.get(URL, {
          params:{
            serviceKey: apiKey,
            pageNo: 1,
            numOfRows: 1000,
            dataType: 'JSON',
            base_date: baseDate,
            base_time: baseTime,
            nx: 55,
            ny: 127
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
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
      </div>
    );
  }

export default Weather;