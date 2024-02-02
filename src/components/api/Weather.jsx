// Weather.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getFormattedDate } from './dateUtils'; 

function Weather() {
  const [responseData, setResponseData] = useState(null); // 요청 받은 값을 useState 변수로 받아옴 

  const url = process.env.REACT_APP_URL; // get 요청 받을 api 
  const apiKey = process.env.REACT_APP_API_KEY; // service Key
  const baseDate = getFormattedDate(); // 현재날짜 (년월일)

  useEffect(() => {
    // axios를 통한 get 요청 
    axios({
      url: `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${baseDate}&base_time=0500&nx=55&ny=127`,
      method: 'get',
    })
      //  response(결과)가 성공적으로 끝났을 때 실행됨 
      .then((response) => {
        const categorizedData = categorizeByCategory(response.data);
        setResponseData(categorizedData);
      })
      // 에러 발생 시 실행 됨 
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [baseDate]);

  // 카테고리에 따라 데이터 분류 
  const categorizeByCategory = (data) => {
    const categorizedData = {};
    data.response.body.items.item.forEach((item) => {
      const category = item.category;

      if (!categorizedData[category]) {
        categorizedData[category] = [];
      }

      categorizedData[category].push(item);
    });

    return categorizedData;
  };

  return (
    <div>
      {responseData ? (
        // 데이터가 있으면 아래 내용 출력 
        Object.keys(responseData).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <pre>{JSON.stringify(responseData[category], null, 2)}</pre>
          </div>
        ))
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

export default Weather;
