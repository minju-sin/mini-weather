import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
    const [responseData, setResponseData] = useState(null);
    const [nx, setNx] = useState('');
    const [ny, setNy] = useState('');
    const url = process.env.REACT_APP_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    // 현재 날짜를 'YYYYMMDD' 형식으로 얻기
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
    const day = String(currentDate.getDate()).padStart(2, '0'); // 일을 두 자리로 패딩
    const baseDate = `${year}${month}${day}`;

    useEffect(() => {
        axios({
            url: `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=1&dataType=JSON&base_date=${baseDate}&base_time=0500&nx=${nx}&ny=${ny}`, 
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
    }, [nx, ny]);
    
    const handleNxChange = (e) => {
      setNx(e.target.value);
  };

  const handleNyChange = (e) => {
      setNy(e.target.value);
  };

    return (
        <div>
            <div>
                <label htmlFor="nx">nx: </label>
                <input type="text" id="nx" value={nx} onChange={handleNxChange} />
            </div>
            <div>
                <label htmlFor="ny">ny: </label>
                <input type="text" id="ny" value={ny} onChange={handleNyChange} />
            </div>
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