import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
    const [responseData, setResponseData] = useState(null);
    const url = process.env.REACT_APP_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios({
            url: `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240202&base_time=0500&nx=55&ny=127`, 
          method: 'get',
        })
          .then((response) => {
            // axios 요청 성공 -> 요청 결과값이 response.data에 저장됨 
            setResponseData(response.data);
          })
          .catch((error) => {
            // 오류 발생하면 error 메시지 화면에 보여줌 
            console.error('Error fetching data:', error);
          });
    }, []);
    
    return (
        <div>
          {responseData ? (
            // 결과를 화면에 보여줌 
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          ) : (
            // 로딩중일 때 보여줌 
            <p>로딩 중...</p>
          )}
        </div>
      );
    }

export default Weather;