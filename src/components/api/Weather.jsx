import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
    const [responseData, setResponseData] = useState(null); // 요청 결과
    const [loading, setLoding] = useState(false); // 로딩 상태 
    const [error, setError] = useState(null); // 에러 상태 

    const URL = process.env.REACT_APP_URL; // 요청 url 
    const apiKey = process.env.REACT_APP_API_KEY; // service Key 

    // 현재 날짜를 'YYYYMMDD' 형식으로 얻기 20240202
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
    const day = String(currentDate.getDate()).padStart(2, '0'); // 일을 두 자리로 패딩
    const baseDate = `${year}${month}${day}`;

    // 현재 시간 얻기 
    const baseTime = '0500';

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